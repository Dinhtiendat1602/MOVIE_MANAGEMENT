import { createSlice } from '@reduxjs/toolkit'

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [
      {
        id: 1,
        movieName: 'Mùi cỏ cháy',
        category: 'Comedy',
        status: 'Watched',
      },
      { id: 2, movieName: 'Thỏ ơi', category: 'Drama', status: 'Not Watched' },
    ],
  },
  reducers: {
    addMovie: (state, action) => {
      state.movies.push({
        id: Date.now(),
        movieName: action.payload.movieName,
        category: action.payload.category,
        status: action.payload.status,
      })
    },
    updateMovie: (state, action) => {
      const index = state.movies.findIndex((m) => m.id === action.payload.id)
      if (index !== -1) {
        state.movies[index].movieName = action.payload.movieName
        state.movies[index].category = action.payload.category
        state.movies[index].status = action.payload.status
      }
    },
    deleteMovie: (state, action) => {
      state.movies = state.movies.filter((m) => m.id !== action.payload)
    },
  },
})

export const { addMovie, updateMovie, deleteMovie } = movieSlice.actions
export default movieSlice.reducer
