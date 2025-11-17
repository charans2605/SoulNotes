import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { MOODS } from '../data/moods'

export default function EditPost({ posts, onUpdate, setThemeMood }){
  const { id } = useParams()
  const post = posts.find(p => p.id === id) || {}
  const [title, setTitle] = useState(post.title || '')
  const [content, setContent] = useState(post.content || '')
  const [mood, setMood] = useState(post.mood || 'happy')

  useEffect(()=> setThemeMood(mood), [mood])

  if(!post.id) return <div className='not-found'><h3>Not found</h3></div>

  const save = (e) => { e.preventDefault(); onUpdate(id, { title, content, mood }) }

  return (
    <section className='edit'>
      <h2>Edit Post</h2>
      <form onSubmit={save} className='form'>
        <input value={title} onChange={e=>setTitle(e.target.value)} />
        <textarea rows='8' value={content} onChange={e=>setContent(e.target.value)} />

        <div className='form-row'>
          <div className='mood-row'>
            {Object.entries(MOODS).map(([k,m])=> (
              <label key={k} className={`mood-option ${mood===k? 'active':''}`}>
                <input type='radio' checked={mood===k} onChange={()=>setMood(k)} />
                <span className='emoji'>{m.emoji}</span>
                <span className='mood-label'>{m.label}</span>
              </label>
            ))}
          </div>
          <div className='form-actions'>
            <button className='btn primary' type='submit'>Save</button>
            <Link to={`/post/${id}`} className='btn'>Cancel</Link>
          </div>
        </div>
      </form>
    </section>
  )
}