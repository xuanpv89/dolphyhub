import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Moon, 
  Sun, 
  ShieldCheck, 
  Menu, 
  X, 
  PhoneCall, 
  Sparkles,
  BookOpen,
  Film,
  Zap,
  Coffee,
  CheckSquare,
  Layers,
  HelpCircle,
  Award,
  ChevronDown
} from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenSearch: () => void;
  onOpenReport: () => void;
  currentTab: string;
  onSelectTab: (tab: string) => void;
  isContinuousView: boolean;
  setIsContinuousView: (val: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  setDarkMode,
  onOpenSearch,
  onOpenReport,
  currentTab,
  onSelectTab,
  isContinuousView,
  setIsContinuousView,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mainTabs = [
    { id: 'home', label: 'Trang Chủ', icon: Sparkles },
    { id: 'role', label: 'Góc Vai Trò', icon: Coffee },
    { id: 'chapters', label: '11 Chương', icon: BookOpen },
    { id: 'matrix', label: 'Tra Cứu', icon: Search },
    { id: 'media', label: 'Video & Quiz', icon: Film },
    { id: 'support', label: 'Kênh Bảo Vệ', icon: ShieldCheck },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      
      {/* Top Corporate Slim Announcement Ribbon */}
      <div className="bg-[#0f2942] text-slate-200 text-[11px] py-1 px-4 sm:px-8 border-b border-white/10 hidden md:flex items-center justify-between">
        <div className="flex items-center space-x-2.5">
          <span className="w-2 h-2 rounded-full bg-[#FAEA28] animate-pulse" />
          <span className="font-semibold text-white tracking-wide uppercase">CÔNG TY CP CÁ HEO XANH (BLUE DOLPHIN)</span>
          <span className="text-slate-500">•</span>
          <span className="text-slate-300">Chuỗi Dolphy Café TP.HCM</span>
          <span className="text-slate-500">•</span>
          <span className="bg-[#FAEA28] text-slate-900 px-2 py-0.2 rounded-full font-bold text-[10px]">
            NỘI QUY 2026 (DOL-HR-001)
          </span>
        </div>

        <div className="flex items-center space-x-4">
          <a
            href="tel:0938084985"
            className="flex items-center space-x-1.5 text-slate-300 hover:text-white transition-colors"
          >
            <PhoneCall className="w-3 h-3 text-[#FAEA28]" />
            <span>Hotline DHO: <strong>0938 084 985</strong> (Bảo mật 24/7)</span>
          </a>
          <span className="text-slate-600">|</span>
          <span className="text-[#FAEA28] font-medium tracking-wide">"happiness in a cup" ☕🐬</span>
        </div>
      </div>

      {/* Main Glassmorphic Navigation Bar */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-md shadow-slate-900/5 border-b border-slate-200/80 dark:border-slate-800'
            : 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-100 dark:border-slate-800/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 gap-2">
            
            {/* Brand Logo & Title - Compact & Sleek */}
            <div 
              className="flex items-center space-x-2.5 cursor-pointer select-none group flex-shrink-0" 
              onClick={() => onSelectTab('home')}
            >
              <div className="relative">
                <img
                  src="./images/dolphy-emblem.png"
                  alt="Dolphy Logo"
                  className="h-7 w-7 sm:h-8 sm:w-8 object-contain rounded-xl shadow-xs ring-1 ring-[#2076bd]/25 group-hover:scale-105 transition-all duration-200"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-emerald-500 border border-white dark:border-slate-900 rounded-full" />
              </div>

              <div className="flex flex-col">
                <div className="flex items-center space-x-1 leading-none">
                  <span className="font-oswald text-sm sm:text-base font-bold tracking-wider text-[#2076bd] dark:text-blue-400">
                    DOLPHY
                  </span>
                  <span className="font-oswald text-sm sm:text-base font-medium tracking-wider text-slate-800 dark:text-white">
                    COMPASS
                  </span>
                  <span className="text-[9px] bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 px-1 py-0.2 rounded font-mono font-bold">
                    v1.0
                  </span>
                </div>
                <span className="text-[9px] text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider mt-0.5">
                  Nội Quy Lao Động 2026
                </span>
              </div>
            </div>

            {/* Desktop Center Navigation Links - Evenly Spaced & Never Wrapping */}
            <nav className="hidden lg:flex items-center justify-center space-x-1 xl:space-x-2 bg-slate-100/70 dark:bg-slate-800/70 p-1 rounded-full border border-slate-200/60 dark:border-slate-700/60 flex-shrink-0">
              {mainTabs.map((t) => {
                const Icon = t.icon;
                const isActive = currentTab === t.id && !isContinuousView;

                return (
                  <button
                    key={t.id}
                    onClick={() => onSelectTab(t.id)}
                    className={`flex items-center space-x-1.5 px-3 xl:px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all cursor-pointer whitespace-nowrap flex-shrink-0 ${
                      isActive
                        ? 'bg-[#2076bd] text-white shadow-sm shadow-blue-500/25 scale-[1.02]'
                        : 'text-slate-600 dark:text-slate-300 hover:text-[#2076bd] dark:hover:text-white hover:bg-white/80 dark:hover:bg-slate-700/60'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 flex-shrink-0 ${isActive ? 'text-[#FAEA28]' : 'text-slate-400'}`} />
                    <span className="whitespace-nowrap">{t.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Right Action Tools - Compact & Aligned */}
            <div className="flex items-center space-x-1.5 sm:space-x-2 flex-shrink-0">
              
              {/* Quick Search Capsule Button */}
              <button
                onClick={onOpenSearch}
                className="flex items-center space-x-1.5 px-2.5 sm:px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50/90 dark:bg-slate-800/90 text-slate-500 dark:text-slate-400 hover:border-[#2076bd] hover:text-[#2076bd] hover:bg-white dark:hover:bg-slate-800 transition-all text-xs shadow-xs cursor-pointer whitespace-nowrap"
                title="Tìm kiếm điều luật (Ctrl+K)"
              >
                <Search className="w-3.5 h-3.5 text-[#2076bd] flex-shrink-0" />
                <span className="hidden xl:inline font-medium text-slate-600 dark:text-slate-300">Tìm điều luật</span>
                <kbd className="hidden sm:inline-flex items-center px-1.5 py-0.2 text-[9px] font-mono bg-white dark:bg-slate-700 rounded border border-slate-200 dark:border-slate-600 text-slate-400">
                  ⌘K
                </kbd>
              </button>

              {/* View Mode Toggle Pill */}
              <button
                onClick={() => setIsContinuousView(!isContinuousView)}
                className={`hidden md:inline-flex items-center space-x-1 px-2.5 py-1.5 rounded-full border text-xs font-semibold transition-all cursor-pointer whitespace-nowrap shadow-xs ${
                  isContinuousView
                    ? 'bg-amber-50 dark:bg-amber-950/60 border-amber-300 text-amber-700 dark:text-amber-300'
                    : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-[#2076bd]'
                }`}
                title={isContinuousView ? 'Chuyển sang chế độ từng mục' : 'Chuyển sang chế độ cuộn trang liên tục'}
              >
                <Layers className="w-3.5 h-3.5 text-[#2076bd] flex-shrink-0" />
                <span className="hidden xl:inline">{isContinuousView ? 'Cuộn trang' : 'Từng mục'}</span>
              </button>

              {/* Dark Mode Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-1.5 w-8 h-8 rounded-full text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white border border-slate-200/80 dark:border-slate-700/80 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center transition-colors cursor-pointer flex-shrink-0"
                title="Chuyển chế độ sáng / tối"
              >
                {darkMode ? <Sun className="w-3.5 h-3.5 text-[#FAEA28]" /> : <Moon className="w-3.5 h-3.5 text-slate-600" />}
              </button>

              {/* 2-Channel Report Button */}
              <button
                onClick={onOpenReport}
                className="hidden sm:inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#2076bd] to-[#165b94] hover:from-[#165b94] hover:to-[#0f4370] text-white text-xs font-bold tracking-wide shadow-sm shadow-blue-600/20 hover:shadow-md transition-all cursor-pointer whitespace-nowrap flex-shrink-0"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[#FAEA28] flex-shrink-0" />
                <span>BẢO VỆ 24/7</span>
              </button>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 lg:hidden text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl cursor-pointer flex-shrink-0"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-4 animate-fadeIn shadow-2xl max-h-[85vh] overflow-y-auto">
          
          <div className="p-3 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/60 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <PhoneCall className="w-4 h-4 text-[#2076bd]" />
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Hotline DHO: 0938 084 985</span>
            </div>
            <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold bg-white dark:bg-slate-900 px-2 py-0.5 rounded-full">
              24/7
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {mainTabs.map((t) => {
              const Icon = t.icon;
              const isActive = currentTab === t.id && !isContinuousView;

              return (
                <button
                  key={t.id}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onSelectTab(t.id);
                  }}
                  className={`flex items-center space-x-2.5 p-3 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#2076bd] text-white shadow-md'
                      : 'text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#FAEA28]' : 'text-[#2076bd]'}`} />
                  <span>{t.label}</span>
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
            <span>Chế độ cuộn 1 trang:</span>
            <button
              onClick={() => setIsContinuousView(!isContinuousView)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                isContinuousView ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-600'
              }`}
            >
              {isContinuousView ? 'Đang bật' : 'Đang tắt'}
            </button>
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenReport();
            }}
            className="w-full flex items-center justify-center space-x-2 py-3.5 rounded-2xl bg-gradient-to-r from-[#2076bd] to-[#165b94] text-white font-bold text-xs shadow-lg uppercase tracking-wider cursor-pointer"
          >
            <ShieldCheck className="w-4 h-4 text-[#FAEA28]" />
            <span>GỬI PHẢN ÁNH BẢO MẬT (DEC-020)</span>
          </button>
        </div>
      )}
    </header>
  );
};
