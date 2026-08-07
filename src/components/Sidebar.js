// src/components/Sidebar.js
'use client';
import { topics } from '@/data';
import { useState, useEffect } from 'react';
// 👇 React Icons imports
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import { IoLogoInstagram } from 'react-icons/io';

export default function Sidebar({ currentTopic, setCurrentTopic, darkMode = false, onToggleDark = () => { } }) {
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [imageErrors, setImageErrors] = useState({});

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
    '⚙️ Backend': ['python', 'nodejs', 'mysql', 'git', 'cpp', 'java', 'go', 'rust', 'php', 'ruby', 'csharp', 'swift', 'kotlin', 'dart'],
    '📦 CMS & Others': ['wordpress', 'woocommerce', 'redux']
  };

  // 👇 Ab socialLinks mein icon component store kar rahe hain
  const socialLinks = [
    { href: 'https://guptamanish0990.github.io/Manish_Gupta/#/', label: 'Portfolio', icon: '💼' }, // Portfolio emoji rakh sakte hain ya koi icon daalein
    { href: 'https://github.com/Guptamanish0990', label: 'GitHub', icon: FaGithub },
    { href: 'https://www.instagram.com/0990_manish', label: 'Instagram', icon: IoLogoInstagram },
    { href: 'https://linkedin.com/in/manish-gupta-0990', label: 'LinkedIn', icon: FaLinkedin },
    { href: 'mailto:websitedeveloper0990@gmail.com', label: 'Email', icon: FaEnvelope }
  ];

  const getIconUrl = (key) => {
    const icons = {
      html: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
      css: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
      javascript: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
      python: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
      nodejs: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
      reactjs: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
      nextjs: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
      git: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
      wordpress: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg',
      woocommerce: 'https://cdn.simpleicons.org/woocommerce/96588a',
      redux: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg',
      bootstrap: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
      typescript: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
      tailwind: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
      mysql: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
      cpp: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg',
      java: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
      go: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg',
      rust: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-plain.svg',
      php: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
      ruby: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg',
      csharp: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg',
      swift: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg',
      kotlin: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg',
      dart: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg'
    };
    return icons[key] || null;
  };

  const handleImageError = (key) => {
    setImageErrors(prev => ({ ...prev, [key]: true }));
  };

  const getFallbackIcon = (key) => {
    const fallbacks = {
      html: '🌐', css: '🎨', javascript: '🟨', python: '🐍',
      nodejs: '🚀', reactjs: '⚛️', nextjs: '▲', git: '🐙',
      wordpress: '📝', woocommerce: '🛒', redux: '🔄',
      bootstrap: '🧩', typescript: '📘', tailwind: '💨', mysql: '🐬',
      cpp: '⚙️', java: '☕', go: '🐹', rust: '🦀', php: '🐘', ruby: '💎',
      csharp: '🎯', swift: '🛠️', kotlin: '📱', dart: '🎯'
    };
    return fallbacks[key] || '📚';
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
      mysql: 'hover:bg-orange-50 dark:hover:bg-orange-950/30',
      cpp: 'hover:bg-blue-50 dark:hover:bg-blue-950/30',
      java: 'hover:bg-red-50 dark:hover:bg-red-950/30',
      go: 'hover:bg-blue-50 dark:hover:bg-blue-950/30',
      rust: 'hover:bg-orange-50 dark:hover:bg-orange-950/30',
      php: 'hover:bg-indigo-50 dark:hover:bg-indigo-950/30',
      ruby: 'hover:bg-red-50 dark:hover:bg-red-950/30',
      csharp: 'hover:bg-green-50 dark:hover:bg-green-950/30',
      swift: 'hover:bg-orange-50 dark:hover:bg-orange-950/30',
      kotlin: 'hover:bg-purple-50 dark:hover:bg-purple-950/30',
      dart: 'hover:bg-blue-50 dark:hover:bg-blue-950/30'
    };
    return colors[key] || 'hover:bg-gray-100 dark:hover:bg-gray-800';
  };

  return (
    <>
      {isMobile && (
        <div className="fixed left-4 top-4 z-50 lg:hidden">
          <button
            onClick={toggleSidebar}
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg transition-all duration-300 hover:scale-105"
            aria-label={sidebarOpen ? 'Close menu' : 'Open menu'}
          >
            {/* 👇 Hamburger icon replaced with HiMenu / HiX */}
            {sidebarOpen ? (
              <HiX className="h-5 w-5" />
            ) : (
              <HiMenu className="h-5 w-5" />
            )}
          </button>
        </div>
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
          <div className="flex items-center justify-between gap-2">
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

            <div className="flex items-center gap-2">
              {isMobile && (
                <button onClick={closeSidebar} className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                  <HiX className="w-4 h-4 text-gray-500" /> {/* Close icon bhi replace kar diya */}
                </button>
              )}
            </div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto p-3">
          <div className="space-y-5">
            {Object.entries(groupedTopics).map(([category, topicKeys]) => (
              <div key={category}>
                <div className="flex items-center gap-1.5 px-2 mb-2">
                  <div className="w-0.5 h-3 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"></div>
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    {category}
                  </h3>
                </div>
                <div className="space-y-1">
                  {topicKeys.map((key) => {
                    const isActive = currentTopic === key;
                    const topicName = topics[key]?.name || key;
                    const iconUrl = getIconUrl(key);
                    const hasError = imageErrors[key];
                    const showFallback = !iconUrl || hasError;

                    return (
                      <button
                        key={key}
                        onClick={() => {
                          setCurrentTopic(key);
                          if (isMobile) closeSidebar();
                        }}
                        className={`w-full text-left px-2 py-2 rounded-lg flex items-center gap-2 transition-all group ${isActive
                            ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md'
                            : `${getTopicColor(key)} text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800`
                          }`}
                      >
                        <div className={`w-6 h-6 rounded-md flex items-center justify-center transition-all ${isActive
                            ? 'bg-white/20'
                            : 'bg-gray-100 dark:bg-gray-800 group-hover:scale-110'
                          }`}>
                          {showFallback ? (
                            <span className="text-sm">{getFallbackIcon(key)}</span>
                          ) : (
                            <img
                              src={iconUrl}
                              alt={key}
                              className="w-5 h-5 object-contain"
                              style={{ filter: isActive ? 'brightness(0) invert(1)' : 'none' }}
                              onError={() => handleImageError(key)}
                            />
                          )}
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
          <div className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-3 shadow-inner">
            <div className="flex justify-center items-center gap-2 mb-2 flex-wrap">
              {socialLinks.map((link) => {
                const IconComponent = link.icon; // ab yeh ek component hai (except Portfolio wala)
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex items-center gap-1.5 rounded-full border border-white/70 bg-white/85 px-2.5 py-1.5 text-[10px] font-semibold text-gray-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md dark:bg-gray-700/80 dark:text-gray-200"
                    title={link.label}
                    aria-label={link.label}
                  >
                    {/* 👇 Agar IconComponent ek React component hai toh render karo, warna emoji */}
                    {typeof IconComponent === 'function' ? (
                      <IconComponent className="text-base leading-none" />
                    ) : (
                      <span className="text-base leading-none">{IconComponent}</span> // Portfolio ke liye emoji
                    )}
                    <span>{link.label}</span>
                  </a>
                );
              })}
            </div>
            <p className="text-[10px] text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
              25+ Technologies<br />Basic → Advanced
            </p>
            <div className="mt-2 border-t border-gray-200/70 pt-2 text-[10px] text-gray-600 dark:border-gray-700 dark:text-gray-400">
              <span>Built by </span>
              <a
                href="https://github.com/Guptamanish0990/CodeMasterHub"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 underline-offset-2 hover:underline dark:text-blue-400"
              >
                Manish Gupta
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}