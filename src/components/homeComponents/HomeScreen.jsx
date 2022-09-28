import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AdBanner from './AdBanner'
//import RecipeCard from '../newRecipeComponents/RecipeCard'

export const url = 'https://recipes.devmountain.com'

const HomeScreen = () => {  
  const [setRecipes] = useState([])
	//const [search, setSearch] = useState('')
  const getRecipes = () => {
    axios
        .get(`${url}/recipes`)
        .then((res) => {
            setRecipes(res.data)
            console.log(res.data)
        })
}

  useEffect(() => {
      getRecipes()
  },[])
  return (
    <div>
      <AdBanner />
      {/* Much code from Part 2 will be placed around here. Do your best! */}
    </div>
  )
}

export default HomeScreen