import { useEffect } from "react";
import { useState } from "react";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="md:w-2/3 font-fira-sans">
      {recipes.map((recipe) => (
        <div key={recipe.recipe_id} className="border rounded-2xl p-6">
          {/* <img
            className="w-[330px] h-[200px] object-cover rounded-2xl"
            src={recipe.recipe_image}
            alt=""
          /> */}

          {/* title */}
          <div className="my-6">
            <p className="font-lexend text-xl font-semibold">
              {recipe.recipe_name}
            </p>
            <p className=" my-4">{recipe.short_description}</p>
            <hr />
          </div>

          {/* ingredients container */}
          <div className="mb-4">
            <h3 className="font-lexend font-medium text-lg">Ingredients: </h3>
          </div>

          {/* bottom container */}
          <div>
            <hr />
            <div className="my-6">
              <span>Time</span>
              <span>Calories</span>
            </div>
          </div>

          <button className="btn rounded-[50px] bg-[#0BE58A] border-none font-lexend">
            Want to Cook
          </button>
        </div>
      ))}
    </div>
  );
};

export default Recipes;
