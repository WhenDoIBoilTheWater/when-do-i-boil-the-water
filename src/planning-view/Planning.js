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
        console.log("Fetching meals")
        fetch(`http://localhost:8080/api/meals`).then(res => res.json()).then(data => {
            this.setState({
                arrayOfMeals: data
            })
            console.log(data.length)
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
            method : "POST",
            body : JSON.stringify({
                mealName : 'New Meal'
            })
        })
        .then(res => res.json())
        .then(data => this.setState({
            view : 'build', 
            newMeal : data
        }))
    }

    fetchRemoveMeal(mealToRemove){
        fetch(`http://localhost:8080/api/meals/remove`, {
            method: "POST",
            body : JSON.stringify({
                mealId : mealToRemove
            })
        }).then(res => res.json()).then(data => {
            this.setState({
                arrayOfMeals: data
            })
        })
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
                                return <li className="meal-li" key={meal.id}>
                                            <span onClick={() => {
                                                this.props.setMeal(meal)
                                            }}>
                                                {meal.name}
                                            </span> 
                                            <span className="recipe-remove-button" onClick={
                                                () => {
                                                    this.fetchRemoveMeal(meal.id);
                                            }}>
                                                &times; 
                                            </span>
                                        </li>                
                            })}
                        </ul>
                    </section>
                    <section className="create-a-meal-section">
                            <div className="new-meal-input-area">
                                <button className="new-meal-button" onClick={ () => {
                                    this.fetchRecipes()
                                    }}><p>+ New Meal</p>
                                </button>
                            </div>
                    </section>
                </section>
            )
        }
        if(this.state.view === 'build'){
            
            return(
                <BuildMeal className="build-view" arrayOfRecipes={arrayOfRecipes} passedMeal={newMeal} setMeal={this.props.setMeal} fetchAddRecipeToMeal={this.fetchAddRecipeToMeal} setView={this.setView}/>
            )
        }
    }
}

export default Planning
