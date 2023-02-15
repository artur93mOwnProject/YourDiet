import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "pages/HomePage/HomePage";
import RecipiesPage from "pages/ReciepiesPage/RecipiesPage";
import RootPage from "pages/RootPage/RootPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "recipes",
        element: <RecipiesPage />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
