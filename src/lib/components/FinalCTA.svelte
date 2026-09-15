<script lang="ts">
  import { onMount } from 'svelte';

  let visible = $state(false);
  let el: HTMLElement;

  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) visible = true; },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  });
</script>

<section bind:this={el} class="relative py-32 md:py-40 overflow-hidden gradient-hero">
  <div class="absolute inset-0 gradient-mesh opacity-80"></div>

  <div class="container-main relative z-10">
    <div class="max-w-[720px] mx-auto text-center {visible ? 'fade-in visible' : 'fade-in'}">
      <h2 class="heading-display text-display-hero mb-6 md:text-display-hero-mobile">
        Run the business you have. Build for the business you're becoming.
      </h2>
      <p class="body-text max-w-[480px] mx-auto mb-10 text-[18px]">
        Bring your commerce and operations together with JamiCore.
      </p>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
        <a href="#contact" class="btn-primary text-[15px] px-8 py-3.5">Explore the platform</a>
        <a href="#contact" class="btn-secondary text-[15px] px-8 py-3.5">Talk to JamiCore</a>
      </div>
    </div>

    <div class="max-w-[800px] mx-auto {visible ? 'fade-in visible' : 'fade-in'}" style="transition-delay: 0.2s">
      <div class="glass-card p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div class="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="4" y="4" width="7" height="7" rx="2" stroke="white" stroke-width="1.5"/>
                <rect x="13" y="4" width="7" height="7" rx="2" stroke="white" stroke-width="1.5"/>
                <rect x="4" y="13" width="7" height="7" rx="2" stroke="white" stroke-width="1.5"/>
                <line x1="16.5" y1="13" x2="16.5" y2="20" stroke="white" stroke-width="1.5"/>
                <line x1="13" y1="16.5" x2="20" y2="16.5" stroke="white" stroke-width="1.5"/>
              </svg>
            </div>
            <p class="text-[12px] font-bold uppercase tracking-widest text-amber-700 mb-1">Connected</p>
            <p class="text-[14px] text-text-secondary">All workflows in one place</p>
          </div>
          <div>
            <div class="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-brand-gold to-amber-500 flex items-center justify-center shadow-lg">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="8" stroke="white" stroke-width="1.5"/>
                <path d="M12 7v5l3.5 2" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </div>
            <p class="text-[12px] font-bold uppercase tracking-widest text-brand-gold mb-1">Operating</p>
            <p class="text-[14px] text-text-secondary">Run daily activity seamlessly</p>
          </div>
          <div>
            <div class="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center shadow-lg">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 17l4-4 3.5 3.5 6-8" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <p class="text-[12px] font-bold uppercase tracking-widest text-amber-700 mb-1">Growing</p>
            <p class="text-[14px] text-text-secondary">Scale with the same foundation</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
