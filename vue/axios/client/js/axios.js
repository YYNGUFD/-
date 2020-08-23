 
 
import axios from 'axios' 
var nAxios = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 5000,
  withCredentials: true,
  headers: {'X-Requested-With': 'XMLHttpRequest'}
})
console.log(nAxios)


// 响应拦截器即异常处理
nAxios.interceptors.response.use(response => { 
  let status = response.data.status
  console.log(response)
  
  return response
}, err => {
   console.log(err)
  return Promise.resolve(err.response)
})

nAxios.get('http:locallhost:888')

export default nAxios

 