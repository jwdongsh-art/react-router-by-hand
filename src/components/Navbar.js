import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-brand">
          <Link to="/">React 路由应用</Link>
        </div>
        
        <ul className="nav-menu">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              end
            >
              首页
            </NavLink>
          </li>
          
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              关于
            </NavLink>
          </li>
          
          <li>
            <NavLink 
              to="/post/hello-world" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              文章示例
            </NavLink>
          </li>
          
          <li>
            <NavLink 
              to="/profile/john" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              个人资料
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;