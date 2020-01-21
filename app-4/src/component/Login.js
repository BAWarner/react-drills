import React from 'react';

class Login extends React.Component{
    constructor(){
        super();
        this.state = {
            username: '',
            password: ''
        };
        this.loginUser = this.loginUser.bind(this);
    }
    handleChange = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }
    loginUser(){
        let {username, password} = this.state;
        alert(`User: ${username}\rPassword: ${password}`);
    }
    render(){
        return(
            <div>
                <input 
                    onChange={this.handleChange}
                    name='username'
                    type="text" 
                />
                <input 
                    onChange={this.handleChange}
                    name='password'
                    type="password" 
                />
                <button
                    onClick={this.loginUser}
                >Login</button>
            </div>
        );
    }
}

export default Login;