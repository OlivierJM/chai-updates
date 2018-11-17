import React, { useState } from 'react'
import { Meteor } from 'meteor/meteor'

function createPost(){

    const title = useFormValues('title')
    const content = useFormValues('content')
    const link = useFormValues('link')

    function handleCreatePost(e){
        e.preventDefault()
        Meteor.call('createPost', title.value, content.value, link.value)
    }
    return (
        <form onSubmit={handleCreatePost}>
            <input {...title}  /> 
            <br />
            <input {...content} />  
            <br />
            <input {...link}  />  
            <button className='btn' role='submit'>
               submit 
            </button>
        </form>
    )
}

function useFormValues(initial){
    const [value, setValue] = useState(initial)
    function handleValueChange(e){
        setValue(e.target.value)
    }
    return {
        value,
        onChange: handleValueChange
    }
}

export default createPost