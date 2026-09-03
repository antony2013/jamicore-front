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

  const items = [
    { product: 'Classic Essentials Pack', sku: 'CEP-001', stock: 142, warehouse: 'Main Warehouse', outlet: 'Store A' },
    { product: 'Seasonal Menu Items', sku: 'SMI-012', stock: 89, warehouse: 'Main Warehouse', outlet: 'Store A' },
    { product: 'Premium Gift Bundle', sku: 'PGB-007', stock: 34, warehouse: 'Storage B', outlet: 'Store B' },
    { product: 'Daily Specials Set', sku: 'DSS-003', stock: 201, warehouse: 'Main Warehouse', outlet: 'Restaurant' },
  ];
</script>

<section bind:this={el} class="section-padding bg-gradient-to-b from-white to-canvas">
  <div class="container-main">
    <div class="text-center mb-16 {visible ? 'fade-in visible' : 'fade-in'}">
      <p class="eyebrow mb-5">INVENTORY</p>
      <h2 class="heading-xl max-w-[640px] mx-auto mb-5">Keep products and inventory part of the same workflow.</h2>
      <p class="body-text max-w-[520px] mx-auto">
        Manage inventory as part of your wider product and operational ecosystem.
      </p>
    </div>

    <div class="max-w-[960px] mx-auto {visible ? 'fade-in visible' : 'fade-in'}" style="transition-delay: 0.1s">
      <div class="product-ui">
        <div class="product-ui-header">
          <span class="text-[12px] font-semibold text-text-muted">Inventory Management</span>
        </div>
        <div class="product-ui-body">
          <div class="overflow-x-auto">
            <table class="w-full text-[13px]">
              <thead>
                <tr class="border-b border-border-subtle">
                  <th class="text-left py-2.5 px-3 font-bold uppercase tracking-wider text-text-muted text-[11px]">Product</th>
                  <th class="text-left py-2.5 px-3 font-bold uppercase tracking-wider text-text-muted text-[11px]">Stock</th>
                  <th class="text-left py-2.5 px-3 font-bold uppercase tracking-wider text-text-muted text-[11px]">Warehouse</th>
                  <th class="text-left py-2.5 px-3 font-bold uppercase tracking-wider text-text-muted text-[11px]">Outlet</th>
                </tr>
              </thead>
              <tbody>
                {#each items as item}
                  <tr class="border-b border-border-subtle last:border-0 hover:bg-canvas/50 transition-colors">
                    <td class="py-3 px-3">
                      <p class="font-semibold text-text-primary">{item.product}</p>
                      <p class="text-[11px] text-text-muted font-mono">{item.sku}</p>
                    </td>
                    <td class="py-3 px-3">
                      <p class="font-bold text-text-primary">{item.stock}</p>
                      <p class="text-[11px] text-text-muted">units</p>
                    </td>
                    <td class="py-3 px-3 text-text-secondary">{item.warehouse}</td>
                    <td class="py-3 px-3 text-text-secondary">{item.outlet}</td>
                  </tr>
                {/each}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
