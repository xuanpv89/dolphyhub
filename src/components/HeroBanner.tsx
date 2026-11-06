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
    <section id="overview" className="relative pt-16 sm:pt-20 pb-6 overflow-hidden">
      {/* Background Soft Ambient Lights */}
      <div className="absolute top-1/4 -left-48 w-80 h-80 bg-[#2076bd]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-48 w-80 h-80 bg-[#FAEA28]/12 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Hero Card with Compact Padding */}
        <div className="relative rounded-3xl bg-gradient-to-br from-white via-blue-50/25 to-amber-50/15 dark:from-slate-900 dark:via-slate-900/95 dark:to-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 p-5 sm:p-6 lg:p-7 shadow-xl shadow-blue-900/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Left Column (7 cols) - Compact & Tightly Spaced */}
            <div className="lg:col-span-7 space-y-3.5 sm:space-y-4">
              
              {/* Badge Eyebrow & Title Group */}
              <div className="space-y-1.5">
                <div className="inline-flex items-center space-x-2 px-2.5 py-0.5 rounded-full bg-blue-100/80 dark:bg-blue-950/80 border border-blue-200/70 dark:border-blue-800 text-[#2076bd] dark:text-blue-300 text-[11px] font-bold tracking-wide">
                  <Coffee className="w-3 h-3 text-[#2076bd]" />
                  <span>CẨM NANG NỘI BỘ • DOLPHY CAFÉ 2026</span>
                  <span className="w-1 h-1 rounded-full bg-[#FAEA28]" />
                  <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">DOL-HR-001 v1.0</span>
                </div>

                <div className="space-y-0.5">
                  <h1 className="font-oswald text-2xl sm:text-3xl lg:text-[32px] font-black tracking-tight text-slate-900 dark:text-white leading-tight uppercase">
                    ĐI LÀM VUI VẺ — <span className="text-[#2076bd] dark:text-blue-400">AN TÂM ĐỨNG QUẦY</span>
                  </h1>
                  <p className="font-oswald text-xs sm:text-sm text-amber-500 dark:text-amber-400 font-bold uppercase tracking-wider">
                    HIỂU ĐÚNG QUYỀN LỢI • TRỌN VẸN YÊN TÂM
                  </p>
                </div>

                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-[13px] leading-relaxed line-clamp-2">
                  Chào mừng bạn đến với <strong>Dolphy Compass</strong>! Cẩm nang bỏ túi thân thiện giúp mọi thành viên (từ Barista đến CHT và DHO) nắm vững 87 điều quyền lợi, an toàn quầy bar và yên tâm lan tỏa hạnh phúc.
                </p>
              </div>

              {/* 4 Super Metric Badges - Compact 2x2 Interactive Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {/* 1. 0đ Phạt */}
                <button
                  type="button"
                  onClick={() => onOpenArticleByNumber?.(67)}
                  className="text-left p-2.5 rounded-xl bg-gradient-to-br from-emerald-50/70 via-white to-emerald-50/30 dark:from-emerald-950/40 dark:via-slate-800 dark:to-slate-800/90 border border-emerald-200/80 dark:border-emerald-800/60 shadow-2xs flex items-center space-x-2.5 group hover:border-emerald-400 transition-all cursor-pointer h-[66px]"
                  title="Nhấn để xem Điều 67: Cấm trừ tiền lương"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-300 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Ban className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-oswald text-xs sm:text-sm font-bold text-emerald-700 dark:text-emerald-400 leading-none">
                        0đ PHẠT TIỀN
                      </span>
                      <span className="text-[9px] text-emerald-700 dark:text-emerald-300 bg-emerald-100/80 dark:bg-emerald-950 px-1.5 py-0.2 rounded font-mono font-bold">
                        Đ.67
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-0.5 leading-tight truncate">
                      Cấm trừ lương hay phạt tiền thay kỷ luật
                    </span>
                  </div>
                </button>

                {/* 2. Dừng việc */}
                <button
                  type="button"
                  onClick={() => onOpenArticleByNumber?.(58)}
                  className="text-left p-2.5 rounded-xl bg-gradient-to-br from-blue-50/70 via-white to-blue-50/30 dark:from-blue-950/40 dark:via-slate-800 dark:to-slate-800/90 border border-blue-200/80 dark:border-blue-800/60 shadow-2xs flex items-center space-x-2.5 group hover:border-[#2076bd] transition-all cursor-pointer h-[66px]"
                  title="Nhấn để xem Điều 58: Quyền từ chối làm việc khi nguy hiểm"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/60 text-[#2076bd] dark:text-blue-300 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-oswald text-xs sm:text-sm font-bold text-[#2076bd] dark:text-blue-400 leading-none">
                        QUYỀN DỪNG VIỆC
                      </span>
                      <span className="text-[9px] text-blue-700 dark:text-blue-300 bg-blue-100/80 dark:bg-blue-950 px-1.5 py-0.2 rounded font-mono font-bold">
                        Đ.58
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-0.5 leading-tight truncate">
                      Được ngắt máy khi rò điện; an toàn là số 1
                    </span>
                  </div>
                </button>

                {/* 3. 2 Kênh bảo vệ */}
                <button
                  type="button"
                  onClick={() => onOpenArticleByNumber?.(82)}
                  className="text-left p-2.5 rounded-xl bg-gradient-to-br from-purple-50/70 via-white to-purple-50/30 dark:from-purple-950/40 dark:via-slate-800 dark:to-slate-800/90 border border-purple-200/80 dark:border-purple-800/60 shadow-2xs flex items-center space-x-2.5 group hover:border-purple-400 transition-all cursor-pointer h-[66px]"
                  title="Nhấn để xem quy định 2 kênh tiếp nhận bảo mật"
                >
                  <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/60 text-purple-600 dark:text-purple-300 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-oswald text-xs sm:text-sm font-bold text-purple-700 dark:text-purple-400 leading-none">
                        2 KÊNH BẢO VỆ 24H
                      </span>
                      <span className="text-[9px] text-purple-700 dark:text-purple-300 bg-purple-100/80 dark:bg-purple-950 px-1.5 py-0.2 rounded font-mono font-bold">
                        DEC-020
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-0.5 leading-tight truncate">
                      Tiếp nhận bảo mật, cấm trả đũa 100%
                    </span>
                  </div>
                </button>

                {/* 4. 100% Lương */}
                <button
                  type="button"
                  onClick={() => onOpenArticleByNumber?.(29)}
                  className="text-left p-2.5 rounded-xl bg-gradient-to-br from-amber-50/70 via-white to-amber-50/30 dark:from-amber-950/40 dark:via-slate-800 dark:to-slate-800/90 border border-amber-200/80 dark:border-amber-800/60 shadow-2xs flex items-center space-x-2.5 group hover:border-amber-400 transition-all cursor-pointer h-[66px]"
                  title="Nhấn để xem Điều 29: Bảo lưu tiền lương khi chuyển việc"
                >
                  <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/60 text-amber-600 dark:text-amber-300 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Coins className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-oswald text-xs sm:text-sm font-bold text-amber-700 dark:text-amber-400 leading-none">
                        BẢO LƯU 100% LƯƠNG
                      </span>
                      <span className="text-[9px] text-amber-700 dark:text-amber-300 bg-amber-100/80 dark:bg-amber-950 px-1.5 py-0.2 rounded font-mono font-bold">
                        Đ.29
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-0.5 leading-tight truncate">
                      Giữ nguyên lương 30 ngày khi chuyển việc
                    </span>
                  </div>
                </button>
              </div>

              {/* Quick Role Fast Tracks - Compact Single Row */}
              <div className="pt-0.5">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider flex items-center space-x-1">
                    <Sparkles className="w-3 h-3 text-amber-500" />
                    <span>Xem nhanh theo vị trí của bạn:</span>
                  </span>
                </div>
                <div className="grid grid-cols-5 gap-1.5">
                  <button
                    onClick={() => onSelectRole ? onSelectRole('barista') : onExploreRoleHub()}
                    className="p-1.5 sm:p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 hover:border-[#2076bd] hover:bg-blue-50/50 dark:hover:bg-blue-950/40 text-center transition-all group shadow-2xs cursor-pointer"
                  >
                    <span className="text-base block">☕</span>
                    <span className="font-oswald font-bold text-[11px] text-slate-800 dark:text-white uppercase block truncate group-hover:text-[#2076bd]">Barista</span>
                  </button>

                  <button
                    onClick={() => onSelectRole ? onSelectRole('cht') : onExploreRoleHub()}
                    className="p-1.5 sm:p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 hover:border-amber-400 hover:bg-amber-50/50 dark:hover:bg-amber-950/40 text-center transition-all group shadow-2xs cursor-pointer"
                  >
                    <span className="text-base block">👔</span>
                    <span className="font-oswald font-bold text-[11px] text-slate-800 dark:text-white uppercase block truncate group-hover:text-amber-600">CHT</span>
                  </button>

                  <button
                    onClick={() => onSelectRole ? onSelectRole('qlcl') : onExploreRoleHub()}
                    className="p-1.5 sm:p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 hover:border-emerald-400 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/40 text-center transition-all group shadow-2xs cursor-pointer"
                  >
                    <span className="text-base block">📋</span>
                    <span className="font-oswald font-bold text-[11px] text-slate-800 dark:text-white uppercase block truncate group-hover:text-emerald-600">QLCL</span>
                  </button>

                  <button
                    onClick={() => onSelectRole ? onSelectRole('dho') : onExploreRoleHub()}
                    className="p-1.5 sm:p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 hover:border-purple-400 hover:bg-purple-50/50 dark:hover:bg-purple-950/40 text-center transition-all group shadow-2xs cursor-pointer"
                  >
                    <span className="text-base block">🏢</span>
                    <span className="font-oswald font-bold text-[11px] text-slate-800 dark:text-white uppercase block truncate group-hover:text-purple-600">DHO</span>
                  </button>

                  <button
                    onClick={() => onSelectRole ? onSelectRole('newbie') : onExploreRoleHub()}
                    className="p-1.5 sm:p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 hover:border-teal-400 hover:bg-teal-50/50 dark:hover:bg-teal-950/40 text-center transition-all group shadow-2xs cursor-pointer"
                  >
                    <span className="text-base block">🌱</span>
                    <span className="font-oswald font-bold text-[11px] text-slate-800 dark:text-white uppercase block truncate group-hover:text-teal-600">Newbie</span>
                  </button>
                </div>
              </div>

              {/* Action Buttons - Single Compact Row */}
              <div className="pt-1 flex flex-wrap items-center gap-2">
                <button
                  onClick={onExploreFlashcards}
                  className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm flex items-center space-x-1.5 cursor-pointer"
                >
                  <Zap className="w-3.5 h-3.5" />
                  <span>Bí Kíp 3 Giây</span>
                </button>

                <button
                  onClick={onWatchVideo}
                  className="px-3 py-2 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-semibold text-xs flex items-center space-x-1.5 transition-colors cursor-pointer"
                >
                  <Film className="w-3.5 h-3.5 text-[#2076bd]" />
                  <span>Xem Phim 13 Năm</span>
                </button>

                <button
                  onClick={onStartQuiz}
                  className="px-3 py-2 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-semibold text-xs flex items-center space-x-1.5 transition-colors cursor-pointer"
                >
                  <Award className="w-3.5 h-3.5 text-amber-500" />
                  <span>Đố Vui Quiz</span>
                </button>

                <button
                  onClick={onExploreChapters}
                  className="px-3 py-2 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-semibold text-xs flex items-center space-x-1.5 transition-colors cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
                  <span>11 Chương</span>
                </button>
              </div>

            </div>

            {/* Right Column (5 cols) — Proportional & Unified Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700 shadow-lg space-y-0">
                
                {/* 1. Cinematic Video Frame */}
                <div 
                  onClick={onWatchVideo}
                  className="relative aspect-[16/10] overflow-hidden cursor-pointer group bg-black"
                >
                  <img
                    src="./images/hero-thao-dien-space.jpg"
                    alt="Không gian Dolphy Thảo Điền"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent p-3.5 sm:p-4 flex flex-col justify-between text-white">
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded-full bg-[#FAEA28] text-slate-950 text-[9px] font-bold font-oswald uppercase tracking-wider shadow">
                        THƯỚC PHIM ĐỘC QUYỀN
                      </span>
                      <span className="px-1.5 py-0.2 rounded bg-black/60 text-[9px] text-white backdrop-blur-xs font-mono">
                        01:30
                      </span>
                    </div>

                    <div className="flex items-center space-x-2.5">
                      <div className="w-9 h-9 rounded-full bg-[#FAEA28] text-slate-950 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform flex-shrink-0">
                        <Play className="w-4 h-4 fill-slate-950 ml-0.5" />
                      </div>
                      <div>
                        <h4 className="font-oswald text-sm sm:text-base font-bold leading-tight text-white group-hover:text-[#FAEA28] transition-colors">
                          Dolphy's Story — Thước Phim 13 Năm
                        </h4>
                        <p className="text-[10px] text-blue-200 line-clamp-1">
                          Văn hóa hạnh phúc từ hạt cà phê mộc Thảo Điền
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Seamless CEO Endorsement Box */}
                <div className="p-3.5 sm:p-4 bg-gradient-to-br from-[#2076bd] via-[#165b94] to-[#0f3d66] text-white space-y-2">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-oswald font-bold text-xs text-[#FAEA28] shadow-inner ring-1 ring-white/30 flex-shrink-0">
                      PL
                    </div>
                    <div>
                      <h4 className="font-oswald font-bold text-xs sm:text-sm leading-tight">Phạm Duy Linh — CEO</h4>
                      <span className="text-[10px] text-blue-200">Người phê duyệt dự thảo DOL-HR-001</span>
                    </div>
                  </div>

                  <blockquote className="text-[11px] text-blue-50 italic leading-relaxed pl-2.5 border-l-2 border-[#FAEA28]">
                    "Nội quy không phải là chiếc roi trừng phạt, mà là tấm bản đồ bảo vệ sự tôn trọng, công bằng và phẩm giá của từng con người Dolphy."
                  </blockquote>

                  <div className="flex items-center justify-between text-[10px] text-blue-200 pt-1.5 border-t border-white/15">
                    <span>Phiên bản 1.0 Complete Draft</span>
                    <span className="text-[#FAEA28] font-bold">14/08/2026</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Integrated 1-Line Subtle Stats Strip */}
          <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-700/60 flex flex-wrap items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-medium">
            <span className="flex items-center space-x-1.5">
              <BookOpen className="w-3.5 h-3.5 text-[#2076bd]" />
              <span>11 Chương Cẩm Nang Toàn Diện</span>
            </span>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-600">•</span>
            <span className="flex items-center space-x-1.5">
              <Scale className="w-3.5 h-3.5 text-blue-600" />
              <span>87 Điều Luật Bảo Vệ Bạn</span>
            </span>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-600">•</span>
            <span className="flex items-center space-x-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>28 Tình Huống Phụ Lục A Rõ Ràng</span>
            </span>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-600">•</span>
            <span className="flex items-center space-x-1.5">
              <Heart className="w-3.5 h-3.5 text-rose-500" />
              <span>100% Không Phạt Tiền Trừ Lương</span>
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
