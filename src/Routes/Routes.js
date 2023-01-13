import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AboutPage from "../Pages/About/AboutPage";
import ExcelsiorPage from "../Pages/ExcelsiorPage/ExcelsiorPage";
import IeeePage from "../Pages/IeeePage/IeeePage";
import LinkedinPage from "../Pages/LinkedinPage/LinkedinPage";
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
      {
        path: "/projects/excelsior",
        element: <ExcelsiorPage></ExcelsiorPage>,
      },
      {
        path: "/projects/linkedIn",
        element: <LinkedinPage></LinkedinPage>,
      },
    ],
  },
]);
