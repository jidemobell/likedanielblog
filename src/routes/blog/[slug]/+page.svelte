<script>
  import Giscus from '$lib/components/Giscus.svelte';

  let { data } = $props();
  const metadata = $derived(data.metadata);
  const Content = $derived(data.content);

  function formatDate(d) {
    return new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }
</script>

<svelte:head>
  <title>{metadata.title} | LikeDaniel</title>
  <meta name="description" content={metadata.excerpt ?? metadata.title} />
</svelte:head>

<div class="container py-5">
  <div class="row g-5">

    <!-- Main Content -->
    <div class="col-lg-8">
      {#if metadata.coverImage}
        <img
          src={metadata.coverImage}
          alt={metadata.title}
          class="w-100 mb-4"
          style="border-radius:12px;max-height:420px;object-fit:cover"
          onerror={(e) => { e.currentTarget.style.display = 'none'; }}
        />
      {/if}

      <div class="d-flex align-items-center gap-2 mb-3 flex-wrap">
        {#if metadata.category}
          <a href="/blog?category={metadata.category}" class="post-category">{metadata.category}</a>
        {/if}
        <span class="post-meta">{formatDate(metadata.date)}{metadata.readTime ? ' · ' + metadata.readTime : ''}</span>
      </div>

      <h1 style="font-size:clamp(1.8rem,4vw,2.6rem);line-height:1.25">{metadata.title}</h1>

      {#if metadata.scripture}
        <div class="scripture-block my-4">
          &ldquo;{metadata.scripture}&rdquo;
          {#if metadata.scriptureRef}
            <cite>{metadata.scriptureRef}</cite>
          {/if}
        </div>
      {/if}

      <div class="post-content mt-4">
        <Content />
      </div>

      {#if metadata.tags && metadata.tags.length > 0}
        <div class="mt-4 pt-3 border-top">
          {#each metadata.tags as tag}
            <a href="/blog?tag={tag}" class="tag-badge">{tag}</a>
          {/each}
        </div>
      {/if}

      <div class="comments-section">
        <h4>Discussion</h4>
        <Giscus />
      </div>
    </div>

    <!-- Sidebar -->
    <div class="col-lg-4">
      <aside>
        <div class="sidebar-widget">
          <h5>Topics</h5>
          <a href="/blog?category=Faith" class="d-block mb-1 read-more-link">Faith</a>
          <a href="/blog?category=Prayer" class="d-block mb-1 read-more-link">Prayer</a>
          <a href="/blog?category=Scripture" class="d-block mb-1 read-more-link">Scripture</a>
          <a href="/blog?category=Devotional" class="d-block mb-1 read-more-link">Devotional</a>
          <a href="/blog?category=Discipleship" class="d-block mb-1 read-more-link">Discipleship</a>
        </div>

        <div class="sidebar-widget">
          <h5>Daily Verse</h5>
          <div class="scripture-block" style="margin:0">
            &ldquo;I can do all things through Christ who strengthens me.&rdquo;
            <cite>Philippians 4:13</cite>
          </div>
        </div>
      </aside>
    </div>

  </div>
</div>
