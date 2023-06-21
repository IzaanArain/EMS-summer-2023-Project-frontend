import React from "react";
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import { useSelector } from "react-redux";
import AllEventList from "./AllEventsComponents/AllEventList";
const Navbar = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <>
      <header>
        <div className="logo-container">
          <Link to="/">
            <div className="Logo">
              Event management system
            </div>
          </Link>
        </div>
        <nav>
          <ul>
            {!user ? (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/allevents">all events</Link>
                </li>
                <li>
                  <span style={{color:"white"}}>{user.email}</span>
                  <LogoutButton />
                </li>
              </>
            )}
            {/* {user && (
              <li>
                <span>{user.email}</span>
                <LogoutButton />
              </li>
            )}
            {!user && (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>
            )} */}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
