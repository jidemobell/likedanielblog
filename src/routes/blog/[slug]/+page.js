import { error, redirect } from '@sveltejs/kit';

// Old slugs → new slugs (keeps already-shared links working)
const REDIRECTS = {
  'the-conduct-of-tongues': 'speaking-mysteries',
};

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const target = REDIRECTS[params.slug];
  if (target) {
    throw redirect(301, `/blog/${target}`);
  }

  try {
    const post = await import(`../../../posts/${params.slug}.md`);
    return {
      content: post.default,
      metadata: post.metadata,
      slug: params.slug,
    };
  } catch {
    throw error(404, `Post "${params.slug}" not found`);
  }
}
