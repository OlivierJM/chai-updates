import React, { useState } from "react";
import UploadImage from './leads/Upload'

function createPost() {
  const title = useFormValues("title")
  const content = useFormValues("content")
  const link = useFormValues("link")
  const [type, setType ] = useState('image')

  function handleChange(event){
    setType(event.target.value)
  }
  return (
    <>
    <form>
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
    </form>
      <UploadImage title={title.value} content={content.value} link={link.value} />
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
