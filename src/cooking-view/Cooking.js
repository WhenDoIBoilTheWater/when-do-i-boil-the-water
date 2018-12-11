import React from 'react'
import StopCookingButton from "./StopCookingButton"
import Recipe from "./Recipe.js"

class Cooking extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			meal: this.props.meal,
			globalSeconds: 0
		}

		this.tick = this.tick.bind(this);
		setInterval(this.tick, 1000)
	}

	tick =()=>{
			this.setState({globalSeconds: this.state.globalSeconds+1})
		}

	render(){

		return(
			<div className="cooking-section">
				<section className="recipe-container">
					{this.state.meal.recipes.map(recipe =>{
						return (<Recipe key={recipe.id} recipe={recipe} meal={this.state.meal} localSeconds={this.state.globalSeconds} />)
					})}
				</section>
				<StopCookingButton setView={this.props.setView} />
			</div>
			)
	}
}

export default Cooking