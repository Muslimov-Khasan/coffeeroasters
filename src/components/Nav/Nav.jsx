

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [visible, setVisible] = useState(2);

  return (
    <React.Fragment>
      <nav className="d-flex flex-row align-items-center justify-content-between">
        <div>
          <a href="/">
            <img src="./img/nav/logo.svg" alt="logo coffeeroasters" />
          </a>
        </div>
        <div className="nav-icon d-block d-sm-none" onClick={() => (visible === 0 || visible === 2 ? setVisible(1) : setVisible(0))}>
          <img
            src="./img/nav/icon-hamburger.svg"
            alt="logo mobile menu"
            className={visible === 0 ? "rotate-270-ccw" : visible === 1 ? "rotate-270-cw" : "collapsed"}
          />
        </div>
        <ul className="nav d-none d-sm-flex justify-content-end flex-row">
          <li className="nav-link">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-link">
            <Link to="/about">About Us</Link>
          </li>
          <li className="nav-link">
            <Link to="/plan">Create your plan</Link>
          </li>
        </ul>
      </nav>
      <div
        className={
          visible === 0
            ? "nav-menu d-flex d-sm-none flex-column align-items-center slide-out-top"
            : visible === 1
            ? "nav-menu d-flex d-sm-none flex-column align-items-center slide-in-top"
            : "nav-menu d-flex d-sm-none flex-column align-items-center invisible"
        }
      >
        <ul>
          <li className="nav-link" onClick={() => setVisible(0)}>
            <Link to="/">Home</Link>
          </li>
          <li className="nav-link" onClick={() => setVisible(0)}>
            <Link to="/about">About Us</Link>
          </li>
          <li className="nav-link" onClick={() => setVisible(0)}>
            <Link to="/plan">Create your plan</Link>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Nav;
