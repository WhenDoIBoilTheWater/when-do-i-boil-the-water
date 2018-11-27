import React from "react";
export class StartButton extends React.Component {
  render() {
    return (<div style={{ marginLeft: 130 }}>
      <button className="btn btn-lg btn-success" disabled={!this.props.seconds} onClick={this.props.startCountDown}>
        Start
        </button>
    </div>);
  }
}