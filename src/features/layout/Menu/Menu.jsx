import styles from './Menu.module.css'

const Menu = () => {
  const padding = {
    paddingRight: 5,
  }

  return (
    <nav className={styles.menuWrapper}>
      <div className="container">
        <div className={styles.menu}>
          <a href="#" style={padding}>
            Anecdotes
          </a>
          <a href="#" style={padding}>
            Create new
          </a>
          <a href="#" style={padding}>
            About
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Menu
