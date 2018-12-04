import React from "react";
import Cooking from "./cooking-view/Cooking.js"
import Planning from "./planning-view/Planning.js"
import Recipe from "./cooking-view/Recipe.js"
import SpotifyWidget from "./cooking-view/SpotifyWidget"
import './app.css'

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 'planning',
            meal: {}
        };

        // this.fetchATestMeal()
    }

    // fetchATestMeal(){
    // 	fetch('http://localhost:8080/api/meals/44').then(res => res.json()).then(data=>{
    // 		this.setState({meal: data, view: 'cooking'})
    // 	})
    // }

    setMeal = (newMeal) => {
        this.setState({
            meal: newMeal,
            view: 'cooking'
        })
        console.log(newMeal)
    }
    render() {

        let spotifyActive = false;

        if (this.state.view === 'cooking') {
            return (
                <section className="recipe-container">
                    {this.state.meal.recipes.map(recipe =>{
                        return <Recipe recipe={recipe} meal={this.state.meal} />
                    })}
                </section>
            )
        }
        if (this.state.view === 'planning') {
            return (
                <section className="planning-view">
                    <Planning setMeal={this.setMeal} />
                </section>
            )
        }
        if (this.state.view === 'spotify'){
            return(
                <SpotifyWidget />
            )
        }
    }
}

export default App