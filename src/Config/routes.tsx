import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";
import Register from "../Pages/Register";
import Todos from "../Pages/Todos";
import Giphy from "../Pages/Giphy";
import Profile from "../Pages/Profile";

const routes = [
  {
    path: "/dashboard",
    component: Dashboard,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/todos",
    component: Todos,
  },
  {
    path: "/giphy",
    component: Giphy,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/",
    component: Dashboard,
  },
];

export default routes;
