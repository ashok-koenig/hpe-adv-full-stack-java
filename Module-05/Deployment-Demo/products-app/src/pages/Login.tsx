import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Login(props: {updateLoginStatus: (status: boolean) => void}) {
    const {updateLoginStatus} = props
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate()

    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setErrorMessage('')
        axios.post(API_BASE_URL+"/auth/login",{username, password}).then((response)=>{
            if(response.data.token){
                localStorage.setItem("auth-token", response.data.token)
                updateLoginStatus(true)
                navigate("/products")
            }else{
                setErrorMessage("Error getting token")
            }
        }).catch((error)=>{
            console.log(error)
            setErrorMessage("Invalid Username or Password")
        })
    }

  return (
    <div className="row">
        <div className="col-md-4">
           
        </div>
        <div className="col-md-4">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)} className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}  className="form-control" />
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary">Login</button>
                    <p className="text-danger">{errorMessage}</p>
                </div>
            </form>
        </div>
        <div className="col-md-4">
            {/* <p>Username: {username}</p>
            <p>Password: {password}</p> */}
        </div>
    </div>
  )
}
