'use client';

import useSWR from 'swr';

import type { Blog } from '@/app/interface';

const fetcher = (url: string): Promise<Blog[]> =>
  fetch(url).then((res) => res.json());

export default function BlogPage() {
  const { data, error, isLoading } = useSWR(
    'https://api.vercel.app/blog',
    fetcher,
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {data?.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

// import { Suspense } from 'react';

// import { getPosts } from '@/app/util';
// import { BlogListSkeleton } from '@/components';
// import { Posts } from '@/app/ui';

// export default function Page() {
//   // Don't await the data fetching function
//   const posts = getPosts();

//   return (
//     <Suspense fallback={<BlogListSkeleton />}>
//       <Posts posts={posts} />
//     </Suspense>
//   );
// }

// import { Suspense } from 'react';

// import { BlogList, BlogListSkeleton } from '@/components';

// export default function BlogPage() {
//   return (
//     <div>
//       {/* This content will be sent to the client immediately*/}
//       <header>
//         <h1>Welcome to the Blog</h1>
//         <p>Read the latest posts below.</p>
//       </header>
//       <main>
//         {/* If there's any dynamic content inside this boundary, it will be streamed in */}
//         <Suspense fallback={<BlogListSkeleton />}>
//           <BlogList />
//         </Suspense>
//       </main>
//     </div>
//   );
// }

// import { db, posts } from '@/lib/db';
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

// import type { Blog } from '@/app/interface';

// export default async function Page() {
//   const data = await fetch('https://api.vercel.app/blog');
//   const posts = (await data.json()) as Array<Blog>;

//   return (
//     <ul>
//       {posts.map(({ id, title }) => (
//         <li key={id}>{title}</li>
//       ))}
//     </ul>
//   );
// }
