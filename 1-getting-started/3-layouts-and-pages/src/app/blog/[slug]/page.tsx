export default async function Page(props: PageProps<'/blog/[slug]'>) {
  const { slug } = await props.params;

  return <h2>Blog post: {slug}</h2>;
}

// export default async function Page({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = await params;
//   console.log(slug);

//   return <h1>Hello, Blog Post Page!</h1>;
// }
