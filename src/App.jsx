import React, { useEffect, useMemo, useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import CreatePost from './components/CreatePost'
import PostView from './components/PostView'
import EditPost from './components/EditPost'
import NotFound from './components/NotFound'
import { loadPosts, savePosts } from './utils/storage'
import { MOODS } from './data/moods'
import Welcome from './components/Welcome'
import { useLocation } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import ProtectedRoute from './Reg/ProtectedRoute'
import { logout } from "./Reg/Reg"




export default function App(){
  const [posts, setPosts] = useState(() => loadPosts())
  const [themeMood, setThemeMood] = useState('happy')
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(()=> savePosts(posts), [posts])

  const addPost = (post) => {
    setPosts(prev => [{ ...post, id: Date.now().toString() }, ...prev])
    navigate('/')
  }
  const updatePost = (id, updated) => {
    setPosts(prev => prev.map(p => p.id === id ? { ...p, ...updated } : p))
    navigate(`/post/${id}`)
  }
  const deletePost = (id) => {
    if(!confirm('Delete this post?')) return
    setPosts(prev => prev.filter(p => p.id !== id))
    navigate('/')
  }

  const theme = useMemo(()=> MOODS[themeMood] || MOODS.happy, [themeMood])

  return (
    <div className="app-root" style={{ '--accent': theme.accent }}>
      <div className="bg-gradient" style={{ background: `linear-gradient(135deg, ${theme.color[0]}, ${theme.color[1]})` }} />
      <div className="container">
      {location.pathname !== "/login" &&
       location.pathname !== "/register" &&
       location.pathname !== "/welcome" &&  (
        <Header onThemeChange={setThemeMood} currentMood={themeMood} />
      )}

        <main>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/welcome" element={<Welcome />} />

            <Route
              path="/"
              element={
                localStorage.getItem("soul_loggedIn") === "true"
                  ? <Navigate to="/welcome" replace />
                  : <Navigate to="/login" replace />
              }
            />

            <Route path="/home" element={
              <ProtectedRoute>
                <Home posts={posts} setThemeMood={setThemeMood} />
              </ProtectedRoute>
            } />

            <Route path="/create" element={
              <ProtectedRoute>
                <CreatePost onCreate={addPost} setThemeMood={setThemeMood} />
              </ProtectedRoute>
            } />

            <Route path="/post/:id" element={
              <ProtectedRoute>
                <PostView posts={posts} onDelete={deletePost} setThemeMood={setThemeMood} />
             </ProtectedRoute>
            } />
            
            <Route path="/edit/:id" element={
              <ProtectedRoute>
                <EditPost posts={posts} onUpdate={updatePost} setThemeMood={setThemeMood} />
              </ProtectedRoute>
            } />

            {/* <Route path="/welcome" element={<Welcome />} />
            <Route path='/' element={<Home posts={posts} setThemeMood={setThemeMood} />} />
            <Route path='/create' element={<CreatePost onCreate={addPost} setThemeMood={setThemeMood} />} />
            <Route path='/post/:id' element={<PostView posts={posts} onDelete={deletePost} setThemeMood={setThemeMood} />} />
            <Route path='/edit/:id' element={<EditPost posts={posts} onUpdate={updatePost} setThemeMood={setThemeMood} />} /> */}
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>

        {location.pathname !== "/login" &&
         location.pathname !== "/register" &&
         location.pathname !== "/welcome" && (
          <footer className='footer'><small>Built with ❤️ — SoulNotes</small></footer>
        )}

      </div>
    </div>
  )
}