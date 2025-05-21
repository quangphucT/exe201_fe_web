import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/layout";
import DashboardPage from "./pages/dashboard-management/dashboard";
import StatisticsManagement from "./pages/dashboard-management/admin/statistics";
import LoginPage from "./pages/authen/login";
import RegisterPage from "./pages/authen/register";


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [

      ]
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