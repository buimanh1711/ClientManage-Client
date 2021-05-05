const StaffMenu = ({ setCreateForm }) => {
  return (
    <div id='staff-menu'>
      <div className='staff-menu-container'>
        <ul>
          <li className='add'>
            <button onClick={() => setCreateForm(true)}>
              <i className="fas fa-plus"></i>
              <span>
                Thêm nhân viên
              </span>
            </button>
          </li>
          <li className='name'>
            <input id='name' placeholder='Tìm kiếm nhân viên...' />
            <button className='staff-search'>
              <i className="fas fa-search"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default StaffMenu