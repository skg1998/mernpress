import React from "react";
import { Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles, ThemeProvider } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";

// Layout component
import Header from "../components/Header/Header";
import LeftDrawer from "../components/SideBar/LeftDrawer";
import RightDrawer from "../components/SideBar/RightDrawer";

//Dashboard component
import Dashboard from "./Dashboard/DashboardPage";
import UserProfile from './Dashboard/UserProfile';
import Category from "./Dashboard/Category";
import Product from './Dashboard/Products';
import Order from './Dashboard/Order';
import InventryManagement from './Dashboard/InventoryManagement';
import Customer from './Dashboard/Customers';
import Chart from './Dashboard/Chart';

//Dashboard/App component 
import Blog from './Dashboard/Apps/Blog';
import BlogDetail from '../containers/Blog/BlogDetail'
import Calender from './Dashboard/Apps/Calender';
import ChatBox from './Dashboard/Apps/ChatBox';
import Inbox from './Dashboard/Apps/Inbox';
import Invoice from './Dashboard/Apps/InvoiceBuilder';
import Todo from './Dashboard/Apps/Todo';

import NotFound from "./NotFoundPage";

import defaultTheme, { customTheme } from "../styles/theme";
import { routes } from '../Routes/routes';

const styles = () => ({
  container: {
    margin: "80px 20px 20px 15px",
    paddingLeft: defaultTheme.drawer.width,
    [defaultTheme.breakpoints.down("sm")]: {
      paddingLeft: 0
    }
  },
  containerFull: {
    paddingLeft: defaultTheme.drawer.miniWidth,
    [defaultTheme.breakpoints.down("sm")]: {
      paddingLeft: 0
    }
  },
  settingBtn: {
    top: 80,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    color: "white",
    width: 48,
    right: 0,
    height: 48,
    opacity: 0.9,
    padding: 0,
    zIndex: 999,
    position: "fixed",
    minWidth: 48,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  }
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: defaultTheme,
      rightDrawerOpen: false,
      navDrawerOpen:
        window && window.innerWidth && window.innerWidth >= defaultTheme.breakpoints.values.md
          ? true
          : false
    };

    this.handleChangeRightDrawer = this.handleChangeRightDrawer.bind(this);
    this.handleChangeNavDrawer = this.handleChangeNavDrawer.bind(this);
    this.handleChangeTheme = this.handleChangeTheme.bind(this);
  }

  handleChangeNavDrawer() {
    this.setState({
      navDrawerOpen: !this.state.navDrawerOpen
    });
  }

  handleChangeRightDrawer() {
    this.setState({
      rightDrawerOpen: !this.state.rightDrawerOpen
    });
  }

  handleChangeTheme(colorOption) {
    const theme = customTheme({
      palette: colorOption
    });
    this.setState({
      theme
    });
  }

  render() {
    const { classes } = this.props;
    const { navDrawerOpen, rightDrawerOpen, theme } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <Header handleChangeNavDrawer={this.handleChangeNavDrawer} navDrawerOpen={navDrawerOpen} />

        <LeftDrawer
          navDrawerOpen={navDrawerOpen}
          handleChangeNavDrawer={this.handleChangeNavDrawer}
          menus={routes}
        />
        <ButtonBase
          color="inherit"
          classes={{ root: classes.settingBtn }}
          onClick={this.handleChangeRightDrawer}
        >
          <i className="fa fa-cog fa-3x" />
        </ButtonBase>
        <RightDrawer
          rightDrawerOpen={rightDrawerOpen}
          handleChangeRightDrawer={this.handleChangeRightDrawer}
          handleChangeTheme={this.handleChangeTheme}
        />
        <div className={classNames(classes.container, !navDrawerOpen && classes.containerFull)}>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/user-profile" component={UserProfile} />
            <Route path="/inventory-management" component={InventryManagement} />
            <Route path="/customers" component={Customer} />
            <Route path="/products" component={Product} />
            <Route path="/category" component={Category} />
            <Route path="/orders" component={Order} />
            <Route path="/app/blog" component={Blog} />
            <Route exact path="/app/blog/:blogId" component={BlogDetail} />
            <Route path="/app/calender" component={Calender} />
            <Route path="/app/chatbox" component={ChatBox} />
            <Route path="/app/inbox" component={Inbox} />
            <Route path="/app/invoice" component={Invoice} />
            <Route path="/app/todo" component={Todo} />
            <Route path="/chart" component={Chart} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </ThemeProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
  classes: PropTypes.object
};

export default withStyles(styles)(App);
