<svelte:head>
  <title>About Daniel – LikeDaniel</title>
  <meta name="description" content="Learn about Daniel and the heart behind LikeDaniel, a Christian devotional blog." />
</svelte:head>

<!-- Inner Banner -->
<section style="background: linear-gradient(135deg, var(--primary) 0%, #0d2b55 100%); padding:60px 0 50px; color:#fff;">
  <div class="container">
    <h1 class="text-white mb-2" style="font-size:clamp(2rem,4vw,3rem);">About Daniel</h1>
    <p class="opacity-75">The heart behind LikeDaniel</p>
  </div>
</section>

<section class="py-5">
  <div class="container">
    <div class="row g-5 align-items-center">

      <!-- Photo -->
      <div class="col-lg-4 text-center">
        <div class="about-hero">
          <img
            src="/assets/images/team/img_01.jpg"
            alt="Daniel"
            class="rounded-circle mb-4"
            style="width:160px; height:160px; object-fit:cover; border:5px solid var(--accent);"
              onerror={(e) => (e.currentTarget.src = '/assets/images/lazy.svg')}
          />
          <h3 class="mb-1">Daniel</h3>
          <p class="text-muted" style="font-size:.9rem;">Christian Writer & Blogger</p>
          <div class="d-flex justify-content-center gap-3 mt-3">
            <a href="https://twitter.com" class="fs-5" style="color:var(--primary-light);" aria-label="Twitter">
              <i class="bi bi-twitter-x"></i>
            </a>
            <a href="https://instagram.com" class="fs-5" style="color:var(--primary-light);" aria-label="Instagram">
              <i class="bi bi-instagram"></i>
            </a>
            <a href="mailto:hello@likedaniel.com" class="fs-5" style="color:var(--primary-light);" aria-label="Email">
              <i class="bi bi-envelope"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Story -->
      <div class="col-lg-8">
        <span class="section-tag">My Story</span>
        <h2 class="section-title">Why "LikeDaniel"?</h2>
        <p style="font-size:1.05rem; line-height:1.9;">
          The name comes from the prophet Daniel in the Bible — a man of
          unwavering faith who stood firm even in a foreign land, even in the
          lion's den. His secret? He kept his eyes on God.
        </p>
        <p style="font-size:1.05rem; line-height:1.9;">
          I started this blog because I believe every believer can live with
          that same kind of resolute faith. Life is full of "lion's dens" —
          seasons of doubt, hardship, and uncertainty. But the Word of God is
          an anchor for every storm.
        </p>
        <p style="font-size:1.05rem; line-height:1.9;">
          Here I share devotionals, Scripture studies, personal testimonies, and
          reflections — all written with one goal: to point you back to Jesus.
        </p>

        <div class="scripture-block mt-4">
          "But Daniel resolved not to defile himself with the royal food and
          wine, and he asked the chief official for permission not to defile
          himself this way."
          <cite>— Daniel 1:8 (NIV)</cite>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Mission Section -->
<section class="py-5" style="background: var(--bg-light);">
  <div class="container">
    <div class="text-center mb-5">
      <span class="section-tag">The Mission</span>
      <h2 class="section-title">What This Blog is About</h2>
    </div>
    <div class="row g-4">
      {#each [
        { icon: '📖', title: 'Scripture-Centered', desc: 'Every post is grounded in the Word of God. The Bible is our ultimate source of truth.' },
        { icon: '🙏', title: 'Prayer & Devotion', desc: 'Developing a deeper prayer life and daily devotional habits to stay close to God.' },
        { icon: '🕊️', title: 'Faith in Action', desc: 'Faith without works is dead. We explore what it means to live out our beliefs daily.' },
        { icon: '💬', title: 'Community', desc: 'You are not alone. Through this blog and comments, we walk the faith journey together.' },
        { icon: '✨', title: 'Encouragement', desc: 'When life is hard, we need reminders that God is faithful. This blog is that reminder.' },
        { icon: '🌿', title: 'Spiritual Growth', desc: 'Growing in wisdom, character, and Christlikeness — that is the call on every believer\'s life.' },
      ] as item}
        <div class="col-md-6 col-lg-4">
          <div class="h-100 p-4 rounded-3" style="background:#fff; border:1px solid var(--border);">
            <div style="font-size:2.2rem; margin-bottom:.7rem;">{item.icon}</div>
            <h5 class="mb-2">{item.title}</h5>
            <p class="text-muted mb-0" style="font-size:.92rem; line-height:1.7;">{item.desc}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Contact CTA -->
<section class="py-5 text-center" style="background: var(--primary); color:#fff;">
  <div class="container col-lg-7">
    <span style="font-size:2rem;">✉️</span>
    <h3 class="text-white mt-2 mb-3">Want to Get in Touch?</h3>
    <p class="opacity-75 mb-4">
      Have a topic you'd love to see covered, a prayer request, or just want
      to say hello? I'd love to hear from you.
    </p>
    <a href="mailto:hello@likedaniel.com" class="btn btn-accent-ld px-5">
      hello@likedaniel.com
    </a>
  </div>
</section>
