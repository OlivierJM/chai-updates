import React from 'react'
import Updates from './Updates.jsx'
import CreatePost from './dashboard/CreatePost'
import FileUpload from './dashboard/leads/Upload'


import Post from './Post'

const App = () => (
  <div>
    <h1>Welcome to Me!</h1>
    <Updates />
      <CreatePost />
      <br />
      <FileUpload />
    <h6>
      These are the posts
    </h6>
    <Post />
  </div>
)

export default App
