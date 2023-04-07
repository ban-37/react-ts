import { AxiosResponse } from 'axios';

// 导入用户类型
import { UserType} from "../types";
import request from "../utils/request";
// 登录api
interface ReType{
  code:number
  msg?:string
  token:string,
  user:any
}
// 返回Promise类型
// 具体的类型为AxiosResponse
// AxiosResponse里面的data属性类型为ReType
export function login(data:UserType):Promise<AxiosResponse<ReType>>{
  // 返回结果
  return request.post("/api/login",data)
}
// 获取用户的菜单
export function getUserMenu(){
  return request.get("/api/yp/user_permission")
}
// login({name:"abc",password:"des"})
// .then(res=>{
//   res.data.
// })