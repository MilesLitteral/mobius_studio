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
      label="Text"
      placeholder="Enter text"
    />
    <FieldGroup
      id="formControlsEmail"
      type="email"
      label="Email address"
      placeholder="Enter email"
    />
    <FormControl.Static>email@example.com</FormControl.Static>

    <FieldGroup id="formControlsPassword" label="Password" type="password" />
    
    <FieldGroup
      id="formControlsFile"
      type="file"
      label="File"
      help="Example block-level help text here."
    />

    <FormGroup controlId="formControlsSelect">
      <ControlLabel>Select</ControlLabel>
      <FormControl componentClass="select" placeholder="select">
        <option value="select">select</option>
        <option value="other">...</option>
      </FormControl>
    </FormGroup>
    <Button type="submit">Submit</Button>
  </form>
  </div>
);

export default formInstance;