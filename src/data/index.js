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
  mysql: { name: "MySQL", icon: "🐬", color: "orange" }
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
  mysql: mysqlLearning
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
  mysql: mysqlInterview
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
  mysql: mysqlProblems
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
  mysql: mysqlQuestions
};