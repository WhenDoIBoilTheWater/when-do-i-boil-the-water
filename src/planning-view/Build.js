import React from 'react'

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
            <section>
                Recipes go here!
                    <ul>
                    {this.props.arrayOfRecipes.map(recipe => {
                        return <li key={recipe.id} onClick={() => { this.fetchAddRecipeToMeal(recipe.id) }}>{recipe.name}</li>
                    })}
                </ul>

                <div>
                    {this.state.newMeal.name} {this.state.newMeal.length} Seconds
                        <ul>
                        {this.state.newMeal.recipes.map(recipe => {
                            return <li key={recipe.id} >{recipe.name}<span>[X]</span></li>
                        })
                        }
                    </ul>
                    <button onClick={() => { this.props.setMeal(this.props.newMeal.id) }}>Cook</button>
                </div>
            </section>
        )
    }
}

export default Build