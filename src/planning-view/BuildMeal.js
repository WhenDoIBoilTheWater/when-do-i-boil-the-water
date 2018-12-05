import React from 'react'
import './css/build.css'

class BuildMeal extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            arrayOfRecipes : this.props.arrayOfRecipes,
            newMeal : this.props.passedMeal
        }
        
    }
    fetchAddRecipeToMeal(recipeToAdd){
        fetch(`http://localhost:8080/api/meals/addRecipe`, {
            method: "POST",
            body : JSON.stringify({
                mealId : this.state.newMeal.id,
                recipeId : recipeToAdd
            })
        }).then(res => res.json()).then(data => this.setState({newMeal : data}))

    }

    fetchRemoveMeal(){
        fetch(`http://localhost:8080/api/meals/remove`, {
            method: "POST",
            body : JSON.stringify({
                mealId : this.state.newMeal.id
            })
        })
    }

    fetchRemoveRecipe(recipeToRemove){
        fetch(`http://localhost:8080/api/recipes/remove`, {
            method: "POST",
            body : JSON.stringify({
                recipeId : recipeToRemove
            })
        }).then(res => res.json()).then(data => {this.setState({arrayOfRecipes : data})})
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
                        this.props.setView('premade')
                    }}>
                        ➦
                    </span>
                    <h2>Which would you like to cook?</h2>
                </div>
                <ul className="list-of-recipes">
                    {this.state.arrayOfRecipes.map(recipe => {
                        return <li className="recipe-li" key={recipe.id} onClick={() => { this.fetchAddRecipeToMeal(recipe.id) }}>{recipe.name}</li>
                    })}
                </ul>

                <div className="new-meal-summary">
                    <h3><input className="meal-name" type="text"></input>: {this.state.newMeal.length} seconds</h3>
                    <ul className="list-of-added-recipes">
                        {this.state.newMeal.recipes.map(recipe => {
                            return <li className="added-recipe-li" key={recipe.id}>
                                <p>{recipe.name}</p>
                                <span className="recipe-remove-button" onClick={() => {
                                    this.fetchRemoveRecipe(recipe.id);
                                }}> &times; </span>
                            </li>
                        })
                        }
                    </ul>
                    <button className="cook-button" onClick={() => {this.props.setMeal(this.state.newMeal) }}>Cook</button>
                </div>
            </section>
        )
    }
}

export default BuildMeal