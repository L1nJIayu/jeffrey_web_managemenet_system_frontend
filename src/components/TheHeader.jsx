import { useNavigate } from "react-router-dom";
import './TheHeader.scss'

const showUserInfo = () => {
  console.log('个人信息')
}


export default () => {

  const navigate = useNavigate()
  const logout = () => {
    console.log('退出登录')
    navigate('/login')
  }

  const actions = [
    { icon: 'icon-user', onClick: showUserInfo },
    { icon: 'icon-logout', onClick: logout },
  ]
  return (
    <div className="theHeader">
      <div className="theHeader__title">后台管理系统</div>
      <div className="theHeader__right">
        <div className="userName">
          Jeffrey
        </div>
        {
          actions.map((action, index) => (
            <div className="action_item" onClick={action.onClick} key={ index }>
              <i className={`iconfont ${ action.icon }`}></i>
            </div>
          ))
        }
      </div>
    </div>
  )
}