<svelte:head>
  <title>About Jide – LikeDaniel</title>
  <meta name="description" content="About Jide — the engineer, musician, and restless thinker behind LikeDaniel." />
</svelte:head>

<!-- Inner Banner -->
<section style="background: var(--gradient-hero); padding:70px 0 60px; color:#fff;">
  <div class="container">
    <span class="section-tag" style="color:var(--accent-light);">The Person Behind the Posts</span>
    <h1 class="text-white mb-2" style="font-size:clamp(2rem,4vw,3rem);">About Jide</h1>
    <p style="color:rgba(255,255,255,.65); font-size:1rem; margin:0;">Engineer. Musician. Restless reader of Scripture.</p>
  </div>
</section>

<section class="section-wrap">
  <div class="container">
    <div class="row g-5">

      <!-- Story -->
      <div class="col-lg-8">
        <span class="section-tag">Who I Am</span>
        <h2 class="section-title">A Little About Me</h2>

        <p style="font-size:1.05rem; line-height:1.9;">
          My name is Jide. By profession I'm an engineer. By compulsion I'm a
          musician. And by some mix of grace and curiosity, I'm someone who can't
          read a Bible verse without wanting to pull the thread until the whole
          sweater unravels — in the best possible way.
        </p>

        <p style="font-size:1.05rem; line-height:1.9;">
          This blog isn't a polished ministry platform. It's closer to a notebook
          I decided to leave open. The thoughts here come from real questions —
          often ones that surface in Bible study, or in the middle of a conversation
          I wasn't ready for, or at 1am when something just won't leave me alone.
        </p>

        <p style="font-size:1.05rem; line-height:1.9;">
          Some of what you'll find here has been refined through extended study and
          conversation. Some of it is still raw. All of it is rooted in Scripture —
          and I'll always try to tell you which is which.
        </p>

        <div class="scripture-block mt-4">
          "But Daniel resolved not to defile himself with the royal food and wine,
          and he asked the chief official for permission not to defile himself this way."
          <cite>— Daniel 1:8 (NIV)</cite>
        </div>

        <p style="font-size:1.05rem; line-height:1.9; margin-top:1.5rem;">
          The name "LikeDaniel" is the goal more than the achievement. Daniel
          didn't do anything flashy. He just resolved — quietly, privately, before
          the pressure arrived. That kind of settled, pre-decided faith is what I'm
          after. And writing helps me get there.
        </p>
      </div>

      <!-- Side card -->
      <div class="col-lg-4">
        <div class="sidebar-widget" style="position:sticky; top:90px;">
          <p class="sidebar-widget-title">What you'll find here</p>
          <ul style="list-style:none; padding:0; margin:0;">
            {#each [
              { icon: 'bi-book',          label: 'Deep scripture dives' },
              { icon: 'bi-search',        label: 'Research & original thought' },
              { icon: 'bi-music-note-beamed', label: 'Occasional connections to music & craft' },
              { icon: 'bi-pencil',        label: 'Honest, unfiltered thought' },
              { icon: 'bi-patch-question',label: 'Questions more than answers' },
            ] as item}
              <li style="display:flex; gap:.75rem; align-items:flex-start; padding:.55rem 0; border-bottom:1px solid var(--border-light);">
                <i class="bi {item.icon}" style="font-size:1.05rem; color:var(--accent); line-height:1.5; flex-shrink:0;"></i>
                <span style="font-size:.92rem; color:var(--text-body); line-height:1.5;">{item.label}</span>
              </li>
            {/each}
          </ul>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- Contact CTA -->
<section class="cta-strip">
  <div class="container col-lg-7" style="position:relative; z-index:1;">
    <span class="section-tag d-block text-center mb-2">Get in Touch</span>
    <h2>Have a question or want to discuss a passage?</h2>
    <p>I'm especially interested in the questions that don't have easy answers.</p>
    <a href="mailto:hello@likedaniel.com" class="btn-ld btn-ld-accent">
      hello@likedaniel.com
    </a>
  </div>
</section>

