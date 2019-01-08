import React, { Component } from "react";

import "materialize-css/dist/css/materialize.min.css";
import "./App.css";
import Form from './Form';
class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <div class="nav-wrapper">
            <a href="#" class="brand-logo center">
            <img src={require("./logoBela.png")} alt="" />
            </a>
            
          </div>
        </nav>

      
        <div className="container" /* style={{border: '1px solid blue'}} */>
          <div className="row">
            <div className="col s10">
              <div className="row">
                <div className="col s6 offset-s2">
                  <Form/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
