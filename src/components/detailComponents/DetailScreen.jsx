import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { url } from '../homeComponents/HomeScreen'

const DetailScreen = () => {
	const { id } = useParams()
	const [recipe, setRecipe] = useState({})

	useEffect(() => {
		axios.get(`${url}/recipes/${id}`).then(res => {
			setRecipe(res.data)
			console.log(res.data)
		})
	}, [id])

	return (
		<div className="detail">
			<div
				className="details-banner"
				style={{ backgroundImage: `url(${recipe.image_url})` }}
			>
				{' '}
				<div className="overlay"></div>
				<h1 className="food-title">{recipe.recipe_name}</h1>
			</div>
			<section className="recipe-details-section">
				<div className="recipe-card details">
					<h2 className="recipe-header">Recipe</h2>
					<p className="prep-time">Prep Time: {recipe.prep_time}</p>
					<p className="cook-time">Cook Time: {recipe.cook_time}</p>
					<p className="serves">Serves: {recipe.serves}</p>
					<h2 className="ingredients-header">Ingredients</h2>
					{recipe.ingredients ? (
						recipe.ingredients.map(ingredient => {
							return (
								<p
									className="ingredients"
									key={recipe.ingredients.ingredient_id}
								>
									{ingredient.quantity}{' '}
									{ingredient.ingredient}
								</p>
							)
						})
					) : (
						<p>No ingredients</p>
					)}
				</div>
				<div className="recipe-card instructions">
					<h2 className="instructions-title">Instructions</h2>
					<article className="instructions-text">
						<p style={{ whiteSpace: 'pre-wrap' }}>
							{recipe.instructions &&
								JSON.parse(JSON.stringify(recipe.instructions))}
						</p>
					</article>
				</div>
			</section>
		</div>
	)
}

export default DetailScreen
