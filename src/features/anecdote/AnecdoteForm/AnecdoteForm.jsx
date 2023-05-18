import { useState } from 'react'
import { useAnecdotesDispatch, useCreateAnecdotes } from '@/features/anecdote'
import { useNavigate } from 'react-router-dom'

const AnecdoteForm = () => {
  const dispatch = useAnecdotesDispatch()
  const create = useCreateAnecdotes()
  const navigate = useNavigate()

  const [content, setContent] = useState('')
  const [author, setAuthor] = useState('')
  const [info, setInfo] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const id = Math.round(Math.random() * 10000)

    const anecdote = {
      id,
      content,
      author,
      info,
    }

    setContent('')
    setAuthor('')
    setInfo('')

    dispatch(create(anecdote))
    navigate(`/anecdotes/${anecdote.id}`)
  }

  return (
    <article>
      <form onSubmit={handleSubmit}>
        <div>
          Content
          <input
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div>
          Author
          <input
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div>
          Url for more info
          <input
            name="info"
            value={info}
            onChange={(e) => setInfo(e.target.value)}
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </article>
  )
}

export default AnecdoteForm
