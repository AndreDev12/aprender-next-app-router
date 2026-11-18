export async function getPost(id: string): Promise<{
  userId: number;
  id: number;
  title: string;
  body: string;
}> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
}
