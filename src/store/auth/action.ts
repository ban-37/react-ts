
import { SET_MENU, SET_ROUTES } from './../Type';
import { getUserMenu, login as loginApi } from "../../api/auth";
// reducer type类型
import { SET_TOKEN,SET_USER } from "../Type";
// dispath类型
import type {Dispatch} from 'redux'
import type { AxiosResponse } from 'axios';
// 用户类型
import type { UserType,LoginResponseType} from './../../types';
import type { ReactNode } from 'react';
import LazyLoad from '../../utils/LazyLoad';
// 登录api
// 异步登录action
export function login(data:UserType,callback?:Function){

  // 返回一个有默认参数dispatch函数
  return (dispatch:Dispatch<any>) => {
    // 执行登录
    loginApi(data)
    // 返回参数 是AxiosResponse有个泛型是定义data
    // LoginResponseType定义AxiosResponse的data类型
    // LoginResponseType 登录返回类型 AxiosResponse axios返回类型
    .then((res:AxiosResponse<LoginResponseType>)=>{
      if(res.data.code===200){
     
        // 执行本地的存储
        sessionStorage.setItem("token",res.data.token);
        sessionStorage.setItem("userInfo",JSON.stringify(res.data.user))
        // 执行reducer 
        dispatch({type:SET_TOKEN,payload:res.data.token})
        dispatch({type:SET_USER,payload:res.data.user})
        // 实现跳转
        if(callback){callback()};
        // 登录成功获取菜单
        dispatch(getMenus())
      }
    }) 
  }
  
}
// 菜单类型
interface MenuItemType {
  label:string
  key:string
  children?:Array<MenuItemType>
}
// 接口返回菜单类型
interface OriginMenuItemType {
  path:string
  name:string
  component?:string,
  children?:Array<OriginMenuItemType>
}
// 格式化菜单
function formaterMenu(list:Array<OriginMenuItemType>):Array<MenuItemType>{
  // 定义返回的数类型temp
  var  temp:Array<MenuItemType>= [];
  // 遍历list
  list.forEach((element) => {
    var obj:MenuItemType= {key:element.path,label:element.name}
    if(element.children){
      // 如果有children就遍历子节点
      obj.children = formaterMenu(element.children)  
    }
    // 返回
    temp.push(obj);
  });
  return temp;
}
interface RouteItemType {
  path:string
  element:ReactNode
}
// 格式路由 传入的参数是（源菜单类型数组）返回的参数是 （路由类型的数组）
function foramterRoutes(list:Array<OriginMenuItemType>):Array<RouteItemType>{
  // 返回的数组
  var temp:Array<RouteItemType> = [];
  // 遍历列表
  list.forEach(element=>{
    // 如果有组件
    if(element.component){
      var obj:RouteItemType = {
        path: element.path.slice(7),
        // slice4 是移除.vue字符
        element:LazyLoad(element.component.slice(0,-4))
      };
      // 添加组件
      temp.push(obj);    
    }else{
      // 如果有children就
      if(element.children){
        // 有子元素递归创造
         var result = foramterRoutes(element.children);
         temp = temp.concat(result);
      }
    }
    
  })
  return temp;
}
export function getMenus(){
  return (dispath:Dispatch)=>{
    getUserMenu()
    .then(res=>{
      console.log(res.data.list,"获取菜单数据");
      // 执行SET_MENU，触发reducer 更新state
      dispath({type:SET_MENU,payload:formaterMenu(res.data.list)})
      // 更新redux中的路由
      dispath({type:SET_ROUTES,payload:foramterRoutes(res.data.list)})
    })
  }
}