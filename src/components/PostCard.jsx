import { Link } from 'react-router-dom'
import { MOODS } from '../data/moods'

export default function PostCard({ post }){
  const preview = post.content.length > 120 ? post.content.slice(0,120) + '...' : post.content
  const mood = MOODS[post.mood] || MOODS.happy

  return (

    <article className='card'>

      {post.image && (
        <img 
          src={post.image} 
          alt="Post attachment" 
          className="card-image"
        />
      )}
      
      <div className='card-head' style={{ borderColor: mood.accent }}>
        <div className='mood-icon'>{mood.emoji}</div>
        <h4>{post.title}</h4>
      </div>
      <p className='preview'>{preview}</p>
      <div className='card-footer'>
        <small>{new Date(post.createdAt || post.id*1).toLocaleString()}</small>
        <Link to={`/post/${post.id}`} className='read'>Open</Link>
      </div>
    </article>
  )
}