import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../ui/AppLayout";
import Error from "../ui/Error";
import Home from "../Pages/Home";
import Resume from "../Pages/Resume";
import Work from "../Pages/Work";
import Portfolio from "../Pages/Portfolio";
import Contact from "../Pages/Contact";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
      {
        path: "/work",
        element: <Work />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
