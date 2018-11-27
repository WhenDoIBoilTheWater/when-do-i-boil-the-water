import React from "react";
import { App } from "./App";

export class Timer extends React.Component {
  render() {
    return (
      <div>
        <h2> {this.props.description}</h2>
        <h3 style={{  marginLeft: 100 }}>
         {this.props.seconds} Seconds
        </h3>
      </div>
    );
  }
}
