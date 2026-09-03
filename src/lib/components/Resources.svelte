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

  const resources = [
    { tag: 'Guide', title: 'Why connected business software matters as you grow', gradient: 'from-brand-green to-emerald-500' },
    { tag: 'Product', title: 'Introducing the new Merchant Dashboard', gradient: 'from-blue-500 to-indigo-500' },
    { tag: 'Ecommerce', title: 'Building your first online store with JamiCore', gradient: 'from-violet to-purple-600' },
    { tag: 'Restaurant', title: 'From kitchen to customer: connected restaurant workflows', gradient: 'from-amber-500 to-orange-500' },
  ];

  const categories = ['Guides', 'Product Education', 'Ecommerce', 'Retail', 'Restaurants', 'Comparisons'];
</script>

<section bind:this={el} id="resources" class="section-padding bg-gradient-to-b from-white to-canvas">
  <div class="container-main">
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 {visible ? 'fade-in visible' : 'fade-in'}">
      <div>
        <p class="eyebrow mb-5">RESOURCES</p>
        <h2 class="heading-xl">Learn how to build a more connected business.</h2>
      </div>
      <a href="#resources" class="btn-secondary shrink-0">Explore Resources</a>
    </div>

    <div class="flex flex-wrap gap-2 mb-10 {visible ? 'fade-in visible' : 'fade-in'}" style="transition-delay: 0.08s">
      {#each categories as cat}
        <span class="px-4 py-2 bg-white rounded-full border border-border-subtle text-[13px] font-semibold text-text-muted hover:border-brand-green hover:text-brand-green hover:bg-brand-green/5 cursor-pointer transition-all">{cat}</span>
      {/each}
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[1000px] mx-auto {visible ? 'fade-in visible' : 'fade-in'}" style="transition-delay: 0.15s">
      {#each resources as r}
        <a href="#resources" class="card group block no-underline">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br {r.gradient} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
            <span class="text-[10px] font-bold text-white uppercase">{r.tag.slice(0, 2)}</span>
          </div>
          <h3 class="text-[16px] font-bold text-text-primary group-hover:text-brand-green transition-colors">{r.title}</h3>
          <div class="mt-4 flex items-center gap-1.5 text-[13px] font-semibold text-brand-green">
            Read article
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4.5 3l3 3-3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>
