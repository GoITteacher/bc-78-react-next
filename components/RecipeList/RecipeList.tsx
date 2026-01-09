"use client";
import { useState } from "react";
import css from "./RecipeList.module.css";
import { useQuery } from "@tanstack/react-query";
import { searchRecipes } from "@/lib/recipes-service";
import Link from "next/link";

const RecipeList = () => {
  const [query, setQuery] = useState("");

  const handleSubmit = (formData: FormData) => {
    const userValue = formData.get("query") as string;
    setQuery(userValue);
  };

  const { data } = useQuery({
    queryKey: ["recipes", { query: query }],
    queryFn: () => searchRecipes(query),
    refetchOnMount: false,
  });

  const recipes = data?.recipes || [];

  return (
    <div className={css["recipeList"]}>
      <form action={handleSubmit}>
        <input type="text" name="query" placeholder="query" />
        <button type="submit">Search</button>
      </form>

      <ul>
        {recipes.map((el) => {
          return (
            <li key={el.id}>
              <Link href={`/recipes/${el.id}`}>{el.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RecipeList;
