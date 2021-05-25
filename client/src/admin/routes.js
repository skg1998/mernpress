import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import PagesIcon from '@material-ui/icons/Pages';
import DashboardPage from "../containers/Dashboard/Dashboard.js";
import UserProfile from "../containers/UserProfile/UserProfile.js";
import UserList from "../containers/TableList/TableList.js";
import AddCategory from "./components/AddCategory";
import AddProduct from "./components/AddProduct";
import AddShop from "./components/AddShop";
import AddPaymentMethod from "./components/AddPaymentMethod"
import BasicDesign from './components/BasicDesign'

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    subItem: [],
    layout: "/admin",
  },
  {
    path: "/admin",
    name: "Admin Profile",
    icon: Person,
    component: UserProfile,
    subItem: [],
    layout: "/admin",
  },
  {
    path: "/Design",
    name: "Basic Design",
    icon: PagesIcon,
    component: BasicDesign,
    subItem: [],
    layout: "/admin",
  },
  {
    path: "/page",
    name: "Page",
    icon: PagesIcon,
    subItem: [
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
    subItem: []
  }
];

export default dashboardRoutes;

