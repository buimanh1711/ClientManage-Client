import ClientList from "./List"
import ClientMenu from "./Menu"
import Create from './Create'
import { useState } from "react"
import ClientInfo from "./Client"

const Client = () => {
  const [createForm, setCreateForm] = useState(false)
  const [clientInfo, setClientInfo] = useState(true)

  return (
    <div id='client-tab'>
      <Create status={createForm} setCreateForm={setCreateForm} />
      <ClientInfo status={clientInfo} />
      <div className='client-container'>
        <ClientMenu setCreateForm={setCreateForm} />
        <ClientList />
      </div>
    </div>
  )
}

export default Client