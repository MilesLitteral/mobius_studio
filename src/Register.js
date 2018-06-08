import React from 'react'
import {FormGroup, ControlLabel, FormControl, Radio, HelpBlock, Checkbox, Button} from 'react-bootstrap';

function FieldGroup({ id, label, help, ...props }) {
  return (
    <div>
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
    </div>
  );
}

const formInstance = () => (
  <div>
  <form>
    <FieldGroup
      id="formControlsText"
      type="text"
      label="Desired Username"
      placeholder="Enter text"
      help="Example block-level help text here."
    />
    <FieldGroup
      id="formControlsEmail"
      type="email"
      label="Email address"
      placeholder="Enter email"
      help="Example block-level help text here."
    />

    <FieldGroup id="formControlsPassword" 
        label="Desired Password" 
        type="password" 
        help="Example block-level help text here."/>
    
    
    <FieldGroup
      id="formControlsFile"
      type="file"
      label="Upload Profile Picture"
      help="Example block-level help text here."
    />

    <FormGroup controlId="formControlsSelect">
      <ControlLabel>Select Account Type</ControlLabel>
      <FormControl componentClass="select" placeholder="select">
        <option value="other">User</option>
        <option value="other">Artist</option>
        <option value="other">Agent</option>
      </FormControl>
    </FormGroup>
    <Checkbox> You Agree to our Terms of Service</Checkbox>
    <Checkbox> Email me!</Checkbox>
    <Button type="submit">Submit</Button>
  </form>
  </div>
);

export default formInstance;