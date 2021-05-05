const ProductMenu = ({ setCreateForm }) => {
  return (
    <div id='product-menu'>
      <div className='product-menu-container'>
        <ul>
          <li className='add'>
            <button onClick={() => setCreateForm(true)}>
              <i className="fas fa-plus"></i>
              <span>
                Thêm sản phẩm
              </span>
            </button>
          </li>
          <li className='name'>
            <input id='name' placeholder='Tìm kiếm sản phẩm...' />
            <button className='staff-search'>
              <i className="fas fa-search"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ProductMenu