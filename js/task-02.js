const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

const makeIngredientsList = (ingredients) => {
    return ingredients.map((ingredient) => {
        const ingredientsItem = document.createElement("li");
        ingredientsItem.textContent = ingredient;
        ingredientsItem.classList.add("item");

        return ingredientsItem;
    });
};

const ingredientsList = makeIngredientsList(ingredients);

ingredientsEl.append(...ingredientsList);
