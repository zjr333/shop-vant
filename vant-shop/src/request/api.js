import request from "../request/request"
// 首页的数据请求
export const GetHomeList=()=>request.get("/index/index")