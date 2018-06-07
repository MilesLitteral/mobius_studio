import React, { Component } from "react";
import ReactDOM from "react-dom";
import { MenuItem, Glyphicon, Button, Dropdown } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import mission from "./Mission";

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ""
    };
  }

  render(i) {
    const BUTTONS = [
      "Default",
      "Primary",
      "Success",
      "Info",
      "Warning",
      "Danger"
    ];

    return (
      <div>
        <Dropdown id="dropdown-custom-2" bsSize="large" style={this.props.wellStyles}>
          <Button bsStyle={this.props.bsStyle}>{this.props.title}</Button>
          <Dropdown.Toggle bsStyle="info">
            <Glyphicon glyph={this.props.glyph} />
          </Dropdown.Toggle>
          <Dropdown.Menu className="super-colors">
            <div>
              <MenuItem eventKey="1"><Link to={this.props.toA}>{this.props.ActionA}</Link></MenuItem>
              <MenuItem eventKey="2"><Link to={this.props.toB}>{this.props.ActionB}</Link></MenuItem>
              <MenuItem eventKey="3" active><Link to={this.props.toC}>{this.props.ActionC}</Link></MenuItem>
              <MenuItem divider />
              <MenuItem eventKey="4"><Link to={this.props.toD}>{this.props.ActionD}</Link></MenuItem>
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      );
  }
}

export default Card;
