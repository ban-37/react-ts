import LoginView from "../views/LoginView.tsx";
import AdminView from "../views/admin/AdminView.tsx"

const baseRouter  = [
    { path : "/" , element : <LoginView></LoginView>},
    { path : "/admin/*" , element : <AdminView></AdminView> ,
    children : []
    }
]

export default baseRouter