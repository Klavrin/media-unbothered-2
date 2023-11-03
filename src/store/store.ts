import { configureStore } from '@reduxjs/toolkit'
import cursorReducer from './reducers/cursor-slice'

const store = configureStore({
  reducer: {
    cursor: cursorReducer
  }
})

export default store
