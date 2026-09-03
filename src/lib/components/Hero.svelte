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

<section bind:this={el} class="relative pt-[140px] pb-24 md:pt-[160px] md:pb-32 overflow-hidden gradient-hero">
  <div class="absolute inset-0 gradient-mesh opacity-60"></div>

  <div class="container-main relative z-10">
    <div class="max-w-[720px] mx-auto text-center mb-16 {visible ? 'fade-in visible' : 'fade-in'}">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 bg-white/60 backdrop-blur-sm rounded-full border border-border-subtle/50 mb-8">
        <div class="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse"></div>
        <span class="eyebrow">CONNECTED BUSINESS PLATFORM</span>
      </div>

      <h1 class="heading-display text-display-hero mb-6 md:text-display-hero-mobile">
        One connected system to run your business.
      </h1>

      <p class="body-text max-w-[560px] mx-auto mb-10 text-[18px]">
        JamiCore brings commerce, operations, customers, and business workflows together in one connected platform — so your business can move faster without stitching together disconnected tools.
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="#platform" class="btn-primary text-[15px] px-8 py-3.5">Explore the platform</a>
        <a href="#how-it-works" class="btn-secondary text-[15px] px-8 py-3.5">See how it works</a>
      </div>
    </div>

    <div class="max-w-[900px] mx-auto {visible ? 'fade-in visible' : 'fade-in'}" style="transition-delay: 0.2s">
      <div class="glass-card p-6 md:p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]">
        <div class="flex flex-wrap items-center justify-center gap-3 md:gap-3.5">
          {#each ['Online Store', 'POS', 'Orders', 'Customers', 'Inventory', 'Restaurant'] as item, i}
            <div class="flex items-center gap-2.5 px-4 py-2.5 bg-white/80 rounded-xl border border-white/60 shadow-sm hover:shadow-md hover:border-brand-green/30 transition-all cursor-default">
              <div class="w-7 h-7 rounded-lg {i === 5 ? 'bg-brand-green/10' : 'bg-surface'} flex items-center justify-center">
                {#if item === 'Online Store'}
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><rect x="2" y="2" width="12" height="12" rx="2" stroke="#667085" stroke-width="1.3"/><line x1="2" y1="6" x2="14" y2="6" stroke="#667085" stroke-width="1.3"/></svg>
                {:else if item === 'POS'}
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><rect x="3" y="2" width="10" height="12" rx="2" stroke="#667085" stroke-width="1.3"/><circle cx="8" cy="11" r="1" fill="#667085"/></svg>
                {:else if item === 'Orders'}
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M4 3h8l1 9H3L4 3z" stroke="#667085" stroke-width="1.3" stroke-linejoin="round"/></svg>
                {:else if item === 'Customers'}
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5" r="3" stroke="#667085" stroke-width="1.3"/><path d="M3 14c0-2.8 2.2-5 5-5s5 2.2 5 5" stroke="#667085" stroke-width="1.3"/></svg>
                {:else if item === 'Inventory'}
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><rect x="2" y="2" width="5" height="5" rx="1" stroke="#667085" stroke-width="1.3"/><rect x="9" y="2" width="5" height="5" rx="1" stroke="#667085" stroke-width="1.3"/><rect x="2" y="9" width="5" height="5" rx="1" stroke="#667085" stroke-width="1.3"/><rect x="9" y="9" width="5" height="5" rx="1" stroke="#667085" stroke-width="1.3"/></svg>
                {:else}
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 4h10v8H3z" stroke="#008060" stroke-width="1.3" stroke-linejoin="round"/><line x1="3" y1="7" x2="13" y2="7" stroke="#008060" stroke-width="1.3"/></svg>
                {/if}
              </div>
              <span class="text-[13px] font-semibold text-text-secondary">{item}</span>
            </div>
          {/each}
        </div>
        <div class="mt-5 flex items-center justify-center gap-3">
          <div class="h-px flex-1 bg-gradient-to-r from-transparent via-border-subtle to-transparent"></div>
          <div class="flex items-center gap-1.5 px-3 py-1 bg-brand-green/5 rounded-full">
            <div class="w-1.5 h-1.5 rounded-full bg-brand-green"></div>
            <span class="text-[10px] font-bold uppercase tracking-wider text-brand-green">Connected</span>
          </div>
          <div class="h-px flex-1 bg-gradient-to-r from-transparent via-border-subtle to-transparent"></div>
        </div>
      </div>
    </div>
  </div>
</section>
