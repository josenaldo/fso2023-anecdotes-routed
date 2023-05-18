import { useReducer } from 'react'
import {
  AnecdotesContext,
  anecdotesReducer,
  NO_ANECDOTES_STATE,
} from '@/features/anecdote'

export const AnecdotesContextProvider = ({ children }) => {
  const [anecdotes, dispatch] = useReducer(anecdotesReducer, NO_ANECDOTES_STATE)

  return (
    <AnecdotesContext.Provider value={{ anecdotes, dispatch }}>
      {children}
    </AnecdotesContext.Provider>
  )
}
