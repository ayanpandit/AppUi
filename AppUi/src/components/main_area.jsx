import React, { useState } from 'react';
import { Copy, Check, Sun, Moon } from 'lucide-react';

export default function MainArea({ selectedComponent }) {
  const [copied, setCopied] = useState(false);
  const [previewBg, setPreviewBg] = useState('white'); // 'white' or 'dark'

  const handleCopyCode = () => {
    if (selectedComponent?.code) {
      navigator.clipboard.writeText(selectedComponent.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!selectedComponent) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-black">
        <p className="text-gray-400 text-sm md:text-base tracking-wider uppercase">[ Select a component to preview ]</p>
      </div>
    );
  }

  const PreviewComponent = selectedComponent.component;

  return (
    <div className="w-full h-full bg-black overflow-y-auto p-4 md:p-6 lg:p-8 space-y-6">
      {/* Preview Section with Frame */}
      <div className="bg-white/5 backdrop-blur-md rounded-xl overflow-hidden border border-white/10">
        <div className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4 border-b border-white/10">
          <h3 className="text-white font-bold text-sm md:text-base tracking-wider uppercase">[ Preview ]</h3>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPreviewBg('white')}
              className={`p-2 rounded transition-colors ${
                previewBg === 'white' 
                  ? 'bg-white text-black' 
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
              title="Light background"
            >
              <Sun size={16} />
            </button>
            <button
              onClick={() => setPreviewBg('dark')}
              className={`p-2 rounded transition-colors ${
                previewBg === 'dark' 
                  ? 'bg-gray-900 text-white' 
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
              title="Dark background"
            >
              <Moon size={16} />
            </button>
          </div>
        </div>
        
        <div className="p-4 md:p-6">
          <div className={`border border-white/20 rounded-lg overflow-hidden ${
            previewBg === 'white' ? 'bg-white' : 'bg-gray-900'
          }`}>
            {/* Preview Container - converts fixed positioning to absolute */}
            <div className="relative w-full min-h-[300px] md:min-h-[500px] overflow-auto" style={{ contain: 'layout style paint' }}>
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
      <div className="bg-white/5 backdrop-blur-md rounded-xl overflow-hidden border border-white/10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-4 md:px-6 py-3 md:py-4 border-b border-white/10">
          <h3 className="text-white font-bold text-sm md:text-base tracking-wider uppercase">[ Code ]</h3>
          <button
            onClick={handleCopyCode}
            className="flex items-center gap-2 px-4 py-2 bg-white text-black text-xs font-bold tracking-wider uppercase hover:bg-gray-200 transition-colors rounded-sm"
          >
            {copied ? (
              <>
                <Check size={14} />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy size={14} />
                <span>Copy Code</span>
              </>
            )}
          </button>
        </div>
        <pre className="p-4 md:p-6 overflow-x-auto text-xs md:text-sm text-gray-300 font-mono max-h-[400px] md:max-h-[500px]">
          <code>{selectedComponent.code || '// No code available'}</code>
        </pre>
      </div>
    </div>
  );
}
