import PostList from "@/components/PostList/PostList";
import { getAllPosts } from "@/lib/postsService";
const sleep = (delay: number) => new Promise((res) => setTimeout(res, delay));

const Page = async () => {
  const data = await getAllPosts();
  await sleep(5000);
  return (
    <main>
      <PostList posts={data.posts} />
    </main>
  );
};

export default Page;
