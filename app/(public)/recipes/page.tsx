import { QueryClient } from "@tanstack/react-query";
import css from "./page.module.css";
import { searchRecipes } from "@/lib/recipes-service";
import RecipeList from "@/components/RecipeList/RecipeList";

const Page = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["recipes", { query: "" }],
    queryFn: () => searchRecipes(""),
  });

  return (
    <div className={css["page"]}>
      <div>
        <h2>Recipes</h2>
      </div>

      <div>
        <RecipeList />
      </div>
    </div>
  );
};

export default Page;
