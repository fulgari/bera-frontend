import React from "react";
import * as Client from "react-dom/client";
import List from "./layout/List";
import Card from "./components/Card";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "./pages/Home";
import { Kanban } from "./pages/Kanban";
import Basic from "./layout/Basic";
import Main from "./components/Main";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import "./styles/app.module.css";
import { Provider } from "react-redux";
import { store } from "./store";

let App = () => {
  return (
    <Basic>
      <Main />
    </Basic>
  );
};

const queryClient = new QueryClient();

const root = Client.createRoot(
  document.getElementById('root')
);

root.render(<Provider store={store}>
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="home" element={<Home />} />
        <Route path="kanban" element={<Kanban />} /> */}
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
  </Provider>);

export {
  App,
}