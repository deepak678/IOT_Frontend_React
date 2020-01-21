import React from 'react';
import './App.css';
import Login from './Login_Page/Login';
import Result from './After_Login/Result';
import { Redirect } from 'react-router-dom';
import Register from './Registration/Register'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      login: false,
      register: false
    }
    this.clickedLogin = this.clickedLogin.bind(this);
    this.clickedRegister = this.clickedRegister.bind(this); 
  }
  
  clickedLogin(){
    this.setState({login: true});
  }

  clickedRegister(){
    this.setState({register: true});
  }

  render(){
    if(this.state.login){
      return <Redirect to='/Login' />
    }
    if(this.state.register){
      return <Redirect to='/Register' />
    }
    return(
    <div>
    <input type="Button" defaultValue="Login" onClick={this.clickedLogin}></input>
    <input type="Button" defaultValue="Register" onClick={this.clickedRegister}></input></div>);
  }
}


export default App;
