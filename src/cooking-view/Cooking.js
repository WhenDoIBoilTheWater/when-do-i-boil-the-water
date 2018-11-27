import React from "react";

export class Cooking extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mealId: this.props.mealId,
            meal: '',
            arrayOfTimers: [],
            globalSeconds: 0
        };

        this.fetchMeal()

        this.tick = this.tick.bind(this);
      }   

    tick(){
        this.setState({globalSeconds: this.state.globalSeconds+1})
        this.state.arrayOfTimers.forEach(timer=>{
            if (timer.when+1 === this.state.globalSeconds){
                timer.callback()
            }
        })
    }

    setTimer(when, callback){
        const timer = {when, callback}
        this.state.arrayOfTimers.push(timer)
    }

    fetchMeal() {
        fetch(`http://localhost:8080/api/meals/${this.state.mealId}`)
        .then(res=>res.json())
        .then(data => {
            this.setState({
                meal: data
            })
            this.buildTimers()
        })
    }

    buildTimers(){
        setInterval(this.tick, 1000)
        if(this.state.meal){
            this.state.meal.recipes.forEach(recipe=>{
                recipe.steps.forEach(step=>{
                    this.setTimer(this.state.meal.length - step.secBeforeEnd, function(){alert(step.description)})
                })
            })
        }
    }

    render() {        
        return (
            <p>{this.state.globalSeconds}</p>
            /*<CurrentStep />
            <NextSteps />
            <SpotifyWidget />*/
        );
  }
}

export default Cooking