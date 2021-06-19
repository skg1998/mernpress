import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from '@material-ui/icons/Search';
import Hidden from "@material-ui/core/Hidden";
import Menu from "@material-ui/icons/Menu";
import PublicNavbarLinks from "./PublicNavbarLinks.js";
import Button from "@material-ui/core/Button";
import styles from "../../assets/jss/mernpress/components/headerStyle.js";
import InputBase from '@material-ui/core/InputBase';
import { Link } from "react-router-dom";
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CssBaseline from '@material-ui/core/CssBaseline';


const useStyles = makeStyles(styles);
function SideMenu(props) {
  const classes = useStyles();
  const [drawerState, setDrawerState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerState({ ...drawerState, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {
          props.routes.map((items) => (
            items.route.map((item, index) => (
              <ListItem className={classes.listitem} button key={index} >
                <Link to={item.path}>
                  <ListItemText primary={item.name} />
                </Link>
              </ListItem>
            ))
          ))
        }
      </List>
    </div>
  );

  function makeBrand() {
    var name;
    props.routes.map(prop => {
      name = prop.name;
    });
    return name;
  }

  const { color } = props;
  const appBarClasses = classNames({
    [" " + classes[color]]: color
  });

  return (
    <div className={classes.grow}>
      <CssBaseline />
      <AppBar className={classes.appBar + appBarClasses}>
        <Toolbar className={classes.container}>
          <IconButton color="inherit" onClick={toggleDrawer('left', true)}> <Menu /> </IconButton>
          <Drawer anchor="left" open={drawerState['left']} onClose={toggleDrawer('left', false)}>
            {list('left')}
          </Drawer>
          <div className={classes.flex}>
            <Button className={classes.title}>
              {makeBrand()}
            </Button>
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <Hidden smDown implementation="css">
            <PublicNavbarLinks />
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>

  );
}

SideMenu.propTypes = {
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
  handleDrawerToggle: PropTypes.func,
  routes: PropTypes.arrayOf(PropTypes.object)
};

export default SideMenu

