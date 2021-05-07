import { useEffect } from "react"
import { useDispatch } from "react-redux"
import HighChart from "../../global/HighChart"
import PieChart1 from "../../global/PieChart1"

const Overall = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({
      type: 'SET_TITLE',
      payload: 'Tổng quan'
    })
  }, [])

  return (
    <div id='overall-tab'>
      <div className='overall-tab-container'>
        <div className='pie-chart-container'>
          <h5>Loại khách hàng</h5>
          <PieChart1 />
          <span style={{ background: '#E38627' }}>Đ.Biệt</span>
          <span style={{ background: '#C13C37' }}>VIP</span>
          <span style={{ background: '#6A2135' }}>T.Năng</span>
          <span style={{ background: '#6A2457' }}>V.Lai</span>
        </div>
        <div className='pie-chart-container'>
          <h5>Chi tiêu trung bình:</h5>
          <h1 style={{ color: 'red' }}>12249300đ</h1>
        </div>
        <div className='high-chart-container'>
          <HighChart />
        </div>
      </div>
    </div>
  )
}

export default Overall