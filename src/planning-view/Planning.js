import React from 'react'
import BuildMeal from './BuildMeal.js'
import './css/planning.css'

export class Planning extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            view: 'premade'
        }
        this.fetchMeals()
    }

    fetchMeals(){
        fetch(`http://localhost:8080/api/meals`).then(res => res.json()).then(data => {
            this.setState({
                arrayOfMeals: data
            })
        }
        )
    }

    fetchRecipes(){
        fetch(`http://localhost:8080/api/recipes`).then(res => res.json()).then(data => {
            this.setState({
                arrayOfRecipes: data
            })
            this.fetchAddMeal()
        })
    }

    fetchAddMeal(){
        fetch(`http://localhost:8080/api/meals/add`, {
            method : "POST"
        })
        .then(res => res.json())
        .then(data => this.setState({
            view : 'build', 
            newMeal : data
        }))
    }

    setView = (newView) => {
        this.setState({view : newView})
    }

    render(){
        let arrayOfMeals = []
        let arrayOfRecipes = []
        let newMeal = {}
        if (this.state.arrayOfMeals){
            arrayOfMeals = this.state.arrayOfMeals;
        }
        if (this.state.arrayOfRecipes){
            arrayOfRecipes = this.state.arrayOfRecipes;
        }
        if (this.state.newMeal){
            newMeal = this.state.newMeal;
        }
        if(this.state.view === 'premade'){
            return(
                <section className="planning-section">
                    <section className="saved-meals-section">
                        <h2>Saved Meals:</h2>
                        <ul className="meals-ul">
                            {arrayOfMeals.map(meal => {
                                return <li className="meal-li" key={meal.id} onClick={() => {this.props.setMeal(meal)}}>{meal.name}</li>                
                            })}
                        </ul>
                    </section>
                    <section className="create-a-meal-section">
                            <div className="new-meal-input-area">
                                <button className="new-meal-button" onClick={ () => {
                                    this.fetchRecipes()
                                    }}><p>New Meal</p>
                                </button>
                            </div>
                    </section>
                </section>
            )
        }
        if(this.state.view === 'build'){
            
            return(
                <BuildMeal className="build-view" arrayOfRecipes={arrayOfRecipes} newMeal={newMeal} setMeal={this.props.setMeal} fetchAddRecipeToMeal={this.fetchAddRecipeToMeal} setView={this.setView}/>
            )
        }
    }
}

export default Planning
