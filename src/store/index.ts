import {createStore,combineReducers,applyMiddleware} from 'redux'
// 导入权限处理器 如果是在./auth/reducer.js 
// export default reducer 这时auth的名称可以随意命名
import auth from './auth/reducer'
// 导入异步中间件处理器
import thunk from 'redux-thunk'
// 导入日志中间件
import logger from 'redux-logger'
// 通过createStore创建仓库
const store:any = createStore(
  // 第一个参数需要一个reducer， combineReducers把多个reducer合并为一个
  combineReducers({auth}),
  // 添加中间件处理器
  applyMiddleware(thunk,logger)
)

// 返回一个RootState类型，类型的位 执行store.getState 的数据类型
// ReturnType获取到函数返回值类型
export type RootState = ReturnType <typeof store.getState>
// 导出默认store
export default store