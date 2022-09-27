import React from 'react'
import { useNavigate } from 'react-router-dom'

const RecipeCard = ({ recipe }) => {
	const navigate = useNavigate()

	function handleClick() {
		navigate(`/recipe/${recipe.recipe_id}`)
	}

	return (
		<div className="recipe-card">
			<div className="image-title-wrapper">
				<div className="img-wrapper">
					<img src={recipe.image_url} alt="" />
				</div>
				<h3>{recipe.recipe_name}</h3>
			</div>
			<button className="blue-btn" onClick={handleClick}>
				See More
			</button>
		</div>
	)
}

export default RecipeCard