import { useState, useRef, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toggleLoading } from '../../redux/actions'
import { createUser } from '../../services/global'

const Create = ({ createForm, setCreateForm }) => {
  const history = useHistory()

  const login = useSelector(state => state.global.login)
  const dispatch = useDispatch()

  const [file, setFile] = useState(null)
  const [data, getData] = useState({ name: '', path: '/images/product_default_img.png' })

  const nameEl = useRef(null)
  const idEl = useRef(null)
  const phoneEl = useRef(null)
  const mailEl = useRef(null)
  const addEl = useRef(null)
  const usernameEl = useRef(null)
  const passwordEl = useRef(null)

  useEffect(() => {
    // if (!login) {
    //   setTimeout(() => {
    //     history.replace('/login')
    //   }, 1000)
    // }
  }, [])

  const handleChange = (e) => {
    const selectedFile = e.target.files[0]
    const reader = new FileReader()
    reader.onloadend = (e) => {
      const url = reader.result
      setFile(url)
      getData({ name: 'manh', path: url })
    }

    if (selectedFile && selectedFile.type.match('image.*')) {
      reader.readAsDataURL(selectedFile)
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault()

    const fullName = nameEl.current.value.trim()
    const id = idEl.current.value.trim()
    const phone = phoneEl.current.value.trim()
    const email = mailEl.current.value.trim()
    const address = addEl.current.value.trim()
    const username = usernameEl.current.value.trim()
    const password = passwordEl.current.value.trim()

    const data = {
      fullName, email, cmnd: id, phone, address, username, password, image: file
    }

    const formData = new FormData()
    formData.append('fullName', fullName)
    formData.append('cmnd', id)
    formData.append('phone', phone)
    formData.append('email', email)
    formData.append('address', address)
    formData.append('username', username)
    formData.append('password', password)
    formData.append('image', file)

    console.log(data)
    dispatch(toggleLoading(true))
    createUser(data)
      .then(res => {
        if (res.data && res.data.status) {
          dispatch({
            type: 'CREATE_USER',
            payload: res.data.staff
          })
        } else {
          // dispatch(triggerNotif({
          //   type: 'ERROR',
          //   content: res.data.message
          // }))
        } 
      })
      .catch(err => {
        // dispatch(triggerNotif({
        //   type: 'ERROR',
        //   content: 'SERVER_ERROR!'
        // }))
      })
      .then(() => {
        dispatch(toggleLoading(false))
        setCreateForm(false)
      })
  }

  return (
    <>
      {
        createForm &&
        <div id='staff-create'>
          <div className='create-container'>
            <form onSubmit={handleSubmit} className='create-form'>
              <span onClick={() => { setCreateForm(false) }} className='close'>
                <i className="fas fa-times"></i>
              </span>
              <h4>Thêm nhân viên</h4>
              <div className='form-container container'>
                <div title='chọn ảnh đại diện' className='file-upload'>
                  <div className='image-container'>
                    <img src={data.path} />
                    <label htmlFor='product_image'>
                      <i className="fas fa-camera"></i>
                      <input onChange={handleChange} hidden type='file' id='product_image' />
                    </label>
                  </div>
                </div>
                <div className='create-name'>
                  <label htmlFor='create_name'>Họ Tên: </label>
                  <input required ref={nameEl} id='create_name' />
                </div>
                <div className='create-id'>
                  <label htmlFor='create_id'>CMND: </label>
                  <input required ref={idEl} id='create_id' />
                </div>
                <div className='create-phone'>
                  <label htmlFor='create_phone'>SĐT: </label>
                  <input required ref={phoneEl} id='create_phone' />
                </div>
                <div className='create-mail'>
                  <label htmlFor='create_mail'>email: </label>
                  <input required ref={mailEl} id='create_mail' />
                </div>
                <div className='create-add'>
                  <label htmlFor='create_add'>Địa chỉ: </label>
                  <input required ref={addEl} id='create_add' />
                </div>
                <div className='create-username'>
                  <label htmlFor='create_username'>Tài khoản: </label>
                  <input required ref={usernameEl} id='create_username' />
                </div>
                <div className='create-password'>
                  <label htmlFor='create_password'>Mật khẩu: </label>
                  <input required ref={passwordEl} id='create_password' />
                </div>
                <button type='submit'>Submit</button>
              </div>
            </form>
          </div>
        </div>
        ||
        null
      }
    </>
  )
}

export default Create