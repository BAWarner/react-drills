import React, {Component} from 'react';
import Login from './component/Login';

class App extends Component{
  constructor(){
    super();
  }
  render(){
    return(
        <div>
          <Login />
        </div>
      )
  }
}

export default App;