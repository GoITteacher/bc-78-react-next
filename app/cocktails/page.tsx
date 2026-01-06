import CocktailList from "@/components/CocktailList/CocktailList";
import TestButton from "@/components/TestButton/TestButton";
import { getRandomCocktails } from "@/lib/cocktailsService";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

const Page = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["getRandomCocktails"],
    queryFn: getRandomCocktails,
  });

  return (
    <main>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <TestButton />
        <CocktailList />
      </HydrationBoundary>
    </main>
  );
};

export default Page;
