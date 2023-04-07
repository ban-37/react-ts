import request from "../utils/request";
import type { TagType } from "../types";
import type {GroupBuyType,ProductType,GroupProType} from '../types'

export function getGroupBuy(params:GroupBuyType){
  return request.get("/api/yp/groupBuy",{params})
}

export function getTag(params:TagType){
  return request.get("/api/yp/tag",{params})
}
interface Ptype {
  groupBuyId?:string|number
  size?:number
}
// 团购商品列表
export function getGroupBuyProducts(params:Ptype){
  return request.get("/api/yp/groupBuyProduct",{params})
}
interface Stype {
  id?:string|number
  size?:number
  current?:number
}
// 获取店铺
export function getShops(params:Stype){
  return request.get("/api/yp/shop",{params})
}
//  定义获取商品的接口
export function getProduts(params:ProductType){
  return request.get("/api/yp/product",{params})
}

// 定义添加团购商品的接口
export function addGroupProduct(data:GroupProType){
  return request.post("/api/yp/groupBuyProduct",data)
}
// 定义添加团购信息
export function addGroupInfo(data:GroupBuyType){
  return request.post("/api/yp/groupBuy",data)
}
// 更新团购信息
export function UpdateGroupInfo(data:GroupBuyType){
  return request.put("/api/yp/groupBuy",data)
}