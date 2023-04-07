import LoginView from "../views/LoginView";
import AdminView from "../views/admin/AdminView";
// 导入权限控制
import Private from '../utils/Private'
// 导入预加载工具
import LazyLoad from "../utils/LazyLoad";
// 导入Echarts页面
import EchartsView from '../views/EchartsView'
// 导入地图
import MapView from "../views/MapView";


// 创建一个基础路由配置
const baseRouter = [
  {path:"/",element:<LoginView/>},
  {path:"/admin/*",element:<Private><AdminView/></Private>,
    children:[
      {path:'',element:LazyLoad('/admin/DashView')}
    ]
  },
  {path:'/echarts',element:<EchartsView/>},
  {path:'/map',element:<MapView/>}

]
// 导出基础路由
export default baseRouter