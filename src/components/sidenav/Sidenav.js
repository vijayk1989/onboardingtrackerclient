import React from "react";
import { Link } from "react-router-dom";

import "./Sidenav.css";

const Sidenav = () => {
  return (
    <div id="mySidenav" className="sidenav">
      <Link to="/tracker/report1">Report 1</Link>
      <Link to="/tracker/report2">Report 2</Link>
      <Link to="/tracker/report3">Report 3</Link>
    </div>
  );
};

export default Sidenav;
