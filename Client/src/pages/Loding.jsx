import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Loading = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/')
    }, 2000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="h-screen bg-gradient-to-br from-[#2C0E4F] via-[#1A1B2F] to-[#0F0F1A] flex flex-col items-center justify-center text-white">
      {/* Glowing ring loader */}
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-white border-t-transparent animate-spin"></div>
        <div className="absolute inset-0 rounded-full blur-xl bg-purple-500 opacity-30 animate-pulse"></div>
      </div>

      {/* Subtle branding text */}
      <div className="mt-6 text-center">
        <h1 className="text-3xl font-semibold tracking-wide text-white/90">She's Mine</h1>
        <p className="text-sm text-white/60 mt-1 italic">Crafting clarity, I am hear for you🤭</p>
      </div>
    </div>
  )
}

export default Loading