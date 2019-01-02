import React from "react";
import {
  InputGroup,
  InputGroupAddon,
  Input,
  Row,
  Col
} from "reactstrap";
import { useFormValues } from "../CreatePost";
import UploadImage from "./Upload";

function CreateLeader() {
  const title = useFormValues("");
  const position = useFormValues("");
  const link = useFormValues("");

  return (
    <Row>
      <Col sm="12" md={{ size: 6, offset: 3 }}>
      <h4 className='text-center'>Add a Leader</h4>
      <br />
        <form>
          <InputGroup>
            <InputGroupAddon addonType="prepend">Name</InputGroupAddon>
            <Input placeholder="Title" value={title.value} onChange={title.onChange} required />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroupAddon addonType="prepend">Title</InputGroupAddon>
            <Input placeholder="Position" value={position.value} onChange={position.onChange} required />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroupAddon addonType="prepend">Number</InputGroupAddon>
            <Input placeholder="Phone Number" value={link.value} onChange={link.onChange} required />
          </InputGroup>
          <br />
        </form>
        <UploadImage
          title={title.value}
          content={position.value}
          link={link.value}
        />
      </Col>
    </Row>
  );
}

export default CreateLeader;
