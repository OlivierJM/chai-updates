import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";

import Updates from './Updates.jsx'
import CreatePost from './dashboard/CreatePost'
import FileUpload from './dashboard/leads/Upload'

// prototyping
// import DashboardMain from './dashboard/DashboardMain'
import Header from './components/DashboardHeader'

import Post from './Post'



const App = () => (
  <Router>
    <Fragment>
      <Header />

      <Route exact path="/updates" component={Updates} />
      <Route path="/post" component={CreatePost} />
      <Route path="/posts" component={Post} />
      <Route path="/upload" component={FileUpload} />
    </Fragment>
  </Router>
)

export default App
