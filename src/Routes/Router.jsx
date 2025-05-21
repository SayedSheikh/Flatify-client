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
        path: "/AddListing",
        element: <p>test</p>,
      },
      {
        path: "/BrowseListing",
        element: <p>test</p>,
      },
      {
        path: "/MyListings",
        element: <p>test</p>,
      },
    ],
  },
]);

{
  /* <Home />
<Add Listing />
<Browse Listing />
<My Listings /> */
}

export default router;
