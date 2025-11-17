import { Navigate } from "react-router-dom"
import { isLoggedIn } from "./Reg"

export default function ProtectedRoute({ children }) {
  const loggedIn = localStorage.getItem("soul_loggedin") === "true";
  
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />
  }
  return children;
}
