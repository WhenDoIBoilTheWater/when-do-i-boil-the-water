import React from "react";
import Cooking from "./cooking-view/Cooking.js"
import Planning from "./planning-view/Planning.js"
export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view : 'cooking',
      mealId : ''
    };
  }

  setMealId = (id) => {
    this.setState({mealId: id})
  }
  render() {

    if(this.state.view === 'cooking'){
      return (
      <Cooking mealId={44}/>
      )
    }
    else if (this.state.view === 'planning'){
      return <Planning setMealId={this.setMealId} />
    }
  }
}

export default App