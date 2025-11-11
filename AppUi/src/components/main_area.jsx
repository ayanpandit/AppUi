import React, { useState } from 'react';
import { Copy, Check, Sun, Moon } from 'lucide-react';

export default function MainArea({ selectedComponent }) {
  const [copied, setCopied] = useState(false);
  const [previewBg, setPreviewBg] = useState('white'); // 'white' or 'dark'
  const [previewWidth, setPreviewWidth] = useState(1366); // Default laptop width

  const handleCopyCode = () => {
    if (selectedComponent?.code) {
      navigator.clipboard.writeText(selectedComponent.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const resetToLaptop = () => {
    setPreviewWidth(1366);
  };

  const setToFullHD = () => {
    setPreviewWidth(1920);
  };

  const setToTablet = () => {
    setPreviewWidth(768);
  };

  const setToMobile = () => {
    setPreviewWidth(375);
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
          <div className="flex items-center gap-2 flex-wrap">
            {/* Width Display */}
            <span className="text-white/60 text-xs font-mono">{previewWidth}px</span>
            
            {/* Preset Buttons */}
            <button
              onClick={setToMobile}
              className="px-3 py-1 text-xs bg-white/10 text-white hover:bg-white/20 rounded transition-colors"
              title="Mobile (375px)"
            >
              📱
            </button>
            <button
              onClick={setToTablet}
              className="px-3 py-1 text-xs bg-white/10 text-white hover:bg-white/20 rounded transition-colors"
              title="Tablet (768px)"
            >
              📱
            </button>
            <button
              onClick={resetToLaptop}
              className="px-3 py-1 text-xs bg-white/10 text-white hover:bg-white/20 rounded transition-colors"
              title="15.6 inch Laptop (1366px)"
            >
              💻
            </button>
            <button
              onClick={setToFullHD}
              className="px-3 py-1 text-xs bg-white/10 text-white hover:bg-white/20 rounded transition-colors"
              title="Full HD (1920px)"
            >
              🖥️
            </button>
            
            {/* Background Toggle */}
            <div className="w-px h-6 bg-white/20"></div>
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
        
        <div className="p-4 md:p-6 flex justify-center items-center">
          {/* Resizable Preview Container */}
          <div className="relative">
            {/* Preview Frame */}
            <div 
              className={`border-2 border-white/30 rounded-lg overflow-hidden shadow-2xl ${
                previewBg === 'white' ? 'bg-white' : 'bg-gray-900'
              }`}
              style={{ 
                width: `${previewWidth}px`,
                height: '768px',
                transition: 'width 0.3s ease'
              }}
            >
              {/* Browser-like chrome */}
              <div className="h-8 bg-gray-200 border-b border-gray-300 flex items-center px-3 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              
              {/* Component Preview Area */}
              <div 
                className="w-full overflow-auto"
                style={{ height: 'calc(768px - 32px)' }}
              >
                <style>
                  {`
                    .preview-component-container {
                      min-height: 100%;
                      position: relative;
                    }
                    .preview-component-container > * {
                      position: relative !important;
                    }
                    .preview-component-container nav,
                    .preview-component-container header {
                      position: sticky !important;
                      top: 0 !important;
                      left: 0 !important;
                      right: 0 !important;
                      z-index: 50 !important;
                    }
                  `}
                </style>
                <div className="preview-component-container">
                  {PreviewComponent && <PreviewComponent />}
                </div>
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
