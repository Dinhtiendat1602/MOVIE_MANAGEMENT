import { Button, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'
import MovieList from '../store/MovieList'

export default function MovieListPage() {
  const navigate = useNavigate()
  return (
    <div style={{ padding: 24 }}>
      <Typography.Title level={2}>Movie Management App</Typography.Title>
      <Button type="primary" onClick={() => navigate('/movies/create')} style={{ marginBottom: 16 }}>
        Create Movie
      </Button>
      <MovieList />
    </div>
  )
}
