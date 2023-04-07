import { useRoutes } from "react-router-dom";
import baseRouter from "./baseRouter";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../store";
function RouterView() {
  // 获取到routes
  const routes = useSelector((state:RootState)=>state.auth.routes)
  // 更新baseRouter(只要routes有变化，更新baseRouter，也就更新整个路由配置)
  useEffect(()=>{
    baseRouter[1].children =routes
  },[routes])
  // 创建路由
  const element = useRoutes(baseRouter)
  // 返回创建好的元素
  return ( <>{element}</> );
}
// 导出
export default RouterView;