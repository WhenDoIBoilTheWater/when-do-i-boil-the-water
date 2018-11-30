import React from "react";
import TimerCard from "./TimerCard.js"
import CurrentStepCard from "./CurrentStepCard"

export class Cooking extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mealId: this.props.mealId,
            meal: '',
            arrayOfTimers: [''],
            globalSeconds: 0,
            currentStepDescription: 'loading...'
        };

        this.fetchMeal()

        this.tick = this.tick.bind(this);
      }   

    tick(){
        this.state.arrayOfTimers.forEach(timer=>{
            if (timer.when === this.state.globalSeconds){
                timer.callback()
            }
        })
        this.setState({globalSeconds: this.state.globalSeconds+1})
    }

    setTimer(when, description, recipe, callback){
        const timer = {when, description, recipe, callback}
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
                recipe.steps.forEach((step)=>{

                    this.setTimer(this.state.meal.length - step.secBeforeEnd, step.description, recipe.name, () => {
                        this.setState({
                        	currentStepRecipe: recipe.name,
                            currentStepDescription: step.description,
                            currentStepLength: this.state.arrayOfTimers[2].when - this.state.globalSeconds
                        })

                        this.state.arrayOfTimers.shift();
                    })
                })

            })
            this.setTimer(this.state.meal.length, 'Serve', '',() => {
                this.setState({
                    currentStepDescription: 'Serve'
                })

                this.state.arrayOfTimers.shift();
            })
            
            this.state.arrayOfTimers.sort(function (a, b) {
                return a.when - b.when;
            });
        }
    }

    // displayCurrentStep() {
    //     return (` ${this.state.currentStepDescription} `)

    // }

    render() {

        return (
            <section>
                <h1>{this.state.globalSeconds}</h1>
                <CurrentStepCard recipe={this.state.currentStepRecipe} description={this.state.currentStepDescription} length={this.state.currentStepLength} />
                <ul>
                    {this.state.arrayOfTimers.map(timer => {
                        return(
                            (<TimerCard key={timer.description} when={timer.when} recipe={timer.recipe} description={timer.description} />)
                        )
                    })}
                </ul>

            </section>
            /*<CurrentStep />
            <NextSteps />
            <SpotifyWidget />*/
        );
  }
}

export default Cooking