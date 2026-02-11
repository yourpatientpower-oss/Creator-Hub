
import React from 'react';
import { AppTab } from '../types';

interface SidebarProps {
  activeTab: AppTab;
  setActiveTab: (tab: AppTab) => void;
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, collapsed, setCollapsed }) => {
  const navItems = [
    { id: AppTab.DASHBOARD, icon: 'grid_view' },
    { id: AppTab.CONTENT_SERIES, icon: 'layers' },
    { id: AppTab.TEMPLATES, icon: 'description' },
    { id: AppTab.ANALYTICS, icon: 'bar_chart' },
  ];

  return (
    <aside className={`${collapsed ? 'w-20 px-3' : 'w-64 px-4'} border-r border-gray-100 dark:border-[#2a2b4a] bg-white dark:bg-[#16172d] flex flex-col py-8 shrink-0 transition-all duration-300 relative`}>
      <div className={`flex items-center gap-3 mb-10 ${collapsed ? 'justify-center' : 'px-4'}`}>
        <div className="size-8 bg-blue-600 rounded-lg flex items-center justify-center text-white shrink-0">
          <span className="material-symbols-outlined text-xl filled">auto_awesome</span>
        </div>
        {!collapsed && <h1 className="text-[#0d0e1b] dark:text-white text-lg font-bold tracking-tight font-epilogue">CreatorHub</h1>}
      </div>

      <nav className="flex flex-col gap-1 px-2">
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all group ${activeTab === item.id ? 'bg-indigo-50 text-blue-600' : 'text-gray-400 dark:text-gray-500 hover:bg-gray-50 dark:hover:bg-white/5'}`}
          >
            <span className={`material-symbols-outlined text-[22px] ${activeTab === item.id ? 'filled' : ''}`}>{item.icon}</span>
            {!collapsed && <span className="text-[15px] font-semibold">{item.id}</span>}
          </button>
        ))}
      </nav>

      {!collapsed && (
        <div className="mt-auto px-2">
          <div className="bg-indigo-50/50 dark:bg-blue-900/10 p-5 rounded-2xl border border-blue-100 dark:border-blue-900/30">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-blue-600 mb-1">Current Plan</h4>
            <p className="text-sm font-bold text-gray-900 dark:text-white mb-3">AI Pro Solo</p>
            <div className="h-1.5 w-full bg-blue-100 dark:bg-blue-900/20 rounded-full overflow-hidden mb-2">
              <div className="h-full bg-blue-600 w-3/4 rounded-full"></div>
            </div>
            <p className="text-[10px] text-gray-500 font-medium">75/100 AI Generations left</p>
          </div>
        </div>
      )}
    </aside>
  );
};
