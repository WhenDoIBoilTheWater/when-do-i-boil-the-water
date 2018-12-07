import React from 'react'
import BarTimer from './BarTimer.js'
import './css/CurrentStepCard.css'

class CurrentStepCard extends React.Component {
    // constructor(props){
    //     super(props)
    // }
//<BarTimer length={this.props.length} />
    render(){
        return(
            <div className="current-step-card cooking-view-card">
                <h1>{this.props.description}</h1>

            </div>
        )
    }
}

export default CurrentStepCard