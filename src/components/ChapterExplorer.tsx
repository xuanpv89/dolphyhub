import React, { useState } from 'react';
import { 
  BookOpen, 
  Compass, 
  ShieldCheck, 
  Clock, 
  Sparkles, 
  Flame, 
  HeartHandshake, 
  Lock, 
  ArrowRightLeft, 
  Scale, 
  Coins, 
  FileCheck,
  ChevronRight,
  ExternalLink,
  Layers,
  Search
} from 'lucide-react';
import { CHAPTERS_DATA, Chapter, Article } from '../data/chaptersData';

interface ChapterExplorerProps {
  onSelectArticle: (article: Article, chapterTitle: string, chapterRoman: string) => void;
}

export const ChapterExplorer: React.FC<ChapterExplorerProps> = ({ onSelectArticle }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [expandedChapterId, setExpandedChapterId] = useState<number | null>(null);

  const getChapterIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass': return <Compass className="w-5 h-5" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      case 'Clock': return <Clock className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'Flame': return <Flame className="w-5 h-5" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5" />;
      case 'Lock': return <Lock className="w-5 h-5" />;
      case 'ArrowRightLeft': return <ArrowRightLeft className="w-5 h-5" />;
      case 'Scale': return <Scale className="w-5 h-5" />;
      case 'Coins': return <Coins className="w-5 h-5" />;
      case 'FileCheck': return <FileCheck className="w-5 h-5" />;
      default: return <BookOpen className="w-5 h-5" />;
    }
  };

  const filterCategories = [
    { id: 'all', label: 'Tất Cả 11 Chương' },
    { id: 'time', label: 'Ca Làm & Chấm Công (Chương III)' },
    { id: 'safety', label: 'An Toàn & ATTP (Chương V)' },
    { id: 'harassment', label: 'Chống Quấy Rối (Chương VI)' },
    { id: 'data', label: 'Tài Sản & Dữ Liệu (Chương VII)' },
    { id: 'transfer', label: 'Tạm Chuyển Việc (Chương VIII)' },
    { id: 'discipline', label: 'Kỷ Luật & Bồi Thường (IX, X)' },
  ];

  const filteredChapters = CHAPTERS_DATA.filter((chap) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'time') return chap.id === 3;
    if (selectedFilter === 'safety') return chap.id === 5;
    if (selectedFilter === 'harassment') return chap.id === 6;
    if (selectedFilter === 'data') return chap.id === 7;
    if (selectedFilter === 'transfer') return chap.id === 8;
    if (selectedFilter === 'discipline') return chap.id === 9 || chap.id === 10;
    return true;
  });

  return (
    <section id="chapters" className="py-16 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-[#2076bd] dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5 text-[#2076bd]" />
            <span>HỆ THỐNG PHÂN TẦNG VĂN BẢN</span>
          </div>
          <h2 className="font-oswald text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-wide uppercase">
            CHI TIẾT 11 CHƯƠNG NỘI QUY LAO ĐỘNG DOL-HR-001
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Nhấp vào từng điều luật để xem tóm tắt ý chính cần nhớ, phân tích quyền lợi và đối chiếu nguyên văn văn bản pháp lý chính thức:
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedFilter(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all ${
                selectedFilter === cat.id
                  ? 'bg-[#2076bd] text-white shadow-md'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Chapter Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredChapters.map((chapter) => (
            <div
              key={chapter.id}
              className="rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 overflow-hidden shadow-sm hover:shadow-lg hover:border-[#2076bd] transition-all flex flex-col justify-between"
            >
              {/* Card Header with Roman badge */}
              <div className="p-6 border-b border-slate-100 dark:border-slate-700/70 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/70 text-[#2076bd] dark:text-blue-400 flex items-center justify-center shadow-sm">
                      {getChapterIcon(chapter.iconName)}
                    </div>
                    <div>
                      <span className="text-xs font-bold font-oswald text-[#2076bd] tracking-widest uppercase">
                        CHƯƠNG {chapter.roman}
                      </span>
                      <span className="text-[10px] text-slate-400 block font-medium">
                        {chapter.badge}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                    {chapter.articles.length} Điều
                  </span>
                </div>

                <h3 className="font-oswald text-xl font-bold text-slate-900 dark:text-white leading-snug">
                  {chapter.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                  {chapter.subtitle}
                </p>

                {/* Takeaway box */}
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60 text-xs text-slate-700 dark:text-slate-300 leading-relaxed italic">
                  💡 <strong>Cốt lõi:</strong> {chapter.takeaway}
                </div>
              </div>

              {/* Articles List inside Card */}
              <div className="p-6 pt-4 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Danh mục điều luật nổi bật:
                  </span>
                  <div className="space-y-1.5">
                    {chapter.articles.map((art) => (
                      <button
                        key={art.number}
                        onClick={() => onSelectArticle(art, chapter.title, chapter.roman)}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-950/50 border border-transparent hover:border-blue-100 dark:hover:border-blue-900 transition-all flex items-center justify-between group"
                      >
                        <div className="flex items-center space-x-2">
                          <span className="text-xs font-bold text-[#2076bd] dark:text-blue-400 font-oswald">
                            Điều {art.number}.
                          </span>
                          <span className="text-xs font-medium text-slate-800 dark:text-slate-200 group-hover:text-[#2076bd] transition-colors line-clamp-1">
                            {art.title}
                          </span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#2076bd] transition-transform group-hover:translate-x-0.5 flex-shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onSelectArticle(chapter.articles[0], chapter.title, chapter.roman)}
                  className="w-full py-2.5 px-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-[#2076bd] text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-[#2076bd] flex items-center justify-center space-x-1.5 transition-colors"
                >
                  <span>Xem Chi Tiết Chương {chapter.roman}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
