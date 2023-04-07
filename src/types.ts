/* purchase 接口类型 */
// 定义商品类型
export interface ProductType {
  id?:number|string
  gallery?:string
  productName?:string
  price?:string
  specs?:string
  current?:number
  size?:number
}
// 定义团购商品类型
export type GroupProType = ProductType&{
  groupBuyId?:number|string
  salePrice?:string
  limitBuy?:number
  rate?:number
  stock?:number
  order?:number
}
// 标签类型
export interface TagType{
  id?:number|string
  name?:string
  pic?:string
  type?:number
  current?:number
  size?:number
}
export interface GroupBuyType {
  id?:number|string
  name?:string
  startTime?:string
  endTime?:string
  state?:number|string
  current?:number
  order?:string
  products?:string
  shop?:string
  slogan?:string
  preTime?:string
  showHome?:string
  tag?:string|number
  target?:number
  limitBuy?:number
  deliverWay?:number
  pickTime?:string
  homePic?:string
  banner?:string
  showType?:number
}
/* api 类型定义 */
export interface UserType {
  name:string
  password:string
}
export interface LoginResponseType {
  code?:number
  token:string
  msg?:string
  user?:any
}
/* redux 类型定义 */
// action的类型
export interface ActionType{
  type:string
  payload?:any
}