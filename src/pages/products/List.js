import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Pagination from '../../global/Pagination'
const ProductList = ({ setClientInfo, setUpdateForm, setProduct }) => {
  const products = useSelector(state => state.global.products)

  return (
    <div id='product-list'>
      <div className='product-list-container'>
        {
          products && products.length > 0 &&
          <ul>
            <li className='title-row'>
              <div className='count'>
                <span>STT</span>
              </div>
              <div className='info'>
                <span>Tên</span>
                <span>Thể Loại</span>
                <span>Giá</span>
              </div>
              <div className='tools'>
                <span>Sửa</span>
                <span>Xóa</span>
              </div>
            </li>
            {
              products.map((item, index) => {
                if (index < 10) return (
                  <li key={item._id}>
                    <div className='count'>
                      <span>{index + 1}</span>
                    </div>
                    <div className='info'>
                      <span className='name'>
                        {item.name}
                    </span>
                      <span style={{ fontWeight: 'bold' }}>{item.category && item.category.name || 'Đang cập nhật'}</span>
                      <span>{item.price}đ</span>
                    </div>
                    <div className='tools'>
                      <button className='edit' onClick={() => setUpdateForm({ status: true, info: item })}>
                        <i className="fas fa-edit"></i>
                      </button>
                      <button className='remove'>
                        <i className="fas fa-trash-alt"></i>
                      </button>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        }
      </div>
      <div className='client-pagination'>
        <Pagination />
      </div>
    </div>
  )
}

export default ProductList