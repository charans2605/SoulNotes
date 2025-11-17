import { useState } from "react"
import { registerUser, setLoggedIn } from "../Reg/Reg"
import { Link, useNavigate } from "react-router-dom"

export default function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  function submit(e) {
    e.preventDefault()
    const newUser = { email, password }
    registerUser(newUser)
    alert("Account created successfully. Please login.")
    navigate("/login") 
   }

  return (
    <div className="Reg-page">
      <div className="Reg-card">
        <h2>Create Account</h2>
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

          <button className="btn primary Reg-btn">Register</button>
        </form>

        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  )
}
