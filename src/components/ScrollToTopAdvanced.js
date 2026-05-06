'use client';
import { useState, useEffect } from 'react';

export default function ScrollToTopAdvanced() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.scrollY;
      setIsVisible(scrolled > 300);
      
      // Calculate scroll progress percentage
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolledProgress = (winScroll / height) * 100;
      setScrollProgress(scrolledProgress);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="fixed bottom-8 right-8 z-50 group"
          aria-label="Scroll to top"
        >
          {/* 3D Card Container */}
          <div className="relative perspective-1000">
            {/* Progress Ring Background */}
            <svg className="absolute w-16 h-16 -top-1 -left-1 transform rotate-[-90deg]">
              <circle
                cx="34"
                cy="34"
                r="30"
                fill="none"
                stroke="rgba(59,130,246,0.2)"
                strokeWidth="3"
              />
              <circle
                cx="34"
                cy="34"
                r="30"
                fill="none"
                stroke="url(#progressGradient)"
                strokeWidth="3"
                strokeDasharray={`${(scrollProgress / 100) * 188.5} 188.5`}
                strokeLinecap="round"
                className="transition-all duration-300"
              />
              <defs>
                <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </svg>

            {/* 3D Button Body with Transform */}
            <div
              className={`
                relative w-14 h-14 rounded-2xl
                bg-gradient-to-br from-blue-500 to-purple-600
                flex items-center justify-center
                transition-all duration-500 ease-out
                transform-gpu
                ${isHovered 
                  ? 'scale-110 -translate-y-2 rotate-3 shadow-2xl shadow-blue-500/50' 
                  : 'scale-100 translate-y-0 rotate-0 shadow-lg'
                }
              `}
              style={{
                transformStyle: 'preserve-3d',
                transform: isHovered ? 'rotateX(10deg) rotateY(5deg)' : 'rotateX(0deg) rotateY(0deg)'
              }}
            >
              {/* 3D Top Face */}
              <div 
                className={`
                  absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-400 to-blue-300
                  transition-all duration-500
                  ${isHovered ? 'opacity-0' : 'opacity-100'}
                `}
                style={{ transform: 'translateZ(-5px)' }}
              ></div>
              
              {/* 3D Bottom Face (Shadow) */}
              <div 
                className="absolute inset-0 rounded-2xl bg-blue-900/50 blur-md"
                style={{ transform: 'translateZ(-10px)' }}
              ></div>
              
              {/* Inner Glossy Effect */}
              <div className="absolute inset-1 rounded-xl bg-white/20 backdrop-blur-sm"></div>
              
              {/* Arrow Icon with Animation */}
              <svg 
                className={`
                  w-6 h-6 text-white relative z-10 transition-all duration-300
                  ${isHovered ? 'animate-bounce' : ''}
                `}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2.5} 
                  d="M5 10l7-7m0 0l7 7m-7-7v18" 
                />
              </svg>
              
              {/* Shine Effect on Hover */}
              <div 
                className={`
                  absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/0 via-white/30 to-white/0
                  transition-all duration-700
                  ${isHovered ? 'opacity-100' : 'opacity-0'}
                `}
                style={{
                  transform: 'skewX(-20deg) translateX(-100%)',
                  transition: 'transform 0.5s ease'
                }}
              ></div>
              
              {/* Floating Particles */}
              {isHovered && (
                <>
                  <div className="absolute -top-3 -right-2 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                  <div className="absolute -bottom-2 -left-2 w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse"></div>
                  <div className="absolute top-0 left-1/2 w-1 h-1 bg-white rounded-full animate-ping"></div>
                </>
              )}
            </div>
            
            {/* Neon Glow Text */}
            <div className={`
              absolute -top-12 left-1/2 transform -translate-x-1/2 
              px-3 py-1.5 bg-gray-900/90 backdrop-blur-sm text-white text-xs rounded-lg whitespace-nowrap
              border border-blue-500/30 shadow-lg
              transition-all duration-300
              ${isHovered ? 'opacity-100 visible -translate-y-1' : 'opacity-0 invisible translate-y-0'}
            `}>
              <span className="flex items-center gap-1">
                <span>↑</span>
                <span>Back to Top</span>
                <span className="text-blue-400">{Math.round(scrollProgress)}%</span>
              </span>
              <div className="absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-900/90 rotate-45 border-r border-b border-blue-500/30"></div>
            </div>
          </div>
        </button>
      )}
    </>
  );
}