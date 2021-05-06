import { useState, useRef, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { date } from '../../utils/getDate'
import { addProduct } from '../../services/global'
import { getAllGuestsAsync, toggleLoading } from '../../redux/actions'
import Warning from '../../global/Warning'

const Product = ({ product, setProduct }) => {
  const history = useHistory()

  const login = useSelector(state => state.global.login)
  const products = useSelector(state => state.global.products)
  const dispatch = useDispatch()

  useEffect(() => {
    // if (!login) {
    //   setTimeout(() => {
    //     history.replace('/login')
    //   }, 1000)
    // }
  }, [])

  const buyProduct = (data) => {
    const { user } = product
    const totalMoney = user.totalMoney = parseInt(data.price) + parseInt(user.totalMoney)

    dispatch(toggleLoading(true))
    addProduct(user._id, totalMoney, data._id)
      .then(res => {
        console.log(res)
        if (res.data && res.data.status) {
          dispatch(getAllGuestsAsync({}))
        }
      })
      .catch(err => {
        alert(err)
      })
      .then(() => {
        dispatch(toggleLoading(false))
        setProduct({ status: false, info: {} })
      })
  }

  return (
    <>
      {
        product.status &&
        <div id='client-client-add'>
          <div className='client-add-container'>
            <div className='form'>
              <button className='close-btn' onClick={() => setProduct(false)}>
                <i className="fas fa-times"></i>
              </button>
              <h4>Tất cả sản phẩm</h4>
              <form style={{ marginBottom: 12 }}>
                <input placeholder="Nhập tên sản phẩm..." />
                <button><i className="fas fa-search"></i></button>
              </form>
              {
                products && products.length > 0 &&
                <div className='form-container'>
                  <div className='products'>
                    <ul className='scroll'>
                      <li className='title-row'>
                        <span className='count'>Thêm</span>
                        <span>Tên</span>
                        <span>Giá</span>
                        <span>Thể loại</span>
                      </li>
                      {
                        products.map((item, index) => (
                          <li>
                            <span onClick={() => buyProduct(item)} className='count'>
                              <i className="fas fa-plus"></i>
                            </span>
                            <span>{item.name}</span>
                            <span>{item.price}đ</span>
                            <span>{item.category && item.category.title}</span>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                </div>
                ||
                <Warning alert='Chưa có sản phẩm!' />
              }
            </div>
          </div>
        </div>
        ||
        null
      }
    </>
  )
}

export default Product