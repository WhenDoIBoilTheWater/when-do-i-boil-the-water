import React from 'react'
import './BarTimer.css'

class BarTimer extends React.Component {
    // constructor(props){
    //     super(props)

    // }

    render(){

        let length = `${this.props.length*1000-1}ms`
        let styles = {
            animationDuration: length
        }


        return(
            <div className="bar-timer-field">
                <div style={styles} className="bar-timer-bar" />
            </div>
        )
    }
}

export default BarTimer