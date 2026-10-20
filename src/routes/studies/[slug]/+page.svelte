<script>
  import PostView from '$lib/components/PostView.svelte';

  let { data } = $props();
</script>

<svelte:head>
  <title>{data.metadata.title} | LikeDaniel Studies</title>
  <meta name="description" content={data.metadata.excerpt ?? data.metadata.title} />
</svelte:head>

<PostView
  metadata={data.metadata}
  content={data.content}
  related={data.related}
  basePath="/studies"
  categoryHref="/studies"
  backLabel="All Studies"
/>
