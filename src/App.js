import React from "react"
import Planning from "./planning-view/Planning.js"
import Cooking from './cooking-view/Cooking'
import SpotifyWidget from "./cooking-view/SpotifyWidget"
import Cookbook from './cookbook/Cookbook'
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

    setMeal = (newMeal) => {
        this.setState({
            meal: newMeal,
            view: 'cooking'
        })
    }

    setView = (newView) => {
        this.setState({
            meal: {},
            view: newView
        })
    }

    render() {

        if (this.state.view === 'cooking') {
            return (
                <Cooking meal={this.state.meal} setView={this.setView} />
            )
        }
        if (this.state.view === 'planning') {
            return (
                <section className="planning-view">
                    <Planning setMeal={this.setMeal} />
                    <button className="new-meal-button" onClick={()=>{this.setView('cookbook')}}>cookbook</button>
                </section>
            )
        }
        if (this.state.view === 'cookbook'){
            return (
                <Cookbook setView={this.setView}/>
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