'use client';

import { useContext } from 'react';

import { ThemeContext } from '@/app/theme-provider';

export function LikeButton({ likes }: { likes: number }) {
  const theme = useContext(ThemeContext);
  console.log(theme);

  return <button>Like {likes}</button>;
}
