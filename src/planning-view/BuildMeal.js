import React from 'react'
import './css/build.css'

class BuildMeal extends React.Component {

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

    fetchRemoveRecipe(){
        fetch(`http://localhost:8080/api/meals/removeRecipe`, {
            method: "POST",
            body : JSON.stringify({
                mealId : this.props.newMeal.id
            })
        })
    }
    componentDidMount() {
        document.querySelector('.meal-name').value = (this.state.newMeal.name)
    }
    render() {
        return (
            <section className="build-meal-section">
                <div className="top-bar">
                    <span className="back-button" style={{cursor : 'pointer'}} onClick={() => {
                        this.fetchRemoveRecipe();
                        this.props.setView('premade')
                    }}>
                        ➦
                    </span>
                    <h2>Which would you like to cook?</h2>
                </div>
                <ul className="list-of-recipes">
                    {this.props.arrayOfRecipes.map(recipe => {
                        return <li className="recipe-li" key={recipe.id} onClick={() => { this.fetchAddRecipeToMeal(recipe.id) }}>{recipe.name}</li>
                    })}
                </ul>

                <div className="new-meal-summary">
                    <h3><input className="meal-name" type="text"></input>: {this.state.newMeal.length} seconds</h3>
                    <ul className="list-of-added-recipes">
                        {this.state.newMeal.recipes.map(recipe => {
                            return <li className="added-recipe-li" key={recipe.id}>
                                <p>{recipe.name}</p>
                                <span className="recipe-remove-button"> &times; </span>
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