import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { RoleHub } from './components/RoleHub';
import { VisualInfographics } from './components/VisualInfographics';
import { FlashcardsSection } from './components/FlashcardsSection';
import { VisualTimelineFlow } from './components/VisualTimelineFlow';
import { VideoSection } from './components/VideoSection';
import { InteractiveChecklist } from './components/InteractiveChecklist';
import { ComparisonSection } from './components/ComparisonSection';
import { ChapterExplorer } from './components/ChapterExplorer';
import { MatrixExplorer } from './components/MatrixExplorer';
import { ScenariosSection } from './components/ScenariosSection';
import { QuizSection } from './components/QuizSection';
import { WhistleblowerSection } from './components/WhistleblowerSection';
import { AmbienceAudio } from './components/AmbienceAudio';
import { MobileBottomDock } from './components/MobileBottomDock';
import { Footer } from './components/Footer';
import { ArticleModal } from './components/ArticleModal';
import { ReportModal } from './components/ReportModal';
import { SearchModal } from './components/SearchModal';
import { CHAPTERS_DATA, Article } from './data/chaptersData';

export function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('dolphy_theme') === 'dark';
  });

  const [currentTab, setCurrentTab] = useState<string>('home');
  const [isContinuousView, setIsContinuousView] = useState<boolean>(false);

  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [selectedArticleContext, setSelectedArticleContext] = useState<{
    chapterTitle: string;
    chapterRoman: string;
  }>({ chapterTitle: '', chapterRoman: '' });

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isReportOpen, setIsReportOpen] = useState(false);

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
    setCurrentTab('matrix');
    setTimeout(() => {
      const matrixElem = document.getElementById('matrix');
      if (matrixElem) {
        matrixElem.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleSelectScenario = (id: string) => {
    setCurrentTab('matrix');
    setTimeout(() => {
      const scElem = document.getElementById('scenarios');
      if (scElem) {
        scElem.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const switchTabAndScroll = (tabId: string) => {
    setCurrentTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#0f172a] text-[#1e293b] dark:text-[#f8fafc] flex flex-col font-sans transition-colors duration-200 pb-16 md:pb-0">
      
      {/* Top Navbar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenReport={() => setIsReportOpen(true)}
        currentTab={currentTab}
        onSelectTab={switchTabAndScroll}
        isContinuousView={isContinuousView}
        setIsContinuousView={setIsContinuousView}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        
        {/* Render Mode A: Tabbed Clean View (Default - Easy & Focused) */}
        {!isContinuousView ? (
          <div className="animate-fadeIn">
            {/* TAB 1: TRANG CHỦ */}
            {currentTab === 'home' && (
              <>
                <HeroBanner
                  onOpenSearch={() => setIsSearchOpen(true)}
                  onExploreChapters={() => switchTabAndScroll('chapters')}
                  onExploreRoleHub={() => switchTabAndScroll('role')}
                  onExploreFlashcards={() => switchTabAndScroll('role')}
                  onWatchVideo={() => switchTabAndScroll('media')}
                  onStartQuiz={() => switchTabAndScroll('media')}
                  onOpenArticleByNumber={handleOpenArticleByNumber}
                />
                <ComparisonSection />
                <FlashcardsSection />
                <VisualInfographics />
              </>
            )}

            {/* TAB 2: GÓC VAI TRÒ CỦA BẠN & CHECKLIST CA */}
            {currentTab === 'role' && (
              <div className="pt-20 sm:pt-24 space-y-6">
                <RoleHub 
                  onOpenArticleByNumber={handleOpenArticleByNumber}
                  onExploreFlashcards={() => {
                    const fc = document.getElementById('flashcards');
                    if (fc) fc.scrollIntoView({ behavior: 'smooth' });
                  }}
                />
                <InteractiveChecklist />
                <FlashcardsSection />
              </div>
            )}

            {/* TAB 3: 11 CHƯƠNG CẨM NANG & SO SÁNH */}
            {currentTab === 'chapters' && (
              <div className="pt-20 sm:pt-24 space-y-6">
                <ChapterExplorer onSelectArticle={handleSelectArticle} />
                <ComparisonSection />
              </div>
            )}

            {/* TAB 4: TRA CỨU PHỤ LỤC A & TÌNH HUỐNG THỰC TẾ */}
            {currentTab === 'matrix' && (
              <div className="pt-20 sm:pt-24 space-y-6">
                <MatrixExplorer />
                <ScenariosSection onOpenArticleByNumber={handleOpenArticleByNumber} />
              </div>
            )}

            {/* TAB 5: VIDEO 13 NĂM, INFOGRAPHICS, SƠ ĐỒ & QUIZ */}
            {currentTab === 'media' && (
              <div className="pt-20 sm:pt-24 space-y-6">
                <VideoSection />
                <VisualTimelineFlow />
                <VisualInfographics />
                <QuizSection />
              </div>
            )}

            {/* TAB 6: 2 KÊNH TIẾP NHẬN BẢO VỆ (DEC-020) */}
            {currentTab === 'support' && (
              <div className="pt-20 sm:pt-24 space-y-6">
                <WhistleblowerSection onOpenReportModal={() => setIsReportOpen(true)} />
                <VisualInfographics />
              </div>
            )}
          </div>
        ) : (
          /* Render Mode B: Continuous Single Page View (All stacked) */
          <div className="animate-fadeIn">
            <HeroBanner
              onOpenSearch={() => setIsSearchOpen(true)}
              onExploreChapters={() => switchTabAndScroll('chapters')}
              onExploreRoleHub={() => switchTabAndScroll('role')}
              onExploreFlashcards={() => switchTabAndScroll('role')}
              onWatchVideo={() => switchTabAndScroll('media')}
              onStartQuiz={() => switchTabAndScroll('media')}
              onOpenArticleByNumber={handleOpenArticleByNumber}
            />
            <RoleHub 
              onOpenArticleByNumber={handleOpenArticleByNumber}
              onExploreFlashcards={() => {
                const fc = document.getElementById('flashcards');
                if (fc) fc.scrollIntoView({ behavior: 'smooth' });
              }}
            />
            <VisualInfographics />
            <FlashcardsSection />
            <VisualTimelineFlow />
            <VideoSection />
            <InteractiveChecklist />
            <ComparisonSection />
            <ChapterExplorer onSelectArticle={handleSelectArticle} />
            <MatrixExplorer />
            <ScenariosSection onOpenArticleByNumber={handleOpenArticleByNumber} />
            <QuizSection />
            <WhistleblowerSection onOpenReportModal={() => setIsReportOpen(true)} />
          </div>
        )}

      </main>

      {/* Floating Ambience Sound Button (Coffee Shop Rain Sound) */}
      <AmbienceAudio />

      {/* Mobile Bottom Navigation Dock */}
      <MobileBottomDock
        currentTab={currentTab}
        onSelectTab={switchTabAndScroll}
        onOpenReport={() => setIsReportOpen(true)}
      />

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
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
