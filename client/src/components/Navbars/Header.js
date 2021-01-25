import React from 'react'
import SideMenu from './SideMenu';

const routes =[
  {
    name: "MernPress",
    logo: "MernPress",
    style:"",
    route:[
      {
        path: "/",
        name: "Home",
      },
      {
        path: "/category",
        name: "Shop by Category",
      },
      {
        path: "/category",
        name: "Today deals",
      },
      {
        path: "/category",
        name: "Your Order",
      },
      {
        path: "/category",
        name: "Buy Agains",
      },
      {
        path: "/category",
        name: "Your wishList",
      },
      {
        path: "/category",
        name: "Buy Agains",
      },
      {
        path: "/category",
        name: "Your Acount",
      },
      {
        path: "/adminsignup",
        name: "Sell on yourSelf",
      },{
        path: "/category",
        name: "Setting",
      }
    ]
  }
]

const Header = ({...rest}) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen); 
  }; 

  return(
    <div className="main-menu">
      <SideMenu
          routes={routes}
          handleDrawerToggle={handleDrawerToggle}
          {...rest}
      />
  </div>
  )
}

export default Header


  