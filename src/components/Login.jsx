import { useState } from "react"
import { loginUser, setLoggedIn } from "../Reg/Reg"
import { Link, useNavigate } from "react-router-dom"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  function submit(e) {
    e.preventDefault()

    if (loginUser(email, password)) {
      setLoggedIn()
      localStorage.setItem("soul_loggedIn", "true"); 
      navigate("/welcome")
    } else {
      alert("Invalid email or password")
    }
  }

  return (
    <div className="Reg-page">
      <div className="Reg-card">
        <h2>Login</h2>
        <form onSubmit={submit}>
          <input 
            type="email" 
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />

          <input 
            type="password" 
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />

          <button className="btn primary Reg-btn">Login</button>
        </form>

        <p>Don't have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  )
}
