<script lang="ts">
  const footerColumns = [
    {
      title: 'Platform',
      links: [
        { label: 'Platform Overview', href: '#platform' },
        { label: 'Online Store', href: '#platform' },
        { label: 'Merchant Dashboard', href: '#platform' },
        { label: 'POS', href: '#platform' },
        { label: 'Orders', href: '#platform' },
        { label: 'Customers', href: '#platform' },
        { label: 'Inventory', href: '#platform' },
        { label: 'Restaurant', href: '#platform' },
        { label: 'Kitchen', href: '#platform' },
        { label: 'Analytics', href: '#platform' },
      ]
    },
    {
      title: 'Solutions',
      links: [
        { label: 'Ecommerce', href: '#solutions' },
        { label: 'Retail', href: '#solutions' },
        { label: 'Restaurants', href: '#solutions' },
        { label: 'Multi-outlet', href: '#solutions' },
        { label: 'Growing Businesses', href: '#solutions' },
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'Why JamiCore', href: '#' },
        { label: 'How It Works', href: '#how-it-works' },
        { label: 'About', href: '#' },
        { label: 'Contact', href: '#contact' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Guides', href: '#resources' },
        { label: 'Product Updates', href: '#resources' },
        { label: 'FAQ', href: '#' },
        { label: 'Comparisons', href: '#resources' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy', href: '#' },
        { label: 'Terms', href: '#' },
        { label: 'Cookies', href: '#' },
        { label: 'Security', href: '#' },
      ]
    }
  ];
</script>

<footer class="border-t border-border-subtle bg-white">
  <div class="container-main py-16 md:py-20">
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
      {#each footerColumns as col}
        <div>
          <h4 class="text-[12px] font-bold uppercase tracking-widest text-text-primary mb-5">{col.title}</h4>
          <ul class="space-y-3">
            {#each col.links as link}
              <li>
                <a href={link.href} class="text-[14px] text-text-muted hover:text-brand-green transition-colors">{link.label}</a>
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>

    <div class="border-t border-border-subtle pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <div class="flex items-center gap-2.5">
        <svg viewBox="0 0 310 148" class="h-6 w-auto">
          <g fill="#0C111D">
            <path d="M 43 14 H 72 V 87 C 72 101.5 68 111 59.5 116 C 51 121 38 122.5 24 122 C 16.5 121.7 8.5 119.5 3 116.5 L 9.5 95 C 13.5 97.5 18 98.8 23 99 C 28.5 99 33.5 98 37 95 C 41 91.5 43 85.5 43 78 Z" />
            <path d="M 125 43.5 V 60 C 120 46 109 41.5 97 41.5 C 80 41.5 68 53.5 68 73 C 68 92.5 80 104.5 97 104.5 C 109 104.5 120 99.5 125 86 V 103 H 151 V 43.5 Z M 125 73 C 125 82.5 118.5 87.5 110.5 87.5 C 102.5 87.5 96 82.5 96 73 C 96 63.5 102.5 58.5 110.5 58.5 C 118.5 58.5 125 63.5 125 73 Z" />
            <path d="M 157 43.5 H 182 V 57.5 C 187 47 197 41.5 208 41.5 C 217.5 41.5 225 46 229 55 C 235 46 244.5 41.5 255.5 41.5 C 269 41.5 277 50 277 66 V 103 H 252 V 70 C 252 62.5 248.5 58.5 242.5 58.5 C 236.5 58.5 232.5 62.5 232.5 70 V 103 H 207.5 V 70 C 207.5 62.5 204 58.5 198 58.5 C 192 58.5 188 62.5 188 70 V 103 H 157 Z" />
            <rect x="283" y="43.5" width="26" height="59.5" />
          </g>
          <rect x="283" y="4.5" width="26" height="32" fill="#9D7125" />
          <g fill="#1a1a1a" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-weight="700" font-size="24.5" letter-spacing="9px">
            <text x="204" y="134">CORE</text>
          </g>
        </svg>
      </div>
      <p class="text-[14px] text-text-muted">One connected core for modern business.</p>
      <div class="flex items-center gap-3">
        <button class="text-[13px] font-medium text-text-muted hover:text-text-primary transition-colors">English</button>
        <span class="text-border-subtle">|</span>
        <button class="text-[13px] font-medium text-text-muted hover:text-text-primary transition-colors">العربية</button>
      </div>
    </div>
  </div>
</footer>
