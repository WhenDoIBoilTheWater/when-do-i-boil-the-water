import React from "react";
import TimerCard from "./TimerCard.js"
import CurrentStepCard from "./CurrentStepCard"

export class Recipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipe: this.props.recipe,
            meal: this.props.meal,
            arrayOfTimers: [],
            globalSeconds: 0,
            currentStepDescription: 'loading...'
        };

        this.buildTimers()

        this.tick = this.tick.bind(this);
    }   

    tick =()=>{
        this.state.arrayOfTimers.forEach(timer=>{
            if (timer.when === this.state.globalSeconds){
                timer.callback()
            }
        })
        this.setState({globalSeconds: this.state.globalSeconds+1})
    }

    setTimer(when, description, callback){
        const timer = {when, description, callback}
        this.state.arrayOfTimers.push(timer)
    }

    buildTimers(){
        this.state.recipe.steps.forEach((step)=>{
            this.setTimer(this.state.meal.length - step.secBeforeEnd, step.description, () => {
                //callback function:
                let length
                if(this.state.arrayOfTimers[1]){
                    length = this.state.arrayOfTimers[1].when - this.state.globalSeconds
                } else {
                    length = 0
                }
                this.setState({
                    currentStepDescription: step.description,
                    currentStepLength: length
                })
                this.state.arrayOfTimers.shift()
            })
        })
        setInterval(this.tick, 1000)

        this.setTimer(this.state.meal.length, 'Serve', '',() => {
            this.setState({
               currentStepRecipe: 'And finally',
               currentStepDescription: 'Serve!',
               currentStepLength: 0
           })

            this.state.arrayOfTimers.shift();
        })

        this.state.arrayOfTimers.sort(function (a, b) {
            return a.when - b.when;
        });
    }



    render() {
    	let currentStep
    	if (this.state.currentStepDescription !== 'loading...'){
            currentStep = <CurrentStepCard description={this.state.currentStepDescription} length={this.state.currentStepLength} />
        }

        return (
            <section>
            <h4>{this.state.globalSeconds}</h4>
            {currentStep}
            <ul className="list-of-steps">
            {this.state.arrayOfTimers.map(timer => {
                return(
                    (<TimerCard key={timer.description} when={timer.when} description={timer.description} />)
                    )
            })}
            </ul>

            </section>
            /*<SpotifyWidget />*/
            );
    }
}

export default Recipe