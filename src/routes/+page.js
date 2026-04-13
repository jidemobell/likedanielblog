/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
  const posts = await fetch('/api/posts').then((r) => r.json());
  return { posts };
}
