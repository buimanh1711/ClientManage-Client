import { Link } from 'react-router-dom'
import Pagination from '../../global/Pagination'
const ClientList = () => {
  const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

  return (
    <div id='client-list'>
      <div className='client-list-container'>
        <ul>
          <li className='title-row'>
            <div className='info'>
              <span>Họ Tên</span>
              <span>Loại KH</span>
              <span>Quận/Huyện</span>
            </div>
            <div className='tools'>
              <span>Thêm SP</span>
              <span>Sửa</span>
              <span>Xóa</span>
            </div>
          </li>
          {
            arr.map((item, index) => {
              if (index < 10) return (
                <li key={index + 1}>
                  <div className='info'>
                    <span>
                      <Link to=''>
                        Bùi Văn Mạnh
                      </Link>
                    </span>
                    <span style={{ fontWeight: 'bold' }}>Đặc Biệt</span>
                    <span>Thái Nguyên</span>
                  </div>
                  <div className='tools'>
                    <button className='add'>
                      <i className="fas fa-cart-plus"></i>
                    </button>
                    <button className='edit'>
                      <i className="fas fa-edit"></i>
                    </button>
                    <button className='remove'>
                      <i className="fas fa-user-times"></i>
                    </button>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div className='client-pagination'>
        <Pagination />
      </div>
    </div>
  )
}

export default ClientList