//  创建hash路由
 import { HashRouter as Router } from "react-router-dom";
//  导入路由配置
 import RouterView from "./router";
 import React ,{FC} from "react";
 

function App() {
  // 返回内容
  return (<Router><RouterView></RouterView></Router>);
}

export default App;
