import React, { useState } from "react";
import { Meteor } from "meteor/meteor";
import { Select } from "antd";

const Option = Select.Option;

function createPost() {
  const title = useFormValues("title");
  const content = useFormValues("content");
  const link = useFormValues("link");
  const [type, setType ] = useState('image')

  function handleCreatePost(e) {
    e.preventDefault();
    Meteor.call("createPost", title.value, content.value, link.value, type);
  }
  function handleChange(value){
    setType(value)
  }
  return (
    <form onSubmit={handleCreatePost}>
      <input {...title} />
      <br />
      <input {...content} />
      <br />
      <input {...link} />
      <br />
      <div>
        <Select
          value={type}
          style={{ width: 120 }}
          onChange={handleChange}
        >
          <Option value="video">Video</Option>
          <Option value="image">Image</Option>
        </Select>
      </div>
      <button className="btn" role="submit">
        submit
      </button>
    </form>
  );
}

function useFormValues(initial) {
  const [value, setValue] = useState(initial);
  function handleValueChange(e) {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleValueChange
  };
}

export default createPost;
