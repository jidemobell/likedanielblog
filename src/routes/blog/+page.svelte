<script>
  import { page } from '$app/stores';

  let { data } = $props();
  const posts = $derived(data.posts);
  const selectedCategory = $derived($page.url.searchParams.get('category') || '');
  const categories = $derived([...new Set(posts.map(p => p.category).filter(Boolean))]);

  function formatDate(d) {
    return new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }
</script>

<svelte:head>
  <title>{selectedCategory ? selectedCategory + ' – ' : ''}Blog | LikeDaniel</title>
</svelte:head>

<div class="container py-5">
  <div class="row g-5">

    <!-- Posts -->
    <div class="col-lg-8">
      {#if selectedCategory}
        <div class="mb-4 d-flex align-items-center gap-2">
          <span class="post-category">{selectedCategory}</span>
          <a href="/blog" class="read-more-link">Clear filter</a>
        </div>
      {/if}

      {#each posts as post}
        <article class="blog-card mb-4 flex-row" style="flex-direction:row">
          {#if post.coverImage}
            <div class="card-img-wrap" style="width:220px;flex-shrink:0;aspect-ratio:4/3">
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
            <h3 class="mt-1"><a href="/blog/{post.slug}">{post.title}</a></h3>
            {#if post.excerpt}
              <p class="post-excerpt">{post.excerpt}</p>
            {/if}
            <div class="d-flex align-items-center justify-content-between mt-auto pt-2">
              <span class="post-meta">{formatDate(post.date)}{post.readTime ? ' · ' + post.readTime : ''}</span>
              <a href="/blog/{post.slug}" class="read-more-link">Read More &rarr;</a>
            </div>
          </div>
        </article>
      {/each}

      {#if posts.length === 0}
        <div class="text-center py-5">
          <p class="text-muted fs-5">No posts found{selectedCategory ? ' in ' + selectedCategory : ''}.</p>
          <a href="/blog" class="read-more-link">View All Posts</a>
        </div>
      {/if}
    </div>

    <!-- Sidebar -->
    <div class="col-lg-4">
      <aside>
        <div class="sidebar-widget">
          <h5>Categories</h5>
          <a href="/blog" class="d-flex justify-content-between text-decoration-none mb-1 read-more-link">
            All Posts <span class="badge bg-secondary">{posts.length}</span>
          </a>
          {#each categories as cat}
            <a href="/blog?category={cat}" class="d-flex justify-content-between text-decoration-none mb-1 read-more-link"
               class:fw-bold={selectedCategory === cat}>
              {cat} <span class="badge bg-secondary">{posts.filter(p => p.category === cat).length}</span>
            </a>
          {/each}
        </div>

        <div class="sidebar-widget">
          <h5>Recent Posts</h5>
          {#each posts.slice(0, 4) as post}
            <div class="sidebar-post-item">
              <div>
                <h6><a href="/blog/{post.slug}">{post.title}</a></h6>
                <small>{formatDate(post.date)}</small>
              </div>
            </div>
          {/each}
        </div>
      </aside>
    </div>

  </div>
</div>
