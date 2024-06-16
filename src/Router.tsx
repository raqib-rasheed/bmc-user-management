import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import CreatorsPage from "./pages/creators/creators";
import Layout from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "creators",
        element: <CreatorsPage />,
      },
    ],
  },
]);
