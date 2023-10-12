
import axios from '../axios'


export function loginApi(params: {
  userName: string
  password: string
}) {
  return axios.get('/admin/login', params)
}

