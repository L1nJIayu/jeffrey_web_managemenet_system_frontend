import Axios from 'axios'

const axios = Axios.create({
  baseURL: '/api'
})


axios.interceptors.request.use(
  config => {
    config.headers['token'] = 'asd'
    return config
  }
)

export default axios