import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <p>Error occured..</p>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/test",
        element: <p>test</p>,
      },
    ],
  },
]);

export default router;
