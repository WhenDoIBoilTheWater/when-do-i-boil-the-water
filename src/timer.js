import React from "react";

class TimerInput extends React.Component {
  render() {
    return (
      <div style={{ marginLeft: 100 }}>
        <h3>Input your desired time in seconds</h3>
        <input
          type="number"
          value={this.props.seconds}
          onChange={this.props.handleSeconds}
          required
        />
      </div>
    );
  }
}

class Timer extends React.Component {
  render() {
    return (
      <div>
        <h3 style={{  marginLeft: 100 }}>
          {this.props.value} Minutes {this.props.seconds} Seconds
        </h3>
      </div>
    );
  }
}

class StartButton extends React.Component {
  render() {
    return (
      <div style={{ marginLeft: 130 }}>
        <button
          className="btn btn-lg btn-success"
          disabled={!this.props.seconds}
          onClick={this.props.startCountDown}
        >
          Start
        </button>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: "00",
      value: "0",
      isClicked: false
    };
    this.secondsRemaining;
    this.intervalHandle;
    this.handleChange = this.handleChange.bind(this);
    this.handleSeconds = this.handleSeconds.bind(this);
    this.startCountDown = this.startCountDown.bind(this);
    this.tick = this.tick.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSeconds(event) {
    this.setState({
      seconds: event.target.value
    });
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
    }

    this.secondsRemaining--;
  }

  startCountDown() {
    this.intervalHandle = setInterval(this.tick, 1000);
    let time = this.state.value;
    this.secondsRemaining = (time * 60) + this.state.seconds;
    this.setState({
      isClicked: true
    });
  }

  render() {
    const clicked = this.state.isClicked;
    if (clicked) {
      return (
        <div>
          <div className="row">
            <div className="col-md-4" />
            <div className="col-md-4">
              <Timer value={this.state.value} seconds={this.state.seconds} />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="row">
            <div className="col-md-4" />
            <div className="col-md-4">
              <TimerInput
                value={this.state.value}
                handleChange={this.handleChange}
                handleSeconds={this.handleSeconds}
              />
              <Timer value={this.state.value} seconds={this.state.seconds} />
              <StartButton
                startCountDown={this.startCountDown}
                seconds={this.state.seconds}
              />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default App