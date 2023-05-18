import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span>
        Anecdote 2 app for{' '}
        <a href="https://fullstackopen.com/">Full Stack Open</a>.
      </span>
      <span>
        See{' '}
        <a href="https://github.com/josenaldo/fso2023-anecdotes-routed">
          https://github.com/josenaldo/fso2023-anecdotes-routed
        </a>{' '}
        for the source code.
      </span>
    </footer>
  )
}

export default Footer
