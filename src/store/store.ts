import { configureStore } from '@reduxjs/toolkit'
import cursorReducer from './reducers/cursor-slice'
import languageReducer from './reducers/language-slice'

const store = configureStore({
  reducer: {
    cursor: cursorReducer,
    language: languageReducer
  }
})

export default store
