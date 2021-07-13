import React from 'react'
import history from './history'
import { Router, Route, Switch } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Layout from "./components/Layout";
import Dashboard from "./Pages/Dashboard";
import CreateEmployee from "./Pages/CreateEmployee";
import CreateDepartment from "./Pages/CreateDepartment";
import LoginPage from "./Pages/Auth/LoginPage";
import ListDetails from "./Pages/ListDetails";
import Chart from "./Pages/Graph/Chart";
// import { purple } from '@material-ui/core/colors';

const theme = createMuiTheme({
  // palette: {
  //   secondary: purple
  // },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}> 
        <Layout>
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/employeelist" component={ListDetails}/>
            <Route exact path="/createemployee" component={CreateEmployee} />
            <Route exact path="/createdeparment" component={CreateDepartment} />
            <Route exact path="/chart" component={Chart}/>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
