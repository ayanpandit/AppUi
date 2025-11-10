import React from 'react';

export default function SideNav({ components, selectedComponent, onSelectComponent }) {
  return (
    <div className="w-full h-full bg-black p-4">
      <h3 className="text-white text-lg font-bold mb-4 px-2">Components</h3>
      <div className="space-y-3">
        {components && components.length > 0 ? (
          components.map((component) => (
            <button
              key={component.id}
              onClick={() => onSelectComponent(component)}
              className={`relative w-full text-left px-4 py-4 rounded-2xl transition-all duration-300 hover:translate-y-[-4px] hover:scale-[1.02] transform-gpu perspective-1000 flex items-center justify-center cursor-pointer group overflow-hidden ${
                selectedComponent?.id === component.id
                  ? 'bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 text-white font-black shadow-[inset_-2px_-2px_8px_rgba(0,0,0,0.6),inset_2px_2px_8px_rgba(255,255,255,0.1),0_15px_30px_rgba(0,0,0,0.8)]'
                  : 'bg-gradient-to-br from-gray-500 via-gray-600 to-gray-700 text-white font-semibold shadow-[inset_-2px_-2px_8px_rgba(0,0,0,0.6),inset_2px_2px_8px_rgba(255,255,255,0.1),0_15px_30px_rgba(0,0,0,0.8)] hover:shadow-[inset_-2px_-2px_8px_rgba(0,0,0,0.4),inset_2px_2px_8px_rgba(255,255,255,0.15),0_20px_40px_rgba(0,0,0,0.9)]'
              }`}
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                selectedComponent?.id === component.id ? 'opacity-100' : ''
              }`}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 bg-cyan-400/20 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-purple-400/20 rounded-full blur-xl"></div>
              </div>
              
              {/* Text content */}
              <div className="relative z-10 text-center w-full">
                <h4 className="text-lg font-black tracking-tight group-hover:scale-105 transition-transform duration-300" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                  {component.name}
                </h4>
                <p className="text-white/60 text-xs mt-1 tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  Component
                </p>
                
                {/* Decorative lines */}
                <div className="mt-2 flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                  <div className="h-px w-4 bg-gradient-to-r from-transparent to-cyan-400"></div>
                  <div className="w-0.5 h-0.5 rounded-full bg-cyan-400"></div>
                  <div className="h-px w-4 bg-gradient-to-l from-transparent to-purple-400"></div>
                </div>
              </div>
              
              {/* Corner accents */}
              <div className={`absolute top-1 left-1 w-4 h-4 border-l-2 border-t-2 transition-colors duration-300 ${
                selectedComponent?.id === component.id 
                  ? 'border-cyan-400/60' 
                  : 'border-cyan-400/0 group-hover:border-cyan-400/40'
              }`}></div>
              <div className={`absolute bottom-1 right-1 w-4 h-4 border-r-2 border-b-2 transition-colors duration-300 ${
                selectedComponent?.id === component.id 
                  ? 'border-purple-400/60' 
                  : 'border-purple-400/0 group-hover:border-purple-400/40'
              }`}></div>
            </button>
          ))
        ) : (
          <p className="text-gray-400 text-sm px-2">No components available</p>
        )}
      </div>
    </div>
  );
}
