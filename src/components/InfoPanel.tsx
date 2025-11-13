import React from 'react';
import { Radio, AlertTriangle, Users, DollarSign, MessageSquare } from 'lucide-react';

interface InfoItem {
  type: 'alert' | 'rumor' | 'social' | 'trade';
  time: string;
  content: string;
}

const infoItems: InfoItem[] = [
  {
    type: 'alert',
    time: '23:41',
    content: 'Code 5 检测到非法义体改装，锁定嫌疑人位置。'
  },
  {
    type: 'rumor',
    time: '23:38',
    content: '听说"红星社"因为货物起了冲突，最近不太平。'
  },
  {
    type: 'social',
    time: '23:30',
    content: '来自 [K]: 你上次要的货到了。'
  },
  {
    type: 'trade',
    time: '23:25',
    content: '[暗网] 有人悬赏寻找一批价值三十万的"特殊货物"。'
  },
  {
    type: 'alert',
    time: '23:20',
    content: '附近区域检测到高能量波动，建议保持警惕。'
  },
  {
    type: 'social',
    time: '23:15',
    content: '来自 [肥棠]: 兄弟，晚上有空吗？有个活。'
  }
];

const badgeConfig = {
  alert: { 
    label: 'ALERT',
    bg: '#EF4444',
    color: '#FFFFFF',
    icon: AlertTriangle
  },
  rumor: { 
    label: 'RUMOR',
    bg: '#FFFFFF',
    color: '#000000',
    icon: MessageSquare
  },
  social: { 
    label: 'SOCIAL',
    bg: '#22D3EE',
    color: '#000000',
    icon: Users
  },
  trade: { 
    label: 'TRADE',
    bg: '#FACC15',
    color: '#000000',
    icon: DollarSign
  }
};

export function InfoPanel() {
  return (
    <div className="comic-panel angled-left h-[85vh] flex flex-col relative overflow-hidden"
         style={{ '--panel-bg': '#1E1B4B' } as React.CSSProperties}>
      
      {/* 曲别针装饰 */}
      <div className="paperclip"></div>
      
      {/* SFX装饰 */}
      <div className="absolute top-8 right-8 z-20 sfx-burst pointer-events-none"
           style={{ 
             '--sfx-bg': '#D946EF',
             '--sfx-color': '#FFFFFF',
             '--sfx-rotation': '12deg',
             fontSize: '1.5rem'
           } as React.CSSProperties}>
        LIVE!
      </div>
      
      {/* 面板内容 */}
      <div className="comic-panel-content flex flex-col h-full relative z-10">
        {/* 顶部标题栏 */}
        <div className="p-6 pb-5 border-b-4 border-black halftone-dots">
          <div className="flex items-center gap-4 mb-4">
            {/* 图标容器 */}
            <div className="p-3 border-4 border-black"
                 style={{ 
                   background: '#D946EF',
                   boxShadow: '5px 5px 0 #000000'
                 }}>
              <Radio className="text-white" strokeWidth={3} size={32} />
            </div>
            
            <h2 className="comic-title text-white text-5xl">
              WORLD FEED
            </h2>
          </div>
          
          <p className="text-sm uppercase tracking-widest text-white/90"
             style={{ fontFamily: 'Anton, sans-serif', fontWeight: 400 }}>
            实时信息流 // LIVE BROADCAST
          </p>
        </div>
        
        {/* 信息流内容 */}
        <div className="space-y-5 overflow-y-auto p-6 comic-scroll flex-1"
             style={{ '--scroll-color': '#D946EF' } as React.CSSProperties}>
          {infoItems.map((item, index) => {
            const badge = badgeConfig[item.type];
            const Icon = badge.icon;
            const rotation = (index % 2 === 0 ? 1 : -1) * (Math.random() * 1.5 + 0.5);
            
            return (
              <div key={index} 
                   className="comic-panel p-5 group halftone-dots"
                   style={{ 
                     '--panel-bg': '#FFFFFF',
                     '--panel-rotation': `${rotation}deg`
                   } as React.CSSProperties}>
                <div className="comic-panel-content">
                  <div className="flex items-center mb-4 gap-3 flex-wrap">
                    <span className="comic-badge text-sm"
                          style={{ 
                            '--badge-bg': badge.bg,
                            '--badge-color': badge.color,
                            '--badge-rotation': '0deg'
                          } as React.CSSProperties}>
                      <Icon size={16} strokeWidth={3} />
                      {badge.label}
                    </span>
                    <span className="text-sm px-3 py-1.5 border-3 border-black"
                          style={{ 
                            fontFamily: 'Bangers, cursive',
                            background: '#000000',
                            color: badge.bg,
                            fontSize: '1rem'
                          }}>
                      {item.time}
                    </span>
                  </div>
                  <p className="text-base leading-relaxed"
                     style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}>
                    {item.content}
                  </p>
                  
                  {/* 危险警报 */}
                  {item.type === 'alert' && (
                    <div className="absolute -top-2 -right-2 shake pointer-events-none">
                      <div className="sfx-burst"
                           style={{ 
                             '--sfx-bg': '#EF4444',
                             '--sfx-color': '#FFFFFF',
                             '--sfx-rotation': '25deg',
                             fontSize: '1.75rem',
                             padding: '0.5rem 0.75rem'
                           } as React.CSSProperties}>
                        !
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
