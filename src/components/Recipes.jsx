import { useEffect } from "react";
import { useState } from "react";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="md:w-2/3">
      <h1>Recipe Cards</h1>
    </div>
  );
};

export default Recipes;
