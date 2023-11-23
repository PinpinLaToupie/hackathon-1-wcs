import ReactDOM from "react-dom/client";
import App from "./pages/App.jsx";
import Root from "./layout/Root.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page404 from "./pages/Page404.jsx";
import AboutUs from "./components/AboutUs";

import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
    ],
  },
  {
    path: "*",
    element: <Page404 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
