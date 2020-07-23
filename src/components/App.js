import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./ui/Theme";
import Header from "./ui/Header";
import CreateCandidate from "./features/CreateCandidate";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CandidateTable from "./features/CandidateTable";
import { ConfirmProvider } from "material-ui-confirm";
import TrackerContextProvider from "../context/TrackerContext";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TrackerContextProvider>
        <ConfirmProvider>
          <BrowserRouter>
            <Header />
            <Switch>
              <Route exact path="/" component={CandidateTable} />
              <Route exact path="/create" component={CreateCandidate} />
            </Switch>
          </BrowserRouter>
        </ConfirmProvider>
      </TrackerContextProvider>
    </ThemeProvider>
  );
}

export default App;
