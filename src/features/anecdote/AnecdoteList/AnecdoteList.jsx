import { Link } from 'react-router-dom'
import styles from './AnecdoteList.module.css'

const AnecdoteList = ({ anecdotes }) => {
  return (
    <div>
      {anecdotes.map((anecdote) => (
        <article key={anecdote.id} className={styles.anecdote}>
          <Link to={`/anecdotes/${anecdote.id}`}>
            <div className={styles.content}>&quot;{anecdote.content}&quot;</div>
          </Link>
          <div className={styles.author}>- {anecdote.author}</div>
        </article>
      ))}
    </div>
  )
}

export default AnecdoteList
