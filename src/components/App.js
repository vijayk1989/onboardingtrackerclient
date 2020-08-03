import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./ui/Theme";
import Header from "./ui/Header";
import CreateCandidate from "./features/CreateCandidate";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CandidateTable from "./features/CandidateTable";
import TrackerContextProvider from "../context/TrackerContext";
import TrackerDashboard from "./features/TrackerDashboard";
import CssBaseline from "@material-ui/core/CssBaseline";

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
            <Route exact path="/tracker" component={TrackerDashboard} />
          </Switch>
        </BrowserRouter>
      </TrackerContextProvider>
    </ThemeProvider>
  );
}

export default App;
