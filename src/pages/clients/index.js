import ClientList from "./List"
import ClientMenu from "./Menu"
import Create from './Create'
import { useState } from "react"

const Client = () => {
  const [createForm, setCreateForm] = useState(false)

  return (
    <div id='client-tab'>
      <Create status={createForm} setCreateForm={setCreateForm} />
      <div className='client-container'>
        <ClientMenu setCreateForm={setCreateForm} />
        <ClientList />
      </div>
    </div>
  )
}

export default Client