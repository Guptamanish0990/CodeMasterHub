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

  useEffect(() => {
    document.documentElement.classList.remove('dark');
    localStorage.removeItem('theme');
  }, []);

  const handleTopicChange = (topic) => {
    setCurrentTopic(topic);
    setActiveTab('learn');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-300 flex flex-col">
      <div className="flex flex-1">
        <Sidebar currentTopic={currentTopic} setCurrentTopic={handleTopicChange} darkMode={false} onToggleDark={() => {}} />
        <main className="flex-1 min-w-0 flex flex-col">
          <div className="sticky top-0 z-10 bg-white/80 border-b border-gray-200 px-3 py-3 sm:px-4">
            <div className="flex items-center justify-between gap-3">
              <div className="w-10 shrink-0" aria-hidden="true" />
              <div className="flex-1 text-center text-[11px] sm:text-sm font-medium tracking-wide text-gray-600 truncate px-2">
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
            darkMode={false}
            onToggleDark={() => {}}
          />
          <Footer />
        </main>
      </div>
      <ScrollToTop />
    </div>
  );
}