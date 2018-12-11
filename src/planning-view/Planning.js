import React from 'react'
import BuildMeal from './BuildMeal.js'
import IngredientsList from '../IngredientsList.js'
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

        fetch(`https://when-do-i-boil-the-java.herokuapp.com/api/meals`).then(res => res.json()).then(data => {
            this.setState({
                arrayOfMeals: data
            })

        }
        )
    }

    fetchRecipes(){
        fetch(`https://when-do-i-boil-the-java.herokuapp.com/api/recipes`).then(res => res.json()).then(data => {
            this.setState({
                arrayOfRecipes: data
            })
            this.fetchAddMeal()
        })
    }

    fetchAddMeal(){
        fetch(`https://when-do-i-boil-the-java.herokuapp.com/api/meals/add`, {
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
        fetch(`https://when-do-i-boil-the-java.herokuapp.com/api/meals/remove`, {
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
        fetch(`https://when-do-i-boil-the-java.herokuapp.com/api/meals`).then(res => res.json()).then(data => {
            this.setState({
                view : newView,
                arrayOfMeals: data,
            })
        })
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
                                			<div className="meal-li-initial-stuff">
	                                            <span className="meal-li-name leading-capitals" onClick={() => {
	                                                this.props.setMeal(meal)
	                                            }}>
	                                                {meal.name}
	                                            </span>
	                                            <span className="vertical-ellipsis" onClick={()=>{
	                                                if(this.state.ingredientListToView === meal.id){
	                                                	this.setState({
		                                                    ingredientListToView: 0
		                                                })
	                                                } else {
		                                                this.setState({
		                                                    ingredientListToView: meal.id
		                                                })

	                                                }
	                                                }}>&#8942;
	                                            </span>
	                                            <span className="meal-remove-button little-red-button" onClick={
	                                                () => {
	                                                    this.fetchRemoveMeal(meal.id);
	                                            }}>
	                                                &times;
	                                            </span>
	                                        </div>
                                            {this.state.ingredientListToView === meal.id ? (
                                            	<IngredientsList recipeArray={meal.recipes} />
                                            	) : (<p />)}
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
                                <button className="new-meal-button" onClick={()=>{this.props.setView('cookbook')}}>cookbook</button>
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
