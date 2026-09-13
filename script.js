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

    const originalServings = 8;
    const scaleFactor = desiredServings / originalServings;

    const scaledDough = scaleRecipe(cinnamonRollDough, scaleFactor);
    const scaledFilling = scaleRecipe(cinnamonRollFilling, scaleFactor);
    const scaledIcing = scaleRecipe(cinnamonRollIcing, scaleFactor);

    const scaledRecipe = document.querySelector("#scaled-recipe");
    scaledRecipe.textContent = "";

    
});

function scaleRecipe(ingredients, scaleFactor) {
    const scaledIngredients = [];
    for (let i = 0; i < ingredients.length; i++) {
        const scaledIngredient = {
            ingredient: ingredients[i].ingredient,
            amount: ingredients[i].amount*scaleFactor,
            unit: ingredients[i].unit
        };
        scaledIngredients.push(scaledIngredient);
    }
    return scaledIngredients;
}

