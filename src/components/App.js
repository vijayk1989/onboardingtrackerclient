import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./ui/Theme";
import Header from "./ui/Header";
import CreateCandidate from "./features/CreateCandidate";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <div>Home</div>} />
          <Route exact path="/create" component={CreateCandidate} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
