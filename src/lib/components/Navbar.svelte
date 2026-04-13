<script>
  import { page } from '$app/stores';
</script>

<nav class="navbar navbar-expand-lg ld-navbar">
  <div class="container">
    <a class="navbar-brand site-title" href="/">
      <span class="logo-cross">✝</span> LikeDaniel
    </a>
    <button
      class="navbar-toggler border-0"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#mainNav"
      aria-controls="mainNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="bi bi-list fs-2 text-white"></span>
    </button>
    <div class="collapse navbar-collapse" id="mainNav">
      <ul class="navbar-nav ms-auto gap-1">
        <li class="nav-item">
          <a class="nav-link {$page.url.pathname === '/' ? 'active' : ''}" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link {$page.url.pathname.startsWith('/blog') ? 'active' : ''}" href="/blog">Blog</a>
        </li>

      </ul>
    </div>
  </div>
</nav>
