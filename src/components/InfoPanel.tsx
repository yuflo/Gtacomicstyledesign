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
    bg: '#71717A',
    color: '#FFFFFF',
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
    <div className="h-full flex flex-col relative overflow-hidden cyber-glass neon-border-fuchsia">
      {/* 优化1: 赛博玻璃 + 霓虹边框（Slick） */}
      
      {/* 碳纤维纹理叠加 */}
      <div className="absolute inset-0 carbon-fiber opacity-20 pointer-events-none"></div>
      
      {/* 面板内容 */}
      <div className="relative z-10 flex flex-col h-full">
        {/* 顶部标题栏 */}
        <div className="p-6 pb-5 border-b border-white/10">
          <div className="flex items-center gap-4 mb-4">
            {/* 图标容器 */}
            <div className="p-3 bg-fuchsia-500/20 border border-fuchsia-500/50 backdrop-blur-sm"
                 style={{ boxShadow: '0 0 20px rgba(217, 70, 239, 0.3)' }}>
              <Radio className="text-fuchsia-400" strokeWidth={2.5} size={28} />
            </div>
            
            {/* 优化4: Orbitron标题（Slick） */}
            <h2 className="neon-glow-fuchsia text-4xl uppercase tracking-tight"
                style={{ 
                  fontFamily: 'Orbitron, sans-serif',
                  fontWeight: 800
                }}>
              WORLD FEED
            </h2>
          </div>
          
          <p className="text-xs uppercase tracking-widest text-fuchsia-300/60 font-mono">
            实时信息流 // LIVE BROADCAST
          </p>
        </div>
        
        {/* 信息流内容 */}
        <div className="space-y-4 overflow-y-auto p-6 flex-1"
             style={{
               scrollbarWidth: 'thin',
               scrollbarColor: '#D946EF #18181B'
             }}>
          {infoItems.map((item, index) => {
            const badge = badgeConfig[item.type];
            const Icon = badge.icon;
            
            return (
              <div key={index} 
                   className="recycled-paper p-4 relative overflow-hidden"
                   style={{
                     border: item.type === 'alert' ? '2px solid #EF4444' : '1px solid #3F3F46',
                     boxShadow: item.type === 'alert' 
                       ? '0 0 20px rgba(239, 68, 68, 0.3), inset 0 0 30px rgba(239, 68, 68, 0.1)' 
                       : '0 2px 8px rgba(0, 0, 0, 0.3)'
                   }}>
                {/* 优化3: Grit质感 - 再生纸 */}
                
                {/* 半色调网点叠加 */}
                <div className="absolute inset-0 pointer-events-none opacity-30"
                     style={{
                       backgroundImage: 'radial-gradient(circle, rgba(0, 0, 0, 0.2) 1px, transparent 1px)',
                       backgroundSize: '4px 4px'
                     }}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-3 gap-3 flex-wrap">
                    {/* 优化4: Mono字体标签（Grit） */}
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs uppercase tracking-wider font-mono font-bold border-2"
                          style={{ 
                            background: badge.bg,
                            color: badge.color,
                            borderColor: badge.bg,
                            boxShadow: '2px 2px 0 rgba(0,0,0,0.3)'
                          }}>
                      <Icon size={14} strokeWidth={3} />
                      {badge.label}
                    </span>
                    <span className="text-xs px-3 py-1.5 bg-black text-white font-mono font-bold border border-black"
                          style={{ boxShadow: '2px 2px 0 rgba(0,0,0,0.2)' }}>
                      {item.time}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-zinc-800"
                     style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}>
                    {item.content}
                  </p>
                  
                  {/* 危险警报 */}
                  {item.type === 'alert' && (
                    <div className="absolute -top-2 -right-2 bg-red-500 text-white px-2 py-1 font-mono text-xs font-bold animate-pulse"
                         style={{ 
                           border: '2px solid #FFF',
                           boxShadow: '0 0 15px rgba(239, 68, 68, 0.8)'
                         }}>
                      !
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
