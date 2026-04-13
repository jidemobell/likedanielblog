/** @type {import('./$types').PageLoad} */
export async function load({ fetch, url }) {
  const category = url.searchParams.get('category') ?? '';
  const posts = await fetch('/api/posts').then((r) => r.json());
  const filtered = category
    ? posts.filter((p) => p.category?.toLowerCase() === category.toLowerCase())
    : posts;
  return { posts: filtered, category };
}
