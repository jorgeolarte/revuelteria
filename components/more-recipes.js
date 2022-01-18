import RecipePreview from './recipe-preview';

export default function moreRecipes({ recipes }) {
  return (
    <section>
      <h2>More Recipes</h2>
      <div>
        {recipes.map((recipe) => (
          <RecipePreview
            key={recipe.slug}
            title={recipe.title}
            slug={recipe.slug}
            time={recipe.time}
            content={recipe.content}
          />
        ))}
      </div>
    </section>
  );
}
