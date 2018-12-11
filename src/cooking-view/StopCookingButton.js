import React from 'react'
import './css/stopCookingButton.css'

class StopCookingButton extends React.Component {
    // constructor(props){
    //     super(props)
    //     let buttonText
    //     if (!this.props.buttonText) {buttonText = 'ABORT MEAL!'}
    //     this.state = {
    //         buttonText: buttonText
    //     }
    // }

    render(){

        return(
            <button className="stop-cooking-button" onClick={()=>{this.props.setView('planning')}}>
                <strong>GIVE UP, STOP, CEASE</strong>
            </button>
        )
    }
}

export default StopCookingButton