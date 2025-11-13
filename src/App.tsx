import React, { useState } from 'react';
import { InfoPanel } from './components/InfoPanel';
import { ChatBox } from './components/ChatBox';
import { CharacterPanel } from './components/CharacterPanel';

export default function App() {
  const [chatInput, setChatInput] = useState('');

  return (
    <div className="min-h-screen relative p-4 md:p-8 overflow-hidden">
      {/* 第一层：基底色 #1A1A1A */}
      <div className="fixed inset-0 -z-30"
           style={{ background: '#1A1A1A' }}></div>
      
      {/* 第二层：半色调网点纹理 */}
      <div className="fixed inset-0 -z-20"
           style={{
             backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.08) 1px, transparent 1px)',
             backgroundSize: '4px 4px'
           }}></div>
      
      {/* 第三层：涂鸦喷漆装饰 - 粉色 fuchsia-500 */}
      <div className="graffiti-splash fixed -z-10"
           style={{ 
             top: '8%',
             left: '3%',
             width: '400px',
             height: '400px',
             background: 'radial-gradient(ellipse at center, #D946EF 0%, transparent 65%)',
             transform: 'rotate(-25deg)',
             filter: 'blur(60px)',
             opacity: 0.6
           }}></div>
      
      {/* 涂鸦喷漆装饰 - 青色 cyan-400 */}
      <div className="graffiti-splash fixed -z-10"
           style={{ 
             top: '35%',
             right: '5%',
             width: '450px',
             height: '450px',
             background: 'radial-gradient(ellipse at center, #22D3EE 0%, transparent 65%)',
             transform: 'rotate(40deg)',
             filter: 'blur(70px)',
             opacity: 0.5
           }}></div>
      
      {/* 涂鸦喷漆装饰 - 绿色 lime-400 */}
      <div className="graffiti-splash fixed -z-10"
           style={{ 
             bottom: '12%',
             left: '12%',
             width: '380px',
             height: '380px',
             background: 'radial-gradient(ellipse at center, #A3E635 0%, transparent 65%)',
             transform: 'rotate(55deg)',
             filter: 'blur(65px)',
             opacity: 0.55
           }}></div>
      
      {/* 涂鸦喷漆装饰 - 黄色 */}
      <div className="graffiti-splash fixed -z-10"
           style={{ 
             bottom: '8%',
             right: '8%',
             width: '420px',
             height: '420px',
             background: 'radial-gradient(ellipse at center, #FACC15 0%, transparent 65%)',
             transform: 'rotate(-15deg)',
             filter: 'blur(55px)',
             opacity: 0.5
           }}></div>
      
      {/* 大型涂鸦文字背景装饰 - BOOM */}
      <div className="fixed pointer-events-none opacity-5 -z-10"
           style={{ 
             top: '15%',
             left: '8%',
             fontFamily: 'Bangers, cursive',
             fontSize: '14rem', 
             color: '#D946EF',
             transform: 'rotate(-18deg)',
             WebkitTextStroke: '8px #000',
             paintOrder: 'stroke fill'
           }}>
        BOOM
      </div>
      
      {/* 大型涂鸦文字背景装饰 - BANG */}
      <div className="fixed pointer-events-none opacity-5 -z-10"
           style={{ 
             bottom: '18%',
             right: '10%',
             fontFamily: 'Bangers, cursive',
             fontSize: '12rem', 
             color: '#22D3EE',
             transform: 'rotate(15deg)',
             WebkitTextStroke: '8px #000',
             paintOrder: 'stroke fill'
           }}>
        BANG
      </div>
      
      {/* 大型涂鸦文字背景装饰 - POW */}
      <div className="fixed pointer-events-none opacity-5 -z-10"
           style={{ 
             top: '50%',
             left: '50%',
             transform: 'translate(-50%, -50%) rotate(-8deg)',
             fontFamily: 'Bangers, cursive',
             fontSize: '16rem', 
             color: '#A3E635',
             WebkitTextStroke: '10px #000',
             paintOrder: 'stroke fill'
           }}>
        POW
      </div>
      
      {/* 顶部标题栏 */}
      <div className="max-w-7xl mx-auto mb-8 relative comic-panel"
           style={{ 
             padding: '2.5rem',
             '--panel-bg': '#FACC15',
             '--panel-rotation': '-1deg'
           } as React.CSSProperties}>
        
        {/* 胶带装饰 */}
        <div className="tape" 
             style={{ 
               top: '-15px',
               left: '25%',
               transform: 'translateX(-50%) rotate(-3deg)'
             }}></div>
        <div className="tape" 
             style={{ 
               top: '-15px',
               right: '25%',
               transform: 'translateX(50%) rotate(2deg)'
             }}></div>
        
        <div className="comic-panel-content">
          <div className="flex items-center justify-between relative z-10 flex-wrap gap-6">
            <div>
              <h1 className="comic-title text-6xl mb-3"
                  style={{ '--title-color': '#000000', color: '#000000' } as React.CSSProperties}>
                GRAND THEFT AUTO
              </h1>
              <p className="text-base tracking-widest uppercase"
                 style={{ fontFamily: 'Anton, sans-serif', fontWeight: 400 }}>
                CRIME SIMULATOR // 犯罪模拟器
              </p>
            </div>
            
            {/* 右侧SFX */}
            <div className="sfx-burst"
                 style={{ 
                   '--sfx-bg': '#EF4444',
                   '--sfx-color': '#FFFFFF',
                   '--sfx-rotation': '12deg',
                   fontSize: '2rem'
                 } as React.CSSProperties}>
              ONLINE!
            </div>
          </div>
        </div>
        
        {/* 半色调网点 */}
        <div className="absolute inset-0 pointer-events-none"
             style={{
               backgroundImage: 'radial-gradient(circle, rgba(0, 0, 0, 0.1) 1px, transparent 1px)',
               backgroundSize: '4px 4px',
               opacity: 0.5
             }}></div>
      </div>
      
      {/* 三面板布局 */}
      <div className="grid w-full max-w-7xl mx-auto grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        <InfoPanel />
        <ChatBox chatInput={chatInput} setChatInput={setChatInput} />
        <CharacterPanel />
      </div>
      
      {/* 装饰性涂鸦元素 - 圆圈 */}
      <div className="fixed pointer-events-none -z-10"
           style={{
             top: '28%',
             left: '6%',
             width: '80px',
             height: '80px',
             border: '5px solid #D946EF',
             borderRadius: '50%',
             transform: 'rotate(30deg)',
             opacity: 0.4
           }}></div>
      
      {/* 装饰性涂鸦元素 - 方块 */}
      <div className="fixed pointer-events-none -z-10"
           style={{
             bottom: '22%',
             right: '10%',
             width: '100px',
             height: '100px',
             border: '6px solid #A3E635',
             transform: 'rotate(-25deg)',
             opacity: 0.5
           }}></div>
      
      {/* 装饰性斜线 */}
      <div className="fixed pointer-events-none -z-10"
           style={{
             top: '45%',
             left: '18%',
             width: '200px',
             height: '6px',
             background: '#22D3EE',
             transform: 'rotate(40deg)',
             opacity: 0.35,
             boxShadow: '3px 3px 0 #000'
           }}></div>
      
      <div className="fixed pointer-events-none -z-10"
           style={{
             bottom: '28%',
             right: '20%',
             width: '150px',
             height: '6px',
             background: '#D946EF',
             transform: 'rotate(-50deg)',
             opacity: 0.35,
             boxShadow: '3px 3px 0 #000'
           }}></div>
      
      {/* 装饰性星星 */}
      <div className="fixed pointer-events-none -z-10"
           style={{
             top: '18%',
             right: '15%',
             fontFamily: 'Bangers, cursive',
             fontSize: '4rem',
             color: '#FACC15',
             WebkitTextStroke: '3px #000',
             paintOrder: 'stroke fill',
             opacity: 0.6,
             transform: 'rotate(15deg)'
           }}>
        ★
      </div>
      
      <div className="fixed pointer-events-none -z-10"
           style={{
             bottom: '35%',
             left: '25%',
             fontFamily: 'Bangers, cursive',
             fontSize: '3rem',
             color: '#EF4444',
             WebkitTextStroke: '3px #000',
             paintOrder: 'stroke fill',
             opacity: 0.5,
             transform: 'rotate(-20deg)'
           }}>
        ★
      </div>
    </div>
  );
}
