import React from 'react';
import { 
  Sparkles, 
  Search, 
  BookOpen, 
  Scale, 
  Award, 
  CheckCircle, 
  ShieldCheck, 
  ArrowRight,
  Film,
  Play,
  Zap,
  Coffee,
  Heart
} from 'lucide-react';

interface HeroBannerProps {
  onOpenSearch: () => void;
  onExploreChapters: () => void;
  onExploreRoleHub: () => void;
  onExploreFlashcards: () => void;
  onWatchVideo: () => void;
  onStartQuiz: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  onOpenSearch,
  onExploreChapters,
  onExploreRoleHub,
  onExploreFlashcards,
  onWatchVideo,
  onStartQuiz,
}) => {
  return (
    <section id="overview" className="relative pt-24 sm:pt-28 pb-14 overflow-hidden">
      {/* Background Glows matching Dolphy brand colors */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#2076bd]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-[#FAEA28]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Hero Card */}
        <div className="relative rounded-3xl bg-gradient-to-br from-white via-blue-50/40 to-slate-50 dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 p-6 sm:p-10 lg:p-12 shadow-xl shadow-blue-900/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-100 dark:bg-blue-950/70 border border-blue-200 dark:border-blue-800 text-[#2076bd] dark:text-blue-300 text-xs font-bold tracking-wide">
                <Coffee className="w-3.5 h-3.5 text-[#2076bd]" />
                <span>CẨM NANG NỘI BỘ THÂN THIỆN • DOLPHY CAFÉ 2026</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FAEA28]" />
                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">DOL-HR-001 v1.0</span>
              </div>

              {/* Headline */}
              <h1 className="font-oswald text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                ĐI LÀM VUI VẺ — AN TÂM QUẨY BAR <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2076bd] via-[#165b94] to-cyan-600 dark:from-blue-400 dark:to-cyan-300">
                  HIỂU ĐÚNG QUYỀN LỢI CÙNG DOLPHY
                </span>
                <span className="text-[#FAEA28] ml-2">.</span>
              </h1>

              {/* Friendly Subtitle */}
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                Chào mừng bạn đến với <strong>Dolphy Compass</strong>! Thay vì một văn bản pháp lý 87 điều khô khan, đây là cẩm nang bỏ túi <strong>nhẹ nhàng, dễ hiểu và ấm áp</strong> để mọi thành viên (từ Barista mới vào nghề đến Cửa hàng trưởng và khối Văn phòng) đều nắm vững quyền lợi, yên tâm cống hiến và lan tỏa hạnh phúc mỗi ngày.
              </p>

              {/* 4 Metric Badges in 2x2 Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700/60 shadow-sm hover:border-[#2076bd] transition-all">
                  <div className="text-xl sm:text-2xl font-bold font-oswald text-emerald-600 dark:text-emerald-400">
                    0đ TIỀN PHẠT
                  </div>
                  <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                    Tuyệt đối không trừ lương thay kỷ luật
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700/60 shadow-sm hover:border-[#2076bd] transition-all">
                  <div className="text-xl sm:text-2xl font-bold font-oswald text-[#2076bd] dark:text-blue-400">
                    DỪNG VIỆC
                  </div>
                  <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                    Quyền dừng máy khi thấy rò điện nguy hiểm
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700/60 shadow-sm hover:border-[#2076bd] transition-all">
                  <div className="text-xl sm:text-2xl font-bold font-oswald text-purple-600 dark:text-purple-400">
                    2 KÊNH 24H
                  </div>
                  <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                    Tiếp nhận bảo mật chống quấy rối (DEC-020)
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700/60 shadow-sm hover:border-[#2076bd] transition-all">
                  <div className="text-xl sm:text-2xl font-bold font-oswald text-amber-600 dark:text-amber-400">
                    100% LƯƠNG
                  </div>
                  <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                    Bảo lưu 30 ngày đầu khi tạm chuyển chi nhánh
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={onExploreRoleHub}
                  className="px-5 py-3 rounded-2xl bg-[#2076bd] hover:bg-[#165b94] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg flex items-center space-x-2"
                >
                  <Coffee className="w-4 h-4 text-[#FAEA28]" />
                  <span>Chọn Vai Trò Của Bạn</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={onExploreFlashcards}
                  className="px-5 py-3 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center space-x-2"
                >
                  <Zap className="w-4 h-4" />
                  <span>Bí Kíp Bỏ Túi 3 Giây</span>
                </button>

                <button
                  onClick={onWatchVideo}
                  className="px-4 py-3 rounded-2xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-white border border-slate-300 dark:border-slate-600 font-bold text-xs uppercase tracking-wider transition-all shadow-sm flex items-center space-x-1.5"
                >
                  <Film className="w-4 h-4 text-[#2076bd]" />
                  <span>Xem Phim 13 Năm</span>
                </button>

                <button
                  onClick={onStartQuiz}
                  className="px-4 py-3 rounded-2xl bg-[#FAEA28] hover:bg-[#e6d620] text-slate-900 font-bold text-xs uppercase tracking-wider transition-all shadow-sm flex items-center space-x-1.5"
                >
                  <Award className="w-4 h-4" />
                  <span>Quiz Nhận Huy Hiệu</span>
                </button>
              </div>

              {/* Search prompt */}
              <div className="pt-2 flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400">
                <span className="font-semibold text-slate-700 dark:text-slate-300">Gợi ý tìm nhanh:</span>
                <div className="flex flex-wrap gap-1.5">
                  {['Đi trễ trời mưa', 'Vỡ bình pha', 'Làm thêm ca', 'Bảo vệ quầy bar', 'Kỷ luật sa thải'].map((kw) => (
                    <button
                      key={kw}
                      onClick={onOpenSearch}
                      className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-900/40 text-slate-600 dark:text-slate-400 hover:text-[#2076bd] transition-colors"
                    >
                      {kw}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side Visual & CEO quote (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              
              {/* Real Photo Thumbnail */}
              <div 
                onClick={onWatchVideo}
                className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-lg cursor-pointer group border border-slate-200 dark:border-slate-700"
              >
                <img
                  src="./images/hero-thao-dien-space.jpg"
                  alt="Không gian Dolphy Thảo Điền"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent p-4 flex flex-col justify-end text-white">
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="w-8 h-8 rounded-full bg-[#FAEA28] text-slate-950 flex items-center justify-center">
                      <Play className="w-4 h-4 fill-slate-950 ml-0.5" />
                    </div>
                    <span className="font-oswald text-xs font-bold uppercase tracking-wider text-[#FAEA28]">
                      Thước Phim 13 Năm Dolphy
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-200 line-clamp-1">
                    Bấm để xem câu chuyện Cá Heo Xanh Thảo Điền
                  </p>
                </div>
              </div>

              {/* Card CEO Message */}
              <div className="rounded-2xl p-4.5 bg-gradient-to-br from-[#2076bd] to-[#0f4370] text-white shadow-md space-y-2 relative overflow-hidden">
                <div className="flex items-center space-x-2.5">
                  <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-oswald font-bold text-sm text-[#FAEA28]">
                    PL
                  </div>
                  <div>
                    <h4 className="font-oswald font-bold text-sm leading-tight">Phạm Duy Linh — CEO</h4>
                    <span className="text-[10px] text-blue-200">Người phê duyệt dự thảo DOL-HR-001</span>
                  </div>
                </div>

                <blockquote className="text-xs text-blue-50 italic leading-relaxed pt-1">
                  "Nội quy không phải để trừng phạt, mà là tấm bản đồ bảo vệ sự tôn trọng, công bằng và phẩm giá của từng con người Dolphy."
                </blockquote>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
