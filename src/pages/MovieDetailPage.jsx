import { useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { Descriptions, Button, Typography } from 'antd'

export default function MovieDetailPage() {
  const { id } = useParams()
  const movie = useSelector(state => state.movies.movies.find(m => m.id === Number(id)))
  const navigate = useNavigate()

  if (!movie) return <p style={{ padding: 24 }}>Không tìm thấy phim</p>

  return (
    <div style={{ padding: 24, maxWidth: 400 }}>
      <Typography.Title level={2}>Movie Detail</Typography.Title>
      <Descriptions bordered column={1}>
        <Descriptions.Item label="Movie Name">{movie.movieName}</Descriptions.Item>
        <Descriptions.Item label="Category">{movie.category}</Descriptions.Item>
        <Descriptions.Item label="Status">{movie.status}</Descriptions.Item>
      </Descriptions>
      <Button onClick={() => navigate('/movies')} style={{ marginTop: 16 }}>Back</Button>
    </div>
  )
}
