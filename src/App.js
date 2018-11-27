import React from "react";
import { StartButton } from "./StartButton";
import { Timer } from "./timer";
import { TimerInput } from "./TimerInput";
import { StopButton } from "./StopButton";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step : 0,
      seconds: "00",
      value: "0",
      isClicked: false,
      isPaused: false,
      currentStep: {
          id : '1',
          secBeforeEnd : '10',
          description : 'boil'
        }
    };
    this.secondsRemaining;
    this.intervalHandle;
    this.startCountDown = this.startCountDown.bind(this);
    this.stopCountDown = this.stopCountDown.bind(this);
    this.tick = this.tick.bind(this);
  }

  tick() {
    var min = Math.floor(this.secondsRemaining / 60);
    var sec = this.secondsRemaining - min * 60;
    this.setState({
      value: min,
      seconds: sec
    });
    if (sec < 10) {
      this.setState({
        seconds: "0" + this.state.seconds
      });
    }
    if (min < 10) {
      this.setState({
        value: "0" + min
      });
    }
    if ((min === 0) & (sec === 0)) {
      clearInterval(this.intervalHandle);
      if (!this.state.default[this.state.step + 1]){
        this.setState({
          isClicked: false,
          step : this.state.step + 1
        })
      }
      else{
        this.setState({
          isClicked: false
        })
      }
    }
    this.secondsRemaining--;
  }
  startCountDown() {
    this.intervalHandle = setInterval(this.tick, 1000);
    this.secondsRemaining = this.state.currentStep.secBeforeEnd;
    this.setState({
      isClicked: true
    });
  }

  stopCountDown() {
    clearInterval(this.intervalHandle);
    if (!this.state.default[this.state.step + 1]){
      this.setState({
        isClicked: false,
        step : this.state.step + 1
      })
    }
    else{
      this.setState({
        isClicked: false
      })
    }
  }
  
  render() {
    const clicked = this.state.isClicked;
    if (clicked) {
      return (
        <div>
          <Timer value={this.state.value} seconds={this.state.seconds} description={this.state.currentStep.description} />
          <StopButton stopCountDown={this.stopCountDown}/>
        </div>);
    }
    else {
      return (
          <div>
            <Timer value={this.state.value} seconds={this.state.currentStep.secBeforeEnd} description={this.state.currentStep.description} />
            <StartButton startCountDown={this.startCountDown} seconds={this.state.seconds} />
          </div>
          );
    }
  }
}

export default App