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
  CheckSquare,
  Users
} from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenSearch: () => void;
  onOpenReport: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  setDarkMode,
  onOpenSearch,
  onOpenReport,
  activeSection,
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

  const navLinks = [
    { id: 'overview', label: 'Tổng Quan' },
    { id: 'role-hub', label: '5 Nhánh Vai Trò' },
    { id: 'infographics', label: 'Infographics' },
    { id: 'flashcards', label: 'Bí Kíp 3 Giây' },
    { id: 'timelines', label: 'Sơ Đồ Quy Trình' },
    { id: 'videos', label: 'Thước Phim & Ảnh' },
    { id: 'checklist', label: 'Checklist Ca' },
    { id: 'chapters', label: '11 Chương' },
    { id: 'matrix', label: 'Phụ Lục A' },
    { id: 'scenarios', label: 'Tình Huống' },
    { id: 'quiz', label: 'Mini Quiz' },
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-md border-b border-slate-200/80 dark:border-slate-800'
          : 'bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800'
      }`}
    >
      {/* Top micro bar for corporate identity */}
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

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Brand Logo & Title */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollTo('overview')}>
            <img
              src="./images/dolphy-emblem.png"
              alt="Dolphy Logo"
              className="h-10 w-10 object-contain rounded-full shadow-sm ring-2 ring-[#2076bd]/20"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div className="flex flex-col">
              <span className="font-oswald text-xl sm:text-2xl font-bold tracking-wider text-[#2076bd] dark:text-blue-400 leading-none">
                DOLPHY COMPASS
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mt-0.5">
                Cẩm Nang Văn Hóa & Nội Quy 2026
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden 2xl:flex items-center space-x-1">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                  activeSection === item.id
                    ? 'text-[#2076bd] bg-blue-50 dark:bg-blue-950/60 font-bold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-[#2076bd] dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action Tools */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Quick Search Button */}
            <button
              onClick={onOpenSearch}
              className="flex items-center space-x-2 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400 hover:border-[#2076bd] hover:text-[#2076bd] transition-all text-xs"
              title="Tìm kiếm điều luật (Ctrl+K)"
            >
              <Search className="w-4 h-4 text-[#2076bd]" />
              <span className="hidden md:inline font-medium">Tìm nhanh...</span>
              <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-white dark:bg-slate-700 rounded border border-slate-200 dark:border-slate-600 text-slate-400">
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
              className="hidden sm:inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#2076bd] to-[#165b94] hover:from-[#165b94] hover:to-[#0f4370] text-white text-xs font-bold tracking-wide shadow-md hover:shadow-lg transition-all"
            >
              <ShieldCheck className="w-4 h-4 text-[#FAEA28]" />
              <span>GỬI PHẢN ÁNH BẢO MẬT</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 2xl:hidden text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="2xl:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-2 pb-6 space-y-2 animate-fadeIn shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="grid grid-cols-2 gap-2 pt-2 pb-3">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-left px-3 py-2.5 rounded-lg text-xs font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-blue-50 dark:bg-blue-950 text-[#2076bd] font-bold'
                    : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {item.label}
              </button>
            ))}
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
