import React from "react";
import { useFormValues } from '../CreatePost'
import UploadImage from './Upload'

function CreateLeader() {
  const title = useFormValues("title")
  const content = useFormValues("content")
  const link = useFormValues("link")

  return (
    <>
    <form>
      <input {...title} />
      <br />
      <input {...content} />
      <br />
      <input {...link} />
      <br />
    </form>
      <UploadImage title={title.value} content={content.value} link={link.value} />
    </>
  );
}

export default CreateLeader;
