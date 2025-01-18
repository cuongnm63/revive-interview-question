import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from "./auth/auth-provider.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./routes/routes.tsx";
import { ToastServiceProvider } from "./components/global-service/global-service.tsx";
import { ApiProvide } from "./apis/api-provider.tsx";
import { ConfigProvider } from "antd";
const browserRouter = createBrowserRouter(ROUTES);
export const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#FF6000",
        colorLink: "#FF6000",
      },
    }}
  >
    <AuthProvider>
      <RouterProvider router={browserRouter} />
    </AuthProvider>
  </ConfigProvider>
);
