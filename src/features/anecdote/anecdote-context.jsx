import { createContext, useContext } from 'react'

import {
  NOTIFICATION_TYPES,
  useSetNotification,
  useNotificationDispatch,
} from '@/features/notification'

import { NO_ANECDOTES_STATE } from '@/features/anecdote'

const AnecdotesContext = createContext(NO_ANECDOTES_STATE)
export default AnecdotesContext

export const anecdotesReducer = (state, action) => {
  switch (action.type) {
    case 'anecdotes/create':
      return state.concat(action.payload)
    case 'anecdotes/update':
      return state.map((anecdote) =>
        anecdote.id === action.payload.id ? action.payload.anecdote : anecdote
      )
    case 'anecdotes/remove':
      return state.filter((anecdote) => anecdote.id !== action.payload.id)
    default:
      return state
  }
}

export const useAnecdotesValue = () => {
  const context = useContext(AnecdotesContext)

  return context.anecdotes
}

export const useAnecdotesDispatch = () => {
  const context = useContext(AnecdotesContext)

  return context.dispatch
}

export const useCreateAnecdotes = () => {
  const dispatch = useNotificationDispatch()
  const setNotification = useSetNotification()

  const create = ({ id, content, author, info }) => {
    dispatch(
      setNotification({
        type: NOTIFICATION_TYPES.SUCCESS,
        message: 'Anecdote created!',
        details: `Anecdote "${content}" by ${author} created!`,
      })
    )

    return {
      type: 'anecdotes/create',
      payload: {
        id,
        content,
        author,
        info,
        votes: 0,
      },
    }
  }

  return create
}

export const useUpdateAnecdotes = () => {
  const dispatch = useNotificationDispatch()
  const setNotification = useSetNotification()

  const update = ({ id, anecdote }) => {
    dispatch(
      setNotification({
        type: NOTIFICATION_TYPES.INFO,
        message: 'Anecdote updated!',
        details: `Anecdote "${anecdote.content}" by ${anecdote.author} updated!`,
      })
    )

    return {
      type: 'anecdotes/update',
      payload: {
        id,
        anecdote,
      },
    }
  }

  return update
}

export const useRemoveAnecdotes = () => {
  const dispatch = useNotificationDispatch()
  const setNotification = useSetNotification()

  const remove = (id) => {
    dispatch(
      setNotification({
        type: NOTIFICATION_TYPES.WARNING,
        message: 'Anecdote removed!',
      })
    )
    return {
      type: 'anecdotes/remove',
      payload: {
        id,
      },
    }
  }

  return remove
}
