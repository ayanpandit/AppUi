import React from 'react';

// CardGrid Component
export const CardGrid = ({ cards = 16 }) => {
  return (
    <div className="min-h-screen bg-black p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {Array.from({ length: cards }, (_, i) => (
          <div
            key={i + 1}
            className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 min-h-[240px] border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-xl hover:shadow-gray-900/50"
          >
          </div>
        ))}
      </div>
    </div>
  );
};

// Example App.jsx usage
export default function App() {
  return (
    <div>
      <CardGrid cards={16} />
    </div>
  );
}