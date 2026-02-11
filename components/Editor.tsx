
import React, { useState, useEffect } from 'react';
import { generateContent } from '../services/geminiService';

const STORAGE_KEY = 'creatorhub_draft_persistence';

export const Editor: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [tone, setTone] = useState('Professional');
  const [length, setLength] = useState('Short');
  const [generating, setGenerating] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved'>('idle');
  const [draft, setDraft] = useState(`🚀 Introducing the next evolution of productivity!

We’ve been working behind the scenes to bring you something truly special. Whether you're a solo creator or part of a big team, this new AI-powered workflow is going to change how you build.

Why it matters:
1. Effortless generation
2. Cross-platform sync
3. Brand consistency every time

Link in bio to join the waitlist! #Innovation #CreatorEconomy #AISolutions`);

  // Load draft from localStorage on mount
  useEffect(() => {
    const savedDraft = localStorage.getItem(STORAGE_KEY);
    if (savedDraft) {
      setDraft(savedDraft);
    }
  }, []);

  const handleGenerate = async () => {
    if (!prompt) return;
    setGenerating(true);
    try {
      const result = await generateContent(prompt, tone, length);
      if (result) setDraft(result);
    } finally {
      setGenerating(false);
    }
  };

  const handleSave = () => {
    setSaveStatus('saving');
    localStorage.setItem(STORAGE_KEY, draft);
    
    // Show "Saved" feedback for 2 seconds
    setTimeout(() => {
      setSaveStatus('saved');
      setTimeout(() => setSaveStatus('idle'), 2000);
    }, 400);
  };

  return (
    <div className="p-8 max-w-5xl mx-auto w-full">
      <div className="bg-background-light dark:bg-[#1c1d3a] rounded-2xl p-1 border border-[#cfd0e7] dark:border-[#2a2b4a] shadow-sm">
        <div className="flex items-start gap-4 p-5">
          <div className="size-10 rounded-full bg-cover bg-center shrink-0 border-2 border-white dark:border-[#2a2b4a]" style={{ backgroundImage: "url('https://picsum.photos/100')" }}></div>
          <textarea 
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full bg-transparent border-none focus:ring-0 text-lg text-[#0d0e1b] dark:text-white placeholder-[#adaed7] resize-none min-h-[120px]" 
            placeholder="What do you want to create? Describe your content idea..."
          />
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 p-5 border-t border-[#cfd0e7] dark:border-[#2a2b4a]">
          <div className="flex gap-4">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold text-[#4c4d9a] dark:text-[#a1a1c2] mb-1">Tone</span>
              <select 
                value={tone}
                onChange={(e) => setTone(e.target.value)}
                className="bg-white dark:bg-[#101122] border-[#cfd0e7] dark:border-[#2a2b4a] rounded-lg text-sm py-1.5 pl-3 pr-8 focus:ring-primary"
              >
                <option>Professional</option>
                <option>Witty</option>
                <option>Hype</option>
                <option>Informative</option>
              </select>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold text-[#4c4d9a] dark:text-[#a1a1c2] mb-1">Length</span>
              <select 
                value={length}
                onChange={(e) => setLength(e.target.value)}
                className="bg-white dark:bg-[#101122] border-[#cfd0e7] dark:border-[#2a2b4a] rounded-lg text-sm py-1.5 pl-3 pr-8 focus:ring-primary"
              >
                <option>Short</option>
                <option>Medium</option>
                <option>Long</option>
              </select>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2.5 text-[#4c4d9a] dark:text-[#a1a1c2] hover:bg-primary/10 hover:text-primary rounded-lg transition-colors">
              <span className="material-symbols-outlined">attach_file</span>
            </button>
            <button 
              onClick={handleGenerate}
              disabled={generating}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-2.5 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-primary/20 transition-all disabled:opacity-50"
            >
              <span className="material-symbols-outlined text-sm">{generating ? 'sync' : 'bolt'}</span>
              {generating ? 'Generating...' : 'Generate'}
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold flex items-center gap-2">
            Draft Editor
            <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full uppercase font-black">Live</span>
          </h2>
          <div className="flex items-center gap-2">
            {saveStatus === 'saved' && (
              <span className="text-xs font-bold text-green-500 flex items-center gap-1 animate-pulse">
                <span className="material-symbols-outlined text-sm">check_circle</span>
                Saved to Local
              </span>
            )}
            <button 
              onClick={handleSave}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
                saveStatus === 'saving' 
                  ? 'bg-gray-100 border-gray-200 text-gray-400' 
                  : 'bg-white dark:bg-[#1c1d3a] border-[#cfd0e7] dark:border-[#2a2b4a] text-[#4c4d9a] dark:text-[#a1a1c2] hover:border-primary hover:text-primary'
              }`}
            >
              <span className={`material-symbols-outlined text-sm ${saveStatus === 'saving' ? 'animate-spin' : ''}`}>
                {saveStatus === 'saving' ? 'sync' : 'save'}
              </span>
              {saveStatus === 'saving' ? 'Saving...' : 'Save Draft'}
            </button>
          </div>
        </div>
        <div className="border border-[#cfd0e7] dark:border-[#2a2b4a] rounded-2xl overflow-hidden shadow-sm bg-white dark:bg-[#1c1d3a]">
          <div className="bg-gray-50 dark:bg-[#1c1d3a] border-b border-[#cfd0e7] dark:border-[#2a2b4a] px-4 py-3 flex gap-4">
            <span className="material-symbols-outlined text-xl cursor-pointer hover:text-primary">format_bold</span>
            <span className="material-symbols-outlined text-xl cursor-pointer hover:text-primary">format_italic</span>
            <span className="material-symbols-outlined text-xl cursor-pointer hover:text-primary">format_list_bulleted</span>
            <span className="material-symbols-outlined text-xl cursor-pointer hover:text-primary">link</span>
            <span className="material-symbols-outlined text-xl cursor-pointer hover:text-primary ml-auto">history</span>
          </div>
          <div className="p-8 min-h-[350px]">
            <textarea 
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              className="w-full h-full min-h-[300px] border-none focus:ring-0 p-0 text-[#0d0e1b] dark:text-gray-300 leading-relaxed text-lg bg-transparent resize-none"
            />
          </div>
        </div>
      </div>

      <div className="mt-10 mb-20">
        <h2 className="text-xl font-bold mb-4">Content Preview</h2>
        <div className="flex justify-center bg-background-light dark:bg-[#1c1d3a] rounded-2xl py-12 border border-dashed border-[#cfd0e7] dark:border-[#2a2b4a]">
          <div className="w-80 bg-white dark:bg-[#101122] rounded-[3rem] border-[10px] border-black overflow-hidden shadow-2xl relative">
            <div className="p-4 flex items-center gap-2 border-b border-gray-100 dark:border-white/5">
              <div className="size-6 rounded-full bg-primary/20"></div>
              <span className="text-[10px] font-bold">yourbrand_official</span>
            </div>
            <div className="aspect-square bg-gradient-to-br from-indigo-100 to-primary/30 flex items-center justify-center p-8">
              <span className="material-symbols-outlined text-6xl text-primary/40">image</span>
            </div>
            <div className="p-4">
              <div className="flex gap-3 mb-3">
                <span className="material-symbols-outlined text-xl">favorite</span>
                <span className="material-symbols-outlined text-xl">chat_bubble</span>
                <span className="material-symbols-outlined text-xl">send</span>
              </div>
              <p className="text-[10px] line-clamp-3 leading-relaxed">
                <span className="font-bold">yourbrand_official</span> {draft}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
