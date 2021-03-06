import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./ui/Theme";
import Header from "./ui/Header";
import CreateCandidate from "./features/CreateCandidate";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CandidateTable from "./features/CandidateTable";
import TrackerContextProvider from "../context/TrackerContext";
import CssBaseline from "@material-ui/core/CssBaseline";
import TrackerDashboard from "../components/features/TrackerDashboard";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TrackerContextProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={CandidateTable} />
            <Route exact path="/create" component={CreateCandidate} />
            <Route
              path="/tracker"
              render={({ match: { url } }) => (
                <>
                  <Route path={`${url}/`} component={TrackerDashboard} exact />
                  <Route
                    path={`${url}/ctool-report`}
                    component={TrackerDashboard}
                    exact
                  />
                  <Route
                    path={`${url}/techselectfourday-report`}
                    component={TrackerDashboard}
                    exact
                  />
                  <Route
                    path={`${url}/techselectsevenday-report`}
                    component={TrackerDashboard}
                    exact
                  />
                  <Route
                    path={`${url}/pev-report`}
                    component={TrackerDashboard}
                    exact
                  />
                  <Route
                    path={`${url}/mis-report`}
                    component={TrackerDashboard}
                    exact
                  />
                  <Route
                    path={`${url}/onboarding-status-report`}
                    component={TrackerDashboard}
                    exact
                  />
                </>
              )}
            />
          </Switch>
        </BrowserRouter>
      </TrackerContextProvider>
    </ThemeProvider>
  );
}

export default App;
