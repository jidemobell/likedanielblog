<script>
  import PostView from '$lib/components/PostView.svelte';

  let { data } = $props();
</script>

<svelte:head>
  <title>{data.metadata.title} | LikeDaniel</title>
  <meta name="description" content={data.metadata.excerpt ?? data.metadata.title} />
</svelte:head>

<PostView
  metadata={data.metadata}
  content={data.content}
  related={data.related}
  basePath="/blog"
  categoryHref="/blog"
  backLabel="All Posts"
/>

