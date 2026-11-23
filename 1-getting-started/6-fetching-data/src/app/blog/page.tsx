import type { Blog } from '@/app/interface';
// import { db, posts } from '@/lib/db';

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

// export default async function Page() {
//   const allPosts = await db.select().from(posts);

//   return (
//     <ul>
//       {allPosts.map((post) => (
//         <li key={post.id}>{post.title}</li>
//       ))}
//     </ul>
//   );
// }
