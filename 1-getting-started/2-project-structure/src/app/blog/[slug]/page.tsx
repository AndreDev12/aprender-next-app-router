export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  console.log('Fix this page');
  console.log(slug);

  return <h2>{slug}</h2>;
}
