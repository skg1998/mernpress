import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import Menu from "@material-ui/icons/Menu";
import PublicNavbarLinks from "./PublicNavbarLinks.js";
import Button from "../../components/CustomButtons/Button.js";
import styles from "../../assets/jss/mernpress/components/headerStyle.js";

const useStyles = makeStyles(styles);

function SideMenu(props) {
  const classes = useStyles();
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
    <AppBar className={classes.appBar + appBarClasses}>
      <Toolbar className={classes.container}>
      <Hidden mdUp implementation="css">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={props.handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
        <div className={classes.flex}>
          <Button color="transparent" href="#" className={classes.title}>
            {makeBrand()}
          </Button>
        </div>
        <Hidden smDown implementation="css">
           <PublicNavbarLinks />
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

SideMenu.propTypes = {
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
  rtlActive: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  routes: PropTypes.arrayOf(PropTypes.object)
};

export default SideMenu

