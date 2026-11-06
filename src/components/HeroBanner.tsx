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
  Heart,
  Ban,
  AlertTriangle,
  Clock,
  Coins
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
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#2076bd]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-[#FAEA28]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Hero Card with Glassmorphic Gradient */}
        <div className="relative rounded-3xl bg-gradient-to-br from-white via-blue-50/30 to-amber-50/20 dark:from-slate-900 dark:via-slate-900/95 dark:to-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 p-6 sm:p-10 lg:p-12 shadow-2xl shadow-blue-900/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-100/90 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800 text-[#2076bd] dark:text-blue-300 text-xs font-bold tracking-wide shadow-sm">
                <Coffee className="w-4 h-4 text-[#2076bd]" />
                <span>CẨM NANG NỘI BỘ THÂN THIỆN • DOLPHY CAFÉ 2026</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FAEA28]" />
                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">DOL-HR-001 v1.0</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-oswald text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.18]">
                ĐI LÀM VUI VẺ — AN TÂM ĐỨNG QUẦY <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2076bd] via-[#165b94] to-cyan-600 dark:from-blue-400 dark:to-cyan-300">
                  HIỂU ĐÚNG QUYỀN LỢI CÙNG DOLPHY
                </span>
                <span className="text-[#FAEA28] ml-1">.</span>
              </h1>

              {/* Subtitle */}
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Chào mừng bạn đến với <strong>Dolphy Compass</strong>! Thay vì một văn bản pháp lý 87 điều khô khan, đây là cẩm nang bỏ túi <strong>nhẹ nhàng, dễ hiểu và ấm áp</strong> để mọi thành viên (từ Barista mới vào nghề đến CHT và khối Văn phòng) đều nắm vững quyền lợi, yên tâm cống hiến và lan tỏa hạnh phúc mỗi ngày.
              </p>

              {/* 4 Super Metric Badges with Colorful Visual Icons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-800/90 border border-emerald-200/80 dark:border-emerald-900/60 shadow-sm hover:shadow-md transition-all group">
                  <div className="flex items-center space-x-2 text-emerald-600 dark:text-emerald-400">
                    <Ban className="w-5 h-5 flex-shrink-0" />
                    <span className="text-lg sm:text-xl font-bold font-oswald tracking-tight">0đ PHẠT</span>
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 font-medium leading-tight">
                    Tuyệt đối không trừ lương thay kỷ luật
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-800/90 border border-blue-200/80 dark:border-blue-900/60 shadow-sm hover:shadow-md transition-all group">
                  <div className="flex items-center space-x-2 text-[#2076bd] dark:text-blue-400">
                    <Zap className="w-5 h-5 flex-shrink-0" />
                    <span className="text-lg sm:text-xl font-bold font-oswald tracking-tight">DỪNG VIỆC</span>
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 font-medium leading-tight">
                    Quyền dừng máy khi thấy rò điện nguy hiểm
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-800/90 border border-purple-200/80 dark:border-purple-900/60 shadow-sm hover:shadow-md transition-all group">
                  <div className="flex items-center space-x-2 text-purple-600 dark:text-purple-400">
                    <ShieldCheck className="w-5 h-5 flex-shrink-0" />
                    <span className="text-lg sm:text-xl font-bold font-oswald tracking-tight">2 KÊNH 24H</span>
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 font-medium leading-tight">
                    Tiếp nhận bảo mật chống quấy rối (DEC-020)
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-800/90 border border-amber-200/80 dark:border-amber-900/60 shadow-sm hover:shadow-md transition-all group">
                  <div className="flex items-center space-x-2 text-amber-600 dark:text-amber-400">
                    <Coins className="w-5 h-5 flex-shrink-0" />
                    <span className="text-lg sm:text-xl font-bold font-oswald tracking-tight">100% LƯƠNG</span>
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 font-medium leading-tight">
                    Bảo lưu 30 ngày đầu khi tạm chuyển việc
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={onExploreRoleHub}
                  className="px-5 py-3 rounded-2xl bg-[#2076bd] hover:bg-[#165b94] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg flex items-center space-x-2 group"
                >
                  <Coffee className="w-4 h-4 text-[#FAEA28] group-hover:rotate-12 transition-transform" />
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

              {/* Quick Prompt Chips */}
              <div className="pt-2 flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400">
                <span className="font-semibold text-slate-700 dark:text-slate-300">Gợi ý tìm nhanh:</span>
                <div className="flex flex-wrap gap-1.5">
                  {['Đi trễ trời mưa', 'Vỡ bình pha', 'Làm thêm ca', 'Bảo vệ quầy bar', 'Kỷ luật sa thải'].map((kw) => (
                    <button
                      key={kw}
                      onClick={onOpenSearch}
                      className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-900/40 text-slate-600 dark:text-slate-400 hover:text-[#2076bd] transition-colors font-medium"
                    >
                      {kw}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side Visual & CEO Quote (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Featured Video Card with Live Preview */}
              <div 
                onClick={onWatchVideo}
                className="relative rounded-3xl overflow-hidden aspect-[16/10] shadow-xl cursor-pointer group border-2 border-slate-200/90 dark:border-slate-700/80"
              >
                <img
                  src="./images/hero-thao-dien-space.jpg"
                  alt="Không gian Dolphy Thảo Điền"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent p-5 flex flex-col justify-between text-white">
                  
                  {/* Top Badge */}
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-[#FAEA28] text-slate-950 text-[10px] font-bold font-oswald uppercase tracking-wider shadow">
                      VIDEO NỔI BẬT
                    </span>
                    <span className="px-2 py-0.5 rounded bg-black/50 text-[10px] text-white backdrop-blur-sm">
                      01:30
                    </span>
                  </div>

                  {/* Play Button & Title */}
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-full bg-[#FAEA28] text-slate-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 fill-slate-950 ml-0.5" />
                      </div>
                      <div>
                        <h4 className="font-oswald text-base sm:text-lg font-bold leading-tight text-white group-hover:text-[#FAEA28] transition-colors">
                          Dolphy's Story — Thước Phim 13 Năm
                        </h4>
                        <p className="text-[11px] text-blue-200 line-clamp-1">
                          Văn hóa hạnh phúc từ hạt cà phê mộc Thảo Điền
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* CEO Message Card with Warm Gradient */}
              <div className="rounded-3xl p-5 bg-gradient-to-br from-[#2076bd] via-[#165b94] to-[#0f3d66] text-white shadow-lg space-y-3 relative overflow-hidden border border-blue-400/30">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-oswald font-bold text-base text-[#FAEA28] shadow-inner ring-2 ring-white/30">
                    PL
                  </div>
                  <div>
                    <h4 className="font-oswald font-bold text-base leading-tight">Phạm Duy Linh — CEO</h4>
                    <span className="text-[11px] text-blue-200">Người phê duyệt dự thảo DOL-HR-001</span>
                  </div>
                </div>

                <blockquote className="text-xs text-blue-50 italic leading-relaxed pt-1 pl-2 border-l-2 border-[#FAEA28]">
                  "Nội quy không phải là chiếc roi trừng phạt, mà là tấm bản đồ bảo vệ sự tôn trọng, công bằng và phẩm giá của từng con người Dolphy."
                </blockquote>

                <div className="flex items-center justify-between text-[11px] text-blue-200 pt-1 border-t border-white/15">
                  <span>Phiên bản 1.0 Complete Draft</span>
                  <span className="text-[#FAEA28] font-bold">14/08/2026</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
