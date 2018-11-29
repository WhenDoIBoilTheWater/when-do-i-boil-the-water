import React from "react";

export class TimerCard extends React.Component {
	constructor(props) {
        super(props)
        this.state = {
        	recipe: this.props.recipe,
        	description: this.props.description,
        	when: this.props.when
        }
    }

    render() {
    	let date = Date.now();

    	console.log(date)

    	return(
    		<section>
	    		<p>{this.state.recipe}:</p>
	    		<h3>{this.state.description}</h3>
    		</section>
    	)
    }

}

export default TimerCard