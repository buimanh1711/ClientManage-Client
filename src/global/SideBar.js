const SideBar = () => {
  const menu = [
    {
      title: 'Tổng quan',
      path: '/',
      active: true
    },
    {
      title: 'Quản lý khách hàng',
      path: '/',
      active: true
    },
    {
      title: 'Quản lý nhân viên',
      path: '/',
      active: true
    },
    {
      title: 'Kho',
      path: '/',
      active: true
    },
    {
      title: 'Chuyên mục',
      path: '/',
      active: true
    }
  ]

  return (
    <div id='side-bar'>
      <div className='side-container'>
        <div className='logo'>
          <a href='/'>
            <img src='' />
          </a>
        </div>
        <ul>
          {
            menu.map(item => (
              <li>
                {item.title}
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default SideBar