import { recipes } from "./data/recipes";

function App() {
  return (
    <main>
      <h1>thierns boulangerie</h1>
      <h2>my recipes</h2>

      {Object.entries(recipes).map(([id, recipe]) => (
        <div key={id}>
            <h3>{recipe.name}</h3>
            <p>{recipe.category}</p>
            <p>
              Makes {recipe.originalServings} {recipe.servingUnit}
            </p>
        </div>
      ))} 
    </main>
  )
}

export default App
