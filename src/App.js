import { Route, Routes } from 'react-router-dom'
import './App.css'

import HomeScreen from '../src/components/homeComponents/HomeScreen'
import NewRecipeScreen from '../src/components/newRecipeComponents/NewRecipeScreen'
import DetailScreen from '../src/components/detailComponents/DetailScreen'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
	return (
		<div className="app">
			<Header />
			<main className="main-content">
				<Routes>
					<Route index element={<HomeScreen />}></Route>
					<Route
						path="newRecipe"
						element={<NewRecipeScreen />}
					></Route>
					<Route path="recipe/:id" element={<DetailScreen />}></Route>
				</Routes>
			</main>
			<Footer />
		</div>
	)
}

export default App
