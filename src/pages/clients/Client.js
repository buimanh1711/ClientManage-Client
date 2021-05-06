import { useState, useRef, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { createProduct } from '../../services/global'
import { useSelector, useDispatch } from 'react-redux'
import { toggleLoading, triggerNotif } from '../../redux/actions'
import getMedal from '../../utils/getMedal'
import { date } from '../../utils/getDate'
import Warning from '../../global/Warning'

const ClientInfo = ({ clientInfo, setClientInfo }) => {
  const history = useHistory()

  const login = useSelector(state => state.global.login)
  const dispatch = useDispatch()

  const { info } = clientInfo
  const { bought } = info
  useEffect(() => {
    // if (!login) {
    //   setTimeout(() => {
    //     history.replace('/login')
    //   }, 1000)
    // }
  }, [])

  const close = () => {
    setClientInfo({ status: false, info: {} })
  }

  return (
    <>
      {
        clientInfo.status &&
        <div id='client-client-info'>
          <div className='client-info-container'>
            <div className='form'>
              <button onClick={close}>
                <i className="fas fa-times"></i>
              </button>
              <h4>Thông tin khách hàng</h4>
              <div className='form-container'>
                <div className='info'>
                  <div>
                    <strong>ID:</strong><span>{info._id}</span>
                  </div>
                  <div>
                    <strong>Họ tên:</strong><span>{info.fullName}</span></div>
                  <div>
                    <strong>Loại KH:</strong><span>{getMedal(info.totalMoney)}</span>
                  </div>
                  <div>
                    <strong>Khu vực:</strong><span>{info.address && info.address.name}</span>
                  </div>
                  <div>
                    <strong>CMND:</strong><span>{info.cmnd}</span>
                  </div>
                  <div>
                    <strong>SĐT:</strong><span>{info.phone}</span>
                  </div>
                  <div>
                    <strong>Tổng chi tiêu:</strong><span>{info.totalMoney}đ</span>
                  </div>
                  <div>
                    <strong></strong>
                  </div>
                </div>
                <div className='products'>
                  <p><strong>Sản phẩm đã mua</strong></p>
                  {
                    bought && bought.length > 0 &&
                    <ul className='scroll'>
                      <li className='title-row'>
                        <span className='count'>STT</span>
                        <span>Tên</span>
                        <span>Giá</span>
                        <span>Ngày mua</span>
                      </li>
                      {
                        bought.map((item, index) => {
                          if (item && item.product) {
                            return (
                              <li key={item.product._id}>
                                <span className='count'>{index + 1}</span>
                                <span>{item.product.name}</span>
                                <span>{item.product.price}đ</span>
                                <span>{date(item.product.createAt)}</span>
                              </li>
                            )
                          } else {
                            return null
                          }
                        })
                      }
                    </ul>
                    ||
                    <Warning alert='Chưa có sản phẩm nào!' />
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        ||
        null
      }
    </>
  )
}

export default ClientInfo