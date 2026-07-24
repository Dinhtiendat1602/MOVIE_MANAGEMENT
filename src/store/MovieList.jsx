import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button, Table, Popconfirm, Space } from 'antd'
import { deleteMovie } from './movieSlice'

export default function MovieList() {
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

  return <Table rowKey="id" dataSource={movies} columns={columns} pagination={false} />
}
