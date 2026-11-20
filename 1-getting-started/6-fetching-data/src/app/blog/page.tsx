import type { Blog } from '@/app/interface';

export default async function Page() {
  const data = await fetch('https://api.vercel.app/blog');
  const posts = (await data.json()) as Array<Blog>;

  return (
    <ul>
      {posts.map(({ id, title }) => (
        <li key={id}>{title}</li>
      ))}
    </ul>
  );
}
