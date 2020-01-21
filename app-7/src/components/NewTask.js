import React from 'react';

class NewTask extends React.Component{
    constructor(){
        super();
        this.state = {
          toDoItem: ''
        }
        this.handleChange =  this.handleChange.bind(this);
      }
      handleChange(e){
        // watches for change on input field, sets this.state.toDoItem value as value of input field
        this.setState({toDoItem: e.target.value});
      }
      addToToDo = () => {
        //Invokes function being passed as property from parent (App), giving the argument of new input value handled by this component's 'handleChange' function
        this.props.addItem(this.state.toDoItem);
        this.setState({toDoItem: ''})
      }
    render(){
        return(
            <div>
                <input onChange={this.handleChange} type='text' />
                <button onClick={this.addToToDo}>Add To ToDo</button>
            </div>
        );
    }
}

export default NewTask;