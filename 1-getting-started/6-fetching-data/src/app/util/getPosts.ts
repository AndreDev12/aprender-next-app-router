import type { Blog } from '@/app/interface';

export async function getPosts(): Promise<Array<Blog>> {
  const data = await fetch('https://api.vercel.app/blog');
  const posts = await data.json();

  return posts;
}
