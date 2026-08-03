// ========== IMPORT ALL LEARNING DATA ==========
import { learning as htmlLearning } from './html/learning.js';
import { learning as cssLearning } from './css/learning.js';
import { learning as javascriptLearning } from './javascript/learning.js';
import { learning as pythonLearning } from './python/learning.js';
import { learning as nodejsLearning } from './nodejs/learning.js';
import { reactExplanations as reactjsLearning } from './reactjs/learning.js';
import { learning as nextjsLearning } from './nextjs/learning.js';
import { learning as gitLearning } from './git/learning.js';
import { learning as wordpressLearning } from './wordpress/learning.js';
import { learning as woocommerceLearning } from './woocommerce/learning.js';
import { learning as reduxLearning } from './redux/learning.js';
import { learning as bootstrapLearning } from './bootstrap/learning.js';
import { learning as typescriptLearning } from './typescript/learning.js';
import { learning as tailwindLearning } from './tailwind/learning.js';
import { learning as mysqlLearning } from './mysql/learning.js';

// ========== IMPORT ALL INTERVIEW DATA ==========
import { interview as htmlInterview } from './html/interview.js';
import { interview as cssInterview } from './css/interview.js';
import { interview as javascriptInterview } from './javascript/interview.js';
import { interview as pythonInterview } from "./python/interview.js";
import { interview as nodejsInterview } from './nodejs/interview.js';
import { interview as reactjsInterview } from './reactjs/interview.js';
import { interview as nextjsInterview } from './nextjs/interview.js';
import { interview as gitInterview } from './git/interview.js';
import { interview as wordpressInterview } from './wordpress/interview.js';
import { interview as woocommerceInterview } from './woocommerce/interview.js';
import { interview as reduxInterview } from './redux/interview.js';
import { interview as bootstrapInterview } from './bootstrap/interview.js';
import { interview as typescriptInterview } from './typescript/interview.js';
import { interview as tailwindInterview } from './tailwind/interview.js';
import { interview as mysqlInterview } from './mysql/interview.js';

// ========== IMPORT ALL PROBLEMS DATA ==========
import { problems as htmlProblems } from './html/problems.js';
import { problems as cssProblems } from './css/problems.js';
import { problems as javascriptProblems } from './javascript/problems.js';
import { problems as pythonProblems } from './python/problems.js';
import { problems as nodejsProblems } from './nodejs/problems.js';
import { problems as reactjsProblems } from './reactjs/problems.js';
import { problems as nextjsProblems } from './nextjs/problems.js';
import { problems as gitProblems } from './git/problems.js';
import { problems as wordpressProblems } from './wordpress/problems.js';
import { problems as woocommerceProblems } from './woocommerce/problems.js';
import { problems as reduxProblems } from './redux/problems.js';
import { problems as bootstrapProblems } from './bootstrap/problems.js';
import { problems as typescriptProblems } from './typescript/problems.js';
import { problems as tailwindProblems } from './tailwind/problems.js';
import { problems as mysqlProblems } from './mysql/problems.js';

// ========== IMPORT ALL PRACTICE QUESTIONS ==========
import { questions as htmlQuestions } from './html/questions.js';
import { questions as cssQuestions } from './css/questions.js';
import { questions as javascriptQuestions } from './javascript/questions.js';
import { questions as pythonQuestions } from './python/questions.js';
import { questions as nodejsQuestions } from './nodejs/questions.js';
import { questions as reactjsQuestions } from './reactjs/questions.js';
import { questions as nextjsQuestions } from './nextjs/questions.js';
import { questions as gitQuestions } from './git/questions.js';
import { questions as wordpressQuestions } from './wordpress/questions.js';
import { questions as woocommerceQuestions } from './woocommerce/questions.js';
import { questions as reduxQuestions } from './redux/questions.js';
import { questions as bootstrapQuestions } from './bootstrap/questions.js';
import { questions as typescriptQuestions } from './typescript/questions.js';
import { questions as tailwindQuestions } from './tailwind/questions.js';
import { questions as mysqlQuestions } from './mysql/questions.js';

const comingSoonLearning = {
  basic: {
    title: 'Coming Soon',
    topics: [
      {
        name: 'Content is being prepared',
        description: 'This topic is currently under development. We are preparing beginner-friendly explanations, examples, and exercises for this technology.',
        simpleMeaning: 'This topic will be available soon.'
      }
    ]
  },
  advanced: {
    title: 'Coming Soon',
    topics: [
      {
        name: 'Advanced content is being prepared',
        description: 'Advanced concepts and real-world patterns for this topic are being documented and will be released soon.',
        simpleMeaning: 'More advanced material is on the way.'
      }
    ]
  }
};

const comingSoonInterview = {
  fresher: [
    {
      question: 'This topic is coming soon',
      answer: 'We are preparing interview questions and answers for this technology. Check back soon for the complete set.',
      note: 'This topic is currently under development.'
    }
  ],
  experienced: [
    {
      question: 'Advanced interview material is coming soon',
      answer: 'This section is being prepared with practical, interview-focused explanations and scenario-based questions.',
      note: 'Stay tuned for updates.'
    }
  ]
};

const comingSoonProblems = {
  fresher: [
    {
      title: 'Coming soon',
      description: 'Practice problems for this topic are being prepared.',
      difficulty: 'Easy'
    }
  ],
  experienced: [
    {
      title: 'Coming soon',
      description: 'Advanced coding challenges for this topic are being prepared.',
      difficulty: 'Hard'
    }
  ]
};

const comingSoonPractice = [
  {
    line: 'Coming soon',
    explanation: 'Practice questions for this topic are being prepared and will be added shortly.',
    output: 'Awaiting content'
  }
];

// ========== EXPORT TOPICS ==========
export const topics = {
  html: { name: "HTML", icon: "🌐", color: "orange" },
  css: { name: "CSS", icon: "🎨", color: "blue" },
  javascript: { name: "JavaScript", icon: "🟨", color: "yellow" },
  python: { name: "Python", icon: "🐍", color: "green" },
  nodejs: { name: "Node.js", icon: "🚀", color: "green" },
  reactjs: { name: "React.js", icon: "⚛️", color: "cyan" },
  nextjs: { name: "Next.js", icon: "▲", color: "gray" },
  git: { name: "Git & Version Control", icon: "🐙", color: "red" },
  wordpress: { name: "WordPress", icon: "📝", color: "blue" },
  woocommerce: { name: "WooCommerce", icon: "🛒", color: "purple" },
  redux: { name: "Redux", icon: "🔄", color: "violet" },
  bootstrap: { name: "Bootstrap", icon: "🧩", color: "indigo" },
  typescript: { name: "TypeScript", icon: "📘", color: "blue" },
  tailwind: { name: "Tailwind CSS", icon: "💨", color: "teal" },
  mysql: { name: "MySQL", icon: "🐬", color: "orange" },
  cpp: { name: "C++", icon: "⚙️", color: "blue" },
  java: { name: "Java", icon: "☕", color: "red" },
  go: { name: "Go", icon: "🐹", color: "cyan" },
  rust: { name: "Rust", icon: "🦀", color: "orange" },
  php: { name: "PHP", icon: "🐘", color: "indigo" },
  ruby: { name: "Ruby", icon: "💎", color: "red" },
  csharp: { name: "C#", icon: "🎯", color: "green" },
  swift: { name: "Swift", icon: "🛠️", color: "orange" },
  kotlin: { name: "Kotlin", icon: "📱", color: "purple" },
  dart: { name: "Dart", icon: "🎯", color: "blue" }
};

// ========== EXPORT AGGREGATED DATA ==========
export const learningData = {
  html: htmlLearning,
  css: cssLearning,
  javascript: javascriptLearning,
  python: pythonLearning,
  nodejs: nodejsLearning,
  reactjs: reactjsLearning,
  nextjs: nextjsLearning,
  git: gitLearning,
  wordpress: wordpressLearning,
  woocommerce: woocommerceLearning,
  redux: reduxLearning,
  bootstrap: bootstrapLearning,
  typescript: typescriptLearning,
  tailwind: tailwindLearning,
  mysql: mysqlLearning,
  cpp: comingSoonLearning,
  java: comingSoonLearning,
  go: comingSoonLearning,
  rust: comingSoonLearning,
  php: comingSoonLearning,
  ruby: comingSoonLearning,
  csharp: comingSoonLearning,
  swift: comingSoonLearning,
  kotlin: comingSoonLearning,
  dart: comingSoonLearning
};

export const interviewData = {
  html: htmlInterview,
  css: cssInterview,
  javascript: javascriptInterview,
  python: pythonInterview,
  nodejs: nodejsInterview,
  reactjs: reactjsInterview,
  nextjs: nextjsInterview,
  git: gitInterview,
  wordpress: wordpressInterview,
  woocommerce: woocommerceInterview,
  redux: reduxInterview,
  bootstrap: bootstrapInterview,
  typescript: typescriptInterview,
  tailwind: tailwindInterview,
  mysql: mysqlInterview,
  cpp: comingSoonInterview,
  java: comingSoonInterview,
  go: comingSoonInterview,
  rust: comingSoonInterview,
  php: comingSoonInterview,
  ruby: comingSoonInterview,
  csharp: comingSoonInterview,
  swift: comingSoonInterview,
  kotlin: comingSoonInterview,
  dart: comingSoonInterview
};

export const problemsData = {
  html: htmlProblems,
  css: cssProblems,
  javascript: javascriptProblems,
  python: pythonProblems,
  nodejs: nodejsProblems,
  reactjs: reactjsProblems,
  nextjs: nextjsProblems,
  git: gitProblems,
  wordpress: wordpressProblems,
  woocommerce: woocommerceProblems,
  redux: reduxProblems,
  bootstrap: bootstrapProblems,
  typescript: typescriptProblems,
  tailwind: tailwindProblems,
  mysql: mysqlProblems,
  cpp: comingSoonProblems,
  java: comingSoonProblems,
  go: comingSoonProblems,
  rust: comingSoonProblems,
  php: comingSoonProblems,
  ruby: comingSoonProblems,
  csharp: comingSoonProblems,
  swift: comingSoonProblems,
  kotlin: comingSoonProblems,
  dart: comingSoonProblems
};

export const practiceData = {
  html: htmlQuestions,
  css: cssQuestions,
  javascript: javascriptQuestions,
  python: pythonQuestions,
  nodejs: nodejsQuestions,
  reactjs: reactjsQuestions,
  nextjs: nextjsQuestions,
  git: gitQuestions,
  wordpress: wordpressQuestions,
  woocommerce: woocommerceQuestions,
  redux: reduxQuestions,
  bootstrap: bootstrapQuestions,
  typescript: typescriptQuestions,
  tailwind: tailwindQuestions,
  mysql: mysqlQuestions,
  cpp: comingSoonPractice,
  java: comingSoonPractice,
  go: comingSoonPractice,
  rust: comingSoonPractice,
  php: comingSoonPractice,
  ruby: comingSoonPractice,
  csharp: comingSoonPractice,
  swift: comingSoonPractice,
  kotlin: comingSoonPractice,
  dart: comingSoonPractice
};