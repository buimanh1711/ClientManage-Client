import { Route, Switch } from 'react-router-dom'
import Header from '../global/Header'
import Category from '../pages/categories'
import Client from '../pages/clients'
import Profile from '../pages/me'
import Overall from '../pages/overall'
import Product from '../pages/products'
import Staff from '../pages/staffs'
const MainContent = () => {
  return (
    <>
      <Header />
      <div id='main-content'>
        <Switch>
          <Route path='/clients'>
            <Client />
          </Route>
          <Route path='/staffs'>
            <Staff />
          </Route>
          <Route path='/products'>
            <Product />
          </Route>
          <Route path='/categories'>
            <Category />
          </Route>
          <Route path='/profile/:_id'>
            <Profile />
          </Route>
          <Route path='/'>
            <Overall />
          </Route>
        </Switch>
      </div>
    </>
        )
        }

export default MainContent