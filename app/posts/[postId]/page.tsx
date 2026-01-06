import LikeBtn from "@/components/LikeBtn/LikeBtn";
import { getPostDetails } from "@/lib/postsService";

interface PostDetailsProps {
  params: Promise<{ postId: string }>;
}

const sleep = (delay: number) => new Promise((res) => setTimeout(res, delay));

const Page = async ({ params }: PostDetailsProps) => {
  const { postId } = await params;
  const postDetails = await getPostDetails(Number(postId));
  // await sleep(5000);

  return (
    <main>
      <p>Post Details</p>
      <p>Post Id: {postId}</p>
      <LikeBtn />

      <p>{JSON.stringify(postDetails, null, 2)}</p>
    </main>
  );
};

export default Page;
