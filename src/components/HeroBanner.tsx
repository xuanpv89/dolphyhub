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
  Clock,
  Coins,
  ChevronRight,
  HelpCircle,
  ExternalLink
} from 'lucide-react';

interface HeroBannerProps {
  onOpenSearch: () => void;
  onExploreChapters: () => void;
  onExploreRoleHub: () => void;
  onExploreFlashcards: () => void;
  onWatchVideo: () => void;
  onStartQuiz: () => void;
  onOpenArticleByNumber?: (num: number) => void;
  onSelectRole?: (roleId: 'barista' | 'cht' | 'qlcl' | 'dho' | 'newbie') => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  onOpenSearch,
  onExploreChapters,
  onExploreRoleHub,
  onExploreFlashcards,
  onWatchVideo,
  onStartQuiz,
  onOpenArticleByNumber,
  onSelectRole,
}) => {
  return (
    <section id="overview" className="relative pt-24 sm:pt-28 pb-10 overflow-hidden">
      {/* Background Soft Ambient Lights */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#2076bd]/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-[#FAEA28]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Hero Card with Glassmorphic Gradient */}
        <div className="relative rounded-3xl bg-gradient-to-br from-white via-blue-50/30 to-amber-50/20 dark:from-slate-900 dark:via-slate-900/95 dark:to-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 p-6 sm:p-8 lg:p-10 shadow-2xl shadow-blue-900/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column (7 cols) */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              
              {/* Badge Eyebrow */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-100/90 dark:bg-blue-950/80 border border-blue-200/80 dark:border-blue-800 text-[#2076bd] dark:text-blue-300 text-xs font-bold tracking-wide shadow-sm">
                <Coffee className="w-3.5 h-3.5 text-[#2076bd]" />
                <span>CẨM NANG NỘI BỘ THÂN THIỆN • DOLPHY CAFÉ 2026</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FAEA28]" />
                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">DOL-HR-001 v1.0</span>
              </div>

              {/* Main Headline - Bulletproof 2-Tier Balanced Typography */}
              <div className="space-y-1.5 sm:space-y-2">
                <h1 className="font-oswald text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.12] uppercase">
                  <span className="block">ĐI LÀM VUI VẺ —</span>
                  <span className="block text-[#2076bd] dark:text-blue-400">AN TÂM ĐỨNG QUẦY</span>
                </h1>
                <p className="font-oswald text-lg sm:text-2xl text-amber-500 dark:text-amber-400 font-bold uppercase tracking-wide">
                  HIỂU ĐÚNG QUYỀN LỢI • TRỌN VẸN YÊN TÂM
                </p>
              </div>

              {/* Friendly Subtitle */}
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Chào mừng bạn đến với <strong>Dolphy Compass</strong>! Thay vì văn bản pháp lý 87 điều khô khan, đây là cẩm nang bỏ túi <strong>nhẹ nhàng, dễ hiểu và ấm áp</strong> để mọi thành viên (từ Barista mới vào nghề đến CHT và khối Văn phòng) đều nắm vững quyền lợi, yên tâm cống hiến và lan tỏa hạnh phúc mỗi ngày.
              </p>

              {/* 4 Super Metric Badges - Spacious 2x2 Interactive Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {/* 1. 0đ Phạt */}
                <button
                  type="button"
                  onClick={() => onOpenArticleByNumber?.(67)}
                  className="text-left p-4 rounded-2xl bg-gradient-to-br from-emerald-50/70 via-white to-emerald-50/30 dark:from-emerald-950/40 dark:via-slate-800 dark:to-slate-800/90 border border-emerald-200/90 dark:border-emerald-800/70 shadow-sm flex items-start space-x-3.5 group hover:border-emerald-400 hover:shadow-md transition-all cursor-pointer min-h-[105px]"
                  title="Nhấn để xem Điều 67: Cấm trừ tiền lương"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-300 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Ban className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-oswald text-base font-bold text-emerald-700 dark:text-emerald-400 leading-tight">
                        0đ PHẠT TIỀN
                      </span>
                      <span className="text-[10px] text-emerald-700 dark:text-emerald-300 bg-emerald-100/80 dark:bg-emerald-950 px-2 py-0.5 rounded-full font-mono font-semibold">
                        Điều 67
                      </span>
                    </div>
                    <span className="text-xs text-slate-600 dark:text-slate-300 block mt-1 leading-snug">
                      Tuyệt đối không trừ lương hay phạt tiền thay kỷ luật
                    </span>
                  </div>
                </button>

                {/* 2. Dừng việc */}
                <button
                  type="button"
                  onClick={() => onOpenArticleByNumber?.(58)}
                  className="text-left p-4 rounded-2xl bg-gradient-to-br from-blue-50/70 via-white to-blue-50/30 dark:from-blue-950/40 dark:via-slate-800 dark:to-slate-800/90 border border-blue-200/90 dark:border-blue-800/70 shadow-sm flex items-start space-x-3.5 group hover:border-[#2076bd] hover:shadow-md transition-all cursor-pointer min-h-[105px]"
                  title="Nhấn để xem Điều 58: Quyền từ chối làm việc khi nguy hiểm"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/60 text-[#2076bd] dark:text-blue-300 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-oswald text-base font-bold text-[#2076bd] dark:text-blue-400 leading-tight">
                        QUYỀN DỪNG VIỆC
                      </span>
                      <span className="text-[10px] text-blue-700 dark:text-blue-300 bg-blue-100/80 dark:bg-blue-950 px-2 py-0.5 rounded-full font-mono font-semibold">
                        Điều 58
                      </span>
                    </div>
                    <span className="text-xs text-slate-600 dark:text-slate-300 block mt-1 leading-snug">
                      Được ngắt máy khi rò điện; tính mạng luôn là số 1
                    </span>
                  </div>
                </button>

                {/* 3. 2 Kênh bảo vệ */}
                <button
                  type="button"
                  onClick={() => onOpenArticleByNumber?.(82)}
                  className="text-left p-4 rounded-2xl bg-gradient-to-br from-purple-50/70 via-white to-purple-50/30 dark:from-purple-950/40 dark:via-slate-800 dark:to-slate-800/90 border border-purple-200/90 dark:border-purple-800/70 shadow-sm flex items-start space-x-3.5 group hover:border-purple-400 hover:shadow-md transition-all cursor-pointer min-h-[105px]"
                  title="Nhấn để xem quy định 2 kênh tiếp nhận bảo mật"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/60 text-purple-600 dark:text-purple-300 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-oswald text-base font-bold text-purple-700 dark:text-purple-400 leading-tight">
                        2 KÊNH BẢO VỆ 24H
                      </span>
                      <span className="text-[10px] text-purple-700 dark:text-purple-300 bg-purple-100/80 dark:bg-purple-950 px-2 py-0.5 rounded-full font-mono font-semibold">
                        DEC-020
                      </span>
                    </div>
                    <span className="text-xs text-slate-600 dark:text-slate-300 block mt-1 leading-snug">
                      Tiếp nhận bảo mật, chống quấy rối & cấm trả đũa
                    </span>
                  </div>
                </button>

                {/* 4. 100% Lương */}
                <button
                  type="button"
                  onClick={() => onOpenArticleByNumber?.(29)}
                  className="text-left p-4 rounded-2xl bg-gradient-to-br from-amber-50/70 via-white to-amber-50/30 dark:from-amber-950/40 dark:via-slate-800 dark:to-slate-800/90 border border-amber-200/90 dark:border-amber-800/70 shadow-sm flex items-start space-x-3.5 group hover:border-amber-400 hover:shadow-md transition-all cursor-pointer min-h-[105px]"
                  title="Nhấn để xem Điều 29: Bảo lưu tiền lương khi chuyển việc"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/60 text-amber-600 dark:text-amber-300 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Coins className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-oswald text-base font-bold text-amber-700 dark:text-amber-400 leading-tight">
                        BẢO LƯU 100% LƯƠNG
                      </span>
                      <span className="text-[10px] text-amber-700 dark:text-amber-300 bg-amber-100/80 dark:bg-amber-950 px-2 py-0.5 rounded-full font-mono font-semibold">
                        Điều 29
                      </span>
                    </div>
                    <span className="text-xs text-slate-600 dark:text-slate-300 block mt-1 leading-snug">
                      Giữ nguyên mức lương 30 ngày khi tạm điều chuyển ca
                    </span>
                  </div>
                </button>
              </div>

              {/* Quick Role Fast Tracks directly on Hero */}
              <div className="pt-2">
                <div className="flex items-center space-x-1.5 text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Khám phá nhanh cẩm nang theo vị trí của bạn:</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  <button
                    onClick={() => onSelectRole ? onSelectRole('barista') : onExploreRoleHub()}
                    className="p-2.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700 hover:border-[#2076bd] hover:bg-blue-50/50 dark:hover:bg-blue-950/40 text-left transition-all group shadow-sm cursor-pointer"
                  >
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">☕</span>
                      <div className="min-w-0">
                        <span className="font-oswald font-bold text-xs text-slate-900 dark:text-white uppercase block truncate group-hover:text-[#2076bd] transition-colors">Barista</span>
                        <span className="text-[10px] text-slate-400 block truncate">Quầy & Thu ngân</span>
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => onSelectRole ? onSelectRole('cht') : onExploreRoleHub()}
                    className="p-2.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700 hover:border-amber-400 hover:bg-amber-50/50 dark:hover:bg-amber-950/40 text-left transition-all group shadow-sm cursor-pointer"
                  >
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">👔</span>
                      <div className="min-w-0">
                        <span className="font-oswald font-bold text-xs text-slate-900 dark:text-white uppercase block truncate group-hover:text-amber-600 transition-colors">CHT</span>
                        <span className="text-[10px] text-slate-400 block truncate">Cửa Hàng Trưởng</span>
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => onSelectRole ? onSelectRole('qlcl') : onExploreRoleHub()}
                    className="p-2.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700 hover:border-emerald-400 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/40 text-left transition-all group shadow-sm cursor-pointer"
                  >
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">📋</span>
                      <div className="min-w-0">
                        <span className="font-oswald font-bold text-xs text-slate-900 dark:text-white uppercase block truncate group-hover:text-emerald-600 transition-colors">QLCL (QC)</span>
                        <span className="text-[10px] text-slate-400 block truncate">Chuẩn 5S & VSAT</span>
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => onSelectRole ? onSelectRole('dho') : onExploreRoleHub()}
                    className="p-2.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700 hover:border-purple-400 hover:bg-purple-50/50 dark:hover:bg-purple-950/40 text-left transition-all group shadow-sm cursor-pointer"
                  >
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">🏢</span>
                      <div className="min-w-0">
                        <span className="font-oswald font-bold text-xs text-slate-900 dark:text-white uppercase block truncate group-hover:text-purple-600 transition-colors">Khối DHO</span>
                        <span className="text-[10px] text-slate-400 block truncate">Văn phòng hỗ trợ</span>
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => onSelectRole ? onSelectRole('newbie') : onExploreRoleHub()}
                    className="p-2.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700 hover:border-teal-400 hover:bg-teal-50/50 dark:hover:bg-teal-950/40 text-left transition-all group shadow-sm cursor-pointer col-span-2 sm:col-span-1"
                  >
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">🌱</span>
                      <div className="min-w-0">
                        <span className="font-oswald font-bold text-xs text-slate-900 dark:text-white uppercase block truncate group-hover:text-teal-600 transition-colors">Newbie</span>
                        <span className="text-[10px] text-slate-400 block truncate">Thử việc 6 ngày</span>
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Action Buttons Tier 1 & Tier 2 */}
              <div className="space-y-3 pt-2">
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={onExploreRoleHub}
                    className="px-5 py-3 rounded-2xl bg-[#2076bd] hover:bg-[#165b94] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg flex items-center space-x-2 group cursor-pointer"
                  >
                    <Coffee className="w-4 h-4 text-[#FAEA28] group-hover:rotate-12 transition-transform" />
                    <span>Chọn Vai Trò Của Bạn</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={onExploreFlashcards}
                    className="px-5 py-3 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center space-x-2 cursor-pointer"
                  >
                    <Zap className="w-4 h-4" />
                    <span>Bí Kíp Bỏ Túi 3 Giây</span>
                  </button>
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
                  <span className="text-slate-400 font-medium">Khám phá nhanh:</span>
                  <button
                    onClick={onWatchVideo}
                    className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-semibold flex items-center space-x-1.5 transition-colors cursor-pointer"
                  >
                    <Film className="w-3.5 h-3.5 text-[#2076bd]" />
                    <span>Thước Phim 13 Năm</span>
                  </button>

                  <button
                    onClick={onStartQuiz}
                    className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-semibold flex items-center space-x-1.5 transition-colors cursor-pointer"
                  >
                    <Award className="w-3.5 h-3.5 text-amber-500" />
                    <span>Thử Thách Quiz</span>
                  </button>

                  <button
                    onClick={onExploreChapters}
                    className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-semibold flex items-center space-x-1.5 transition-colors cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Đọc 11 Chương</span>
                  </button>
                </div>
              </div>

              {/* Quick Search Chips */}
              <div className="pt-1 flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400">
                <span className="font-semibold text-slate-700 dark:text-slate-300">Gợi ý tìm nhanh:</span>
                <div className="flex flex-wrap gap-1.5">
                  {['Trời mưa đi trễ', 'Vỡ bình pha', 'Làm thêm ca', 'Bảo vệ quầy bar', 'Kỷ luật sa thải'].map((kw) => (
                    <button
                      key={kw}
                      onClick={onOpenSearch}
                      className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-900/40 text-slate-600 dark:text-slate-400 hover:text-[#2076bd] transition-colors font-medium cursor-pointer"
                    >
                      {kw}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column (5 cols) — Unified Showcase Card */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden bg-white dark:bg-slate-800 border-2 border-slate-200/90 dark:border-slate-700 shadow-xl space-y-0">
                
                {/* 1. Cinematic Video Frame */}
                <div 
                  onClick={onWatchVideo}
                  className="relative aspect-[16/10] overflow-hidden cursor-pointer group bg-black"
                >
                  <img
                    src="./images/hero-thao-dien-space.jpg"
                    alt="Không gian Dolphy Thảo Điền"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent p-4 sm:p-5 flex flex-col justify-between text-white">
                    
                    {/* Top Tag & Duration */}
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-full bg-[#FAEA28] text-slate-950 text-[10px] font-bold font-oswald uppercase tracking-wider shadow">
                        THƯỚC PHIM ĐỘC QUYỀN
                      </span>
                      <span className="px-2 py-0.5 rounded bg-black/60 text-[10px] text-white backdrop-blur-sm font-mono">
                        01:30
                      </span>
                    </div>

                    {/* Play Button & Title */}
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-full bg-[#FAEA28] text-slate-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform flex-shrink-0">
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

                {/* 2. Seamless CEO Endorsement Box */}
                <div className="p-5 bg-gradient-to-br from-[#2076bd] via-[#165b94] to-[#0f3d66] text-white space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-oswald font-bold text-base text-[#FAEA28] shadow-inner ring-2 ring-white/30 flex-shrink-0">
                      PL
                    </div>
                    <div>
                      <h4 className="font-oswald font-bold text-sm sm:text-base leading-tight">Phạm Duy Linh — CEO</h4>
                      <span className="text-[11px] text-blue-200">Người phê duyệt dự thảo DOL-HR-001</span>
                    </div>
                  </div>

                  <blockquote className="text-xs text-blue-50 italic leading-relaxed pl-3 border-l-2 border-[#FAEA28]">
                    "Nội quy không phải là chiếc roi trừng phạt, mà là tấm bản đồ bảo vệ sự tôn trọng, công bằng và phẩm giá của từng con người Dolphy."
                  </blockquote>

                  <div className="flex items-center justify-between text-[11px] text-blue-200 pt-2 border-t border-white/15">
                    <span>Phiên bản 1.0 Complete Draft</span>
                    <span className="text-[#FAEA28] font-bold">14/08/2026</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Floating Quick Stats Ribbon */}
        <div className="mt-5 max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 px-2">
          <div className="flex items-center justify-center space-x-2 py-2 px-3 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/80 dark:border-slate-700/80 shadow-sm text-xs font-semibold text-slate-700 dark:text-slate-300">
            <BookOpen className="w-3.5 h-3.5 text-[#2076bd]" />
            <span>11 Chương Chi Tiết</span>
          </div>

          <div className="flex items-center justify-center space-x-2 py-2 px-3 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/80 dark:border-slate-700/80 shadow-sm text-xs font-semibold text-slate-700 dark:text-slate-300">
            <Scale className="w-3.5 h-3.5 text-blue-600" />
            <span>87 Điều Luật Rõ Ràng</span>
          </div>

          <div className="flex items-center justify-center space-x-2 py-2 px-3 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/80 dark:border-slate-700/80 shadow-sm text-xs font-semibold text-slate-700 dark:text-slate-300">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>28 Lỗi Phụ Lục A</span>
          </div>

          <div className="flex items-center justify-center space-x-2 py-2 px-3 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/80 dark:border-slate-700/80 shadow-sm text-xs font-semibold text-slate-700 dark:text-slate-300">
            <Heart className="w-3.5 h-3.5 text-rose-500" />
            <span>100% Bảo Vệ Bạn</span>
          </div>
        </div>

      </div>
    </section>
  );
};
