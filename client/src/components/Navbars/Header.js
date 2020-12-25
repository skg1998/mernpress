import React from 'react'
import { Switch, Route } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar'
import SideMenu from './SideMenu';
import './navbar.css';

const routes =[
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/category",
    name: "Category",
  }
]

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === "/") {
          return (
            <Route
              path={prop.path}
              component={prop.component}
              key={key}
            />
          );
        }
      return null;
    })}
  </Switch>
);


const Header = ({...rest}) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen); 
  };

  return(
    <div className="main-menu">
    <AppBar position="static">
    <SideMenu
        routes={routes}
        handleDrawerToggle={handleDrawerToggle}
        {...rest}
      />
    </AppBar>
  </div>
  )
}

export default Header


