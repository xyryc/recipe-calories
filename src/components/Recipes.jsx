import { useEffect } from "react";
import { useState } from "react";

const Recipes = ({addRecipeToQueue}) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="md:w-2/3 font-fira-sans mt-12">
      <div className="grid lg:grid-cols-2 gap-6">
        {recipes.map((recipe) => (
          <div key={recipe.recipe_id} className="border rounded-2xl p-6">
            <img
              className="w-full h-[200px] object-cover rounded-2xl"
                // src={recipe.recipe_image}
              alt={`recipe image of ${recipe.recipe_name}`}
            />

            {/* title */}
            <div className="my-6">
              <p className="font-lexend text-xl font-semibold">
                {recipe.recipe_name}
              </p>
              <p className=" text-[#878787] my-4">{recipe.short_description}</p>
              <hr />
            </div>

            {/* ingredients container */}
            <div className="mb-4">
              <h3 className="font-lexend font-medium text-lg mb-4">
                Ingredients: {recipe.ingredients.length}
              </h3>
              <ul className="list-disc list-inside  text-[#878787]">
                {recipe.ingredients.map((item, index) => (
                  <li className="" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* bottom container */}
            <div>
              <hr />
              <div className="my-6 text-gray-700">
                <span className="mr-4">
                  <i className="fa-regular fa-clock mr-2"></i>
                  <span>{recipe.preparing_time} minutes</span>
                </span>
                <span> 
                <i className="fa-solid fa-fire-flame-curved mr-2"></i>
                <span>{recipe.calories} calories</span>
                </span>
              </div>
            </div>

            <button 
            onClick={ ()=> addRecipeToQueue(recipe)}
             className="btn rounded-full bg-[#0BE58A] border-none font-lexend">
              Want to Cook
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
