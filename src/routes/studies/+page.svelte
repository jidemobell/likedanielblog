<script>
  let { data } = $props();

  const studies = $derived(data.studies);

  function formatDate(d) {
    return new Date(d).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
</script>

<svelte:head>
  <title>Studies | LikeDaniel</title>
  <meta
    name="description"
    content="Long-form Bible studies — worked out passage by passage, with the questions left open."
  />
</svelte:head>

<!-- Intro -->
<section class="section-wrap-sm" style="background:var(--bg-light);">
  <div class="container col-lg-8 text-center">
    <span class="section-tag">Deep Studies</span>
    <h1 class="section-title">Going Further</h1>
    <p style="font-size:1.05rem; line-height:1.9; color:var(--text-body); margin-bottom:0;">
      These are longer than the notes in the blog — worked out properly, passage by
      passage, with the structure left visible and the unanswered questions left
      standing. Set aside a quarter of an hour.
    </p>
  </div>
</section>

<!-- Index -->
<section class="section-wrap">
  <div class="container col-lg-8">
    {#if studies.length === 0}
      <div class="text-center py-5">
        <p class="text-muted fs-5">No studies published yet.</p>
        <a href="/blog" class="read-more-link">Read the blog instead</a>
      </div>
    {:else}
      {#each studies as study, i}
        <a href="/studies/{study.slug}" class="study-card">
          <div class="study-card-top">
            <span class="study-num">{String(i + 1).padStart(2, '0')}</span>
            {#if study.category}
              <span class="post-category">{study.category}</span>
            {/if}
            <span class="post-meta ms-auto">
              {formatDate(study.date)}{study.readTime ? ' · ' + study.readTime + ' min' : ''}
            </span>
          </div>

          <h2 class="study-card-title">{study.title}</h2>

          {#if study.excerpt}
            <p class="study-card-excerpt">{study.excerpt}</p>
          {/if}

          <span class="read-more-link">Read the study &rarr;</span>
        </a>
      {/each}
    {/if}
  </div>
</section>
