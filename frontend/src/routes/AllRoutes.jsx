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
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "dashboard",
          element: <DashboardLayout isDarkThemeEnabled={isDarkThemeEnabled} />,
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
