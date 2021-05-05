const ClientMenu = ({ setCreateForm }) => {
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
            <select>
              <option defaultValue="" selected disabled hidden>Tất cả</option>
              <option>Vãng lai</option>
              <option>Tiềm năng</option>
              <option>VIP</option>
              <option>Đặc biệt</option>
            </select>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ClientMenu