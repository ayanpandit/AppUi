import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function MainArea({ selectedComponent }) {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    if (selectedComponent?.code) {
      navigator.clipboard.writeText(selectedComponent.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!selectedComponent) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-700">
        <p className="text-gray-400 text-lg">Select a component to preview</p>
      </div>
    );
  }

  const PreviewComponent = selectedComponent.component;

  return (
    <div className="w-full h-full bg-gray-700 overflow-y-auto p-6 space-y-6">
      {/* Preview Section with Frame */}
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl">
        <div className="px-4 py-3 bg-gray-900 border-b border-gray-700">
          <h3 className="text-white font-semibold text-lg">Preview</h3>
        </div>
        
        <div className="p-6 bg-gray-50">
          <div className="border-4 border-gray-300 rounded-lg overflow-hidden shadow-lg bg-white">
            {/* Preview Container - converts fixed positioning to absolute */}
            <div className="relative w-full min-h-[500px] overflow-auto" style={{ contain: 'layout style paint' }}>
              <style>
                {`
                  .preview-container * {
                    position: relative !important;
                    top: 0 !important;
                    left: 0 !important;
                    right: auto !important;
                  }
                  .preview-container nav {
                    border-radius: 0 !important;
                    margin: 0 !important;
                  }
                `}
              </style>
              <div className="preview-container">
                {PreviewComponent && <PreviewComponent />}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Code Section */}
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl">
        <div className="flex items-center justify-between px-4 py-3 bg-gray-900 border-b border-gray-700">
          <h3 className="text-white font-semibold text-lg">Code</h3>
          <button
            onClick={handleCopyCode}
            className="flex items-center gap-2 px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors text-sm"
          >
            {copied ? (
              <>
                <Check size={16} />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy size={16} />
                <span>Copy Code</span>
              </>
            )}
          </button>
        </div>
        <pre className="p-4 overflow-x-auto text-sm text-gray-300 font-mono max-h-96">
          <code>{selectedComponent.code || '// No code available'}</code>
        </pre>
      </div>
    </div>
  );
}
