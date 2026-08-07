// src/components/TechIcons.js
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaNode,
  FaReact,
  FaGitAlt,
  FaWordpress,
  FaShoppingCart,
  FaBootstrap,
  FaJava,
  FaPhp,
  FaCode,
  FaRedo      // Redux ke liye (FaRedux exist nahi karta)
} from 'react-icons/fa';

export const TechIcons = {
  // Frontend Icons
  html: {
    name: "HTML",
    icon: FaHtml5,
    gradient: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50 dark:bg-orange-950/20",
    color: "#E34F26"
  },
  css: {
    name: "CSS",
    icon: FaCss3Alt,
    gradient: "from-blue-500 to-indigo-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    color: "#1572B6"
  },
  javascript: {
    name: "JavaScript",
    icon: FaJs,
    gradient: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-50 dark:bg-yellow-950/20",
    color: "#F7DF1E"
  },
  reactjs: {
    name: "React.js",
    icon: FaReact,
    gradient: "from-cyan-500 to-blue-500",
    bgColor: "bg-cyan-50 dark:bg-cyan-950/20",
    color: "#61DAFB"
  },
  nextjs: {
    name: "Next.js",
    icon: FaCode,   // Next.js specific icon available in `react-icons/si` but we keep generic to avoid errors
    gradient: "from-gray-500 to-gray-700",
    bgColor: "bg-gray-100 dark:bg-gray-800",
    color: "#000000"
  },
  tailwind: {
    name: "Tailwind CSS",
    icon: FaCode,
    gradient: "from-teal-500 to-cyan-500",
    bgColor: "bg-teal-50 dark:bg-teal-950/20",
    color: "#38B2AC"
  },
  bootstrap: {
    name: "Bootstrap",
    icon: FaBootstrap,
    gradient: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-50 dark:bg-indigo-950/20",
    color: "#7952B3"
  },
  typescript: {
    name: "TypeScript",
    icon: FaCode,
    gradient: "from-blue-500 to-indigo-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    color: "#3178C6"
  },

  // Backend Icons
  python: {
    name: "Python",
    icon: FaPython,
    gradient: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50 dark:bg-green-950/20",
    color: "#3776AB"
  },
  nodejs: {
    name: "Node.js",
    icon: FaNode,   // FaNode exists in react-icons/fa
    gradient: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/20",
    color: "#339933"
  },
  mysql: {
    name: "MySQL",
    icon: FaCode,
    gradient: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50 dark:bg-orange-950/20",
    color: "#4479A1"
  },
  git: {
    name: "Git",
    icon: FaGitAlt,
    gradient: "from-red-500 to-rose-500",
    bgColor: "bg-red-50 dark:bg-red-950/20",
    color: "#F05032"
  },
  cpp: {
    name: "C++",
    icon: FaCode,
    gradient: "from-blue-500 to-indigo-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    color: "#00599C"
  },
  java: {
    name: "Java",
    icon: FaJava,
    gradient: "from-red-500 to-orange-500",
    bgColor: "bg-red-50 dark:bg-red-950/20",
    color: "#ED8B00"
  },
  go: {
    name: "Go",
    icon: FaCode,
    gradient: "from-cyan-500 to-blue-500",
    bgColor: "bg-cyan-50 dark:bg-cyan-950/20",
    color: "#00ADD8"
  },
  rust: {
    name: "Rust",
    icon: FaCode,
    gradient: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50 dark:bg-orange-950/20",
    color: "#CE422B"
  },
  php: {
    name: "PHP",
    icon: FaPhp,
    gradient: "from-indigo-500 to-violet-500",
    bgColor: "bg-indigo-50 dark:bg-indigo-950/20",
    color: "#777BB4"
  },
  ruby: {
    name: "Ruby",
    icon: FaCode,   // FaRuby doesn't exist, using FaCode
    gradient: "from-red-500 to-pink-500",
    bgColor: "bg-red-50 dark:bg-red-950/20",
    color: "#CC342D"
  },
  csharp: {
    name: "C#",
    icon: FaCode,
    gradient: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50 dark:bg-green-950/20",
    color: "#239120"
  },
  swift: {
    name: "Swift",
    icon: FaCode,
    gradient: "from-orange-500 to-yellow-500",
    bgColor: "bg-orange-50 dark:bg-orange-950/20",
    color: "#F05138"
  },
  kotlin: {
    name: "Kotlin",
    icon: FaCode,
    gradient: "from-purple-500 to-violet-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
    color: "#7F52FF"
  },
  dart: {
    name: "Dart",
    icon: FaCode,
    gradient: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    color: "#0175C2"
  },

  // CMS Icons
  wordpress: {
    name: "WordPress",
    icon: FaWordpress,
    gradient: "from-blue-500 to-indigo-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    color: "#21759B"
  },
  woocommerce: {
    name: "WooCommerce",
    icon: FaShoppingCart,
    gradient: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
    color: "#96588A"
  },
  redux: {
    name: "Redux",
    icon: FaRedo,   // FaRedux doesn't exist, using FaRedo (refresh icon, close enough)
    gradient: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-50 dark:bg-violet-950/20",
    color: "#764ABC"
  },

  // Default fallback
  default: {
    name: "Technology",
    icon: FaCode,
    gradient: "from-gray-500 to-gray-700",
    bgColor: "bg-gray-100 dark:bg-gray-800",
    color: "#6b7280"
  }
};

export default TechIcons;