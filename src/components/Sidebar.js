// src/components/Sidebar.js (Updated with new technologies)
'use client';
import { topics } from '@/data';
import { useState, useEffect } from 'react';

export default function Sidebar({ currentTopic, setCurrentTopic }) {
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth > 768) {
        setSidebarOpen(false);
      }
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  const groupedTopics = {
    '🎨 Frontend': ['html', 'css', 'javascript', 'reactjs', 'nextjs', 'tailwind', 'bootstrap', 'typescript'],
    '⚙️ Backend': ['python', 'nodejs', 'mysql', 'git'],
    '📦 CMS & Others': ['wordpress', 'woocommerce', 'redux']
  };

  const getTopicIcon = (key) => {
    const icons = {
      html: '🌐', css: '🎨', javascript: '🟨', python: '🐍',
      nodejs: '🚀', reactjs: '⚛️', nextjs: '▲', git: '🐙',
      wordpress: '📝', woocommerce: '🛒', redux: '🔄',
      bootstrap: '🧩', typescript: '📘', tailwind: '💨', mysql: '🐬'
    };
    return icons[key] || '📚';
  };

  const getTopicColor = (key) => {
    const colors = {
      html: 'hover:bg-orange-50 dark:hover:bg-orange-950/30',
      css: 'hover:bg-blue-50 dark:hover:bg-blue-950/30',
      javascript: 'hover:bg-yellow-50 dark:hover:bg-yellow-950/30',
      python: 'hover:bg-green-50 dark:hover:bg-green-950/30',
      nodejs: 'hover:bg-emerald-50 dark:hover:bg-emerald-950/30',
      reactjs: 'hover:bg-cyan-50 dark:hover:bg-cyan-950/30',
      nextjs: 'hover:bg-gray-100 dark:hover:bg-gray-800',
      git: 'hover:bg-red-50 dark:hover:bg-red-950/30',
      wordpress: 'hover:bg-blue-50 dark:hover:bg-blue-950/30',
      woocommerce: 'hover:bg-purple-50 dark:hover:bg-purple-950/30',
      redux: 'hover:bg-violet-50 dark:hover:bg-violet-950/30',
      bootstrap: 'hover:bg-indigo-50 dark:hover:bg-indigo-950/30',
      typescript: 'hover:bg-blue-50 dark:hover:bg-blue-950/30',
      tailwind: 'hover:bg-teal-50 dark:hover:bg-teal-950/30',
      mysql: 'hover:bg-orange-50 dark:hover:bg-orange-950/30'
    };
    return colors[key] || 'hover:bg-gray-100 dark:hover:bg-gray-800';
  };

  return (
    <>
      {isMobile && (
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-50 p-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg lg:hidden text-sm"
        >
          {sidebarOpen ? '✕' : '☰'}
        </button>
      )}

      {isMobile && sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={closeSidebar} />
      )}

      <aside
        className={`
          bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950
          border-r border-gray-200 dark:border-gray-800
          flex flex-col h-screen overflow-y-auto transition-all duration-300
          ${isMobile 
            ? `fixed top-0 left-0 z-50 w-72 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`
            : 'sticky top-0 w-72'
          }
        `}
      >
        <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex-shrink-0 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white text-sm font-bold">CV</span>
              </div>
              <div>
                <h1 className="text-base font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  CodeMaster Hub
                </h1>
                <p className="text-[10px] text-gray-500 dark:text-gray-400">Learn · Interview · Solve</p>
              </div>
            </div>
            {isMobile && (
              <button onClick={closeSidebar} className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto p-3">
          <div className="space-y-5">
            {Object.entries(groupedTopics).map(([category, topicKeys]) => (
              <div key={category}>
                <div className="flex items-center gap-1.5 px-2 mb-2">
                  <div className="w-0.5 h-3 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"></div>
                  <h3 className="text-[10px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    {category}
                  </h3>
                </div>
                <div className="space-y-1">
                  {topicKeys.map((key) => {
                    const isActive = currentTopic === key;
                    const topicName = topics[key]?.name || key;
                    const icon = getTopicIcon(key);
                    
                    return (
                      <button
                        key={key}
                        onClick={() => {
                          setCurrentTopic(key);
                          if (isMobile) closeSidebar();
                        }}
                        className={`w-full text-left px-2 py-2 rounded-lg flex items-center gap-2 transition-all group ${
                          isActive 
                            ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md' 
                            : `${getTopicColor(key)} text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800`
                        }`}
                      >
                        <div className={`w-6 h-6 rounded-md flex items-center justify-center text-sm transition-all ${
                          isActive 
                            ? 'bg-white/20' 
                            : 'bg-gray-100 dark:bg-gray-800 group-hover:scale-110'
                        }`}>
                          {icon}
                        </div>
                        <span className="font-medium text-xs flex-1 truncate">
                          {topicName}
                        </span>
                        {isActive && (
                          <div className="w-1 h-1 bg-white rounded-full animate-pulse"></div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </nav>

        <div className="p-3 border-t border-gray-200 dark:border-gray-800 flex-shrink-0">
          <div className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-lg p-2">
            <div className="flex justify-center gap-1.5 text-sm mb-1">
              <span>🚀</span>
              <span>💻</span>
              <span>🎯</span>
              <span>⭐</span>
            </div>
            <p className="text-[10px] text-gray-600 dark:text-gray-400 font-medium">
              15+ Technologies<br />Basic → Advanced
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}