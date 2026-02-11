
import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Editor } from './components/Editor';
import { Copilot } from './components/Copilot';
import { SeriesPage } from './components/SeriesPage';
import { AnalyticsPage } from './components/AnalyticsPage';
import { AppTab } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AppTab>(AppTab.CONTENT_SERIES);
  const [collapsed, setCollapsed] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case AppTab.CONTENT_SERIES:
        return <SeriesPage />;
      case AppTab.ANALYTICS:
        return <AnalyticsPage />;
      case AppTab.DASHBOARD:
        return <Editor />; // Reusing editor for dashboard for now
      default:
        return (
          <div className="flex flex-col items-center justify-center h-full text-[#4c4d9a] dark:text-[#a1a1c2] p-20">
            <span className="material-symbols-outlined text-6xl mb-4 text-primary opacity-20">construction</span>
            <h2 className="text-2xl font-bold font-epilogue">{activeTab} Section</h2>
            <p className="mt-2 text-center max-w-md font-medium text-gray-500">This feature is currently under active development. Stay tuned for updates in the next release!</p>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-white dark:bg-[#101122]">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        collapsed={collapsed} 
        setCollapsed={setCollapsed} 
      />
      
      <main className="flex-1 flex flex-col bg-white dark:bg-[#101122] overflow-y-auto no-scrollbar">
        {/* Render Active View */}
        <div className="flex-1 overflow-y-auto no-scrollbar pb-20">
          {renderContent()}
        </div>
      </main>

      {/* Show Copilot only on relevant creation screens */}
      {activeTab === AppTab.DASHBOARD && <Copilot />}
    </div>
  );
};

export default App;
