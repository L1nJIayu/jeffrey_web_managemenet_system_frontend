import { Outlet } from 'react-router-dom'

import './AppLayout.scss'

import Breadcrumb from '../../components/Breadcrumb'
import TheHeader from '../../components/TheHeader'
import TheMenu from '../../components/TheMenu'

const AppLayout = () => {
  return (
    <>
      <div className="header">
        <TheHeader />
      </div>

      <div className="layout">
        <div className="menu">
          <TheMenu />
        </div>
        <div className="content">
          <div className="breadcrumb">
            <Breadcrumb />
          </div>
          <div className="content__box">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}

export default AppLayout