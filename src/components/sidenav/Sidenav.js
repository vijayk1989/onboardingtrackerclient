import React from "react";
import { Link } from "react-router-dom";

import "./Sidenav.css";

const Sidenav = () => {
  return (
    <div id="mySidenav" className="sidenav">
      <ul>
        <li>
          <Link to="/tracker/ctool-report">Ctool Report</Link>
        </li>
        <li>
          <Link to="/tracker/techselectfourday-report">
            Tech Select Four Day Report
          </Link>
        </li>
        <li>
          <Link to="/tracker/techselectsevenday-report">
            Tech Select Seven Day Report
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidenav;
