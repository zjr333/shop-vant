import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://kumanxuan1.f3322.net:8001',    
    timeout: 5000,
    
  });
  //添加拦截器
  instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });   
  //添加响应拦截器
  instance.interceptors.response.use(function (config) {
    // 在发送请求之前做些什么
    return config.data;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });
  export default instance