import React, { Component } from "react";

import { Button, Jumbotron, ButtonToolbar } from "react-bootstrap";
import mission from './Mission';
import NavBarB from './NavBarB';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import home from './Home';
import BusinessModel from './businessModel';
import Goals from './Goals';
import formInstance from './Register'
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      os: 1
    };
  }

  render() {
    //HOME PAGE BODY
    return (
    <Router>
      <div>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
          crossOrigin="anonymous"
        />
        <link rel="shortcut icon" href="../img/favicon.ico" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js" />
        <script
          type="text/javascript"
          src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"
        />
        <NavBarB />

      <div id="bodyText">
            <Route path="/Home" component={home}></Route>
            <Route path="/Mission" component={mission}></Route>
            <Route path="/BusinessModel" component={BusinessModel}></Route>
            <Route path="/Goals" component={Goals}></Route>
            <Route path="/Register" component={formInstance}></Route>
      </div>
    </div>
</Router>
    );
  }
}

export default App;
