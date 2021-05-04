import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MainLayout from './layouts/MainLayout'

import './static/style/common.css'
import './static/style/sidebar.scss'
import './static/style/main.scss'
import './static/style/header.scss'
import './static/style/client.scss'

import './static/style/responsive.scss'

function App() {
  const dispatch = useDispatch()
  const role = useSelector(state => state.global.user.role)

  useEffect(() => {
  })

  return (
    <div className='my-app'>
      <MainLayout />
    </div>
  );
}

export default App
