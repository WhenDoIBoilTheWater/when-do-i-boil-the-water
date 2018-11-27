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
        fetch(`http://localhost:8080/api/meals/${this.state.mealId}`)
        .then(res=>res.json())
        .then(data => {
            this.setState({meal: data})
        })
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