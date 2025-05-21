import { createBrowserRouter, RouterProvider } from "react-router-dom"

import DashboardPage from "./pages/dashboard-management/dashboard";
import StatisticsManagement from "./pages/dashboard-management/admin/statistics";
import LoginPage from "./pages/authen/login";
import RegisterPage from "./pages/authen/register";

import HomePageIntro from "./pages/home-page-intro";
import HomePageLetStart from "./pages/home-page-let-start";
import ForgotPasswordPage from "./pages/authen/forgot-account-page";


const App = () => {
  const router = createBrowserRouter([

    {
      path: "/",
      element: <HomePageIntro />,
    },
    {
      path: "/home-page-lets-start",
      element: <HomePageLetStart />,
    },
    {
      path: 'forgot-password',
      element: <ForgotPasswordPage />
    },
    {
      path: '/login-page',
      element: <LoginPage />
    },
    {
      path: '/register-page',
      element: <RegisterPage />
    },
    {
      path: '/dashboard',
      element: <DashboardPage />,
      children: [
        {
          path: 'statistic',
          element: <StatisticsManagement />
        }
      ]
    }
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App