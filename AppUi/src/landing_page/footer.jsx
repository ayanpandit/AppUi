import React from 'react';
import { Github, Twitter, Linkedin, Mail, Code2, ArrowUpRight } from 'lucide-react';
import image from '../assets/footer.png';
import logo from '../assets/logo.png';

export default function Footer() {
  const navLinks = [
    { title: 'Components', items: ['Navigation', 'Hero Sections', 'Features', 'CTAs'] },
    { title: 'Resources', items: ['Documentation', 'Examples', 'Templates', 'Blog'] },
    { title: 'Community', items: ['GitHub', 'Discord', 'Twitter'] },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/ayanpandit', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com/ayanpandit_31', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/in/ayan-pandey-b66067296', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:aayanpandey8528@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top border */}
        <div className="h-px bg-white mb-12"></div>

        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Logo" className="w-8 h-8" />
              <span className="text-2xl font-bold text-white">
                APP.UI
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-6 max-w-sm">
              Beautiful, copy-paste UI components for React & Tailwind. Build stunning websites faster.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:border-purple-500 hover:bg-purple-500/10 transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-4 h-4 text-gray-400 hover:text-purple-400 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation links */}
          {navLinks.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-sm font-semibold mb-4 text-white">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-1 group"
                    >
                      <span>{item}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Feedback section */}
        <div className="mb-12 p-6 rounded-xl border border-white/20 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-lg font-bold mb-1">Feedback</h3>
              <p className="text-sm text-gray-400">Share your thoughts or suggestions to help us improve app.ui!</p>
            </div>
            <form className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="px-4 py-2 bg-black border border-white/10 rounded-lg text-sm focus:outline-none focus:border-purple-500 transition-colors flex-1"
                />
                <input
                  type="text"
                  placeholder="LinkedIn Username or URL"
                  className="px-4 py-2 bg-black border border-white/10 rounded-lg text-sm focus:outline-none focus:border-purple-500 transition-colors flex-1"
                />
              </div>
              <textarea
                placeholder="Your message..."
                rows={3}
                className="px-4 py-2 bg-black border border-white/10 rounded-lg text-sm focus:outline-none focus:border-purple-500 transition-colors resize-none"
              />
              <button type="submit" className="self-end px-6 py-2 bg-purple-600 rounded-lg text-sm font-medium hover:bg-purple-500 transition-colors whitespace-nowrap">
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div>
              <span>© 2025 APP.UI by </span>
              <a href="#" className="text-white hover:text-gray-300 transition-colors font-medium">
                Ayan Pandey
              </a>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-purple-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Terms</a>
              <span className="flex items-center gap-2">
                MIT License
                <span className="px-2 py-0.5 bg-green-500/10 text-green-400 rounded text-xs border border-green-500/30">
                  Open Source
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}