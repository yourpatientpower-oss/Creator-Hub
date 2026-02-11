
import React, { useState, useRef } from 'react';

interface BrandAsset {
  id: string;
  name: string;
  url: string;
}

export const Copilot: React.FC = () => {
  const [uploadedAssets, setUploadedAssets] = useState<BrandAsset[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files[0]) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        const newAsset: BrandAsset = {
          id: Math.random().toString(36).substr(2, 9),
          name: file.name,
          url: e.target?.result as string,
        };
        setUploadedAssets((prev) => [...prev, newAsset]);
      };
      reader.readAsDataURL(file);
    }
    // Reset input so the same file can be uploaded again if needed
    if (event.target) event.target.value = '';
  };

  const removeAsset = (id: string) => {
    setUploadedAssets((prev) => prev.filter((asset) => asset.id !== id));
  };

  return (
    <aside className="w-[30%] bg-background-light dark:bg-[#16172d] border-l border-[#cfd0e7] dark:border-[#2a2b4a] flex flex-col p-6 overflow-y-auto no-scrollbar shrink-0">
      <div className="flex items-center gap-3 mb-8 shrink-0">
        <div className="p-2 bg-primary/10 rounded-lg">
          <span className="material-symbols-outlined text-primary">psychology</span>
        </div>
        <h3 className="text-lg font-bold">AI Copilot</h3>
      </div>
      
      <div className="flex flex-col gap-8">
        <section className="shrink-0">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#4c4d9a] dark:text-[#a1a1c2]">Alternative Hooks</h4>
            <span className="material-symbols-outlined text-sm cursor-pointer hover:rotate-180 transition-transform">refresh</span>
          </div>
          <div className="flex flex-col gap-3">
            {[
              "Stop wasting hours on manual formatting. Here's the secret...",
              "What if your content could create itself? We're making it happen.",
              "The productivity hack that 99% of creators are missing."
            ].map((hook, i) => (
              <div key={i} className="bg-white dark:bg-[#1c1d3a] p-4 rounded-xl border border-[#cfd0e7] dark:border-[#2a2b4a] hover:border-primary transition-colors cursor-pointer group shadow-sm">
                <p className="text-sm italic text-[#0d0e1b] dark:text-gray-300 leading-relaxed">"{hook}"</p>
                <div className="flex justify-end mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] font-bold text-primary flex items-center gap-1">Use this <span className="material-symbols-outlined text-[12px]">arrow_forward</span></span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="shrink-0">
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#4c4d9a] dark:text-[#a1a1c2] mb-4">Trending Tags</h4>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 bg-primary/10 text-primary text-[11px] font-bold rounded-full border border-primary/20">#Innovation (98k)</span>
            <span className="px-3 py-1.5 bg-white dark:bg-white/5 text-[11px] font-bold rounded-full border border-[#cfd0e7] dark:border-[#2a2b4a]">#Productivity</span>
            <span className="px-3 py-1.5 bg-white dark:bg-white/5 text-[11px] font-bold rounded-full border border-[#cfd0e7] dark:border-[#2a2b4a]">#AItools</span>
            <span className="px-3 py-1.5 bg-white dark:bg-white/5 text-[11px] font-bold rounded-full border border-[#cfd0e7] dark:border-[#2a2b4a]">#Marketing2024</span>
          </div>
        </section>

        <section className="shrink-0">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#4c4d9a] dark:text-[#a1a1c2]">Brand Kit</h4>
            <button 
              onClick={handleUploadClick}
              className="text-primary text-[10px] font-bold uppercase hover:underline flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[14px]">add_circle</span>
              Upload
            </button>
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileChange} 
              accept="image/*" 
              className="hidden" 
            />
          </div>
          
          <div className="flex flex-col gap-3">
            {/* Default Asset */}
            <div className="flex items-center gap-4 p-4 bg-white dark:bg-[#1c1d3a] rounded-xl border border-[#cfd0e7] dark:border-[#2a2b4a] shadow-sm">
              <div className="size-10 bg-primary rounded-lg flex items-center justify-center text-white shrink-0">
                <span className="material-symbols-outlined">filter_vintage</span>
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold">Default Logo</p>
                <p className="text-[10px] text-[#4c4d9a] dark:text-[#a1a1c2]">SVG / Vector</p>
              </div>
              <span className="material-symbols-outlined text-[#4c4d9a] text-sm">lock</span>
            </div>

            {/* Custom Uploaded Assets */}
            {uploadedAssets.length > 0 && (
              <div className="grid grid-cols-1 gap-3">
                {uploadedAssets.map((asset) => (
                  <div 
                    key={asset.id} 
                    className="group relative bg-white dark:bg-[#1c1d3a] rounded-xl border border-[#cfd0e7] dark:border-[#2a2b4a] p-3 transition-all hover:border-primary/50 shadow-sm overflow-hidden"
                  >
                    <div className="flex items-center gap-4">
                      {/* Larger Preview with Zoom */}
                      <div className="size-16 bg-gray-50 dark:bg-[#101122] rounded-lg overflow-hidden shrink-0 border border-[#cfd0e7] dark:border-[#2a2b4a] flex items-center justify-center relative">
                        <img 
                          src={asset.url} 
                          alt={asset.name} 
                          className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-125" 
                        />
                      </div>
                      <div className="flex-1 overflow-hidden">
                        <p className="text-xs font-bold truncate text-[#0d0e1b] dark:text-white">{asset.name}</p>
                        <p className="text-[10px] text-[#4c4d9a] dark:text-[#a1a1c2] mt-0.5 font-medium">Custom Asset</p>
                        <p className="text-[9px] text-primary mt-1 font-bold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="material-symbols-outlined text-[10px]">zoom_in</span>
                          Hover to zoom
                        </p>
                      </div>
                      <button 
                        onClick={() => removeAsset(asset.id)}
                        className="p-1.5 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all opacity-0 group-hover:opacity-100"
                        title="Delete asset"
                      >
                        <span className="material-symbols-outlined text-sm">delete</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Color Palette */}
            <div className="p-4 bg-white dark:bg-[#1c1d3a] rounded-xl border border-[#cfd0e7] dark:border-[#2a2b4a] shadow-sm">
              <p className="text-[10px] font-bold uppercase text-[#4c4d9a] dark:text-[#a1a1c2] mb-3">Brand Colors</p>
              <div className="flex gap-3">
                <div className="group relative">
                  <div className="size-8 rounded-full bg-[#6467f2] border-2 border-white dark:border-[#1c1d3a] shadow-sm cursor-pointer hover:scale-110 transition-transform"></div>
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[8px] font-bold opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white px-1 rounded">#6467F2</span>
                </div>
                <div className="group relative">
                  <div className="size-8 rounded-full bg-[#101122] border-2 border-white dark:border-[#1c1d3a] shadow-sm cursor-pointer hover:scale-110 transition-transform"></div>
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[8px] font-bold opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white px-1 rounded">#101122</span>
                </div>
                <div className="group relative">
                  <div className="size-8 rounded-full bg-[#f6f6f8] border-2 border-white dark:border-[#1c1d3a] shadow-sm cursor-pointer hover:scale-110 transition-transform"></div>
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[8px] font-bold opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white px-1 rounded">#F6F6F8</span>
                </div>
                <div className="group relative">
                  <div className="size-8 rounded-full bg-[#ff6b6b] border-2 border-white dark:border-[#1c1d3a] shadow-sm cursor-pointer hover:scale-110 transition-transform"></div>
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[8px] font-bold opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white px-1 rounded">#FF6B6B</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </aside>
  );
};
