import { useEffect, useState } from 'react'
import { MOODS } from '../data/moods'
import PostCard from './PostCard'
import { Link } from 'react-router-dom'

export default function Home({ posts, setThemeMood }){
  const [query, setQuery] = useState('')
  const [filterMood, setFilterMood] = useState('')

  useEffect(()=>{ if(filterMood) setThemeMood(filterMood) }, [filterMood])

  const filtered = posts.filter(p => (
    (!filterMood || p.mood === filterMood) &&
    (p.title.toLowerCase().includes(query.toLowerCase()) || p.content.toLowerCase().includes(query.toLowerCase()))
  ))

  return (
    <section className='home'>
      <div className='top-controls'>
        <input className='search' 
          placeholder='Search posts...' 
          value={query} 
          onChange={e=>setQuery(e.target.value)} 
        />
        <select value={filterMood} 
          onChange={e=>setFilterMood(e.target.value)}>
          <option value=''>All moods</option>
          {Object.entries(MOODS).map(([k,m]) => <option key={k} value={k}>{m.label}</option>)}
        </select>
      </div>

      <div className='grid'>
        {filtered.length === 0 ? (
          <div className='empty'>
            <h3>No posts yet</h3>
            <p>Create your first soul-filled post.</p>
            <Link to='/create' className='btn'>Create Post</Link>
          </div>
        ) : filtered.map(post => <PostCard key={post.id} post={post} />)}
      </div>
    </section>
  )
}