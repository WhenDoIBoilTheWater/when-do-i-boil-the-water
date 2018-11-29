import React from 'react'

export class Planning extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            
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


    render(){
        let arrayOfMeals = []
        if (this.state.arrayOfMeals){
            arrayOfMeals = this.state.arrayOfMeals;
        }
        return(
            <ul>
                {arrayOfMeals.forEach(meal => {
                    <li onClick={this.props.setMealId(meal.id)}>{meal.id}</li>
                })}
            </ul>
        )
    }
}

export default Planning