/* eslint-disable react/prop-types */
const Sidebar = ({ recipeQueue, handleRemove, preparedRecipe, calculateTimeAndCalories, totalTime, totalCalories }) => {
  return (
    <div className="md:w-1/3 mt-12 border rounded-2xl font-fira-sans text-gray-600">
      {/* want to cook table */}
      <h2 className="font-lexend text-[#282828] text-center mt-8 font-semibold text-2xl">
        Want to cook: {recipeQueue.length}{" "}
      </h2>
      <hr className="my-4 w-4/6 mx-auto" />

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row */}
            {recipeQueue.map((recipe, index) => (
              <tr className="hover" key={index}>
                <th>{index + 1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time}</td>
                <td>{recipe.calories}</td>
                <td>
                  <button
                    onClick={() => {
                      handleRemove(recipe.recipe_id);
                      calculateTimeAndCalories(
                        recipe.preparing_time,
                        recipe.calories
                      );
                    }}
                    className="btn btn-sm rounded-full bg-[#0BE58A] border-none font-lexend"
                  >
                    Preparing
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* currently cooking table */}
      <h2 className="font-lexend text-[#282828] text-center mt-8 font-semibold text-2xl">
        Currently Cooking: {preparedRecipe.length}
      </h2>
      <hr className="my-4 w-4/6 mx-auto" />

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {/* row */}
            {preparedRecipe.map((recipe, index) => (
              <tr className="hover" key={index}>
                <th>{index + 1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time}</td>
                <td>{recipe.calories}</td>
              </tr>
            ))}

            <tr className="border-none font-lexend font-medium">
              <th></th>
              <td></td>
              <td>Total = {totalTime} minutes</td>
              <td>Total = {totalCalories} calories</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sidebar;
