import React, { useState } from 'react';
import { 
  Coffee, 
  Store, 
  BadgeCheck, 
  Building2, 
  CheckCircle, 
  AlertOctagon, 
  ArrowRight,
  ShieldCheck,
  BookOpen
} from 'lucide-react';
import { ROLE_GUIDES_DATA, RoleGuide } from '../data/roleGuidesData';
import { Article } from '../data/chaptersData';

interface RoleGuideSectionProps {
  onOpenArticleByNumber: (num: number) => void;
}

export const RoleGuideSection: React.FC<RoleGuideSectionProps> = ({ onOpenArticleByNumber }) => {
  const [activeRoleId, setActiveRoleId] = useState<string>('barista');

  const activeRole = ROLE_GUIDES_DATA.find((r) => r.id === activeRoleId) || ROLE_GUIDES_DATA[0];

  const getRoleIcon = (iconName: string) => {
    switch (iconName) {
      case 'Coffee': return <Coffee className="w-5 h-5" />;
      case 'Store': return <Store className="w-5 h-5" />;
      case 'BadgeCheck': return <BadgeCheck className="w-5 h-5" />;
      case 'Building2': return <Building2 className="w-5 h-5" />;
      default: return <Coffee className="w-5 h-5" />;
    }
  };

  return (
    <section id="roles" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-[#2076bd] dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-[#2076bd]" />
            <span>ĐỊNH HƯỚNG THEO TỪNG VAI TRÒ</span>
          </div>
          <h2 className="font-oswald text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-wide uppercase">
            GÓC NHÌN THEO VỊ TRÍ CÔNG VIỆC TẠI DOLPHY
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Dù bạn là Barista đứng quầy, CHT điều hành, QLCL giữ chuẩn hay chuyên viên DHO, hãy xem những điều then chốt nhất dành riêng cho bạn:
          </p>
        </div>

        {/* Role Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          {ROLE_GUIDES_DATA.map((role) => (
            <button
              key={role.id}
              onClick={() => setActiveRoleId(role.id)}
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-2xl font-bold text-xs sm:text-sm tracking-wide transition-all shadow-sm ${
                activeRoleId === role.id
                  ? 'bg-[#2076bd] text-white shadow-md shadow-blue-600/20 ring-2 ring-[#2076bd]/20 scale-102'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {getRoleIcon(role.iconName)}
              <span>{role.roleName}</span>
            </button>
          ))}
        </div>

        {/* Active Role Content Card */}
        <div className="rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 p-6 sm:p-8 lg:p-10 shadow-lg space-y-8 animate-fadeIn">
          
          {/* Header Role Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 dark:border-slate-700/80 gap-4">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2076bd] to-[#165b94] text-white flex items-center justify-center shadow-md">
                {getRoleIcon(activeRole.iconName)}
              </div>
              <div>
                <span className="text-xs font-bold text-[#2076bd] dark:text-blue-400 uppercase tracking-wider">
                  {activeRole.avatarBadge}
                </span>
                <h3 className="font-oswald text-2xl font-bold text-slate-900 dark:text-white">
                  {activeRole.roleName}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  {activeRole.tagline}
                </p>
              </div>
            </div>

            <div className="text-xs text-slate-400 sm:text-right">
              <span>Kiến trúc tài liệu: <strong>Tầng 2 & Tầng 3 (DOL-BAR / DOL-MGT)</strong></span>
            </div>
          </div>

          {/* 2 Main Columns: Quyền Lợi & Trách Nhiệm */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Quyền lợi được bảo vệ */}
            <div className="p-5 rounded-2xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40 space-y-3">
              <div className="flex items-center space-x-2 text-[#2076bd] dark:text-blue-300 font-bold font-oswald text-base uppercase">
                <ShieldCheck className="w-5 h-5 text-emerald-500" />
                <span>Quyền Lợi & Sự Bảo Vệ Dành Cho Bạn</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                {activeRole.keyRights.map((right, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                    <span>{right}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trách nhiệm trọng tâm */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
              <div className="flex items-center space-x-2 text-slate-900 dark:text-white font-bold font-oswald text-base uppercase">
                <CheckCircle className="w-5 h-5 text-[#2076bd]" />
                <span>Trách Nhiệm & Chuẩn Mực Bắt Buộc</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                {activeRole.keyResponsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2076bd] mt-2 flex-shrink-0" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Dos and Don'ts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            
            {/* Nên làm */}
            <div className="p-5 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30 space-y-2.5">
              <h4 className="font-oswald text-sm font-bold text-emerald-800 dark:text-emerald-300 uppercase flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                Điều nên làm mỗi ngày (Best Practices)
              </h4>
              <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                {activeRole.vitalDos.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tuyệt đối tránh */}
            <div className="p-5 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/30 space-y-2.5">
              <h4 className="font-oswald text-sm font-bold text-rose-800 dark:text-rose-300 uppercase flex items-center gap-1.5">
                <AlertOctagon className="w-4 h-4 text-rose-600" />
                Điều tuyệt đối không làm (Fatal Errors)
              </h4>
              <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                {activeRole.vitalDonts.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-rose-600 font-bold">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Must read articles for this role */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-700/80">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              Các điều luật trọng yếu bạn cần đọc kỹ:
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {activeRole.mustReadArticles.map((art) => (
                <button
                  key={art.article}
                  onClick={() => onOpenArticleByNumber(art.article)}
                  className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-950/60 border border-slate-200 dark:border-slate-700 hover:border-[#2076bd] text-left transition-all group"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold font-oswald text-[#2076bd]">
                      Điều {art.article}
                    </span>
                    <span className="text-[10px] text-slate-400">
                      {art.chapter}
                    </span>
                  </div>
                  <div className="text-xs font-medium text-slate-800 dark:text-slate-200 group-hover:text-[#2076bd] line-clamp-1 transition-colors">
                    {art.title}
                  </div>
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
