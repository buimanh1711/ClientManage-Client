import { Link } from 'react-router-dom'

const Breadcrumb = ({ category, item }) => {
  return (
    <div id='breadcrumb'>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">HOME</Link></li>
          <li className="breadcrumb-item"><Link to="/">{category || 'Đang cập nhật'}</Link></li>
          {
            item &&
            <li className="breadcrumb-item active" aria-current="page">{item || 'Đang cập nhật'}</li>
          }
        </ol>
      </nav>
    </div>
  )
}

export default Breadcrumb