import React from 'react'
import './BarTimer.css'

class BarTimer extends React.Component {
    constructor(props){
        super(props)

    }

    render(){
        let length = `${this.props.length}s`
        console.log(length)
        const styles = {
            // animationDuration: '5s'
            animationDuration: length,
            width: '0%'
        }

        return(
            <div className="bar-timer-field">
                <div style={styles} className="bar-timer-bar" />
            </div>
        )
    }
}

export default BarTimer