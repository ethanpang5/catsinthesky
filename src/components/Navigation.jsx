import React from "react";
import { Link, withRouter } from "react-router-dom";
// https://www.techomoro.com/how-to-create-a-multi-page-website-with-react-in-5-minutes/
function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container">
          <Link class="navbar-brand" to="/">
            CATS IN THE SKY
          </Link>

          <div>
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/">
                  HOME
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/bookings" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/bookings">
                  BOOKINGS
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/adoption" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/adoption">
                  ADOPTION
                </Link>
				<li
                class={`nav-item  ${
                  props.location.pathname === "/photoalbum" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/photoalbum">
                  PHOTO ALBUM
                </Link>
              </li>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);