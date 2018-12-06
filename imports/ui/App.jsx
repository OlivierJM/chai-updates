import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";

import Updates from './Updates.jsx'
import CreatePost from './dashboard/CreatePost'
import FileUpload from './dashboard/leads/Upload'

// accounts

import Register from './components/Accounts/Register'
import Login from './components/Accounts/Login'
import Authenticated from './Authenticated'

// prototyping
// import DashboardMain from './dashboard/DashboardMain'
import Header from './components/DashboardHeader'
import Footer from './components/Footer'
import Post from './Post'



const App = () => (
  <Router>
    <Fragment>
      <Authenticated>
      <Header />
        <Route exact path="/updates" component={Updates} />
        <Route path="/post" component={CreatePost} />
        <Route path="/posts" component={Post} />
        <Route path="/upload" component={FileUpload} />
        {/* // account */}
        <Footer/>
      </Authenticated>
      <Route path="/register" component={Register} />
      <Route  path="/login" component={Login} />

    </Fragment>
  </Router>
)

export default App
