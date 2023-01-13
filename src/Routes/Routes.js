import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AboutPage from "../Pages/About/AboutPage";
import IeeePage from "../Pages/IeeePage/IeeePage";
import Projects from "../Pages/Projects/Projects";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Projects></Projects>,
      },
      {
        path: "/projects",
        element: <Projects></Projects>,
      },
      {
        path: "/projects/IEEE-Publication",
        element: <IeeePage></IeeePage>,
      },
      {
        path: "/about",
        element: <AboutPage></AboutPage>,
      },
    ],
  },
]);
