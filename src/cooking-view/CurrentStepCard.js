import React from 'react'
import BarTimer from './BarTimer.js'
import './css/CurrentStepCard.css'

class CurrentStepCard extends React.Component {
    // constructor(props){
    //     super(props)
    // }

    render(){
        return(
            <div className="current-step-card">
                <p>{this.props.recipe}:</p>
                <h1>{this.props.description}</h1>
                <BarTimer length={this.props.length} />
            </div>
        )
    }
}

export default CurrentStepCard