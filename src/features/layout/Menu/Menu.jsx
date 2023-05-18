import { Link } from 'react-router-dom'

import styles from './Menu.module.css'

const Menu = () => {
  const padding = {
    paddingRight: 5,
  }

  return (
    <nav className={styles.menuWrapper}>
      <div className="container">
        <div className={styles.menu}>
          <Link to="/anecdotes" style={padding}>
            Anecdotes
          </Link>
          <Link to="/create" style={padding}>
            Create new
          </Link>
          <Link to="/about" style={padding}>
            About
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Menu
