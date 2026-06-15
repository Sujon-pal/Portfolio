import { createBrowserRouter } from "react-router-dom";
import Root from "../Page/Root/Root";
import Error from "../Page/Error/Error";
import Home from "../Page/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error />,
    children: [
      {
        index: true,
        Component: Home
      }
    ],
  },
]);
