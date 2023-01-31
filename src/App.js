import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto ">
      <RouterProvider router={router}></RouterProvider>
      
      <ScrollToTop
      className="text-center mx-auto"
        smooth
        color="#6f00ff"
        viewBox="0 0 18 18"
        svgPath="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
      />
    </div>
  );
}

export default App;
