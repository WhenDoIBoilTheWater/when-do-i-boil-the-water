import React from 'react'
import './css/stopCookingButton.css'

class StopCookingButton extends React.Component {
    // constructor(props){
    //     super(props)

    // }

    render(){

        return(
            <button className="stop-cooking-button new-meal-button" onClick={()=>{this.props.setView('planning')}}>
                <strong>ABORT MEAL!</strong>
            </button>
        )
    }
}

export default StopCookingButton