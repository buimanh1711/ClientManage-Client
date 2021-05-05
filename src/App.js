import { useEffect, useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import MainLayout from './layouts/MainLayout'
import Login from './layouts/Login'

import './static/style/common.css'
import './static/style/sidebar.scss'
import './static/style/main.scss'
import './static/style/header.scss'
import './static/style/client.scss'
import './static/style/product.scss'
import './static/style/sign.scss'
import './static/style/staff.scss'

import './static/style/responsive.scss'
import { auth, getAllGuestsAsync, getAllProductsAsync, getAllUsersAsync } from './redux/actions'
import Loading from './global/Loading'

function App() {
  const dispatch = useDispatch()
  
  const role = useSelector(state => state.global.user.role)

  useEffect(() => {
    dispatch(auth())
  })

  useEffect(() => {
    dispatch(getAllProductsAsync({}))
  }, [dispatch])

  useEffect(() => {
    dispatch(getAllGuestsAsync({}))
  }, [dispatch])

  useEffect(() => {
    dispatch(getAllUsersAsync({}))
  }, [dispatch])

  return (
    <div className='my-app'>
      <Loading />
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/'>
          <MainLayout />
        </Route>
      </Switch>
    </div>
  );
}

export default App
