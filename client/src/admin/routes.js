import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import PagesIcon from '@material-ui/icons/Pages';
import DashboardPage from "../containers/Dashboard/Dashboard.js";
import UserProfile from "../containers/UserProfile/UserProfile.js";
import TableList from "../containers/TableList/TableList.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/pages",
    name: "Pages",
    icon: PagesIcon,
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Table List",
    icon: "content_paste",
    component: TableList,
    layout: "/admin"
  }
];

export default dashboardRoutes;
