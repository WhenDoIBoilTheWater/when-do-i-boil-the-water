import React from "react";
import Cooking from "./cooking-view/Cooking.js"
import Planning from "./planning-view/Planning.js"
import './app.css'

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view : 'planning',
      mealId : ''
    };
  }

  setMealId = (id) => {
    this.setState({
      mealId: id,
      view: 'cooking'
    })

  }
  render() {

    if(this.state.view === 'cooking'){
      return (
      <Cooking mealId={this.state.mealId}/>
      )
    }
    else if (this.state.view === 'planning'){
      return <Planning setMealId={this.setMealId} />
    }
  }
}

export default App