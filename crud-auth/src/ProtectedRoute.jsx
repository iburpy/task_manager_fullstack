import { useAuth } from "./context/AuthContext"
import { Navigate, Outlet } from "react-router-dom"
function ProtectedRoute() {
    const { loading, isAuthenticated } = useAuth()
    console.log('loading?',loading, '- authenticated?',isAuthenticated)
    if(loading) return <div>Loading...</div>
    if(!loading && !isAuthenticated) return <Navigate to="/login"/>
    return <Outlet/>
}

export default ProtectedRoute