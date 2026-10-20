import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
  let post;
  try {
    post = await import(`../../../posts/${params.slug}.md`);
  } catch {
    throw error(404, `Study "${params.slug}" not found`);
  }

  if ((post.metadata?.format ?? 'dialogue') !== 'study') {
    throw error(404, `Study "${params.slug}" not found`);
  }

  const all = await fetch('/api/posts').then((r) => r.json());
  const related = all
    .filter((p) => p.format === 'study' && p.slug !== params.slug)
    .slice(0, 4);

  return {
    content: post.default,
    metadata: post.metadata,
    slug: params.slug,
    related,
  };
}
