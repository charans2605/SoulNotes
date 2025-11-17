import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import MoodSelector from './MoodSelector'
import { logout } from '../Reg/Reg'

export default function Header({ onThemeChange, currentMood }){

  const navigate = useNavigate();

  function handleLogout() {
    logout();
    localStorage.removeItem("soul_loggedin");                              
    navigate("/login", { replace: true }); 
  }

  return (
    <header className='header'>
      <Link to='/' className='logo'>Soul<span>Notes</span></Link>
      <nav><Link to='/create' className='btn'>New Post</Link></nav>
      <button className='btn logout-btn' onClick={handleLogout}>Logout</button>
      <MoodSelector value={currentMood} onChange={onThemeChange} />
    </header>
  )
}
