
import React, { useState } from 'react';

interface SeriesWizardProps {
  onClose: () => void;
  onComplete: (data: any) => void;
}

export const SeriesWizard: React.FC<SeriesWizardProps> = ({ onClose, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(2); // Start at step 2 to match the image
  const [selectedDays, setSelectedDays] = useState(['Monday', 'Wednesday', 'Friday']);
  const [selectedTime, setSelectedTime] = useState('Lunch');
  const [platforms, setPlatforms] = useState({
    instagram: true,
    twitter: false,
    pinterest: true
  });

  const steps = [
    { id: 1, label: 'Identity' },
    { id: 2, label: 'Schedule' },
    { id: 3, label: 'Structure' },
    { id: 4, label: 'Automation' }
  ];

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const toggleDay = (day: string) => {
    setSelectedDays(prev => 
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
    );
  };

  return (
    <div className="fixed inset-0 z-[150] bg-[#f8faff] flex flex-col animate-in fade-in duration-300">
      {/* Top Header Navigation */}
      <header className="px-8 py-6 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <div className="size-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
            <span className="material-symbols-outlined filled">auto_awesome</span>
          </div>
          <span className="font-epilogue font-bold text-xl tracking-tight text-[#0d0e1b]">CreatorDash</span>
          <span className="text-blue-600 text-sm font-bold ml-1">Wizard</span>
        </div>

        <div className="flex items-center gap-6">
          <button className="text-gray-400 hover:text-gray-600">
            <span className="material-symbols-outlined">help_outline</span>
          </button>
          <button className="px-6 py-2 rounded-xl border border-gray-100 bg-white text-xs font-bold hover:shadow-sm transition-all">
            Save Draft
          </button>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
      </header>

      {/* Stepper */}
      <div className="flex justify-center py-8 shrink-0">
        <div className="flex items-center gap-24 relative">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-gray-100 -z-10"></div>
          
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center gap-3">
              <div className={`size-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                currentStep >= step.id 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' 
                  : 'bg-white border-2 border-gray-100 text-gray-300'
              }`}>
                {step.id}
              </div>
              <span className={`text-xs font-bold transition-all ${
                currentStep === step.id ? 'text-blue-600' : 'text-gray-400'
              }`}>{step.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto px-8 pb-12 no-scrollbar">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left Panel: Configuration Form */}
          <div className="lg:col-span-2 bg-white rounded-[2.5rem] p-10 shadow-sm border border-gray-50 flex flex-col gap-10">
            <div>
              <h2 className="text-2xl font-black text-[#0d0e1b] font-epilogue mb-3 tracking-tight">Configure Your Series Schedule</h2>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
                Define when your recurring content goes live. AI will suggest optimal times based on your audience activity.
              </p>
            </div>

            {/* Select Days Section */}
            <div className="flex flex-col gap-4">
              <label className="text-[10px] font-black uppercase tracking-[0.15em] text-gray-400">Select Days</label>
              <div className="flex flex-wrap gap-3">
                {days.map(day => (
                  <button
                    key={day}
                    onClick={() => toggleDay(day)}
                    className={`px-8 py-3.5 rounded-full text-xs font-bold transition-all border ${
                      selectedDays.includes(day)
                        ? 'bg-blue-50 border-blue-600 text-blue-600 shadow-sm'
                        : 'bg-white border-gray-100 text-[#0d0e1b] hover:border-blue-200'
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>

            {/* Posting Times Section */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <label className="text-[10px] font-black uppercase tracking-[0.15em] text-gray-400">Posting Times</label>
                <button className="bg-indigo-50 text-blue-600 text-[10px] font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all hover:bg-indigo-100">
                  <span className="material-symbols-outlined text-xs">auto_fix_high</span>
                  Apply AI Optimized Times
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Morning AI Card */}
                <div 
                  onClick={() => setSelectedTime('Morning')}
                  className={`relative p-5 rounded-2xl border transition-all cursor-pointer ${
                    selectedTime === 'Morning' ? 'border-blue-600 bg-blue-50/20' : 'border-gray-100 hover:border-blue-200'
                  }`}
                >
                  <span className="text-[8px] font-black uppercase tracking-tighter text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded absolute -top-2 left-4">AI Suggested</span>
                  <div className="flex flex-col gap-1 mt-2">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Morning</span>
                    <span className="text-xl font-black text-[#0d0e1b]">09:15 AM</span>
                    <span className="text-[10px] font-bold text-green-500 flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">trending_up</span>
                      +24% Engagement
                    </span>
                  </div>
                </div>

                {/* Lunch Selected Card */}
                <div 
                  onClick={() => setSelectedTime('Lunch')}
                  className={`relative p-5 rounded-2xl border transition-all cursor-pointer ${
                    selectedTime === 'Lunch' ? 'border-blue-600 bg-white ring-1 ring-blue-600' : 'border-gray-100 hover:border-blue-200'
                  }`}
                >
                  {selectedTime === 'Lunch' && (
                    <div className="absolute -top-3 -right-3 size-6 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg border-2 border-white">
                      <span className="material-symbols-outlined text-sm">check</span>
                    </div>
                  )}
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Lunch</span>
                    <span className="text-xl font-black text-[#0d0e1b]">12:30 PM</span>
                    <span className="text-[10px] font-bold text-green-500 flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">trending_up</span>
                      +42% Reach
                    </span>
                  </div>
                </div>

                {/* Evening Card */}
                <div 
                  onClick={() => setSelectedTime('Evening')}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                    selectedTime === 'Evening' ? 'border-blue-600 bg-blue-50/20' : 'border-gray-100 hover:border-blue-200'
                  }`}
                >
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Evening</span>
                    <span className="text-xl font-black text-[#0d0e1b]">06:45 PM</span>
                    <span className="text-[10px] font-bold text-gray-400">Standard time</span>
                  </div>
                </div>

                {/* Add Time Button */}
                <button className="border-2 border-dashed border-gray-100 rounded-2xl p-5 flex flex-col items-center justify-center gap-2 group hover:border-blue-200 hover:bg-blue-50/10 transition-all">
                  <div className="size-6 rounded-full bg-blue-600 text-white flex items-center justify-center">
                    <span className="material-symbols-outlined text-sm">add</span>
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase group-hover:text-blue-600">Add Time</span>
                </button>
              </div>
            </div>

            {/* Distribution Platforms Section */}
            <div className="flex flex-col gap-4">
              <label className="text-[10px] font-black uppercase tracking-[0.15em] text-gray-400">Distribution Platforms</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { id: 'instagram', label: 'Instagram', icon: 'https://cdn-icons-png.flaticon.com/512/174/174855.png' },
                  { id: 'twitter', label: 'X (Twitter)', icon: 'https://cdn-icons-png.flaticon.com/512/733/733579.png', disabled: true },
                  { id: 'pinterest', label: 'Pinterest', icon: 'https://cdn-icons-png.flaticon.com/512/145/145808.png' }
                ].map(platform => (
                  <div 
                    key={platform.id}
                    className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${
                      (platforms as any)[platform.id] ? 'border-blue-600 bg-white shadow-sm ring-1 ring-blue-600' : 'border-gray-50 bg-gray-50/30'
                    } ${platform.disabled ? 'opacity-40 grayscale pointer-events-none' : ''}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-lg bg-white border border-gray-100 flex items-center justify-center p-1.5 shadow-xs">
                        <img src={platform.icon} className="size-full object-contain" alt="" />
                      </div>
                      <span className={`text-sm font-bold ${platform.disabled ? 'text-gray-400' : 'text-[#0d0e1b]'}`}>{platform.label}</span>
                    </div>
                    <button 
                      onClick={() => setPlatforms(prev => ({ ...prev, [platform.id]: !(prev as any)[platform.id] }))}
                      className={`w-10 h-6 rounded-full relative transition-all ${
                        (platforms as any)[platform.id] ? 'bg-blue-600' : 'bg-gray-200'
                      }`}
                    >
                      <div className={`size-4 bg-white rounded-full absolute top-1 transition-all ${
                        (platforms as any)[platform.id] ? 'right-1' : 'left-1'
                      }`}></div>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel: Insights & Preview */}
          <div className="flex flex-col gap-6">
            {/* AI Insight Card */}
            <div className="bg-indigo-50/50 rounded-[2rem] p-8 border border-blue-100 flex flex-col gap-6">
              <div className="flex items-center gap-2 text-blue-600">
                <span className="material-symbols-outlined filled text-xl">bolt</span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">AI Insight</span>
              </div>
              <p className="text-xs font-medium text-gray-500 leading-relaxed">
                Based on your current settings, "Tech Tuesdays" will reach its maximum audience on **Wednesday at 12:30 PM**.
              </p>
              
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-blue-50">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[8px] font-black uppercase text-gray-400 tracking-widest">Estimated Weekly Reach</span>
                  <span className="text-lg font-black text-blue-600">12.5k - 18k</span>
                </div>
                <div className="w-full h-2 bg-gray-50 rounded-full overflow-hidden relative">
                   <div className="h-full bg-blue-600 w-3/4 rounded-full shadow-[0_0_12px_rgba(37,99,235,0.4)]"></div>
                </div>
              </div>

              <button className="text-blue-600 text-[10px] font-black uppercase tracking-widest hover:underline text-left">
                View full analysis report <span className="material-symbols-outlined text-xs align-middle">open_in_new</span>
              </button>
            </div>

            {/* Series Preview Card */}
            <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden flex flex-col">
              <div className="p-6 pb-4 flex justify-between items-center">
                <span className="text-xs font-bold text-[#0d0e1b]">Series Preview</span>
                <span className="text-[8px] font-black uppercase text-green-500 bg-green-50 px-2 py-0.5 rounded tracking-widest">Ready</span>
              </div>
              <div className="px-6 py-4 flex items-center gap-4 border-b border-gray-50">
                <div className="size-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-blue-600 shrink-0">
                  <span className="material-symbols-outlined filled text-2xl">rocket_launch</span>
                </div>
                <div>
                  <h4 className="text-sm font-black text-[#0d0e1b]">Tech Tuesdays</h4>
                  <p className="text-[10px] text-gray-400 font-bold">Solo Influencer Plan</p>
                </div>
              </div>
              <div className="p-6 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-gray-300 text-lg">calendar_today</span>
                  <span className="text-xs font-bold text-[#0d0e1b]">Mon, Wed, Fri</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-gray-300 text-lg">schedule</span>
                  <span className="text-xs font-bold text-[#0d0e1b]">12:30 PM (Daily Average)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="size-6 rounded-full bg-blue-50 border border-white flex items-center justify-center p-1">
                       <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="" />
                    </div>
                    <div className="size-6 rounded-full bg-indigo-50 border border-white flex items-center justify-center p-1">
                       <img src="https://cdn-icons-png.flaticon.com/512/145/145808.png" alt="" />
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#0d0e1b]">2 Platforms</span>
                  <span className="material-symbols-outlined text-gray-300 text-lg ml-auto">hub</span>
                </div>
              </div>
              <div className="px-6 py-4 bg-gray-50/30 border-t border-gray-50">
                <div className="flex items-center gap-2">
                  <div className="size-2 bg-blue-600 rounded-full animate-pulse"></div>
                  <span className="text-[10px] font-black uppercase text-blue-600 tracking-widest">Live Sync Enabled</span>
                </div>
              </div>
            </div>

            {/* Hint Box */}
            <div className="bg-white rounded-2xl p-6 border-2 border-dashed border-gray-100 flex gap-4">
              <span className="material-symbols-outlined text-gray-300 text-xl shrink-0">info</span>
              <p className="text-[11px] text-gray-400 font-medium leading-relaxed italic">
                "Posting frequency affects your 'Series Momentum' score. Three times a week is the sweet spot for solo creators."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Action Bar */}
      <footer className="px-10 py-8 bg-white/80 backdrop-blur-md border-t border-gray-100 flex items-center justify-between shrink-0">
        <button className="flex items-center gap-2 text-xs font-black uppercase text-[#0d0e1b] hover:text-blue-600 transition-all">
          <span className="material-symbols-outlined">arrow_back</span>
          Previous Step
        </button>
        <button 
          onClick={() => setCurrentStep(3)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-2xl font-bold flex items-center gap-3 shadow-xl shadow-blue-600/30 transition-all active:scale-95 group"
        >
          Continue to Structure
          <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
        </button>
      </footer>

      {/* Footer Branding */}
      <div className="py-4 text-center">
        <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">
          © 2024 CreatorDash AI. Focused on your growth.
        </p>
      </div>
    </div>
  );
};
