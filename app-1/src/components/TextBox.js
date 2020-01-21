import React from 'react';

export default class TextBox extends React.Component{
    constructor(){
        super();
        this.state = {
            textBox: '',
        }
    }
    updateText = (e) => {
        this.setState({textBox: e.target.value});
    }
    render(){
        return(
            <div>
                <input onChange={this.updateText} type="text" />
                <h1>{this.state.textBox}</h1>
            </div>
        );
    }
}