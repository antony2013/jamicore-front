<script lang="ts">
  import { onMount } from 'svelte';

  let visible = $state(false);
  let el: HTMLElement;

  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) visible = true; },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  });

  const modules = [
    { num: '01', title: 'Online Store', desc: 'Sell online and manage your customer-facing commerce experience.', color: 'from-blue-500 to-blue-600', iconColor: 'text-blue-500' },
    { num: '02', title: 'POS', desc: 'Handle everyday selling from a focused point-of-sale experience.', color: 'from-violet-500 to-purple-600', iconColor: 'text-violet-500' },
    { num: '03', title: 'Orders', desc: 'Keep orders connected to the workflows around them.', color: 'from-amber-500 to-orange-500', iconColor: 'text-amber-500' },
    { num: '04', title: 'Customers', desc: 'Keep customer information connected to business activity.', color: 'from-pink-500 to-rose-500', iconColor: 'text-pink-500' },
    { num: '05', title: 'Inventory', desc: 'Manage products, stock, and inventory workflows.', color: 'from-teal-500 to-emerald-500', iconColor: 'text-teal-500' },
    { num: '06', title: 'Restaurant', desc: 'Connect menus, tables, food orders, and kitchen workflows.', color: 'from-brand-green to-emerald-600', iconColor: 'text-brand-green' }
  ];
</script>

<section bind:this={el} id="platform" class="section-padding gradient-mesh">
  <div class="container-main">
    <div class="text-center mb-16 {visible ? 'fade-in visible' : 'fade-in'}">
      <p class="eyebrow mb-5">THE OPERATING ENVIRONMENT</p>
      <h2 class="heading-xl max-w-[600px] mx-auto mb-5">
        Everything your business runs on, connected.
      </h2>
      <p class="body-text max-w-[520px] mx-auto">
        JamiCore brings the core parts of your business into one connected platform.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1000px] mx-auto">
      {#each modules as mod, i}
        <div class="card group cursor-default {visible ? 'fade-in visible' : 'fade-in'}" style="transition-delay: {0.06 * i}s">
          <div class="w-12 h-12 rounded-xl bg-gradient-to-br {mod.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
            {#if mod.num === '01'}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="3" y="3" width="14" height="14" rx="3" stroke="white" stroke-width="1.5"/><line x1="3" y1="7" x2="17" y2="7" stroke="white" stroke-width="1.5"/></svg>
            {:else if mod.num === '02'}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="4" y="2" width="12" height="16" rx="3" stroke="white" stroke-width="1.5"/><circle cx="10" cy="14" r="1.2" fill="white"/></svg>
            {:else if mod.num === '03'}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 4h10l1 11H4L5 4z" stroke="white" stroke-width="1.5" stroke-linejoin="round"/></svg>
            {:else if mod.num === '04'}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="6" r="3.5" stroke="white" stroke-width="1.5"/><path d="M4 18c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="white" stroke-width="1.5"/></svg>
            {:else if mod.num === '05'}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="3" y="3" width="6" height="6" rx="1.5" stroke="white" stroke-width="1.5"/><rect x="11" y="3" width="6" height="6" rx="1.5" stroke="white" stroke-width="1.5"/><rect x="3" y="11" width="6" height="6" rx="1.5" stroke="white" stroke-width="1.5"/><rect x="11" y="11" width="6" height="6" rx="1.5" stroke="white" stroke-width="1.5"/></svg>
            {:else}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 6h12v9H4z" stroke="white" stroke-width="1.5" stroke-linejoin="round"/><line x1="4" y1="9" x2="16" y2="9" stroke="white" stroke-width="1.5"/></svg>
            {/if}
          </div>
          <p class="text-[11px] font-bold uppercase tracking-widest text-text-muted mb-1.5">{mod.num}</p>
          <h3 class="text-[17px] font-bold text-text-primary mb-1.5">{mod.title}</h3>
          <p class="text-[14px] text-text-muted leading-relaxed">{mod.desc}</p>
        </div>
      {/each}
    </div>
  </div>
</section>
