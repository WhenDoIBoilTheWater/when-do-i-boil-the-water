import React from 'react'
import BarTimer from './BarTimer.js'
import './css/CurrentStepCard.css'

class CurrentStepCard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            showTimer: true
        }
    }
//<BarTimer length={this.props.length} />


    toggleTimer = () => {

        this.setState({showTimer: false})
        setInterval(
            ()=>{this.setState({showTimer: true})}
            , 10)
    }

    render(){
        if (this.props.shouldBarTimerRestart === true){
            this.toggleTimer()
            this.props.barTimerShouldNotRestart()
        }

        let barTimer = this.state.showTimer ? <BarTimer length={this.props.length} toggleTimer={this.toggleTimer}/> : ''

        return(
            <div className="current-step-card cooking-view-card">
                <p>{this.props.description}</p>
                {barTimer}
            </div>
        )
    }
}

export default CurrentStepCard