import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return <ul className="nav nav-pills">
    <li className="nav-item">
      <NavLink exact className="nav-link" activeClassName="active" to="/">Home</NavLink>
    </li>
    <li className="nav-item">
      <NavLink exact className="nav-link" activeClassName="active" to="/posts">Posts</NavLink>
    </li>
    <li className="nav-item">
      <NavLink exact className="nav-link" activeClassName="active" to="/posts/new">New Post</NavLink>
    </li>
  </ul>;
}

export default Nav;