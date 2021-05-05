import { useSelector } from "react-redux"
import Pagination from "../../global/Pagination"

const StaffList = ({ setUpdateForm }) => {
  const staffs = useSelector(state => state.global.users)

  return (
    <div id='staff-list'>
      <div className='staff-list-container'>
        <h4>Danh sách nhân viên: </h4>
        {
          staffs && staffs.length > 0 &&
          <ul>
            {
              staffs.map((item, key) =>
                <li key={item._id}>
                  <div className='count'>
                    <span>{key + 1}</span>
                  </div>
                  <div className='info'>
                    <div className='avt-wrapper'>
                      <img src={item.image && item.image.url || '/images/staff.png'} />
                    </div>
                    <span>{item.fullName}</span>
                  </div>
                  <div className='detail'>
                    <div className='phone'>
                      <strong>SĐT: </strong>
                      <span>{item.phone}</span>
                    </div>
                    <div className='address'>
                      <strong>Địa chỉ: </strong>
                      <span>{item.address}</span>
                    </div>
                    <div className='email'>
                      <strong>Email: </strong>
                      <span>{item.email}</span>
                    </div>
                    <div className='account'>
                      <strong>Tài khoản: </strong>
                      <span>{item.username}</span>
                      <span> - </span>
                      <span>{item.password}</span>
                    </div>
                  </div>
                  <div className='tools'>
                    <button className='edit' onClick={() => setUpdateForm({ status: true, info: item })} >
                      <i className="fas fa-edit"></i>
                    </button>
                    <button className='remove'>
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </div>
                </li>
              )
            }
          </ul>
        }
      </div>
      <div className='staff-pagination'>
        <Pagination />
      </div>
    </div>
  )
}

export default StaffList