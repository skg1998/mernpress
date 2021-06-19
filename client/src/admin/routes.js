import Dashboard from "@material-ui/icons/Dashboard";
import PagesIcon from '@material-ui/icons/Pages';
import DescriptionIcon from '@material-ui/icons/Description';

import DashboardPage from "../containers/Dashboard/Dashboard.js";
import AddCategory from "./components/AddCategory";
import AddProduct from "./components/AddProduct";
import AddShop from "./components/AddShop";
import AddPaymentMethod from "./components/AddPaymentMethod"
import BasicDesign from './components/BasicDesign'
import LatestOrder from './components/LatestOrder'
import Admin from './Pages/AdminProfile';
import PersonIcon from '@material-ui/icons/Person';

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
    icon: PersonIcon,
    component: Admin,
    subItem: [],
    layout: "/admin",
  },
  {
    path: "/Design",
    name: "Basic Design",
    icon: DescriptionIcon,
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
    path: "/latest-order",
    name: "Latest Order",
    icon: PagesIcon,
    component: LatestOrder,
    layout: "/admin",
    subItem: []
  },
  // {
  //   path: "/user",
  //   name: "User List",
  //   icon: "content_paste",
  //   component: UserList,
  //   layout: "/admin",
  //   subItem: []
  // }
];

export default dashboardRoutes;

