import { Form, Input, Select, Button, Typography, Table } from 'antd'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addMovie } from '../store/movieSlice'

const categoryOptions = ['Action', 'Comedy', 'Drama', 'Sci-Fi'].map(g => ({ value: g, label: g }))
const statusOptions = ['Watched', 'Not Watched'].map(s => ({ value: s, label: s }))

export default function CreateMoviePage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onFinish = values => {
    dispatch(addMovie(values))
    navigate('/movies')
  }

  const rows = [
    {
      key: 'movieName',
      field: 'Movie Name',
      input: (
        <Form.Item name="movieName" rules={[{ required: true, message: 'Vui lòng nhập tên phim' }]} style={{ margin: 0 }}>
          <Input />
        </Form.Item>
      ),
    },
    {
      key: 'category',
      field: 'Category',
      input: (
        <Form.Item name="category" rules={[{ required: true, message: 'Vui lòng chọn thể loại' }]} style={{ margin: 0 }}>
          <Select options={categoryOptions} style={{ width: '100%' }} />
        </Form.Item>
      ),
    },
    {
      key: 'status',
      field: 'Status',
      input: (
        <Form.Item name="status" rules={[{ required: true, message: 'Vui lòng chọn trạng thái' }]} style={{ margin: 0 }}>
          <Select options={statusOptions} style={{ width: '100%' }} />
        </Form.Item>
      ),
    },
    {
      key: 'actions',
      field: '',
      input: (
        <>
          <Button type="primary" htmlType="submit">Create</Button>
          <Button style={{ marginLeft: 8 }} onClick={() => navigate('/movies')}>Cancel</Button>
        </>
      ),
    },
  ]

  const columns = [
    { dataIndex: 'field', key: 'field', width: 150 },
    { dataIndex: 'input', key: 'input' },
  ]

  return (
    <div style={{ padding: 24, maxWidth: 500 }}>
      <Typography.Title level={2}>Create Movie</Typography.Title>
      <Form layout="vertical" onFinish={onFinish}>
        <Table
          dataSource={rows}
          columns={columns}
          pagination={false}
          bordered
          showHeader={false}
          style={{ borderRadius: 0 }}
          className="square-table"
        />
      </Form>
    </div>
  )
}
