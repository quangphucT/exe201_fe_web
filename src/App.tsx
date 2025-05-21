import { createBrowserRouter, RouterProvider } from "react-router-dom"

import DashboardPage from "./pages/dashboard-management/dashboard";
import StatisticsManagement from "./pages/dashboard-management/admin/statistics";
import LoginPage from "./pages/authen/login";
import RegisterPage from "./pages/authen/register";

import HomePageIntro from "./pages/home-page-intro";
import HomePageLetStart from "./pages/home-page-let-start";
import ForgotPasswordPage from "./pages/authen/forgot-account-page";
import ResetPasswordPage from "./pages/authen/reset-password-page";
import HomePage from "./pages/main-home-page";
import Layout from "./components/layout";
import ProfilePage from "./pages/profile-user-page";
import AddProjectTask from "./pages/add-project-task-page";



const App = () => {
  const router = createBrowserRouter([
    {
      path: '/home',
      element: <Layout/>,
      children: [
        {
          path: '',
          element: <HomePage />
        },
         {
          path: 'profile-page',
          element: <ProfilePage />
        },
         {
          path: 'add-projects-tasks',
          element: <AddProjectTask />
        }
      ]
    },

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
      path: 'reset-password',
      element: <ResetPasswordPage />
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