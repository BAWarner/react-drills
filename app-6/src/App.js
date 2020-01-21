import React from 'react';
import ToDo from './components/ToDo';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      toDoList: [],
      toDoItem: ''
    };
    this.addToToDo = this.addToToDo.bind(this);
  }
  inputToDo = (e) => {
    this.setState({toDoItem: e.target.value});
  }
  addToToDo(){
    var item = this.state.toDoItem;
    var toDoList = this.state.toDoList;
    if(item != ''){
      toDoList = toDoList.concat(item);
    }
    this.setState({toDoList});
  }
  render(){
    var list = this.state.toDoList.map(
      (val, i) => {
        return <ToDo key={`listItem${i}`} singleToDoItem={val}/>;
      }
    );
    return(
      <div>
        <input 
          onChange={this.inputToDo}
          type="text" 
        />
        <button
          onClick={this.addToToDo}
        >Add Item</button>
        {list}
      </div>
    );
  }
}

export default App;