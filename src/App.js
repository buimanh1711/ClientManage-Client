import { Switch, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Home from './pages/home'

import './static/style/common.css'
import './static/style/header.scss'
import './static/style/footer.scss'
import './static/style/create.scss'
import './static/style/home.scss'
import './static/style/sign.scss'
import './static/style/detail.scss'
import './static/style/admin.scss'
import './static/style/profile.scss'
import './static/style/responsive.scss'

function App() {
  const dispatch = useDispatch()
  const role = useSelector(state => state.global.user.role)

  useEffect(() => {
  })

  return (
    <div className='my-app'>
      <Switch>
        {/* <Route path='/login'>
          <Login />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/category/:category'>
          <Category />
        </Route>
        <Route path='/products/:slug/update'>
          <Update />
        </Route>
        <Route path='/products/create'>
          <Create />
        </Route>
        <Route path='/products/:slug'>
          <Detail />
        </Route>
        <Route path='/profile/:userId/bought'>
          <BoughtProduct />
        </Route>
        <Route path='/profile/request'>
          <Request />
        </Route>
        <Route path='/profile/topup'>
          <Topup />
        </Route>
        <Route path='/profile/:userId'>
          <Profile />
        </Route>
        <Route path='/admin/products'>
          <ProductMn />
        </Route>
        <Route path='/admin/coins'>
          <Coin />
        </Route>
        <Route path='/admin/request'>
          <MoneyRequest />
        </Route> */}
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App
