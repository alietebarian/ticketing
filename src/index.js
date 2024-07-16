import React from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddNewTicket from "./component/AddNewTicket";

// ایجاد یک نمونه جدید از QueryClient
const queryClient = new QueryClient();

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
        <React.StrictMode>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </React.StrictMode>
);
