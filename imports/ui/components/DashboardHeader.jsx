import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const DashboardHeader = () => {
  const [isOpen, setOpen] = useState(false);
  function toggle() {
    setOpen(!isOpen);
  }

  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">Chai Updates</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem >
            <Link to="/post">Create Post</Link>
          </NavItem>
          <NavItem>
            <Link to="/updates">Updates</Link>
          </NavItem>
          <NavItem>
            <Link to="/upload">Upload</Link>
          </NavItem>
          <NavItem>
            <Link to="/posts">Posts</Link>
          </NavItem>
          <NavItem>
            <Link to="/numbers">Add Number</Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default DashboardHeader;
