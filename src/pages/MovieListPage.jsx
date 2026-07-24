import { useSelector, useDispatch } from 'react-redux'
import { Button, Typography, Table, Popconfirm, Space } from 'antd'
import { useNavigate } from 'react-router-dom'
import { deleteMovie } from '../store/movieSlice'

export default function MovieListPage() {
  const movies = useSelector(state => state.movies.movies)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const columns = [
    { title: 'Movie Name', dataIndex: 'movieName', key: 'movieName' },
    { title: 'Category', dataIndex: 'category', key: 'category' },
    { title: 'Status', dataIndex: 'status', key: 'status' },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space>
          <Button size="small" onClick={() => navigate(`/movies/${record.id}`)}>View</Button>
          <Button size="small" type="primary" onClick={() => navigate(`/movies/${record.id}/edit`)}>Edit</Button>
          <Popconfirm
            title="Xác nhận xóa phim này?"
            okText="Xóa"
            cancelText="Hủy"
            onConfirm={() => dispatch(deleteMovie(record.id))}
          >
            <Button size="small" danger>Delete</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ]

  return (
    <div style={{ padding: 24 }}>
      <Typography.Title level={2}>Movie Management App</Typography.Title>
      <Button type="primary" onClick={() => navigate('/movies/create')} style={{ marginBottom: 16 }}>
        Create Movie
      </Button>
      <Table rowKey="id" dataSource={movies} columns={columns} pagination={false} />
    </div>
  )
}
