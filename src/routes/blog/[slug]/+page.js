import { error, redirect } from '@sveltejs/kit';

// Old slugs → new slugs (keeps already-shared links working)
const REDIRECTS = {
  'the-conduct-of-tongues': 'speaking-mysteries',
};

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
  const target = REDIRECTS[params.slug];
  if (target) {
    throw redirect(301, `/blog/${target}`);
  }

  let post;
  try {
    post = await import(`../../../posts/${params.slug}.md`);
  } catch {
    throw error(404, `Post "${params.slug}" not found`);
  }

  // A "study" belongs to /studies, not here.
  if ((post.metadata?.format ?? 'dialogue') === 'study') {
    throw redirect(301, `/studies/${params.slug}`);
  }

  const all = await fetch('/api/posts').then((r) => r.json());
  const related = all
    .filter((p) => p.slug !== params.slug && p.format !== 'study')
    .slice(0, 4);

  return {
    content: post.default,
    metadata: post.metadata,
    slug: params.slug,
    related,
  };
}
