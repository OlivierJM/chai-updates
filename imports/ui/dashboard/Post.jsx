import React, { useState } from 'react'
import { Meteor } from 'meteor/meteor'

function createPost(){
    const [name, setName] = useState('name')
    const [content, setContent] = useState('content')

    function handleNameChange(e){
        setName(e.target.value)
    }
    function handleContentChange(e){
        setContent(e.target.value)
    }
    function handleCreatePost(e){
        e.preventDefault()
        Meteor.call('createPost', name, content)
    }
    return (
        <form onSubmit={handleCreatePost}>
            <input onChange={handleNameChange} value={name} /> 
            <br />
            <input onChange={handleContentChange} value={content} />  
            <button className='btn' role='submit'>
               submit 
            </button>
        </form>
    )
}

export default createPost