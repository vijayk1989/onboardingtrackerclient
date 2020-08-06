import React from "react";
import { Link } from "react-router-dom";

import "./Sidenav.css";

const Sidenav = () => {
  return (
    <div id="mySidenav" className="sidenav">
      <Link to="/tracker/ctool-report">Ctool Report</Link>
      <Link to="/tracker/techselectfourday-report">
        Tech Select Four Day Report
      </Link>
      <Link to="/tracker/techselectsevenday-report">
        Tech Select Seven Day Report
      </Link>
    </div>
  );
};

export default Sidenav;
