import React from "react";
import './css/timerCard.css'

export class TimerCard extends React.Component {
	constructor(props) {
        super(props)
        this.state = {
        	recipe: this.props.recipe,
        	description: this.props.description,
        	when: this.props.when,
        	whenOClock: ''
        }

    }

	componentDidMount() {
		this.setEndOClock()
	}

    setEndOClock() {
        let timeObject = new Date(); 
        timeObject = new Date(timeObject.getTime() + 1000*this.state.when);
        let d = (timeObject.toLocaleTimeString());
        this.setState({whenOClock: d})
    }

    render() {


    	return(
    		<section className="timer-card">
	    		<p>{this.state.recipe}:</p>
	    		<p>{this.state.description}</p>
	    		<p>{this.state.whenOClock}</p>
	    		<br />
    		</section>
    	)
    }

}

export default TimerCard