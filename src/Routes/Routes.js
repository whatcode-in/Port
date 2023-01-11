import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Projects from "../Pages/Projects/Projects";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/projects",
        element: <Projects></Projects>,
      },
    ],
  },
]);
