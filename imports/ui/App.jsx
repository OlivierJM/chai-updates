import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";

import Updates from './Updates.jsx'
import CreatePost from './dashboard/CreatePost'
import FileUpload from './dashboard/leads/Upload'

// prototyping
// import DashboardMain from './dashboard/DashboardMain'
import Header from './components/AdminWrapper'

import Post from './Post'



const App = () => (
  <Router>
    <div>
      <Header />

      <Route exact path="/" component={Updates} />
      <Route path="/post" component={CreatePost} />
      <Route path="/upload" component={FileUpload} />
    </div>
  </Router>
)
// const App = () => (
//   <div>
//     <DashboardMain />
//     <br />
//     <Updates />
//       <CreatePost />
//       <br />
//       <FileUpload />
//     <h6>
//       These are the posts
//     </h6>
//     <Post />
//   </div>
// )

export default App
