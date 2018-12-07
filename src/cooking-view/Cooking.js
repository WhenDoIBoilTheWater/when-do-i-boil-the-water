import React from 'react'
import StopCookingButton from "./StopCookingButton"
import Recipe from "./Recipe.js"

class Cooking extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			meal: this.props.meal
		}
	}

	render(){

		return(
			<section className="recipe-container">
				{this.state.meal.recipes.map(recipe =>{
					return <Recipe key={recipe.id} recipe={recipe} meal={this.state.meal} />
				})}
				<StopCookingButton setView={this.props.setView} />
			</section>
			)
	}
}

export default Cooking