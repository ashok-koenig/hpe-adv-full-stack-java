import { Link, Outlet, useNavigate } from "react-router-dom";

interface DefaultLayoutProps {
    isLoggedIn: boolean
    updateLoginStatus: (status: boolean) => void
}

export default function DefaultLayout(props: DefaultLayoutProps) {
    const {isLoggedIn, updateLoginStatus} = props
    const navigate = useNavigate()
    const handleLogout = () =>{
        localStorage.removeItem("auth-token")
        updateLoginStatus(false)
        navigate("/login")
    }
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">Products App</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">                
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/products">Products</Link>
                {!isLoggedIn && <Link className="nav-link" to="/login">Login</Link>}
            </div>
            </div>
        </div>
        {isLoggedIn && <button className="btn btn-secondary" onClick={handleLogout}>Logout</button>}
        </nav>
        <div className="container">
            <Outlet/>
        </div>        
    </div>
  )
}
