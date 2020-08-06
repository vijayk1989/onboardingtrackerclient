import React from "react";
import { Switch, Route } from "react-router-dom";
import CToolReport from "./CToolReport";
import TechSelectFourDayReport from "./TechSelectFourDayReport";
import TechSelectSevenDayReport from "./TechSelectSevenDayReport";

const TrackerDashboard = ({ match, path, location }) => {
  console.log({ match });
  console.log({ path });
  console.log({ location });
  return (
    <div>
      <Switch>
        <Route
          exact
          path={`${match.path}/ctool-report`}
          component={CToolReport}
        />
        <Route
          exact
          path="/tracker/techselectfourday-report"
          component={TechSelectFourDayReport}
        />
        <Route
          exact
          path="/tracker/techselectsevenday-report"
          component={TechSelectSevenDayReport}
        />
      </Switch>
    </div>
  );
};

export default TrackerDashboard;
