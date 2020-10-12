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
        {/* <li>
          <Link to="/tracker/techselectfourday-report">
            Tech Selection Aging (4 Days plus)
          </Link>
        </li> */}
        <li>
          <Link to="/tracker/techselectsevenday-report">
            Tech Selection Status
          </Link>
        </li>
        <li>
          <Link to="/tracker/pev-report">PEV Report</Link>
        </li>
        {/* <li>
          <Link to="/tracker/mis-report">MIS Report</Link>
        </li> */}
        <li>
          <Link to="/tracker/onboarding-status-report">MIS Reports</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidenav;
