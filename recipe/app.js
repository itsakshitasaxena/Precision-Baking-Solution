async function fetchRecipe() {
    const dish = document.getElementById("dish").value.trim();
    const servings = document.getElementById("servings").value.trim();
    if (!dish || !servings) {
        alert("Please enter both the dish name and the number of servings.");
        return;
    }
    
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${dish}`);
        const data = await response.json();
        
        if (data.meals) {
            displayRecipe(data.meals[0], servings);
        } else {
            document.getElementById("recipe-title").innerText = "Recipe not found!";
            document.getElementById("ingredients").innerHTML = "Try another dish.";
            document.getElementById("steps").innerHTML = "";
            document.getElementById("recipe").style.display = "block";
        }
    } catch (error) {
        alert("Error fetching recipe. Please check your internet connection and try again.");
        console.error("Fetch error:", error);
    }
}

function displayRecipe(meal, servings) {
    document.getElementById("recipe-title").innerText = `${meal.strMeal} Recipe for ${servings} servings`;
    
    let ingredientsList = document.getElementById("ingredients");
    ingredientsList.innerHTML = "";
    for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`] && meal[`strMeasure${i}`]) {
            let li = document.createElement("li");
            li.innerText = `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`;
            ingredientsList.appendChild(li);
        }
    }
    
    let stepsList = document.getElementById("steps");
    stepsList.innerHTML = "";
    meal.strInstructions.split(". ").forEach(step => {
        if (step.trim()) {
            let li = document.createElement("li");
            li.innerText = step.trim();
            stepsList.appendChild(li);
        }
    });
    
    document.getElementById("recipe").style.display = "block";
}