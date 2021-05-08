import React from 'react'
import SideMenu from './SideMenu';

const routes = [
  {
    name: "MernPress",
    logo: "MernPress",
    style: "",
    route: [
      {
        path: "/",
        name: "Home",
      },
      {
        path: "/category",
        name: "Shop by Category",
      },
      {
        path: "/today-deals",
        name: "Today deals",
      },
      {
        path: "/order",
        name: "Your Order",
      },
      {
        path: "/buy-again",
        name: "Buy Agains",
      },
      {
        path: "/wishlist",
        name: "Your wishList",
      },
      {
        path: "/buy-again",
        name: "Buy Agains",
      },
      {
        path: "/account",
        name: "Your Acount",
      },
      {
        path: "/adminsignup",
        name: "Sell on yourSelf",
      }, {
        path: "/setting",
        name: "Setting",
      }
    ]
  }
]

const Header = ({ ...rest }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <SideMenu
      routes={routes}
      handleDrawerToggle={handleDrawerToggle}
      {...rest}
    />
  )
}

export default Header


