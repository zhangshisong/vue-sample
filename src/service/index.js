import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})
// 请求拦截器
service.interceptors.request.use(config => {
  // 在发出请求前处理
  const token = store.state.token
  console.log(token)
  if (token !== null || token !== '') {
    config.headers.Authorization = token
  }
  return config
}, error => {
  // 处理请求错误
  console.log('处理请求错误')
  return Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use(response => {
  // 处理响应
  const data = response.data
  // console.log('处理响应', response)
  if (response.data.resp_code === 403) {
    Message.error(response.data.resp_msg)
  }
  return data
}, error => {
  // 处理响应错误
  const status = error.response.status
  if (status === 404) {
    Message.error(error.response.data.error)
  }
  console.log('处理响应错误', error.response)
  return Promise.reject(error)
})

export default service
