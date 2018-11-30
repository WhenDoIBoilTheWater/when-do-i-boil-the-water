import React from 'react'
import Build from './Build.js'

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
                <section>
                    Premade Meals:
                    <ul>
                        {arrayOfMeals.map(meal => {
                            return <li key={meal.id} onClick={() => {this.props.setMeal(meal)}}>{meal.name}</li>                
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
                <Build arrayOfRecipes={arrayOfRecipes} newMeal={newMeal} setMeal={this.props.setMeal} fetchAddRecipeToMeal={this.fetchAddRecipeToMeal}/>
            )
        }
    }
}

export default Planning
