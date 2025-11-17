import { Link } from 'react-router-dom'
export default function NotFound() {
    return (
        <div className='not-found'>
            <h3>Not found</h3>
            <Link to='/' className='btn'>Back home</Link>
        </div>
    ) 
}