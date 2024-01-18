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
  EditJob,
} from "../pages";

import { action as registerAction } from "../pages/Register";
import { action as loginAction } from "../pages/Login";
import { loader as dashboardLoader } from "../pages/DashboardLayout";
import { action as addJobAction } from "../pages/AddJob";
import { loader as allJobsLoader } from "../pages/AllJobs";
import { action as editJobAction } from "../pages/EditJob";
import { loader as editJobLoader } from "../pages/EditJob";
import { action as deleteJobAction } from "../pages/DeleteJob";

const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem("darkTheme") === "true";
  document.body.classList.toggle("dark-theme", isDarkTheme);
  return isDarkTheme;
};

const isDarkThemeEnabled = checkDefaultTheme();

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
          action: registerAction,
        },
        {
          path: "login",
          element: <Login />,
          action: loginAction,
        },
        {
          path: "dashboard",
          element: <DashboardLayout isDarkThemeEnabled={isDarkThemeEnabled} />,
          loader: dashboardLoader,
          children: [
            {
              index: true,
              element: <AddJob />,
              action: addJobAction,
            },
            {
              path: "stats",
              element: <Stats />,
            },
            {
              path: "all-jobs",
              element: <AllJobs />,
              loader: allJobsLoader,
            },
            {
              path: "profile",
              element: <Profile />,
            },
            {
              path: "admin",
              element: <Admin />,
            },
            {
              path: "edit-job/:id",
              element: <EditJob />,
              loader: editJobLoader,
              action: editJobAction,
            },
            {
              path: "delete-job/:id",
              action: deleteJobAction,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
