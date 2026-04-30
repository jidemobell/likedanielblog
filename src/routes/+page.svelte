<script>
  let { data } = $props();
  const posts = $derived(data.posts);
  const categories = $derived([...new Set(posts.map(p => p.category).filter(Boolean))]);
  const featured = $derived(posts[0]);
  const latestPosts = $derived(posts.slice(1, 7));
  const overlayPosts = $derived(posts.slice(1, 4));
  const gridPosts = $derived(posts.slice(4, 7));

  function formatDate(d) {
    return new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  }
</script>

<svelte:head>
  <title>LikeDaniel – Walking in Faith</title>
  <meta name="description" content="Christian devotional blog exploring faith, prayer, and Scripture." />
</svelte:head>

<!-- ================================================
     HERO
     ================================================ -->
<section class="ld-hero">
  <div class="container">
    <div class="hero-inner">
      <span class="hero-eyebrow">
        <span class="cross-icon">✝</span>
        Christian Devotional Blog
      </span>
      <h1>Walking in Faith,<br /><em>Like Daniel</em></h1>
      <p class="hero-desc">
        Daily reflections on Scripture, prayer, and the sustaining grace of God —
        for those who choose to resolve, like Daniel, not to be conformed.
      </p>
      <div class="hero-actions">
        <a href="/blog" class="btn-ld btn-ld-accent">Explore the Blog</a>
        <a href="/about" class="btn-ld btn-ld-outline">Our Mission</a>
      </div>
      <div class="hero-divider"></div>
    </div>
  </div>
</section>

<!-- ================================================
     SCRIPTURE BANNER
     ================================================ -->
<div class="scripture-banner">
  <div class="container" style="max-width:680px">
    <blockquote>
      &ldquo;But Daniel resolved not to defile himself with the royal food and wine…&rdquo;
    </blockquote>
    <cite>Daniel 1:8 &nbsp;·&nbsp; NIV</cite>
  </div>
</div>

<!-- ================================================
     FEATURED POST  (Trydo full-width overlay)
     ================================================ -->
{#if featured}
<section class="section-wrap">
  <div class="container">
    <div class="section-head d-flex align-items-end justify-content-between flex-wrap gap-3">
      <div>
        <span class="section-tag">Featured</span>
        <h2 class="section-title mb-0">Today&rsquo;s Devotional</h2>
      </div>
      <a href="/blog" class="btn-link-ld">All Posts &rarr;</a>
    </div>

    <a href="/blog/{featured.slug}" class="featured-post">
      {#if featured.coverImage}
        <img
          class="featured-img"
          src={featured.coverImage}
          alt={featured.title}
          onerror={(e) => { e.currentTarget.style.display = 'none'; }}
        />
      {:else}
        <div class="featured-img" style="background:var(--gradient-hero);display:block;"></div>
      {/if}
      <div class="featured-body">
        {#if featured.category}
          <span class="featured-tag">{featured.category}</span>
        {/if}
        <h2>{featured.title}</h2>
        {#if featured.excerpt}
          <p style="color:rgba(255,255,255,.65);font-size:.95rem;margin-bottom:.8rem;max-width:520px">{featured.excerpt}</p>
        {/if}
        <div class="featured-meta">
          <span class="bi bi-calendar3"></span>
          <span>{formatDate(featured.date)}</span>
          <span>·</span>
          <span style="color:var(--accent-light);font-weight:600">Read Article →</span>
        </div>
      </div>
    </a>
  </div>
</section>
{/if}

<!-- ================================================
     CATEGORY FILTER PILLS
     ================================================ -->
{#if categories.length > 0}
<div class="container pb-2">
  <div class="cat-filter-wrap">
    <a href="/blog" class="cat-filter active">All</a>
    {#each categories as cat}
      <a href="/blog?category={cat}" class="cat-filter">{cat}</a>
    {/each}
  </div>
</div>
{/if}

<!-- ================================================
     OVERLAY CARDS ROW  (Trydo blog-style-1)
     ================================================ -->
{#if overlayPosts.length > 0}
<section class="section-wrap-sm">
  <div class="container">
    <div class="section-head">
      <span class="section-tag">Recent</span>
      <h2 class="section-title mb-0">Latest Devotionals</h2>
    </div>
    <div class="row g-4">
      {#each overlayPosts as post}
        <div class="col-lg-4 col-md-6">
          <a href="/blog/{post.slug}" class="blog-card-overlay">
            <div class="img-wrap">
              {#if post.coverImage}
                <img
                  src={post.coverImage}
                  alt={post.title}
                  onerror={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              {:else}
                <div style="background:var(--gradient-hero);width:100%;height:100%;"></div>
              {/if}
            </div>
            <div class="card-overlay-body">
              {#if post.category}
                <span class="cat-badge">{post.category}</span>
              {/if}
              <h3>{post.title}</h3>
              <span class="read-btn">
                Read Article <span class="bi bi-arrow-right"></span>
              </span>
            </div>
          </a>
        </div>
      {/each}
    </div>
  </div>
</section>
{/if}

<!-- ================================================
     STANDARD GRID CARDS  (Jano blog-meta-three)
     ================================================ -->
{#if gridPosts.length > 0}
<section class="section-wrap-sm" style="background:var(--bg-light)">
  <div class="container">
    <div class="section-head">
      <span class="section-tag">More to Explore</span>
      <h2 class="section-title mb-0">Keep Reading</h2>
    </div>
    <div class="row g-4">
      {#each gridPosts as post}
        <div class="col-lg-4 col-sm-6 d-flex">
          <article class="blog-card w-100">
            <div class="img-container">
              <div class="card-img-wrap">
                {#if post.coverImage}
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    onerror={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                {:else}
                  <div style="background:var(--gradient-hero);width:100%;height:100%;"></div>
                {/if}
              </div>
              {#if post.date}
                <div class="date-badge">
                  {new Date(post.date).toLocaleDateString('en-US', { month: 'short' })}<br />
                  <strong>{new Date(post.date).getDate()}</strong>
                </div>
              {/if}
            </div>
            <div class="card-body">
              {#if post.category}
                <a href="/blog?category={post.category}" class="post-category">{post.category}</a>
              {/if}
              <h3><a href="/blog/{post.slug}">{post.title}</a></h3>
              {#if post.excerpt}
                <p class="post-excerpt">{post.excerpt}</p>
              {/if}
              <div class="d-flex align-items-center justify-content-between mt-auto pt-2 border-top" style="border-color:var(--border-light)!important">
                <span class="post-meta">
                  <span class="bi bi-clock" style="font-size:.7rem"></span>
                  {formatDate(post.date)}
                </span>
                <a href="/blog/{post.slug}" class="read-more-link">
                  Read <span class="bi bi-arrow-right" style="font-size:.7rem"></span>
                </a>
              </div>
            </div>
          </article>
        </div>
      {/each}
    </div>
  </div>
</section>
{/if}

<!-- ================================================
     CTA STRIP  (Trydo-inspired)
     ================================================ -->
<section class="cta-strip">
  <div class="container" style="position:relative;z-index:1">
    <span class="section-tag d-block text-center mb-2">Stay Encouraged</span>
    <h2>&ldquo;Be strong and courageous.&rdquo;</h2>
    <p>— Joshua 1:9 &nbsp;·&nbsp; God walks with you every step of the way.</p>
    <a href="/blog" class="btn-ld btn-ld-accent">Read the Blog</a>
  </div>
</section>
