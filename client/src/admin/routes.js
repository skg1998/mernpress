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
import AddBasicDesign from "./component/AddBasicDesign"

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
        component: AddShop,
      }
    ],
    layout: "/admin",
  },
  {
    path: "/user",
    name: "User List",
    icon: "content_paste",
    component: TableList,
    layout: "/admin",
    subItem:[]
  }
];

export default dashboardRoutes;

