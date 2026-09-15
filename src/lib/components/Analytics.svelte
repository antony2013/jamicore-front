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

  const metrics = [
    { label: 'Orders Today', value: '48', sub: 'across all channels', icon: 'bg-amber-600' },
    { label: 'Products Active', value: '126', sub: 'in catalog', icon: 'bg-amber-600' },
    { label: 'Customers', value: '1,240', sub: 'in database', icon: 'bg-brand-gold' },
    { label: 'Inventory Items', value: '340', sub: 'tracked', icon: 'bg-amber-500' },
  ];

  const barData = [
    { label: 'Mon', orders: 42, height: '60%' },
    { label: 'Tue', orders: 58, height: '82%' },
    { label: 'Wed', orders: 35, height: '50%' },
    { label: 'Thu', orders: 67, height: '95%' },
    { label: 'Fri', orders: 52, height: '74%' },
    { label: 'Sat', orders: 45, height: '64%' },
    { label: 'Sun', orders: 28, height: '40%' },
  ];
</script>

<section bind:this={el} class="section-padding">
  <div class="container-main">
    <div class="text-center mb-16 {visible ? 'fade-in visible' : 'fade-in'}">
      <p class="eyebrow mb-5">VISIBILITY</p>
      <h2 class="heading-xl max-w-[600px] mx-auto mb-5">See the business behind the activity.</h2>
      <p class="body-text max-w-[520px] mx-auto">
        Use the information available across your business to understand activity, workflows, and operations.
      </p>
    </div>

    <div class="max-w-[960px] mx-auto {visible ? 'fade-in visible' : 'fade-in'}" style="transition-delay: 0.1s">
      <div class="product-ui">
        <div class="product-ui-header">
          <span class="text-[12px] font-semibold text-text-muted">Analytics Overview</span>
          <div class="ml-auto flex gap-1">
            {#each ['Week', 'Month', 'Quarter'] as period, i}
              <button class="px-3 py-1.5 text-[11px] font-semibold rounded-full transition-all {i === 0 ? 'bg-deep-dark text-white' : 'text-text-muted hover:bg-surface'}">{period}</button>
            {/each}
          </div>
        </div>
        <div class="product-ui-body">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {#each metrics as m}
              <div class="p-4 bg-canvas rounded-xl border border-border-subtle">
                <div class="flex items-center gap-2 mb-2">
                  <div class="w-2 h-2 rounded-full {m.icon}"></div>
                  <p class="text-[10px] font-bold uppercase tracking-wider text-text-muted">{m.label}</p>
                </div>
                <p class="text-[24px] font-bold text-text-primary">{m.value}</p>
                <p class="text-[11px] text-text-muted mt-0.5">{m.sub}</p>
              </div>
            {/each}
          </div>

          <div class="p-5 bg-canvas rounded-xl border border-border-subtle">
            <p class="text-[11px] font-bold uppercase tracking-wider text-text-muted mb-4">Orders this week</p>
            <div class="flex items-end gap-2 h-36">
              {#each barData as bar}
                <div class="flex-1 flex flex-col items-center gap-1.5">
                  <div class="w-full rounded-t-lg bg-gradient-to-t from-brand-gold to-amber-400" style="height: {bar.height};"></div>
                  <span class="text-[10px] font-medium text-text-muted">{bar.label}</span>
                </div>
              {/each}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
