import ClientList from "./List"
import ClientMenu from "./Menu"
import Create from './Create'
import { useState } from "react"
import ClientInfo from "./Client"
import Update from "./Update"
import Product from "./Product"

const Client = () => {
  const [createForm, setCreateForm] = useState(false)
  const [clientInfo, setClientInfo] = useState({status: false, info: {}})
  const [updateForm, setUpdateForm] = useState({status: false, info: {}})
  const [product, setProduct] = useState({status: false, _id: null})
  return (
    <div id='client-tab'>
      <Product product={product} setProduct={setProduct} />
      <Create status={createForm} setCreateForm={setCreateForm} />
      <Update updateForm={updateForm} setUpdateForm={setUpdateForm} />
      <ClientInfo clientInfo={clientInfo} setClientInfo={setClientInfo} />
      <div className='client-container'>
        <ClientMenu setCreateForm={setCreateForm} />
        <ClientList setProduct={setProduct} setClientInfo={setClientInfo} setUpdateForm={setUpdateForm} />
      </div>
    </div>
  )
}

export default Client