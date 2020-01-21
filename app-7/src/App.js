import React from 'react';
import ToDo from './components/ToDo';
import NewTask from './components/NewTask';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      toDoList: []
    };
    this.handleAdd = this.handleAdd.bind(this);
  }
  
  handleAdd(newTask){
    let currentList = this.state.toDoList;
    if(newTask !== ''){
      // Gets the list value at current point of running code, assigns the same variable the updated value, which is the old value plus the new value being passed as the argument
      
      // currentList = currentList.concat(newTask);
      currentList = [...currentList, newTask];
    }
    // updates state value for toDoList to be equal to the new variable 'currentList' value
    this.setState({toDoList: currentList});
  }

  render(){
    return(
      <div>
        <NewTask addItem={this.handleAdd}/>
        <ToDo listItems={this.state.toDoList} />
      </div>
    );
  }
}

export default App;