import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import AddToFindListing from "../Pages/AddToFindListing";

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
        Component: AddToFindListing,
      },
      {
        path: "/BrowseListing",
        element: <p>test</p>,
      },
      {
        path: "/MyListings",
        element: <p>test</p>,
      },
      {
        path: "/details/:id",
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
