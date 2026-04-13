<script>
  import { onMount } from 'svelte';
  let { repo, repoId, category, categoryId, mapping = 'pathname', strict = '0', reactionsEnabled = '1', emitMetadata = '0', inputPosition = 'top', theme = 'light', lang = 'en' } = $props();

  let ref;

  onMount(() => {
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.setAttribute('data-repo', repo);
    script.setAttribute('data-repo-id', repoId);
    script.setAttribute('data-category', category);
    script.setAttribute('data-category-id', categoryId);
    script.setAttribute('data-mapping', mapping);
    script.setAttribute('data-strict', strict);
    script.setAttribute('data-reactions-enabled', reactionsEnabled);
    script.setAttribute('data-emit-metadata', emitMetadata);
    script.setAttribute('data-input-position', inputPosition);
    script.setAttribute('data-theme', theme);
    script.setAttribute('data-lang', lang);
    ref.appendChild(script);
  });
</script>

<div bind:this={ref} class="giscus-wrapper"></div>
