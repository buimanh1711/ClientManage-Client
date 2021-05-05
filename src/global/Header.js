import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const fullName = useSelector(state => state.global.user.fullName)
  const image = useSelector(state => state.global.user.userImage)
  const role = useSelector(state => state.global.user.role)

  return (
    <div id='header'>
      <div className='header-container'>
        <h1>Khách hàng</h1>
        <div className='sign'>
          <div className='avt-wrapper'>
            <img src={image && image.url || 'images/default_user_img.jpg'}/>
          </div>
          <span>{`${fullName} (${role})`}</span>
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