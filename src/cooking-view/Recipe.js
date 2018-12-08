import React from "react";
import TimerCard from "./TimerCard.js"
import CurrentStepCard from "./CurrentStepCard"
import './css/recipe.css'

export class Recipe extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			recipe: this.props.recipe,
			meal: this.props.meal,
			arrayOfTimers: [],
			localSeconds: 0,
			currentStepDescription: 'loading...',
            shouldBarTimerRestart: false,
		};

		this.buildTimers()
        this.tick = this.tick.bind(this);
        
	}   

	tick =()=>{
        // if (this.state.arrayOfTimers[0]){
            this.state.arrayOfTimers.forEach(timer=>{
                if (timer.when === this.state.localSeconds){
                    timer.callback()
                }
            })
			this.setState({localSeconds: this.props.localSeconds})
		// }
	}

	setTimer(when, description, callback){
		const timer = {when, description, callback}
		this.state.arrayOfTimers.push(timer)
	}

	buildTimers(){
        //set a timer for each step
        this.state.recipe.steps.forEach((step)=>{
            this.setTimer(this.state.meal.length - step.secBeforeEnd, step.description, () => {
                //callback function:
                let length
                if(this.state.arrayOfTimers[1]){
                	length = this.state.arrayOfTimers[1].when - this.state.localSeconds
                }
                else {length = 0}
                this.setState({
                	currentStepDescription: step.description,
                	currentStepLength: length,
                    shouldBarTimerRestart: true
                    })
                this.state.arrayOfTimers.shift()
            })
        })

        //sort the timers by when they go off
        this.state.arrayOfTimers.sort(function (a, b) {
            return a.when - b.when;
        });

        //set a timer for the last step, which is to serve the food
        this.setTimer(this.state.meal.length, 'Serve', () => {
            this.setState({
                currentStepDescription: 'Serve!',
                currentStepLength: 0
            })

            this.state.arrayOfTimers.shift();
        })

        setInterval(this.tick, 500)
    }

    barTimerShouldNotRestart = () => {
        this.setState({shouldBarTimerRestart: false})
    }


    render() {
    	let currentStep
    	if (this.state.currentStepDescription !== 'loading...'){
    		currentStep = <CurrentStepCard shouldBarTimerRestart={this.state.shouldBarTimerRestart} barTimerShouldNotRestart={this.barTimerShouldNotRestart} description={this.state.currentStepDescription} length={this.state.currentStepLength} />
    	}

    	return (
    		<section className="recipe">
	    		<h4 className="recipe-time-seconds">{this.state.localSeconds}</h4>
	    		<h1 className="recipe-name">{this.state.recipe.name}</h1>
	    		<div className="steps-container">
		    		{currentStep}
		    		<ul className="list-of-steps">
			    		{this.state.arrayOfTimers.map(timer => {
			    			return(
			    				(<TimerCard key={timer.when} when={timer.when} description={timer.description} stepLength={timer.stepLength} localSeconds={this.state.localSeconds} />)
			    				)
			    		})}
		    		</ul>
	    		</div>
    		</section>
    		/*<SpotifyWidget />*/
    		);
    }
}

export default Recipe