import React from 'react'
import StopCookingButton from "../cooking-view/StopCookingButton"
import './cookbook.css'


class Cookbook extends React.Component {
	constructor(props){
		super(props)

		this.state = {
			steps : [],
			ingredients : [],
			recipeLength : 0,

		}
	}


	componentDidMount() {
		// document.querySelector('.recipe-name-input').value = "New Recipe";
		// document.querySelector('.recipe-description-input').value = "Recipe Description";
		// document.querySelector('.recipe-serving-size-input').value = "2";

		// document.querySelector('.new-ingredient-name-input').value = "Ingredient";
		// document.querySelector('.new-ingredient-quantity-input').value = "How Much?";

		// document.querySelector('.new-step-length-input').value = "How Long?";
		// document.querySelector('.new-step-description-input').value = "Step description?";
	}
	
	submitRecipe = () => {
		if(document.querySelector('.recipe-name-input').value === '' ||  document.querySelector('.recipe-description-input').value === '' || document.querySelector('.recipe-serving-size-input').value === ''){
			alert('You failed to fill in your recipe details')
			return
		}

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

	submitIngredient = () => {
		if(document.querySelector('.new-ingredient-name-input').value === '' || document.querySelector('.new-ingredient-quantity-input').value === ''){
			alert('You failed to fill in everything for your ingredient')
			return
		}

		let ingredientArray = this.state.ingredients
		let newIngredient = {
			ingredientsName: document.querySelector('.new-ingredient-name-input').value,
			ingredientsQty: document.querySelector('.new-ingredient-quantity-input').value,
		}
		ingredientArray.push(newIngredient)
		this.setState({
			ingredients: ingredientArray
		})
		document.querySelector('.new-ingredient-name-input').value = ''
		document.querySelector('.new-ingredient-quantity-input').value = ''
	}


	submitStep = () => {
		if(document.querySelector('.new-step-description-input').value === '' || document.querySelector('.new-step-length-input').value === ''){
			alert('You failed to fill in everything for your step')
			return
		}

		let stepArray = this.state.steps
		let newStep = {
			stepDescription: document.querySelector('.new-step-description-input').value,
			secondsToEnd: 0
		}

		stepArray.push(newStep)
		let newStepLength = document.querySelector('.new-step-length-input').value
		
		stepArray.forEach(step => {
			step.secondsToEnd = (parseInt(step.secondsToEnd) + parseInt(newStepLength))
		})

		this.setState({
			steps: stepArray
		})

		document.querySelector('.new-step-description-input').value = ''
		document.querySelector('.new-step-length-input').value = ''
	}


	render(){

		return(
			<section className="cookbook-section">
				<h1>Add a New Recipe: </h1>

				<header>
					<label>Recipe Name: <input className="recipe-name-input" type="text" /></label>
					<label>Serving Size: <input className="recipe-serving-size-input" type="text" /></label>
					<label>Description: <textarea className="recipe-description-input"></textarea></label>
					
				</header>


				<section className="ingredient-in-new-recipe-section">
					<div className="add-ingredients-to-new-recipe">
						<label>Add Ingredient: <input className="new-ingredient-name-input" type="text" /></label>
						<label>Quantity: <input className="new-ingredient-quantity-input" type="text" /></label>
					</div>
						<button className="add-ingredient-button little-red-button" onClick={()=>{this.submitIngredient()}}>+</button>
					<div className="added-ingredients-for-new-recipe">
						<span>Ingredients:</span>
						{this.state.ingredients.map(ingredient=>{
							return(<li>{ingredient.ingredientsQty} {ingredient.ingredientsName}</li>)
						})}
					</div>
				</section>


				<section className="add-step-to-new-recipe-section">
					<div>
						<div className="new-recipe-new-step-top-row">
							<label>Step Length: <input className="new-step-length-input" type="number"/></label>
						</div>
						<label>Step Description: 
							<textarea className="new-step-description-input" type="text"></textarea>
						</label>
							<button className="add-step-button little-red-button" onClick={()=>{this.submitStep()}}>+</button>
					</div>
					<div className="added-steps-for-new-recipe">
						<span>Steps:</span>
						{this.state.steps.map(step=>{
							return(<li>{step.stepDescription}</li>)
						})}
					</div>
				</section>

				<div className="submit-new-recipe-button-area">
					<button className="submit-recipe-button" onClick={() => {
						this.submitRecipe()
					}}> Submit New Recipe</button>
				</div>

				<StopCookingButton setView={this.props.setView} />

			</section>
		)
	}
}

export default Cookbook