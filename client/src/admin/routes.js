import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import PagesIcon from '@material-ui/icons/Pages';
import DashboardPage from "../containers/Dashboard/Dashboard.js";
import UserProfile from "../containers/UserProfile/UserProfile.js";
import UserList from "../containers/TableList/TableList.js";
import AddBanner from "./components/AddBanner";
import AddCategory from "./components/AddCategory";
import AddProduct from "./components/AddProduct";
import AddTitle from "./components/AddProjectTitle"
import AddShop from "./components/AddShop";
import AddSlidder from "./components/AddSliderImage"
import AddBasicDesign from "./components/AddBasicDesign"
import AddPaymentMethod from "./components/AddPaymentMethod"
import AddFooter from "./components/AddFooter";
import AddHeader from "./components/AddHeader";

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
    path: "/admin",
    name: "Admin Profile",
    icon: Person,
    component: UserProfile,
    subItem:[],
    layout: "/admin",
  },
  {
    path: "/design",
    name: "Design",
    icon: PagesIcon,
    subItem :[
      {
        path: "/addbasicdesign",
        name: "Basic Design",
        component: AddBasicDesign,
      },
      {
        path: "/addTitle",
        name: "Title",
        component: AddTitle,
      },
      {
        path: "/addbanner", 
        name: "Banner",
        component: AddBanner,
      },
      {
        path: "/addslidder",
        name: "Slidder",
        component: AddSlidder,
      },
      {
        path: "/addFooter",
        name: "Footer",
        component: AddFooter,
      },
      {
        path: "/addHeader",
        name: "Header",
        component: AddHeader,
      }
    ],
    layout: "/admin",
  },
  {
    path: "/page",
    name: "Page",
    icon: PagesIcon,
    subItem :[
      {
        path: "/addcategory",
        name: "Add Category",
        component: AddCategory,
      },
      {
        path: "/addproduct",
        name: "Add Product",
        component: AddProduct,
      },
      {
        path: "/addshop",
        name: "Vendors",
        component: AddShop,
      },
      {
        path: "/addpaymentgetway",
        name: "PaymentGetway",
        component: AddPaymentMethod,
      }
    ],
    layout: "/admin",
  },
  {
    path: "/user",
    name: "User List",
    icon: "content_paste",
    component: UserList,
    layout: "/admin",
    subItem:[]
  }
];

export default dashboardRoutes;

