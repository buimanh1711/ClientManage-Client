import { useState, useRef, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toggleLoading } from '../../redux/actions'
import { createProduct } from '../../services/global'

const Create = ({ status, setCreateForm }) => {
  const history = useHistory()

  const login = useSelector(state => state.global.login)
  const dispatch = useDispatch()

  const countries = useSelector(state => state.global.countries)
  
  const nameEl = useRef(null)
  const categoryEl = useRef(null)
  const priceEl = useRef(null)

  useEffect(() => {
    // if (!login) {
    //   setTimeout(() => {
    //     history.replace('/login')
    //   }, 1000)
    // }
  }, [])


  const handleSubmit = (e) => {
    e.preventDefault()

    const name = nameEl.current.value.trim()
    const price = priceEl.current.value.trim()
    const category = categoryEl.current.value !== 'Thể loại' && JSON.parse(categoryEl.current.value)._id || null
    const data = {
      name, category, price
    }

    console.log(data)
    dispatch(toggleLoading(true))
    createProduct(data)
      .then(res => {
        if (res.data && res.data.status) {
          console.log(res.data)
          dispatch({
            type: 'CREATE_PRODUCT',
            payload: res.data.newProduct
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
        status &&
        <div id='product-create'>
          <div className='create-container'>
            <form onSubmit={handleSubmit} className='create-form'>
              <span onClick={() => {setCreateForm(false)}} className='close'>
                <i className="fas fa-times"></i>
              </span>
              <h4>Thêm sản phẩm</h4>
              <div className='create-name'>
                <label htmlFor='create_name'>Tên SP: </label>
                <input required ref={nameEl} id='create_name' />
              </div>
              <div className='create-phone'>
                <label htmlFor='create_phone'>Giá: </label>
                <input required ref={priceEl} id='create_phone' type='number' min={1000} />
              </div>
              <div className='create-address'>
                <select required defaultValue='Thể loại' ref={categoryEl} name="categories">
                  <option value="Thể loại" disabled hidden>Thể loại</option>
                  {
                    countries && countries.length > 0 &&
                    countries.map(item =>
                      <option key={item.id} value={JSON.stringify(item)}>
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

export default Create