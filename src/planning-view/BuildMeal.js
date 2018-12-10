import React from 'react'
import './css/build.css'
import IngredientsList from '../IngredientsList'

class BuildMeal extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            arrayOfRecipes : this.props.arrayOfRecipes,
            newMeal : this.props.passedMeal
        }
        
    }
    fetchAddRecipeToMeal(recipeToAdd){
        fetch(`https://when-do-i-boil-the-java.herokuapp.com/api/meals/addRecipe`, {
            method: "POST",
            body : JSON.stringify({
                mealId : this.state.newMeal.id,
                recipeId : recipeToAdd
            })
        }).then(res => res.json()).then(data => this.setState({newMeal : data}))

    }

    fetchRemoveMeal(){
        fetch(`https://when-do-i-boil-the-java.herokuapp.com/api/meals/remove`, {
            method: "POST",
            body : JSON.stringify({
                mealId : this.state.newMeal.id
            })
        }).then(() => {this.props.setView('premade')})
    }

    fetchRemoveRecipe(recipeToRemove){
        fetch(`https://when-do-i-boil-the-java.herokuapp.com/api/meal/removeRecipe`, {
            method: "POST",
            body : JSON.stringify({
                recipeId : recipeToRemove,
                mealId : this.state.newMeal.id
            })
        }).then(res => res.json()).then(data => {this.setState({newMeal : data})})
    }

    fetchUpdateMealName(name){
        fetch(`https://when-do-i-boil-the-java.herokuapp.com/api/meals/updateName`, {
            method : "POST",
            body : JSON.stringify({
                mealId : this.state.newMeal.id,
                mealName : name
            })
        }).then(() => {this.props.setView('premade')})
    }

    componentDidMount() {
        document.querySelector('.meal-name').value = (this.state.newMeal.name)
    }
    render() {
        return (
            <section className="build-meal-section">
                <div className="top-bar">
                    <span className="back-button" style={{cursor : 'pointer'}} onClick={() => {
                        this.fetchRemoveMeal();
                        
                    }}>
                        ➦
                    </span>
                    <h2>What's for dinner?</h2>
                </div>
                <ul className="list-of-recipes">
                    {this.state.arrayOfRecipes.map(recipe => {
                        return (
                            <li className="recipe-li" key={recipe.id}>
                            	<div className="recipe-top-row">
		                            <span className="dim-on-hover recipe-you-could-select-in-build-view" onClick={() => {
			                            	this.fetchAddRecipeToMeal(recipe.id) 
			                            }}>
			                            {recipe.name}
		                            </span>
		                            <span className="dim-on-hover vertical-ellipsis" onClick={()=>{
			                            	if(this.state.ingredientListToView === recipe.id){
			                            		this.setState({
			                            			ingredientListToView: 0
			                            		})
			                            	} else {
			                            		this.setState({
			                            			ingredientListToView: recipe.id
			                            		})

			                            	}
			                            }}>&#8942;
		                            </span>
		                        </div>
                            {this.state.ingredientListToView === recipe.id ? (
                                            	<IngredientsList recipeArray={[recipe]} />
                                            	) : (<p />)}
                            </li>
						)
                    })}
                </ul>

                <div className="new-meal-summary">
                    <h3>
                        <input className="meal-name" type="text"></input>: {this.state.newMeal.length} seconds
                    </h3>
                    <ul className="list-of-added-recipes">
                        {this.state.newMeal.recipes.map(recipe => {
                            return <li className="added-recipe-li" key={recipe.id}>
                                <p>{recipe.name}</p>
                                <span className="recipe-remove-button little-red-button" onClick={() => {
                                    this.fetchRemoveRecipe(recipe.id);
                                }}> &times; </span>
                            </li>
                        })
                        }
                    </ul>
                    <section className="button-section">
                        <button className="build-meal-button cook-button" on onClick={() => {
                            this.props.setMeal(this.state.newMeal) 
                            this.fetchUpdateMealName(document.querySelector('.meal-name').value);
                            }}>Cook</button>

                        <button className="build-meal-button save-button" onClick={() => {
                            this.fetchUpdateMealName(document.querySelector('.meal-name').value);
                            
                            }}>Save</button>
                    </section>
                </div>
            </section>
        )
    }
}

export default BuildMeal