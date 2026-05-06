'use client';
import { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import TopicPanel from '@/components/TopicPanel';
import ScrollToTop from '@/components/ScrollToTop';
import Footer from '@/components/Footer';


export default function Home() {
  const [currentTopic, setCurrentTopic] = useState('html');
  const [activeTab, setActiveTab] = useState('learn');
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setDarkMode(false);
    }
    setMounted(true);
  }, []);

  const toggleDark = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setDarkMode(true);
    }
  };

  const handleTopicChange = (topic) => {
    setCurrentTopic(topic);
    setActiveTab('learn');
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-300 flex flex-col">
      <div className="flex flex-1">
        <Sidebar currentTopic={currentTopic} setCurrentTopic={handleTopicChange} darkMode={darkMode} />
        <main className="flex-1 min-w-0 flex flex-col">
          <div className="sticky top-0 z-10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 px-4 py-3 flex justify-between items-center">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {currentTopic.toUpperCase()} - {activeTab === 'learn' ? 'Learning' : activeTab === 'interview' ? 'Interview Q&A' : activeTab === 'problems' ? 'Problem Solving' : 'Practice Questions'}
            </div>
            <button
              onClick={toggleDark}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
              aria-label="Toggle dark mode"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
          <TopicPanel 
            key={currentTopic}
            topic={currentTopic} 
            activeTab={activeTab} 
            setActiveTab={setActiveTab}
            darkMode={darkMode}
          />
          <Footer />
        </main>
      </div>
      <ScrollToTop />
    </div>
  );
}