import { Navigate } from "react-router-dom"

interface ProtectRouteProps {
    isLoggedIn: boolean
    children: any
}

export default function ProtectRoute(props: ProtectRouteProps) {
    const {isLoggedIn, children} = props
    if(!isLoggedIn){
        return <Navigate to="/login" />
    }
  return children;
}
