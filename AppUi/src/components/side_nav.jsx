import React from 'react';

export default function SideNav({ components, selectedComponent, onSelectComponent }) {
  return (
    <div className="w-full h-full bg-gray-800 p-4">
      <h3 className="text-white text-lg font-bold mb-4 px-2">Components</h3>
      <div className="space-y-2">
        {components && components.length > 0 ? (
          components.map((component) => (
            <button
              key={component.id}
              onClick={() => onSelectComponent(component)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                selectedComponent?.id === component.id
                  ? 'bg-purple-600 text-white font-semibold shadow-lg'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
              }`}
            >
              {component.name}
            </button>
          ))
        ) : (
          <p className="text-gray-400 text-sm px-2">No components available</p>
        )}
      </div>
    </div>
  );
}
