import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./main.scss"
import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./routers";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={AppRouter} />
    </ThemeProvider>
  </React.StrictMode>
);
