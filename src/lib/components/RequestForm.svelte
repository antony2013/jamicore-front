<script lang="ts">
  import { onMount } from 'svelte';

  // Paste your deployed Google Apps Script Web App URL here.
  // Setup: see google-apps-script.gs at the repo root.
  const SHEETS_ENDPOINT = 'https://script.google.com/macros/s/AKfycbwmTcu5zPeKjK7v0tQNwYQiRtKU-HfnzQqQ7aBXMC86ENC12nN84PK8CZCrWw_NRWFy/exec';

  const businessTypes = [
    'Online Store',
    'Retail',
    'Restaurant',
    'Multi-outlet Business',
    'Other',
  ];

  let visible = $state(false);
  let el: HTMLElement;

  let fullName = $state('');
  let email = $state('');
  let phone = $state('');
  let company = $state('');
  let businessType = $state(businessTypes[0]);
  let message = $state('');
  let status: 'idle' | 'sending' | 'success' | 'error' = $state('idle');

  let fullNameInput: HTMLInputElement;
  let emailInput: HTMLInputElement;
  let messageInput: HTMLTextAreaElement;

  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) visible = true; },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  });

  function resetForm() {
    fullName = '';
    email = '';
    phone = '';
    company = '';
    businessType = businessTypes[0];
    message = '';
  }

  async function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    if (status === 'sending') return;
    if (!fullName.trim() || !email.trim() || !message.trim()) {
      status = 'error';
      return;
    }
    status = 'sending';

    const payload = {
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      company: company.trim(),
      businessType,
      message: message.trim(),
      submittedAt: new Date().toISOString(),
    };

    try {
      const res = await fetch(SHEETS_ENDPOINT, {
        method: 'POST',
        redirect: 'follow',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
      status = 'success';
      resetForm();
    } catch (err) {
      console.error(err);
      status = 'error';
    }
  }
</script>

<section bind:this={el} id="contact" class="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-canvas to-white">
  <div class="container-main relative z-10">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
      <div class="max-w-[440px] {visible ? 'fade-in visible' : 'fade-in'}">
        <p class="eyebrow mb-5">REQUEST ACCESS</p>
        <h2 class="heading-display text-display-hero mb-6 md:text-display-hero-mobile">
          Tell us about your business.
        </h2>
        <p class="body-text mb-8">
          Share a few details and the JamiCore team will reach out to walk you through the platform.
        </p>

        <div class="space-y-4">
          <div class="flex items-center gap-3 text-[14px] text-text-secondary">
            <div class="w-6 h-6 rounded-full flex items-center justify-center shrink-0 bg-brand-gold/15">
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M3 8l4 4 6-7" stroke="#B45309" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
            Personalised demo tailored to your workflows
          </div>
          <div class="flex items-center gap-3 text-[14px] text-text-secondary">
            <div class="w-6 h-6 rounded-full flex items-center justify-center shrink-0 bg-brand-gold/15">
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M3 8l4 4 6-7" stroke="#B45309" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
            No commitment — explore before you decide
          </div>
          <div class="flex items-center gap-3 text-[14px] text-text-secondary">
            <div class="w-6 h-6 rounded-full flex items-center justify-center shrink-0 bg-brand-gold/15">
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M3 8l4 4 6-7" stroke="#B45309" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
            Your details are stored securely in our records
          </div>
        </div>
      </div>

      <div class="card shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]"
        class:fade-in={visible} class:visible={visible}>
        <form onsubmit={handleSubmit} class="space-y-5">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label for="rf-fullname" class="block text-[13px] font-semibold text-text-primary mb-1.5">Full name *</label>
              <input bind:this={fullNameInput} bind:value={fullName} id="rf-fullname" type="text" placeholder="Your name"
                required
                class="w-full px-4 py-3 rounded-xl border border-border-strong bg-white text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-brand-gold transition-all" />
            </div>
            <div>
              <label for="rf-company" class="block text-[13px] font-semibold text-text-primary mb-1.5">Company</label>
              <input bind:value={company} id="rf-company" type="text" placeholder="Your business name"
                class="w-full px-4 py-3 rounded-xl border border-border-strong bg-white text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-brand-gold transition-all" />
            </div>
          </div>

          <div>
            <label for="rf-email" class="block text-[13px] font-semibold text-text-primary mb-1.5">Work email *</label>
            <input bind:this={emailInput} bind:value={email} id="rf-email" type="email" placeholder="you@company.com"
              required
              class="w-full px-4 py-3 rounded-xl border border-border-strong bg-white text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-brand-gold transition-all" />
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label for="rf-phone" class="block text-[13px] font-semibold text-text-primary mb-1.5">Phone</label>
              <input bind:value={phone} id="rf-phone" type="tel" placeholder="+1 555 000 0000"
                class="w-full px-4 py-3 rounded-xl border border-border-strong bg-white text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-brand-gold transition-all" />
            </div>
            <div>
              <label for="rf-business" class="block text-[13px] font-semibold text-text-primary mb-1.5">Business type</label>
              <select bind:value={businessType} id="rf-business"
                class="w-full px-4 py-3 rounded-xl border border-border-strong bg-white text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-brand-gold transition-all">
                {#each businessTypes as t}
                  <option value={t}>{t}</option>
                {/each}
              </select>
            </div>
          </div>

          <div>
            <label for="rf-message" class="block text-[13px] font-semibold text-text-primary mb-1.5">How can we help? *</label>
            <textarea bind:this={messageInput} bind:value={message} id="rf-message" rows="4"
              placeholder="Tell us about your store, operations, or the workflows you want to connect"
              required
              class="w-full px-4 py-3 rounded-xl border border-border-strong bg-white text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-brand-gold transition-all resize-none"></textarea>
          </div>

          <div class="pt-2">
            <button type="submit" class="btn-primary w-full text-[15px]"
              disabled={status === 'sending'} style="opacity: {status === 'sending' ? 0.7 : 1}">
              {#if status === 'sending'}
                Sending…
              {:else}
                Request access
              {/if}
            </button>

            {#if status === 'success'}
              <p class="mt-4 text-[14px] font-medium text-amber-700 flex items-center gap-2 justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="#B45309" stroke-width="1.3"/><path d="M5.5 8l2 2 3.5-3.5" stroke="#B45309" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
                Thanks — your request has been saved. We'll be in touch.
              </p>
            {:else if status === 'error'}
              <p class="mt-4 text-[14px] font-medium text-red-700 flex items-center gap-2 justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="#B91C1C" stroke-width="1.3"/><path d="M5.5 5.5l5 5M10.5 5.5l-5 5" stroke="#B91C1C" stroke-width="1.3" stroke-linecap="round"/></svg>
                We couldn't save your request. Please check your details or try again.
              </p>
            {/if}
          </div>
        </form>
      </div>
    </div>
  </div>
</section>