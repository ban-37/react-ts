import { Navigate} from "react-router-dom";
import { useLocation } from "react-router-dom";
// 导入ReactNode类型
import {ReactNode,FC} from 'react'
interface Iprops{
  children?:ReactNode
}
// 定义一个函数Private是FC类型 指令泛型为Iprops
// props来自父组件的传参，chilren是嵌套类型
// FC是react内置类型代表函数组件类型 FunctionComponent
// interface FC<P> {props:P}
// 使用FC类型传入真实类型为IProps
const Private:FC<Iprops>=(props)=> {
   var token= sessionStorage.getItem("token");
  //  通过useLocation创建一个location对象 包含path属性
   const location = useLocation();
   if(token){
    return <>{props.children}</>
   }else{
    // 跳转首页，添加redirect查询参数
    // Navigate组件来源react-router-dom 做重定向和跳转用
    return <Navigate to={'/?redirect='+location.pathname}></Navigate>
   }
}

export default Private;