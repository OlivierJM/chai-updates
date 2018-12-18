import React from "react";
import { useFormValues } from '../CreatePost'
import UploadImage from './Upload'

function CreateLeader() {
  const title = useFormValues("Name")
  const content = useFormValues("Position")
  const link = useFormValues("Phone Number")

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
