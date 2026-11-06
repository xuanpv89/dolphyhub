import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle, 
  XCircle, 
  BookOpen, 
  Quote, 
  Coffee,
  Sparkles
} from 'lucide-react';
import { SCENARIOS_DATA, Scenario } from '../data/scenariosData';

interface ScenariosSectionProps {
  onOpenArticleByNumber?: (num: number) => void;
}

export const ScenariosSection: React.FC<ScenariosSectionProps> = ({ onOpenArticleByNumber }) => {
  const [expandedId, setExpandedId] = useState<string>('sc-1');
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredScenarios = SCENARIOS_DATA.filter((s) => {
    if (activeTab === 'all') return true;
    return s.roleTarget === activeTab || s.roleTarget === 'Chung';
  });

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? '' : id);
  };

  return (
    <section id="scenarios" className="py-16 bg-slate-50/60 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-[#2076bd] dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
            <Coffee className="w-3.5 h-3.5 text-[#2076bd]" />
            <span>TÌNH HUỐNG THỰC TẾ QUẦY BAR</span>
          </div>
          <h2 className="font-oswald text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-wide uppercase">
            HỎI NHANH — ĐÁP CHUẨN CÙNG DOLPHY COMPASS
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Giải đáp các tình huống nan giải thường ngày mà Barista, Cửa hàng trưởng và nhân viên văn phòng gặp phải. Áp dụng chuẩn xác điều luật bảo vệ bạn:
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {[
            { id: 'all', label: 'Tất Cả Tình Huống' },
            { id: 'Barista', label: 'Barista & Quầy Bar' },
            { id: 'CHT', label: 'Cửa Hàng Trưởng' },
            { id: 'QLCL', label: 'Chất Lượng & ATTP' },
            { id: 'DHO', label: 'Văn Phòng DHO' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all ${
                activeTab === tab.id
                  ? 'bg-[#2076bd] text-white shadow-md'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Accordion Cards */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {filteredScenarios.map((sc) => {
            const isExpanded = expandedId === sc.id;

            return (
              <div
                key={sc.id}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isExpanded
                    ? 'bg-white dark:bg-slate-800 border-[#2076bd] shadow-lg ring-1 ring-[#2076bd]/20'
                    : 'bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700/80 hover:border-slate-300 dark:hover:border-slate-600'
                }`}
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleExpand(sc.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 transition-colors"
                >
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950 text-[#2076bd] dark:text-blue-300 border border-blue-200 dark:border-blue-900">
                        {sc.badge}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        Dành cho: <strong>{sc.roleTarget}</strong>
                      </span>
                    </div>

                    <h3 className="font-oswald text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                      {sc.question}
                    </h3>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center flex-shrink-0 text-slate-500 mt-1">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* Accordion Content */}
                {isExpanded && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-100 dark:border-slate-700/60 space-y-5 animate-fadeIn">
                    
                    {/* Bối cảnh tình huống */}
                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      <strong className="text-slate-900 dark:text-white block mb-1">Bối cảnh thực tế:</strong>
                      {sc.situation}
                    </div>

                    {/* Giải pháp & Luật áp dụng */}
                    <div className="p-4 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50 space-y-2">
                      <div className="flex items-center space-x-2 text-emerald-800 dark:text-emerald-300 font-bold font-oswald text-sm uppercase">
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                        <span>Hướng Xử Lý Chuẩn Xác Theo DOL-HR-001:</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed pl-6">
                        {sc.solution}
                      </p>
                      <div className="pl-6 pt-1 text-xs text-emerald-700 dark:text-emerald-400 font-medium">
                        ⚖️ Căn cứ pháp lý: <strong>{sc.relevantArticles}</strong>
                      </div>
                    </div>

                    {/* Dos & Donts */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-2">
                        <h4 className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase flex items-center gap-1.5">
                          <CheckCircle className="w-3.5 h-3.5" />
                          Hành động đúng nên làm:
                        </h4>
                        <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                          {sc.doAndDont.do.map((item, idx) => (
                            <li key={idx} className="flex items-start space-x-1.5">
                              <span className="text-emerald-600 font-bold">✓</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-2">
                        <h4 className="text-xs font-bold text-rose-700 dark:text-rose-400 uppercase flex items-center gap-1.5">
                          <XCircle className="w-3.5 h-3.5" />
                          Sai lầm cần tránh tuyệt đối:
                        </h4>
                        <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                          {sc.doAndDont.dont.map((item, idx) => (
                            <li key={idx} className="flex items-start space-x-1.5">
                              <span className="text-rose-600 font-bold">✕</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Brand Quote */}
                    <div className="p-3 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/40 text-xs text-[#2076bd] dark:text-blue-300 italic flex items-center space-x-2">
                      <Quote className="w-4 h-4 flex-shrink-0 opacity-60" />
                      <span>{sc.quote}</span>
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
