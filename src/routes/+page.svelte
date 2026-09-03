<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Shift from '$lib/components/Shift.svelte';
  import OperatingEnvironment from '$lib/components/OperatingEnvironment.svelte';
  import Commerce from '$lib/components/Commerce.svelte';
  import Operations from '$lib/components/Operations.svelte';
  import PosRestaurant from '$lib/components/PosRestaurant.svelte';
  import Customers from '$lib/components/Customers.svelte';
  import Inventory from '$lib/components/Inventory.svelte';
  import Analytics from '$lib/components/Analytics.svelte';
  import WhyJamiCore from '$lib/components/WhyJamiCore.svelte';
  import HowItWorks from '$lib/components/HowItWorks.svelte';
  import Solutions from '$lib/components/Solutions.svelte';
  import Resources from '$lib/components/Resources.svelte';
  import FinalCTA from '$lib/components/FinalCTA.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
  <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&family=Hanken+Grotesk:wght@300..800&display=swap" rel="stylesheet">
  <title>JamiCore — One connected business platform</title>
  <meta name="description" content="JamiCore brings commerce, operations, customers, and business workflows together in one connected platform.">
</svelte:head>

<Navbar />

<main>
  <Hero />
  <Shift />
  <OperatingEnvironment />
  <Commerce />
  <Operations />
  <PosRestaurant />
  <Customers />
  <Inventory />
  <Analytics />
  <WhyJamiCore />
  <HowItWorks />
  <Solutions />
  <Resources />
  <FinalCTA />
</main>

<Footer />
