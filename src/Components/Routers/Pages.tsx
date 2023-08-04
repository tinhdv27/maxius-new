import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";

const routes = [
  {
    path: "/",
    exact: true,
    element: <Home />,
  },
  {
    path: "/contact",
    exact: false,
    element: <Contact />,
  },
];

export default routes;
