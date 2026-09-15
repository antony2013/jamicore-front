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

  const tabs = ['Products', 'Orders', 'Customers', 'Inventory', 'Outlets'];
  let activeTab = $state('Products');

  const productData = [
    { name: 'Classic Essentials Pack', sku: 'CEP-001', stock: 142, status: 'Active' },
    { name: 'Seasonal Menu Items', sku: 'SMI-012', stock: 89, status: 'Active' },
    { name: 'Premium Gift Bundle', sku: 'PGB-007', stock: 34, status: 'Low Stock' },
    { name: 'Daily Specials Set', sku: 'DSS-003', stock: 201, status: 'Active' },
  ];

  const orderData = [
    { id: '#ORD-1042', customer: 'Sara K.', items: 3, status: 'Completed' },
    { id: '#ORD-1043', customer: 'Ahmed M.', items: 1, status: 'In Progress' },
    { id: '#ORD-1044', customer: 'Layla H.', items: 5, status: 'Processing' },
  ];
</script>

<section bind:this={el} class="section-padding">
  <div class="container-main">
    <div class="text-center mb-16 {visible ? 'fade-in visible' : 'fade-in'}">
      <p class="eyebrow mb-5">OPERATIONS</p>
      <h2 class="heading-xl max-w-[600px] mx-auto mb-5">Run operations with less friction.</h2>
      <p class="body-text max-w-[520px] mx-auto">
        Products, orders, customers, inventory, outlets, staff, and workflows belong to the same business ecosystem.
      </p>
    </div>

    <div class="max-w-[960px] mx-auto {visible ? 'fade-in visible' : 'fade-in'}" style="transition-delay: 0.1s">
      <div class="product-ui">
        <div class="product-ui-header">
          <div class="flex gap-2">
            <div class="w-3 h-3 rounded-full bg-red-400/80"></div>
            <div class="w-3 h-3 rounded-full bg-amber-400/80"></div>
            <div class="w-3 h-3 rounded-full bg-amber-400/80"></div>
          </div>
          <span class="text-[12px] font-semibold text-text-muted ml-3">Merchant Dashboard</span>
        </div>
        <div class="product-ui-body">
          <div class="flex gap-1.5 mb-6 overflow-x-auto pb-1">
            {#each tabs as tab}
              <button
                onclick={() => activeTab = tab}
                class="px-4 py-2 text-[13px] font-semibold rounded-full whitespace-nowrap transition-all
                  {activeTab === tab ? 'bg-deep-dark text-white shadow-md' : 'bg-canvas text-text-muted hover:bg-surface border border-border-subtle'}"
              >
                {tab}
              </button>
            {/each}
          </div>

          {#if activeTab === 'Products'}
            <div class="overflow-x-auto">
              <table class="w-full text-[13px]">
                <thead>
                  <tr class="border-b border-border-subtle">
                    <th class="text-left py-2.5 px-3 font-bold uppercase tracking-wider text-text-muted text-[11px]">Product</th>
                    <th class="text-left py-2.5 px-3 font-bold uppercase tracking-wider text-text-muted text-[11px]">SKU</th>
                    <th class="text-left py-2.5 px-3 font-bold uppercase tracking-wider text-text-muted text-[11px]">Stock</th>
                    <th class="text-left py-2.5 px-3 font-bold uppercase tracking-wider text-text-muted text-[11px]">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {#each productData as item}
                    <tr class="border-b border-border-subtle last:border-0 hover:bg-canvas/50 transition-colors">
                      <td class="py-3 px-3 font-semibold text-text-primary">{item.name}</td>
                      <td class="py-3 px-3 text-text-muted font-mono text-[12px]">{item.sku}</td>
                      <td class="py-3 px-3 text-text-secondary font-medium">{item.stock}</td>
                      <td class="py-3 px-3">
                        <span class="badge-green text-[10px] {item.status === 'Low Stock' ? '!bg-amber-50 !text-amber-700 !border-amber-200' : ''}">{item.status}</span>
                      </td>
                    </tr>
                  {/each}
                </tbody>
              </table>
            </div>
          {:else if activeTab === 'Orders'}
            <div class="space-y-2">
              {#each orderData as order}
                <div class="flex items-center justify-between p-3 bg-canvas rounded-xl border border-border-subtle">
                  <div class="flex items-center gap-3">
                    <span class="text-[13px] font-bold text-text-primary">{order.id}</span>
                    <span class="text-[13px] text-text-muted">{order.customer}</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <span class="text-[11px] text-text-muted">{order.items} items</span>
                    <span class="badge-green text-[10px] {order.status === 'In Progress' ? '!bg-blue-50 !text-blue-700 !border-blue-200' : order.status === 'Processing' ? '!bg-amber-50 !text-amber-700 !border-amber-200' : ''}">{order.status}</span>
                  </div>
                </div>
              {/each}
            </div>
          {:else}
            <div class="py-10 text-center">
              <p class="text-[14px] text-text-muted">Select a tab to view operations data</p>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>
</section>
