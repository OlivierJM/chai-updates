import React, { useState } from "react";
import { Meteor } from "meteor/meteor"
import { Session } from 'meteor/session'
import UploadImage from './leads/Upload'

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
    <>
    <form onSubmit={handleCreatePost}>
      <input {...title} />
      <br />
      <input {...content} />
      <br />
      <input {...link} />
      <br />
      <div className="form-group">
        <select id="paperSelects1" defaultValue={type} onChange={handleChange}>
          <option value="video">Video</option>
          <option value="image">Image</option>
        </select>
      </div>
      <button className="btn" role="submit">
        Save
      </button>
    </form>
      <UploadImage title={title} content={content} link={link} />
    </>
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
