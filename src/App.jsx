import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import MovieListPage from './pages/MovieListPage'
import CreateMoviePage from './pages/CreateMoviePage'
import MovieDetailPage from './pages/MovieDetailPage'
import EditMoviePage from './pages/EditMoviePage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/movies" replace />} />
        <Route path="/movies" element={<MovieListPage />} />
        <Route path="/movies/create" element={<CreateMoviePage />} />
        <Route path="/movies/:id" element={<MovieDetailPage />} />
        <Route path="/movies/:id/edit" element={<EditMoviePage />} />
      </Routes>
    </BrowserRouter>
  )
}
