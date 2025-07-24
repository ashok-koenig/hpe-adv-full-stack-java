import { useState } from "react"

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e: any) => {
        e.preventDefault();
        alert(username + password)
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
