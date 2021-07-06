import React from "react";
import Faker from "faker";
import Assessment from "@material-ui/icons/Assessment";
import GridOn from "@material-ui/icons/GridOn";
import PermIdentity from "@material-ui/icons/PermIdentity";
import Web from "@material-ui/icons/Web";
import PeopleIcon from '@material-ui/icons/People';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import CategoryIcon from '@material-ui/icons/Category';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import InboxIcon from '@material-ui/icons/Inbox';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import TimelineIcon from '@material-ui/icons/Timeline';
import BookIcon from '@material-ui/icons/Book';
import FileCopyIcon from '@material-ui/icons/FileCopy';

const data = {
  menus: [
    { text: "DashBoard", icon: <Assessment />, link: "/dashboard" },
    { text: "User Profile", icon: <PermIdentity />, link: "/form" },
    { text: "Inventory Management", icon: <Web />, link: "/inventory-management" },
    { text: "Customers", icon: <PeopleIcon />, link: "/customers" },
    { text: "Products", icon: <ShoppingCartIcon />, link: "/products" },
    { text: "Category", icon: <CategoryIcon />, link: "/category" },
    { text: "Orders", icon: <InsertDriveFileIcon />, link: "/orders" },
    {
      text: "Apps",
      icon: <GridOn />,
      subMenus: [
        {
          text: "Calender",
          icon: <EventAvailableIcon />,
          link: "/app/calender"
        },
        {
          text: "Invoice Builder",
          icon: <FileCopyIcon />,
          link: "/app/invoice"
        },
        {
          text: "Chat Box",
          icon: <ChatBubbleOutlineIcon />,
          link: "/app/chatbox"
        },
        {
          text: "InBox",
          icon: <InboxIcon />,
          link: "/app/inbox"
        },
        {
          text: "Blog",
          icon: <BookIcon />,
          link: "/app/blog"
        },
        {
          text: "Todo",
          icon: <PlaylistAddIcon />,
          link: "/app/todo"
        }
      ]
    },
    { text: "Charts", icon: <TimelineIcon />, link: "/charts" },
  ],

  user: {
    userName: `${Faker.name.firstName()} ${Faker.name.lastName()}`,
    avatar: Faker.image.avatar()
  },
  tablePage: {
    items: Array.from({ length: 105 }, (item, index) => ({
      id: index,
      name: Faker.commerce.productName(),
      price: Faker.commerce.price(),
      category: Faker.commerce.productMaterial()
    }))
  }
};

export default data;
