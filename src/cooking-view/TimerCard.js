import React from "react";
import './css/timerCard.css'

export class TimerCard extends React.Component {
	constructor(props) {
        super(props)
        this.state = {
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
	    		<p>{this.state.description}</p>
	    		<p>{this.state.whenOClock}</p>
    		</section>
    	)
    }

}

export default TimerCard