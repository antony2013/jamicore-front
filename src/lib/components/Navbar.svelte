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
      <img src="/logo.png" alt="JamiCore" class="h-9 w-auto rounded-md ring-1 ring-border-subtle shadow-sm" />
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
