import React, { useEffect } from "react";
import { Meteor } from "meteor/meteor";
import {
  InputGroup,
  InputGroupAddon,
  Button,
  Input,
  Row,
  Col
} from "reactstrap";
import { useFormValues, useError } from "./CreatePost";


// todo: clean the when successful
function AddNumber() {
  const name = useFormValues("");
  const number = useFormValues("");
  const { error, setError } = useError('')

  function handleSubmit(e) {
    e.preventDefault();
    Meteor.call("addNumber", name.value, number.value, err => {
      err ? setError(err.reason) : (name.clearInput(), number.clearInput());
    });
  }
  return (
    <Row>
      <Col sm="12" md={{ size: 6, offset: 3 }}>
        <h5 className="text-center">Add Member Numbers</h5>
        <br />
        <form onSubmit={handleSubmit}>
          <InputGroup>
            <InputGroupAddon addonType="prepend">Name</InputGroupAddon>
            <Input placeholder="full name" value={name.value} onChange={name.onChange} required />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroupAddon addonType="prepend">Number</InputGroupAddon>
            <Input placeholder="phone number" value={number.value} onChange={number.onChange} required />
          </InputGroup>
          <br />
          <Button color="primary" role="submit">
            Save
          </Button>
        </form>
        <p className='text-danger'>{error.length && error || null }</p>
      </Col>
    </Row>
  );
}

export default AddNumber;
