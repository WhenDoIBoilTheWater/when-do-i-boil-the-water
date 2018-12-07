import React from 'react'
import './cookbook.css'

class Cookbook extends React.Component {
	// constructor(props){
	// 	super(props)

	// }


	// fetchRecipes(){
	// 	fetch(`http://localhost:8080/api/recipes`).then(res => res.json()).then(data => {
	// 		this.setState({
	// 			arrayOfRecipes: data
	// 		})
	// 	})
	// }

	render(){

		return(
			<section className="cookbook-section">
				<h1>Add a New Recipe: </h1>
				<input className="recipe-name-input" type="text" value="New Recipe" />
				<section className="add-ingredients-to-new-recipe">
					<input className="new-ingredient-input" type="text" value="Ingredient" />
					<input className="new-ingredient-quantity-input" type="text" value="How Much?" />
					<button className="add-ingredient-button recipe-remove-button">+</button>
				</section>
				<section className="add-step-to-new-recipe-section">
					<input className="new-step-input" type="text" value="New Step" />
					<input className="new-step-length-input" type="text" value="Length" />
					<button className="add-step-button recipe-remove-button">+</button>
				</section>
			</section>
		)
	}
}

export default Cookbook