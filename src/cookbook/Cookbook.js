import React from 'react'
import './cookbook.css'

class Cookbook extends React.Component {
	constructor(props){
		super(props)

		this.state = {
			steps : [],
			ingredients : []
		}
	}


	// fetchRecipes(){
	// 	fetch(`http://localhost:8080/api/recipes`).then(res => res.json()).then(data => {
	// 		this.setState({
	// 			arrayOfRecipes: data
	// 		})
	// 	})
	// }


	componentDidMount() {
		document.querySelector('.recipe-name-input').value = "New Recipe";
		document.querySelector('.recipe-description-input').value = "Recipe Description";
		document.querySelector('.recipe-serving-size-input').value = "2";

		document.querySelector('.new-ingredient-name-input').value = "Ingredient";
		document.querySelector('.new-ingredient-quantity-input').value = "How Much?";

		document.querySelector('.new-step-length-input').value = "How Long?";
		document.querySelector('.new-step-description-input').value = "Step description?";
	}
	
	submitRecipe = () => {
		fetch(`http://localhost:8080/api/recipes/add`,{
			method : "POST",
			body : JSON.stringify({
				recipeName : document.querySelector('.recipe-name-input').value,
				recipeDescription : document.querySelector('.recipe-description-input').value,
				servingSize : document.querySelector('.recipe-serving-size-input').value,
				stepsArray : this.state.steps,
				ingredientsArray : this.state.ingredients
			})
		}).then(() => { this.props.setView("planning")})
	}

	// addIngredient () => {

	// }
	render(){

		return(
			<section className="cookbook-section">
				<h1>Add a New Recipe: </h1>
				<section>
					<input className="recipe-name-input" type="text" />
					<textarea className="recipe-description-input"></textarea>
					<input className="recipe-serving-size-input" type="text" />
				</section>
				<section className="add-ingredients-to-new-recipe">
					<input className="new-ingredient-name-input" type="text" />
					<input className="new-ingredient-quantity-input" type="text" />
					<button className="add-ingredient-button little-red-button" >+</button>
				</section>
				<section className="add-step-to-new-recipe-section">
					<input className="new-step-length-input" type="text"/>
					<textarea className="new-step-description-input" type="text"></textarea>
					<button className="add-step-button little-red-button">+</button>
				</section>
				<button className="submit-recipe-button" onClick={() => {
					this.submitRecipe()
				}}> Submit New Recipe</button>
			</section>
		)
	}
}

export default Cookbook