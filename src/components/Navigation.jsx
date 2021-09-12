import React from "react";
import { Link, withRouter } from "react-router-dom";
import logo from '../images/logo.png'
// https://www.techomoro.com/how-to-create-a-multi-page-website-with-react-in-5-minutes/
function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container">
          <div>
            <img src={logo} />
            <Link class="navbar-brand" to="/">
              CATS IN THE SKY
            </Link>
          </div>
          

          <div class="nav-links">
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${props.location.pathname === "/" ? "active" : ""
                  }`}
              >
                <Link class="nav-link" to="/">
                  HOME
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${props.location.pathname === "/bookings" ? "active" : ""
                  }`}
              >
                <Link class="nav-link" to="/bookings">
                  BOOKINGS
                </Link>
              </li>
              <li
                class={`nav-item  ${props.location.pathname === "/adoption" ? "active" : ""
                  }`}
              >
                <Link class="nav-link" to="/adoption">
                  ADOPTION
                </Link>
              </li>
              <li
                class={`nav-item  ${props.location.pathname === "/photoalbum" ? "active" : ""
                  }`}
              >
                <Link class="nav-link" to="/photoalbum">
                  PHOTO ALBUM
                </Link>
              </li>
            </ul>
            <div class="nav-contact">
              <p>4:20AM - 4:20PM</p>
              <p>Call Us: 000-Never</p>
            </div>
            
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);