import React from "react";
import * as Server from "react-dom/server";
import * as ReactDOM from "react-dom";
import List from "./layout/List/List";
import Card from "./components/Card/Card";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "./pages/Home/Home";
import { Kanban } from "./pages/Kanban/Kanban";
import Basic from "./layout/Basic/Basic";
import Entry from "./components/Entry/Entry";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import "./styles/app.module.css";

let App = () => {
  return (
    <Basic>
      {/* <Card /> */}
      <Entry />
    </Basic>
  )
};

const queryClient = new QueryClient();

// console.log(Server.renderToString(<Greet />))
ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="home" element={<Home />} />
        <Route path="kanban" element={<Kanban />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
  , document.body);
