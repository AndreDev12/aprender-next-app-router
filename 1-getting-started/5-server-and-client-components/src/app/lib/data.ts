import 'server-only';

export async function getPost(id: string): Promise<{
  userId: number;
  id: number;
  title: string;
  body: string;
}> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
}

export async function getData() {
  const res = await fetch('https://external-service.com/data', {
    headers: {
      authorization: process.env.API_KEY || '',
    },
  });

  return res.json();
}
