import React from "react";
import Grid from "@material-ui/core/Grid";

import CToolReport from "./CToolReport";
import TechSelectFourDayReport from "./TechSelectFourDayReport";
import TechSelectSevenDayReport from "./TechSelectSevenDayReport";
import Sidenav from "../sidenav/Sidenav";

const TrackerDashboard = ({ match, path, location }) => {
  console.log({ match });
  console.log({ path });
  console.log({ location });

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={1} sm={2} lg={2}>
          <Sidenav />
        </Grid>
        <Grid item xs={11} sm={10} lg={10}>
          {(location.pathname === "/tracker" ||
            location.pathname === "/tracker/ctool-report") && <CToolReport />}
          {location.pathname === "/tracker/techselectfourday-report" && (
            <TechSelectFourDayReport />
          )}
          {location.pathname === "/tracker/techselectsevenday-report" && (
            <TechSelectSevenDayReport />
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default TrackerDashboard;
