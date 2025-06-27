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
import DashboardLayout from "../Layouts/DashboardLayout";
import MyListings from "../Pages/Dashboard/MyListings/MyListings";
import MyListingUpdate from "../Pages/Dashboard/MyListingUpdate/MyListingUpdate";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import DashboardHome from "../Pages/Dashboard/Home/DashboardHome";
import AboutUs from "../Pages/AboutUs";
import Support from "../Pages/Support";
import ContactUs from "../Pages/ContactUs";

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
      {
        path: "/aboutus",
        Component: AboutUs,
      },
      {
        path: "/support",
        Component: Support,
      },
      {
        path: "/contact",
        Component: ContactUs,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        Component: Dashboard,
      },
      {
        path: "/dashboard/home",
        Component: DashboardHome,
      },

      {
        path: "/dashboard/mylisting",
        Component: MyListings,
      },
      {
        path: "/dashboard/mylistingUpdate/:id",
        loader: ({ params }) =>
          fetch(`https://flatify-server.vercel.app/flatify/${params.id}`),

        hydrateFallbackElement: <Loading></Loading>,
        Component: MyListingUpdate,
      },
      {
        path: "/dashboard/mylistingUpdate",
        element: (
          <PrivateRoute>
            <AddToFindListing></AddToFindListing>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/BrowseListing",
        Component: BrowseListing,
        loader: () => fetch("https://flatify-server.vercel.app/flatify"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/dashboard/details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://flatify-server.vercel.app/flatify/${params.id}`),

        hydrateFallbackElement: <Loading></Loading>,
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
