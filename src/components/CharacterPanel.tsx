import React from 'react';
import { User, MapPin, Star } from 'lucide-react';

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
    <div className="comic-panel angled-right h-[85vh] flex flex-col relative overflow-hidden"
         style={{ '--panel-bg': '#FFFFFF' } as React.CSSProperties}>
      
      {/* 曲别针装饰 */}
      <div className="paperclip"></div>
      
      {/* SFX装饰 */}
      <div className="absolute top-8 right-8 z-20 sfx-burst pointer-events-none"
           style={{ 
             '--sfx-bg': '#A3E635',
             '--sfx-color': '#000000',
             '--sfx-rotation': '8deg',
             fontSize: '1.5rem'
           } as React.CSSProperties}>
        POW!
      </div>
      
      {/* 面板内容 */}
      <div className="comic-panel-content flex flex-col h-full relative z-10">
        {/* 顶部标题栏 */}
        <div className="p-6 pb-5 border-b-4 border-black halftone-dots">
          <div className="flex items-center gap-4 mb-4">
            {/* 图标容器 */}
            <div className="p-3 border-4 border-black"
                 style={{ 
                   background: '#A3E635',
                   boxShadow: '5px 5px 0 #000000'
                 }}>
              <User className="text-black" strokeWidth={3} size={32} />
            </div>
            
            <h2 className="comic-title text-5xl"
                style={{ '--title-color': '#A3E635', color: '#A3E635' } as React.CSSProperties}>
              ENTITY FOCUS
            </h2>
          </div>
          
          <p className="text-sm uppercase tracking-widest text-black/80"
             style={{ fontFamily: 'Anton, sans-serif', fontWeight: 400 }}>
            目标档案 // TARGET FILE
          </p>
        </div>
        
        <div className="p-6 flex-1 overflow-y-auto comic-scroll diagonal-stripes"
             style={{ '--scroll-color': '#A3E635' } as React.CSSProperties}>
          
          {/* 拍立得照片风格角色图片 */}
          <div className="polaroid-photo mb-6"
               style={{ '--photo-rotation': '-4deg' } as React.CSSProperties}>
            <img 
              src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=600&h=600&fit=crop"
              alt="角色插画"
            />
            
            {/* 照片底部手写文字 */}
            <div className="absolute bottom-3 left-0 right-0 text-center typewriter-text"
                 style={{ 
                   fontSize: '1.5rem',
                   color: '#000000',
                   fontWeight: 400
                 }}>
              KIRA // #4782
            </div>
            
            {/* SFX星形装饰 */}
            <div className="absolute -top-6 -right-6 sfx-burst"
                 style={{ 
                   '--sfx-bg': '#FACC15',
                   '--sfx-color': '#000000',
                   '--sfx-rotation': '20deg',
                   fontSize: '2.5rem',
                   padding: '0.5rem 1rem'
                 } as React.CSSProperties}>
              ★
            </div>
            
            {/* 警告标签 */}
            <div className="absolute top-6 left-6 comic-badge"
                 style={{ 
                   '--badge-bg': '#EF4444',
                   '--badge-color': '#FFFFFF',
                   '--badge-rotation': '-12deg',
                   fontSize: '0.75rem'
                 } as React.CSSProperties}>
              DANGEROUS
            </div>
          </div>

          {/* 状态条 */}
          <div className="space-y-5 mb-6">
            {stats.map((stat) => {
              const percentage = (stat.value / stat.max) * 100;
              const isLow = percentage < 25;
              const displayColor = isLow ? '#EF4444' : stat.color;
              
              return (
                <div key={stat.name} 
                     className="comic-panel p-5 halftone-dots"
                     style={{ 
                       '--panel-bg': '#FFFFFF',
                       '--panel-rotation': '0deg'
                     } as React.CSSProperties}>
                  <div className="comic-panel-content">
                    <div className="mb-4 flex justify-between items-center flex-wrap gap-2">
                      <div className="flex items-center gap-3">
                        <span className="comic-title text-4xl" style={{ 
                          color: displayColor,
                          '--title-color': displayColor
                        } as React.CSSProperties}>
                          {stat.name}
                        </span>
                        <span className="text-sm uppercase tracking-wider opacity-70"
                              style={{ fontFamily: 'Anton, sans-serif', fontWeight: 400 }}>
                          {stat.label}
                        </span>
                      </div>
                      <span className="text-base px-4 py-2 border-3 border-black"
                            style={{ 
                              fontFamily: 'Bangers, cursive',
                              background: displayColor,
                              color: '#000000',
                              fontSize: '1.25rem'
                            }}>
                        {stat.value}/{stat.max}
                      </span>
                    </div>
                    <div className="comic-progress">
                      <div
                        className="comic-progress-bar"
                        style={{ 
                          width: `${percentage}%`,
                          '--progress-color': displayColor
                        } as React.CSSProperties}
                      ></div>
                    </div>
                    
                    {/* 低血量警告 */}
                    {isLow && (
                      <div className="mt-4 comic-badge text-sm text-center w-full shake"
                           style={{ 
                             '--badge-bg': '#EF4444',
                             '--badge-color': '#FFFFFF',
                             '--badge-rotation': '0deg'
                           } as React.CSSProperties}>
                        WARNING: CRITICAL
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* 信息卡片 - 笔记本纸风格 */}
          <div className="space-y-5">
            <div className="notebook-paper">
              <div className="flex justify-between items-center typewriter-text">
                <div className="flex items-center gap-3">
                  <MapPin size={20} strokeWidth={3} />
                  <span className="text-sm uppercase tracking-wider"
                        style={{ fontFamily: 'Anton, sans-serif', fontWeight: 700 }}>
                    LOCATION
                  </span>
                </div>
                <span className="comic-badge text-sm"
                      style={{ 
                        '--badge-bg': '#3B82F6',
                        '--badge-color': '#FFFFFF',
                        '--badge-rotation': '0deg'
                      } as React.CSSProperties}>
                  香港·深水埗
                </span>
              </div>
              
              {/* 手写圈注装饰 */}
              <div className="handwritten-circle"
                   style={{ 
                     top: '5px',
                     right: '30px',
                     width: '120px',
                     height: '60px'
                   }}></div>
            </div>
            
            <div className="comic-panel p-5 halftone-dots"
                 style={{ 
                   '--panel-bg': '#FFFFFF',
                   '--panel-rotation': '1deg'
                 } as React.CSSProperties}>
              <div className="comic-panel-content">
                <div className="flex justify-between items-center flex-wrap gap-3">
                  <div className="flex items-center gap-3">
                    <Star size={20} strokeWidth={3} />
                    <span className="text-sm uppercase tracking-wider"
                          style={{ fontFamily: 'Anton, sans-serif', fontWeight: 700 }}>
                      WANTED LEVEL
                    </span>
                  </div>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => {
                      const isFilled = star <= 2;
                      return (
                        <div
                          key={star}
                          className="relative"
                          style={{
                            width: '28px',
                            height: '28px'
                          }}
                        >
                          <Star
                            size={28}
                            strokeWidth={3}
                            fill={isFilled ? '#EF4444' : '#FFFFFF'}
                            className="text-black"
                            style={{
                              filter: isFilled ? 'drop-shadow(0 0 8px #EF4444)' : 'none'
                            }}
                          />
                        </div>
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
