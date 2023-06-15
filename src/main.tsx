import { BrowserRouter } from "react-router-dom";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/css/fontiran.css";
import "./index.scss";

import { store } from "./store/store";
import { Provider } from "react-redux";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { HelmetProvider } from "react-helmet-async";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <QueryClientProvider client={queryClient}>
        <HelmetProvider>
            <Provider store={store}>
                <BrowserRouter>
                    <React.StrictMode>
                        <App />
                        <ReactQueryDevtools />
                    </React.StrictMode>
                </BrowserRouter>
            </Provider>
        </HelmetProvider>
    </QueryClientProvider>,
);
