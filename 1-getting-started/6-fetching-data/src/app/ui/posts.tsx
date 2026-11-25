'use client';

import { use } from 'react';

import type { Blog } from '@/app/interface';

export function Posts({ posts }: { posts: Promise<Blog[]> }) {
  const allPosts = use(posts);

  return (
    <ul>
      {allPosts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
