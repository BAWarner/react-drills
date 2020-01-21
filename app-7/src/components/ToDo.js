import React, {Component} from 'react';
import List from './List';

class ToDo extends Component{
    render(){
        let list = this.props.listItems.map(
            (val, i) => {
                // Loops through all values being sent in the listItems property from parent component (App). listItems is being updated by the NewTask component, returning the new values, which are later passed as the property (listItems). Sets the variable 'list' to map returned array.
                return <List key={i} listItem={val} />
            }
        );
        return(
            <div>
                <h1>My ToDo List:</h1>
                {/** displays list from variable set above **/}
                {list}
            </div>
        );
    }
}

export default ToDo;