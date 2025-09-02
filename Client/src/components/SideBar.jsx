import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import moment from 'moment'

const SideBar = ({isMenuOpen, setIsMenuOpen}) => {
  const { chats, selectedChat,setSelectedChat, theme, setTheme, user, navigate } = useAppContext();
  const [search, setSearch] = useState('');

  return (
    <div className={`flex flex-col h-screen min-w-72 p-5 dark:bg-gradient-to-b from-[#242124]/30 to-[#000000]/30
      border-r border-[#80609F]/30 backdrop-blur-3xl transition-all duration-500 max-md:absolute left-0 z-1 ${!isMenuOpen && 'max-md:-translate-x-full'}`}>
      
      {/* Logo */}
      <img
        src={theme === 'dark' ? assets.her_logo : assets.her_logo}
        alt="logo"
        className='w-40 max-w-48  pt-0'
      />

      {/* New Chat Button */}
      <button className='flex justify-center items-center w-full py-2 mt-5 text-white bg-gradient-to-r from-[#A456F7]
        to-[#3D81F6] text-sm rounded-2xl hover:scale-103 transition-all'>
        <span className='mr-2 text-xl'>+</span> New Chat
      </button>

      {/* Search Conversations */}
      <div className='flex items-center gap-2 p-3 mt-4 border border-gray-400 dark:border-white/20 rounded-2xl hover:scale-103 transition-all'>
        <img src={assets.search_icon} className='w-4 not-dark:invert' alt="Search" />
        <input
          type='text'
          placeholder='Search conversation'
          className='text-xs placeholder:text-gray-400 outline-none bg-transparent w-full'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Recent Chats */}
      {chats.length > 0 && <p className='mt-4 text-sm'>Recent Chats</p>}
      <div className='flex-1 overflow-y-scroll mt-3 text-sm space-y-3'>
        {
          chats
            .filter(chat => {
              const hasMessages = Array.isArray(chat.message) && chat.message.length > 0;
              const content = hasMessages ? chat.message[0]?.content?.toLowerCase() : '';
              const name = chat.name?.toLowerCase() || '';
              return content.includes(search.toLowerCase()) || name.includes(search.toLowerCase());
            })
           .map(chat => (
  <div onClick={() => {navigate('/'); setSelectedChat(chat); setIsMenuOpen(false)}}
    key={chat._id}
    className='p-2 px-4 dark:bg-[#57317C]/10 border border-gray-300 dark:border-[#80609F]/15
    rounded-2xl cursor-pointer flex justify-between group hover:scale-103 transition-all'
  >
    <div>
      <p className='truncate w-full'>
        {Array.isArray(chat.message) && chat.message.length > 0
          ? chat.message[0]?.content?.slice(0, 32)
          : chat.name}
      </p>
      <p className='text-xs text-gray-500 dark:text-[#B1A6C0]'>
        {moment(chat.updatedAt).fromNow()}
      </p>
    </div>
    <img
      src={assets.bin_icon}
      className='hidden group-hover:block w-4 cursor-pointer not-dark:invert'
      alt="Delete"
    />
  </div>
))      
        }
      </div>

      {/* community images */}
    <div
      onClick={() => { navigate('/community'); setIsMenuOpen(false); }}
      className='flex items-center gap-2 p-3 mt-4 border border-gray-300 dark:border-white/15 rounded-2xl cursor-pointer
      hover:scale-103 transition-all'
    >
      <img src={assets.gallery_icon} className='w-[18px] not-dark:invert' alt="Gallery" />
      <div className='flex flex-col text-sm'>
        <p>Community Images</p>
     </div>
    </div>

    {/* Credits purchase */}
    <div
      onClick={() => {navigate('/credits'); setIsMenuOpen(false)}}
      className='flex items-center gap-2 p-3 mt-4 border border-gray-300 dark:border-white/15 rounded-2xl cursor-pointer
      hover:scale-103 transition-all'
    >
      <img src={assets.diamond_icon} className='w-[18px] dark:invert' alt="Gallery" />
      <div className='flex flex-col text-sm'>
        <p>Credits: {user?.credits}</p>
        <p className='text-xs text-gray-400'>Purchase credits to use Samantha</p>
     </div>
    </div>

    {/* mode toggle */}

<div
  className='flex items-center justify-between gap-2 p-3 mt-4 border border-gray-300 dark:border-white/15 rounded-2xl cursor-pointer
  hover:scale-103 transition-all'
>
  <div className='flex items-center gap-2 text-sm'>
    <img src={assets.theme_icon} className='w-4 not-dark:invert' alt="Theme Icon" />
    <p>Dark Mode</p>
  </div>

  <label className='relative inline-flex items-center cursor-pointer'>
    <input
      type='checkbox'
      className='sr-only peer'
      checked={theme === 'dark'}
      onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    />
    <div className='w-9 h-5 bg-gray-400 rounded-full peer-checked:bg-purple-600 transition-all'></div>
    <span className='absolute left-1 top-1 w-3 h-3 bg-white rounded-2xl transition-transform peer-checked:translate-x-4'></span>
  </label>
</div>

    {/* User Account */}
    <div className="flex items-center justify-between gap-2 p-3 mt-4 border border-gray-300 dark:border-white/15 rounded-2xl cursor-pointer
  hover:scale-103 transition-all">
  <div className="flex items-center gap-2">
    <img src={assets.user_icon} className="w-8 rounded-full " />
    <div>
      <p className="text-sm text-gray-700 truncate">{user?.username}</p>
      <p className="text-xs text-gray-500">LogOut your account</p>
    </div>
  </div>
  {user && (
    <img
      src={assets.logout_icon}
      className="h-5 cursor-pointer hover:opacity-70 not-dark:invert"
    />
  )}
</div>

  <div>
    <img onClick={() => setIsMenuOpen(false)} src={assets.close_icon} className='absolute top-3 right-3 w-5 h-5 cursor-pointer md:hidden not-dark:invert'/>
  </div>

    </div>
  );
};

export default SideBar;
