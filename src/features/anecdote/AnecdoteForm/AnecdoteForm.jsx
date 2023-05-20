// import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useField } from '@/features/hooks'
import { useAnecdotesDispatch, useCreateAnecdotes } from '@/features/anecdote'

const AnecdoteForm = () => {
  const dispatch = useAnecdotesDispatch()
  const create = useCreateAnecdotes()
  const navigate = useNavigate()

  const content = useField('content', 'text')
  const author = useField('author', 'text')
  const info = useField('info', 'text')

  const handleSubmit = (e) => {
    e.preventDefault()

    const id = Math.round(Math.random() * 10000)

    const anecdote = {
      id,
      content: content.value,
      author: author.value,
      info: info.value,
    }

    content.reset()
    author.reset()
    info.reset()

    dispatch(create(anecdote))
    navigate(`/anecdotes/${anecdote.id}`)
  }

  const handleReset = (e) => {
    e.preventDefault()

    content.reset()
    author.reset()
    info.reset()
  }

  return (
    <article>
      <form onSubmit={handleSubmit}>
        <div>
          Content
          <input {...content.input} />
        </div>
        <div>
          Author
          <input {...author.input} />
        </div>
        <div>
          Url for more info
          <input {...info.input} />
        </div>
        <div className="grid">
          <button type="submit">Create</button>
          <button onClick={handleReset} className="secondary">
            Reset
          </button>
        </div>
      </form>
    </article>
  )
}

export default AnecdoteForm
