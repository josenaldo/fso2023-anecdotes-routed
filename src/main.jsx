import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

import { NotificationContextProvider } from '@/features/notification'
import { AnecdotesContextProvider } from '@/features/anecdote'

import IndexPage from '@/pages/App'
import '@/styles/main.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <NotificationContextProvider>
      <AnecdotesContextProvider>
        <Router>
          <IndexPage />
        </Router>
      </AnecdotesContextProvider>
    </NotificationContextProvider>
  </React.StrictMode>
)
