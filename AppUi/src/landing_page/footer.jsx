import React from 'react';
import { Github, Twitter, Linkedin, Mail, Code2, Sparkles, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const navLinks = [
    { title: 'Components', items: ['Navigation', 'Hero Sections', 'Features', 'CTAs', 'Testimonials', 'Pricing'] },
    { title: 'Resources', items: ['Documentation', 'Examples', 'Templates', 'Blog', 'Changelog'] },
    { title: 'Community', items: ['GitHub', 'Discord', 'Twitter', 'Contributors'] },
  ];

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:72px_72px]"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Top glow line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4 group">
              <div className="relative">
                <Code2 className="w-8 h-8 text-purple-500 transition-transform group-hover:rotate-12 duration-300" />
                <Sparkles className="w-4 h-4 text-cyan-400 absolute -top-1 -right-1 animate-pulse" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                app.ui
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              Beautiful, copy-paste UI components for React & Tailwind. 
              Build stunning websites faster with production-ready blocks.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="group relative w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:border-purple-500/50 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4 text-gray-400 group-hover:text-purple-400 transition-colors" />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation links */}
          {navLinks.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-sm font-semibold mb-4 text-white flex items-center gap-2">
                {section.title}
                <div className="h-px flex-1 bg-gradient-to-r from-purple-500/50 to-transparent"></div>
              </h3>
              <ul className="space-y-3">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-1 group"
                    >
                      <span>{item}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter section */}
        <div className="relative mb-12 p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20 overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-cyan-600/0 group-hover:from-purple-600/5 group-hover:to-cyan-600/5 transition-all duration-500"></div>
          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                Stay in the loop
                <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
              </h3>
              <p className="text-sm text-gray-400">
                Get updates on new components, features, and design tips.
              </p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="px-4 py-2.5 bg-black/50 border border-white/10 rounded-lg text-sm focus:outline-none focus:border-purple-500/50 transition-colors flex-1 md:w-64"
              />
              <button className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg text-sm font-medium hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="relative pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span>© 2025 app.ui by</span>
              <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors font-medium">
                Ayan Pandey
              </a>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-purple-400 transition-colors flex items-center gap-1">
                MIT License
                <span className="px-2 py-0.5 bg-green-500/10 text-green-400 rounded text-xs border border-green-500/20">
                  Open Source
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Decorative corner elements */}
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-tr from-cyan-500/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      </div>
    </footer>
  );
}