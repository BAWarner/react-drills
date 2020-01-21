import React, {Component} from 'react';

class App extends Component{
  constructor(){
    super();
    this.state = {
      pieTypes: ['Apple', 'Peach', 'Cherry', 'Blueberry', 'Pumpkin', 'Chocolate']
    };
  }
  render(){
    var pies = this.state.pieTypes.map( 
      (element, index) => {
        return <h1 key={index}>{element}</h1>
      }
    );
    return(
      <div>{pies}</div>
    );
  }
}

export default App;