import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ImgDetail from "./detailImg";

const DetailScreen = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  console.log(recipe);

  const url = `https://recipes.devmountain.com`;

  useEffect(() => {
    axios.get(`${url}/recipes/${id}`).then((response) => {
      setRecipe(response.data);
    });
  }, []);

  return (
    <div>
      <ImgDetail className="imgDetail" title={recipe.recipe_name} image={recipe.image_url}/>
      <div className="detailsContainer">
      <div className="ingredients">
        <h2>Recipe</h2>
        <h4>Prep Time: {recipe.prep_time}</h4>
        <h4>Cook Time: {recipe.cook_time}</h4>
        <h4>Serves: {recipe.serves}</h4>
        <h2>Ingredients</h2>
        {recipe.ingredients &&
          recipe.ingredients.map((ing, index) => {
            return (
              <h4>
                {ing.quantity} {ing.ingredient}
              </h4>
            );
          })}
      </div>
      <div className="instructions">
        <h2>Instructions</h2>
        <p style={{ whiteSpace: "pre-wrap" }}>
          {recipe.instructions && JSON.parse(recipe.instructions)}
        </p>
      </div>
    </div>
    </div>
  );
};

export default DetailScreen;