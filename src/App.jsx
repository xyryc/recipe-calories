import { useState } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import OurRecipes from "./components/OurRecipes";
import Recipes from "./components/Recipes";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [recipeQueue, setRecipeQueue] = useState([]);
  const [preparedRecipe, setPreparedRecipe] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

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

  const handleRemove = (id) => {
    // find which recipe to remove using find
    const deletedRecipe = recipeQueue.find(
      (recipeQueue) => recipeQueue.recipe_id === id
    );

    // remove from want to cook table using filter
    const updatedQueue = recipeQueue.filter(
      (recipeQueue) => recipeQueue.recipe_id !== id
    );

    setRecipeQueue(updatedQueue);
    setPreparedRecipe([...preparedRecipe, deletedRecipe]);
  };

  const calculateTimeAndCalories = (time, calories) => { 
    setTotalTime(totalTime + time)
    setTotalCalories(totalCalories + calories)
  };

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
        <Sidebar
          recipeQueue={recipeQueue}
          handleRemove={handleRemove}
          preparedRecipe={preparedRecipe}
          calculateTimeAndCalories={calculateTimeAndCalories}
          totalTime={totalTime}
          totalCalories={totalCalories}
        />
      </section>
    </div>
  );
};

export default App;
