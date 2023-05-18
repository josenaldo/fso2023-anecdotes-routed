import { Navigate, Route, Routes, useMatch } from 'react-router-dom'

import { Template } from '@/features/layout'
import AboutPage from '@/pages/AboutPage'
import CreatePage from '@/pages/CreatePage'
import AnecdotesPage from '@/pages/AnecdotesPage'
import AnecdotePage from '@/pages/AnecdotePage'

import './App.css'

const IndexPage = () => {
  const match = useMatch('/anecdotes/:id')
  const id = Number(match?.params?.id)

  return (
    <Template>
      <Routes>
        <Route path="/" element={<Navigate replace to="/anecdotes" />} />
        <Route path="/anecdotes" element={<AnecdotesPage />} />
        <Route path="/anecdotes/:id" element={<AnecdotePage id={id} />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Template>
  )
}

export default IndexPage
