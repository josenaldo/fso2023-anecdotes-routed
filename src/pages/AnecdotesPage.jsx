import { AnecdoteList } from '@/features/anecdote/'

const AnecdotesPage = ({ anecdotes }) => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteList anecdotes={anecdotes} />
    </div>
  )
}

export default AnecdotesPage
