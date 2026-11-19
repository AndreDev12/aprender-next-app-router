'use client';

import { useState } from 'react';
// import { getData } from '../lib/data';

export function Counter() {
  const [count, setCount] = useState(0);
  // console.log(await getData());

  return (
    <div>
      <p>{count} likes</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
