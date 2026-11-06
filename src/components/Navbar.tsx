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
  Award
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
      setScrolled(window.scrollY > 20);
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
    { id: 'support', label: '2 Kênh Hỗ Trợ', icon: ShieldCheck },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-md border-b border-slate-200/80 dark:border-slate-800'
          : 'bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800'
      }`}
    >
      {/* Top Corporate Identity Bar */}
      <div className="bg-[#2076bd] text-white text-[11px] py-1 px-4 font-medium hidden sm:flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <span className="font-bold tracking-wider uppercase">CÔNG TY CỔ PHẦN CÁ HEO XANH (BLUE DOLPHIN)</span>
          <span className="opacity-60">•</span>
          <span>Chuỗi Dolphy Café TP.HCM</span>
          <span className="opacity-60">•</span>
          <span className="bg-[#FAEA28] text-slate-900 px-1.5 py-0.2 rounded font-bold text-[10px]">
            NỘI QUY LAO ĐỘNG v1.0
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1.5 opacity-90 hover:opacity-100">
            <PhoneCall className="w-3 h-3 text-[#FAEA28]" />
            <span>Hotline Hỗ Trợ DHO: <strong>0938 084 985</strong></span>
          </div>
          <span className="opacity-60">|</span>
          <span className="text-[#FAEA28] font-semibold">"happiness in a cup" ☕🐬</span>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* Brand Logo & Title */}
          <div 
            className="flex items-center space-x-2.5 sm:space-x-3 cursor-pointer select-none flex-shrink-0" 
            onClick={() => onSelectTab('home')}
          >
            <img
              src="./images/dolphy-emblem.png"
              alt="Dolphy Logo"
              className="h-9 w-9 sm:h-10 sm:w-10 object-contain rounded-full shadow-sm ring-2 ring-[#2076bd]/20"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div className="flex flex-col">
              <span className="font-oswald text-lg sm:text-2xl font-bold tracking-wider text-[#2076bd] dark:text-blue-400 leading-none">
                DOLPHY COMPASS
              </span>
              <span className="text-[9px] sm:text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mt-0.5">
                Cẩm Nang Nội Quy 2026
              </span>
            </div>
          </div>

          {/* Desktop Clean Tab Bar */}
          <nav className="hidden lg:flex items-center space-x-1 p-1 rounded-2xl bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80">
            {mainTabs.map((t) => {
              const Icon = t.icon;
              const isActive = currentTab === t.id && !isContinuousView;

              return (
                <button
                  key={t.id}
                  onClick={() => onSelectTab(t.id)}
                  className={`flex items-center space-x-1.5 px-2.5 xl:px-3 py-1.5 rounded-xl text-xs font-bold tracking-wide transition-all ${
                    isActive
                      ? 'bg-[#2076bd] text-white shadow-md shadow-blue-500/20'
                      : 'text-slate-600 dark:text-slate-300 hover:text-[#2076bd] dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-700/50'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{t.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Action Tools */}
          <div className="flex items-center space-x-2 sm:space-x-2.5 flex-shrink-0">
            
            {/* View Mode Toggle Button */}
            <button
              onClick={() => setIsContinuousView(!isContinuousView)}
              className={`hidden md:inline-flex items-center space-x-1.5 px-2.5 py-1.5 rounded-xl border text-xs font-semibold transition-all ${
                isContinuousView
                  ? 'bg-amber-50 dark:bg-amber-950/60 border-amber-300 text-amber-700 dark:text-amber-300'
                  : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-[#2076bd]'
              }`}
              title={isContinuousView ? 'Chuyển sang chế độ duyệt từng mục' : 'Chuyển sang chế độ cuộn toàn bộ trang'}
            >
              <Layers className="w-3.5 h-3.5 text-[#2076bd]" />
              <span className="hidden lg:inline">{isContinuousView ? 'Cuộn 1 Trang' : 'Theo Mục'}</span>
            </button>

            {/* Quick Search Button */}
            <button
              onClick={onOpenSearch}
              className="flex items-center space-x-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400 hover:border-[#2076bd] hover:text-[#2076bd] transition-all text-xs"
              title="Tìm kiếm điều luật (Ctrl+K)"
            >
              <Search className="w-4 h-4 text-[#2076bd]" />
              <span className="hidden sm:inline font-medium">Tìm kiếm</span>
              <kbd className="hidden sm:inline-block px-1.5 py-0.2 text-[10px] font-mono bg-white dark:bg-slate-700 rounded border border-slate-200 dark:border-slate-600 text-slate-400">
                ⌘K
              </kbd>
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Chuyển chế độ sáng / tối"
            >
              {darkMode ? <Sun className="w-4 h-4 text-[#FAEA28]" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {/* 2-Channel Report Button */}
            <button
              onClick={onOpenReport}
              className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#2076bd] to-[#165b94] hover:from-[#165b94] hover:to-[#0f4370] text-white text-xs font-bold tracking-wide shadow-md hover:shadow-lg transition-all"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#FAEA28]" />
              <span>PHẢN ÁNH</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 lg:hidden text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-2 pb-6 space-y-3 animate-fadeIn shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="grid grid-cols-2 gap-2 pt-2">
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
                  className={`flex items-center space-x-2 p-2.5 rounded-xl text-xs font-bold transition-colors ${
                    isActive
                      ? 'bg-blue-50 dark:bg-blue-950 text-[#2076bd]'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  <Icon className="w-4 h-4 text-[#2076bd]" />
                  <span>{t.label}</span>
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
            <span>Chế độ cuộn 1 trang:</span>
            <button
              onClick={() => setIsContinuousView(!isContinuousView)}
              className={`px-3 py-1 rounded-lg text-xs font-bold ${
                isContinuousView ? 'bg-blue-100 text-[#2076bd]' : 'bg-slate-100 text-slate-600'
              }`}
            >
              {isContinuousView ? 'Bật' : 'Tắt'}
            </button>
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenReport();
            }}
            className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-[#2076bd] text-white font-bold text-xs shadow-md uppercase tracking-wider"
          >
            <ShieldCheck className="w-4 h-4 text-[#FAEA28]" />
            <span>GỬI PHẢN ÁNH BẢO MẬT (DEC-020)</span>
          </button>
        </div>
      )}
    </header>
  );
};
