import { useState } from "react"
import Create from "./Create"
import StaffList from "./List"
import StaffMenu from "./Menu"
import Update from "./Update"

const Staff = () => {

  const [createForm, setCreateForm] = useState(false)
  const [updateForm, setUpdateForm] = useState({status: false, info: {}})

  return (
    <div id='staff-tab'>
      <Create createForm={createForm} setCreateForm={setCreateForm} />
      <Update updateForm={updateForm} setUpdateForm={setUpdateForm} />
      <div className='staff-container'>
        <StaffMenu setCreateForm={setCreateForm} />
        <StaffList setUpdateForm={setUpdateForm} />
      </div>
    </div>
  )
}

export default Staff