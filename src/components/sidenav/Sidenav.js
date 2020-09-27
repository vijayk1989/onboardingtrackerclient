import React from "react";
import { Link } from "react-router-dom";

import "./Sidenav.css";

const Sidenav = () => {
  return (
    <div id="mySidenav" className="sidenav">
      <ul>
        <li>
          <Link to="/tracker/ctool-report">C-Tool Not Available</Link>
        </li>
        <li>
          <Link to="/tracker/techselectfourday-report">
            Tech Selection Aging (4 Days)
          </Link>
        </li>
        <li>
          <Link to="/tracker/techselectsevenday-report">
            Tech Selection Status
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidenav;
