import { Link } from "react-router-dom"

export default function Welcome() {
  return (
    <div className="welcome_page">
      <h1>Welcome to Your World</h1>

      <Link to="/home" className="welcome-link">
        Store Your Memories Here →
      </Link>
    </div>
  )
}
