import React from 'react'

class BarTimer extends React.Component {
    // constructor(props){
    //     super(props)

    // }

    render(){
        let styles = {
            animationDuration :  this.props.endTime
        }

        return(
            <div style={styles} className="bar">

            </div>
        )
    }
}

export default BarTimer