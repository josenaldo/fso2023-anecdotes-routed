import { Anecdote } from '@/features/anecdote'
import { useAnecdotesValue } from '@/features/anecdote'

const AnecdotePage = ({ id }) => {
  const anecdotes = useAnecdotesValue()
  console.log('AnecdotePage > anecdotes', anecdotes)

  if (!anecdotes) return <div>Loading...</div>

  const anecdote = anecdotes.find((a) => a.id === Number(id))
  console.log('AnecdotePage > anecdote', anecdote)

  if (!anecdote) return <div>Not found</div>

  return <Anecdote anecdote={anecdote} />
}

export default AnecdotePage
