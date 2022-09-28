import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AdBanner from './AdBanner'
import RecipeCard from '../newRecipeComponents/RecipeCard'

export const url = 'https://recipes.devmountain.com'

const HomeScreen = () => {  
  const [recipes, setRecipes] = useState([])
	const [search, setSearch] = useState('')
  const getRecipes = () => {
    axios
        .get(`${url}/recipes`)
        .then((res) => {
            setRecipes(res.data)
            console.log(res.data)
        })
}
const searchedRecipe = recipes
    .filter((recipe, index) => {
      let title = recipe.recipe_name.toLowerCase();
      let searchParams = search.toLowerCase();
      return title.includes(searchParams);
    })
    .map((recipe, index) => {
      return <RecipeCard recipe={recipe} />;
    });

  useEffect(() => {
      getRecipes()
  },[])

  return (
    <div>
      <AdBanner classname="banner" />
      <div className="homeSearch">
        <input
          className="searchBar"
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search for a Recipe"
        />
      </div>
      <div className="srchRecipe">{searchedRecipe}</div>
    </div>
  );
}

export default HomeScreen