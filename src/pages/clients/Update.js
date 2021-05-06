import { useState, useRef, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { createProduct, updateGuest } from '../../services/global'
import { useSelector, useDispatch } from 'react-redux'
import { toggleLoading, triggerNotif } from '../../redux/actions'

const Update = ({ updateForm, setUpdateForm }) => {
  const history = useHistory()
  const login = useSelector(state => state.global.login)
  const dispatch = useDispatch()
  const countries = useSelector(state => state.global.countries)
  const { info } = updateForm
  
  const nameEl = useRef(null)
  const idEl = useRef(null)
  const phoneEl = useRef(null)
  const addEl = useRef(null)

  useEffect(() => {
    // if (!login) {
    //   setTimeout(() => {
    //     history.replace('/login')
    //   }, 1000)
    // }
  }, [])


  const handleSubmit = (e) => {
    e.preventDefault()

    const fullName = nameEl.current.value.trim()
    const id = idEl.current.value.trim()
    const phone = phoneEl.current.value.trim()
    const address = JSON.parse(addEl.current.value.trim())
    const data = {
      fullName, cmnd: id, phone, address
    }

    dispatch(toggleLoading(true))
    updateGuest(info._id ,data)
      .then(res => {
        if (res.data && res.data.status) {
          dispatch({
            type: 'UPDATE_GUEST',
            payload: res.data.newGuest
          })
        } else {
          dispatch(triggerNotif({
            type: 'ERROR',
            content: res.data.message
          }))
        }
      })
      .catch(err => {
        dispatch(triggerNotif({
          type: 'ERROR',
          content: 'SERVER_ERROR!'
        }))
      })
      .then(() => {
        dispatch(toggleLoading(false))
        setUpdateForm({status: false, info: {}})
      })
  }

  return (
    <>
      {
        updateForm.status &&
        <div id='client-create'>
          <div className='create-container'>
            <form onSubmit={handleSubmit} className='create-form'>
              <span onClick={() => {setUpdateForm({status: false, info: {}})}} className='close'>
                <i className="fas fa-times"></i>
              </span>
              <h4>Sửa thông tin khách hàng</h4>
              <div className='create-name'>
                <label htmlFor='create_name'>Họ Tên: </label>
                <input defaultValue={info.fullName} required ref={nameEl} id='create_name' />
              </div>
              <div className='create-id'>
                <label htmlFor='create_id'>CMND: </label>
                <input defaultValue={info.cmnd} required ref={idEl} id='create_id' />
              </div>
              <div className='create-phone'>
                <label htmlFor='create_phone'>SĐT: </label>
                <input defaultValue={info.phone} required ref={phoneEl} id='create_phone' />
              </div>
              <div className='create-address'>
                <select required defaultValue={info.address && JSON.stringify(info.address) || "Quận/Huyện"} ref={addEl} name="categories">
                  <option selected={!(info.address && info.address.id)} value="Quận/Huyện" disabled hidden>Quận/Huyện</option>
                  {
                    countries && countries.length > 0 &&
                    countries.map(item =>
                      <option key={item.id} selected={item.id === (info.address && info.address.id)} value={JSON.stringify(item)}>
                        {item.name}
                      </option>
                    )
                  }
                </select>
              </div>
              <button type='submit'>Submit</button>
            </form>
          </div>
        </div>
        ||
        null
      }
    </>
  )
}

export default Update