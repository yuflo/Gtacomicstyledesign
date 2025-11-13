import React from 'react';
import { User, MapPin, Star, AlertTriangle } from 'lucide-react';

interface Stat {
  name: string;
  label: string;
  color: string;
  value: number;
  max: number;
}

const stats: Stat[] = [
  { 
    name: 'HP',
    label: 'HEALTH',
    color: '#A3E635',
    value: 85, 
    max: 100 
  },
  { 
    name: 'EN',
    label: 'ENERGY',
    color: '#FACC15',
    value: 70, 
    max: 100 
  },
  { 
    name: 'COMP',
    label: 'COMPLIANCE',
    color: '#EF4444',
    value: 60, 
    max: 100 
  }
];

export function CharacterPanel() {
  return (
    <div className="h-full flex flex-col relative overflow-visible concrete dashed-warning">
      {/* 优化1: 混凝土质感 + 虚线警告框（Grit） */}
      
      {/* 面板内容 */}
      <div className="relative z-10 flex flex-col h-full overflow-hidden">
        {/* 顶部标题栏 */}
        <div className="p-6 pb-5 border-b-2 border-dashed border-yellow-600/50">
          <div className="flex items-center gap-4 mb-4">
            {/* 图标容器 */}
            <div className="p-3 bg-lime-500/30 border-2 border-lime-600"
                 style={{ boxShadow: '4px 4px 0 rgba(0,0,0,0.3)' }}>
              <User className="text-lime-700" strokeWidth={2.5} size={28} />
            </div>
            
            {/* 优化4: Orbitron标题（Slick） */}
            <h2 className="text-4xl uppercase tracking-tight text-lime-700"
                style={{ 
                  fontFamily: 'Orbitron, sans-serif',
                  fontWeight: 800,
                  textShadow: '2px 2px 0 rgba(0,0,0,0.2)'
                }}>
              ENTITY FOCUS
            </h2>
          </div>
          
          <p className="text-xs uppercase tracking-widest text-zinc-600 font-mono">
            目标档案 // TARGET FILE
          </p>
        </div>
        
        <div className="p-6 flex-1 overflow-y-auto"
             style={{
               scrollbarWidth: 'thin',
               scrollbarColor: '#A3E635 #D4D4D8'
             }}>
          
          {/* 优化5: 角色图片溢出破坏网格 */}
          <div className="relative mb-6 -mx-8 -mt-2">
            <div className="recycled-paper p-3 pb-12 border-2 border-black relative overflow-hidden transform rotate-2"
                 style={{ 
                   boxShadow: '6px 6px 0 rgba(0,0,0,0.3)',
                   zIndex: 50
                 }}>
              {/* 优化3: 图像Grit化 - 噪点+扫描线+CCTV */}
              <div className="relative noise-overlay cctv-effect">
                <img 
                  src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=600&h=600&fit=crop"
                  alt="角色插画"
                  className="w-full border-4 border-black"
                  style={{ filter: 'contrast(1.15) saturate(0.9)' }}
                />
                
                {/* 扫描线叠加 */}
                <div className="absolute inset-0 scanlines pointer-events-none"></div>
                
                {/* 半色调网点叠加 */}
                <div className="absolute inset-0 pointer-events-none opacity-40"
                     style={{
                       backgroundImage: 'radial-gradient(circle, rgba(0, 0, 0, 0.3) 1px, transparent 1px)',
                       backgroundSize: '4px 4px'
                     }}></div>
              </div>
              
              {/* 照片底部手写文字 */}
              <div className="absolute bottom-3 left-0 right-0 text-center font-mono font-bold"
                   style={{ 
                     fontSize: '1.25rem',
                     color: '#000000'
                   }}>
                KIRA // #4782
              </div>
              
              {/* 危险标签 - 优化5: 溢出元素 */}
              <div className="absolute -top-3 -right-3 bg-red-500 text-white px-4 py-2 font-mono text-sm font-bold uppercase border-2 border-white transform -rotate-12 animate-pulse"
                   style={{ 
                     boxShadow: '0 0 20px rgba(239, 68, 68, 0.8)',
                     zIndex: 60
                   }}>
                <div className="flex items-center gap-2">
                  <AlertTriangle size={16} strokeWidth={3} />
                  DANGEROUS
                </div>
              </div>
            </div>
          </div>

          {/* 状态条 */}
          <div className="space-y-4 mb-6">
            {stats.map((stat) => {
              const percentage = (stat.value / stat.max) * 100;
              const isLow = percentage < 25;
              const displayColor = isLow ? '#EF4444' : stat.color;
              
              return (
                <div key={stat.name} 
                     className="recycled-paper p-4 border-2 border-zinc-800 relative overflow-hidden"
                     style={{ boxShadow: '3px 3px 0 rgba(0,0,0,0.2)' }}>
                  {/* 半色调网点 */}
                  <div className="absolute inset-0 pointer-events-none opacity-20"
                       style={{
                         backgroundImage: 'radial-gradient(circle, rgba(0, 0, 0, 0.2) 1px, transparent 1px)',
                         backgroundSize: '4px 4px'
                       }}></div>
                  
                  <div className="relative z-10">
                    <div className="mb-3 flex justify-between items-center flex-wrap gap-2">
                      <div className="flex items-center gap-3">
                        {/* 优化4: Mono字体属性（Grit） */}
                        <span className="text-3xl uppercase tracking-tight font-mono font-black" style={{ 
                          color: displayColor,
                          textShadow: '2px 2px 0 rgba(0,0,0,0.2)'
                        }}>
                          {stat.name}
                        </span>
                        <span className="text-xs uppercase tracking-wider text-zinc-600 font-mono font-bold">
                          {stat.label}
                        </span>
                      </div>
                      <span className="text-sm px-3 py-1.5 font-mono font-black border-2 uppercase"
                            style={{ 
                              background: displayColor,
                              color: '#000000',
                              borderColor: displayColor,
                              boxShadow: '2px 2px 0 rgba(0,0,0,0.3)'
                            }}>
                        {stat.value}/{stat.max}
                      </span>
                    </div>
                    
                    {/* 进度条 */}
                    <div className="h-6 bg-zinc-300 border-2 border-black relative overflow-hidden"
                         style={{ boxShadow: 'inset 2px 2px 4px rgba(0,0,0,0.2)' }}>
                      <div
                        className="h-full border-r-2 border-black transition-all duration-300"
                        style={{ 
                          width: `${percentage}%`,
                          background: displayColor,
                          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 6px, rgba(0,0,0,0.1) 6px, rgba(0,0,0,0.1) 12px)'
                        }}
                      ></div>
                    </div>
                    
                    {/* 低血量警告 */}
                    {isLow && (
                      <div className="mt-3 bg-red-500 text-white px-3 py-1.5 text-xs font-mono font-bold uppercase text-center border-2 border-white animate-pulse"
                           style={{ boxShadow: '0 0 15px rgba(239, 68, 68, 0.6)' }}>
                        WARNING: CRITICAL
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* 信息卡片 */}
          <div className="space-y-4">
            <div className="recycled-paper p-4 border-2 border-zinc-800 relative"
                 style={{ boxShadow: '3px 3px 0 rgba(0,0,0,0.2)' }}>
              {/* 半色调网点 */}
              <div className="absolute inset-0 pointer-events-none opacity-20"
                   style={{
                     backgroundImage: 'radial-gradient(circle, rgba(0, 0, 0, 0.2) 1px, transparent 1px)',
                     backgroundSize: '4px 4px'
                   }}></div>
              
              <div className="relative z-10 flex justify-between items-center font-mono">
                <div className="flex items-center gap-3">
                  <MapPin size={18} strokeWidth={2.5} className="text-zinc-700" />
                  <span className="text-xs uppercase tracking-wider font-bold text-zinc-700">
                    LOCATION
                  </span>
                </div>
                <span className="text-xs px-3 py-1.5 bg-blue-500 text-white font-bold border-2 border-blue-700 uppercase"
                      style={{ boxShadow: '2px 2px 0 rgba(0,0,0,0.3)' }}>
                  香港·深水埗
                </span>
              </div>
            </div>
            
            <div className="recycled-paper p-4 border-2 border-zinc-800 relative"
                 style={{ boxShadow: '3px 3px 0 rgba(0,0,0,0.2)' }}>
              {/* 半色调网点 */}
              <div className="absolute inset-0 pointer-events-none opacity-20"
                   style={{
                     backgroundImage: 'radial-gradient(circle, rgba(0, 0, 0, 0.2) 1px, transparent 1px)',
                     backgroundSize: '4px 4px'
                   }}></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-center flex-wrap gap-3">
                  <div className="flex items-center gap-3 font-mono">
                    <Star size={18} strokeWidth={2.5} className="text-zinc-700" />
                    <span className="text-xs uppercase tracking-wider font-bold text-zinc-700">
                      WANTED LEVEL
                    </span>
                  </div>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => {
                      const isFilled = star <= 2;
                      return (
                        <Star
                          key={star}
                          size={24}
                          strokeWidth={2.5}
                          fill={isFilled ? '#EF4444' : 'transparent'}
                          className="text-red-600"
                          style={{
                            filter: isFilled ? 'drop-shadow(0 0 6px #EF4444)' : 'none'
                          }}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
