// src/components/Footer.js
'use client';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const socialLinks = [
    {
      name: 'Portfolio',
      icon: '💼',
      url: 'https://guptamanish0990.github.io/Manish_Gupta/#/',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      name: 'GitHub',
      icon: '🐙',
      url: 'https://github.com/Guptamanish0990',
      gradient: 'from-gray-700 to-gray-900',
    },
    {
      name: 'Instagram',
      icon: '📷',
      url: 'https://www.instagram.com/0990_manish',
      gradient: 'from-yellow-500 via-red-500 to-pink-500',
    },
    {
      name: 'LinkedIn',
      icon: '🔗',
      url: 'https://linkedin.com/in/manish-gupta-0990',
      gradient: 'from-blue-500 to-blue-700',
    },
    {
      name: 'Email',
      icon: '📧',
      url: 'mailto:websitedeveloper0990@gmail.com',
      gradient: 'from-red-500 to-red-700',
    },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          
          {/* Left Section - Brand */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <span className="text-white text-lg font-bold">CV</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">CodeMaster Hub</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">Learn · Practice · Succeed</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-md">
              Your complete platform for mastering coding skills. Learn from basics to advanced, 
              prepare for interviews, and solve real-world coding challenges.
            </p>
           
          </div>
          
          
          
          {/* Right Section - Social Links */}
          <div className="flex-1">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Connect</h4>
            <div className="grid grid-cols-2 gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r ${social.gradient} text-white hover:scale-105 transition transform shadow-md`}
                >
                  <span className="text-lg">{social.icon}</span>
                  <span className="text-sm font-medium">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-800 my-6 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-sm">
            <p className="text-gray-500 dark:text-gray-400">
              © {currentYear} CodeMaster Hub. All rights reserved.
            </p>
            
          </div>
          
          {/* Developer Credit */}
          <div className="text-center mt-4">
            <p className="text-xs text-gray-400 dark:text-gray-500">
              Designed & Developed with ❤️ by{' '}
              <a href="https://github.com/Guptamanish0990" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                Manish Gupta
              </a>
            </p>
            <div className="flex justify-center gap-3 mt-1 text-xs text-gray-400 dark:text-gray-500">
              <span>🚀 Full-Stack Developer</span>
              <span>•</span>
              <span>💻 React | Next.js Expert</span>
              <span>•</span>
              <span>🎯 Problem Solver</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}