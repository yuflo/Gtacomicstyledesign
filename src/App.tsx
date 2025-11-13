import React, { useState } from 'react';
import { InfoPanel } from './components/InfoPanel';
import { ChatBox } from './components/ChatBox';
import { CharacterPanel } from './components/CharacterPanel';

export default function App() {
  const [chatInput, setChatInput] = useState('');

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* 优化1: 城市夜景背景（模糊+调色） */}
      <div 
        className="fixed inset-0 -z-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1693946954012-4bbc26cfb6a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwbmlnaHQlMjBza3lsaW5lJTIwZGFya3xlbnwxfHx8fDE3NjMwMDc3OTR8MA&ixlib=rb-4.1.0&q=80&w=1080')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(8px) brightness(0.4) saturate(1.3)',
          transform: 'scale(1.1)'
        }}
      />
      
      {/* 深色叠加层 */}
      <div className="fixed inset-0 -z-10 bg-black/60"></div>
      
      {/* 细微噪点纹理 */}
      <div className="fixed inset-0 -z-10 opacity-20"
           style={{
             backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3CfeColorMatrix type=\'saturate\' values=\'0\'/%3E%3C/filter%3E%3Crect width=\'100\' height=\'100\' filter=\'url(%23noise)\' opacity=\'0.05\'/%3E%3C/svg%3E")'
           }}></div>
      
      {/* 主容器 - 优化5: 严格网格布局 */}
      <div className="min-h-screen flex flex-col p-6 md:p-8">
        
        {/* 顶部标题栏 - GTA Logo风格 */}
        <header className="mb-6">
          <div className="max-w-7xl mx-auto">
            <div className="cyber-glass neon-border-yellow p-6 relative overflow-hidden">
              {/* 拉丝金属纹理叠加 */}
              <div className="absolute inset-0 brushed-metal opacity-30 pointer-events-none"></div>
              
              <div className="relative z-10 flex items-center justify-between flex-wrap gap-6">
                <div>
                  <h1 className="gta-title neon-glow-yellow mb-2"
                      style={{ fontSize: '3.5rem' }}>
                    GRAND THEFT AUTO
                  </h1>
                  <p className="text-sm uppercase tracking-widest text-yellow-400/80 font-mono">
                    CRIME SIMULATOR // 犯罪模拟器
                  </p>
                </div>
                
                {/* 右侧状态标签 */}
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-red-500 border-2 border-red-300 font-mono uppercase tracking-wider"
                     style={{
                       boxShadow: '0 0 20px rgba(239, 68, 68, 0.5)',
                       animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                     }}>
                  <div className="h-3 w-3 rounded-full bg-white animate-pulse"></div>
                  <span className="text-white font-bold">ONLINE</span>
                </div>
              </div>
            </div>
          </div>
        </header>
        
        {/* 三面板网格布局 - 优化5: 移除倾斜，严格对齐 */}
        <div className="flex-1 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
            <InfoPanel />
            <ChatBox chatInput={chatInput} setChatInput={setChatInput} />
            <CharacterPanel />
          </div>
        </div>
      </div>
    </div>
  );
}
