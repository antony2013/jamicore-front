<script lang="ts">
  let lang: 'en' | 'ar' = $state('en');
  let mobileMenuOpen = $state(false);
  let scrolled = $state(false);

  function toggleLang() {
    lang = lang === 'en' ? 'ar' : 'en';
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }

  function toggleMobile() {
    mobileMenuOpen = !mobileMenuOpen;
  }

  $effect(() => {
    const handler = () => { scrolled = window.scrollY > 20; };
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  });

  const navLinks = [
    { label: 'Platform', href: '#platform' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Resources', href: '#resources' },
    { label: 'Company', href: '#company' },
  ];
</script>

<nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-border-subtle/60 shadow-[0_1px_3px_rgba(0,0,0,0.04)]' : 'bg-transparent'}">
  <div class="container-main flex items-center justify-between h-[72px]">
    <a href="/" class="flex items-center gap-2.5 text-text-primary">
      <svg viewBox="0 0 310 148" class="h-7 w-auto">
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
    </a>

    <div class="hidden md:flex items-center gap-1">
      {#each navLinks as link}
        <a href={link.href} class="px-4 py-2 text-[14px] font-medium text-text-secondary hover:text-text-primary hover:bg-surface rounded-full transition-all">{link.label}</a>
      {/each}
    </div>

    <div class="hidden md:flex items-center gap-3">
      <button onclick={toggleLang} class="btn-ghost text-[13px]">{lang === 'en' ? 'العربية' : 'English'}</button>
      <a href="#contact" class="btn-primary text-[14px] py-2.5 px-6">Get Started</a>
    </div>

    <button onclick={toggleMobile} class="md:hidden p-2 text-text-secondary hover:bg-surface rounded-lg transition-colors" aria-label="Toggle menu">
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
        {#if mobileMenuOpen}
          <line x1="5" y1="5" x2="17" y2="17"/>
          <line x1="17" y1="5" x2="5" y2="17"/>
        {:else}
          <line x1="4" y1="7" x2="18" y2="7"/>
          <line x1="4" y1="11" x2="18" y2="11"/>
          <line x1="4" y1="15" x2="18" y2="15"/>
        {/if}
      </svg>
    </button>
  </div>

  {#if mobileMenuOpen}
    <div class="md:hidden bg-white/95 backdrop-blur-xl border-t border-border-subtle px-5 py-6 space-y-1 shadow-lg">
      {#each navLinks as link}
        <a href={link.href} onclick={() => mobileMenuOpen = false} class="block px-4 py-3 text-[15px] font-medium text-text-secondary hover:text-text-primary hover:bg-surface rounded-xl transition-all">{link.label}</a>
      {/each}
      <div class="pt-4 mt-2 border-t border-border-subtle flex flex-col gap-3">
        <button onclick={toggleLang} class="btn-ghost text-[14px] w-full">{lang === 'en' ? 'العربية' : 'English'}</button>
        <a href="#contact" onclick={() => mobileMenuOpen = false} class="btn-primary text-[14px] w-full">Get Started</a>
      </div>
    </div>
  {/if}
</nav>
