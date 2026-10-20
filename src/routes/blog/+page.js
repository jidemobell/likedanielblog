/** @type {import('./$types').PageLoad} */
export async function load({ fetch, url }) {
  const category = url.searchParams.get('category') ?? '';
  const posts = await fetch('/api/posts').then((r) => r.json());

  // Deep studies live under /studies, not in the notes feed.
  const notes = posts.filter((p) => p.format !== 'study');

  const filtered = category
    ? notes.filter((p) => p.category?.toLowerCase() === category.toLowerCase())
    : notes;
  return { posts: filtered, category };
}
