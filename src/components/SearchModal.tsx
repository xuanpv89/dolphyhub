import React, { useState, useMemo } from 'react';
import { Search, X, BookOpen, AlertCircle, HelpCircle, ArrowRight } from 'lucide-react';
import { CHAPTERS_DATA, Article } from '../data/chaptersData';
import { PHU_LUC_A_DATA, MisconductItem } from '../data/phuLucAData';
import { SCENARIOS_DATA, Scenario } from '../data/scenariosData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectArticle: (article: Article, chapterTitle: string, chapterRoman: string) => void;
  onSelectMisconduct: (code: string) => void;
  onSelectScenario: (id: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectArticle,
  onSelectMisconduct,
  onSelectScenario,
}) => {
  const [query, setQuery] = useState('');

  // Search across Articles, Misconduct, and Scenarios
  const results = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return { articles: [], misconducts: [], scenarios: [] };

    const matchedArticles: { article: Article; chapterTitle: string; chapterRoman: string }[] = [];
    CHAPTERS_DATA.forEach((chap) => {
      chap.articles.forEach((art) => {
        if (
          art.title.toLowerCase().includes(q) ||
          art.summary.toLowerCase().includes(q) ||
          `điều ${art.number}`.includes(q) ||
          art.number.toString() === q
        ) {
          matchedArticles.push({
            article: art,
            chapterTitle: chap.title,
            chapterRoman: chap.roman,
          });
        }
      });
    });

    const matchedMisconducts = PHU_LUC_A_DATA.filter(
      (m) =>
        m.code.toLowerCase().includes(q) ||
        m.behavior.toLowerCase().includes(q) ||
        m.categoryName.toLowerCase().includes(q) ||
        m.exceptions.toLowerCase().includes(q)
    );

    const matchedScenarios = SCENARIOS_DATA.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.question.toLowerCase().includes(q) ||
        s.situation.toLowerCase().includes(q) ||
        s.solution.toLowerCase().includes(q)
    );

    return {
      articles: matchedArticles.slice(0, 5),
      misconducts: matchedMisconducts.slice(0, 5),
      scenarios: matchedScenarios.slice(0, 5),
    };
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3 border-b border-slate-100 dark:border-slate-800">
          <Search className="w-5 h-5 text-[#2076bd] mr-3 flex-shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tìm kiếm: 'Điều 14', 'chấm công', 'bình vỡ', 'TG-01', 'nghỉ phép'..."
            className="w-full bg-transparent text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none text-base"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="ml-2 px-2.5 py-1 text-xs bg-slate-100 dark:bg-slate-800 text-slate-500 rounded-lg hover:bg-slate-200"
          >
            ESC
          </button>
        </div>

        {/* Results Container */}
        <div className="p-4 overflow-y-auto space-y-4">
          {!query.trim() && (
            <div className="text-center py-10 text-slate-400 space-y-2">
              <Search className="w-10 h-10 mx-auto opacity-30 text-[#2076bd]" />
              <p className="text-sm">Nhập từ khóa để tra cứu toàn bộ 87 điều luật, 28 mã hành vi và các tình huống thực tế.</p>
              <div className="flex flex-wrap justify-center gap-1.5 pt-2">
                {['Đi trễ phạt tiền', 'TG-01', 'Quyền dừng việc', 'Làm bể ly', 'Phụ lục A', 'Quấy rối tình dục'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="text-xs px-2.5 py-1 bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-slate-600 dark:text-slate-300 rounded-full transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {query.trim() && results.articles.length === 0 && results.misconducts.length === 0 && results.scenarios.length === 0 && (
            <div className="text-center py-12 text-slate-400">
              <p className="text-base font-semibold text-slate-600 dark:text-slate-300">Không tìm thấy kết quả phù hợp cho "{query}"</p>
              <p className="text-xs text-slate-400 mt-1">Thử tìm theo từ khóa chung như: ca làm, lương, an toàn, kỷ luật, bồi thường.</p>
            </div>
          )}

          {/* Section: Articles */}
          {results.articles.length > 0 && (
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[#2076bd]" />
                Điều luật & Quy định ({results.articles.length})
              </div>
              <div className="space-y-1.5">
                {results.articles.map(({ article, chapterTitle, chapterRoman }) => (
                  <button
                    key={`art-${article.number}`}
                    onClick={() => {
                      onSelectArticle(article, chapterTitle, chapterRoman);
                      onClose();
                    }}
                    className="w-full text-left p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/80 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-all flex items-start justify-between group"
                  >
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-bold text-[#2076bd] bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded">
                          Điều {article.number}
                        </span>
                        <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-[#2076bd] transition-colors">
                          {article.title}
                        </span>
                        <span className="text-[11px] text-slate-400">
                          (Chương {chapterRoman})
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                        {article.summary}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#2076bd] transition-colors flex-shrink-0 mt-1" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Section: Misconduct Codes (Phụ Lục A) */}
          {results.misconducts.length > 0 && (
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-amber-500" />
                Mã Hành Vi & Chế Tài Phụ Lục A ({results.misconducts.length})
              </div>
              <div className="space-y-1.5">
                {results.misconducts.map((m) => (
                  <button
                    key={`misc-${m.code}`}
                    onClick={() => {
                      onSelectMisconduct(m.code);
                      onClose();
                    }}
                    className="w-full text-left p-3 rounded-xl hover:bg-amber-50/50 dark:hover:bg-amber-950/20 border border-transparent hover:border-amber-200 dark:hover:border-amber-900/50 transition-all flex items-start justify-between group"
                  >
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-bold font-mono text-amber-700 dark:text-amber-300 bg-amber-100 dark:bg-amber-950 px-2 py-0.5 rounded">
                          {m.code}
                        </span>
                        <span className="text-xs text-slate-400">
                          {m.categoryName}
                        </span>
                        <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300">
                          Tối đa: {m.maxSanction}
                        </span>
                      </div>
                      <p className="text-xs text-slate-800 dark:text-slate-200 mt-1 line-clamp-1 font-medium">
                        {m.behavior}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-amber-600 transition-colors flex-shrink-0 mt-1" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Section: Scenarios */}
          {results.scenarios.length > 0 && (
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5 text-emerald-500" />
                Tình Huống Thực Tế Quầy Bar ({results.scenarios.length})
              </div>
              <div className="space-y-1.5">
                {results.scenarios.map((sc) => (
                  <button
                    key={`sc-${sc.id}`}
                    onClick={() => {
                      onSelectScenario(sc.id);
                      onClose();
                    }}
                    className="w-full text-left p-3 rounded-xl hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 border border-transparent hover:border-emerald-200 dark:hover:border-emerald-900/50 transition-all flex items-start justify-between group"
                  >
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950 px-2 py-0.5 rounded">
                          {sc.badge}
                        </span>
                        <span className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors">
                          {sc.title}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                        {sc.question}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-600 transition-colors flex-shrink-0 mt-1" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
