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

<section bind:this={el} class="section-padding bg-gradient-to-b from-white to-canvas">
  <div class="container-main">
    <div class="text-center mb-16 {visible ? 'fade-in visible' : 'fade-in'}">
      <p class="eyebrow mb-5">POS & RESTAURANT</p>
      <h2 class="heading-xl max-w-[640px] mx-auto mb-5">From order to operation, keep the workflow connected.</h2>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
      <div class="card {visible ? 'fade-in visible' : 'fade-in'}" style="transition-delay: 0.1s">
        <div class="flex items-center gap-2 mb-6">
          <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M4 5h8v6H4z" stroke="white" stroke-width="1.3" stroke-linejoin="round"/></svg>
          </div>
          <p class="text-[13px] font-bold text-text-primary">Restaurant</p>
        </div>
        <div class="space-y-2.5">
          {#each [
            { step: '01', title: 'Menu', detail: 'Browse categories, items, and modifiers' },
            { step: '02', title: 'Order', detail: 'Build order with table and special instructions' },
            { step: '03', title: 'Kitchen', detail: 'Kitchen receives ticket with prep details' },
            { step: '04', title: 'Service', detail: 'Table status tracked through completion' }
          ] as item, i}
            <div class="flex items-center gap-3 p-3 bg-canvas rounded-xl border border-border-subtle hover:border-brand-gold/30 transition-colors">
              <div class="w-8 h-8 rounded-lg bg-brand-gold/10 flex items-center justify-center shrink-0">
                <span class="text-[11px] font-bold text-brand-gold">{item.step}</span>
              </div>
              <div class="flex-1">
                <span class="text-[13px] font-semibold text-text-primary">{item.title}</span>
                <p class="text-[12px] text-text-muted mt-0.5">{item.detail}</p>
              </div>
              {#if i < 3}
                <svg class="w-4 h-4 text-brand-gold/50 shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 3v10M5 10l3 3 3-3"/></svg>
              {/if}
            </div>
          {/each}
        </div>
        <div class="mt-4 p-3 bg-canvas rounded-xl border border-border-subtle">
          <div class="flex gap-2 flex-wrap">
            {#each ['Menu items', 'Table', 'Order', 'Kitchen ticket', 'Order status'] as tag}
              <span class="text-[11px] px-2.5 py-1 bg-white rounded-full border border-border-subtle text-text-muted font-medium">{tag}</span>
            {/each}
          </div>
        </div>
      </div>

      <div class="card {visible ? 'fade-in visible' : 'fade-in'}" style="transition-delay: 0.2s">
        <div class="flex items-center gap-2 mb-6">
          <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><rect x="3" y="2" width="10" height="12" rx="2" stroke="white" stroke-width="1.3"/></svg>
          </div>
          <p class="text-[13px] font-bold text-text-primary">POS</p>
        </div>
        <div class="product-ui mb-4">
          <div class="product-ui-header">
            <span class="text-[12px] font-semibold text-text-muted">Point of Sale</span>
          </div>
          <div class="product-ui-body">
            <div class="grid grid-cols-3 gap-2 mb-3">
              {#each ['Espresso', 'Cappuccino', 'Latte', 'Pastry', 'Sandwich', 'Juice'] as item, i}
                <button class="p-2.5 bg-canvas rounded-xl border border-border-subtle text-center hover:border-brand-gold/40 hover:bg-brand-gold/5 transition-all">
                  <p class="text-[12px] font-semibold text-text-primary">{item}</p>
                  <p class="text-[10px] text-text-muted mt-0.5">{['$3.50', '$4.00', '$4.50', '$2.75', '$6.50', '$3.25'][i]}</p>
                </button>
              {/each}
            </div>
            <div class="border-t border-border-subtle pt-3">
              <div class="flex items-center justify-between mb-2">
                <span class="text-[12px] text-text-muted">Current order</span>
                <span class="text-[14px] font-bold text-text-primary">$12.00</span>
              </div>
              <button class="w-full py-2.5 bg-brand-gold text-white text-[13px] font-semibold rounded-xl hover:bg-brand-gold/90 transition-colors">Complete Order</button>
            </div>
          </div>
        </div>
        <div class="p-3 bg-canvas rounded-xl border border-border-subtle">
          <div class="flex gap-2 flex-wrap">
            {#each ['Products', 'Cart', 'Order', 'Customer', 'Payment record'] as tag}
              <span class="text-[11px] px-2.5 py-1 bg-white rounded-full border border-border-subtle text-text-muted font-medium">{tag}</span>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
