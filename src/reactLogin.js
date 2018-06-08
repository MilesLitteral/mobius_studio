import React, { Component } from 'react';
import './login.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class reactLogin extends Component {

  var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
  var Input = React.createClass({
  
  function render() {
    return(
          <div className= "Input" >
  <input id={this.props.name} autocomplete="false" required type={this.props.type} placeholder={this.props.placeholder} />
  <label for={this.props.name}></label>
          </div >
          );
        }
      });

var Modal = React.createClass({
  render() {
    return (
      <div className="Modal">
        <form onSubmit={this.props.onSubmit} className="ModalForm">
          <Input id="name" type="text" placeholder="Jack-Edward Oliver" />
          <Input id="username" type="email" placeholder="mrjackolai@gmail.com" />
          <Input id="password" type="password" placeholder="password" />
          <button>Log in <i className="fa fa-fw fa-chevron-right"></i></button>
        </form>
      </div>
    );
  }
});

getInitialState()){
  return { mounted: false };
},
  
componentDidMount() {
  this.setState({ mounted: true });
},
  
handleSubmit(e) {
  this.setState({ mounted: false });
  e.preventDefault();
},

render() {
  var child;
  if (this.state.mounted) {
    child = (<Modal onSubmit={this.handleSubmit} />);
  }

  return (
    <div className="App">
      <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
        {child}
      </ReactCSSTransitionGroup>
    </div>
  );
}
}
