import { SET_USER,SET_TOKEN,SET_MENU, SET_ROUTES} from "../Type"
import type { ActionType } from "../../types"

const initialState = {
  userInfo:{},//用户信息
  token:"",
  menu:[
    {label: '概览',
      key: '/admin/dash'
    }
  ],//动态菜单
  routes:[],//动态路由
}
// 仓库数据处理器（state数据=初始化数据,action处理动作）
function reducer(state=initialState,action:ActionType){
  // 根据动作的类型做不同的数据处理
  switch(action.type){
    // 如果是设置用户，更新用户 case如果
    case SET_USER:
      return {...state,userInfo:action.payload}
    // 如果是设置token就把action中的参数payload做为新的数据，更新token
    case SET_TOKEN:
      return {...state,token:action.payload}
    // 处理菜单
    case SET_MENU:
      return {...state,menu:action.payload}
    // 处理路由
    case SET_ROUTES:
      return {...state,routes:action.payload}
    default:
    // 默认直接返回state
      return state;
  }
}

export default reducer