import { json } from '@sveltejs/kit';

/** Reads all markdown posts from src/posts/ and returns their metadata sorted by date. */
export async function GET() {
  const modules = import.meta.glob('/src/posts/*.md', { eager: true });

  const posts = Object.entries(modules)
    .map(([path, mod]) => {
      const slug = path.replace('/src/posts/', '').replace('.md', '');
      const { title, date, excerpt, category, coverImage, tags, readTime, format } =
        mod.metadata ?? {};
      return {
        slug,
        title: title ?? slug,
        date: date ?? '',
        excerpt: excerpt ?? '',
        category: category ?? 'Faith',
        coverImage: coverImage ?? null,
        tags: tags ?? [],
        readTime: readTime ?? null,
        format: format ?? 'dialogue',
      };
    })
    .filter((p) => p.title)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return json(posts);
}
