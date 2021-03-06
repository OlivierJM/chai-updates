import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";

import Members from './members.jsx'
import CreatePost from './dashboard/CreatePost'
import CreateLeader from './dashboard/leads/CreateLeader'
import AddNumber from './dashboard/AddNumber'


// accounts

import Register from './components/Accounts/Register'
import Login from './components/Accounts/Login'
import Authenticated from './Authenticated'

// prototyping
// import DashboardMain from './dashboard/DashboardMain'
import Header from './components/DashboardHeader'

import Post from './Post'
import Home from './Home'



const App = () => (
  <Router>
    <Fragment>
      <Authenticated>
      <Header />
      <br />
        <Route exact path='/' component={Home} />
        <Route exact path="/users" component={Members} />
        <Route path="/post" component={CreatePost} />
        <Route path="/posts" component={Post} />
        <Route path="/upload" component={CreateLeader} />
        <Route path="/numbers" component={AddNumber} />
        {/* // account */}
      </Authenticated>
      <Route path="/register" component={Register} />
      <Route  path="/login" component={Login} />

    </Fragment>
  </Router>
)

export default App
