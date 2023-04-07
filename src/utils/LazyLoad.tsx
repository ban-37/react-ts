import {Space,Spin} from 'antd'
import { lazy,Suspense } from "react";
// 加载组件工具
function LazyLoad(url:string) {
  // 通过lazy与import函数的配置返回组件
  const Module = lazy(()=>{
    return new Promise((resolve,reject)=>{
      import('../views'+url)
      // 加载成功返回加载内容
      .then(res=>resolve(res))
      .catch(err=>{
        // 如果是加载使用返回失败页面
        resolve(import("../views/"+"ErrorPage"))
        console.log(err)
      })
    })
  })
  console.log("Module",Module)
  // 装载到Suspense预加载工具里面
  return <Suspense
   fallback={<Space size='large'  style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center',display:'flex'}}>    
   <Spin size="large"  tip="加载中..." />
 </Space>}>   
    <Module/></Suspense>
}

export default LazyLoad;