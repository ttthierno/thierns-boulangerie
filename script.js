const scaleButton = document.querySelector("#scale-button");

const cinnamonRollDough = [
    {
    ingredient: "flour",
    amount: 450,
    unit: "g"
    },
    {
    ingredient: "white sugar",
    amount: 100,
    unit: "g"
    },
    {
    ingredient: "salt",
    amount: 8,
    unit: "g"
    },
    {
    ingredient: "baking soda",
    amount: 2,
    unit: "g"
    },
    {
    ingredient: "dry active yeast",
    amount: 7,
    unit: "g"
    },
    {
    ingredient: "milk",
    amount: 115,
    unit: "g"
    },
    {
    ingredient: "yogurt",
    amount: 225,
    unit: "g"
    },
    {
    ingredient: "butter",
    amount: 115,
    unit: "g"
    },
    
];
const cinnamonRollFilling = [
    {
    ingredient: "butter",
    amount: 115,
    unit: "g"
    },
    {
    ingredient: "brown sugar",
    amount: 150,
    unit: "g"
    },
    {
    ingredient: "cinnamon",
    amount: 20,
    unit: "g"
    },
    {
    ingredient: "salt",
    amount: 1,
    unit: "g"
    },
];
const cinnamonRollIcing = [
    {
    ingredient: "cream cheese",
    amount: 25,
    unit: "g"
    },
    {
    ingredient: "heavy cream",
    amount: 75,
    unit: "g"
    },
    {
    ingredient: "powdered sugar",
    amount: 150,
    unit: "g"
    },
    {
    ingredient: "water",
    amount: 10,
    unit: "g"
    },
    {
    ingredient: "salt",
    amount: 1,
    unit: "g"
    },
];

scaleButton.addEventListener("click", function () {
    // get desired servings
    const desiredServings = Number(document.querySelector("#servings").value); 
    
    console.log("recipe scaled");
    console.log(desiredServings);
    const scaledRecipe = document.querySelector("#scaled-recipe");
    // number must be above 0 
    if (desiredServings <= 0) {
        scaledRecipe.textContent = "please enter a number above 0";
        return;
    }
    const originalServings = 8;
    const scaleFactor = desiredServings / originalServings;

    const scaledDough = scaleRecipe(cinnamonRollDough, scaleFactor);
    const scaledFilling = scaleRecipe(cinnamonRollFilling, scaleFactor);
    const scaledIcing = scaleRecipe(cinnamonRollIcing, scaleFactor);

    
    scaledRecipe.textContent = "";

    displayRecipeSection("for the dough", scaledDough, scaledRecipe);
    displayRecipeSection("for the filling", scaledFilling, scaledRecipe);
    displayRecipeSection("for the icing", scaledIcing, scaledRecipe);    

    
});

function scaleRecipe(ingredients, scaleFactor) {
    // array to hold ingredients
    const scaledIngredients = [];
    for (let i = 0; i < ingredients.length; i++) {
        // scaling the amount and rounding
        const scaledAmount = ingredients[i].amount*scaleFactor;
        const roundedAmount = Math.round(scaledAmount*10) / 10;
        // scaling each ingredient
        const scaledIngredient = {
            ingredient: ingredients[i].ingredient,
            amount: roundedAmount,
            unit: ingredients[i].unit
        };
        // adding to new list
        scaledIngredients.push(scaledIngredient);
    }
    return scaledIngredients;
}

// helper to display recipe section
function displayRecipeSection(title, ingredients, container) {
    // creating the header
    const heading = document.createElement("h3");
    heading.textContent = title;
    container.appendChild(heading);
    // creating unordered list
    const list = document.createElement("ul");

    for (let i = 0; i < ingredients.length; i++) {
        // listing the ingredients
        const listItem = document.createElement("li");
        listItem.textContent = 
            ingredients[i].amount + " " +
            ingredients[i].unit + " " +
            ingredients[i].ingredient;
        list.appendChild(listItem);
    }
    container.appendChild(list)

}

