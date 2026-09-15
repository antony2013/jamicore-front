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

  const principles = [
    {
      title: 'CONNECTED',
      desc: 'Keep related business workflows within the same ecosystem.',
      gradient: 'from-amber-400 to-amber-600'
    },
    {
      title: 'PRACTICAL',
      desc: 'Focus on the operations businesses actually need to manage.',
      gradient: 'from-brand-gold to-amber-500'
    },
    {
      title: 'STRUCTURED',
      desc: 'Organize products, orders, customers, outlets, teams, and operations.',
      gradient: 'from-amber-600 to-amber-800'
    },
    {
      title: 'FLEXIBLE',
      desc: 'Support different business models and workflows.',
      gradient: 'from-amber-500 to-amber-600'
    },
    {
      title: 'EVOLVING',
      desc: 'Create room for the platform to grow with the business.',
      gradient: 'from-amber-600 to-amber-800'
    }
  ];
</script>

<section bind:this={el} class="section-padding">
  <div class="container-main">
    <div class="max-w-[1000px] mx-auto">
      <div class="text-center mb-20 {visible ? 'fade-in visible' : 'fade-in'}">
        <p class="eyebrow mb-5">WHY JAMICORE</p>
        <h2 class="heading-xl max-w-[640px] mx-auto mb-5">Your business shouldn't have to work around its software.</h2>
        <p class="body-text max-w-[480px] mx-auto">Business is connected by nature. Software should reflect that.</p>
      </div>

      <div class="space-y-0">
        {#each principles as p, i}
          <div class="border-t border-border-subtle py-10 {visible ? 'fade-in visible' : 'fade-in'}" style="transition-delay: {0.08 * i}s">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div class="md:col-span-1">
                <div class="w-10 h-10 rounded-xl bg-gradient-to-br {p.gradient} flex items-center justify-center shadow-md">
                  <span class="text-[13px] font-bold text-white">0{i + 1}</span>
                </div>
              </div>
              <div class="md:col-span-3">
                <h3 class="text-[22px] font-bold text-text-primary tracking-tight">{p.title}</h3>
              </div>
              <div class="md:col-span-8">
                <p class="text-[16px] text-text-secondary leading-relaxed max-w-lg">{p.desc}</p>
              </div>
            </div>
          </div>
        {/each}
        <div class="border-t border-border-subtle"></div>
      </div>
    </div>
  </div>
</section>
