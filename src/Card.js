import React, { Component } from "react";
import { MenuItem, Glyphicon, Button, Dropdown } from "react-bootstrap";

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
            <MenuItem eventKey="1">{this.props.ActionA}</MenuItem>
            <MenuItem eventKey="2">{this.props.ActionB}</MenuItem>
            <MenuItem eventKey="3" active>{this.props.ActionC}</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4">{this.props.ActionD}</MenuItem>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}

export default Card;
