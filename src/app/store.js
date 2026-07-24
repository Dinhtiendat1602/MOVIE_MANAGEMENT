import { configureStore } from '@reduxjs/toolkit'
import movieReducer from '../store/movieSlice'

export const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
})
