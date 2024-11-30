import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import NewUsers from "./Pages/NewUsers";
import AllUsers from "./Pages/AllUsers";
import UpdateUser from "./Pages/UpdateUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "newusers",
        element: <NewUsers></NewUsers>,
      },
      {
        path: "updateuser/:id",
        element: <UpdateUser></UpdateUser>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allusers/${params.id}`),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
