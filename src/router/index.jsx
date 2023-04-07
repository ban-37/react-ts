import baseRouter from "./baseRouter";
import { useRoutes } from "react-router-dom";


function RouterView ()  {
    const element = useRoutes(baseRouter)
    return ( <>{element}</>)
}
export default RouterView