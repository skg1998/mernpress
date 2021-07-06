import React from "react";
import "./App.css";
import { MuiThemeProvider } from "@material-ui/core/styles";
import MainRouter from "./MainRouter";
import { BrowserRouter as Router } from "react-router-dom";
import { history } from "./store/helpers"

const App = () => {
  return (
    <Router history={history}>
      <MuiThemeProvider>
        <MainRouter />
      </MuiThemeProvider>
    </Router>
  );
}

export default App;
