import { Link } from 'react-router-dom'
import React from 'react'

const Header = () => {
	return (
		<header className="main-header">
			<h2 className="header-title">
				<Link to="/">Devmountain Eatery</Link>
			</h2>
			<nav>
				<button>
					<Link to="/">Home</Link>
				</button>
				<button>
					<Link to="newRecipe">Add Recipe</Link>
				</button>
			</nav>
		</header>
	)
}

export default Header