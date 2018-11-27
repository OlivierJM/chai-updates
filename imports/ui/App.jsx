import React from 'react'
import Updates from './Updates.jsx'
import CreatePost from './dashboard/CreatePost'
import FileUpload from './dashboard/leads/Upload'

// prototyping
import DashboardMain from './dashboard/DashboardMain'

import Post from './Post'

const App = () => (
  <div>
    <DashboardMain />
    <br />
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
