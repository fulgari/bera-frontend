import React from "react";
import * as Client from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Basic from "./layout/Basic";
import Main from "./components/Main";
import { QueryClient, QueryClientProvider } from "react-query";
import "./styles/app.module.css";
import { Provider } from "react-redux";
import { store } from "./store";
import Koa from 'koa';
import koaStatic from 'koa-static'
import { renderToString } from "react-dom/server";

let App = () => {
  return (
    <Basic>
      <Main />
    </Basic>
  );
};

// const queryClient = new QueryClient();

// const root = Client.createRoot(
//   document.getElementById('root')
// );

// root.render(<Provider store={store}>
//   <QueryClientProvider client={queryClient}>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<App />} />
//         {/* <Route path="home" element={<Home />} />
//         <Route path="kanban" element={<Kanban />} /> */}
//       </Routes>
//     </BrowserRouter>
//   </QueryClientProvider>
// </Provider>);


const koa = new Koa();

koa.use(koaStatic(process.cwd() + '/public'))

koa.use((ctx, next) => {
  const { req } = ctx;
  if (req.url === '/') {
    const body = renderToString(React.createElement(App));
    const html = `
    <html lang="en">
    <head>
        <script src="app.js" async defer></script>
    </head>
    <body>
        <div id="root">${body}</div>
    </body>
    </html>
    `
    ctx.body = html;
  }
  next();
})

koa.listen(9004);
console.log("listening on port 9004");