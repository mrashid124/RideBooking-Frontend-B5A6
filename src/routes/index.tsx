import App from "@/App";
// import AdminLayout from "@/components/layout/AdminLayout";
import About from "@/pages/About";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
// import Analytics from "@/pages/Analytics";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        // element: <App />,
        Component: App,
        path: "/",
        children: [
            {
                Component: About,
                path: "about",
            },
        ],
    },
    {
        Component: Register,
        path: "/register"
    },
    {
        Component: Login,
        path: "/login",
    },
    // {
    //     Component: FAQ,
    //     path: "/faq",
    // },
    // {
    //     Component: AdminLayout,
    //     path: "/admin",
    //     children: [
    //         {
    //             Component: Analytics,
    //             path:"analytics",
    //         },
    //     ],
    // },


]);