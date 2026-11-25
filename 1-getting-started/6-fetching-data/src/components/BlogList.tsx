import type { Blog } from '@/app/interface';

export async function BlogList() {
  const data = await fetch('https://api.vercel.app/blog');
  const posts = await data.json();

  return (
    <ul>
      {posts.map(({ id, title }: Blog) => (
        <li key={id}>{title}</li>
      ))}
    </ul>
  );
}
