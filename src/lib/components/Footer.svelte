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
                <a href={link.href} class="text-[14px] text-text-muted hover:text-brand-gold-dark transition-colors">{link.label}</a>
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>

    <div class="border-t border-border-subtle pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <div class="flex items-center gap-2.5">
        <a href="/" class="flex items-center gap-2.5">
        <img src="/logo.png" alt="JamiCore" class="h-7 w-auto rounded ring-1 ring-border-subtle" />
      </a>
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
