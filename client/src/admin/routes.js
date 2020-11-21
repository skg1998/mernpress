import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import PagesIcon from '@material-ui/icons/Pages';
import DashboardPage from "../containers/Dashboard/Dashboard.js";
import UserProfile from "../containers/UserProfile/UserProfile.js";
import TableList from "../containers/TableList/TableList.js";
import AddBanner from "./component/AddBanner";
import AddCategory from "./component/AddCategory";
import AddProduct from "./component/AddProduct";
import AddTitle from "./component/AddProjectTitle"
import AddShop from "./component/AddShop";
import AddSlidder from "./component/AddSliderImage"

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    subItem:[],
    layout: "/admin",
  },
  {
    path: "/user",
    name: "User Profile",
    icon: Person,
    component: UserProfile,
    subItem:[],
    layout: "/admin",
  },
  {
    path: "/page",
    name: "Page",
    icon: PagesIcon,
    subItem :[
      {
        path: "/addTitle",
        name: "Add Title",
        icon: PagesIcon,
        component: AddTitle,
      },
      {
        path: "/addbanner", 
        name: "Add Banner",
        icon: PagesIcon,
        component: AddBanner,
      },
      {
        path: "/addcategory",
        name: "Add Category",
        icon: PagesIcon,
        component: AddCategory,
      },
      {
        path: "/addproduct",
        name: "Add Product",
        icon: PagesIcon,
        component: AddProduct,
      },
      {
        path: "/addslidder",
        name: "Add Slidder",
        icon: PagesIcon,
        component: AddSlidder,
      },
      {
        path: "/addshop",
        name: "Vendors",
        icon: PagesIcon,
        component: AddShop,
      }
    ],
    layout: "/admin",
  },
  {
    path: "/table",
    name: "Table List",
    icon: "content_paste",
    component: TableList,
    layout: "/admin",
    subItem:[]
  }
];

export default dashboardRoutes;

