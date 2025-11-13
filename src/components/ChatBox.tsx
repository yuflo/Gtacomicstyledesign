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
    <div className="h-full flex flex-col relative overflow-hidden brushed-metal neon-border-cyan">
      {/* 优化1: 拉丝金属 + 霓虹边框（Slick） */}
      
      {/* 面板内容 */}
      <div className="relative z-10 flex flex-col h-full">
        {/* 顶部标题栏 */}
        <div className="p-6 pb-5 border-b border-white/10">
          <div className="flex items-center gap-4 mb-4">
            {/* 图标容器 */}
            <div className="p-3 bg-cyan-500/20 border border-cyan-500/50 backdrop-blur-sm"
                 style={{ boxShadow: '0 0 20px rgba(34, 211, 238, 0.3)' }}>
              <MessageCircle className="text-cyan-400" strokeWidth={2.5} size={28} />
            </div>
            
            {/* 优化4: Orbitron标题（Slick） */}
            <h2 className="neon-glow-cyan text-4xl uppercase tracking-tight"
                style={{ 
                  fontFamily: 'Orbitron, sans-serif',
                  fontWeight: 800
                }}>
              FREE MIRROR
            </h2>
          </div>
          
          <p className="text-xs uppercase tracking-widest text-cyan-300/60 font-mono">
            对话系统 // DIALOGUE MODE
          </p>
        </div>
        
        {/* 对话内容 */}
        <div className="flex-1 space-y-6 overflow-y-auto px-6 py-6"
             style={{
               scrollbarWidth: 'thin',
               scrollbarColor: '#22D3EE #18181B'
             }}>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex gap-4 items-start ${message.sender === 'player' ? 'justify-end' : 'justify-start'}`}
            >
              {message.sender === 'npc' && (
                <div className="relative flex-shrink-0">
                  <img
                    src={message.avatar}
                    alt="NPC"
                    className="h-14 w-14 object-cover border-2 border-cyan-500/50"
                    style={{ boxShadow: '0 0 15px rgba(34, 211, 238, 0.3)' }}
                  />
                  {/* 优化3: CCTV效果（Grit） */}
                  <div className="absolute inset-0 pointer-events-none scanlines opacity-50"></div>
                </div>
              )}
              
              <div className={`flex flex-col ${message.sender === 'player' ? 'items-end' : 'items-start'} max-w-[75%]`}>
                {/* 名字标签 - 优化4: Mono字体（Grit） */}
                <div className="inline-flex items-center px-3 py-1.5 mb-3 text-xs uppercase tracking-wider font-mono font-bold border-2"
                     style={{ 
                       background: message.sender === 'player' ? '#FACC15' : '#3B82F6',
                       color: '#000000',
                       borderColor: message.sender === 'player' ? '#FACC15' : '#3B82F6',
                       boxShadow: '3px 3px 0 rgba(0,0,0,0.4)'
                     }}>
                  {message.name}
                </div>
                
                {/* 对话气泡 - 优化1: 再生纸质感（Grit） */}
                <div className="recycled-paper p-4 border-2 border-zinc-800 relative overflow-hidden"
                     style={{ 
                       borderRadius: '0.75rem',
                       boxShadow: '4px 4px 0 rgba(0,0,0,0.2)'
                     }}>
                  {/* 半色调网点 */}
                  <div className="absolute inset-0 pointer-events-none opacity-20"
                       style={{
                         backgroundImage: 'radial-gradient(circle, rgba(0, 0, 0, 0.25) 1px, transparent 1px)',
                         backgroundSize: '3px 3px'
                       }}></div>
                  
                  <div className="relative z-10">
                    {message.content.map((text, i) => (
                      <p key={i} 
                         className={`text-sm leading-relaxed text-zinc-800 ${i > 0 ? 'mt-2' : ''}`}
                         style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}>
                        {text}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {message.sender === 'player' && (
                <div className="relative flex-shrink-0">
                  <img
                    src={message.avatar}
                    alt="Player"
                    className="h-14 w-14 object-cover border-2 border-yellow-500/50"
                    style={{ boxShadow: '0 0 15px rgba(250, 204, 21, 0.3)' }}
                  />
                  {/* 优化3: CCTV效果（Grit） */}
                  <div className="absolute inset-0 pointer-events-none scanlines opacity-50"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 输入区域 */}
        <div className="flex-shrink-0 p-6 pt-5 border-t border-white/10">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="输入你的回复..."
              className="flex-1 px-4 py-3 bg-black/50 backdrop-blur-sm border border-cyan-500/30 text-white text-sm font-mono placeholder:text-white/40 transition-all focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button
              onClick={handleSend}
              className="flex h-12 w-12 items-center justify-center p-0 bg-yellow-400 hover:bg-yellow-300 border-2 border-yellow-600 transition-all hover:shadow-[0_0_20px_rgba(250,204,21,0.5)]"
            >
              <Send className="h-5 w-5 text-black" strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
