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

  const beforeItems = [
    'Separate Online Store',
    'Separate POS system',
    'Scattered customer data',
    'Disconnected kitchen ops',
  ];

  const afterItems = [
    'Connected product information',
    'Connected customer context',
    'Connected order flow',
    'Connected operations',
  ];
</script>

<section bind:this={el} class="section-padding">
  <div class="container-main">
    <div class="text-center mb-16 {visible ? 'fade-in visible' : 'fade-in'}">
      <p class="eyebrow mb-5">THE SHIFT</p>
      <h2 class="heading-xl max-w-[640px] mx-auto mb-5">
        Your business is connected. Your software should be too.
      </h2>
      <p class="body-text max-w-[520px] mx-auto">
        Managing disconnected tools creates extra work, blind spots, and duplicated information.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch max-w-[1000px] mx-auto">
      <div class="card {visible ? 'fade-in visible' : 'fade-in'}" style="transition-delay: 0.1s">
        <div class="flex items-center gap-2 mb-5">
          <div class="w-8 h-8 rounded-lg bg-surface flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><rect x="2" y="2" width="12" height="12" rx="2" stroke="#667085" stroke-width="1.3"/></svg>
          </div>
          <div>
            <p class="text-[11px] font-bold uppercase tracking-widest text-text-muted">Before JamiCore</p>
          </div>
        </div>
        <p class="text-[14px] font-semibold text-text-secondary mb-4">Separate tools</p>
        <ul class="space-y-3">
          {#each beforeItems as item}
            <li class="flex items-start gap-3 text-[14px] text-text-secondary">
              <div class="w-5 h-5 rounded-full bg-surface flex items-center justify-center shrink-0 mt-0.5">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><line x1="3" y1="3" x2="7" y2="7" stroke="#667085" stroke-width="1.3" stroke-linecap="round"/><line x1="7" y1="3" x2="3" y2="7" stroke="#667085" stroke-width="1.3" stroke-linecap="round"/></svg>
              </div>
              {item}
            </li>
          {/each}
        </ul>
      </div>

      <div class="flex items-center justify-center {visible ? 'fade-in visible' : 'fade-in'}" style="transition-delay: 0.2s">
        <div class="relative">
          <div class="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-green to-emerald-600 flex items-center justify-center shadow-lg shadow-brand-green/20">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M14 5l7 7-7 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-white border-2 border-brand-green flex items-center justify-center shadow-sm">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><circle cx="5" cy="5" r="2.5" fill="#008060"/></svg>
          </div>
        </div>
      </div>

      <div class="card {visible ? 'fade-in visible' : 'fade-in'}" style="transition-delay: 0.3s">
        <div class="flex items-center gap-2 mb-5">
          <div class="w-8 h-8 rounded-lg bg-brand-green/10 flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="#008060" stroke-width="1.3"/><path d="M5.5 8l2 2 3.5-3.5" stroke="#008060" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>
          <div>
            <p class="text-[11px] font-bold uppercase tracking-widest text-brand-green">With JamiCore</p>
          </div>
        </div>
        <p class="text-[14px] font-semibold text-text-secondary mb-4">Connected workflows</p>
        <ul class="space-y-3">
          {#each afterItems as item}
            <li class="flex items-start gap-3 text-[14px] text-text-secondary">
              <div class="w-5 h-5 rounded-full bg-brand-green/10 flex items-center justify-center shrink-0 mt-0.5">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M3 5l2 2 2.5-2.5" stroke="#008060" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </div>
              {item}
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</section>
