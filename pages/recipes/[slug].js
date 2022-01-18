import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Layout from "@/components/layouts";
import ListIngredients from "@/components/list-ingredients";
import { getAllRecipesWithSlug, getRecipeAndMoreRecipes } from "@/lib/api";

export default function Recipe({ recipe, preview }) {
  const router = useRouter();

  if (!router.isFallback && !recipe?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <h1>{recipe.title}</h1>
      <p>{recipe.content}</p>
      <ListIngredients ingredients={recipe.ingredient} />
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getRecipeAndMoreRecipes(params.slug, preview);

  console.log("data: ", data);

  return {
    props: {
      preview,
      recipe: data?.recipe,
    },
  };
}

export async function getStaticPaths() {
  const allRecipes = await getAllRecipesWithSlug();

  return {
    paths: allRecipes?.map((recipe) => `/recipes/${recipe.slug}`) || [],
    fallback: true,
  };
}
