import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import "../theme.css";
// Level2
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import {signOut } from "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  const { ToggleTheme, theme } = useContext(ThemeContext);
  return (
    <div className="myheader">
      <header className="hide-when-mobile ali">
        <h1>
          <Link to="/">Web Devs</Link>
        </h1>

        <i
          onClick={() => {
            ToggleTheme(theme === "Light" ? "Dark" : "Light");
          }}
          className="fa-solid fa-sun"
        ></i>

        <i
          onClick={() => {
            ToggleTheme(theme === "Light" ? "Dark" : "Light");
          }}
          className="fa-solid fa-moon"
        ></i>

        <ul className="flex">
          <li className="main-list">
          {!user && (
            <i className="main-list">
              <NavLink className="main-link" to="/signin">
              Sign-in
              </NavLink>
            </i>

            
          )}

            {!user && (
              <i className="main-list">
                <NavLink className="main-link" to="/signup">
                Sign-up
                </NavLink>
              </i>
            )}

            {user && (
              <i onClick={(eo) => {
                signOut(auth).then(() => {
                  // Sign-out successful.
                }).catch((error) => {
                  // An error happened.
                });
              }} className="main-list">
                <button className="main-link signout">Sign-out</button>
              </i>
            )}

            {user && <NavLink className="main-link" to="/about">
             About
            </NavLink>}
            <ul className="sub-ul">
              <li>
                <a href="">Full Course</a>
              </li>
              <li>
                <a href="">Crash Course</a>
              </li>
              <li>
                <a href="">learn in 1h</a>
              </li>
            </ul>
          </li>
         
          <li className="main-list">
            {user && <NavLink className="main-link" to="/profile">
              Profile
            </NavLink>}
           
          </li>
        </ul>
      </header>

      <header className="show-when-mobile ali">
        <h1>c4a.dev</h1>
        <label className="absolute" htmlFor="burger">
          <i className="fas fa-bars" />
        </label>
        <input id="burger" type="checkbox" />
        <div className="show-on-click">
          <div className="main-div">
            <label htmlFor="html">
              HTML <i className="fas fa-plus" />
            </label>
            <input id="html" type="checkbox" />
           
          </div>
         
          <div className="main-div">
            <label htmlFor="js">
              JavaScript <i className="fas fa-plus" />
            </label>
            <input id="js" type="checkbox" />
            <ul className="sub-div">
              <li>
                <NavLink to="/javascript">coming soon🔥</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
