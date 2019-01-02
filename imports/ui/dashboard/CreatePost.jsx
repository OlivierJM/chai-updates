import React, { useState } from "react";
import { InputGroup, InputGroupAddon, Col, Row, Input } from "reactstrap";
import UploadImage from "./leads/Upload";

function createPost() {
  const title = useFormValues("");
  const content = useFormValues("");
  const link = useFormValues("");
  const [type, setType] = useState("image");

  function handleChange(event) {
    console.log(event.target.value);
    setType(type);
  }
  return (
    <Row>
      <Col sm="12" md={{ size: 8, offset: 2 }}>
        <form>
          <InputGroup>
            <InputGroupAddon addonType="prepend">Title</InputGroupAddon>
            <Input value={title.value} onChange={title.onChange} placeholder="The title goes here" />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroupAddon addonType="prepend">Text</InputGroupAddon>
            <textarea
              value={content.value} 
              onChange={content.onChange}
              rows={4}
              cols={50}
              placeholder="write your post content here"
            />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroupAddon addonType="prepend">Link</InputGroupAddon>
            <Input value={link.value} onChange={link.onChange} placeholder="The Video or Image goes here" />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroupAddon addonType="prepend">Link Type</InputGroupAddon>
            <Input type="select" defaultValue={type} onChange={handleChange}>
              <option value="image">Image</option>
              <option value="video">Video</option>
            </Input>
          </InputGroup>
        </form>
        <UploadImage
          title={title.value}
          type={type}
          content={content.value}
          link={link.value}
        />
        <br />
      </Col>
    </Row>
  );
}

export function useFormValues(initial) {
  const [value, setValue] = useState(initial);
  function handleValueChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleValueChange,
    clearInput: () => setValue(initial),
  };
}

/**
 * @param {String} initialError
 * @returns {Object} error, setError
 */
export function useError(initialError){
  const [error, setError] = useState(initialError)
  return {
      error,
      setError
  }
}

export default createPost;
