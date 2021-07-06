import Assessment from "@material-ui/icons/Assessment";
import GridOn from "@material-ui/icons/GridOn";
import PermIdentity from "@material-ui/icons/PermIdentity";
import Web from "@material-ui/icons/Web";
import BorderClear from "@material-ui/icons/BorderClear";
import BorderOuter from "@material-ui/icons/BorderOuter";

const routes = [
    { text: "DashBoard", icon: <Assessment />, link: "/dashboard" },
    { text: "User Profile", icon: <Web />, link: "/form" },
    { text: "Inventory Management", icon: <Web />, link: "/inventory-management" },
    {
        text: "Table Page",
        icon: <GridOn />,
        subMenus: [
            {
                text: "Basic Table",
                icon: <BorderClear />,
                link: "/table/basic"
            },
            {
                text: "Data Table",
                icon: <BorderOuter />,
                link: "/table/data"
            }
        ]
    },
    { text: "Customers", icon: <PermIdentity />, link: "/customers" },
    { text: "Products", icon: <PermIdentity />, link: "/products" },
    { text: "Category", icon: <PermIdentity />, link: "/category" },
    { text: "Orders", icon: <PermIdentity />, link: "/orders" },
    {
        text: "Apps",
        icon: <GridOn />,
        subMenus: [
            {
                text: "Calender",
                icon: <BorderClear />,
                link: "/app/calender"
            },
            {
                text: "Chat Box",
                icon: <BorderOuter />,
                link: "/app/chatbox"
            },
            {
                text: "InBox",
                icon: <BorderOuter />,
                link: "/app/inbox"
            },
            {
                text: "Todo",
                icon: <BorderOuter />,
                link: "/app/todo"
            }
        ]
    },
    { text: "Charts", icon: <Web />, link: "/charts" },
]