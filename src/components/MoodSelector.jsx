import { MOODS } from '../data/moods'

export default function MoodSelector({ value, onChange }){
  return (
    <div className='mood-selector' role='radiogroup' aria-label='Select mood'>
      {Object.entries(MOODS).map(([key,m])=> (
        <button key={key} onClick={()=>onChange(key)} className={value===key? 'mood-btn active' : 'mood-btn'} title={m.label}>
          <span className='emoji'>{m.emoji}</span>
        </button>
      ))}
    </div>
  )
}
