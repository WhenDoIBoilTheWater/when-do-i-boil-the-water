import React from "react";
import Cooking from "./cooking-view/Cooking.js"
import Planning from "./planning-view/Planning.js"
import './app.css'

export class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			view : 'planning',
			meal: {}
		};
	}

	setMeal = (meal) => {
		this.setState({
			meal: meal,
			view: 'cooking'
		})

	}
	render() {

		if(this.state.view === 'cooking'){
			this.state.meal.recipes.forEach(recipe =>{
				return (
					<Recipe recipe={recipe} meal={this.state.meal} />
					)
			})
		}
		else if (this.state.view === 'planning'){
			return <Planning setMealId={this.setMealId} />
		}
	}
}

export default App