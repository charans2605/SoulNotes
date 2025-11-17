import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { MOODS } from '../data/moods'

export default function PostView({ posts, onDelete, setThemeMood }){
  const { id } = useParams()
  const post = posts.find(p => p.id === id)
  useEffect(()=> { if(post) setThemeMood(post.mood) }, [post])

  if(!post) return <div className='not-found'><h3>Not found</h3></div>

  return (
    <article className='post-view'>
      <div className='post-head'>
        <h2>{post.title}</h2>
        <div className='meta'>
          <span className='mood'>
            {MOODS[post.mood]?.emoji} {MOODS[post.mood]?.label}
          </span>
          <small>{new Date(post.createdAt || post.id*1).toLocaleString()}</small></div>
      </div>

      {post.image && (
        <div style={{ margin: '16px 0' }}>
          <a href={post.image} target="_blank" rel="noopener noreferrer">
            <img 
              src={post.image} 
              alt="Post attachment" 
              className="full-image"
            />
          </a>
        </div>
      )}


      <div className='content'>{post.content.split('\n').map((line,i)=><p key={i}>{line}</p>)}</div>
      <div className='post-actions'>
        <Link to={`/edit/${post.id}`} className='btn'>Edit</Link>
        <button className='btn danger' onClick={()=>onDelete(post.id)}>Delete</button>
      </div>
    </article>
  )
}