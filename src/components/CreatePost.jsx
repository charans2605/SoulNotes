import { useState, useEffect } from 'react'
import { MOODS } from '../data/moods'
import { QUOTES } from '../data/quotes'
import { Link } from 'react-router-dom'

export default function CreatePost({ onCreate, setThemeMood }){
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [mood, setMood] = useState('happy')
   
  const [image, setImage] = useState(null)

  useEffect(()=> setThemeMood(mood), [mood])

   const handleImageUpload = (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onloadend = () => setImage(reader.result)
    reader.readAsDataURL(file)
  }

  const submit = (e) => {
    e.preventDefault()
    if(!title.trim() || !content.trim()) {
      return alert('Add title and content')
    }
    onCreate({ 
      title: title.trim(), 
      content: content.trim(), mood, 
      createdAt: Date.now(),
      image: image || null  
    })
  }

  return (
    <section className='create'>
      <h2>Create Post</h2>

      <form onSubmit={submit} className='form'>

        <input 
          placeholder='Title' 
          value={title} 
          onChange={e=>setTitle(e.target.value)} 
        />

        <div className="image-box">
          <h4 style={{ margin: 0, marginBottom: 8 }}>Attach Image</h4>

          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />

          {image && (
            <img
              src={image}
              alt="Preview"
              className="preview-image"
              style={{
                marginTop: 10,
                width: "260px",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.15)"
              }}
            />
          )}
        </div>

        <textarea 
          placeholder='Write your thoughts...' 
          value={content} 
          onChange={e=>setContent(e.target.value)} 
          rows={8} 
        />

        <div className='form-row'>
          <div className='mood-row'>
            {Object.entries(MOODS).map(([k,m]) => (
              <label key={k} className={`mood-option ${mood===k? 'active':''}`}>
                <input type='radio' name='mood' checked={mood===k} onChange={()=>setMood(k)} />
                <span className='emoji'>{m.emoji}</span>
                <span className='mood-label'>{m.label}</span>
              </label>
            ))}
          </div>
          <div className='form-actions'>
            <button className='btn primary' type='submit'>Publish</button>
            <Link to='/' className='btn'>Cancel</Link>
          </div>
        </div>
      </form>

      <aside className='quote-box'>
        <h4>Suggestion</h4>
        <p>{QUOTES[mood][Math.floor(Math.random()*QUOTES[mood].length)]}</p>
      </aside>
    </section>
  )
}