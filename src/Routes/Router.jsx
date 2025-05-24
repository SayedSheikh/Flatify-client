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
import Loading from "../Components/Loading/Loading";

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
        loader: () => fetch("https://flatify-server.vercel.app/flatify"),
        hydrateFallbackElement: <Loading></Loading>,
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
        loader: ({ params }) =>
          fetch(`https://flatify-server.vercel.app/flatify/${params.id}`),

        hydrateFallbackElement: <Loading></Loading>,
        element: (
          <PrivateRoute>
            {" "}
            <Update></Update>{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://flatify-server.vercel.app/flatify/${params.id}`),

        hydrateFallbackElement: <Loading></Loading>,
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
