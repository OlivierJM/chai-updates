import React, { useState } from "react";
import { useFormValues } from './CreatePost'

function AddNumber() {
  const name = useFormValues("name")
  const number = useFormValues("number")

  function handleSubmit(e){
      e.preventDefault()
      Meteor.call('addNumber', name.value, numbers.value, err => {
          err ? console.log(err.reason) : console.log('number was added')
      })
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
