import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./ui/Theme";
import Header from "./ui/Header";
import CreateCandidate from "./features/CreateCandidate";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CandidateTable from "./features/CandidateTable";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={CandidateTable} />
          <Route exact path="/create" component={CreateCandidate} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
