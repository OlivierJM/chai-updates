import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border footer">
    &copy; 2018 Communect
    <button onClick={Meteor.logout()} className="button">Log Out</button>
  </footer>
);

export default Footer;
