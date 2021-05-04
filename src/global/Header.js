import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div id='header'>
      <div className='header-container'>
        <h1>Khách hàng</h1>
        <div className='sign'>
          <div className='avt-wrapper'>
            <img src='/images/user_default_img.png' />
          </div>
          <span>Bùi Văn Mạnh (nhân viên)</span>
          <button>
            <Link to='/login'>
              Đăng xuất
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header