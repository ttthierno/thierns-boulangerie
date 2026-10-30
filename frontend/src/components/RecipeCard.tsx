import type { Recipe } from "../types/recipe";
// defining properties of recipe card
interface RecipeCardProps {
    id: string;
    recipe: Recipe;
    onSelect: (id: string) => void;
}
// fxn to display a preview of an individual recipe in the library
function RecipeCard({ id, recipe, onSelect }: RecipeCardProps) {
    return (
        <article className="recipe-card">
            {/* recipe information */}
            <h3>{recipe.name}</h3>
            
            <p>{recipe.category}</p>
            <p>
                makes {recipe.originalServings} {recipe.servingUnit}
            </p>
            {/* notifying parent component which recipe was selected */}
            <button onClick={() => onSelect(id)}>
                view recipe
            </button>
        </article>
    );
}

export default RecipeCard;