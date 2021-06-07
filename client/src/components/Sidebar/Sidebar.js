/*eslint-disable*/
import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
import AdminNavbarLinks from "../../components/Navbars/AdminNavbarLinks.js";
import styles from "../../assets/jss/mernpress/components/sidebarStyle.js";

const useStyles = makeStyles(styles);

const Sidebar = (props) => {
  const { color, logo, routes } = props;
  const classes = useStyles();

  function activeRoute(routeName) {
    return window.location.href.indexOf(routeName) > -1 ? true : false;
  }

  var links = (
    <List className={classes.list}>
      {routes.map((prop, key) => {
        var listItemClasses;
        if (prop.path === "/upgrade-to-pro") {

        } else {
          listItemClasses = classNames({
            [" " + classes[color]]: activeRoute(prop.layout + prop.path)
          });
        }

        if (prop.subItem.length == 0) {
          return (
            <NavLink
              to={prop.layout + prop.path}
              className={classes.item}
              activeClassName="active"
              key={key}
            >
              <ListItem button className={classes.itemLink + listItemClasses}>
                {typeof prop.icon === "string" ? (
                  <Icon
                    className={classNames(classes.itemIcon)}
                  >
                    {prop.icon}
                  </Icon>
                ) : (
                  <prop.icon
                    className={classNames(classes.itemIcon)} />
                )}
                <ListItemText
                  primary={prop.name}
                  className={classNames(classes.itemText)}
                  disableTypography={true}
                />
              </ListItem>
            </NavLink>
          );
        } else {
          return (
            <Accordion className={classes.accordion}>
              <AccordionSummary
                style={{ margin: '0px' }}
                className={classes.accordionSummary}
                aria-controls="panel1a-content"
              >
                <ListItem button className={classes.itemLink + listItemClasses}>
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(classes.itemIcon)}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(classes.itemIcon)} />
                  )}
                  <ListItemText
                    primary={prop.name}
                    className={classNames(classes.itemText)}
                    disableTypography={true}
                  />
                </ListItem>
              </AccordionSummary>
              <AccordionDetails className={classes.accordionDetail}>
                {prop.subItem.map(e => (
                  <NavLink
                    to={prop.layout + prop.path + e.path}
                    className={classes.item}
                    activeClassName="active"
                  //key={key}
                  >
                    <ListItem button className={classes.itemLink + listItemClasses}>
                      <ListItemText
                        primary={e.name}
                        className={classNames(classes.itemText)}
                        disableTypography={true}
                      />
                    </ListItem>
                  </NavLink>
                ))}
              </AccordionDetails>
            </Accordion>
          );
        }
      })}
    </List>
  );


  var brand = (
    <div className={classes.logo}>
      <a
        href="#"
        className={classNames(classes.logoLink)}
        target="_blank"
      >
        <div className={classes.logoImage}>
          <img src={logo} alt="logo" className={classes.img} />
        </div>
        MernPress
      </a>
    </div>
  );


  return (
    <div>
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={props.rtlActive ? "left" : "right"}
          open={props.open}
          classes={{
            paper: classNames(classes.drawerPaper, {
              [classes.drawerPaperRTL]: props.rtlActive
            })
          }}
          onClose={props.handleDrawerToggle}
          ModalProps={{
            keepMounted: true
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>
            <AdminNavbarLinks />
            {links}
          </div>
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          anchor={props.rtlActive ? "right" : "left"}
          variant="permanent"
          open
          classes={{
            paper: classNames(classes.drawerPaper, {
              [classes.drawerPaperRTL]: props.rtlActive
            })
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>{links}</div>
        </Drawer>
      </Hidden>
    </div>
  );
}

Sidebar.propTypes = {
  handleDrawerToggle: PropTypes.func,
  logo: PropTypes.string,
  image: PropTypes.string,
  logoText: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
  open: PropTypes.bool
};


export default Sidebar;