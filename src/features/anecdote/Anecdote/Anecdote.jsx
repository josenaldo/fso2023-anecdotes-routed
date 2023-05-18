import styles from './Anecdote.module.css'
import { useAnecdotesDispatch, useUpdateAnecdotes } from '@/features/anecdote'

const Anecdote = ({ anecdote }) => {
  const dispatch = useAnecdotesDispatch()
  const updateAnecdote = useUpdateAnecdotes()

  const handleVote = (anecdote) => {
    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1,
    }

    dispatch(updateAnecdote({ id: anecdote.id, anecdote: voted }))
  }

  return (
    <article>
      <div className={styles.anecdoteWraper}>
        <div className={styles.anecdote}>
          <span className={styles.content}>&quot;{anecdote.content}&quot;</span>
          <span className={styles.author}>- {anecdote.author}</span>
        </div>

        <div className={styles.votes}>
          <button
            className="card small inline"
            onClick={() => handleVote(anecdote)}
          >
            <div className={styles.buttonVote}>
              <span className="material-icons">thumb_up_alt</span>
              <span>Vote</span>
            </div>
          </button>
          <span>{anecdote.votes}</span>
        </div>
      </div>
      <footer>
        For more info see <a href={anecdote.info}>{anecdote.info}</a>
      </footer>
    </article>
  )
}

export default Anecdote
