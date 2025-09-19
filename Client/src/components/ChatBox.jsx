import React, { useEffect, useRef, useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import Message from './Message';

const ChatBox = () => {
  const containerRef = useRef(null)

  const { selectedChat, theme } = useAppContext();

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState([])
  const [mode, setMode]  = useState('text')
  const [isPublished, setIsPublished] = useState(false)

  const onSubmit = async (e) =>{
    e.preventDefault()
  }

  useEffect(() => {
    if (selectedChat) {
      setMessages(selectedChat.messages);
    }
  }, [selectedChat]);

  useEffect(()=> {
    if(containerRef.current){
      containerRef.current.scrollTo({
        top:containerRef.current.scrollHeight,
        behavior: "smooth"
      })
    }
  }, [messages])

  return (
    <div className="flex-1 flex flex-col justify-between m-5 xl:mx-30 max-md:mt-14 2xl:pr-40">
      {/* Chat messages */}
      <div ref={containerRef} className="flex-1 mb-5 overflow-y-scroll">
        {messages.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center gap-2 text-primary">
            <img src={assets.her_logo} className="w-full max-w-56 sm:max-w-68" alt="Logo" />
            <p className="mt-5 text-4xl sm:text-6xl text-center text-orange-800 dark:text-white">
              What's in your Mind😊
            </p>
          </div>
        )}
        {messages.map((message, index) => (
          <Message key={index} Message={message} />
        ))}
      </div> 
      
      {/* Three dot animations */}
     { loading && <div className='loader flex items-center gap-1.5'>
        <div className='w-1.5 h-1.5 rounded-full bg-gray-500 dark:bg-white animate-bounce'></div>
        <div className='w-1.5 h-1.5 rounded-full bg-gray-500 dark:bg-white animate-bounce'></div>
        <div className='w-1.5 h-1.5 rounded-full bg-gray-500 dark:bg-white animate-bounce'></div>
 
      </div>}

        {/* add checkbox for image Published */}
        {mode === 'image' && (
  <div className="flex items-center gap-3 w-fit mx-auto p-2 px-3 mb-1
                  bg-gray-100 dark:bg-[#2A2B32] border border-gray-300 
                  dark:border-[#444654] rounded-xl shadow-sm hover:shadow-md transition">
    {/* Label Text */}
    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
      Publish the image to community
    </p>
 
    {/* Toggle Switch */}
    <button
      type="button"
      onClick={() => setIsPublished(!isPublished)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition 
                  ${isPublished ? "bg-primary" : "bg-gray-300 dark:bg-gray-600"}`}
    >
      <span
        className={`inline-block h-5 w-5 transform rounded-full bg-white 
                    transition ${isPublished ? "translate-x-5" : "translate-x-1"}`}
      />
    </button>
  </div>
)}


     {/* Input for prompt */}
<form
  onSubmit={onSubmit}
  className="flex items-center gap-2 bg-white dark:bg-[#2A2B32] border border-gray-300 dark:border-[#444654] 
             rounded-2xl w-full max-w-3xl p-3 pl-4 mx-auto shadow-sm focus-within:shadow-md transition"
>
  {/* Mode Selector */}
  <select
    onChange={(e) => setMode(e.target.value)}
    value={mode}
    className="text-sm px-3 py-2 rounded-lg bg-gray-100 dark:bg-[#3E3F4B] 
               border-none outline-none focus:ring-2 focus:ring-primary 
               cursor-pointer hover:scale-103 transition-all "
  >
    <option className="dark:bg-[#3E3F4B]" value="text">Text</option>
    <option className="dark:bg-[#3E3F4B]" value="voice">Voice</option>
    <option className="dark:bg-[#3E3F4B]" value="image">Image</option>
  </select>

  {/* Prompt Input */}
  <input
    onChange={(e) => setPrompt(e.target.value)}
    value={prompt}
    type="text"
    placeholder="Type your prompt here..."
    className="flex-1 w-full text-sm bg-transparent outline-none 
               placeholder-gray-400 dark:placeholder-gray-500"
    required
  />

  {/* Send Button */}
  <button
    disabled={loading}
    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#3E3F4B] 
               transition disabled:opacity-50 disabled:cursor-not-allowed"
  >
    <img
      src={loading ? assets.stop_icon : assets.send_icon}
      className="w-6 h-6 cursor-pointer hover:scale-103 transition-all"
      alt="send"
    />
  </button>
</form>

    </div>
  );
};

export default ChatBox;
