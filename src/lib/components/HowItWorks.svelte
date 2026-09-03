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

  const steps = [
    { num: '01', title: 'Set up', desc: 'Configure the core structure of your business.', gradient: 'from-blue-500 to-indigo-500' },
    { num: '02', title: 'Connect', desc: 'Bring related workflows together.', gradient: 'from-brand-green to-emerald-500' },
    { num: '03', title: 'Operate', desc: 'Manage daily business activity from one platform.', gradient: 'from-violet to-purple-600' },
    { num: '04', title: 'Understand', desc: 'Use connected business information for clearer visibility.', gradient: 'from-amber-500 to-orange-500' },
    { num: '05', title: 'Grow', desc: 'Bring additional workflows into the same foundation.', gradient: 'from-pink-500 to-rose-500' },
  ];
</script>

<section bind:this={el} id="how-it-works" class="section-padding bg-gradient-to-b from-canvas to-white">
  <div class="container-main">
    <div class="text-center mb-16 {visible ? 'fade-in visible' : 'fade-in'}">
      <p class="eyebrow mb-5">HOW IT WORKS</p>
      <h2 class="heading-xl max-w-[600px] mx-auto mb-5">Connect the business. Then let the workflows move.</h2>
    </div>

    <div class="max-w-[800px] mx-auto relative">
      <div class="hidden md:block absolute left-[23px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-500 via-brand-green to-pink-500 rounded-full"></div>

      <div class="space-y-0">
        {#each steps as step, i}
          <div class="relative flex items-start gap-6 py-7 {visible ? 'fade-in visible' : 'fade-in'}" style="transition-delay: {0.1 * i}s">
            <div class="relative z-10 shrink-0">
              <div class="w-12 h-12 rounded-2xl bg-gradient-to-br {step.gradient} flex items-center justify-center shadow-lg">
                <span class="text-[12px] font-bold text-white">{step.num}</span>
              </div>
            </div>
            <div class="pt-2">
              <h3 class="text-[20px] font-bold text-text-primary mb-1">{step.title}</h3>
              <p class="text-[15px] text-text-secondary max-w-md">{step.desc}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
