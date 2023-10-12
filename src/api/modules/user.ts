
import axios from '../axios'


export function getUserTableApi(params: {
  pageNum: number
  pageSize: number

  userName?: string
  nickName?: string
}) {
  return axios.get('/user/list', params)
}

