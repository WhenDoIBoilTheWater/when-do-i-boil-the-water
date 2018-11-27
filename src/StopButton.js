import React from "react";

export class StopButton extends React.Component {
  render() {
    return (<div style={{ marginLeft: 130 }}>
      <button 
      className="btn btn-lg btn-success" 
      onClick={this.props.stopCountDown}>
        Stop
        </button>
    </div>);
  }
}