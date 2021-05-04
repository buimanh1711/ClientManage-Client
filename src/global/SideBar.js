import { Link, useLocation } from 'react-router-dom'
const SideBar = () => {

  const location = useLocation()
  const asPath = location.pathname || '/'

  const menu = [
    {
      title: 'Tổng quan',
      path: '/',
      icon: <i className="fas fa-chart-bar"></i>
    },
    {
      title: 'Quản lý khách hàng',
      path: '/clients',
      icon: <i className="fas fa-users" />
    },
    {
      title: 'Quản lý nhân viên',
      path: '/staffs',
      icon: <i className="fas fa-id-card"></i>
    },
    {
      title: 'Quản lý sản phẩm',
      path: '/products',
      icon: <i className="fas fa-shopping-bag"></i>
    },
    {
      title: 'Phân loại',
      path: '/categories',
      icon: <i className="fas fa-filter"></i>
    },
    {
      title: 'Cá nhân',
      path: '/profile/me',
      icon: <i className="far fa-user"></i>
    },
    
  ]

  return (
    <div id='side-bar'>
      <div className='side-container'>
        <div className='logo'>
          <a href='/'>
            <img src='/images/logo.png' />
          </a>
        </div>
        <ul>
          {
            menu.map((item, index) => (
              <li key={index}>
                <Link to={item.path}>
                  {item.icon}                  
                  {item.title.toUpperCase()}
                </Link>
                <span className={(item.path === asPath) && 'active'}></span>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default SideBar