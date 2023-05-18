import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <Link to="/" className={styles.link}>
          <h1>Software anecdotes</h1>
        </Link>
      </div>
    </header>
  )
}

export default Header
