import React from "react";
export class TimerInput extends React.Component {
  render() {
    return (<div style={{ marginLeft: 100 }}>
      <h3>Input your desired time in seconds</h3>
      <input type="number" value={this.props.seconds} onChange={this.props.handleSeconds} required />
    </div>);
  }
}