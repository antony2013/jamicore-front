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

  const activityItems = [
    { action: 'Placed order #ORD-1042', time: '2 hours ago', color: 'bg-brand-green' },
    { action: 'Visited Online Store', time: 'Yesterday', color: 'bg-sapphire' },
    { action: 'Updated delivery address', time: '3 days ago', color: 'bg-violet' },
    { action: 'Applied discount code', time: 'Last week', color: 'bg-amber-500' },
  ];
</script>

<section bind:this={el} class="section-padding">
  <div class="container-main">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
      <div class="order-2 lg:order-1 {visible ? 'fade-in visible' : 'fade-in'}" style="transition-delay: 0.15s">
        <div class="product-ui">
          <div class="product-ui-header">
            <span class="text-[12px] font-semibold text-text-muted">Customer Profile</span>
          </div>
          <div class="product-ui-body">
            <div class="flex items-start gap-4 mb-6">
              <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-green to-emerald-600 flex items-center justify-center shrink-0 shadow-lg shadow-brand-green/20">
                <span class="text-[18px] font-bold text-white">SK</span>
              </div>
              <div>
                <h4 class="text-[15px] font-bold text-text-primary">Sara Khalil</h4>
                <p class="text-[13px] text-text-muted">sara@example.com</p>
                <div class="flex items-center gap-2 mt-2">
                  <span class="badge-green text-[10px]">Regular</span>
                  <span class="text-[11px] text-text-muted">Since Jan 2024</span>
                </div>
              </div>
            </div>

            <div class="border-t border-border-subtle pt-4 mb-5">
              <p class="text-[11px] font-bold uppercase tracking-wider text-text-muted mb-3">Recent Activity</p>
              <div class="space-y-2.5">
                {#each activityItems as item}
                  <div class="flex items-center justify-between py-2 border-b border-border-subtle/50 last:border-0">
                    <div class="flex items-center gap-2.5">
                      <div class="w-2 h-2 rounded-full {item.color}"></div>
                      <span class="text-[13px] text-text-secondary">{item.action}</span>
                    </div>
                    <span class="text-[11px] text-text-muted">{item.time}</span>
                  </div>
                {/each}
              </div>
            </div>

            <div class="grid grid-cols-3 gap-2">
              <div class="p-3 bg-canvas rounded-xl border border-border-subtle text-center">
                <p class="text-[22px] font-bold text-text-primary">12</p>
                <p class="text-[10px] font-semibold text-text-muted uppercase tracking-wider">Orders</p>
              </div>
              <div class="p-3 bg-canvas rounded-xl border border-border-subtle text-center">
                <p class="text-[22px] font-bold text-text-primary">3</p>
                <p class="text-[10px] font-semibold text-text-muted uppercase tracking-wider">Wishlist</p>
              </div>
              <div class="p-3 bg-canvas rounded-xl border border-border-subtle text-center">
                <p class="text-[22px] font-bold text-text-primary">2</p>
                <p class="text-[10px] font-semibold text-text-muted uppercase tracking-wider">Returns</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="order-1 lg:order-2 {visible ? 'fade-in visible' : 'fade-in'}">
        <p class="eyebrow mb-5">CUSTOMERS</p>
        <h2 class="heading-xl mb-5">Know the customer behind the transaction.</h2>
        <p class="body-text mb-8 max-w-[440px]">
          JamiCore connects customer information with the business workflows around them, helping your team build a clearer picture of the customer relationship.
        </p>
        <div class="flex items-center gap-3 text-[13px] text-text-muted">
          <span class="font-medium">Customer</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M5 8h6M9 5l3 3-3 3" stroke="#008060" stroke-width="1.5" stroke-linecap="round"/></svg>
          <span class="font-medium">Orders</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M5 8h6M9 5l3 3-3 3" stroke="#008060" stroke-width="1.5" stroke-linecap="round"/></svg>
          <span class="font-medium">Activity</span>
        </div>
      </div>
    </div>
  </div>
</section>
