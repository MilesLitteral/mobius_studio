import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Button, ButtonToolbar } from "react-bootstrap";
import mission from "./Mission";
import Card from "./Card";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class NavBarB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ""
    };
  }

  render() {
    const wrStyles = { maxWidth: 400, margin: "3 auto 15px", left: "20px", top: "10px" };
    const wStyles = { maxWidth: 400, margin: "3 auto 15px", left: "145px", top: "10px" };
    const wBStyles = { maxWidth: 400, margin: "3 auto 15px", left: "345px", top: "10px" };
    const wXStyles = { maxWidth: 400, margin: "3 auto 15px", left: "545px", top: "10px" };
    const gin = { width: "87%", height: "65px", left: "0px" };

    return (
      <ButtonToolbar>
        <nav className="navbar navbar-default navbar-static-top navbar-inverse">
            <Link to="/Home">
            <Button
              className="glyphicon glyphicon-home"
              bsSize="large"
              bsStyle="primary"
              style={wrStyles}
            >
              {" "}
              HOME{" "}
            </Button></Link>
          <Card
            title=" Use Mobius Online"
            bsStyle="primary"
            bsSize="large"
            wellStyles={wStyles}
            ActionA="Search by Album"
            toA="/SearchAlbum"
            ActionB="Search by Artist"
            toB="/SearchArtist"
            ActionC="Search by Agent"
            toC="/SearchAgent"
            ActionD="Advanced Search"
            toD="/AdvancedSearch"
            glyph="star"
          />
          <Card
            title=" Info & Features"
            bsStyle="primary"
            bsSize="large"
            wellStyles={wBStyles}
            ActionA="Mission Statement"
            toA="/Mission"
            ActionB="Business Model"
            toB="/BusinessModel"
            ActionC="Goals & Milestones"
            toC="/Goals"
            ActionD="Services"
            toD="/Services"
            glyph="cog"
          />
          <Card
            title=" Login"
            bsStyle="primary"
            bsSize="large"
            wellStyles={wXStyles}
            ActionA="User Login"
            toA="/userLogin"
            ActionB="Artist Login"
            toB="/artistLogin"
            ActionC="Industry Agent Login"
            toC="/industryLogin"
            ActionD="Register"
            toD="/Register"
            glyph="user"
          />
          <div className="navbar-right">
            <Link to="/Home">
              <img
                style={gin}
                src={
                  "https://uploads.codesandbox.io/uploads/user/bf39a48c-cc3f-4699-9922-99498a6a8538/9TLt-Mob.png"
                }
                alt="lt"
              /></Link>
          </div>
        </nav>
      </ButtonToolbar>
    );
  }
}

export default NavBarB;
