
import React, { useState } from 'react';

interface MetricCardProps {
  label: string;
  value: string;
  trend: string;
  isPositive: boolean;
  icon: string;
  color: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ label, value, trend, isPositive, icon, color }) => (
  <div className="bg-white dark:bg-[#1c1d3a] border border-gray-100 dark:border-[#2a2b4a] rounded-2xl p-6 shadow-sm flex flex-col gap-4">
    <div className="flex justify-between items-start">
      <div className={`size-10 rounded-xl flex items-center justify-center ${color}`}>
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <div className={`flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded-full ${isPositive ? 'bg-green-50 text-green-600 dark:bg-green-900/20' : 'bg-red-50 text-red-600 dark:bg-red-900/20'}`}>
        <span className="material-symbols-outlined text-xs">{isPositive ? 'trending_up' : 'trending_down'}</span>
        {trend}
      </div>
    </div>
    <div>
      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">{label}</p>
      <h3 className="text-2xl font-black text-gray-900 dark:text-white font-epilogue">{value}</h3>
    </div>
  </div>
);

export const AnalyticsPage: React.FC = () => {
  const [timeRange, setTimeRange] = useState('Last 30 Days');

  const channelMetrics = [
    { name: 'Instagram', reach: '45.2k', growth: '+12%', color: 'from-orange-400 to-pink-500', icon: 'photo_camera' },
    { name: 'X / Twitter', reach: '128k', growth: '+5%', color: 'bg-sky-500', icon: 'chat' },
    { name: 'LinkedIn', reach: '12.4k', growth: '+28%', color: 'bg-blue-700', icon: 'work' },
    { name: 'TikTok', reach: '210k', growth: '+42%', color: 'bg-black', icon: 'play_circle' },
  ];

  const topPosts = [
    { id: 1, title: 'The secret to 10x productivity', reach: '15.4k', engagement: '8.2%', platform: 'linkedin' },
    { id: 2, title: 'Setup your dev environment in 5 min', reach: '42.1k', engagement: '12.4%', platform: 'twitter' },
    { id: 3, title: 'My morning routine (AI powered)', reach: '105k', engagement: '15.1%', platform: 'tiktok' },
  ];

  return (
    <div className="p-10 max-w-7xl mx-auto w-full flex flex-col gap-10">
      {/* Header */}
      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white font-epilogue tracking-tight">Analytics & Insights</h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-lg text-sm">
            Track your cross-platform growth and discover AI-powered optimization opportunities.
          </p>
        </div>
        <div className="flex gap-2">
          {['7 Days', 'Last 30 Days', '90 Days'].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
                timeRange === range
                  ? 'bg-gray-900 text-white dark:bg-white dark:text-black border-transparent shadow-lg shadow-black/10'
                  : 'bg-white dark:bg-white/5 text-gray-500 border-gray-100 dark:border-white/10 hover:bg-gray-50'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* KPI Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <MetricCard
          label="Total Reach"
          value="395.6k"
          trend="14.2%"
          isPositive={true}
          icon="visibility"
          color="bg-blue-50 text-blue-600 dark:bg-blue-900/20"
        />
        <MetricCard
          label="Engagement Rate"
          value="9.42%"
          trend="2.1%"
          isPositive={true}
          icon="favorite"
          color="bg-pink-50 text-pink-600 dark:bg-pink-900/20"
        />
        <MetricCard
          label="Follower Growth"
          value="+4,281"
          trend="0.4%"
          isPositive={false}
          icon="group"
          color="bg-purple-50 text-purple-600 dark:bg-purple-900/20"
        />
        <MetricCard
          label="AI Efficiency"
          value="82%"
          trend="5.4%"
          isPositive={true}
          icon="bolt"
          color="bg-orange-50 text-orange-600 dark:bg-orange-900/20"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Chart Area */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="bg-white dark:bg-[#1c1d3a] border border-gray-100 dark:border-[#2a2b4a] rounded-[2rem] p-8 shadow-sm h-[400px] flex flex-col relative overflow-hidden">
            <div className="flex justify-between items-center mb-8 relative z-10">
              <h3 className="text-lg font-bold font-epilogue">Performance Overview</h3>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <div className="size-3 rounded-full bg-blue-600"></div>
                  <span className="text-[10px] font-bold text-gray-500 uppercase">Reach</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-3 rounded-full bg-pink-500"></div>
                  <span className="text-[10px] font-bold text-gray-500 uppercase">Engagement</span>
                </div>
              </div>
            </div>
            
            {/* Visual Placeholder for a Chart */}
            <div className="flex-1 flex items-end justify-between gap-2 px-4 pb-2">
              {[40, 70, 45, 90, 65, 80, 55, 100, 75, 85, 60, 95].map((val, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2 group cursor-pointer">
                  <div className="w-full relative flex flex-col justify-end h-48">
                    <div 
                      className="w-full bg-blue-600/10 dark:bg-blue-600/5 rounded-t-lg group-hover:bg-blue-600/20 transition-all absolute bottom-0" 
                      style={{ height: `${val}%` }}
                    ></div>
                    <div 
                      className="w-full bg-blue-600 rounded-t-lg transition-all absolute bottom-0 shadow-[0_-4px_12px_rgba(37,99,235,0.2)]" 
                      style={{ height: `${val * 0.4}%` }}
                    ></div>
                  </div>
                  <span className="text-[8px] font-bold text-gray-400 uppercase">{['J','F','M','A','M','J','J','A','S','O','N','D'][i]}</span>
                </div>
              ))}
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#1c1d3a] via-transparent to-transparent pointer-events-none h-20 bottom-0"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white dark:bg-[#1c1d3a] border border-gray-100 dark:border-[#2a2b4a] rounded-2xl p-6 shadow-sm">
              <h4 className="text-sm font-bold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-blue-600 text-lg">star</span>
                Top Performing Content
              </h4>
              <div className="flex flex-col gap-3">
                {topPosts.map(post => (
                  <div key={post.id} className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-50 dark:border-white/5">
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div className="size-8 bg-white dark:bg-white/10 rounded-lg flex items-center justify-center shrink-0 shadow-sm">
                        <span className="material-symbols-outlined text-sm">{post.platform === 'linkedin' ? 'work' : post.platform === 'twitter' ? 'chat' : 'play_circle'}</span>
                      </div>
                      <p className="text-xs font-bold text-gray-900 dark:text-white truncate">{post.title}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-[10px] font-black text-blue-600">{post.reach}</p>
                      <p className="text-[8px] font-bold text-gray-400 uppercase">Reach</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white dark:bg-[#1c1d3a] border border-gray-100 dark:border-[#2a2b4a] rounded-2xl p-6 shadow-sm flex flex-col gap-4">
              <h4 className="text-sm font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-orange-500 text-lg">campaign</span>
                Platform Distribution
              </h4>
              <div className="flex-1 flex items-center justify-center py-4">
                <div className="relative size-32">
                   <svg className="size-full" viewBox="0 0 36 36">
                    <circle cx="18" cy="18" r="16" fill="none" className="stroke-gray-100 dark:stroke-white/5" strokeWidth="4"></circle>
                    <circle cx="18" cy="18" r="16" fill="none" className="stroke-blue-600" strokeWidth="4" strokeDasharray="40 100" strokeDashoffset="0"></circle>
                    <circle cx="18" cy="18" r="16" fill="none" className="stroke-pink-500" strokeWidth="4" strokeDasharray="30 100" strokeDashoffset="-40"></circle>
                    <circle cx="18" cy="18" r="16" fill="none" className="stroke-sky-400" strokeWidth="4" strokeDasharray="20 100" strokeDashoffset="-70"></circle>
                    <circle cx="18" cy="18" r="16" fill="none" className="stroke-black dark:stroke-white" strokeWidth="4" strokeDasharray="10 100" strokeDashoffset="-90"></circle>
                   </svg>
                   <div className="absolute inset-0 flex flex-col items-center justify-center">
                     <span className="text-lg font-black font-epilogue leading-none">4</span>
                     <span className="text-[8px] font-bold text-gray-400 uppercase">Channels</span>
                   </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center gap-1.5"><div className="size-2 rounded-full bg-blue-600"></div><span className="text-[9px] font-bold text-gray-500">LI</span></div>
                <div className="flex items-center gap-1.5"><div className="size-2 rounded-full bg-pink-500"></div><span className="text-[9px] font-bold text-gray-500">IG</span></div>
                <div className="flex items-center gap-1.5"><div className="size-2 rounded-full bg-sky-400"></div><span className="text-[9px] font-bold text-gray-500">X</span></div>
                <div className="flex items-center gap-1.5"><div className="size-2 rounded-full bg-black dark:bg-white"></div><span className="text-[9px] font-bold text-gray-500">TT</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Insights */}
        <div className="flex flex-col gap-6">
          <div className="bg-gradient-to-br from-primary to-indigo-700 rounded-[2rem] p-8 text-white shadow-xl shadow-blue-600/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:scale-110 transition-transform duration-500">
              <span className="material-symbols-outlined text-8xl">auto_awesome</span>
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined filled text-xl">psychology</span>
                <h3 className="text-sm font-black uppercase tracking-widest">AI Growth Insights</h3>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex gap-4">
                  <div className="size-1.5 rounded-full bg-white mt-1.5 shrink-0"></div>
                  <p className="text-xs font-medium leading-relaxed opacity-90">
                    <span className="font-bold">Posting Frequency:</span> You're getting 15% higher engagement on Tuesdays at 9 AM. Consider shifting your "Growth Breakdown" series.
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="size-1.5 rounded-full bg-white mt-1.5 shrink-0"></div>
                  <p className="text-xs font-medium leading-relaxed opacity-90">
                    <span className="font-bold">Content Type:</span> Video hooks are outperforming text by <span className="text-orange-300 font-bold">2.4x</span> on TikTok.
                  </p>
                </div>
                <button className="bg-white text-blue-600 py-3 rounded-xl font-bold text-xs shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all active:scale-95 mt-4">
                  Optimize Strategy
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-[#1c1d3a] border border-gray-100 dark:border-[#2a2b4a] rounded-[2rem] p-8 shadow-sm">
            <h3 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-6">Channel Performance</h3>
            <div className="flex flex-col gap-6">
              {channelMetrics.map(channel => (
                <div key={channel.name} className="flex flex-col gap-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className={`size-8 rounded-lg flex items-center justify-center text-white shadow-sm ${channel.color}`}>
                        <span className="material-symbols-outlined text-sm">{channel.icon}</span>
                      </div>
                      <span className="text-xs font-bold text-gray-900 dark:text-white">{channel.name}</span>
                    </div>
                    <span className="text-[10px] font-black text-green-500">{channel.growth}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex-1 h-1.5 bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
                       <div className={`h-full ${channel.color}`} style={{ width: channel.reach.includes('k') ? `${Math.min(parseInt(channel.reach), 100)}%` : '20%' }}></div>
                    </div>
                    <span className="text-[10px] font-bold text-gray-400 w-8">{channel.reach}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
