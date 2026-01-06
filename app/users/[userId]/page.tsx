import UserDetails from "@/components/UserDetails/UserDetails";
import { getUserById } from "@/lib/usersService";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

interface UserPageProps {
  params: Promise<{ userId: string }>;
}

const Page = async ({ params }: UserPageProps) => {
  const { userId } = await params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["getUser", userId],
    queryFn: () => getUserById(userId),
  });

  return (
    <main>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <UserDetails />
      </HydrationBoundary>
    </main>
  );
};

export default Page;
