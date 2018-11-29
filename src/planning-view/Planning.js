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
        }
        )
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
                        <li> Create Your Own <input type="text"></input><button onClick={ () => {
                            this.setState({view : 'build'})
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
                            return <li key={recipe.id} >{recipe.name}</li>                
                        })}
                    </ul>

                    <div>
                        Your Meal
                    </div>
                </section>
            )
        }
    }
}

export default Planning