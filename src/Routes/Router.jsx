import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import AddToFindListing from "../Pages/AddToFindListing";
import MyListingPage from "../Pages/MyListingPage";
import LogIn from "../Pages/LogIn";
import SignUp from "../Pages/SignUp";
import BrowseListing from "../Pages/BrowseListing";
import Details from "../Pages/Details";

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
        Component: BrowseListing,
        loader: () => fetch("/data.json"),
        hydrateFallbackElement: <p>Loading...</p>,
      },
      {
        path: "/MyListings",
        Component: MyListingPage,
        loader: () => fetch("/data.json"),
        hydrateFallbackElement: <p>Loading...</p>,
      },
      {
        path: "/details/:id",
        Component: Details,
      },
      {
        path: "/login",
        Component: LogIn,
      },
      {
        path: "/signup",
        Component: SignUp,
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
