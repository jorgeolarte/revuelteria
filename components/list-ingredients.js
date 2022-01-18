import TagIngredient from './tag-ingredient';

export default function ListIngredients({ ingredients }) {
  return (
    <section>
      <h3>Ingredientes</h3>
      <ul>
        {ingredients.map((ingredient) => (
          <TagIngredient key={ingredient.id} name={ingredient.name} />
        ))}
      </ul>
    </section>
  );
}
