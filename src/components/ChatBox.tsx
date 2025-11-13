import React, { useState } from 'react';
import { MessageCircle, Send } from 'lucide-react';

interface Message {
  sender: 'npc' | 'player';
  name: string;
  content: string[];
  avatar: string;
}

const initialMessages: Message[] = [
  {
    sender: 'npc',
    name: '零号',
    content: ['信息有价，你出得起什么？不要浪费我的时间。'],
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop'
  },
  {
    sender: 'player',
    name: '你',
    content: ['我需要知道那个快递员的下落。开个价吧。'],
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop'
  },
  {
    sender: 'npc',
    name: '零号',
    content: [
      '"开价"？（轻笑）...天真。',
      '帮我从红星社那里拿个东西，我就告诉你他的位置。很简单的一笔交易。'
    ],
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop'
  }
];

interface ChatBoxProps {
  chatInput: string;
  setChatInput: (value: string) => void;
}

export function ChatBox({ chatInput, setChatInput }: ChatBoxProps) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);

  const handleSend = () => {
    if (chatInput.trim()) {
      setMessages([...messages, {
        sender: 'player',
        name: '你',
        content: [chatInput],
        avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop'
      }]);
      setChatInput('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="comic-panel h-[85vh] flex flex-col relative overflow-hidden"
         style={{ '--panel-bg': '#FFFFFF', '--panel-rotation': '0deg' } as React.CSSProperties}>
      
      {/* 胶带装饰 */}
      <div className="tape"
           style={{ 
             top: '-15px',
             left: '50%',
             transform: 'translateX(-50%) rotate(-4deg)'
           }}></div>
      
      {/* SFX装饰 */}
      <div className="absolute top-8 right-8 z-20 sfx-burst pointer-events-none"
           style={{ 
             '--sfx-bg': '#22D3EE',
             '--sfx-color': '#000000',
             '--sfx-rotation': '-10deg',
             fontSize: '1.5rem'
           } as React.CSSProperties}>
        TALK!
      </div>
      
      {/* 面板内容 */}
      <div className="comic-panel-content flex flex-col h-full relative z-10">
        {/* 顶部标题栏 */}
        <div className="p-6 pb-5 border-b-4 border-black diagonal-stripes">
          <div className="flex items-center gap-4 mb-4">
            {/* 图标容器 */}
            <div className="p-3 border-4 border-black"
                 style={{ 
                   background: '#22D3EE',
                   boxShadow: '5px 5px 0 #000000'
                 }}>
              <MessageCircle className="text-black" strokeWidth={3} size={32} />
            </div>
            
            <h2 className="comic-title text-5xl"
                style={{ '--title-color': '#22D3EE', color: '#22D3EE' } as React.CSSProperties}>
              FREE MIRROR
            </h2>
          </div>
          
          <p className="text-sm uppercase tracking-widest text-black/80"
             style={{ fontFamily: 'Anton, sans-serif', fontWeight: 400 }}>
            对话系统 // DIALOGUE MODE
          </p>
        </div>
        
        {/* 对话内容 */}
        <div className="comic-scroll flex-1 space-y-8 overflow-y-auto px-6 py-6 halftone-dots"
             style={{ '--scroll-color': '#22D3EE' } as React.CSSProperties}>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex gap-4 items-start ${message.sender === 'player' ? 'justify-end' : 'justify-start'}`}
            >
              {message.sender === 'npc' && (
                <img
                  src={message.avatar}
                  alt="NPC"
                  className="comic-avatar h-16 w-16 flex-shrink-0 object-cover rounded-none"
                />
              )}
              
              <div className={`flex flex-col ${message.sender === 'player' ? 'items-end' : 'items-start'} max-w-[75%]`}>
                {/* 名字标签 */}
                <div className="comic-badge text-sm mb-4"
                     style={{ 
                       '--badge-bg': message.sender === 'player' ? '#FACC15' : '#3B82F6',
                       '--badge-color': '#000000',
                       '--badge-rotation': message.sender === 'player' ? '2deg' : '-2deg'
                     } as React.CSSProperties}>
                  {message.name}
                </div>
                
                {/* 漫画对话气泡 */}
                <div className="comic-speech-bubble">
                  {message.content.map((text, i) => (
                    <p key={i} 
                       className={`text-base leading-relaxed ${i > 0 ? 'mt-3' : ''}`}
                       style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}>
                      {text}
                    </p>
                  ))}
                </div>
              </div>

              {message.sender === 'player' && (
                <img
                  src={message.avatar}
                  alt="Player"
                  className="comic-avatar h-16 w-16 flex-shrink-0 object-cover rounded-none"
                />
              )}
            </div>
          ))}
        </div>

        {/* 输入区域 */}
        <div className="flex-shrink-0 p-6 pt-5 border-t-4 border-black diagonal-stripes">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="输入你的回复..."
              className="flex-1 comic-input text-base"
              style={{ 
                '--input-focus': '#22D3EE'
              } as React.CSSProperties}
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button
              onClick={handleSend}
              className="comic-button flex h-16 w-16 items-center justify-center p-0"
              style={{ '--button-bg': '#FACC15' } as React.CSSProperties}
            >
              <Send className="h-6 w-6" strokeWidth={3} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
