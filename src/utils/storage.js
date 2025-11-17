const STORAGE_KEY = 'soulnotes_posts_v1'
export const loadPosts = ()=> {
  try{
    const raw = localStorage.getItem(STORAGE_KEY)
    if(!raw) return []
    return JSON.parse(raw)
  }catch(e){
    console.error('loadPosts error', e)
    return []
  }
}
export const savePosts = (posts)=> {
  try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(posts)) }catch(e){ console.error(e) }
}