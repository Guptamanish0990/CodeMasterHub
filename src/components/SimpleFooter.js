'use client';
import { useState, useEffect } from 'react';

export default function SimpleFooter() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const socialLinks = [
    { name: 'GitHub', icon: '🐙', url: 'https://github.com/yourusername' },
    { name: 'LinkedIn', icon: '🔗', url: 'https://linkedin.com/in/yourusername' },
    { name: 'Portfolio', icon: '💼', url: 'https://yourportfolio.com' },
    { name: 'Email', icon: '📧', url: 'mailto:your.email@example.com' },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-6 mt-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">CV</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {currentYear} CodeMaster Hub. All rights reserved.
            </p>
          </div>
          
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-md"
                aria-label={social.name}
              >
                <span className="text-lg transition-transform duration-300 group-hover:scale-110">
                  {social.icon}
                </span>
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {social.name}
                </span>
              </a>
            ))}
          </div>
          
          <div className="flex gap-4 text-sm">
            <a href="/about" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition">
              About
            </a>
            <a href="/contact" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition">
              Contact
            </a>
            <a href="/privacy" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}