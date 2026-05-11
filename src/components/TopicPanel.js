'use client';
import { useState, useEffect, useCallback } from 'react';
import { learningData, interviewData, problemsData, practiceData } from '@/data';
import TechIcons from '@/components/TechIcons';

// ==================== CODE EDITOR COMPONENT ====================
function CodeEditor({ initialCode = '', onRun }) {
  const [code, setCode] = useState(initialCode || '');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const runCode = () => {
    setIsRunning(true);
    setError('');
    setOutput('');
    
    const originalLog = console.log;
    const originalError = console.error;
    const originalWarn = console.warn;
    const originalInfo = console.info;
    
    let logs = [];
    
    console.log = (...args) => {
      logs.push(args.map(arg => {
        if (arg === null) return 'null';
        if (arg === undefined) return 'undefined';
        if (typeof arg === 'object') {
          try {
            return JSON.stringify(arg, null, 2);
          } catch(e) {
            return String(arg);
          }
        }
        return String(arg);
      }).join(' '));
    };
    console.error = (...args) => {
      logs.push('❌ ERROR: ' + args.map(arg => String(arg)).join(' '));
    };
    console.warn = (...args) => {
      logs.push('⚠️ WARNING: ' + args.map(arg => String(arg)).join(' '));
    };
    console.info = (...args) => {
      logs.push('ℹ️ INFO: ' + args.map(arg => String(arg)).join(' '));
    };

    try {
      let cleanCode = code || '';
      cleanCode = cleanCode.replace(/<[^>]*>/g, '');
      cleanCode = cleanCode.replace(/import\s+.*?from\s+['"][^'"]+['"]/g, '// import statement removed');
      cleanCode = cleanCode.replace(/export\s+default\s+\w+/g, '// export default removed');
      cleanCode = cleanCode.replace(/export\s+\{[^}]*\}/g, '// export removed');
      cleanCode = cleanCode.replace(/require\(['"][^'"]+['"]\)/g, 'null');
      cleanCode = cleanCode.replace(/process\.env\.[A-Z_]+/g, 'null');
      cleanCode = cleanCode.replace(/__dirname/g, 'null');
      cleanCode = cleanCode.replace(/__filename/g, 'null');
      cleanCode = cleanCode.replace(/module\.exports/g, 'null');
      
      const executeCode = new Function(cleanCode);
      executeCode();
      
      if (logs.length === 0) {
        logs.push('✓ Code executed successfully! (No console output)');
      }
      
      setOutput(logs.join('\n'));
    } catch (err) {
      let errorMsg = err.message;
      if (errorMsg.includes("Cannot use import statement")) {
        errorMsg = "import/export statements are not supported. Use pure JavaScript only.";
      } else if (errorMsg.includes("require is not defined")) {
        errorMsg = "require() is not supported. Node.js modules are not available in browser.";
      } else if (errorMsg.includes("document.getElementById") && errorMsg.includes("null")) {
        errorMsg = "Element not found! Make sure the element exists before accessing it.";
      } else if (errorMsg.includes("Unexpected token '<'")) {
        errorMsg = "Invalid code syntax. Check for missing brackets, quotes, or semicolons.";
      }
      setError(errorMsg);
      setOutput('');
    } finally {
      console.log = originalLog;
      console.error = originalError;
      console.warn = originalWarn;
      console.info = originalInfo;
      setIsRunning(false);
    }
  };

  const clearOutput = () => {
    setOutput('');
    setError('');
  };

  const resetCode = () => {
    setCode(initialCode || '');
    clearOutput();
  };

  return (
    <div className="mt-4 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
      <div className="flex justify-between items-center bg-gray-800 dark:bg-gray-900 px-4 py-2 border-b border-gray-700">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-xs text-gray-400 ml-2">JavaScript Playground</span>
        </div>
        <div className="flex gap-2">
          <button onClick={resetCode} className="text-[10px] px-2 py-1 rounded bg-gray-700 hover:bg-gray-600 text-gray-300 transition">Reset</button>
          <button onClick={clearOutput} className="text-[10px] px-2 py-1 rounded bg-gray-700 hover:bg-gray-600 text-gray-300 transition">Clear</button>
          <button onClick={runCode} disabled={isRunning} className="text-[10px] px-3 py-1 rounded bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:shadow-md transition disabled:opacity-50">
            {isRunning ? 'Running...' : '▶ Run Code'}
          </button>
        </div>
      </div>
      <div className="relative">
        <textarea 
          value={code || ''} 
          onChange={(e) => setCode(e.target.value)} 
          className="w-full h-64 bg-gray-900 text-gray-100 font-mono text-sm p-4 outline-none resize-none" 
          spellCheck="false" 
        />
      </div>
      {(output || error) && (
        <div className="border-t border-gray-700">
          <div className="bg-gray-800 dark:bg-gray-900 px-4 py-2"><span className="text-xs font-semibold text-gray-400">Output</span></div>
          <div className="p-4 bg-gray-900 font-mono text-sm max-h-60 overflow-auto">
            {error ? <div className="text-red-400 whitespace-pre-wrap"><span className="text-red-500 font-bold">Error: </span>{error}</div> : <pre className="text-green-400 whitespace-pre-wrap">{output}</pre>}
          </div>
        </div>
      )}
      <div className="bg-gray-800/50 px-4 py-2 text-[10px] text-gray-500 border-t border-gray-700 flex justify-between items-center">
        <span>💡 Tip: Use console.log() to see output</span>
        <span className="text-[9px]">⚠️ Node.js modules not available</span>
      </div>
    </div>
  );
}

// ==================== STARRED/FAVORITE ICON ====================
function StarIcon({ starred = false, onClick }) {
  return (
    <button 
      onClick={(e) => { e.stopPropagation(); onClick(); }}
      className={`transition-transform hover:scale-110 ${starred ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'}`}
    >
      <svg className="w-4 h-4" fill={starred ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    </button>
  );
}

// ==================== BOOKMARK ICON ====================
function BookmarkIcon({ bookmarked = false, onClick }) {
  return (
    <button 
      onClick={(e) => { e.stopPropagation(); onClick(); }}
      className={`transition-transform hover:scale-110 ${bookmarked ? 'text-blue-500' : 'text-gray-400 hover:text-blue-500'}`}
    >
      <svg className="w-4 h-4" fill={bookmarked ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
      </svg>
    </button>
  );
}

// ==================== SHARE BUTTON ====================
function ShareButton({ title, onShare }) {
  const [showShareOptions, setShowShareOptions] = useState(false);
  
  const handleShare = async (platform) => {
    const url = window.location.href;
    const text = `Check out this ${title || 'resource'} on LearnHub!`;
    
    if (platform === 'native' && navigator.share) {
      try {
        await navigator.share({ title: title || 'LearnHub', text, url });
      } catch (e) { console.log('Share cancelled'); }
    } else if (platform === 'copy') {
      await navigator.clipboard.writeText(`${text}\n${url}`);
      onShare?.();
    } else if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
    } else if (platform === 'linkedin') {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
    }
    setShowShareOptions(false);
  };
  
  return (
    <div className="relative">
      <button 
        onClick={() => setShowShareOptions(!showShareOptions)}
        className="text-gray-400 hover:text-green-500 transition p-1"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      </button>
      {showShareOptions && (
        <div className="absolute right-0 mt-2 w-36 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-20 animate-fade-in">
          {navigator.share && <button onClick={() => handleShare('native')} className="w-full text-left px-3 py-1.5 text-xs hover:bg-gray-100 dark:hover:bg-gray-700">📱 Native Share</button>}
          <button onClick={() => handleShare('copy')} className="w-full text-left px-3 py-1.5 text-xs hover:bg-gray-100 dark:hover:bg-gray-700">📋 Copy Link</button>
          <button onClick={() => handleShare('twitter')} className="w-full text-left px-3 py-1.5 text-xs hover:bg-gray-100 dark:hover:bg-gray-700">🐦 Twitter</button>
          <button onClick={() => handleShare('linkedin')} className="w-full text-left px-3 py-1.5 text-xs hover:bg-gray-100 dark:hover:bg-gray-700">💼 LinkedIn</button>
        </div>
      )}
    </div>
  );
}

// ==================== PROGRESS TRACKER ====================
function ProgressTracker({ totalItems = 0, completedItems = 0 }) {
  const percentage = totalItems > 0 ? (completedItems / totalItems) * 100 : 0;
  
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between text-[10px] text-gray-600 dark:text-gray-400">
        <span>Overall Progress</span>
        <span className="font-medium">{Math.round(percentage)}%</span>
      </div>
      <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full transition-all duration-300" 
          style={{ width: `${percentage}%` }} 
        />
      </div>
      <div className="flex justify-between text-[9px] text-gray-500 dark:text-gray-500">
        <span>✅ Completed: {completedItems}</span>
        <span>📚 Total: {totalItems}</span>
      </div>
    </div>
  );
}

// ==================== MAIN TOPIC PANEL COMPONENT ====================
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
  const [showEditor, setShowEditor] = useState(null);
  
  // Feature states - Separate for each section
  const [starredItems, setStarredItems] = useState({});
  const [bookmarkedItems, setBookmarkedItems] = useState({});
  const [completedLearning, setCompletedLearning] = useState({});
  const [completedInterview, setCompletedInterview] = useState({});
  const [completedProblems, setCompletedProblems] = useState({});
  const [completedPractice, setCompletedPractice] = useState({});
  const [showBookmarksFilter, setShowBookmarksFilter] = useState(false);
  const [showStarredFilter, setShowStarredFilter] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);

  // Load saved data
  useEffect(() => {
    setMounted(true);
    
    const savedStarred = localStorage.getItem(`starred_${topic}`);
    const savedBookmarks = localStorage.getItem(`bookmarks_${topic}`);
    const savedCompletedLearning = localStorage.getItem(`completed_learning_${topic}`);
    const savedCompletedInterview = localStorage.getItem(`completed_interview_${topic}`);
    const savedCompletedProblems = localStorage.getItem(`completed_problems_${topic}`);
    const savedCompletedPractice = localStorage.getItem(`completed_practice_${topic}`);
    const savedShowSidebar = localStorage.getItem('showSidebar');
    
    if (savedStarred) setStarredItems(JSON.parse(savedStarred));
    if (savedBookmarks) setBookmarkedItems(JSON.parse(savedBookmarks));
    if (savedCompletedLearning) setCompletedLearning(JSON.parse(savedCompletedLearning));
    if (savedCompletedInterview) setCompletedInterview(JSON.parse(savedCompletedInterview));
    if (savedCompletedProblems) setCompletedProblems(JSON.parse(savedCompletedProblems));
    if (savedCompletedPractice) setCompletedPractice(JSON.parse(savedCompletedPractice));
    if (savedShowSidebar) setShowSidebar(savedShowSidebar === 'true');
  }, [topic]);

  const learning = learningData[topic];
  const interview = interviewData[topic];
  const problems = problemsData[topic];
  const practice = practiceData[topic];

  const toggleCard = (id) => setExpandedCard(expandedCard === id ? null : id);
  const toggleQuestion = (id) => setExpandedQuestion(expandedQuestion === id ? null : id);

  // Star functions
  const toggleStar = useCallback((itemId) => {
    setStarredItems(prev => {
      const newState = { ...prev, [itemId]: !prev[itemId] };
      localStorage.setItem(`starred_${topic}`, JSON.stringify(newState));
      return newState;
    });
  }, [topic]);

  // Bookmark functions
  const toggleBookmark = useCallback((itemId) => {
    setBookmarkedItems(prev => {
      const newState = { ...prev, [itemId]: !prev[itemId] };
      localStorage.setItem(`bookmarks_${topic}`, JSON.stringify(newState));
      return newState;
    });
  }, [topic]);

  // Complete functions for different sections
  const toggleCompleteLearning = useCallback((itemId) => {
    setCompletedLearning(prev => {
      const newState = { ...prev, [itemId]: !prev[itemId] };
      localStorage.setItem(`completed_learning_${topic}`, JSON.stringify(newState));
      return newState;
    });
  }, [topic]);

  const toggleCompleteInterview = useCallback((itemId) => {
    setCompletedInterview(prev => {
      const newState = { ...prev, [itemId]: !prev[itemId] };
      localStorage.setItem(`completed_interview_${topic}`, JSON.stringify(newState));
      return newState;
    });
  }, [topic]);

  const toggleCompleteProblems = useCallback((itemId) => {
    setCompletedProblems(prev => {
      const newState = { ...prev, [itemId]: !prev[itemId] };
      localStorage.setItem(`completed_problems_${topic}`, JSON.stringify(newState));
      return newState;
    });
  }, [topic]);

  const toggleCompletePractice = useCallback((itemId) => {
    setCompletedPractice(prev => {
      const newState = { ...prev, [itemId]: !prev[itemId] };
      localStorage.setItem(`completed_practice_${topic}`, JSON.stringify(newState));
      return newState;
    });
  }, [topic]);

  const copyToClipboard = async (text, e) => {
    e.stopPropagation();
    await navigator.clipboard.writeText(text || '');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = () => {
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2000);
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

  const getLearningData = () => {
    if (!learning) return [];
    if (activeLevel === 'basic') {
      return learning.basic?.topics || learning.basic || [];
    } else {
      return learning.advanced?.topics || learning.advanced || [];
    }
  };

  const getInterviewData = () => {
    if (!interview) return [];
    if (expLevel === 'fresher') return interview.fresher || [];
    else return interview.experienced || [];
  };

  const getProblemsData = () => {
    if (!problems) return [];
    if (problems.fresher && problems.experienced) {
      return expLevel === 'fresher' ? problems.fresher : problems.experienced;
    }
    if (Array.isArray(problems)) return problems;
    return [];
  };

  const getPracticeData = () => {
    if (!practice) return [];
    return practice || [];
  };

  let learningDataList = getLearningData();
  let interviewList = getInterviewData();
  let problemsList = getProblemsData();
  let practiceList = getPracticeData();

  // Apply filters
  if (showStarredFilter) {
    learningDataList = learningDataList.filter(item => starredItems[item.name || item.id || item]);
    interviewList = interviewList.filter(item => starredItems[item.question || item.id || item]);
    problemsList = problemsList.filter(item => starredItems[item.title || item.id || item]);
    practiceList = practiceList.filter(item => starredItems[item.line || item.id || item]);
  }
  if (showBookmarksFilter) {
    learningDataList = learningDataList.filter(item => bookmarkedItems[item.name || item.id || item]);
    interviewList = interviewList.filter(item => bookmarkedItems[item.question || item.id || item]);
    problemsList = problemsList.filter(item => bookmarkedItems[item.title || item.id || item]);
    practiceList = practiceList.filter(item => bookmarkedItems[item.line || item.id || item]);
  }

  const filteredLearning = learningDataList.filter(item => 
    item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredInterview = interviewList.filter(item =>
    item.question?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredProblems = problemsList.filter(item =>
    (item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
     item.question?.toLowerCase().includes(searchTerm.toLowerCase()) ||
     item.name?.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const filteredPractice = practiceList.filter(item =>
    item.line?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.explanation?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate totals for each section
  const totalLearning = learningDataList.length;
  const totalInterview = interviewList.length;
  const totalProblems = problemsList.length;
  const totalPractice = practiceList.length;
  
  const completedLearningCount = Object.values(completedLearning).filter(Boolean).length;
  const completedInterviewCount = Object.values(completedInterview).filter(Boolean).length;
  const completedProblemsCount = Object.values(completedProblems).filter(Boolean).length;
  const completedPracticeCount = Object.values(completedPractice).filter(Boolean).length;
  
  // Overall totals
  const totalAll = totalLearning + totalInterview + totalProblems + totalPractice;
  const completedAll = completedLearningCount + completedInterviewCount + completedProblemsCount + completedPracticeCount;
  
  const starredCount = Object.values(starredItems).filter(Boolean).length;
  const bookmarkedCount = Object.values(bookmarkedItems).filter(Boolean).length;

  const topicKey = topic?.toLowerCase() || '';
  const techIcon = TechIcons[topicKey] || TechIcons.default;
  
  const currentInfo = {
    name: techIcon.name || topic || "Technology",
    icon: techIcon.icon || "💻",
    gradient: techIcon.gradient || "from-gray-500 to-gray-700",
    bgColor: techIcon.bgColor || "bg-gray-100 dark:bg-gray-800",
    color: techIcon.color || "#6b7280"
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-cyan-200/20 to-blue-200/20 dark:from-cyan-500/5 dark:to-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-200/20 to-pink-200/20 dark:from-purple-500/5 dark:to-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Settings Sidebar Toggle Button */}
      <button 
        onClick={() => setShowSidebar(!showSidebar)}
        className="fixed left-4 top-20 z-30 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:shadow-xl transition-all hover:scale-105"
        aria-label="Toggle Settings"
      >
        <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </button>

      {/* Settings Sidebar Panel */}
      {showSidebar && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setShowSidebar(false)}
          />
          
          <div className="fixed left-0 top-0 h-full w-72 bg-white dark:bg-gray-900 shadow-2xl z-50 transform transition-transform duration-300 border-r border-gray-200 dark:border-gray-800 overflow-y-auto">
            <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <span className="text-sm">⚙️</span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-800 dark:text-white">Preferences</h3>
                  <p className="text-[10px] text-gray-500">Customize your experience</p>
                </div>
              </div>
              <button 
                onClick={() => setShowSidebar(false)}
                className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition text-gray-500"
              >
                ✕
              </button>
            </div>

            <div className="p-4 space-y-5">
              {/* Filters Section */}
              <div>
                <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 block mb-2">🔍 Filters</label>
                <div className="space-y-2">
                  <button onClick={() => setShowStarredFilter(!showStarredFilter)} className={`w-full text-left text-[11px] px-3 py-2 rounded-lg flex items-center justify-between transition-all ${showStarredFilter ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 border border-yellow-300 dark:border-yellow-700' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`}>
                    <span className="flex items-center gap-2">⭐ Starred Only</span>
                    <span className="text-xs font-bold">{starredCount}</span>
                  </button>
                  <button onClick={() => setShowBookmarksFilter(!showBookmarksFilter)} className={`w-full text-left text-[11px] px-3 py-2 rounded-lg flex items-center justify-between transition-all ${showBookmarksFilter ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border border-blue-300 dark:border-blue-700' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`}>
                    <span className="flex items-center gap-2">🔖 Bookmarks</span>
                    <span className="text-xs font-bold">{bookmarkedCount}</span>
                  </button>
                </div>
              </div>

              {/* Section-wise Progress */}
              <div className="space-y-2 pt-2 border-t border-gray-200 dark:border-gray-700">
                <p className="text-[10px] font-semibold text-gray-500 dark:text-gray-400">📊 Section Progress</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-[10px]">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">📘</span>
                      <span>Learning</span>
                    </div>
                    <span className="font-medium text-green-600 dark:text-green-400">{completedLearningCount}/{totalLearning}</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px]">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">🎤</span>
                      <span>Interview</span>
                    </div>
                    <span className="font-medium text-blue-600 dark:text-blue-400">{completedInterviewCount}/{totalInterview}</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px]">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">⚡</span>
                      <span>Problems</span>
                    </div>
                    <span className="font-medium text-orange-600 dark:text-orange-400">{completedProblemsCount}/{totalProblems}</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px]">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">📝</span>
                      <span>Practice</span>
                    </div>
                    <span className="font-medium text-purple-600 dark:text-purple-400">{completedPracticeCount}/{totalPractice}</span>
                  </div>
                </div>
              </div>

              {/* Overall Progress Bar */}
              <div className="pt-2">
                <ProgressTracker totalItems={totalAll} completedItems={completedAll} />
              </div>

              {/* Danger Zone */}
              <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                <button onClick={() => {
                  if (confirm('Are you sure? This will delete all your starred items, bookmarks, and completed lessons for ALL sections in this topic.')) {
                    localStorage.removeItem(`starred_${topic}`);
                    localStorage.removeItem(`bookmarks_${topic}`);
                    localStorage.removeItem(`completed_learning_${topic}`);
                    localStorage.removeItem(`completed_interview_${topic}`);
                    localStorage.removeItem(`completed_problems_${topic}`);
                    localStorage.removeItem(`completed_practice_${topic}`);
                    setStarredItems({});
                    setBookmarkedItems({});
                    setCompletedLearning({});
                    setCompletedInterview({});
                    setCompletedProblems({});
                    setCompletedPractice({});
                    setShowStarredFilter(false);
                    setShowBookmarksFilter(false);
                    const toast = document.createElement('div');
                    toast.className = 'fixed bottom-4 right-4 bg-green-500 text-white px-3 py-1.5 rounded-lg text-xs shadow-lg z-50 animate-fade-in';
                    toast.textContent = 'All data cleared successfully!';
                    document.body.appendChild(toast);
                    setTimeout(() => toast.remove(), 2000);
                  }
                }} className="w-full text-[11px] px-3 py-2 rounded-lg bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-950/50 transition flex items-center justify-center gap-2">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                  Clear All Data
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Main Content */}
      <div className="relative max-w-5xl mx-auto px-4 py-6 md:px-6 md:py-8">
        
        {/* Hero Section */}
        <div className={`relative mb-6 overflow-hidden rounded-xl bg-gradient-to-r ${currentInfo.gradient} shadow-lg`}>
          <div className="absolute inset-0 bg-black/10"></div>
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
                    <h1 className="text-xl sm:text-2xl font-bold text-white drop-shadow-md">{currentInfo.name}</h1>
                    <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded-full">Pro</span>
                  </div>
                  <p className="text-white/80 text-[10px] sm:text-xs mt-0.5">Master {currentInfo.name} from basics to advanced</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-1.5">
                <div className="px-2 py-1 bg-white/15 backdrop-blur rounded-lg flex items-center gap-1.5 hover:scale-105 transition">
                  <span className="text-sm">⭐</span>
                  <div><div className="text-white font-bold text-xs">{starredCount}</div><div className="text-white/60 text-[9px]">Starred</div></div>
                </div>
                <div className="px-2 py-1 bg-white/15 backdrop-blur rounded-lg flex items-center gap-1.5 hover:scale-105 transition">
                  <span className="text-sm">🔖</span>
                  <div><div className="text-white font-bold text-xs">{bookmarkedCount}</div><div className="text-white/60 text-[9px]">Bookmarks</div></div>
                </div>
                <div className="px-2 py-1 bg-white/15 backdrop-blur rounded-lg flex items-center gap-1.5 hover:scale-105 transition">
                  <span className="text-sm">✅</span>
                  <div><div className="text-white font-bold text-xs">{completedAll}/{totalAll}</div><div className="text-white/60 text-[9px]">Completed</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Active Filters Bar */}
        {(showStarredFilter || showBookmarksFilter) && (
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span className="text-[10px] text-gray-500">Active filters:</span>
            {showStarredFilter && (
              <button onClick={() => setShowStarredFilter(false)} className="text-[10px] px-2 py-0.5 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 flex items-center gap-1">⭐ Starred Only ✕</button>
            )}
            {showBookmarksFilter && (
              <button onClick={() => setShowBookmarksFilter(false)} className="text-[10px] px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 flex items-center gap-1">🔖 Bookmarks Only ✕</button>
            )}
            <button onClick={() => { setShowStarredFilter(false); setShowBookmarksFilter(false); }} className="text-[10px] px-2 py-0.5 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600 transition">Clear all</button>
          </div>
        )}

        {/* Search Bar */}
        <div className="relative mb-5">
          <div className="relative">
            <input 
              type="text" 
              placeholder="🔍 Search topics, questions, or problems..." 
              value={searchTerm || ''} 
              onChange={(e) => setSearchTerm(e.target.value)} 
              className="w-full px-4 py-2.5 pl-10 rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm text-sm" 
            />
            <svg className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            {searchTerm && <button onClick={() => setSearchTerm('')} className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600 text-xs">✕</button>}
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mb-6">
          {mainTabs.map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`group relative p-2.5 rounded-lg transition-all duration-300 ${activeTab === tab.id ? `bg-gradient-to-r ${currentInfo.gradient} text-white shadow-md transform scale-[1.02]` : 'bg-white/70 dark:bg-gray-800/70 backdrop-blur text-gray-700 dark:text-gray-300 hover:scale-105 hover:shadow-md border border-gray-200/50 dark:border-gray-700/50'}`}>
              <div className="flex flex-col items-center gap-0.5">
                <div className={`text-lg transition-transform duration-300 group-hover:scale-110 ${activeTab === tab.id ? 'animate-bounce' : ''}`}>{tab.icon}</div>
                <span className="font-medium text-[11px]">{tab.label}</span>
                <span className={`text-[9px] ${activeTab === tab.id ? 'text-white/80' : 'text-gray-500'}`}>{tab.desc}</span>
              </div>
            </button>
          ))}
        </div>

        {searchTerm && (
          <div className="text-center mb-3 text-xs text-gray-500 dark:text-gray-400">
            Found { (activeTab === 'learn' ? filteredLearning.length : activeTab === 'interview' ? filteredInterview.length : activeTab === 'problems' ? filteredProblems.length : filteredPractice.length) } result(s) for "{searchTerm}"
          </div>
        )}

        {/* ==================== LEARNING SECTION ==================== */}
        {activeTab === 'learn' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
              <div className="flex gap-2 p-1 bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur rounded-lg w-fit shadow-inner">
                <button onClick={() => setActiveLevel('basic')} className={`px-4 py-1.5 rounded-md font-medium transition-all duration-200 flex items-center gap-1.5 text-xs ${activeLevel === 'basic' ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}>🌱 Basic</button>
                <button onClick={() => setActiveLevel('advanced')} className={`px-4 py-1.5 rounded-md font-medium transition-all duration-200 flex items-center gap-1.5 text-xs ${activeLevel === 'advanced' ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}>🚀 Advanced</button>
              </div>
              <div className="text-xs bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                📘 Progress: {completedLearningCount}/{totalLearning}
              </div>
            </div>

            {filteredLearning.length > 0 ? (
              <div className="space-y-3">
                {filteredLearning.map((topicItem, idx) => {
                  const itemId = topicItem.name || `learning_${idx}`;
                  const isStarred = starredItems[itemId] || false;
                  const isBookmarked = bookmarkedItems[itemId] || false;
                  const isCompleted = completedLearning[itemId] || false;
                  
                  return (
                    <div key={idx} className={`group bg-white/90 dark:bg-gray-800/90 backdrop-blur rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border ${isCompleted ? 'border-green-500/50' : 'border-gray-200/50 dark:border-gray-700/50'} hover:scale-[1.01]`}>
                      <div onClick={() => toggleCard(idx)} className="cursor-pointer hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 dark:hover:from-gray-800 dark:hover:to-gray-750 transition p-4">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="relative">
                                <input 
                                  type="checkbox" 
                                  checked={isCompleted === true} 
                                  onChange={() => toggleCompleteLearning(itemId)} 
                                  onClick={(e) => e.stopPropagation()} 
                                  className="w-4 h-4 rounded border-gray-300 text-green-500 focus:ring-green-500 cursor-pointer" 
                                />
                              </div>
                              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 flex items-center justify-center text-base group-hover:scale-110 transition-transform">
                                {isCompleted ? '✅' : '📚'}
                              </div>
                              <h3 className={`text-sm font-bold ${isCompleted ? 'text-gray-500 line-through' : 'text-gray-800 dark:text-white'} group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:bg-clip-text transition`}>
                                {topicItem.name}
                              </h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-xs">
                              {topicItem.description}
                            </p>
                          </div>
                          <div className="flex items-center gap-1 ml-2 flex-shrink-0">
                            <StarIcon starred={isStarred} onClick={() => toggleStar(itemId)} />
                            <BookmarkIcon bookmarked={isBookmarked} onClick={() => toggleBookmark(itemId)} />
                            <ShareButton title={topicItem.name} onShare={handleShare} />
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ${expandedCard === idx ? 'rotate-180 bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-sm' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30'}`}>
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                            </div>
                          </div>
                        </div>
                      </div>

                      {expandedCard === idx && (
                        <div className="px-4 pb-4 space-y-3 border-t border-gray-200 dark:border-gray-700 animate-fade-in">
                          {topicItem.code && (
                            <div className="mt-3">
                              <div className="flex justify-between items-center mb-1.5 flex-wrap gap-2">
                                <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-1"><span className="text-sm">💻</span> Code Example</span>
                                <div className="flex gap-2">
                                  <button onClick={(e) => copyToClipboard(topicItem.code, e)} className="text-[10px] px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition shadow-sm">{copied ? '✅ Copied!' : '📋 Copy'}</button>
                                </div>
                              </div>
                              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-3 overflow-x-auto shadow-inner">
                                <pre className="text-gray-100 font-mono text-[11px] whitespace-pre-wrap"><code>{topicItem.code}</code></pre>
                              </div>
                            </div>
                          )}

                          {topicItem.lineByLine && topicItem.lineByLine.length > 0 && (
                            <div>
                              <button onClick={() => setOpenLineByLine(openLineByLine === idx ? null : idx)} className="text-blue-600 dark:text-blue-400 font-medium text-xs hover:underline flex items-center gap-1">
                                <svg className={`w-3 h-3 transition-transform ${openLineByLine === idx ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                📝 View Line-by-Line
                              </button>
                              {openLineByLine === idx && (
                                <div className="mt-2 bg-blue-50 dark:bg-blue-950/30 p-3 rounded-lg">
                                  <h4 className="font-semibold text-blue-800 dark:text-blue-300 text-xs mb-1.5">📖 Explanation:</h4>
                                  <ul className="space-y-1 text-xs text-blue-700 dark:text-blue-300 ml-4 list-disc">{topicItem.lineByLine.map((line, lineIdx) => <li key={lineIdx}>{line}</li>)}</ul>
                                </div>
                              )}
                            </div>
                          )}

                          {topicItem.simpleMeaning && (
                            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-3 rounded-lg">
                              <div className="flex items-center gap-1.5 mb-1"><span className="text-sm">💡</span><span className="font-semibold text-purple-800 dark:text-purple-300 text-xs">Simple Meaning</span></div>
                              <p className="text-purple-700 dark:text-purple-300 text-xs">{topicItem.simpleMeaning}</p>
                            </div>
                          )}

                          {topicItem.output && (
                            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 p-3 rounded-lg">
                              <div className="flex items-center gap-1.5 mb-1"><span className="text-sm">📤</span><span className="font-semibold text-green-800 dark:text-green-300 text-xs">Output</span></div>
                              <div className="bg-gray-900 text-green-300 p-2 rounded-md font-mono text-[11px]">{topicItem.output}</div>
                            </div>
                          )}

                          {topicItem.note && (
                            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-950/30 dark:to-amber-950/30 p-3 rounded-lg">
                              <div className="flex items-center gap-1.5 mb-1"><span className="text-sm">⚠️</span><span className="font-semibold text-yellow-800 dark:text-yellow-300 text-xs">Important Note</span></div>
                              <p className="text-yellow-700 dark:text-yellow-300 text-xs">{topicItem.note}</p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12 bg-white/50 dark:bg-gray-800/50 backdrop-blur rounded-lg">
                <div className="text-5xl mb-3 animate-bounce">🔍</div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">No matching learning content found for "{activeLevel}" level</p>
              </div>
            )}
          </div>
        )}

        {/* ==================== INTERVIEW SECTION ==================== */}
        {activeTab === 'interview' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
              <div className="flex gap-2 p-1 bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur rounded-lg w-fit shadow-inner">
                <button onClick={() => setExpLevel('fresher')} className={`px-4 py-1.5 rounded-md font-medium transition-all duration-200 flex items-center gap-1.5 text-xs ${expLevel === 'fresher' ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}>🎓 Fresher</button>
                <button onClick={() => setExpLevel('experienced')} className={`px-4 py-1.5 rounded-md font-medium transition-all duration-200 flex items-center gap-1.5 text-xs ${expLevel === 'experienced' ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}>💼 Experienced</button>
              </div>
              <div className="text-xs bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                🎤 Progress: {completedInterviewCount}/{totalInterview}
              </div>
            </div>

            {filteredInterview.length > 0 ? (
              <div className="space-y-3">
                {filteredInterview.map((item, idx) => {
                  const itemId = item.question || `interview_${idx}`;
                  const isStarred = starredItems[itemId] || false;
                  const isBookmarked = bookmarkedItems[itemId] || false;
                  const isCompleted = completedInterview[itemId] || false;
                  
                  return (
                    <div key={idx} className="bg-white/90 dark:bg-gray-800/90 backdrop-blur rounded-lg border border-gray-200/50 dark:border-gray-700/50 overflow-hidden hover:shadow-md transition-all duration-300 group">
                      <div onClick={() => toggleQuestion(idx)} className="p-4 cursor-pointer hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 dark:hover:from-gray-800 dark:hover:to-gray-750 transition">
                        <div className="flex justify-between items-start gap-2">
                          <div className="flex-1 flex items-start gap-2.5">
                            <div className="relative">
                              <input 
                                type="checkbox" 
                                checked={isCompleted === true} 
                                onChange={() => toggleCompleteInterview(itemId)} 
                                onClick={(e) => e.stopPropagation()} 
                                className="w-4 h-4 rounded border-gray-300 text-green-500 focus:ring-green-500 cursor-pointer mt-0.5" 
                              />
                            </div>
                            <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white text-[10px] font-bold shadow-sm flex-shrink-0">{idx + 1}</div>
                            <h3 className={`font-semibold ${isCompleted ? 'text-gray-500 line-through' : 'text-gray-800 dark:text-white'} text-sm pr-3 leading-relaxed`}>
                              {item.question}
                            </h3>
                          </div>
                          <div className="flex items-center gap-1">
                            <StarIcon starred={isStarred} onClick={() => toggleStar(itemId)} />
                            <BookmarkIcon bookmarked={isBookmarked} onClick={() => toggleBookmark(itemId)} />
                            <ShareButton title={item.question} onShare={handleShare} />
                            <svg className={`w-4 h-4 text-gray-400 transition-transform duration-300 flex-shrink-0 ${expandedQuestion === idx ? 'rotate-180' : ''} group-hover:text-blue-500`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                          </div>
                        </div>
                      </div>

                      {expandedQuestion === idx && (
                        <div className="px-4 pb-4 space-y-2.5 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-800 border-t border-gray-200 dark:border-gray-700 animate-fade-in">
                          {item.answer && (
                            <div className="p-3 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-lg">
                              <div className="flex items-center gap-1.5 mb-1.5"><span className="text-sm">📖</span><span className="font-semibold text-blue-700 dark:text-blue-300 text-xs">Answer</span></div>
                              <p className="text-gray-700 dark:text-gray-300 text-xs leading-relaxed">{item.answer}</p>
                            </div>
                          )}
                          {item.example && (
                            <div className="p-3 bg-gray-100 dark:bg-gray-800/50 rounded-lg">
                              <div className="flex justify-between items-center mb-1.5">
                                <div className="flex items-center gap-1.5"><span className="text-sm">💻</span><span className="font-semibold text-green-600 dark:text-green-400 text-xs">Example Code</span></div>
                                <button onClick={(e) => copyToClipboard(item.example, e)} className="text-[10px] px-2 py-1 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition">{copied ? '✅ Copied!' : '📋 Copy'}</button>
                              </div>
                              <pre className="bg-gray-900 text-gray-100 p-2 rounded-md overflow-x-auto text-[10px] font-mono"><code>{item.example}</code></pre>
                            </div>
                          )}
                          {item.output && (
                            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 p-3 rounded-lg">
                              <div className="flex items-center gap-1.5 mb-1"><span className="text-sm">📤</span><span className="font-semibold text-green-800 dark:text-green-300 text-xs">Output</span></div>
                              <div className="bg-gray-900 text-green-300 p-2 rounded-md font-mono text-[11px]">{item.output}</div>
                            </div>
                          )}
                          {item.note && (
                            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-950/30 dark:to-amber-950/30 p-3 rounded-lg">
                              <div className="flex items-center gap-1.5 mb-1"><span className="text-sm">⚠️</span><span className="font-semibold text-yellow-800 dark:text-yellow-300 text-xs">Note</span></div>
                              <p className="text-yellow-700 dark:text-yellow-300 text-xs">{item.note}</p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12 bg-white/50 dark:bg-gray-800/50 backdrop-blur rounded-lg">
                <div className="text-5xl mb-3 animate-pulse">🔍</div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">No matching interview questions found for "{expLevel}" level</p>
              </div>
            )}
          </div>
        )}

        {/* ==================== PROBLEMS SECTION ==================== */}
        {activeTab === 'problems' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
              <div className="flex gap-2 p-1 bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur rounded-lg w-fit shadow-inner">
                <button onClick={() => setExpLevel('fresher')} className={`px-4 py-1.5 rounded-md font-medium transition-all duration-200 flex items-center gap-1.5 text-xs ${expLevel === 'fresher' ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}>🎓 Fresher</button>
                <button onClick={() => setExpLevel('experienced')} className={`px-4 py-1.5 rounded-md font-medium transition-all duration-200 flex items-center gap-1.5 text-xs ${expLevel === 'experienced' ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}>💼 Experienced</button>
              </div>
              <div className="text-xs bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                ⚡ Progress: {completedProblemsCount}/{totalProblems}
              </div>
            </div>

            {filteredProblems.length > 0 ? (
              <div className="space-y-3">
                {filteredProblems.map((problem, idx) => {
                  const problemTitle = problem.title || problem.question || problem.name || `Problem ${idx + 1}`;
                  const problemDescription = problem.description || problem.answer || problem.statement || '';
                  const problemCode = problem.code || problem.example || problem.solution || '';
                  const itemId = problemTitle;
                  const isStarred = starredItems[itemId] || false;
                  const isBookmarked = bookmarkedItems[itemId] || false;
                  const isCompleted = completedProblems[itemId] || false;
                  
                  return (
                    <div key={idx} className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200/50 dark:border-gray-700/50 hover:scale-[1.01]">
                      <div onClick={() => toggleCard(idx)} className="p-4 cursor-pointer hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 dark:hover:from-gray-800 dark:hover:to-gray-750 transition">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2 flex-wrap">
                              <div className="relative">
                                <input 
                                  type="checkbox" 
                                  checked={isCompleted === true} 
                                  onChange={() => toggleCompleteProblems(itemId)} 
                                  onClick={(e) => e.stopPropagation()} 
                                  className="w-4 h-4 rounded border-gray-300 text-green-500 focus:ring-green-500 cursor-pointer" 
                                />
                              </div>
                              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shadow-sm ${expLevel === 'fresher' ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white' : 'bg-gradient-to-r from-orange-500 to-red-500 text-white'}`}>{idx + 1}</div>
                              <h3 className={`text-sm font-bold ${isCompleted ? 'text-gray-500 line-through' : 'text-gray-800 dark:text-white'}`}>{problemTitle}</h3>
                              {problem.difficulty && (
                                <span className={`text-[9px] px-1.5 py-0.5 rounded-full ${problem.difficulty === 'Easy' ? 'bg-green-100 text-green-700' : problem.difficulty === 'Hard' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'}`}>{problem.difficulty}</span>
                              )}
                            </div>
                            <p className={`text-gray-600 dark:text-gray-400 leading-relaxed text-xs ${isCompleted ? 'line-through opacity-70' : ''}`}>
                              {problemDescription}
                            </p>
                          </div>
                          <div className="flex items-center gap-1 ml-2 flex-shrink-0">
                            <StarIcon starred={isStarred} onClick={() => toggleStar(itemId)} />
                            <BookmarkIcon bookmarked={isBookmarked} onClick={() => toggleBookmark(itemId)} />
                            <ShareButton title={problemTitle} onShare={handleShare} />
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ${expandedCard === idx ? 'rotate-180 bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-sm' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'}`}>
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                            </div>
                          </div>
                        </div>
                      </div>

                      {expandedCard === idx && (
                        <div className="px-4 pb-4 space-y-3 border-t border-gray-200 dark:border-gray-700 animate-fade-in">
                          <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                            <div className="flex justify-between items-center mb-1.5">
                              <div className="flex items-center gap-1.5"><span className="text-sm">📋</span><span className="font-semibold text-blue-800 dark:text-blue-300 text-xs">Problem Statement</span></div>
                              <button onClick={(e) => openSolution(problem, e)} className="text-[10px] px-2 py-1 rounded-md bg-blue-100 dark:bg-blue-900/50 text-blue-700 hover:bg-blue-200 transition">View Full Solution →</button>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 text-xs leading-relaxed">
                              {problemDescription}
                            </p>
                          </div>

                          {problemCode && (
                            <div>
                              <div className="flex justify-between items-center mb-1.5">
                                <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-1"><span className="text-sm">💻</span> Solution Preview</span>
                                <button onClick={(e) => copyToClipboard(problemCode, e)} className="text-[10px] px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition shadow-sm">{copied ? '✅ Copied!' : '📋 Copy'}</button>
                              </div>
                              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-3 overflow-x-auto shadow-inner">
                                <pre className="text-gray-100 font-mono text-[11px] whitespace-pre-wrap overflow-x-auto max-h-48">
                                  <code>{problemCode}</code>
                                </pre>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12 bg-white/50 dark:bg-gray-800/50 backdrop-blur rounded-lg">
                <div className="text-5xl mb-3 animate-pulse">🔍</div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">No matching problems found for "{expLevel}" level</p>
              </div>
            )}
          </div>
        )}

        {/* ==================== PRACTICE SECTION ==================== */}
        {activeTab === 'practice' && (
          <div className="space-y-4">
            <div className="flex items-center justify-end mb-4">
              <div className="text-xs bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                📝 Progress: {completedPracticeCount}/{totalPractice}
              </div>
            </div>

            {filteredPractice.length > 0 ? (
              <div className="space-y-3">
                {filteredPractice.map((practiceItem, idx) => {
                  const itemId = practiceItem.line || practiceItem.question || `practice_${idx}`;
                  const isStarred = starredItems[itemId] || false;
                  const isBookmarked = bookmarkedItems[itemId] || false;
                  const isCompleted = completedPractice[itemId] || false;
                  
                  return (
                    <div key={idx} className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur rounded-lg p-3 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 hover:scale-[1.01]">
                      <div className="flex gap-2.5">
                        <div className="relative">
                          <input 
                            type="checkbox" 
                            checked={isCompleted === true} 
                            onChange={() => toggleCompletePractice(itemId)} 
                            onClick={(e) => e.stopPropagation()} 
                            className="w-4 h-4 rounded border-gray-300 text-green-500 focus:ring-green-500 cursor-pointer mt-1" 
                          />
                        </div>
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center text-white text-[10px] font-bold shadow-sm flex-shrink-0">{idx + 1}</div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-1">
                            <div className="flex items-center gap-1">
                              <StarIcon starred={isStarred} onClick={() => toggleStar(itemId)} />
                              <BookmarkIcon bookmarked={isBookmarked} onClick={() => toggleBookmark(itemId)} />
                              <ShareButton title={practiceItem.line || 'Practice Question'} onShare={handleShare} />
                            </div>
                          </div>
                          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-md p-2 overflow-x-auto mb-2">
                            <code className={`text-gray-100 font-mono text-[10px] ${isCompleted ? 'line-through opacity-70' : ''}`}>
                              {practiceItem.line || practiceItem.question || practiceItem.code || 'No content'}
                            </code>
                          </div>
                          <div className="space-y-1 text-xs">
                            <p className={`flex flex-wrap gap-1.5 text-[11px] ${isCompleted ? 'line-through opacity-70' : ''}`}>
                              <span className="font-semibold text-blue-600 dark:text-blue-400">📖 Explanation:</span> 
                              {practiceItem.explanation || practiceItem.answer || 'No explanation provided'}
                            </p>
                            {practiceItem.example && <p className={`flex flex-wrap gap-1.5 text-[11px] ${isCompleted ? 'line-through opacity-70' : ''}`}>
                              <span className="font-semibold text-green-600 dark:text-green-400">💡 Example:</span> {practiceItem.example}
                            </p>}
                            {practiceItem.output && <p className={`flex flex-wrap gap-1.5 text-[11px] ${isCompleted ? 'line-through opacity-70' : ''}`}>
                              <span className="font-semibold text-purple-600 dark:text-purple-400">📤 Output:</span> {practiceItem.output}
                            </p>}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
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
          <div className="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-800 rounded-xl shadow-2xl animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex justify-between items-center z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold shadow-md">📋</div>
                <div>
                  <h2 className="text-lg font-bold text-gray-800 dark:text-white">
                    {selectedProblem.title || selectedProblem.name || selectedProblem.question || 'Problem Solution'}
                  </h2>
                  <div className="flex gap-2 mt-1">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${
                      selectedProblem.difficulty === 'Easy' 
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                        : selectedProblem.difficulty === 'Hard'
                        ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                        : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                    }`}>
                      {selectedProblem.difficulty || 'Medium'}
                    </span>
                    <span className="text-[10px] text-gray-500 dark:text-gray-400">
                      ⭐ {selectedProblem.solved || Math.floor(Math.random() * 5000) + 100} solved
                    </span>
                  </div>
                </div>
              </div>
              <button 
                onClick={closeSolution}
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="p-6 space-y-5">
              <div className="flex items-center justify-end gap-2 pb-2 border-b border-gray-200 dark:border-gray-700">
                <StarIcon starred={starredItems[selectedProblem.title]} onClick={() => toggleStar(selectedProblem.title)} />
                <BookmarkIcon bookmarked={bookmarkedItems[selectedProblem.title]} onClick={() => toggleBookmark(selectedProblem.title)} />
                <ShareButton title={selectedProblem.title} onShare={handleShare} />
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2 flex items-center gap-1.5 text-sm">
                  <span className="text-base">📋</span> Problem Statement
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg">
                  {selectedProblem.description || selectedProblem.answer || selectedProblem.statement || 'Problem description not available'}
                </p>
              </div>

              {(selectedProblem.solution || selectedProblem.answer) && (
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-2 flex items-center gap-1.5 text-sm">
                    <span className="text-base">💡</span> Solution Explanation
                  </h3>
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-4 rounded-lg">
                    <p className="text-blue-700 dark:text-blue-300 text-sm leading-relaxed">
                      {selectedProblem.solution || selectedProblem.answer}
                    </p>
                  </div>
                </div>
              )}

              {(selectedProblem.example || selectedProblem.code) && (
                <div>
                  <div className="flex justify-between items-center mb-2 flex-wrap gap-2">
                    <h3 className="font-semibold text-gray-800 dark:text-white flex items-center gap-1.5 text-sm">
                      <span className="text-base">💻</span> Code Example
                    </h3>
                    <button 
                      onClick={() => copyToClipboard(selectedProblem.example || selectedProblem.code, { stopPropagation: () => {} })} 
                      className="text-[10px] px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
                    >
                      {copied ? '✅ Copied!' : '📋 Copy Code'}
                    </button>
                  </div>
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-4 overflow-x-auto shadow-inner">
                    <pre className="text-gray-100 font-mono text-sm whitespace-pre-wrap">
                      <code>{selectedProblem.example || selectedProblem.code}</code>
                    </pre>
                  </div>
                </div>
              )}

              {selectedProblem.output && (
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-2 flex items-center gap-1.5 text-sm">
                    <span className="text-base">📤</span> Expected Output
                  </h3>
                  <div className="bg-gray-900 text-green-300 p-4 rounded-lg font-mono text-sm shadow-inner">
                    {selectedProblem.output}
                  </div>
                </div>
              )}
            </div>

            <div className="sticky bottom-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 px-6 py-4 flex justify-end">
              <button 
                onClick={closeSolution}
                className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition text-sm font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {copiedShare && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg text-sm shadow-lg animate-fade-in z-50">
          Link copied to clipboard!
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scale-in { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
        @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
        .animate-fade-in { animation: fade-in 0.2s ease-out; }
        .animate-scale-in { animation: scale-in 0.2s ease-out; }
        .animate-bounce { animation: bounce 1s ease-in-out infinite; }
      `}</style>
    </div>
  );
}