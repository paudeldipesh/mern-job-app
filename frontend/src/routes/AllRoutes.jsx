import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  Register,
  Login,
  DashboardLayout,
  Landing,
  Error,
  AddJob,
  Stats,
  Admin,
  Profile,
  AllJobs,
} from "../pages";

export default function AllRoutes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "dashboard",
          element: <DashboardLayout />,
          children: [
            {
              index: true,
              element: <AddJob />,
            },
            {
              path: "stats",
              element: <Stats />,
            },
            {
              path: "all-jobs",
              element: <AllJobs />,
            },
            {
              path: "profile",
              element: <Profile />,
            },
            {
              path: "admin",
              element: <Admin />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
