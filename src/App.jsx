import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [mood, setMood] = useState("")
  const[result,setResult] = useState({emoji:"😊",message:"Type your mood"})
  
  const moodEmojis = {
   smile: { emoji: "😊", message: "You're shining bright today!" },
  happy: { emoji: "😊", message: "You're shining bright today!" },
  sad: { emoji: "😢", message: "It's okay to feel sad sometimes." },
  angry: { emoji: "😡", message: "Take a deep breath, it'll be okay." },
  excited: { emoji: "🤩", message: "Woohoo! Keep that energy high!" },
  tired: { emoji: "😴", message: "You deserve a good rest!" },
  love: { emoji: "❤️", message: "Love is in the air!" },
  bored: { emoji: "🥱", message: "Try something new today!" },
  anxious: { emoji: "😰", message: "Everything will be fine, one step at a time." },
  confident: { emoji: "😎", message: "You've got this!" },
  grateful: { emoji: "🙏", message: "Gratitude makes every day brighter!" }
};

  const handleDetect = () => {
      const key= mood.toLowerCase().trim()
      if(moodEmojis[key]){
        setResult(moodEmojis[key])
      }else{
        const emojis= Object.values(moodEmojis)
        const random = emojis[Math.floor(Math.random()*emojis.length)]
        setResult({emoji:random.emoji,message:"mood not found here one"})
      }
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-900 text-white'>
         <h1 className='text-3xl font-bold mb-6'>Emoji mood Detector</h1>

         <input type="text" 
         value={mood}
         onChange={(e)=>setMood(e.target.value)}
         placeholder='Type your mood here'
         className='p-3 rounded-lg w-64 text-white mb-4 border border-amber-600'/>
         <button 
         onClick={handleDetect}
         className='bg-blue-600 px-5 py-2 text-white font-bold'>Detect Mood</button>

         <div className='mt-8 text-center'>
          <div className='text-6xl mb-3'>{result.emoji}</div>
          <p className='text-lg'>{result.message}</p>
         </div>
    </div>
  )
}

export default App
