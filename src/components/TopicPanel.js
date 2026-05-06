'use client';
import { useState, useEffect } from 'react';
import { learningData, interviewData, problemsData, practiceData } from '@/data';
import TechIcons from './TechIcons';

export default function TopicPanel({ topic, activeTab, setActiveTab }) {
  const [expandedCard, setExpandedCard] = useState(null);
  const [activeLevel, setActiveLevel] = useState('basic');
  const [expLevel, setExpLevel] = useState('fresher');
  const [expandedQuestion, setExpandedQuestion] = useState(null);
  const [openLineByLine, setOpenLineByLine] = useState(null);
  const [copied, setCopied] = useState(false);
  const [selectedProblem, setSelectedProblem] = useState(null);
  const [showSolutionModal, setShowSolutionModal] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Fix hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  // Get data for current topic
  const learning = learningData[topic];
  const interview = interviewData[topic];
  const problems = problemsData[topic];
  const practice = practiceData[topic];

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const toggleQuestion = (id) => {
    setExpandedQuestion(expandedQuestion === id ? null : id);
  };

  const copyToClipboard = async (text, e) => {
    e.stopPropagation();
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const openSolution = (problem, e) => {
    e.stopPropagation();
    setSelectedProblem(problem);
    setShowSolutionModal(true);
  };

  const closeSolution = () => {
    setShowSolutionModal(false);
    setSelectedProblem(null);
  };

  // Get learning data based on level
  const getLearningData = () => {
    if (!learning) return [];
    if (activeLevel === 'basic') {
      return learning.basic?.topics || learning.basic || [];
    } else {
      return learning.advanced?.topics || learning.advanced || [];
    }
  };

  // Get interview data
  const getInterviewData = () => {
    if (!interview) return [];
    if (expLevel === 'fresher') {
      return interview.fresher || [];
    } else {
      return interview.experienced || [];
    }
  };

  // Get problems data
  const getProblemsData = () => {
    if (!problems) return [];
    if (problems.fresher && problems.experienced) {
      return expLevel === 'fresher' ? problems.fresher : problems.experienced;
    }
    if (Array.isArray(problems)) {
      return problems;
    }
    return [];
  };

  // Get practice questions data
  const getPracticeData = () => {
    if (!practice) return [];
    return practice || [];
  };

  const learningDataList = getLearningData();
  const interviewList = getInterviewData();
  const problemsList = getProblemsData();
  const practiceList = getPracticeData();

  // Filter based on search
  const filteredLearning = learningDataList.filter(item => 
    item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredInterview = interviewList.filter(item =>
    item.question?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredProblems = problemsList.filter(item =>
    item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredPractice = practiceList.filter(item =>
    item.line?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.explanation?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalLessons = learningDataList.length;
  const totalInterview = interviewList.length;
  const totalProblems = problemsList.length;
  const totalPractice = practiceList.length;

  // Topic configuration with TechIcons
  const currentInfo = TechIcons[topic] || { 
    name: topic, 
    icon: "📚", 
    gradient: "from-gray-500 to-gray-700",
    bgColor: "bg-gray-100 dark:bg-gray-800",
    color: "#6b7280"
  };

  const mainTabs = [
    { id: 'learn', label: 'Learning', icon: '📘', desc: 'Basic → Advanced' },
    { id: 'interview', label: 'Interview', icon: '🎤', desc: 'Q&A' },
    { id: 'problems', label: 'Problems', icon: '⚡', desc: 'Coding Challenges' },
    { id: 'practice', label: 'Practice', icon: '📝', desc: 'Questions' }
  ];

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
        <div className="max-w-5xl mx-auto px-4 py-6 md:px-6 md:py-8">
          <div className="animate-pulse">
            <div className="h-32 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 rounded-xl mb-6"></div>
            <div className="h-12 bg-slate-200 dark:bg-slate-700 rounded-lg mb-6"></div>
            <div className="space-y-4">
              <div className="h-24 bg-slate-200 dark:bg-slate-700 rounded-lg"></div>
              <div className="h-24 bg-slate-200 dark:bg-slate-700 rounded-lg"></div>
              <div className="h-24 bg-slate-200 dark:bg-slate-700 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentList = activeTab === 'learn' ? filteredLearning : 
                      activeTab === 'interview' ? filteredInterview :
                      activeTab === 'problems' ? filteredProblems : filteredPractice;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {/* Decorative Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-cyan-200/20 to-blue-200/20 dark:from-cyan-500/5 dark:to-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-200/20 to-pink-200/20 dark:from-purple-500/5 dark:to-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 py-6 md:px-6 md:py-8">
        
        {/* Hero Section with Reduced Icons */}
        <div className={`relative mb-6 overflow-hidden rounded-xl bg-gradient-to-r ${currentInfo.gradient} shadow-lg`}>
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative p-4 md:p-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-white/20 rounded-xl blur-md"></div>
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center text-2xl sm:text-3xl shadow-lg">
                    {currentInfo.icon}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h1 className="text-xl sm:text-2xl font-bold text-white drop-shadow-md">
                      {currentInfo.name}
                    </h1>
                    <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded-full">Pro</span>
                  </div>
                  <p className="text-white/80 text-[10px] sm:text-xs mt-0.5">
                    Master {currentInfo.name} from basics to advanced
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-1.5">
                <div className="px-2 py-1 bg-white/15 backdrop-blur rounded-lg flex items-center gap-1.5 hover:scale-105 transition">
                  <span className="text-sm">📚</span>
                  <div>
                    <div className="text-white font-bold text-xs">{totalLessons}</div>
                    <div className="text-white/60 text-[9px]">Lessons</div>
                  </div>
                </div>
                <div className="px-2 py-1 bg-white/15 backdrop-blur rounded-lg flex items-center gap-1.5 hover:scale-105 transition">
                  <span className="text-sm">💼</span>
                  <div>
                    <div className="text-white font-bold text-xs">{totalInterview}</div>
                    <div className="text-white/60 text-[9px]">Qs</div>
                  </div>
                </div>
                <div className="px-2 py-1 bg-white/15 backdrop-blur rounded-lg flex items-center gap-1.5 hover:scale-105 transition">
                  <span className="text-sm">💻</span>
                  <div>
                    <div className="text-white font-bold text-xs">{totalProblems}</div>
                    <div className="text-white/60 text-[9px]">Problems</div>
                  </div>
                </div>
                <div className="px-2 py-1 bg-white/15 backdrop-blur rounded-lg flex items-center gap-1.5 hover:scale-105 transition">
                  <span className="text-sm">✏️</span>
                  <div>
                    <div className="text-white font-bold text-xs">{totalPractice}</div>
                    <div className="text-white/60 text-[9px]">Practice</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mb-5">
          <div className="relative">
            <input
              type="text"
              placeholder="🔍 Search topics, questions, or problems..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2.5 pl-10 rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm text-sm"
            />
            <svg className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600 text-xs"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mb-6">
          {mainTabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`group relative p-2.5 rounded-lg transition-all duration-300 ${
                activeTab === tab.id
                  ? `bg-gradient-to-r ${currentInfo.gradient} text-white shadow-md transform scale-[1.02]`
                  : 'bg-white/70 dark:bg-gray-800/70 backdrop-blur text-gray-700 dark:text-gray-300 hover:scale-105 hover:shadow-md border border-gray-200/50 dark:border-gray-700/50'
              }`}
            >
              <div className="flex flex-col items-center gap-0.5">
                <div className={`text-lg transition-transform duration-300 group-hover:scale-110 ${activeTab === tab.id ? 'animate-bounce' : ''}`}>
                  {tab.icon}
                </div>
                <span className="font-medium text-[11px]">{tab.label}</span>
                <span className={`text-[9px] ${activeTab === tab.id ? 'text-white/80' : 'text-gray-500'}`}>{tab.desc}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Result Count */}
        {searchTerm && (
          <div className="text-center mb-3 text-xs text-gray-500 dark:text-gray-400">
            Found {currentList.length} result{currentList.length !== 1 ? 's' : ''} for "{searchTerm}"
          </div>
        )}

        {/* ==================== LEARNING SECTION ==================== */}
        {activeTab === 'learn' && (
          <div className="space-y-4">
            {/* Level Selector */}
            {learning && learning.basic && learning.advanced && (
              <div className="flex gap-2 p-1 bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur rounded-lg w-fit shadow-inner">
                <button 
                  onClick={() => setActiveLevel('basic')} 
                  className={`px-4 py-1.5 rounded-md font-medium transition-all duration-200 flex items-center gap-1.5 text-xs ${
                    activeLevel === 'basic'
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  <span className="text-sm">🌱</span> Basic
                </button>
                <button 
                  onClick={() => setActiveLevel('advanced')} 
                  className={`px-4 py-1.5 rounded-md font-medium transition-all duration-200 flex items-center gap-1.5 text-xs ${
                    activeLevel === 'advanced'
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  <span className="text-sm">🚀</span> Advanced
                </button>
              </div>
            )}

            {/* Learning Cards */}
            {filteredLearning.length > 0 ? (
              <div className="space-y-3">
                {filteredLearning.map((topicItem, idx) => (
                  <div 
                    key={idx} 
                    className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200/50 dark:border-gray-700/50 hover:scale-[1.01]"
                  >
                    <div 
                      onClick={() => toggleCard(idx)} 
                      className="p-4 cursor-pointer hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 dark:hover:from-gray-800 dark:hover:to-gray-750 transition"
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 flex items-center justify-center text-base group-hover:scale-110 transition-transform">
                              📚
                            </div>
                            <h3 className="text-sm font-bold text-gray-800 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:bg-clip-text transition">
                              {topicItem.name}
                            </h3>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-xs line-clamp-2">
                            {topicItem.description}
                          </p>
                        </div>
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 mt-1 ${
                          expandedCard === idx 
                            ? 'rotate-180 bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-sm' 
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30'
                        }`}>
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {expandedCard === idx && (
                      <div className="px-4 pb-4 space-y-3 border-t border-gray-200 dark:border-gray-700 animate-fade-in">
                        {topicItem.code && (
                          <div className="mt-3">
                            <div className="flex justify-between items-center mb-1.5">
                              <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-1">
                                <span className="text-sm">💻</span> Code Example
                              </span>
                              <button 
                                onClick={(e) => copyToClipboard(topicItem.code, e)} 
                                className="text-[10px] px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition shadow-sm"
                              >
                                {copied ? '✅ Copied!' : '📋 Copy'}
                              </button>
                            </div>
                            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-3 overflow-x-auto shadow-inner">
                              <pre className="text-gray-100 font-mono text-[11px] whitespace-pre-wrap">
                                <code>{topicItem.code}</code>
                              </pre>
                            </div>
                          </div>
                        )}

                        {topicItem.simpleMeaning && (
                          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-3 rounded-lg border-l-3 border-purple-500">
                            <div className="flex items-center gap-1.5 mb-1">
                              <span className="text-sm">💡</span>
                              <span className="font-semibold text-purple-800 dark:text-purple-300 text-xs">Simple Meaning</span>
                            </div>
                            <p className="text-purple-700 dark:text-purple-300 text-xs">{topicItem.simpleMeaning}</p>
                          </div>
                        )}

                        {topicItem.output && (
                          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 p-3 rounded-lg border-l-3 border-green-500">
                            <div className="flex items-center gap-1.5 mb-1">
                              <span className="text-sm">📤</span>
                              <span className="font-semibold text-green-800 dark:text-green-300 text-xs">Output</span>
                            </div>
                            <div className="bg-gray-900 text-green-300 p-2 rounded-md font-mono text-[11px]">
                              {topicItem.output}
                            </div>
                          </div>
                        )}

                        {topicItem.note && (
                          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-950/30 dark:to-amber-950/30 p-3 rounded-lg border-l-3 border-yellow-500">
                            <div className="flex items-center gap-1.5 mb-1">
                              <span className="text-sm">⚠️</span>
                              <span className="font-semibold text-yellow-800 dark:text-yellow-300 text-xs">Important Note</span>
                            </div>
                            <p className="text-yellow-700 dark:text-yellow-300 text-xs">{topicItem.note}</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white/50 dark:bg-gray-800/50 backdrop-blur rounded-lg">
                <div className="text-5xl mb-3 animate-bounce">🔍</div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">No matching learning content found</p>
              </div>
            )}
          </div>
        )}

        {/* INTERVIEW SECTION */}
        {activeTab === 'interview' && (
          <div>
            <div className="flex gap-2 p-1 bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur rounded-lg w-fit mb-4 shadow-inner">
              <button 
                onClick={() => setExpLevel('fresher')} 
                className={`px-4 py-1.5 rounded-md font-medium transition-all duration-200 flex items-center gap-1.5 text-xs ${
                  expLevel === 'fresher'
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <span className="text-sm">🎓</span> Fresher
              </button>
              <button 
                onClick={() => setExpLevel('experienced')} 
                className={`px-4 py-1.5 rounded-md font-medium transition-all duration-200 flex items-center gap-1.5 text-xs ${
                  expLevel === 'experienced'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <span className="text-sm">💼</span> Experienced
              </button>
            </div>

            {filteredInterview.length > 0 ? (
              <div className="space-y-3">
                {filteredInterview.map((item, idx) => (
                  <div key={idx} className="bg-white/90 dark:bg-gray-800/90 backdrop-blur rounded-lg border border-gray-200/50 dark:border-gray-700/50 overflow-hidden hover:shadow-md transition-all duration-300 group">
                    <div 
                      onClick={() => toggleQuestion(idx)} 
                      className="p-4 cursor-pointer hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 dark:hover:from-gray-800 dark:hover:to-gray-750 transition"
                    >
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1 flex items-start gap-2.5">
                          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white text-[10px] font-bold shadow-sm flex-shrink-0 mt-0.5">
                            {idx + 1}
                          </div>
                          <h3 className="font-semibold text-gray-800 dark:text-white text-xs pr-3 leading-relaxed">
                            {item.question}
                          </h3>
                        </div>
                        <svg className={`w-4 h-4 text-gray-400 transition-transform duration-300 flex-shrink-0 mt-0.5 ${expandedQuestion === idx ? 'rotate-180' : ''} group-hover:text-blue-500`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>

                    {expandedQuestion === idx && (
                      <div className="px-4 pb-4 space-y-2.5 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-800 border-t border-gray-200 dark:border-gray-700 animate-fade-in">
                        <div className="p-3 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-lg">
                          <div className="flex items-center gap-1.5 mb-1.5">
                            <span className="text-xs">📖</span>
                            <span className="font-semibold text-blue-700 dark:text-blue-300 text-xs">Answer</span>
                          </div>
                          <p className="text-gray-700 dark:text-gray-300 text-xs leading-relaxed">{item.answer}</p>
                        </div>
                        {item.example && (
                          <div className="p-3 bg-gray-100 dark:bg-gray-800/50 rounded-lg">
                            <div className="flex items-center gap-1.5 mb-1.5">
                              <span className="text-xs">💻</span>
                              <span className="font-semibold text-green-600 dark:text-green-400 text-xs">Example</span>
                            </div>
                            <pre className="bg-gray-900 text-gray-100 p-2 rounded-md overflow-x-auto text-[10px]">
                              <code>{item.example}</code>
                            </pre>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white/50 dark:bg-gray-800/50 backdrop-blur rounded-lg">
                <div className="text-5xl mb-3 animate-pulse">🔍</div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">No matching interview questions found</p>
              </div>
            )}
          </div>
        )}

        {/* PROBLEMS SECTION */}
        {activeTab === 'problems' && (
          <div>
            <div className="flex gap-2 p-1 bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur rounded-lg w-fit mb-4 shadow-inner">
              <button onClick={() => setExpLevel('fresher')} className={`px-4 py-1.5 rounded-md font-medium transition-all duration-200 flex items-center gap-1.5 text-xs ${expLevel === 'fresher' ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}>
                <span className="text-sm">🎓</span> Fresher
              </button>
              <button onClick={() => setExpLevel('experienced')} className={`px-4 py-1.5 rounded-md font-medium transition-all duration-200 flex items-center gap-1.5 text-xs ${expLevel === 'experienced' ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}>
                <span className="text-sm">💼</span> Experienced
              </button>
            </div>

            {filteredProblems.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {filteredProblems.map((problem, idx) => {
                  const problemTitle = problem.title || problem.name || problem.question || `Problem ${idx + 1}`;
                  const problemId = problem.id || idx + 1;
                  const difficulty = problem.difficulty || 'Medium';
                  const solved = problem.solved || Math.floor(Math.random() * 5000) + 100;
                  
                  return (
                    <div key={idx} className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 border border-gray-200/50 dark:border-gray-700/50">
                      <div className="flex justify-between items-start mb-2">
                        <div className="w-7 h-7 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xs shadow-sm">
                          {problemId}
                        </div>
                        <span className={`px-2 py-0.5 rounded-full text-[9px] font-medium shadow-sm ${
                          difficulty === 'Easy' 
                            ? 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300'
                            : difficulty === 'Hard'
                            ? 'bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300'
                            : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-300'
                        }`}>
                          {difficulty}
                        </span>
                      </div>
                      <h3 className="font-semibold text-gray-800 dark:text-white mb-2 text-xs leading-relaxed line-clamp-2">
                        {problemTitle}
                      </h3>
                      <div className="flex items-center justify-between text-xs pt-2 border-t border-gray-100 dark:border-gray-700">
                        <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 text-[10px]">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                          <span>{solved.toLocaleString()} solved</span>
                        </div>
                        <button onClick={(e) => openSolution(problem, e)} className="px-2.5 py-1 rounded-md bg-gradient-to-r from-purple-500 to-pink-500 text-white text-[10px] font-medium hover:shadow-md transition flex items-center gap-1">
                          Solve <span>→</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12 bg-white/50 dark:bg-gray-800/50 backdrop-blur rounded-lg">
                <div className="text-5xl mb-3 animate-pulse">🔍</div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">No matching problems found</p>
              </div>
            )}
          </div>
        )}

        {/* PRACTICE SECTION */}
        {activeTab === 'practice' && (
          <div className="space-y-2.5">
            {filteredPractice.length > 0 ? (
              filteredPractice.map((practice, idx) => (
                <div key={idx} className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur rounded-lg p-3 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 hover:scale-[1.01]">
                  <div className="flex gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center text-white text-[10px] font-bold shadow-sm flex-shrink-0">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-md p-2 overflow-x-auto mb-2">
                        <code className="text-gray-100 font-mono text-[10px]">
                          {practice.line || practice.question || practice.code || 'No content'}
                        </code>
                      </div>
                      <div className="space-y-1 text-xs">
                        <p className="flex flex-wrap gap-1.5 text-[11px]"><span className="font-semibold text-blue-600 dark:text-blue-400">📖 Explanation:</span> {practice.explanation || practice.answer || 'No explanation provided'}</p>
                        {practice.example && <p className="flex flex-wrap gap-1.5 text-[11px]"><span className="font-semibold text-green-600 dark:text-green-400">💡 Example:</span> {practice.example}</p>}
                        {practice.output && <p className="flex flex-wrap gap-1.5 text-[11px]"><span className="font-semibold text-purple-600 dark:text-purple-400">📤 Output:</span> {practice.output}</p>}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12 bg-white/50 dark:bg-gray-800/50 backdrop-blur rounded-lg">
                <div className="text-5xl mb-3 animate-bounce">🔍</div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">No matching practice questions found</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Solution Modal */}
      {showSolutionModal && selectedProblem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in" onClick={closeSolution}>
          <div className="relative max-w-2xl w-full max-h-[85vh] overflow-y-auto bg-white dark:bg-gray-800 rounded-xl shadow-2xl animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4 flex justify-between items-center">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm shadow-md">
                  {selectedProblem.id || '📋'}
                </div>
                <div>
                  <h2 className="text-base font-bold text-gray-800 dark:text-white">
                    {selectedProblem.title || selectedProblem.name || 'Problem Solution'}
                  </h2>
                  <div className="flex gap-1.5 mt-0.5">
                    <span className={`px-1.5 py-0.5 rounded-full text-[9px] font-medium ${
                      selectedProblem.difficulty === 'Easy' 
                        ? 'bg-green-100 text-green-700'
                        : selectedProblem.difficulty === 'Hard'
                        ? 'bg-red-100 text-red-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {selectedProblem.difficulty || 'Medium'}
                    </span>
                    <span className="text-[9px] text-gray-500">⭐ {selectedProblem.solved || Math.floor(Math.random() * 5000) + 100} solved</span>
                  </div>
                </div>
              </div>
              <button onClick={closeSolution} className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition text-gray-500">
                ✕
              </button>
            </div>

            <div className="p-5 space-y-4">
              <div>
                <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-1.5 flex items-center gap-1.5 text-xs">
                  <span className="text-sm">📋</span> Problem Statement
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed bg-gray-50 dark:bg-gray-900/50 p-3 rounded-lg">
                  {selectedProblem.description || selectedProblem.title || 'Problem description not available'}
                </p>
              </div>

              {(selectedProblem.solution || selectedProblem.answer) && (
                <div>
                  <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-1.5 flex items-center gap-1.5 text-xs">
                    <span className="text-sm">💡</span> Solution
                  </h3>
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-3 rounded-lg border-l-3 border-blue-500">
                    <p className="text-blue-700 dark:text-blue-300 text-xs leading-relaxed">
                      {selectedProblem.solution || selectedProblem.answer}
                    </p>
                  </div>
                </div>
              )}

              {(selectedProblem.example || selectedProblem.code) && (
                <div>
                  <div className="flex justify-between items-center mb-1.5 flex-wrap gap-1.5">
                    <h3 className="font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-1.5 text-xs">
                      <span className="text-sm">💻</span> Code Example
                    </h3>
                    <button 
                      onClick={() => copyToClipboard(selectedProblem.example || selectedProblem.code, { stopPropagation: () => {} })} 
                      className="text-[10px] px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
                    >
                      {copied ? '✅ Copied!' : '📋 Copy Code'}
                    </button>
                  </div>
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-3 overflow-x-auto shadow-inner">
                    <pre className="text-gray-100 font-mono text-[10px] sm:text-xs whitespace-pre-wrap">
                      <code>{selectedProblem.example || selectedProblem.code}</code>
                    </pre>
                  </div>
                </div>
              )}

              {selectedProblem.output && (
                <div>
                  <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-1.5 flex items-center gap-1.5 text-xs">
                    <span className="text-sm">📤</span> Expected Output
                  </h3>
                  <div className="bg-gray-900 text-green-300 p-3 rounded-lg font-mono text-[11px] shadow-inner">
                    {selectedProblem.output}
                  </div>
                </div>
              )}
            </div>

            <div className="sticky bottom-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4 flex justify-end gap-2">
              <button onClick={closeSolution} className="px-3 py-1.5 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition text-xs">
                Close
              </button>
             
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .border-l-3 { border-left-width: 3px; }
      `}</style>
    </div>
  );
}