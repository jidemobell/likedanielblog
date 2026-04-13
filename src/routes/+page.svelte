<script>
  let { data } = $props();
  const posts = $derived(data.posts);
  const categories = $derived([...new Set(posts.map(p => p.category).filter(Boolean))]);

  function formatDate(d) {
    return new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }
</script>

<svelte:head>
  <title>LikeDaniel – Walking in Faith</title>
  <meta name="description" content="Christian devotional blog exploring faith, prayer, and Scripture." />
</svelte:head>

<!-- Hero -->
<section class="ld-hero">
  <div class="container">
    <span class="badge-pill">Christian Devotional Blog</span>
    <h1>Walking in Faith,<br /><em>Like Daniel</em></h1>
    <p>Daily reflections on Scripture, prayer, and the sustaining grace of God.</p>
    <a href="/blog" class="btn btn-accent-ld px-4 py-2 mt-2">Explore the Blog</a>
  </div>
</section>

<!-- Scripture Banner -->
<div class="py-4 border-bottom" style="background:var(--scripture-bg)">
  <div class="container text-center">
    <blockquote class="mb-1 fst-italic fs-5" style="color:var(--text-dark)">
      &ldquo;But Daniel resolved not to defile himself with the royal food and wine.&rdquo;
    </blockquote>
    <cite style="font-size:.85rem;color:var(--text-muted);font-style:normal">— Daniel 1:8 (NIV)</cite>
  </div>
</div>

<!-- Category Pills -->
{#if categories.length > 0}
<div class="container py-4 text-center">
  <a href="/blog" class="btn btn-sm btn-outline-secondary rounded-pill mx-1 mb-2">All</a>
  {#each categories as cat}
    <a href="/blog?category={cat}" class="btn btn-sm btn-outline-secondary rounded-pill mx-1 mb-2">{cat}</a>
  {/each}
</div>
{/if}

<!-- Blog Grid -->
<section class="py-5">
  <div class="container">
    <div class="d-flex align-items-center justify-content-between mb-4">
      <h2 class="section-title m-0">Latest Devotionals</h2>
      <a href="/blog" class="read-more-link">View All &rarr;</a>
    </div>
    <div class="row g-4">
      {#each posts.slice(0, 6) as post}
        <div class="col-lg-4 col-sm-6 d-flex">
          <article class="blog-card w-100">
            {#if post.coverImage}
              <div class="card-img-wrap">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  onerror={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
            {/if}
            <div class="card-body">
              {#if post.category}
                <a href="/blog?category={post.category}" class="post-category">{post.category}</a>
              {/if}
              <h3><a href="/blog/{post.slug}">{post.title}</a></h3>
              {#if post.excerpt}
                <p class="post-excerpt">{post.excerpt}</p>
              {/if}
              <div class="d-flex align-items-center justify-content-between mt-auto pt-2">
                <span class="post-meta">{formatDate(post.date)}</span>
                <a href="/blog/{post.slug}" class="read-more-link">Read &rarr;</a>
              </div>
            </div>
          </article>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- CTA -->
<section class="py-5 text-center text-white" style="background:var(--primary)">
  <div class="container">
    <h3 class="text-white mb-2">&ldquo;Be strong and courageous.&rdquo;</h3>
    <p class="mb-4" style="opacity:.8">— Joshua 1:9 &nbsp;|&nbsp; God walks with you every step of the way.</p>
    <a href="/blog" class="btn btn-accent-ld px-4">Read the Blog</a>
  </div>
</section>
