import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Login from './Login_Page/Login';
import Notfound from './Notfound'
import Result from './After_Login/Result';
import {Route,Link,BrowserRouter as Router} from 'react-router-dom'
import Register from './Registration/Register'

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/Login" component={Login} />
        <Route path="/Result" component={Result} />
        <Route path="/Register" component={Register} />
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
