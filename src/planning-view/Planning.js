import React from 'react'

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
            this.fetchAddMeal(this.state.mealName)
        })
    }

    fetchAddMeal(mealName){
        fetch(`http://localhost:8080/api/meals/add`, {
            method : "POST",
            body : JSON.stringify({name : this.state.mealName})
        })
        .then(res => res.json())
        .then(data => this.setState({
            view : 'build', 
            newMeal : data
        }))
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

    render(){
        let arrayOfMeals = []
        let arrayOfRecipes = []
        if (this.state.arrayOfMeals){
            arrayOfMeals = this.state.arrayOfMeals;
        }
        if (this.state.arrayOfRecipes){
            arrayOfRecipes = this.state.arrayOfRecipes;
        }
        if(this.state.view === 'premade'){
            return(
                <section>
                    Premade Meals:
                    <ul>
                        {arrayOfMeals.map(meal => {
                            return <li key={meal.id} onClick={() => {this.props.setMealId(meal.id)}}>{meal.name}</li>                
                        })}
                        <li> Create Your Own <input id="mealName" type="text"></input><button onClick={ () => {
                            this.setState({
                                mealName : document.querySelector('#mealName').value
                            })
                            this.fetchRecipes()
                        }}>Start</button></li>
                    </ul>
                </section>
            )
        }
        if(this.state.view === 'build'){
            
            return(
                <section>
                    Recipes go here!
                    <ul>
                        {arrayOfRecipes.map(recipe => {
                            return <li key={recipe.id} onClick={() => {this.fetchAddRecipeToMeal(recipe.id)}}>{recipe.name}</li>                
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
                        <button onClick={() => {this.props.setMealId(this.state.newMeal.id)}}>Cook</button>
                    </div>
                </section>
            )
        }
    }
}

export default Planning
