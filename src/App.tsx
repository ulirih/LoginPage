import React, { Component } from 'react';
import './App.css';
import {LoginPage} from "./Pages/LoginPage";
import {LoginViewModel} from "./ViewModel/LoginViewModel";
import {provider} from "react-ioc";
import {LoginService} from "./Services/LoginService";

@provider(LoginViewModel, LoginService)
class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginPage/>
      </div>
    );
  }
}

export default App;
