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

  const solutions = [
    { title: 'Ecommerce', desc: 'Manage your online store, products, and customer experience from one connected platform.', gradient: 'from-amber-400 to-amber-600' },
    { title: 'Retail', desc: 'Connect in-store operations with online commerce and customer data.', gradient: 'from-brand-gold to-amber-500' },
    { title: 'Restaurants', desc: 'Connect menus, tables, orders, kitchen workflows, and customer service.', gradient: 'from-amber-500 to-amber-600' },
    { title: 'Multi-outlet Businesses', desc: 'Manage multiple locations from a single connected platform.', gradient: 'from-amber-600 to-amber-800' },
    { title: 'Growing Businesses', desc: 'Bring additional workflows into the same foundation as you scale.', gradient: 'from-amber-600 to-amber-800' }
  ];
</script>

<section bind:this={el} id="solutions" class="section-padding">
  <div class="container-main">
    <div class="text-center mb-16 {visible ? 'fade-in visible' : 'fade-in'}">
      <h2 class="heading-xl max-w-[600px] mx-auto mb-5">Built for the way different businesses operate.</h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1000px] mx-auto">
      {#each solutions as s, i}
        <a href="#contact" class="card group block no-underline {visible ? 'fade-in visible' : 'fade-in'}" style="transition-delay: {0.06 * i}s">
          <div class="w-12 h-12 rounded-xl bg-gradient-to-br {s.gradient} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
            {#if s.title === 'Ecommerce'}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="3" y="4" width="14" height="12" rx="2" stroke="white" stroke-width="1.3"/><line x1="3" y1="8" x2="17" y2="8" stroke="white" stroke-width="1.3"/></svg>
            {:else if s.title === 'Retail'}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 6h12l-1 10H5z" stroke="white" stroke-width="1.3" stroke-linejoin="round"/></svg>
            {:else if s.title === 'Restaurants'}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 5h12v9H4z" stroke="white" stroke-width="1.3" stroke-linejoin="round"/><line x1="4" y1="9" x2="16" y2="9" stroke="white" stroke-width="1.3"/></svg>
            {:else if s.title === 'Multi-outlet Businesses'}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="3" y="3" width="6" height="6" rx="1.5" stroke="white" stroke-width="1.3"/><rect x="11" y="3" width="6" height="6" rx="1.5" stroke="white" stroke-width="1.3"/><rect x="7" y="11" width="6" height="6" rx="1.5" stroke="white" stroke-width="1.3"/></svg>
            {:else}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 14l4-4 3 3 5-7" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            {/if}
          </div>
          <h3 class="text-[17px] font-bold text-text-primary mb-2">{s.title}</h3>
          <p class="text-[14px] text-text-muted leading-relaxed mb-4">{s.desc}</p>
          <span class="text-[13px] font-semibold text-brand-gold flex items-center gap-1 group-hover:gap-2 transition-all">
            Explore
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4.5 3l3 3-3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
          </span>
        </a>
      {/each}
    </div>
  </div>
</section>
