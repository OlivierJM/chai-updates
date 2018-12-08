import React, { useState } from "react";
import { useFormValues } from './CreatePost'

function AddNumber() {
  const name = useFormValues("name")
  const number = useFormValues("number")

  function handleSubmit(e){
      e.preventDefault()
      console.log(name.value)
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <input {...name} />
      <br />
      <input {...number} />

      <br />
    <button role='submit'>
        Save
    </button>
    </form>
    </>
  );
}



export default AddNumber;
