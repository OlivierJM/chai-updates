import React from "react";
import { Link } from "react-router-dom";

const DashboardHeader = () => (
  <nav className="border">
    <div className="collapsible">
      <input id="collapsible2" type="checkbox" name="collapsible2" />
      <button>
        <label htmlFor="collapsible2">
          <div className="bar1" />
          <div className="bar2" />
          <div className="bar3" />
        </label>
      </button>
      <div className="collapsible-body">
        <ul className="inline">
          <li>
            <Link to="/post">Create Post</Link>
          </li>
          <li>
            <Link to="/updates">Updates</Link>
          </li>
          <li>
            <Link to="/upload">Upload</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default DashboardHeader;
