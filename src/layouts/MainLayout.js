import SideBar from "../global/SideBar"
import MainContent from "./MainContent"

const MainLayout = ({ children }) => {
  return (
    <div id='main-layout'>
      <div className='row'>
        <div className='col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3'>
          <div className='side__bar-container'>
            <SideBar />
          </div>
        </div>
        <div className='col-12 col-sm-12 col-md-6 col-lg-8 col-xl-8'>
          <div className='side__bar-container'>
            <MainContent />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainLayout