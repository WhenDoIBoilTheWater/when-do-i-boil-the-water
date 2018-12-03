import React from 'react'
import './css/build.css'

class Build extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            newMeal : {
                name : this.props.newMeal.name,
                length : '0',
                recipes : []
            }
        }
    }
    fetchAddRecipeToMeal(recipeToAdd){
        fetch(`http://localhost:8080/api/meals/addRecipe`, {
            method: "POST",
            body : JSON.stringify({
                mealId : this.props.newMeal.id,
                recipeId : recipeToAdd
            })
        }).then(res => res.json()).then(data => this.setState({newMeal : data}))

    }

    render() {
        return (
            <section className="build-meal-section">
                Recipes go here!
                    <ul className="list-of-recipes">
                    {this.props.arrayOfRecipes.map(recipe => {
                        return <li className="recipe-li" key={recipe.id} onClick={() => { this.fetchAddRecipeToMeal(recipe.id) }}>{recipe.name}</li>
                    })}
                </ul>

                <div className="new-meal-summary">
                    {this.state.newMeal.name} {this.state.newMeal.length} Seconds
                        <ul className="list-of-added-recipes">
                        {this.state.newMeal.recipes.map(recipe => {
                            return <li className="added-recipe-li" key={recipe.id} >{recipe.name}<span>[X]</span></li>
                        })
                        }
                    </ul>
                    <button className="cook-button" onClick={() => {this.props.setMeal(this.state.newMeal) }}>Cook</button>
                </div>
            </section>
        )
    }
}

export default Build