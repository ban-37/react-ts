import { Outlet,useNavigate,useLocation} from "react-router-dom";
// 导入布局,菜单
import { Layout, Menu } from 'antd';
// 导入select redux数据选择器
import { useSelector,useDispatch} from "react-redux";
// 导入使用状态
import { useEffect } from "react";
// 导入获取菜单的动作
import {getMenus} from '../../store/auth/action'
 
// MenuProps类型
import type { MenuProps } from 'antd';
// 导入state数据类型
import type { RootState } from "../../store";
// dispath类型
import type {Dispatch} from 'redux'
 
// 解构布局的组件
const { Header, Footer, Sider, Content } = Layout;
function Admin() {
  // 单击
  const menu  = useSelector((state:RootState)=>state.auth.menu)
  // 创建一个redux 事件发送器
  const dispath:Dispatch<any> = useDispatch()
  const navigate = useNavigate();
  const location = useLocation()
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    navigate(e.key);
  };
  useEffect(()=>{
    if(menu.length<2){
      // 发起动作
      dispath(getMenus())
      // 如果是admin页面跳转到admin/admin
      if(location.pathname==="/admin"){
        navigate('/admin/dash')
      }else{
        // 修正bug 跳转到对应页面
        navigate(location.pathname)
      }
    }    
  },[])
  return ( <Layout style={{width:'100vw',height:'100vh'}}>
    <Header >Header</Header>
    <Layout>
      <Sider className="sider" >
        <Menu
        onClick={onClick}       
        mode="inline"
        items={menu}
      />
      </Sider>
      <Content className="main-content">
        <Outlet></Outlet>
      </Content>
    </Layout>   
  </Layout> );
}

export default Admin;