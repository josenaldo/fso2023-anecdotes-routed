import { useState } from 'react'
import { Navigate, Route, Routes, useMatch } from 'react-router-dom'

import { Template } from '@/features/layout'
import AboutPage from '@/pages/AboutPage'
import CreatePage from '@/pages/CreatePage'
import AnecdotesPage from '@/pages/AnecdotesPage'
import AnecdotePage from '@/pages/AnecdotePage'

import './App.css'

const IndexPage = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: 1,
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: 2,
    },
  ])

  // eslint-disable-next-line no-unused-vars
  const [notification, setNotification] = useState('')

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000)
    setAnecdotes(anecdotes.concat(anecdote))
  }

  const anecdoteById = (id) => anecdotes.find((a) => a.id === id)

  // eslint-disable-next-line no-unused-vars
  const vote = (id) => {
    const anecdote = anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1,
    }

    setAnecdotes(anecdotes.map((a) => (a.id === id ? voted : a)))
  }

  const match = useMatch('/anecdotes/:id')
  const anecdote = match
    ? anecdotes.find((a) => a.id === Number(match.params.id))
    : null

  return (
    <Template>
      <Routes>
        <Route path="/" element={<Navigate replace to="/anecdotes" />} />
        <Route
          path="/anecdotes"
          element={<AnecdotesPage anecdotes={anecdotes} />}
        />
        <Route
          path="/anecdotes/:id"
          element={<AnecdotePage anecdote={anecdote} />}
        />

        <Route path="/create" element={<CreatePage addNew={addNew} />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Template>
  )
}

export default IndexPage
