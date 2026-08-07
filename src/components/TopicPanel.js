'use client';
import { useState, useEffect, useCallback, useRef } from 'react';
import { learningData, interviewData, problemsData, practiceData } from '@/data';
import { FaSun, FaMoon } from 'react-icons/fa';
import TechIcons from '@/components/TechIcons';
// 👇 React Icons for tab navigation + share buttons
import {
  FaBook,
  FaMicrophone,
  FaBolt,
  FaPencilAlt,
  FaShareAlt,
  FaCopy,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';

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
          } catch (e) {
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
        <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-20 animate-fade-in">
          {navigator.share && (
            <button
              onClick={() => handleShare('native')}
              className="w-full text-left px-3 py-2 text-xs hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2"
            >
              <FaShareAlt className="text-sm" />
              <span>Native Share</span>
            </button>
          )}
          <button
            onClick={() => handleShare('copy')}
            className="w-full text-left px-3 py-2 text-xs hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2"
          >
            <FaCopy className="text-sm" />
            <span>Copy Link</span>
          </button>
          <button
            onClick={() => handleShare('twitter')}
            className="w-full text-left px-3 py-2 text-xs hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2"
          >
            <FaTwitter className="text-sm" />
            <span>Twitter</span>
          </button>
          <button
            onClick={() => handleShare('linkedin')}
            className="w-full text-left px-3 py-2 text-xs hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2"
          >
            <FaLinkedin className="text-sm" />
            <span>LinkedIn</span>
          </button>
        </div>
      )}
    </div>
  );
}

// ==================== MAIN TOPIC PANEL COMPONENT ====================
export default function TopicPanel({
  topic,
  activeTab: propActiveTab,
  setActiveTab: propSetActiveTab,
  darkMode = false,
  onToggleDark = () => { }
}) {
  // Internal activeTab if default tab is used
  const [internalActiveTab, setInternalActiveTab] = useState(propActiveTab || 'learn');
  const activeTab = propActiveTab || internalActiveTab;
  const setActiveTab = propSetActiveTab || setInternalActiveTab;

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

  // Feature states
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

  // Preferences states
  const [sortOption, setSortOption] = useState('default');
  const [hideCompleted, setHideCompleted] = useState(false);
  const [defaultTab, setDefaultTab] = useState('learn');

  // Load saved data
  useEffect(() => {
    setMounted(true);

    const savedStarred = localStorage.getItem(`starred_${topic}`);
    const savedBookmarks = localStorage.getItem(`bookmarks_${topic}`);
    const savedCompletedLearning = localStorage.getItem(`completed_learning_${topic}`);
    const savedCompletedInterview = localStorage.getItem(`completed_interview_${topic}`);
    const savedCompletedProblems = localStorage.getItem(`completed_problems_${topic}`);
    const savedCompletedPractice = localStorage.getItem(`completed_practice_${topic}`);
    const savedSortOption = localStorage.getItem(`sortOption_${topic}`);
    const savedHideCompleted = localStorage.getItem(`hideCompleted_${topic}`);
    const savedDefaultTab = localStorage.getItem(`defaultTab_${topic}`);

    if (savedStarred) setStarredItems(JSON.parse(savedStarred));
    if (savedBookmarks) setBookmarkedItems(JSON.parse(savedBookmarks));
    if (savedCompletedLearning) setCompletedLearning(JSON.parse(savedCompletedLearning));
    if (savedCompletedInterview) setCompletedInterview(JSON.parse(savedCompletedInterview));
    if (savedCompletedProblems) setCompletedProblems(JSON.parse(savedCompletedProblems));
    if (savedCompletedPractice) setCompletedPractice(JSON.parse(savedCompletedPractice));
    if (savedSortOption) setSortOption(savedSortOption);
    if (savedHideCompleted) setHideCompleted(savedHideCompleted === 'true');
    if (savedDefaultTab) setDefaultTab(savedDefaultTab);
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

  // Complete functions
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

  // ===== STABLE ID GENERATORS =====
  const getLearningId = (item, idx) => item.name || `learning_${idx}`;
  const getInterviewId = (item, idx) => item.question || `interview_${idx}`;
  const getProblemId = (item, idx) => item.title || item.question || item.name || `problem_${idx}`;
  const getPracticeId = (item, idx) => item.line || item.question || `practice_${idx}`;

  // ============================================================
  // 1. RAW DATA (level-filtered only) for calculating progress
  // ============================================================
  const rawLearning = getLearningData().map((item, idx) => ({ ...item, _id: getLearningId(item, idx) }));
  const rawInterview = getInterviewData().map((item, idx) => ({ ...item, _id: getInterviewId(item, idx) }));
  const rawProblems = getProblemsData().map((item, idx) => ({ ...item, _id: getProblemId(item, idx) }));
  const rawPractice = getPracticeData().map((item, idx) => ({ ...item, _id: getPracticeId(item, idx) }));

  // Calculate totals and completed counts from raw data
  const totalLearning = rawLearning.length;
  const totalInterview = rawInterview.length;
  const totalProblems = rawProblems.length;
  const totalPractice = rawPractice.length;

  const completedLearningCount = rawLearning.filter(item => completedLearning[item._id]).length;
  const completedInterviewCount = rawInterview.filter(item => completedInterview[item._id]).length;
  const completedProblemsCount = rawProblems.filter(item => completedProblems[item._id]).length;
  const completedPracticeCount = rawPractice.filter(item => completedPractice[item._id]).length;

  const totalAll = totalLearning + totalInterview + totalProblems + totalPractice;
  const completedAll = completedLearningCount + completedInterviewCount + completedProblemsCount + completedPracticeCount;

  // ============================================================
  // 2. Filtered data for display (starred, bookmarks, hideCompleted, search)
  // ============================================================
  let learningDataList = [...rawLearning];
  let interviewList = [...rawInterview];
  let problemsList = [...rawProblems];
  let practiceList = [...rawPractice];

  // Apply filters (starred, bookmarks)
  if (showStarredFilter) {
    learningDataList = learningDataList.filter(item => starredItems[item._id]);
    interviewList = interviewList.filter(item => starredItems[item._id]);
    problemsList = problemsList.filter(item => starredItems[item._id]);
    practiceList = practiceList.filter(item => starredItems[item._id]);
  }
  if (showBookmarksFilter) {
    learningDataList = learningDataList.filter(item => bookmarkedItems[item._id]);
    interviewList = interviewList.filter(item => bookmarkedItems[item._id]);
    problemsList = problemsList.filter(item => bookmarkedItems[item._id]);
    practiceList = practiceList.filter(item => bookmarkedItems[item._id]);
  }

  // Apply Hide Completed
  if (hideCompleted) {
    learningDataList = learningDataList.filter(item => !completedLearning[item._id]);
    interviewList = interviewList.filter(item => !completedInterview[item._id]);
    problemsList = problemsList.filter(item => !completedProblems[item._id]);
    practiceList = practiceList.filter(item => !completedPractice[item._id]);
  }

  // Sorting function
  const sortItems = (items, sortKey) => {
    if (sortKey === 'default') return items;
    const copy = [...items];
    if (sortKey === 'name') {
      copy.sort((a, b) => (a.name || a.title || a.question || '').localeCompare(b.name || b.title || b.question || ''));
    } else if (sortKey === 'difficulty') {
      const diffOrder = { 'Easy': 0, 'Medium': 1, 'Hard': 2 };
      copy.sort((a, b) => (diffOrder[a.difficulty] || 1) - (diffOrder[b.difficulty] || 1));
    } else if (sortKey === 'progress') {
      const getComp = (item) => {
        if (item._id && completedLearning[item._id]) return true;
        if (item._id && completedInterview[item._id]) return true;
        if (item._id && completedProblems[item._id]) return true;
        if (item._id && completedPractice[item._id]) return true;
        return false;
      };
      copy.sort((a, b) => {
        const aComp = getComp(a);
        const bComp = getComp(b);
        return (aComp === bComp) ? 0 : aComp ? -1 : 1;
      });
    }
    return copy;
  };

  // Apply sorting
  const sortedLearning = sortItems(learningDataList, sortOption);
  const sortedInterview = sortItems(interviewList, sortOption);
  const sortedProblems = sortItems(problemsList, sortOption);
  const sortedPractice = sortItems(practiceList, sortOption);

  // Search filtering
  const filteredLearning = sortedLearning.filter(item =>
    item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredInterview = sortedInterview.filter(item =>
    item.question?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredProblems = sortedProblems.filter(item =>
  (item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.question?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.name?.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const filteredPractice = sortedPractice.filter(item =>
    item.line?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.explanation?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Counts for starred/bookmarked
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

  // Reset individual section
  const resetSection = (section) => {
    if (!confirm(`Are you sure you want to reset ${section} progress?`)) return;
    const keyMap = {
      learning: 'completed_learning',
      interview: 'completed_interview',
      problems: 'completed_problems',
      practice: 'completed_practice'
    };
    const setMap = {
      learning: setCompletedLearning,
      interview: setCompletedInterview,
      problems: setCompletedProblems,
      practice: setCompletedPractice
    };
    localStorage.removeItem(`${keyMap[section]}_${topic}`);
    setMap[section]({});
  };

  // Clear all data
  const clearAllData = () => {
    if (window.confirm('Are you sure you want to clear ALL data? This cannot be undone.')) {
      setStarredItems({});
      setBookmarkedItems({});
      setCompletedLearning({});
      setCompletedInterview({});
      setCompletedProblems({});
      setCompletedPractice({});
      setShowStarredFilter(false);
      setShowBookmarksFilter(false);
      setSortOption('default');
      setHideCompleted(false);
      setDefaultTab('learn');
      localStorage.removeItem(`starred_${topic}`);
      localStorage.removeItem(`bookmarks_${topic}`);
      localStorage.removeItem(`completed_learning_${topic}`);
      localStorage.removeItem(`completed_interview_${topic}`);
      localStorage.removeItem(`completed_problems_${topic}`);
      localStorage.removeItem(`completed_practice_${topic}`);
      localStorage.removeItem(`sortOption_${topic}`);
      localStorage.removeItem(`hideCompleted_${topic}`);
      localStorage.removeItem(`defaultTab_${topic}`);
    }
  };

  // Export data
  const exportData = () => {
    const data = {
      starred: starredItems,
      bookmarks: bookmarkedItems,
      completedLearning,
      completedInterview,
      completedProblems,
      completedPractice,
      sortOption,
      hideCompleted,
      defaultTab
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `learnhub_${topic}_backup.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Import data
  const fileInputRef = useRef(null);
  const importData = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const data = JSON.parse(ev.target.result);
        if (data.starred) setStarredItems(data.starred);
        if (data.bookmarks) setBookmarkedItems(data.bookmarks);
        if (data.completedLearning) setCompletedLearning(data.completedLearning);
        if (data.completedInterview) setCompletedInterview(data.completedInterview);
        if (data.completedProblems) setCompletedProblems(data.completedProblems);
        if (data.completedPractice) setCompletedPractice(data.completedPractice);
        if (data.sortOption) setSortOption(data.sortOption);
        if (data.hideCompleted !== undefined) setHideCompleted(data.hideCompleted);
        if (data.defaultTab) setDefaultTab(data.defaultTab);
        // Save to localStorage
        Object.keys(data).forEach(key => {
          if (key === 'starred') localStorage.setItem(`starred_${topic}`, JSON.stringify(data.starred));
          else if (key === 'bookmarks') localStorage.setItem(`bookmarks_${topic}`, JSON.stringify(data.bookmarks));
          else if (key === 'completedLearning') localStorage.setItem(`completed_learning_${topic}`, JSON.stringify(data.completedLearning));
          else if (key === 'completedInterview') localStorage.setItem(`completed_interview_${topic}`, JSON.stringify(data.completedInterview));
          else if (key === 'completedProblems') localStorage.setItem(`completed_problems_${topic}`, JSON.stringify(data.completedProblems));
          else if (key === 'completedPractice') localStorage.setItem(`completed_practice_${topic}`, JSON.stringify(data.completedPractice));
          else if (key === 'sortOption') localStorage.setItem(`sortOption_${topic}`, data.sortOption);
          else if (key === 'hideCompleted') localStorage.setItem(`hideCompleted_${topic}`, String(data.hideCompleted));
          else if (key === 'defaultTab') localStorage.setItem(`defaultTab_${topic}`, data.defaultTab);
        });
        alert('Data imported successfully!');
      } catch (err) {
        alert('Invalid file format.');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  // 👇 mainTabs with React Icons
  const mainTabs = [
    { id: 'learn', label: 'Learning', icon: FaBook, desc: 'Basic → Advanced' },
    { id: 'interview', label: 'Interview', icon: FaMicrophone, desc: 'Q&A' },
    { id: 'problems', label: 'Problems', icon: FaBolt, desc: 'Coding Challenges' },
    { id: 'practice', label: 'Practice', icon: FaPencilAlt, desc: 'Questions' }
  ];

  // Set default tab on mount
  useEffect(() => {
    if (defaultTab && !propActiveTab) {
      setActiveTab(defaultTab);
    }
  }, [defaultTab]);

  // Progress bar color helper
  const getProgressColor = (completed, total) => {
    if (total === 0) return 'bg-gray-300 dark:bg-gray-600';
    const pct = (completed / total) * 100;
    if (pct === 100) return 'bg-green-500';
    if (pct >= 50) return 'bg-blue-500';
    if (pct >= 25) return 'bg-yellow-500';
    return 'bg-orange-500';
  };

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
    // Dark mode applied to root container
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 ${darkMode ? 'dark' : ''}`}>
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-cyan-200/20 to-blue-200/20 dark:from-cyan-500/5 dark:to-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-200/20 to-pink-200/20 dark:from-purple-500/5 dark:to-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Preferences Toggle Button */}
      <button
        type="button"
        onClick={() => setShowSidebar(!showSidebar)}
        className="fixed right-4 top-4 z-30 flex items-center gap-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-800/90 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 shadow-lg backdrop-blur transition hover:scale-105"
        aria-label="Toggle Preferences"
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span>Preferences</span>
      </button>

      {/* ==================== UPDATED PREFERENCES SIDEBAR ==================== */}
      {showSidebar && (
        <>
          <div className="fixed inset-0 z-40 bg-black/40" onClick={() => setShowSidebar(false)} />
          <aside className="fixed left-0 top-0 z-50 h-full w-80 border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-2xl overflow-y-auto">
            <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 p-4 sticky top-0 bg-white dark:bg-gray-900 z-10">
              <div>
                <h3 className="text-sm font-bold text-gray-800 dark:text-white">Preferences</h3>
                <p className="text-[10px] text-gray-500 dark:text-gray-400">Customize your learning view</p>
              </div>
              <button
                type="button"
                onClick={() => setShowSidebar(false)}
                className="flex h-7 w-7 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                ✕
              </button>
            </div>

            <div className="p-4 space-y-6">
              {/* Theme */}
              <div>
                <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1.5">Theme</p>
                <button
                  onClick={() => onToggleDark(!darkMode)}
                  className={`w-full py-2 text-sm rounded-lg transition flex items-center justify-center gap-2 ${darkMode
                      ? 'bg-gray-700 text-white hover:bg-gray-600'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                >
                  {darkMode ? (
                    <>
                      <FaSun className="w-4 h-4" />
                      <span>Light Mode</span>
                    </>
                  ) : (
                    <>
                      <FaMoon className="w-4 h-4" />
                      <span>Dark Mode</span>
                    </>
                  )}
                </button>
              </div>

              {/* Sort Order */}
              <div>
                <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1.5">Sort Order</p>
                <div className="flex flex-wrap gap-1.5">
                  {['Default', 'Name', 'Difficulty', 'Progress'].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => {
                        const val = opt.toLowerCase();
                        setSortOption(val);
                        localStorage.setItem(`sortOption_${topic}`, val);
                      }}
                      className={`px-3 py-1.5 text-xs rounded-lg transition ${sortOption === opt.toLowerCase()
                        ? 'bg-indigo-600 text-white shadow-md'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                        }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Hide Completed */}
              <div>
                <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1.5">Completed</p>
                <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hideCompleted}
                    onChange={() => {
                      setHideCompleted(!hideCompleted);
                      localStorage.setItem(`hideCompleted_${topic}`, String(!hideCompleted));
                    }}
                    className="w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <span>Hide completed items</span>
                </label>
              </div>

              {/* Default Tab */}
              <div>
                <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1.5">Default Tab</p>
                <div className="flex flex-wrap gap-1.5">
                  {mainTabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => {
                        setDefaultTab(tab.id);
                        localStorage.setItem(`defaultTab_${topic}`, tab.id);
                        setActiveTab(tab.id);
                      }}
                      className={`px-3 py-1.5 text-xs rounded-lg transition ${defaultTab === tab.id
                        ? 'bg-indigo-600 text-white shadow-md'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                        }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Filters */}
              <div>
                <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1.5">Filters</p>
                <div className="space-y-1.5">
                  <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={showStarredFilter}
                      onChange={() => setShowStarredFilter(!showStarredFilter)}
                      className="w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <span>Starred Only</span>
                    <span className="text-xs text-gray-400 dark:text-gray-500 ml-auto">({starredCount})</span>
                  </label>
                  <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={showBookmarksFilter}
                      onChange={() => setShowBookmarksFilter(!showBookmarksFilter)}
                      className="w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <span>Bookmarks</span>
                    <span className="text-xs text-gray-400 dark:text-gray-500 ml-auto">({bookmarkedCount})</span>
                  </label>
                </div>
              </div>

              {/* Starred Items List */}
              {starredCount > 0 && (
                <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
                  <h4 className="text-xs font-bold text-gray-700 dark:text-gray-300 flex items-center gap-1.5 mb-2">⭐ Starred Items</h4>
                  <div className="max-h-48 overflow-y-auto space-y-1">
                    {Object.entries(starredItems)
                      .filter(([_, val]) => val)
                      .map(([id]) => {
                        let found = null;
                        const allData = [
                          ...rawLearning.map(d => ({ ...d, section: 'Learning' })),
                          ...rawInterview.map(d => ({ ...d, section: 'Interview' })),
                          ...rawProblems.map(d => ({ ...d, section: 'Problems' })),
                          ...rawPractice.map(d => ({ ...d, section: 'Practice' }))
                        ];
                        found = allData.find(d => d._id === id);
                        if (!found) return null;
                        const title = found.name || found.question || found.title || found.line || 'Item';
                        return (
                          <div key={id} className="flex justify-between items-center p-1.5 bg-gray-50 dark:bg-gray-800 rounded-md text-[10px]">
                            <span className="truncate max-w-[180px]">{title}</span>
                            <button onClick={() => toggleStar(id)} className="text-yellow-500 hover:text-yellow-700">✕</button>
                          </div>
                        );
                      })}
                  </div>
                </div>
              )}

              {/* Bookmarks List */}
              {bookmarkedCount > 0 && (
                <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
                  <h4 className="text-xs font-bold text-gray-700 dark:text-gray-300 flex items-center gap-1.5 mb-2">🔖 Bookmarks</h4>
                  <div className="max-h-48 overflow-y-auto space-y-1">
                    {Object.entries(bookmarkedItems)
                      .filter(([_, val]) => val)
                      .map(([id]) => {
                        let found = null;
                        const allData = [
                          ...rawLearning.map(d => ({ ...d, section: 'Learning' })),
                          ...rawInterview.map(d => ({ ...d, section: 'Interview' })),
                          ...rawProblems.map(d => ({ ...d, section: 'Problems' })),
                          ...rawPractice.map(d => ({ ...d, section: 'Practice' }))
                        ];
                        found = allData.find(d => d._id === id);
                        if (!found) return null;
                        const title = found.name || found.question || found.title || found.line || 'Item';
                        return (
                          <div key={id} className="flex justify-between items-center p-1.5 bg-gray-50 dark:bg-gray-800 rounded-md text-[10px]">
                            <span className="truncate max-w-[180px]">{title}</span>
                            <button onClick={() => toggleBookmark(id)} className="text-blue-500 hover:text-blue-700">✕</button>
                          </div>
                        );
                      })}
                  </div>
                </div>
              )}

              {/* Progress Section */}
              <div>
                <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2">Progress</p>
                <div className="space-y-2">
                  {/* Learning */}
                  <div>
                    <div className="flex justify-between text-[10px] text-gray-600 dark:text-gray-400">
                      <span>📘 Learning</span>
                      <span className="font-medium">{completedLearningCount}/{totalLearning}</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mt-0.5">
                      <div
                        className={`h-full ${getProgressColor(completedLearningCount, totalLearning)} rounded-full transition-all duration-500`}
                        style={{ width: totalLearning > 0 ? `${(completedLearningCount / totalLearning) * 100}%` : '0%' }}
                      />
                    </div>
                  </div>

                  {/* Interview */}
                  <div>
                    <div className="flex justify-between text-[10px] text-gray-600 dark:text-gray-400">
                      <span>🎤 Interview</span>
                      <span className="font-medium">{completedInterviewCount}/{totalInterview}</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mt-0.5">
                      <div
                        className={`h-full ${getProgressColor(completedInterviewCount, totalInterview)} rounded-full transition-all duration-500`}
                        style={{ width: totalInterview > 0 ? `${(completedInterviewCount / totalInterview) * 100}%` : '0%' }}
                      />
                    </div>
                  </div>

                  {/* Problems */}
                  <div>
                    <div className="flex justify-between text-[10px] text-gray-600 dark:text-gray-400">
                      <span>⚡ Problems</span>
                      <span className="font-medium">{completedProblemsCount}/{totalProblems}</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mt-0.5">
                      <div
                        className={`h-full ${getProgressColor(completedProblemsCount, totalProblems)} rounded-full transition-all duration-500`}
                        style={{ width: totalProblems > 0 ? `${(completedProblemsCount / totalProblems) * 100}%` : '0%' }}
                      />
                    </div>
                  </div>

                  {/* Practice */}
                  <div>
                    <div className="flex justify-between text-[10px] text-gray-600 dark:text-gray-400">
                      <span>📝 Practice</span>
                      <span className="font-medium">{completedPracticeCount}/{totalPractice}</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mt-0.5">
                      <div
                        className={`h-full ${getProgressColor(completedPracticeCount, totalPractice)} rounded-full transition-all duration-500`}
                        style={{ width: totalPractice > 0 ? `${(completedPracticeCount / totalPractice) * 100}%` : '0%' }}
                      />
                    </div>
                  </div>

                  {/* Overall */}
                  <div className="pt-1 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex justify-between text-[11px] font-medium text-gray-700 dark:text-gray-300">
                      <span>📊 Overall</span>
                      <span>{completedAll}/{totalAll} ({totalAll > 0 ? Math.round((completedAll / totalAll) * 100) : 0}%)</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mt-0.5">
                      <div
                        className="h-full bg-indigo-600 rounded-full transition-all duration-500"
                        style={{ width: totalAll > 0 ? `${(completedAll / totalAll) * 100}%` : '0%' }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Reset Individual Sections */}
              <div>
                <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1.5">Reset Progress</p>
                <div className="flex flex-wrap gap-1.5">
                  {['Learning', 'Interview', 'Problems', 'Practice'].map((sec) => (
                    <button
                      key={sec}
                      onClick={() => resetSection(sec.toLowerCase())}
                      className="px-3 py-1.5 text-xs rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/40 transition"
                    >
                      Reset {sec}
                    </button>
                  ))}
                </div>
              </div>

              {/* Export / Import */}
              <div>
                <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1.5">Backup</p>
                <div className="flex gap-2">
                  <button
                    onClick={exportData}
                    className="flex-1 py-1.5 text-xs rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition"
                  >
                    📥 Export
                  </button>
                  <label className="flex-1 py-1.5 text-xs rounded-lg bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/40 transition text-center cursor-pointer">
                    📤 Import
                    <input
                      type="file"
                      accept=".json"
                      onChange={importData}
                      ref={fileInputRef}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              {/* Clear All Data */}
              <button
                onClick={clearAllData}
                className="w-full py-2.5 text-sm font-semibold text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 bg-red-50 dark:bg-red-900/20 hover:bg-red-100 dark:hover:bg-red-900/40 rounded-lg transition-colors border border-red-200 dark:border-red-800/30"
              >
                🗑️ Clear All Data
              </button>
            </div>
          </aside>
        </>
      )}

      {/* Main Content */}
      <div className="relative max-w-5xl mx-auto px-4 py-6 md:px-6 md:py-8">
        {/* ====== UPDATED HERO SECTION ====== */}
        <div className={`relative mb-6 overflow-hidden rounded-xl bg-gradient-to-r ${currentInfo.gradient} shadow-lg`}>
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative p-4 md:p-5">
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <div className="flex items-center justify-center gap-3 flex-wrap">
                <div className="relative">
                  <div className="absolute inset-0 bg-white/20 rounded-xl blur-md"></div>
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center text-2xl sm:text-3xl shadow-lg">
                    {/* 👇 CORRECTED: Render React icon component */}
                    {typeof currentInfo.icon === 'function' ? (
                      <currentInfo.icon className="w-6 h-6 text-white" />
                    ) : (
                      currentInfo.icon
                    )}
                  </div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 flex-wrap">
                    <h1 className="text-xl sm:text-2xl font-bold text-white drop-shadow-md">{currentInfo.name}</h1>
                    <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded-full">Pro</span>
                  </div>
                  <p className="text-white/80 text-[10px] sm:text-xs mt-0.5">Learning, Interview Q&A, Problem Solving, and Practice Questions</p>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-1.5">
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
        {(showStarredFilter || showBookmarksFilter || hideCompleted) && (
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span className="text-[10px] text-gray-500">Active filters:</span>
            {showStarredFilter && (
              <button onClick={() => setShowStarredFilter(false)} className="text-[10px] px-2 py-0.5 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 flex items-center gap-1">⭐ Starred Only ✕</button>
            )}
            {showBookmarksFilter && (
              <button onClick={() => setShowBookmarksFilter(false)} className="text-[10px] px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 flex items-center gap-1">🔖 Bookmarks Only ✕</button>
            )}
            {hideCompleted && (
              <button onClick={() => { setHideCompleted(false); localStorage.setItem(`hideCompleted_${topic}`, 'false'); }} className="text-[10px] px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 flex items-center gap-1">✅ Hide Completed ✕</button>
            )}
            <button onClick={() => { setShowStarredFilter(false); setShowBookmarksFilter(false); setHideCompleted(false); localStorage.setItem(`hideCompleted_${topic}`, 'false'); }} className="text-[10px] px-2 py-0.5 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600 transition">Clear all</button>
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

        {/* ===== TAB NAVIGATION WITH REACT ICONS ===== */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mb-6">
          {mainTabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`group relative p-2.5 rounded-lg transition-all duration-300 ${activeTab === tab.id
                ? `bg-gradient-to-r ${currentInfo.gradient} text-white shadow-md transform scale-[1.02]`
                : 'bg-white/70 dark:bg-gray-800/70 backdrop-blur text-gray-700 dark:text-gray-300 hover:scale-105 hover:shadow-md border border-gray-200/50 dark:border-gray-700/50'
                }`}
            >
              <div className="flex flex-col items-center gap-0.5">
                <div className={`text-lg transition-transform duration-300 group-hover:scale-110 ${activeTab === tab.id ? 'animate-bounce' : ''}`}>
                  {typeof tab.icon === 'function' ? (
                    <tab.icon className="w-5 h-5" />
                  ) : (
                    tab.icon
                  )}
                </div>
                <span className="font-medium text-[11px]">{tab.label}</span>
                <span className={`text-[9px] ${activeTab === tab.id ? 'text-white/80' : 'text-gray-500'}`}>
                  {tab.desc}
                </span>
              </div>
            </button>
          ))}
        </div>

        {searchTerm && (
          <div className="text-center mb-3 text-xs text-gray-500 dark:text-gray-400">
            Found {(activeTab === 'learn' ? filteredLearning.length : activeTab === 'interview' ? filteredInterview.length : activeTab === 'problems' ? filteredProblems.length : filteredPractice.length)} result(s) for "{searchTerm}"
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
                  const itemId = topicItem._id;
                  const isStarred = starredItems[itemId] || false;
                  const isBookmarked = bookmarkedItems[itemId] || false;
                  const isCompleted = completedLearning[itemId] || false;

                  return (
                    <div key={idx} className={`group bg-white/90 dark:bg-gray-800/90 backdrop-blur rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border ${isCompleted ? 'border-green-500/50' : 'border-gray-200/50 dark:border-gray-700/50'} hover:scale-[1.01]`}>
                      <div onClick={() => toggleCard(idx)} className="cursor-pointer hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 dark:hover:from-gray-800 dark:hover:to-gray-750 transition p-4">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-2 flex-wrap">
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
                              <h3 className={`text-sm font-bold ${isCompleted ? 'text-gray-500 line-through' : 'text-gray-800 dark:text-white'} group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:bg-clip-text transition break-words`}>
                                {topicItem.name}
                              </h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-xs break-words whitespace-pre-wrap">
                              {topicItem.description}
                            </p>
                          </div>
                          <div className="flex items-center justify-end gap-1 sm:ml-2 sm:flex-shrink-0">
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
                  const itemId = item._id;
                  const isStarred = starredItems[itemId] || false;
                  const isBookmarked = bookmarkedItems[itemId] || false;
                  const isCompleted = completedInterview[itemId] || false;

                  return (
                    <div key={idx} className="bg-white/90 dark:bg-gray-800/90 backdrop-blur rounded-lg border border-gray-200/50 dark:border-gray-700/50 overflow-hidden hover:shadow-md transition-all duration-300 group">
                      <div onClick={() => toggleQuestion(idx)} className="p-4 cursor-pointer hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 dark:hover:from-gray-800 dark:hover:to-gray-750 transition">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                          <div className="flex-1 min-w-0 flex items-start gap-2.5">
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
                            <h3 className={`font-semibold ${isCompleted ? 'text-gray-500 line-through' : 'text-gray-800 dark:text-white'} text-sm pr-3 leading-relaxed break-words`}>
                              {item.question}
                            </h3>
                          </div>
                          <div className="flex items-center justify-end gap-1 sm:flex-shrink-0">
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
                  const itemId = problem._id;
                  const isStarred = starredItems[itemId] || false;
                  const isBookmarked = bookmarkedItems[itemId] || false;
                  const isCompleted = completedProblems[itemId] || false;

                  return (
                    <div key={idx} className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200/50 dark:border-gray-700/50 hover:scale-[1.01]">
                      <div onClick={() => toggleCard(idx)} className="p-4 cursor-pointer hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 dark:hover:from-gray-800 dark:hover:to-gray-750 transition">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                          <div className="flex-1 min-w-0">
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
                              <h3 className={`text-sm font-bold break-words ${isCompleted ? 'text-gray-500 line-through' : 'text-gray-800 dark:text-white'}`}>{problemTitle}</h3>
                              {problem.difficulty && (
                                <span className={`text-[9px] px-1.5 py-0.5 rounded-full ${problem.difficulty === 'Easy' ? 'bg-green-100 text-green-700' : problem.difficulty === 'Hard' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'}`}>{problem.difficulty}</span>
                              )}
                            </div>
                            <p className={`text-gray-600 dark:text-gray-400 leading-relaxed text-xs break-words whitespace-pre-wrap ${isCompleted ? 'line-through opacity-70' : ''}`}>
                              {problemDescription}
                            </p>
                          </div>
                          <div className="flex items-center justify-end gap-1 sm:ml-2 sm:flex-shrink-0">
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
                  const itemId = practiceItem._id;
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
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${selectedProblem.difficulty === 'Easy'
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
                <StarIcon starred={starredItems[selectedProblem._id]} onClick={() => toggleStar(selectedProblem._id)} />
                <BookmarkIcon bookmarked={bookmarkedItems[selectedProblem._id]} onClick={() => toggleBookmark(selectedProblem._id)} />
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
                      onClick={() => copyToClipboard(selectedProblem.example || selectedProblem.code, { stopPropagation: () => { } })}
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