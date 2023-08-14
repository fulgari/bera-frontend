import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Basic from './layout/Basic'
import Main from './components/Main'
import { QueryClient, QueryClientProvider } from 'react-query'
import './styles/app.module.css'
import { Provider } from 'react-redux'
import { store } from './store'
import Koa from 'koa'
import koaStatic from 'koa-static'
import { renderToString } from 'react-dom/server'

const App = () => {
  return (
    <Basic>
      <Main />
    </Basic>
  )
}

const queryClient = new QueryClient()

const WrappedApp = () => (<Provider store={store}>
  <QueryClientProvider client={queryClient}>
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter> */}
    <App />
  </QueryClientProvider>
</Provider>)

const koa = new Koa()

koa.use(koaStatic(process.cwd()))

koa.use((ctx, next) => {
  const { req } = ctx
  if (req.url === '/') {
    console.log('renderToString:start')
    const body = renderToString(React.createElement(WrappedApp))
    console.log('renderToString:body', body)
    const html = `
    <html lang="en">
    <head>
        <script src="index.js" async defer></script>
    </head>
    <body>
        <div id="root">${body}</div>
    </body>
    </html>
    `
    ctx.body = html
  }
  next()
})

koa.listen(9004)
console.log('listening on port 9004')
