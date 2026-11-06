import React from 'react';
import { Home, Coffee, BookOpen, Search, ShieldCheck } from 'lucide-react';

interface MobileBottomDockProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  onOpenReport: () => void;
}

export const MobileBottomDock: React.FC<MobileBottomDockProps> = ({
  currentTab,
  onSelectTab,
  onOpenReport,
}) => {
  const tabs = [
    { id: 'home', label: 'Trang Chủ', icon: Home },
    { id: 'role', label: 'Góc Của Bạn', icon: Coffee },
    { id: 'chapters', label: '11 Chương', icon: BookOpen },
    { id: 'matrix', label: 'Tra Cứu', icon: Search },
    { id: 'support', label: 'Bảo Vệ', icon: ShieldCheck },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-t border-slate-200/80 dark:border-slate-800 px-3 py-1.5 shadow-2xl">
      <div className="flex items-center justify-around">
        {tabs.map((t) => {
          const Icon = t.icon;
          const isActive = currentTab === t.id;

          return (
            <button
              key={t.id}
              onClick={() => {
                if (t.id === 'support') {
                  onSelectTab('support');
                } else {
                  onSelectTab(t.id);
                }
              }}
              className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all ${
                isActive
                  ? 'text-[#2076bd] dark:text-blue-400 font-bold scale-105'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              <div className={`p-1 rounded-lg ${isActive ? 'bg-blue-50 dark:bg-blue-950/80 text-[#2076bd]' : ''}`}>
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-[10px] tracking-tight mt-0.5 font-medium">
                {t.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
