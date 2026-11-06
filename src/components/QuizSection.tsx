import React, { useState } from 'react';
import { 
  Award, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  HelpCircle, 
  Sparkles, 
  Share2,
  Trophy,
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { QUIZ_QUESTIONS, QuizQuestion } from '../data/quizData';

export const QuizSection: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);

  const currentQ = QUIZ_QUESTIONS[currentIdx];

  const handleSelect = (optionId: string) => {
    if (isAnswered) return;
    setSelectedOption(optionId);
    setIsAnswered(true);

    const isCorrect = currentQ.options.find((o) => o.id === optionId)?.isCorrect;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx < QUIZ_QUESTIONS.length - 1) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setQuizFinished(false);
    setShowCertificate(false);
  };

  const progressPercent = Math.round(((currentIdx + 1) / QUIZ_QUESTIONS.length) * 100);

  return (
    <section id="quiz" className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5 text-amber-600" />
            <span>THỬ THÁCH TƯƠNG TÁC CÓ THƯỞNG</span>
          </div>
          <h2 className="font-oswald text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-wide uppercase">
            MINI QUIZ: ĐẠI SỨ HIỂU LUẬT DOLPHY 2026
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Trả lời nhanh 8 câu hỏi tình huống thực tế để kiểm tra độ am hiểu quyền lợi và rinh ngay huy hiệu <strong>"Đại Sứ Tuân Thủ Dolphy"</strong>:
          </p>
        </div>

        {/* Main Quiz Box */}
        <div className="rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 p-6 sm:p-10 shadow-xl relative overflow-hidden">
          
          {!quizFinished ? (
            <div className="space-y-6">
              {/* Progress & Counter */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
                  <span className="text-[#2076bd] font-bold">
                    Câu hỏi {currentIdx + 1} / {QUIZ_QUESTIONS.length}
                  </span>
                  <span>Chủ đề: <strong className="text-slate-700 dark:text-slate-300">{currentQ.context}</strong></span>
                  <span className="font-mono text-emerald-600">Điểm hiện tại: {score}</span>
                </div>
                {/* Progress bar */}
                <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-700 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#2076bd] to-[#FAEA28] transition-all duration-300"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

              {/* Question text */}
              <h3 className="font-oswald text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug pt-2">
                {currentQ.question}
              </h3>

              {/* Options */}
              <div className="space-y-3">
                {currentQ.options.map((opt) => {
                  let optStyle = 'border-slate-200 dark:border-slate-700 hover:border-[#2076bd] bg-slate-50/50 dark:bg-slate-800/50';

                  if (isAnswered) {
                    if (opt.isCorrect) {
                      optStyle = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-900 dark:text-emerald-200 ring-2 ring-emerald-500/20';
                    } else if (selectedOption === opt.id) {
                      optStyle = 'border-rose-500 bg-rose-50 dark:bg-rose-950/50 text-rose-900 dark:text-rose-200 ring-2 ring-rose-500/20';
                    } else {
                      optStyle = 'opacity-50 border-slate-200 dark:border-slate-700';
                    }
                  } else if (selectedOption === opt.id) {
                    optStyle = 'border-[#2076bd] bg-blue-50 dark:bg-blue-950';
                  }

                  return (
                    <button
                      key={opt.id}
                      disabled={isAnswered}
                      onClick={() => handleSelect(opt.id)}
                      className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start space-x-3 text-xs sm:text-sm font-medium ${optStyle}`}
                    >
                      <span className="w-6 h-6 rounded-full bg-white dark:bg-slate-700 shadow-sm border border-slate-200 dark:border-slate-600 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                        {opt.id}
                      </span>
                      <span className="flex-1 leading-relaxed">
                        {opt.text}
                      </span>
                      {isAnswered && opt.isCorrect && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 ml-2" />
                      )}
                      {isAnswered && selectedOption === opt.id && !opt.isCorrect && (
                        <XCircle className="w-5 h-5 text-rose-600 flex-shrink-0 ml-2" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation & Next button */}
              {isAnswered && (
                <div className="pt-4 border-t border-slate-100 dark:border-slate-700 space-y-4 animate-fadeIn">
                  <div className="p-4 rounded-2xl bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 text-xs sm:text-sm text-slate-800 dark:text-slate-200 space-y-1">
                    <div className="flex items-center space-x-2 font-bold text-[#2076bd] dark:text-blue-300">
                      <BookOpen className="w-4 h-4" />
                      <span>Giải thích & Căn cứ quy định:</span>
                    </div>
                    <p className="leading-relaxed pl-6">
                      {currentQ.explanation}
                    </p>
                    <div className="pl-6 pt-1 text-xs text-slate-500 font-mono">
                      📚 Tham chiếu: {currentQ.articleRef}
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      onClick={handleNext}
                      className="px-6 py-3 rounded-xl bg-[#2076bd] hover:bg-[#165b94] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center space-x-2"
                    >
                      <span>{currentIdx < QUIZ_QUESTIONS.length - 1 ? 'Câu Tiếp Theo' : 'Xem Kết Quả & Nhận Huy Hiệu'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

            </div>
          ) : (
            /* Quiz Result Screen */
            <div className="text-center py-6 space-y-6 animate-fadeIn">
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-amber-400 to-[#FAEA28] text-slate-900 mx-auto flex items-center justify-center shadow-lg shadow-amber-400/30">
                <Trophy className="w-10 h-10 animate-bounce" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold text-[#2076bd] uppercase tracking-widest">
                  HOÀN THÀNH THỬ THÁCH NỘI QUY DOLPHY 2026
                </span>
                <h3 className="font-oswald text-3xl font-bold text-slate-900 dark:text-white">
                  KẾT QUẢ: {score} / {QUIZ_QUESTIONS.length} ĐIỂM
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                  {score >= 7 
                    ? '🎉 Xuất sắc! Bạn xứng đáng là Đại Sứ Tuân Thủ Chuẩn Mực của đại gia đình Dolphy Café!'
                    : score >= 5 
                    ? '👍 Rất tốt! Bạn đã nắm vững các quyền lợi và quy tắc an toàn cốt lõi.'
                    : '📖 Hãy tiếp tục tra cứu cẩm nang Dolphy Compass để bảo vệ tốt nhất quyền lợi của mình nhé!'}
                </p>
              </div>

              {/* Digital Certificate Badge */}
              <div className="max-w-md mx-auto p-6 rounded-2xl bg-gradient-to-br from-blue-900 to-indigo-950 text-white shadow-xl border border-blue-400/30 space-y-3 relative overflow-hidden">
                <div className="absolute top-2 right-2 text-[#FAEA28] opacity-20">
                  <Award className="w-24 h-24" />
                </div>
                <div className="text-[10px] tracking-widest text-[#FAEA28] uppercase font-bold">
                  DOLPHY CAFÉ • CHỨNG NHẬN ĐẠI SỨ NỘI QUY
                </div>
                <h4 className="font-oswald text-xl font-bold tracking-wide">
                  {score >= 7 ? 'CHỨNG CHỈ VÀNG — ĐẠI SỨ TUÂN THỦ' : 'CHỨNG CHỈ BẠC — NHÂN SỰ CHUẨN MỰC'}
                </h4>
                <p className="text-xs text-blue-200">
                  Đã hoàn thành bài kiểm tra trực tuyến về Bộ Nội quy Lao động DOL-HR-001 (Phiên bản 1.0 Approved).
                </p>
                <div className="pt-3 border-t border-white/20 flex items-center justify-between text-[11px] text-blue-300">
                  <span>Hệ thống Dolphy Café</span>
                  <span className="font-mono text-[#FAEA28]">Năm 2026</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-3 pt-4">
                <button
                  onClick={handleRestart}
                  className="px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200 flex items-center space-x-2 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Làm Lại Quiz</span>
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
