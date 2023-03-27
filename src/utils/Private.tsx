
import React from "react"
import { ReactNode ,FC} from "react"
import { Navigate ,useLocation } from "react-router-dom"
interface Iprops{
    children?:ReactNode
}
const Private:FC<Iprops> = (props:Iprops) => {
    let _token = localStorage.getItem("token")
    const location = useLocation()
    if(_token){
        return <>props.children</>
    }else{
        return <Navigate to={'/?redirect='+location.pathname}></Navigate>
    }
}
export default Private