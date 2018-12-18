import React, { useEffect } from "react"
import { Meteor } from 'meteor/meteor'
import { useFormValues } from "./CreatePost"

function AddNumber() {
  const name = useFormValues("name")
  const number = useFormValues("number")

  useEffect(() => {
    Meteor.subscribe('numbers')
  })

  function handleSubmit(e) {
    e.preventDefault();
    Meteor.call("addNumber", name.value, number.value, err => {
      err ? console.log(err.reason) : console.log("number was added")
    })
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input {...name} />
        <br />
        <input {...number} />

        <br />
        <button role="submit">Save</button>
      </form>
    </>
  )
}

export default AddNumber
