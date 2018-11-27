import React from "react";
import Cooking from "./cooking-view/Cooking.js"

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  
  render() {
    return (
      <Cooking mealId={11}/>
    )
  }
}

export default App