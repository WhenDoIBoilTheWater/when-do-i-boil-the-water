import React from 'react'
import BarTimer from './BarTimer.js'

class CurrentStepCard extends React.Component {
    // constructor(props){
    //     super(props)
    // }

    render(){
        return(
            <div>
                <p>{this.props.recipe}:</p>
                <h1>{this.props.description}</h1>
                <BarTimer length={this.props.length} />
            </div>
        )
    }
}

export default CurrentStepCard