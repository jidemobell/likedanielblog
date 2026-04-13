<script>
  import { onMount } from 'svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import '$lib/css/blog-theme.css';

  let { children } = $props();

  onMount(async () => {
    await import('bootstrap/dist/js/bootstrap.bundle.min.js');
  });
</script>

<svelte:head>
  <title>LikeDaniel – Walking in Faith</title>
</svelte:head>

<Navbar />

<main>
  {@render children()}
</main>

<Footer />
