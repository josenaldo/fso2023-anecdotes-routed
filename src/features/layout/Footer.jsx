import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span>
        Anecdote 2 app for{' '}
        <a href="https://fullstackopen.com/">Full Stack Open</a>. See{' '}
      </span>
      <span>
        <a href="https://github.com/fullstack-hy2020/routed-anecdotes/blob/master/src/App.js">
          https://github.com/fullstack-hy2020/routed-anecdotes/blob/master/src/App.js
        </a>{' '}
        for the source code.
      </span>
    </footer>
  )
}

export default Footer
