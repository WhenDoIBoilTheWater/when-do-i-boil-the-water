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
            if (timer.when <= this.state.globalSeconds){
                timer.callback()
            }
        })
    }

    setTimer(when, description, callback){
        const timer = {when, description, callback}
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

                    this.setTimer(this.state.meal.length - step.secBeforeEnd, step.description, () => {
                        this.setState({
                            description: `${recipe.name}` + ': ' + `${step.description}`,
                            nextStep: this.state.arrayOfTimers[1]
                        })

                        this.state.arrayOfTimers.shift();
                    })
                })

            })
            this.setTimer(this.state.meal.length, 'Serve!?', () => {
                this.setState({
                    description: 'Serve!?',
                    nextStep: this.state.arrayOfTimers[1]
                })

                this.state.arrayOfTimers.shift();
            })
            
            this.state.arrayOfTimers.sort(function (a, b) {
                return a.when - b.when;
            });
        }
    }

    displayCurrentStep() {
        return (` ${this.state.description} `)

    }

    render() {       
        let description = '' 
        let when = ''
        let nextStepIn = ''
        if (this.state.nextStep){
            description = this.state.nextStep.description;
            when = this.state.nextStep.when - this.state.globalSeconds;
            nextStepIn = ` ${description} in ${when} seconds`
         }
        return (
            <section>
                <h1>{this.state.globalSeconds}</h1>
                <h2>{this.displayCurrentStep()}</h2>
                <h3>{nextStepIn}</h3>
            </section>
            /*<CurrentStep />
            <NextSteps />
            <SpotifyWidget />*/
        );
  }
}

export default Cooking