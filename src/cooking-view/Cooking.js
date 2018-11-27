import React from "react";

export class Cooking extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mealId: this.props.mealId
        };

        this.fetchMeal()
      }   

    setTimer(length){}

    fetchMeal() {
        fetch(`/api/meals/${this.state.mealId}`)
    }

    render() {        
        return (
            <p />
            /*<CurrentStep />
            <NextSteps />
            <SpotifyWidget />*/
        );
  }
}

export default Cooking