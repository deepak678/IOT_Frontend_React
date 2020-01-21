import React from 'react';
import './Login.css';
import axios from "axios";
import { Redirect, Link } from 'react-router-dom';
import '../After_Login/Result'

export default class Login extends React.Component {
constructor(props){
    super(props);
    this.state={
      username: '',
      password:'',
      result: false,
      value:''
    }
    this.handleEvent = this.handleEvent.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
}

handleUsernameChange(){ 
this.setState({username:document.getElementById("username").value});
}

handlePasswordChange(){
  this.setState({password:document.getElementById("pass").value});
}

handleEvent(){  
const response =axios.post(
  'http://localhost:5000/login',this.state
).then((res) => { 
  if(res.data=="Login Successful")
  {
  this.setState({result: true});
  }
  else{
    this.setState({value: res.data})
  }
}).catch((error) => {
  console.log(error)
});
}

render()
{
  if(this.state.result)
  {
    return <Redirect to='/Result' />}
    return(
    <div className="Login-Header">
    <div className="Login">
      <form className="form">
        <table>
          <tbody>
            <tr><td>Username:</td><td><input id="username" type="text" name="username" defaultValue="" onInput={this.handleUsernameChange}></input></td></tr>
            <tr><td>Password:</td><td><input id="pass" type="password" name="password" defaultValue="" onInput={this.handlePasswordChange}></input></td></tr>
          </tbody>
        </table>
        <input  type="button" value="login" onClick={this.handleEvent}></input>
      </form>
    <h1>{this.state.value}</h1>
    </div>
    </div>);
    
     
}
}