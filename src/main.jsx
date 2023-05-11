import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import "./index.css";
import Main from "./Layouts/Main";
import Home from "./components/Home/Home";
import UpdateChocolate from "./components/UpdateChocolate/UpdateChocolate";
import AddChocolate from "./components/AddChocolate/AddChocolate";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("http://localhost:5000/chocolates"),
            },
            {
                path: "/addChocolate",
                element: <AddChocolate></AddChocolate>,
            },
            {
                path: "/chocolates/update/:id",
                element: <UpdateChocolate></UpdateChocolate>,
                loader: ({params}) => fetch(`http://localhost:5000/chocolates/${params.id}`)
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
