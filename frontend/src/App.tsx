import { useState } from "react";
import { recipes } from "./data/recipes";
import RecipeCard from "./components/RecipeCard";
/* 
 manages recipe selection and determines whether user sees recipe
 or individual recipe
*/
function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState<string | null>(null);
  // retrieving selected recipe
  const selectedRecipe = selectedRecipeId
      ? recipes[selectedRecipeId]
      : null;

  return (
    <main>
        <h1>thierno's boulangerie</h1>
        {/* display recipe libary if none selected */}
        {!selectedRecipe ? (
            <section>
              <h2>my recipes</h2>
              <div className="recipe-grid">
                {/* generating card for each recipe in database */}
                {Object.entries(recipes).map(([id, recipe]) => (
                  <RecipeCard
                      key={id}
                      id={id}
                      recipe={recipe}
                      onSelect={setSelectedRecipeId}
                    />
                  ))}
              </div>
            </section>
        ) : (
          <section>
            {/* Display the selected recipe */}
            {/* reset selection to return to library */}
            <button onClick={() => setSelectedRecipeId(null)}>
                ← back to recipes
            </button>
            <h2>{selectedRecipe.name}</h2>
            
            <p>
                makes {selectedRecipe.originalServings}{" "}
                {selectedRecipe.servingUnit}
            </p>
            {/* placeholder */}
            <p>recipe details coming soon..</p>
          </section>
        )}
      </main>
    );
}

export default App
