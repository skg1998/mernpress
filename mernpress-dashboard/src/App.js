import React from 'react';
import { MuiThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router } from "react-router-dom";
import MainRouter from "./Routes/MainRoutes";

//Styles
import theme from './styles/theme';
import './styles/styles.css'

const App = () => {
    return (
        <Router>
            <MuiThemeProvider theme={theme}>
                <MainRouter />
            </MuiThemeProvider>
        </Router>
    );
}

export default App;

