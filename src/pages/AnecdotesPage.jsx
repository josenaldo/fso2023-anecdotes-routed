import { AnecdoteList } from '@/features/anecdote/'

import { useAnecdotesValue } from '@/features/anecdote/'

const AnecdotesPage = () => {
  const anecdotes = useAnecdotesValue()
  console.log('AnecdotesPage > anecdotes', anecdotes)
  if (!anecdotes?.length) return <p>No anecdotes yet!</p>

  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteList anecdotes={anecdotes} />
    </div>
  )
}

export default AnecdotesPage
