import React, { useEffect } from 'react';
import { assets } from '../assets/assets';
import Markdown from 'react-markdown';
import Prism from "prismjs"
import "prismjs/themes/prism.css";

const Message = ({ Message }) => {
  
useEffect(() => {
  Prism.highlightAll();
}, [Message.content]);

  if (!Message) return null; // Prevent error if Message is undefined

  return (
    <div>
      {Message.role === 'user' ? (
        <div className="flex items-start justify-end my-4 gap-2">
          <div className="flex flex-col gap-2 px-4 bg-slate-50 dark:bg-[#57317C]/10 border border-[#80609f]/30 rounded-md max-w-2xl">
            <p className="text-sm dark:text-primary"><Markdown>{Message.content}</Markdown></p>
            <span className="text-xs text-gray-400 dark:text-[#B1A6C0]">
              {Message.timestamp}
            </span>
          </div>
          <img src={assets.user_icon} className="w-8 rounded-full" alt="User Icon" />
        </div>
      ) : (
        <div className="inline-flex flex-col gap-2 p-2 px-4 max-w-2xl bg-pri/20 dark:bg-[#57317C]/30 border border-[#80609F]/30 rounded-md my-4">
          {Message.isImage ? (
            <img
              src={Message.content}
              className="w-full max-w-md mt-2 rounded-md"
              alt="Message Content"
            />
          ) : (
            <div className="text-sm dark:text-primary reset-tw">
              <Markdown>{Message.content}</Markdown>
            </div>
          )}
          <span className="text-xs text-gray-400 dark:text-[#B1A6C0]">
            {Message.timestamp}
          </span>
        </div>
      )}
    </div>
  );
};

export default Message;
