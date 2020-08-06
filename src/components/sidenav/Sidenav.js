import React from "react";
import { Link } from "react-router-dom";

import "./Sidenav.css";

const Sidenav = () => {
  return (
    <div id="mySidenav" className="sidenav">
      <Link to="">Report 1</Link>
      <Link to="">Report 2</Link>
      <Link to="">Report 2</Link>
    </div>
  );
};

export default Sidenav;
