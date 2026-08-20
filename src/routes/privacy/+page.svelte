<svelte:head>
  <title>Privacy Policy – LikeDaniel</title>
  <meta name="description" content="How LikeDaniel handles your data: cookieless analytics, no personal data stored." />
</svelte:head>

<!-- Inner Banner -->
<section style="background: var(--gradient-hero); padding:70px 0 60px; color:#fff;">
  <div class="container">
    <span class="section-tag" style="color:var(--accent-light);">A Short, Honest Policy</span>
    <h1 class="text-white mb-2" style="font-size:clamp(2rem,4vw,3rem);">Privacy Policy</h1>
    <p style="color:rgba(255,255,255,.65); font-size:1rem; margin:0;">What this site collects — and more importantly, what it doesn't.</p>
  </div>
</section>

<section class="section-wrap">
  <div class="container col-lg-8">
    <div class="blog-post-body" style="font-size:1.02rem; line-height:1.9;">
      <p><strong>Last updated:</strong> {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

      <h2>In one sentence</h2>
      <p>
        This blog uses privacy-respecting, cookie-less analytics to see roughly
        which countries read it and which pages are popular — and it stores
        <strong>no personal data</strong> about you.
      </p>

      <h2>What we collect</h2>
      <ul>
        <li>Country-level location (e.g. "United Kingdom"), derived from your IP address at the network edge.</li>
        <li>Pages visited and general traffic counts (visits, page views, referrers, browser/device type).</li>
      </ul>

      <h2>What we do NOT collect</h2>
      <ul>
        <li>No cookies, no tracking identifiers, and no consent banner is needed.</li>
        <li>No names, email addresses, or other personal information.</li>
        <li>No precise (street-level) location.</li>
        <li>No IP addresses are stored by us. Cloudflare, who provides this analytics, strips and does not store visitor IPs.</li>
      </ul>

      <h2>Why we do this</h2>
      <p>
        We have a legitimate interest in understanding which countries our readers
        come from and which writing resonates, so we can keep producing it. This is
        the same approach used by thousands of privacy-conscious sites across Europe.
      </p>

      <h2>Third parties</h2>
      <p>
        This site is served by and uses analytics from
        <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener">Cloudflare</a>,
        a EU-US compliant service provider, for web analytics. It also loads fonts and
        icons from third-party CDNs, which may log standard, short-lived connection
        data in line with their own privacy policies.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy? Email
        <a href="mailto:hello@likedaniel.com">hello@likedaniel.com</a>.
      </p>
    </div>
  </div>
</section>
