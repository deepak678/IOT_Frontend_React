import React from 'react';
import '../Login_Page/Login.css'
import axios from "axios";

export default class Register extends React.Component
{
constructor(props){
    super(props);
    this.state={
        username:'',
        password:'',
        result:''
    }
    this.handleEvent = this.handleEvent.bind(this);
    this.handlePasswordChange=this.handlePasswordChange.bind(this);
    this.handleUsernameChange=this.handleUsernameChange.bind(this);
}

handleUsernameChange(){ 
    this.setState({username:document.getElementById("username").value});
    }
    
    handlePasswordChange(){
      this.setState({password:document.getElementById("pass").value});
    }

handleEvent(){  
    const response =axios.post(
      'http://localhost:5001/RegisterUser',this.state
    ).then((res) => { 
    this.setState({result: res.data})
      }
    ).catch((error) => {
      console.log(error)
    });
    }

render(){
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
            <input  type="button" value="Register" onClick={this.handleEvent}></input>
          </form>
        <h1>{this.state.result}</h1>
        </div>
        </div>);
}
}