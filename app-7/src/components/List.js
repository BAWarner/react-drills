import React, {Component} from 'react';

export default class List extends Component{
    render(){
        return(
            // Returns the value of property listItem being given from ToDo component
            <h3>{this.props.listItem}</h3>
        );
    }
}