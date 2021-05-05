import { useState } from "react"
import Create from "./Create"
import ProductList from "./List"
import ProductMenu from "./Menu"
import Update from "./Update"

const Product = () => {
  const [createForm, setCreateForm] = useState(false)
  const [updateForm, setUpdateForm] = useState({ status: false, info: {} })
  return (
    <div id='product-tab'>
      <Create status={createForm} setCreateForm={setCreateForm} />
      <Update key={updateForm.info._id} updateForm={updateForm} setUpdateForm={setUpdateForm} />
      <div className='product-container'>
        <ProductMenu setCreateForm={setCreateForm} />
        <ProductList setUpdateForm={setUpdateForm} />
      </div>
    </div>
  )
}

export default Product