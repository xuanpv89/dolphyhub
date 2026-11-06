import React from 'react';
import { X, BookOpen, CheckCircle, ShieldAlert, FileText, Copy, Check } from 'lucide-react';
import { Article } from '../data/chaptersData';

interface ArticleModalProps {
  article: Article | null;
  chapterTitle?: string;
  chapterRoman?: string;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  chapterTitle,
  chapterRoman,
  onClose,
}) => {
  const [copied, setCopied] = React.useState(false);

  if (!article) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(`Điều ${article.number}. ${article.title}\n\n${article.fullText}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-800/50">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-[#2076bd] dark:text-blue-400 flex items-center justify-center font-bold font-oswald text-lg">
              {article.number}
            </div>
            <div>
              <span className="text-xs font-semibold text-[#2076bd] dark:text-blue-400 uppercase tracking-wider">
                Chương {chapterRoman || 'I'} • {chapterTitle || 'Nội Quy Lao Động'}
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-oswald tracking-wide">
                Điều {article.number}. {article.title}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Quick Summary Pill */}
          <div className="p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/50">
            <div className="flex items-center space-x-2 text-[#2076bd] dark:text-blue-300 font-semibold text-sm mb-1">
              <BookOpen className="w-4 h-4" />
              <span>Ý chính cần nhớ (Quick Summary)</span>
            </div>
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              {article.summary}
            </p>
          </div>

          {/* Key Takeaways */}
          {article.keyPoints && article.keyPoints.length > 0 && (
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                Điểm cốt lõi cho nhân sự
              </h4>
              <ul className="space-y-2">
                {article.keyPoints.map((point, index) => (
                  <li key={index} className="flex items-start text-sm text-slate-700 dark:text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2076bd] mt-2 mr-2.5 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Original Legal Text */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-[#2076bd]" />
                Nguyên văn điều luật (Văn bản DOL-HR-001)
              </h4>
              <button
                onClick={handleCopy}
                className="inline-flex items-center space-x-1 text-xs text-slate-500 hover:text-[#2076bd] transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Đã sao chép' : 'Sao chép'}</span>
              </button>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 text-sm text-slate-800 dark:text-slate-200 font-mono whitespace-pre-wrap leading-relaxed max-h-72 overflow-y-auto">
              {article.fullText}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 flex items-center justify-between text-xs text-slate-500">
          <span>Tài liệu Tầng 2 — Công ty CP Cá Heo Xanh (Blue Dolphin)</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#2076bd] hover:bg-[#165b94] text-white font-medium rounded-lg transition-colors"
          >
            Đã hiểu & Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
