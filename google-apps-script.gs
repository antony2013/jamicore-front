/**
 * JamiCore — Request form → Google Sheets bridge
 * =====================================================
 * Deploy this as a Google Apps Script Web App so the request
 * form on the site can save submissions into a Google Sheet.
 *
 * SETUP (one time, ~3 minutes):
 *   1. Open the Google Sheet that should store requests.
 *   2. Go to Extensions > Apps Script (opens the script editor
 *      bound to this spreadsheet).
 *   3. Replace any default content with the code in this file.
 *   4. Click Save, then Deploy > New deployment.
 *   5. Configure:
 *        - Description:  "JamiCore request form"
 *        - Execute as:   "Me" (your Google account)
 *        - Who has access: "Anyone"
 *        (Anyone is required — the site posts without auth.
 *         The sheet itself stays private to you.)
 *   6. Click Deploy, authorize, and copy the Web app URL
 *      (https://script.google.com/macros/s/.../exec).
 *   7. Paste that URL into the SHEETS_ENDPOINT constant in
 *      src/lib/components/RequestForm.svelte.
 *
 * On every submit, a row is appended to a "Requests" sheet
 * (created automatically the first time).
 *
 * Headers are written on the first run:
 *   Timestamp | Full Name | Email | Phone | Company |
 *   Business Type | Message
 */

function doPost(e) {
  var sheet = getOrCreateSheet_('Requests');
  ensureHeaders_(sheet);

  var data = {};
  try {
    data = JSON.parse(e.postData.contents);
  } catch (err) {
    data = e.parameter;
  }

  var email = String(data.email || '').trim().toLowerCase();

  // Dedupe: skip the insert if the same email already exists (column 3 = Email).
  if (email && isDuplicate_(sheet, email)) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'duplicate' }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  sheet.appendRow([
    new Date(),
    data.fullName || '',
    data.email || '',
    data.phone || '',
    data.company || '',
    data.businessType || '',
    data.message || ''
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function isDuplicate_(sheet, email) {
  var lastRow = sheet.getLastRow();
  if (lastRow < 2) return false;
  var existing = sheet.getRange(2, 3, lastRow - 1, 1).getValues();
  for (var i = 0; i < existing.length; i++) {
    if (String(existing[i][0] || '').trim().toLowerCase() === email) {
      return true;
    }
  }
  return false;
}

function getOrCreateSheet_(name) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
  }
  return sheet;
}

function ensureHeaders_(sheet) {
  if (sheet.getLastRow() > 0) return;
  sheet.appendRow([
    'Timestamp',
    'Full Name',
    'Email',
    'Phone',
    'Company',
    'Business Type',
    'Message'
  ]);
  sheet.getRange(1, 1, 1, 7).setFontWeight('bold');
}