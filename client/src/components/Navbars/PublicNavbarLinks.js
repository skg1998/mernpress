import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Hidden from "@material-ui/core/Hidden";
import Poppers from "@material-ui/core/Popper";
import Divider from "@material-ui/core/Divider";
import Person from "@material-ui/icons/Person";
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from "@material-ui/core/Button";
import styles from "../../assets/jss/mernpress/components/headerLinksStyle.js";
import { Link } from "react-router-dom";

const useStyles = makeStyles(styles);

export default function PublicNavbarLinks() {
  const classes = useStyles();
  const [openProfile, setOpenProfile] = React.useState(null);

  const handleClickProfile = event => {
    if (openProfile && openProfile.contains(event.target)) {
      setOpenProfile(null);
    } else {
      setOpenProfile(event.currentTarget);
    }
  };
  const handleCloseProfile = () => {
    setOpenProfile(null);
  };

  const logoutHandler = () => {
    // call logout api 
    console.log('successfully logout')
  }

  return (
    <div>
      <div className={classes.manager}>
        <Button
          aria-haspopup="true"
          className={classes.buttonLink}
        >
          <FavoriteIcon className={classes.icons} />
          <span className={classes.notifications}>5</span>
        </Button>
      </div>


      <Button
        aria-label="Cart"
        className={classes.buttonLink}
      >
        <Link to="/cart">
          <ShoppingCartIcon className={classes.icons} />
          <span className={classes.notifications}>2</span>
        </Link>
        <Hidden mdUp implementation="css">
          <p className={classes.linkText}>Cart</p>
        </Hidden>
      </Button>

      <div className={classes.manager}>
        <Button
          aria-owns={openProfile ? "profile-menu-list-grow" : null}
          aria-haspopup="true"
          onClick={handleClickProfile}
          className={classes.buttonLink}
        >
          <Person className={classes.icons} />
          <Hidden mdUp implementation="css">
            <p className={classes.linkText}>Profile</p>
          </Hidden>
        </Button>
        <Poppers
          open={Boolean(openProfile)}
          anchorEl={openProfile}
          transition
          disablePortal
          className={
            classNames({ [classes.popperClose]: !openProfile }) +
            " " +
            classes.popperNav
          }
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="profile-menu-list-grow"
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom"
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleCloseProfile}>
                  <MenuList role="menu">
                    <MenuItem
                      onClick={handleCloseProfile}
                      className={classes.dropdownItem}
                    >
                      <Link to="/profile">
                        Profile
                      </Link>
                    </MenuItem>
                    <MenuItem
                      onClick={handleCloseProfile}
                      className={classes.dropdownItem}
                    >
                      <Link to="/setting">
                        Setting
                      </Link>
                    </MenuItem>
                    <Divider light />
                    <MenuItem
                      onClick={logoutHandler}
                      className={classes.dropdownItem}
                    >
                      Logout
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Poppers>
      </div>
    </div>
  );
}
