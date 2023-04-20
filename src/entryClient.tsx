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


// const renderHtml = () => {
//   // return "<html>1</html>"
//   console.log("renderToString:start")
//   const html = ReactDOMServer.renderToString(<App />);
//   console.log("renderToString", html)
//   return `<!-- A template page to load all the bundled resources -->
//   <!DOCTYPE html>
//   <html lang="en">
  
//   <head>
//     <meta charset="utf-8" />
//     <link rel="icon" href="/favicon.ico" />
//     <meta name="viewport" content="width=device-width, initial-scale=1" />
//     <meta name="theme-color" content="#000000" />
//     <meta name="description" content="Web site created using create-react-app" />
//     <title>Bera App</title>
//     <script src="public/app.js" async defer></script>
//     <link rel="stylesheet" href="public/app.css"/>
//   </head>
  
//   <body>
//     <noscript>You need to enable JavaScript to run this app.</noscript>
//     <div id="root">${html}</div>
//   </body>
//   </html>`
// }

export {
  App,
}