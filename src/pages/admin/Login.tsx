import { Link, useNavigate } from 'react-router-dom'

import { Button } from 'antd'

const Login = () => {

  const navigate = useNavigate()

  const login = () => {
    navigate('/main')
  }

  return (
    <div>
      <Button type="primary" onClick={login}>登录</Button>

    </div>
  )
}

export default Login


