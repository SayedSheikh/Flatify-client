import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import AddToFindListing from "../Pages/AddToFindListing";
import MyListingPage from "../Pages/MyListingPage";
import LogIn from "../Pages/LogIn";
import SignUp from "../Pages/SignUp";
import BrowseListing from "../Pages/BrowseListing";
import Details from "../Pages/Details";
import Update from "../Pages/Update";
import Error from "../Pages/Error";
import PrivateRoute from "../Pages/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/AddListing",
        element: (
          <PrivateRoute>
            <AddToFindListing></AddToFindListing>{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/BrowseListing",
        Component: BrowseListing,
        loader: () => fetch("http://localhost:3000/flatify"),
        hydrateFallbackElement: <p>Loading...</p>,
      },
      {
        path: "/MyListings",

        element: (
          <PrivateRoute>
            {" "}
            <MyListingPage></MyListingPage>{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/MyListings/update/:id",
        Component: Update,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/flatify/${params.id}`),

        hydrateFallbackElement: <p>Loading...</p>,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/flatify/${params.id}`),

        hydrateFallbackElement: <p>Loading...</p>,
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
