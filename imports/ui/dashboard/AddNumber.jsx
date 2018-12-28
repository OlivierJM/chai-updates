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
import { useFormValues } from "./CreatePost";

function AddNumber() {
  const name = useFormValues("");
  const number = useFormValues("");

  function handleSubmit(e) {
    e.preventDefault();
    Meteor.call("addNumber", name.value, number.value, err => {
      err ? console.log(err.reason) : console.log("number was added");
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
            <Input placeholder="full name" {...name} required />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroupAddon addonType="prepend">Number</InputGroupAddon>
            <Input placeholder="phone number" {...number} required />
          </InputGroup>
          <br />
          <Button color="primary" role="submit">
            Save
          </Button>
        </form>
      </Col>
    </Row>
  );
}

export default AddNumber;
