import React, {Component} from 'react';
import TextBox from './components/TextBox';

class App extends Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div>
        <TextBox />
      </div>
    );
  };

}

export default App;