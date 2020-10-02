import React from "react";
import Grid from "@material-ui/core/Grid";

import CToolReport from "./CToolReport";
import TechSelectFourDayReport from "./TechSelectFourDayReport";
import SelectionFromAndToReport from "./SelectionFromAndToReport";
import PEVReport from "./PEVReport";
import MISReport from "./MISReport";
import OnboardingStatusReport from "./OnboardingStatusReport";
import Sidenav from "../sidenav/Sidenav";

const TrackerDashboard = ({ match, path, location }) => {
  return (
    <div>
      <Grid container>
        <Grid item xs={2} sm={2} lg={2}>
          <Sidenav />
        </Grid>
        <Grid item xs={10} sm={10} lg={10}>
          {(location.pathname === "/tracker" ||
            location.pathname === "/tracker/ctool-report") && <CToolReport />}
          {location.pathname === "/tracker/techselectfourday-report" && (
            <TechSelectFourDayReport />
          )}
          {location.pathname === "/tracker/techselectsevenday-report" && (
            <SelectionFromAndToReport />
          )}
          {location.pathname === "/tracker/pev-report" && <PEVReport />}
          {location.pathname === "/tracker/mis-report" && <MISReport />}
          {location.pathname === "/tracker/onboarding-status-report" && (
            <OnboardingStatusReport />
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default TrackerDashboard;
