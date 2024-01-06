import { AnimatePresence, motion } from "framer-motion";
import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import Services from "../pages/Services";

const routes = createBrowserRouter([
    {
        path: '',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <HomePage/>
            },
            {
                path:'/aboutUs',
                element: <AboutUs/>
            },
            {
              path:'/contact',
              element: <Contact/>
          },
          {
            path:'/services',
            element: <Services/>
        },
        ]
    }
]);

export default routes;