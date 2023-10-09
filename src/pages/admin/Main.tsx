import { Outlet } from 'react-router-dom'

import './Main.scss'

import Breadcrumb from '../../components/Breadcrumb'
import TheHeader from '../../components/TheHeader'
import Menu from '../../components/Menu'

const Main = () => {
  return (
    <>
      <div className="header">
        <TheHeader />
      </div>

      <div className="layout">
        <div className="menu">
          <Menu />
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

export default Main