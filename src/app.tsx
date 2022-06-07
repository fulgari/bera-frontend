import React from "react";
import * as Server from "react-dom/server";
import * as ReactDOM from "react-dom";
import List from "./layout/List/List";
import Card from "./components/Card/Card";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "./pages/Home/Home";
import { Kanban } from "./pages/Kanban/Kanban";

let App = () => {
  return (
    <List>
      <Card />
    </List>
  )
};

// console.log(Server.renderToString(<Greet />))
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="home" element={<Home />} />
      <Route path="kanban" element={<Kanban />} />
    </Routes>
  </BrowserRouter>
  , document.body);
