interface DocsPageProps {
  params: Promise<{ slug: string[] }>;
}

const Page = async ({ params }: DocsPageProps) => {
  const { slug } = await params;
  const [category, backend, operation] = slug;

  return (
    <main>
      <p>Category: {category}</p>
      <p>Backend: {backend}</p>
      <p>Operation: {operation}</p>
    </main>
  );
};

export default Page;
