import React, { useEffect, useState } from 'react'
import axios from 'axios'

import mag from '../../assets/burger.jfif'
import AdBanner from './AdBanner'
import RecipeCard from '../newRecipeComponents/RecipeCard'

export const url = 'https://recipes.devmountain.com'

const HomeScreen = () => {
	const [recipes, setRecipes] = useState([])
	const [search, setSearch] = useState('')

	const getRecipes = () => {
		axios.get(`${url}/recipes`).then(res => {
			setRecipes(res.data)
		})
	}

	let filteredRecipes = recipes.filter(
		recipe =>
			recipe.recipe_name.toLowerCase().includes(search.toLowerCase()) &&
			recipe.recipe_name !== 'undefined'
	)

	useEffect(() => {
		getRecipes()
	}, [])

	return (
		<div className="container">
			<AdBanner />
			<div className="search-wrapper">
				<input
					className="search-input"
					type="text"
					placeholder="Search for a Recipe"
					value={search}
					onChange={e => setSearch(e.target.value)}
				/>
				<img className="mag" src={mag} alt="magnifying glass" />
			</div>
			<main className="recipe-cards-container">
				{filteredRecipes.length > 0 ? (
					filteredRecipes.map(recipe => (
						<RecipeCard recipe={recipe} key={recipe.recipe_id} />
					))
				) : (
					<p>There are no recipes with that name.</p>
				)}
			</main>
		</div>
	)
}

export default HomeScreen