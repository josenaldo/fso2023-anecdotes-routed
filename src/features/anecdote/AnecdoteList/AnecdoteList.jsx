import { Link } from 'react-router-dom'
import styles from './AnecdoteList.module.css'

const AnecdoteList = ({ anecdotes }) => {
  return (
    <div className={styles.anedoctes}>
      {anecdotes.map((anecdote) => (
        <article key={anecdote.id} className={styles.anecdote}>
          <Link to={`/anecdotes/${anecdote.id}`}>
            <div className={styles.content}>&quot;{anecdote.content}&quot;</div>
          </Link>
          <div className={styles.author}>- {anecdote.author}</div>
          <footer className={styles.footer}>
            <div className={styles.votes}>
              <span className="material-icons">thumb_up_alt</span>{' '}
              {anecdote.votes}
            </div>
            <div className={styles.info}>
              <a href={anecdote.info} target="_blank" rel="noreferrer">
                More info
              </a>
            </div>
          </footer>
        </article>
      ))}
    </div>
  )
}

export default AnecdoteList
