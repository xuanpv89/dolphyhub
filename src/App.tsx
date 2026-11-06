import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { ComparisonSection } from './components/ComparisonSection';
import { RoleGuideSection } from './components/RoleGuideSection';
import { ChapterExplorer } from './components/ChapterExplorer';
import { MatrixExplorer } from './components/MatrixExplorer';
import { ScenariosSection } from './components/ScenariosSection';
import { QuizSection } from './components/QuizSection';
import { WhistleblowerSection } from './components/WhistleblowerSection';
import { Footer } from './components/Footer';
import { ArticleModal } from './components/ArticleModal';
import { ReportModal } from './components/ReportModal';
import { SearchModal } from './components/SearchModal';
import { CHAPTERS_DATA, Article } from './data/chaptersData';

export function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('dolphy_theme') === 'dark';
  });

  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [selectedArticleContext, setSelectedArticleContext] = useState<{
    chapterTitle: string;
    chapterRoman: string;
  }>({ chapterTitle: '', chapterRoman: '' });

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  // Sync dark mode class on <html>
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('dolphy_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('dolphy_theme', 'light');
    }
  }, [darkMode]);

  // Keyboard shortcut Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelectArticle = (
    article: Article,
    chapterTitle: string,
    chapterRoman: string
  ) => {
    setSelectedArticle(article);
    setSelectedArticleContext({ chapterTitle, chapterRoman });
  };

  const handleOpenArticleByNumber = (num: number) => {
    for (const chap of CHAPTERS_DATA) {
      const art = chap.articles.find((a) => a.number === num);
      if (art) {
        handleSelectArticle(art, chap.title, chap.roman);
        return;
      }
    }
  };

  const handleSelectMisconduct = (code: string) => {
    const matrixElem = document.getElementById('matrix');
    if (matrixElem) {
      matrixElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectScenario = (id: string) => {
    const scElem = document.getElementById('scenarios');
    if (scElem) {
      scElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollTo = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#0f172a] text-[#1e293b] dark:text-[#f8fafc] flex flex-col font-sans transition-colors duration-200">
      {/* Navbar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenReport={() => setIsReportOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Hero Overview */}
        <HeroBanner
          onOpenSearch={() => setIsSearchOpen(true)}
          onExploreChapters={() => scrollTo('chapters')}
          onExploreMatrix={() => scrollTo('matrix')}
          onStartQuiz={() => scrollTo('quiz')}
        />

        {/* 2. Bước Tiến Mới (So sánh Cũ vs Mới 2026) */}
        <ComparisonSection />

        {/* 3. Định Hướng Theo Từng Vị Trí (Barista, CHT, QLCL, DHO) */}
        <RoleGuideSection onOpenArticleByNumber={handleOpenArticleByNumber} />

        {/* 4. Chi Tiết 11 Chương Trực Quan */}
        <ChapterExplorer onSelectArticle={handleSelectArticle} />

        {/* 5. Tra Cứu Phụ Lục A (Ma Trận 28+ Hành Vi & Chế Tài Tối Đa) */}
        <MatrixExplorer />

        {/* 6. Tình Huống Thực Tế & Case Study Quầy Bar */}
        <ScenariosSection onOpenArticleByNumber={handleOpenArticleByNumber} />

        {/* 7. Mini Quiz: Đại Sứ Hiểu Luật Dolphy 2026 */}
        <QuizSection />

        {/* 8. 02 Kênh Tiếp Nhận & Bảo Vệ Độc Lập (DEC-020) */}
        <WhistleblowerSection onOpenReportModal={() => setIsReportOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <ArticleModal
        article={selectedArticle}
        chapterTitle={selectedArticleContext.chapterTitle}
        chapterRoman={selectedArticleContext.chapterRoman}
        onClose={() => setSelectedArticle(null)}
      />

      <ReportModal
        isOpen={isReportOpen}
        onClose={() => setIsReportOpen(false)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectArticle={handleSelectArticle}
        onSelectMisconduct={handleSelectMisconduct}
        onSelectScenario={handleSelectScenario}
      />
    </div>
  );
}

export default App;
