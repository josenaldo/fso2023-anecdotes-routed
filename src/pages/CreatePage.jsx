import { useState } from 'react'

const CreatePage = (props) => {
  const [content, setContent] = useState('')
  const [author, setAuthor] = useState('')
  const [info, setInfo] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addNew({
      content,
      author,
      info,
      votes: 0,
    })
  }

  return (
    <div>
      <h2>Create a new anecdote</h2>
      <article>
        <form onSubmit={handleSubmit}>
          <div>
            Content
            <input
              name="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div>
            Author
            <input
              name="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div>
            Url for more info
            <input
              name="info"
              value={info}
              onChange={(e) => setInfo(e.target.value)}
            />
          </div>
          <button>Create</button>
        </form>
      </article>
    </div>
  )
}

export default CreatePage
