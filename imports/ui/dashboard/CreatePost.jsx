import React, { useState } from "react";
import { Meteor } from "meteor/meteor"

function createPost() {
  const title = useFormValues("title")
  const content = useFormValues("content")
  const link = useFormValues("link")
  const [type, setType ] = useState('image')

  function handleCreatePost(e) {
    e.preventDefault();
    Meteor.call("createPost", title.value, content.value, link.value, type);
  }
  function handleChange(event){
    setType(event.target.value)
  }
  return (
    <form onSubmit={handleCreatePost}>
      <input {...title} />
      <br />
      <input {...content} />
      <br />
      <input {...link} />
      <br />
      <div className="form-group">
        <select id="paperSelects1" defaultValue={type} onChange={handleChange}>
          <option value="1">Video</option>
          <option value="2">Image</option>
        </select>
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
