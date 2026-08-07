// /src/app/page.js (Old Code - Original)

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

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const storedTheme = window.localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialDarkMode = storedTheme ? storedTheme === 'dark' : systemPrefersDark;

    setDarkMode(initialDarkMode);
    document.documentElement.classList.toggle('dark', initialDarkMode);
    document.documentElement.style.colorScheme = initialDarkMode ? 'dark' : 'light';
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    document.documentElement.classList.toggle('dark', darkMode);
    document.documentElement.style.colorScheme = darkMode ? 'dark' : 'light';
    window.localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const handleTopicChange = (topic) => {
    setCurrentTopic(topic);
    setActiveTab('learn');
  };

  const handleToggleDark = (value) => {
    setDarkMode(value);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-300 flex flex-col">
      <div className="flex flex-1">
        <Sidebar currentTopic={currentTopic} setCurrentTopic={handleTopicChange} darkMode={darkMode} onToggleDark={handleToggleDark} />
        <main className="flex-1 min-w-0 flex flex-col">
          <div className="sticky top-0 z-10 bg-white/80 dark:bg-slate-900/80 border-b border-gray-200 dark:border-gray-800 px-3 py-3 sm:px-4">
            <div className="flex items-center justify-between gap-3">
              <div className="w-10 shrink-0" aria-hidden="true" />
              <div className="flex-1 text-center text-[11px] sm:text-sm font-medium tracking-wide text-gray-600 dark:text-gray-300 truncate px-2">
                {currentTopic.toUpperCase()} - {activeTab === 'learn' ? 'Learning' : activeTab === 'interview' ? 'Interview Q&A' : activeTab === 'problems' ? 'Problem Solving' : 'Practice Questions'}
              </div>
              <div className="w-9 shrink-0" aria-hidden="true" />
            </div>
          </div>
          <TopicPanel
            key={currentTopic}
            topic={currentTopic}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            darkMode={darkMode}
            onToggleDark={handleToggleDark}
          />
          <Footer />
        </main>
      </div>
      <ScrollToTop />
    </div>
  );
}