/** @type {import('./$types').PageLoad} */
export async function load({ fetch, url }) {
  const category = url.searchParams.get('category') ?? '';
  const posts = await fetch('/api/posts').then((r) => r.json());

  const studies = posts.filter((p) => p.format === 'study');

  const filtered = category
    ? studies.filter((p) => p.category?.toLowerCase() === category.toLowerCase())
    : studies;

  return { studies: filtered, category, total: studies.length };
}
