import { useState } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import OurRecipes from "./components/OurRecipes";
import Recipes from "./components/Recipes";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [recipeQueue, setRecipeQueue] = useState([]);

  const addRecipeToQueue = (recipe) => {
    const isExist = recipeQueue.find(
      (previousRecipe) => previousRecipe.recipe_id === recipe.recipe_id
    );

    if (!isExist) {
      setRecipeQueue([...recipeQueue, recipe]);
    } else {
      alert("Recipe already exist in queue");
    }
  };

  console.log(recipeQueue);

  return (
    <div className="container mx-auto px-4">
      {/* Header section */}
      <Header />
      {/* Banner section */}
      <Banner />
      {/* Our Recipes section */}
      <OurRecipes />
      {/* Recipe Card section */}
      <section className="flex flex-col md:flex-row gap-6 pb-24">
        {/* Card section */}
        <Recipes addRecipeToQueue={addRecipeToQueue} />
        {/* Sidebar section */}
        <Sidebar />
      </section>
    </div>
  );
};

export default App;
