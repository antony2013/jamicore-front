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

<section bind:this={el} class="section-padding bg-gradient-to-b from-canvas to-white">
  <div class="container-main">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
      <div class="{visible ? 'fade-in visible' : 'fade-in'}">
        <p class="eyebrow mb-5">COMMERCE</p>
        <h2 class="heading-xl mb-5">Sell without creating another data silo.</h2>
        <p class="body-text mb-8 max-w-[440px]">
          Manage products, orders, customers, and storefront operations from a connected business platform.
        </p>
        <a href="#contact" class="btn-primary">Explore commerce</a>
      </div>

      <div class="{visible ? 'fade-in visible' : 'fade-in'}" style="transition-delay: 0.15s">
        <div class="product-ui">
          <div class="product-ui-header">
            <div class="flex gap-2">
              <div class="w-3 h-3 rounded-full bg-red-400/80"></div>
              <div class="w-3 h-3 rounded-full bg-amber-400/80"></div>
              <div class="w-3 h-3 rounded-full bg-amber-400/80"></div>
            </div>
            <span class="text-[12px] font-semibold text-text-muted ml-3">Online Store</span>
          </div>
          <div class="product-ui-body">
            <div class="flex items-center justify-between mb-4">
              <span class="text-[13px] font-bold text-text-primary">Products</span>
              <span class="text-[11px] font-semibold text-brand-gold uppercase tracking-wider">Storefront</span>
            </div>
            <div class="space-y-2.5">
              {#each [{ name: 'Classic Essentials', items: 24, status: 'Active' }, { name: 'Seasonal Collection', items: 18, status: 'Active' }, { name: 'Premium Selection', items: 12, status: 'Draft' }] as product}
                <div class="flex items-center gap-3 p-3 bg-canvas rounded-xl border border-border-subtle hover:border-brand-gold/30 transition-colors">
                  <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-surface to-border-subtle flex items-center justify-center shrink-0">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="3" y="3" width="10" height="10" rx="2" stroke="#667085" stroke-width="1.2"/></svg>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-[13px] font-semibold text-text-primary truncate">{product.name}</p>
                    <p class="text-[11px] text-text-muted">{product.items} items</p>
                  </div>
                  <span class="badge-green text-[10px]">{product.status}</span>
                </div>
              {/each}
            </div>
            <div class="mt-5 pt-4 border-t border-border-subtle flex items-center gap-5">
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 rounded-full bg-brand-gold"></div>
                <span class="text-[11px] font-medium text-text-muted">Storefront live</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 rounded-full bg-amber-700"></div>
                <span class="text-[11px] font-medium text-text-muted">54 products</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
