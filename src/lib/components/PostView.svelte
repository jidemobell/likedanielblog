<script>
  let {
    metadata,
    content,
    related = [],
    basePath = '/blog',
    categoryHref = '/blog',
    backLabel = 'All Posts',
  } = $props();

  const Content = content;

  function formatDate(d) {
    return new Date(d).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
</script>

<div class="container py-5">
  <div class="row g-5">
    <!-- Main Content -->
    <div class="col-lg-8">
      <a href={categoryHref} class="read-more-link d-inline-block mb-3">
        &larr; {backLabel}
      </a>

      {#if metadata.coverImage}
        <img
          src={metadata.coverImage}
          alt={metadata.title}
          class="w-100 mb-4"
          style="border-radius:12px;max-height:420px;object-fit:cover"
          onerror={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      {/if}

      <div class="d-flex align-items-center gap-2 mb-3 flex-wrap">
        {#if metadata.category}
          <a href="{categoryHref}?category={metadata.category}" class="post-category">
            {metadata.category}
          </a>
        {/if}
        <span class="post-meta">
          {formatDate(metadata.date)}{metadata.readTime ? ' · ' + metadata.readTime + ' min read' : ''}
        </span>
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
            <span class="tag-badge">{tag}</span>
          {/each}
        </div>
      {/if}

      <div class="comments-section">
        <h4>Discussion</h4>
        <!-- Bauta: anonymous discussion (no account needed) -->
        <div data-bauta data-site="likedaniel"></div>
        <script src="https://bauta-api.atensailabhub.workers.dev/widget.js" async defer></script>
      </div>
    </div>

    <!-- Sidebar -->
    <div class="col-lg-4">
      <aside>
        {#if related.length > 0}
          <div class="sidebar-widget">
            <h5>Also in this section</h5>
            {#each related as item}
              <div class="sidebar-post-item">
                <div>
                  <h6><a href="{basePath}/{item.slug}">{item.title}</a></h6>
                  <small>
                    {formatDate(item.date)}{item.readTime ? ' · ' + item.readTime + ' min' : ''}
                  </small>
                </div>
              </div>
            {/each}
          </div>
        {/if}

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
