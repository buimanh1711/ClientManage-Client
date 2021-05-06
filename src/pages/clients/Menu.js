import { useDispatch } from "react-redux"
import { getAllGuestsAsync } from "../../redux/actions"

const ClientMenu = ({ setCreateForm }) => {
  const dispatch = useDispatch()

  const filerByCategory = (e) => {
    const value = e.target.value && JSON.parse(e.target.value)
    const { start, end } = value
    dispatch(getAllGuestsAsync({start, end}))
  
  }

  return (
    <div id='client-menu'>
      <div className='client-menu-container'>
        <ul>
          <li className='add'>
            <button onClick={() => setCreateForm(true)}>
              <i className="fas fa-plus"></i>
              <span>
                Thêm khách hàng
              </span>
            </button>
          </li>
          <li className='name'>
            <label htmlFor='name'>
              Tên
            </label>
            <input id='name' placeholder='Nhập tên khách hàng...' />
          </li>
          <li className='id'>
            <label htmlFor='id'>
              CMND
            </label>
            <input id='id' placeholder='Nhập số cmnd...' />
          </li>
          <li className='category'>
            <select onChange={filerByCategory}>
              <option value={JSON.stringify({start: null, end: null})} selected >Tất cả</option>
              <option value={JSON.stringify({ start: 0, end: 5000000 })} >Vãng lai</option>
              <option value={JSON.stringify({ start: 5000000, end: 10000000 })} >Tiềm năng</option>
              <option value={JSON.stringify({ start: 10000000, end: 50000000 })} >VIP</option>
              <option value={JSON.stringify({ start: 50000000, end: 50000000000000000 })} >Đặc biệt</option>
            </select>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ClientMenu