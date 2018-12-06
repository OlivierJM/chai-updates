import React, { useState }  from "react";
import { Link, Redirect } from "react-router-dom";
import { Meteor } from 'meteor/meteor'; 

const Footer = () => {
  const [isLoggedOut, setLogout] = useState(false)
  const logOutUser = () => Meteor.logout(err => err ? console.log(err.reason) : setLogout(true))
  // if this doesnt work, put it in the parent. 
  if(isLoggedOut){
     return <Redirect to='/login' />
   }
  return (
      <footer className="border footer">
        &copy; 2018 Communect
        <button onClick={logOutUser} className="button">Log Out</button>
      </footer>
    )
}

export default Footer;
