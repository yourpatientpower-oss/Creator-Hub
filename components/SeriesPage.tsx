
import React, { useState, useMemo, useRef, useEffect } from 'react';
import { SeriesItem, PipelineDraft, CompletedPost } from '../types';
import { generateImage, repurposeContent } from '../services/geminiService';
import { SeriesWizard } from './SeriesWizard';

const INITIAL_MOCK_SERIES: SeriesItem[] = [
  {
    id: '1',
    title: 'Tech Tip Tuesday',
    frequency: 'Weekly',
    created: '3 weeks ago',
    platforms: ['instagram', 'twitter', 'tiktok'],
    structure: ['Hook: Counter-intuitive Fact', 'Value: The 3-step Solution', 'CTA: Drop a "TECH" in comments'],
    nextPost: 'Oct 24th, 09:00 AM',
    autoFill: true,
    status: 'active'
  },
  {
    id: '2',
    title: 'Motivational Mondays',
    frequency: 'Weekly',
    created: '1 month ago',
    platforms: ['linkedin', 'instagram'],
    structure: ['Quote: Morning Inspiration', 'Context: Why it matters today', 'Action: One small win challenge'],
    nextPost: 'Oct 23rd, 08:00 AM',
    autoFill: false,
    status: 'active'
  },
  {
    id: '3',
    title: 'Growth Breakdowns',
    frequency: 'Bi-Weekly',
    created: '5 days ago',
    platforms: ['linkedin', 'tiktok'],
    structure: ['Revenue Snapshot: Before/After', 'Analysis: The Lever pulled', 'Add step...'],
    nextPost: 'Oct 30th, 11:30 AM',
    autoFill: true,
    status: 'active'
  }
];

const INITIAL_MOCK_PIPELINE: PipelineDraft[] = [
  { id: 'p1', name: 'The hidden power of Tailwind config...', series: 'Tech Tip Tuesday', confidence: 92, status: 'Review Required', content: 'Tailwind CSS is more than just utility classes. By mastering the config file, you can build entire design systems in minutes. Stop writing custom CSS and start configuring your design language.' },
  { id: 'p2', name: 'Stop overthinking your morning...', series: 'Motivational Mondays', confidence: 85, status: 'Ready to Post', content: 'Consistency > Intensity. A 5-minute morning routine you actually do beats a 60-minute one you skip. Start small. One glass of water. One deep breath. One task.' }
];

const MOCK_COMPLETED_POSTS: CompletedPost[] = [
  { 
    id: 'c1', 
    title: 'Why AI won\'t replace creators', 
    platform: 'linkedin', 
    date: 'Oct 15, 2024', 
    series: 'Growth Breakdowns',
    content: 'AI is a tool, not a creator. The magic happens when human empathy meets algorithmic speed. Here is how I use Gemini to 10x my output without losing my voice...',
    metrics: { views: '4.2k', likes: '156' }
  }
];

// Reusable Tooltip Component Pattern (CSS-based)
const Tooltip: React.FC<{ text: string; children: React.ReactNode; position?: 'top' | 'bottom' }> = ({ text, children, position = 'top' }) => {
  const posClasses = position === 'top' 
    ? 'bottom-full mb-2' 
    : 'top-full mt-2';
  const caretClasses = position === 'top'
    ? 'top-full border-t-gray-900 dark:border-t-white'
    : 'bottom-full border-b-gray-900 dark:border-b-white';

  return (
    <div className="relative group/tooltip">
      {children}
      <div className={`absolute left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 dark:bg-white text-white dark:text-black text-[10px] rounded font-bold opacity-0 group-hover/tooltip:opacity-100 pointer-events-none transition-all duration-200 translate-y-1 group-hover/tooltip:translate-y-0 whitespace-nowrap z-[60] shadow-xl ${posClasses}`}>
        {text}
        <div className={`absolute left-1/2 -translate-x-1/2 border-4 border-transparent ${caretClasses}`}></div>
      </div>
    </div>
  );
};

export const SeriesPage: React.FC = () => {
  const [seriesList, setSeriesList] = useState<SeriesItem[]>(INITIAL_MOCK_SERIES);
  const [drafts, setDrafts] = useState<PipelineDraft[]>(INITIAL_MOCK_PIPELINE);
  const [completedPosts] = useState<CompletedPost[]>(MOCK_COMPLETED_POSTS);
  const [frequencyFilter, setFrequencyFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'draft'>('all');
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Wizard State
  const [showWizard, setShowWizard] = useState(false);

  // Scheduling State
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [schedulingSeriesId, setSchedulingSeriesId] = useState<string | null>(null);
  const [tempDate, setTempDate] = useState('');
  const [tempTime, setTempTime] = useState('');

  // Image Generation State
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [targetSeriesId, setTargetSeriesId] = useState<string | null>(null);
  const [imagePrompt, setImagePrompt] = useState('');
  const [aspectRatio, setAspectRatio] = useState('1:1');
  const [generatedPreview, setGeneratedPreview] = useState<string | null>(null);
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);

  // Repurposing State
  const [isRepurposeModalOpen, setIsRepurposeModalOpen] = useState(false);
  const [repurposeSource, setRepurposeSource] = useState<{ content: string; platform: string; series: string } | null>(null);
  const [targetPlatform, setTargetPlatform] = useState<string>('twitter');
  const [repurposedResult, setRepurposedResult] = useState<string>('');
  const [isRepurposing, setIsRepurposing] = useState(false);

  // Inline Editing State
  const [editingDraftId, setEditingDraftId] = useState<string | null>(null);
  const [editDraftName, setEditDraftName] = useState('');
  const [editDraftSeries, setEditDraftSeries] = useState('');

  const platformOptions = [
    { id: 'instagram', label: 'Instagram', icon: 'photo_camera' },
    { id: 'twitter', label: 'X / Twitter', icon: 'chat' },
    { id: 'tiktok', label: 'TikTok', icon: 'play_circle' },
    { id: 'linkedin', label: 'LinkedIn', icon: 'work' },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const togglePlatform = (platform: string) => {
    setSelectedPlatforms(prev => 
      prev.includes(platform) 
        ? prev.filter(p => p !== platform) 
        : [...prev, platform]
    );
  };

  const filteredSeries = useMemo(() => {
    return seriesList.filter(item => {
      const matchesFrequency = frequencyFilter === 'All' || item.frequency === frequencyFilter;
      const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
      const matchesPlatform = selectedPlatforms.length === 0 || item.platforms.some(p => selectedPlatforms.includes(p));
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFrequency && matchesStatus && matchesPlatform && matchesSearch;
    });
  }, [seriesList, frequencyFilter, statusFilter, selectedPlatforms, searchQuery]);

  const activeCount = seriesList.filter(s => s.status === 'active').length;
  const draftCount = seriesList.filter(s => s.status === 'draft').length;

  const openScheduleModal = (series: SeriesItem) => {
    setSchedulingSeriesId(series.id);
    setIsScheduleModalOpen(true);
    setTempDate(new Date().toISOString().split('T')[0]);
    setTempTime('09:00');
  };

  const confirmSchedule = () => {
    if (!schedulingSeriesId) return;
    const dateObj = new Date(tempDate + 'T' + tempTime);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = months[dateObj.getMonth()];
    const day = dateObj.getDate();
    let suffix = 'th';
    if (day === 1 || day === 21 || day === 31) suffix = 'st';
    else if (day === 2 || day === 22) suffix = 'nd';
    else if (day === 3 || day === 23) suffix = 'rd';

    const formattedDate = `${month} ${day}${suffix}, ${tempTime}`;
    setSeriesList(prev => prev.map(s => s.id === schedulingSeriesId ? { ...s, nextPost: formattedDate } : s));
    setIsScheduleModalOpen(false);
    setSchedulingSeriesId(null);
  };

  const startEditingDraft = (draft: PipelineDraft) => {
    setEditingDraftId(draft.id);
    setEditDraftName(draft.name);
    setEditDraftSeries(draft.series);
  };

  const saveDraftChanges = () => {
    if (!editingDraftId) return;
    setDrafts(prev => prev.map(d => 
      d.id === editingDraftId 
        ? { ...d, name: editDraftName, series: editDraftSeries } 
        : d
    ));
    setEditingDraftId(null);
  };

  const handleOpenImageModal = (series: SeriesItem) => {
    setTargetSeriesId(series.id);
    setImagePrompt(`High quality professional cover for a content series titled "${series.title}". Modern aesthetic.`);
    setGeneratedPreview(null);
    setIsImageModalOpen(true);
  };

  const handleGenerateCover = async () => {
    if (!imagePrompt) return;
    setIsGeneratingImage(true);
    try {
      const imageUrl = await generateImage(imagePrompt, aspectRatio);
      setGeneratedPreview(imageUrl);
    } catch (error) {
      console.error("Failed to generate image:", error);
    } finally {
      setIsGeneratingImage(false);
    }
  };

  const applyGeneratedCover = () => {
    if (targetSeriesId && generatedPreview) {
      setSeriesList(prev => prev.map(s => s.id === targetSeriesId ? { ...s, coverImage: generatedPreview } : s));
      setIsImageModalOpen(false);
    }
  };

  // Repurposing logic
  const handleOpenRepurpose = (item: CompletedPost | PipelineDraft) => {
    const isCompleted = 'platform' in item;
    setRepurposeSource({
      content: isCompleted ? (item as CompletedPost).content : (item as PipelineDraft).content || '',
      platform: isCompleted ? (item as CompletedPost).platform : 'Draft Pipeline',
      series: item.series
    });
    setRepurposedResult('');
    setIsRepurposeModalOpen(true);
  };

  const handleRepurposeRun = async () => {
    if (!repurposeSource) return;
    setIsRepurposing(true);
    try {
      const result = await repurposeContent(repurposeSource.content, targetPlatform, repurposeSource.platform);
      setRepurposedResult(result || '');
    } catch (error) {
      console.error("Repurposing failed:", error);
    } finally {
      setIsRepurposing(false);
    }
  };

  const saveRepurposedAsDraft = () => {
    if (!repurposeSource || !repurposedResult) return;
    const newDraft: PipelineDraft = {
      id: `p-rep-${Date.now()}`,
      name: `Repurposed for ${targetPlatform.toUpperCase()}`,
      series: repurposeSource.series,
      confidence: 100,
      status: 'Draft',
      content: repurposedResult
    };
    setDrafts(prev => [newDraft, ...prev]);
    setIsRepurposeModalOpen(false);
  };

  if (showWizard) {
    return <SeriesWizard onClose={() => setShowWizard(false)} onComplete={() => setShowWizard(false)} />;
  }

  return (
    <div className="p-10 max-w-7xl mx-auto w-full flex flex-col gap-10">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white font-epilogue tracking-tight">Content Series & Templates</h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-lg text-sm">
            Manage your recurring thematic content and automated workflows.
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <div className="relative group">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">search</span>
            <input 
              type="text" 
              placeholder="Search series..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-sm w-64 focus:ring-2 focus:ring-blue-600 transition-all shadow-sm"
            />
          </div>
          <button 
            onClick={() => setShowWizard(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-blue-600/20 transition-all active:scale-95"
          >
            <span className="material-symbols-outlined text-lg">add</span>
            Create New
          </button>
        </div>
      </div>

      {/* Primary Filters Row */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-gray-100 dark:border-white/5 pb-8">
        <div className="flex flex-col gap-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Frequency</span>
          <div className="flex gap-2">
            {['All', 'Daily', 'Weekly', 'Bi-Weekly'].map((tab) => (
              <button 
                key={tab} 
                onClick={() => setFrequencyFilter(tab)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${frequencyFilter === tab ? 'bg-gray-900 text-white dark:bg-white dark:text-black shadow-md' : 'bg-gray-100 dark:bg-white/5 text-gray-500 hover:bg-gray-200 dark:hover:bg-white/10'}`}
              >
                {tab}{tab === 'All' ? ` (${seriesList.length})` : ''}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 relative" ref={dropdownRef}>
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Platforms</span>
          <Tooltip text="Filter by Social Channels">
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center justify-between min-w-[200px] px-4 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-xs font-bold text-gray-700 dark:text-gray-300 hover:border-blue-600 transition-all shadow-sm"
            >
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-blue-600">filter_list</span>
                {selectedPlatforms.length === 0 ? 'All Platforms' : `${selectedPlatforms.length} Selected`}
              </div>
              <span className={`material-symbols-outlined text-sm transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}>expand_more</span>
            </button>
          </Tooltip>
          
          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-[#1c1d3a] border border-gray-200 dark:border-[#2a2b4a] rounded-2xl shadow-2xl z-50 py-2 animate-in fade-in zoom-in-95 duration-200">
              <div className="px-4 py-2 border-b border-gray-50 dark:border-white/5 flex justify-between items-center mb-1">
                <span className="text-[10px] font-black uppercase text-gray-400">Select Channels</span>
                {selectedPlatforms.length > 0 && (
                  <button onClick={() => setSelectedPlatforms([])} className="text-[10px] text-blue-600 hover:underline">Clear</button>
                )}
              </div>
              {platformOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => togglePlatform(option.id)}
                  className="w-full flex items-center justify-between px-4 py-2.5 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className={`size-8 rounded-lg flex items-center justify-center transition-all ${
                      selectedPlatforms.includes(option.id) 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 dark:bg-white/5 text-gray-400 group-hover:bg-gray-200'
                    }`}>
                      <span className="material-symbols-outlined text-sm">{option.icon}</span>
                    </div>
                    <span className={`text-xs font-bold ${selectedPlatforms.includes(option.id) ? 'text-blue-600' : 'text-gray-600 dark:text-gray-400'}`}>
                      {option.label}
                    </span>
                  </div>
                  {selectedPlatforms.includes(option.id) && (
                    <span className="material-symbols-outlined text-blue-600 text-sm">check_circle</span>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-3 items-end self-end">
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Status</span>
          <div className="flex items-center gap-4 text-xs font-bold">
            <button 
              onClick={() => setStatusFilter(statusFilter === 'active' ? 'all' : 'active')}
              className={`flex items-center gap-1.5 transition-all px-4 py-2 rounded-full border ${statusFilter === 'active' ? 'bg-green-50 border-green-200 text-green-700' : 'bg-transparent border-transparent text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5'}`}
            >
              <div className="size-2 rounded-full bg-green-500 shadow-sm shadow-green-500/50"></div> {activeCount} Active
            </button>
            <button 
              onClick={() => setStatusFilter(statusFilter === 'draft' ? 'all' : 'draft')}
              className={`flex items-center gap-1.5 transition-all px-4 py-2 rounded-full border ${statusFilter === 'draft' ? 'bg-gray-100 border-gray-200 text-gray-700' : 'bg-transparent border-transparent text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5'}`}
            >
              <div className="size-2 rounded-full bg-gray-300 shadow-sm"></div> {draftCount} Drafts
            </button>
          </div>
        </div>
      </div>

      {/* Series Grid */}
      {filteredSeries.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
          {filteredSeries.map((item) => (
            <div key={item.id} className="bg-white dark:bg-[#1c1d3a] border border-gray-100 dark:border-[#2a2b4a] rounded-2xl overflow-hidden shadow-sm flex flex-col group hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              {item.coverImage ? (
                <div className="w-full aspect-[2/1] bg-gray-100 dark:bg-white/5 overflow-hidden relative">
                  <img src={item.coverImage} alt={item.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Tooltip text="Change Cover">
                      <button 
                        onClick={() => handleOpenImageModal(item)}
                        className="size-8 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-lg flex items-center justify-center text-white"
                      >
                        <span className="material-symbols-outlined text-sm">edit</span>
                      </button>
                    </Tooltip>
                  </div>
                </div>
              ) : (
                <div className="w-full h-1.5 bg-blue-600"></div>
              )}

              <div className="p-5 flex flex-col gap-4">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <h3 className="text-[15px] font-bold text-gray-900 dark:text-white truncate">{item.title}</h3>
                      {item.status === 'draft' && (
                        <span className="text-[8px] bg-gray-100 dark:bg-white/10 text-gray-400 px-1 py-0.5 rounded uppercase font-black tracking-tighter shrink-0">Draft</span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold text-blue-600 bg-blue-50 dark:bg-blue-900/20 px-1.5 py-0.5 rounded-md whitespace-nowrap">{item.frequency}</span>
                      <span className="text-[10px] text-gray-400 font-medium truncate">Since {item.created}</span>
                    </div>
                  </div>
                  <Tooltip text="Series Options" position="bottom">
                    <button className="text-gray-300 hover:text-gray-600 p-1 -mt-1 -mr-1"><span className="material-symbols-outlined text-xl">more_vert</span></button>
                  </Tooltip>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex gap-1.5">
                    {item.platforms.map(p => (
                      <div key={p} className={`size-6 rounded-md flex items-center justify-center text-white shadow-sm ${
                        p === 'instagram' ? 'bg-gradient-to-tr from-orange-400 to-pink-500' :
                        p === 'twitter' ? 'bg-sky-500' :
                        p === 'tiktok' ? 'bg-black' : 'bg-blue-700'
                      }`}>
                        <span className="material-symbols-outlined text-[14px]">{
                          p === 'instagram' ? 'photo_camera' :
                          p === 'tiktok' ? 'play_circle' : 
                          p === 'twitter' ? 'chat' : 'work'
                        }</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gray-50/50 dark:bg-white/5 p-3 rounded-xl border border-gray-50 dark:border-white/5">
                    <div className="flex flex-col gap-2">
                      {item.structure.slice(0, 2).map((step, idx) => (
                        <div key={idx} className="flex gap-2 items-center">
                          <span className="size-4 rounded-full bg-white dark:bg-white/10 border border-gray-100 dark:border-white/10 flex items-center justify-center text-[8px] font-bold shrink-0">{idx + 1}</span>
                          <span className="text-[11px] font-medium text-gray-600 dark:text-gray-400 truncate leading-none">{step}</span>
                        </div>
                      ))}
                      {item.structure.length > 2 && (
                        <p className="text-[9px] text-gray-400 italic ml-6 font-medium">+{item.structure.length - 2} more steps</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-gray-50 dark:border-white/5 mt-auto">
                  <div className="flex flex-col">
                    <span className="text-[9px] text-gray-400 uppercase font-black tracking-widest mb-0.5">Next Update</span>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[11px] font-bold text-gray-900 dark:text-gray-200">{item.nextPost}</span>
                      <div className="flex gap-1">
                        <Tooltip text="Schedule Post">
                          <button onClick={() => openScheduleModal(item)} className="size-5 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 rounded flex items-center justify-center transition-colors">
                            <span className="material-symbols-outlined text-[12px] text-blue-600">event</span>
                          </button>
                        </Tooltip>
                        <Tooltip text="Generate AI Cover">
                          <button onClick={() => handleOpenImageModal(item)} className="size-5 bg-indigo-50 dark:bg-indigo-900/20 hover:bg-indigo-100 rounded flex items-center justify-center transition-colors">
                            <span className="material-symbols-outlined text-[12px] text-primary">image</span>
                          </button>
                        </Tooltip>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                     <div className="flex flex-col items-end">
                       <span className="text-[8px] font-black text-blue-600 uppercase tracking-tighter flex items-center gap-0.5">
                         <span className="material-symbols-outlined text-[10px]">bolt</span> AUTO
                       </span>
                       <Tooltip text="Toggle AI Auto-fill">
                         <button className={`w-8 h-4 rounded-full transition-all relative mt-0.5 ${item.autoFill ? 'bg-blue-600' : 'bg-gray-200 dark:bg-white/10'}`}>
                           <div className={`size-3 bg-white rounded-full absolute top-0.5 transition-all ${item.autoFill ? 'right-0.5' : 'left-0.5'}`}></div>
                         </button>
                       </Tooltip>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <button 
            onClick={() => setShowWizard(true)}
            className="border-2 border-dashed border-gray-100 dark:border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 group hover:border-blue-200 hover:bg-blue-50/20 transition-all min-h-[220px]"
          >
            <div className="size-10 rounded-full border border-gray-100 dark:border-white/10 flex items-center justify-center text-gray-300 group-hover:text-blue-600 group-hover:border-blue-600 transition-all">
              <span className="material-symbols-outlined text-2xl">add_box</span>
            </div>
            <div className="text-center">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white">New Series</h3>
            </div>
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 bg-gray-50/50 dark:bg-white/5 rounded-3xl border-2 border-dashed border-gray-100 dark:border-white/10">
          <span className="material-symbols-outlined text-5xl text-gray-300 mb-4">search_off</span>
          <p className="text-gray-500 font-bold">No series found</p>
          <button 
            onClick={() => {
              setFrequencyFilter('All');
              setSelectedPlatforms([]);
              setStatusFilter('all');
              setSearchQuery('');
            }}
            className="mt-4 text-blue-600 text-sm font-bold hover:underline"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Repurpose Modal (NEW) */}
      {isRepurposeModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-md bg-black/40 animate-in fade-in duration-300">
          <div className="bg-white dark:bg-[#1c1d3a] w-full max-w-4xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in slide-in-from-bottom-8 duration-500 flex flex-col max-h-[90vh]">
            <div className="p-8 pb-4 flex justify-between items-center border-b border-gray-100 dark:border-white/5 shrink-0">
              <h3 className="text-xl font-bold flex items-center gap-3">
                <div className="size-10 bg-orange-600/10 text-orange-600 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined">auto_fix_high</span>
                </div>
                AI Repurpose Engine
              </h3>
              <button onClick={() => setIsRepurposeModalOpen(false)} className="size-10 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 flex items-center justify-center text-gray-400 transition-colors">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-8 no-scrollbar">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Source Content</label>
                  <div className="p-5 bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/10 text-xs text-gray-600 dark:text-gray-300 min-h-[150px] leading-relaxed italic">
                    {repurposeSource?.content}
                  </div>
                  <p className="text-[10px] text-gray-400 font-bold ml-1">Original Format: {repurposeSource?.platform.toUpperCase()}</p>
                </div>

                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Target Platform</label>
                  <div className="grid grid-cols-2 gap-3">
                    {platformOptions.map(p => (
                      <button
                        key={p.id}
                        onClick={() => setTargetPlatform(p.id)}
                        className={`flex items-center gap-3 p-4 rounded-2xl border transition-all ${
                          targetPlatform === p.id 
                          ? 'bg-blue-600 border-blue-600 text-white shadow-lg' 
                          : 'bg-white dark:bg-white/5 border-gray-100 dark:border-white/10 text-gray-500 hover:border-blue-200'
                        }`}
                      >
                        <span className="material-symbols-outlined">{p.icon}</span>
                        <span className="text-xs font-bold">{p.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={handleRepurposeRun}
                  disabled={isRepurposing}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-2xl font-bold shadow-lg shadow-orange-600/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <span className={`material-symbols-outlined ${isRepurposing ? 'animate-spin' : ''}`}>
                    {isRepurposing ? 'sync' : 'auto_fix_high'}
                  </span>
                  {isRepurposing ? 'Processing...' : 'Run Transformation'}
                </button>
              </div>

              <div className="flex flex-col gap-4">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">AI Output</label>
                <div className="flex-1 bg-gray-50 dark:bg-[#101122] rounded-3xl border border-gray-100 dark:border-white/10 overflow-hidden relative min-h-[300px] flex flex-col">
                  {repurposedResult ? (
                    <textarea 
                      value={repurposedResult}
                      onChange={(e) => setRepurposedResult(e.target.value)}
                      className="w-full h-full bg-transparent border-none focus:ring-0 p-6 text-sm leading-relaxed text-gray-700 dark:text-gray-200 resize-none font-medium"
                    />
                  ) : (
                    <div className="flex-1 flex flex-col items-center justify-center gap-3 text-gray-400 p-8 text-center">
                      <div className="size-16 bg-white dark:bg-white/5 rounded-full flex items-center justify-center mb-2">
                        <span className="material-symbols-outlined text-3xl">magic_button</span>
                      </div>
                      <p className="text-xs font-bold uppercase tracking-widest">Select a channel to begin</p>
                      <p className="text-[11px] max-w-[200px]">The AI will adapt your tone, formatting, and hooks for the best reach.</p>
                    </div>
                  )}
                  {isRepurposing && (
                    <div className="absolute inset-0 bg-white/70 dark:bg-[#101122]/70 backdrop-blur-sm flex items-center justify-center">
                      <div className="flex flex-col items-center gap-4">
                        <div className="size-12 border-4 border-orange-600 border-t-transparent rounded-full animate-spin"></div>
                        <p className="text-xs font-black text-orange-600 uppercase tracking-widest">Adapting content...</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="p-8 bg-gray-50/50 dark:bg-white/5 border-t border-gray-100 dark:border-white/5 flex gap-4 shrink-0">
              <button onClick={() => setIsRepurposeModalOpen(false)} className="flex-1 px-6 py-4 rounded-2xl text-sm font-bold text-gray-500 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">Cancel</button>
              <button 
                onClick={saveRepurposedAsDraft}
                disabled={!repurposedResult}
                className="flex-[2] bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-2xl font-bold shadow-lg shadow-blue-600/20 transition-all active:scale-95 disabled:opacity-50"
              >
                Apply as New Draft
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Image Generation Modal */}
      {isImageModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-md bg-black/40 animate-in fade-in duration-300">
          <div className="bg-white dark:bg-[#1c1d3a] w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in slide-in-from-bottom-8 duration-500">
            <div className="p-8 pb-4 flex justify-between items-center border-b border-gray-100 dark:border-white/5">
              <h3 className="text-xl font-bold flex items-center gap-3">
                <div className="size-10 bg-indigo-600/10 text-indigo-600 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined">image</span>
                </div>
                Generate Series Cover
              </h3>
              <button onClick={() => setIsImageModalOpen(false)} className="size-10 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 flex items-center justify-center text-gray-400 transition-colors">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">AI Prompt</label>
                  <textarea 
                    value={imagePrompt}
                    onChange={(e) => setImagePrompt(e.target.value)}
                    placeholder="Describe the cover image..."
                    className="w-full bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl px-5 py-4 text-sm font-medium focus:ring-2 focus:ring-blue-600 transition-all outline-none resize-none h-32"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Aspect Ratio</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['1:1', '16:9', '4:3'].map(ratio => (
                      <button
                        key={ratio}
                        onClick={() => setAspectRatio(ratio)}
                        className={`py-3 rounded-xl text-xs font-bold border transition-all ${
                          aspectRatio === ratio 
                            ? 'bg-blue-600 border-blue-600 text-white shadow-md' 
                            : 'bg-white dark:bg-white/5 border-gray-100 dark:border-white/10 text-gray-500'
                        }`}
                      >
                        {ratio}
                      </button>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={handleGenerateCover}
                  disabled={isGeneratingImage || !imagePrompt}
                  className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-2xl font-bold shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <span className={`material-symbols-outlined ${isGeneratingImage ? 'animate-spin' : ''}`}>
                    {isGeneratingImage ? 'sync' : 'bolt'}
                  </span>
                  {isGeneratingImage ? 'Generating...' : 'Generate with AI'}
                </button>
              </div>

              <div className="flex flex-col gap-4">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Preview</label>
                <div className="flex-1 bg-gray-50 dark:bg-[#101122] rounded-3xl border border-gray-100 dark:border-white/10 overflow-hidden flex items-center justify-center relative min-h-[250px]">
                  {generatedPreview ? (
                    <img src={generatedPreview} alt="Generated cover" className="w-full h-full object-contain" />
                  ) : (
                    <div className="flex flex-col items-center gap-3 text-gray-400">
                      <span className="material-symbols-outlined text-4xl">image_search</span>
                      <p className="text-xs font-medium">Your generated cover will appear here</p>
                    </div>
                  )}
                  {isGeneratingImage && (
                    <div className="absolute inset-0 bg-white/60 dark:bg-[#101122]/60 backdrop-blur-sm flex items-center justify-center">
                      <div className="flex flex-col items-center gap-4">
                        <div className="size-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                        <p className="text-xs font-black text-primary uppercase tracking-widest">Painting your ideas...</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="p-8 bg-gray-50/50 dark:bg-white/5 border-t border-gray-100 dark:border-white/5 flex gap-4">
              <button 
                onClick={() => setIsImageModalOpen(false)} 
                className="flex-1 px-6 py-4 rounded-2xl text-sm font-bold text-gray-500 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={applyGeneratedCover}
                disabled={!generatedPreview}
                className="flex-[2] bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-2xl font-bold shadow-lg shadow-blue-600/20 transition-all active:scale-95 disabled:opacity-50 disabled:grayscale"
              >
                Apply Cover to Series
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Pipeline Table */}
      <div className="flex flex-col gap-6 mt-4">
        <div className="flex justify-between items-center px-2">
          <div className="flex items-center gap-3">
             <div className="size-10 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center">
               <span className="material-symbols-outlined text-blue-600">published_with_changes</span>
             </div>
             <h2 className="text-xl font-bold font-epilogue">AI Draft Pipeline</h2>
          </div>
          <button className="text-blue-600 text-sm font-bold hover:underline">View All Drafts</button>
        </div>
        <div className="bg-white dark:bg-[#1c1d3a] border border-gray-100 dark:border-[#2a2b4a] rounded-2xl overflow-hidden shadow-sm">
          <table className="w-full text-left">
            <thead className="bg-gray-50/80 dark:bg-white/5">
              <tr className="text-[10px] font-bold uppercase tracking-widest text-gray-400 border-b border-gray-100 dark:border-white/5">
                <th className="px-8 py-5">Draft Name</th>
                <th className="px-8 py-5">Series</th>
                <th className="px-8 py-5">Confidence</th>
                <th className="px-8 py-5">Status</th>
                <th className="px-8 py-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 dark:divide-white/5">
              {drafts.map((draft) => (
                <tr key={draft.id} className={`group hover:bg-gray-50/30 dark:hover:bg-white/5 transition-colors ${editingDraftId === draft.id ? 'bg-blue-50/30' : ''}`}>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-4">
                      <div className="size-8 bg-gray-100 dark:bg-white/5 rounded-lg flex items-center justify-center text-gray-400 shrink-0">
                        <span className="material-symbols-outlined text-base">description</span>
                      </div>
                      {editingDraftId === draft.id ? (
                        <input 
                          type="text" 
                          value={editDraftName}
                          onChange={(e) => setEditDraftName(e.target.value)}
                          className="bg-white dark:bg-[#101122] border border-gray-200 dark:border-white/10 rounded-lg px-2 py-1 text-xs font-bold w-full focus:ring-1 focus:ring-blue-600 outline-none"
                          autoFocus
                        />
                      ) : (
                        <Tooltip text="Click to edit Name">
                          <span 
                            onClick={() => startEditingDraft(draft)}
                            className="text-xs font-bold text-gray-900 dark:text-white cursor-pointer hover:text-blue-600 transition-colors"
                          >
                            {draft.name}
                          </span>
                        </Tooltip>
                      )}
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    {editingDraftId === draft.id ? (
                      <input 
                        type="text" 
                        value={editDraftSeries}
                        onChange={(e) => setEditDraftSeries(e.target.value)}
                        className="bg-white dark:bg-[#101122] border border-gray-200 dark:border-white/10 rounded-lg px-2 py-1 text-[10px] font-bold w-full focus:ring-1 focus:ring-blue-600 outline-none"
                      />
                    ) : (
                      <Tooltip text="Click to edit Series">
                        <span 
                          onClick={() => startEditingDraft(draft)}
                          className="text-[10px] font-bold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-white/5 px-2 py-0.5 rounded-md cursor-pointer hover:bg-gray-200 transition-colors"
                        >
                          {draft.series}
                        </span>
                      </Tooltip>
                    )}
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-16 h-1 bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: `${draft.confidence}%` }}></div>
                      </div>
                      <span className="text-[10px] font-bold text-green-500">{draft.confidence}%</span>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <span className={`px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest border ${
                      draft.status === 'Review Required' 
                        ? 'bg-orange-50 border-orange-100 text-orange-500' 
                        : 'bg-green-50 border-green-100 text-green-600'
                    }`}>
                      {draft.status}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      {editingDraftId === draft.id ? (
                        <>
                          <Tooltip text="Discard Changes">
                            <button onClick={() => setEditingDraftId(null)} className="text-gray-400 hover:text-gray-600 p-1">
                              <span className="material-symbols-outlined text-sm">close</span>
                            </button>
                          </Tooltip>
                          <Tooltip text="Save Changes">
                            <button onClick={saveDraftChanges} className="bg-blue-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-sm shadow-blue-600/20 hover:bg-blue-700 transition-all flex items-center gap-1">
                              <span className="material-symbols-outlined text-[12px]">save</span> Save
                            </button>
                          </Tooltip>
                        </>
                      ) : (
                        <>
                          <Tooltip text="Repurpose with AI">
                            <button onClick={() => handleOpenRepurpose(draft)} className="text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-900/10 p-1.5 rounded-lg transition-colors">
                              <span className="material-symbols-outlined text-base">auto_fix_high</span>
                            </button>
                          </Tooltip>
                          <button onClick={() => startEditingDraft(draft)} className="text-blue-600 text-[10px] font-bold hover:bg-blue-600 hover:text-white border border-blue-600/20 px-3 py-1.5 rounded-lg transition-all">Edit</button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Completed Posts Section - For Repurposing */}
      <div className="flex flex-col gap-6 mt-4 mb-20">
        <div className="flex items-center gap-3 px-2">
          <div className="size-10 bg-green-50 dark:bg-green-900/20 rounded-xl flex items-center justify-center">
            <span className="material-symbols-outlined text-green-600">history</span>
          </div>
          <h2 className="text-xl font-bold font-epilogue">Recent Performance</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {completedPosts.map(post => (
            <div key={post.id} className="bg-white dark:bg-[#1c1d3a] border border-gray-100 dark:border-[#2a2b4a] rounded-2xl p-5 shadow-sm group hover:shadow-md transition-all">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <div className={`size-6 rounded flex items-center justify-center text-white ${
                    post.platform === 'linkedin' ? 'bg-blue-700' : 'bg-gray-800'
                  }`}>
                    <span className="material-symbols-outlined text-[14px]">
                      {post.platform === 'linkedin' ? 'work' : 'chat'}
                    </span>
                  </div>
                  <span className="text-[10px] font-black uppercase text-gray-400 tracking-tighter">{post.date}</span>
                </div>
                <Tooltip text="Repurpose this Success">
                  <button 
                    onClick={() => handleOpenRepurpose(post)}
                    className="size-8 bg-orange-50 dark:bg-orange-900/20 text-orange-600 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <span className="material-symbols-outlined text-sm">auto_fix_high</span>
                  </button>
                </Tooltip>
              </div>
              <h4 className="text-xs font-bold text-gray-900 dark:text-white mb-2">{post.title}</h4>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed italic border-l-2 border-gray-100 dark:border-white/5 pl-3">
                "{post.content}"
              </p>
              {post.metrics && (
                <div className="mt-4 flex items-center gap-4 text-[9px] font-bold text-gray-400">
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[12px]">visibility</span> {post.metrics.views}</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[12px]">favorite</span> {post.metrics.likes}</span>
                </div>
              )}
            </div>
          ))}
          <button 
            onClick={() => setShowWizard(true)}
            className="border-2 border-dashed border-gray-100 dark:border-white/10 rounded-2xl p-5 flex flex-col items-center justify-center gap-2 text-gray-400 hover:text-blue-600 hover:border-blue-600 transition-all"
          >
            <span className="material-symbols-outlined">add_circle</span>
            <span className="text-[10px] font-bold uppercase">Log Published Post</span>
          </button>
        </div>
      </div>
    </div>
  );
};
