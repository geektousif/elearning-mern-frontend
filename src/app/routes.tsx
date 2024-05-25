import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    lazy: async () => {
      const { default: Landing } = await import("../pages/Landing");
      return { Component: Landing };
    },
  },
  {
    path: "/login",
    lazy: async () => {
      const { default: Login } = await import("../pages/Login");
      return { Component: Login };
    },
  },
  {
    path: "/signup",
    lazy: async () => {
      const { default: Signup } = await import("../pages/Signup");
      return { Component: Signup };
    },
  },
  {
    path: "*",
    lazy: async () => {
      const { default: NotFound } = await import("../pages/NotFound");
      return { Component: NotFound };
    },
  },
]);

export default router;
