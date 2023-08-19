import React, { useEffect } from 'react'
import * as Client from 'react-dom/client'
import List from './layout/List'
import Card from './components/Card'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Kanban } from './pages/Kanban'
import Basic from './layout/Basic'
import Main from './components/Main'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import './styles/app.module.css'
import { Provider } from 'react-redux'
import { store } from './store'
import { App } from './pages/App'
import { Unlogin } from './pages/Unlogin'
import { ServiceProvider } from './service/ServiceProvider'
import service from './service'

const queryClient = new QueryClient()

const rootEl = document.getElementById('root') ?? document.body
const root = Client.createRoot(
  rootEl
)

root.render(
  <Provider store={store}>
    <ServiceProvider value={{ service }}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="login" element={<Unlogin />} />
            {/* <Route path="home" element={<Home />} />
        <Route path="kanban" element={<Kanban />} /> */}
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ServiceProvider>
  </Provider>
)
