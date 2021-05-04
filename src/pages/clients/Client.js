import { useState, useRef, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { createProduct } from '../../services/global'
import { useSelector, useDispatch } from 'react-redux'
import { toggleLoading, triggerNotif } from '../../redux/actions'

const ClientInfo = ({ status, setCreateForm }) => {
  const history = useHistory()

  const login = useSelector(state => state.global.login)
  const dispatch = useDispatch()

  const countries = useSelector(state => state.global.countries)

  useEffect(() => {
    // if (!login) {
    //   setTimeout(() => {
    //     history.replace('/login')
    //   }, 1000)
    // }
  }, [])

  return (
    <>
      {
        status &&
        <div id='client-client-info'>
          <div className='client-info-container'>
            <div className='form'>
              
            </div>
          </div>
        </div>
        ||
        null
      }
    </>
  )
}

export default ClientInfo