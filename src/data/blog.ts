import type { MarkdownInstance } from 'astro';

interface Post {
  title: string;
  excerpt: string;
  order: number;
  subtitle?: string;
}

const files = import.meta.glob<MarkdownInstance<Post>>('../posts/*.md', { eager: true });
export const posts = Object.entries(files).map(([path, post]) => ({
  ...post.frontmatter,
  slug: path.split('/').pop()!.replace(/\.md$/, ''),
  Content: post.Content,
})).sort((a, b) => a.order - b.order);
