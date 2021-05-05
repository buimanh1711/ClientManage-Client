import { useState, useRef, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

const Update = ({ updateForm, setUpdateForm }) => {
  const history = useHistory()

  const dispatch = useDispatch()
  const login = useSelector(state => state.global.login)
  const categories = useSelector(state => state.global.categories)
  const { info } = updateForm

  const nameEl = useRef(null)
  const categoryEl = useRef(null)
  const priceEl = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    const name = nameEl.current.value.trim()
    const price = priceEl.current.value.trim()
    const category = categoryEl.current.value !== 'Thể loại' && JSON.parse(categoryEl.current.value) || null
    const data = {
      name, category, price
    }
    console.log(data)
    // dispatch(toggleLoading(true))
    // createProduct(data)
    //   .then(res => {
    //     if (res.data && res.data.status) {
    //       console.log('successfully')
    //     } else {
    //       dispatch(triggerNotif({
    //         type: 'ERROR',
    //         content: res.data.message
    //       }))
    //     }
    //   })
    //   .catch(err => {
    //     dispatch(triggerNotif({
    //       type: 'ERROR',
    //       content: 'SERVER_ERROR!'
    //     }))
    //   })
    //   .then(() => {
    //     dispatch(toggleLoading(false))
    //   })
  }

  return (
    <>
      {
        updateForm.status &&
        <div key={info._id} id='product-create'>
          <div className='create-container'>
            <form onSubmit={handleSubmit} className='create-form'>
              <span onClick={() => { setUpdateForm({ status: false, info: {} }) }} className='close'>
                <i className="fas fa-times"></i>
              </span>
              <h4>Cập nhật sản phẩm</h4>
              <div className='create-name'>
                <label htmlFor='create_name'>Tên SP: </label>
                <input required ref={nameEl} id='create_name' defaultValue={info.name} />
              </div>
              <div className='create-phone'>
                <label htmlFor='create_phone'>Giá: </label>
                <input required ref={priceEl} id='create_phone' defaultValue={info.price} type='number' min={1000} />
              </div>
              <div className='create-address'>
                <select key={info._id} ref={categoryEl} required defaultValue={JSON.stringify(info.categorys)} name="categories">
                  <option value="Thể loại" disabled hidden>Thể loại</option>
                  {
                    categories && categories.length > 0 &&
                    categories.map(item => {
                      return (
                        <option selected={item._id == (info.category && info.category._id)} key={item._id} value={JSON.stringify(item)}>
                          {item.title}
                        </option>
                      )
                    }
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