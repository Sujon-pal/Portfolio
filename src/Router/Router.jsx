import { createBrowserRouter } from "react-router-dom";
import Root from "../Page/Root/Root";
import Error from "../Page/Error/Error";
import Home from "../Page/Home/Home";
import Contact from "../Page/Contact/Contact";
import Project from "../Page/Project/Project";
import Skills from "../Page/Skills/Skills";
import About from "../Page/About/About";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "Contact",
        Component: Contact,
      },
      {
        path: "Projects",
        Component: Project,
      },
      {
        path: "skills",
        Component: Skills,
      },
      {
        path: "about",
        Component: About,
      },
    ],
  },
]);
