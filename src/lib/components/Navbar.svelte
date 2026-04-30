<script>
  import { page } from '$app/stores';
</script>

<nav class="navbar navbar-expand-lg ld-navbar">
  <div class="container">
    <!-- Brand -->
    <a class="navbar-brand" href="/">
      <span class="logo-cross">✝</span>
      <span class="site-title">LikeDaniel</span>
    </a>

    <!-- Mobile toggle -->
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#mainNav"
      aria-controls="mainNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="bi bi-list fs-2 text-white"></span>
    </button>

    <!-- Links -->
    <div class="collapse navbar-collapse" id="mainNav">
      <ul class="navbar-nav ms-auto align-items-lg-center">
        <li class="nav-item">
          <a class="nav-link {$page.url.pathname === '/' ? 'active' : ''}" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link {$page.url.pathname.startsWith('/blog') ? 'active' : ''}" href="/blog">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link {$page.url.pathname.startsWith('/about') ? 'active' : ''}" href="/about">About</a>
        </li>
        <li class="nav-item ms-lg-2 mt-2 mt-lg-0">
          <a class="nav-link nav-btn" href="/blog">Read Posts</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
