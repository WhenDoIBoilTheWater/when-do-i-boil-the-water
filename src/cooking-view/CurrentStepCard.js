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
        console.log('toggle timer has been called')
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
                <h1>{this.props.description}</h1>
                {barTimer}
            </div>
        )
    }
}

export default CurrentStepCard