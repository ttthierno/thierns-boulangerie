const scaleButton = document.querySelector("#scale-button");

const recipes = {

    "cinnamon-rolls": {
        name: "Cinnamon Rolls",
        originalServings: 8,
        sections: {
            dough: [
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
            ],
            filling: [
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
            ],
            icing: [
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
            ]
        }
    },

    "banana-bread": {
        name: "banana bread",
        originalServings: 10,
        sections: {
            batter: [
            {
                ingredient: "ripe banana",
                amount: 450,
                unit: "g"
            },
            {
                ingredient: "butter",
                amount: 90,
                unit: "g"
            },
            {
                ingredient: "eggs", 
                amount: 3,
                unit: " "
            },
            {
                ingredient: "dark brown sugar",
                amount: 150,
                unit: "g"
            },
            {
                ingredient: "vanilla extract",
                amount: 4,
                unit: "g"
            },
            {
                ingredient: "sour cream",
                amount: 110,
                unit: "g"
            },
            {
                ingredient: "olive oil",
                amount: 30,
                unit: "g"
            },
            {
                ingredient: "all purpose flour",
                amount: 330,
                unit: "g"
            },
            {
                ingredient: "salt",
                amount: 10,
                unit: "g"
            },
            {
                ingredient: "baking powder",
                amount: 12,
                unit: "g"
            },
            {
                ingredient: "baking soda",
                amount: 5,
                unit: "g"
            }
            ]
        }
    }
};


scaleButton.addEventListener("click", function () {
    // get desired servings
    const desiredServings = Number(document.querySelector("#servings").value); 
    
    console.log("recipe scaled");
    console.log(desiredServings);
    const scaledRecipe = document.querySelector("#scaled-recipe");
   
    
    

    const selectedRecipeName = document.querySelector("#recipe-select").value;
    const selectedRecipe = recipes[selectedRecipeName];
    if (!selectedRecipe) {
        scaledRecipe.textContent = "please choose a recipe";
        return;
    }
    // number must be above 0 
    if (desiredServings <= 0) {
        scaledRecipe.textContent = "please enter a number above 0";
        return;
    }
    const scaleFactor = desiredServings / selectedRecipe.originalServings;
    scaledRecipe.textContent = "";


    const sectionNames = Object.keys(selectedRecipe.sections);
    
    for (let i = 0; i < sectionNames.length; i++) {
        const sectionName = sectionNames[i];
        const ingredients = selectedRecipe.sections[sectionName];
        const scaledIngredients = scaleRecipe(ingredients, scaleFactor);

        displayRecipeSection(
            "for the " + sectionName,
            scaledIngredients,
            scaledRecipe 
        );
    }
    
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

