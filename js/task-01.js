const categoriesEl = document.querySelector("#categories");

const categoriesItemsEl = categoriesEl.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesItemsEl.length}`);

for (const category of categoriesItemsEl) {
    const categoryNameEl = category.querySelector("h2");
    const categoryListEl = category.querySelectorAll("li");
    console.log(`Category: ${categoryNameEl.textContent}`);
    console.log(`Elements: ${categoryListEl.length}`);
}
