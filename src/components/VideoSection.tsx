import React, { useState } from 'react';
import { Play, Film, Sparkles, CheckCircle2, Eye, X, Volume2, Image as ImageIcon } from 'lucide-react';

export const VideoSection: React.FC = () => {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [activePhoto, setActivePhoto] = useState<string | null>(null);

  const galleryImages = [
    { src: './images/28-thao-dien-1.webp', title: 'Dolphy 28 Thảo Điền', caption: 'Không gian mở ngập tràn ánh sáng & cây xanh' },
    { src: './images/diff-slide-1.jpg', title: 'Quầy Bar La Marzocco', caption: 'Máy pha cao cấp & quy chuẩn chiết xuất tỉ mỉ' },
    { src: './images/hero-slide-1.jpg', title: 'Barista Thực Chiến', caption: 'Kèm cặp 1-1, học thật và làm thật tại quầy' },
    { src: './images/diff-slide-4.jpg', title: 'Kỹ Thuật Latte Art', caption: 'Tạo hình bọt sữa lụa micro-foam chuẩn vị' },
    { src: './images/art_latte.jpg', title: 'Tách Cà Phê Hạnh Phúc', caption: 'Happiness in a cup — Gửi gắm sự tận tâm' },
    { src: './images/tran-luu-1.webp', title: 'Chi Nhánh Trần Lựu', caption: 'Điểm hẹn thân quen của cư dân An Khánh' },
  ];

  return (
    <section id="videos" className="py-16 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-[#2076bd] dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
            <Film className="w-3.5 h-3.5 text-[#2076bd]" />
            <span>TRỰC QUAN HÌNH ẢNH & THƯỚC PHIM NỘI BỘ</span>
          </div>
          <h2 className="font-oswald text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-wide uppercase">
            CÂU CHUYỆN CÁ HEO XANH & VĂN HÓA QUẦY BAR
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Xem video và hình ảnh thực tế để cảm nhận tinh thần tôn trọng, thân thiện và ấm áp của đại gia đình Dolphy Café:
          </p>
        </div>

        {/* Video Showcase Card */}
        <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white shadow-2xl border border-slate-800 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
            
            {/* Left Info (5 cols) */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FAEA28]/20 border border-[#FAEA28]/40 text-[#FAEA28] text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>THƯỚC PHIM ĐỘC QUYỀN 2026</span>
              </div>

              <h3 className="font-oswald text-2xl sm:text-3xl font-bold text-white leading-tight">
                HÀNH TRÌNH 13 NĂM <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#FAEA28]">
                  CÁ HEO XANH & HẠNH PHÚC
                </span>
              </h3>

              <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed">
                Tại Dolphy, chúng tôi tin rằng một tách cà phê ngon chỉ có thể được tạo ra bởi những con người cảm thấy <strong>an tâm, được tôn trọng và được bảo vệ</strong>. Xem ngay câu chuyện văn hóa quầy bar Thảo Điền qua thước phim ngắn.
              </p>

              <div className="space-y-2.5 text-xs text-blue-200">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Tinh thần "Happiness in a cup" lan tỏa từ nội bộ ra khách hàng</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Môi trường tôn trọng nhân phẩm, không sợ hãi tiền phạt</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Kèm cặp 1-1 tay nghề Barista thực chiến La Marzocco</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setIsPlayingVideo(true)}
                  className="px-6 py-3 rounded-2xl bg-[#FAEA28] hover:bg-[#e6d620] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-yellow-500/20 flex items-center space-x-2"
                >
                  <Play className="w-4 h-4 fill-slate-950" />
                  <span>Bấm Để Xem Thước Phim (Dolphy's Story)</span>
                </button>
              </div>
            </div>

            {/* Right Video Thumbnail (7 cols) */}
            <div className="lg:col-span-7">
              <div 
                onClick={() => setIsPlayingVideo(true)}
                className="relative rounded-2xl overflow-hidden aspect-video group cursor-pointer shadow-2xl border border-white/10"
              >
                <img
                  src="./images/hero-thao-dien-space.jpg"
                  alt="Không gian Dolphy Thảo Điền"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    // fallback to another image if not found
                    (e.target as HTMLImageElement).src = './images/hero_slide_community.webp';
                  }}
                />
                <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#2076bd]/90 group-hover:bg-[#2076bd] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all border-4 border-white/40">
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-white ml-1" />
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-950/70 backdrop-blur-md text-xs text-white flex items-center justify-between">
                  <span>🎥 Phim ngắn: <strong>Dolphy's Story — Happiness In A Cup</strong></span>
                  <span className="text-[#FAEA28] font-bold text-[11px]">Bấm xem</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Real Store Photo Gallery */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ImageIcon className="w-5 h-5 text-[#2076bd]" />
              <h3 className="font-oswald text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                KHOẢNH KHẮC NỤ CƯỜI & QUẦY BAR THẬT TẠI DOLPHY
              </h3>
            </div>
            <span className="text-xs text-slate-400">10+ Chi Nhánh TP.HCM</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setActivePhoto(img.src)}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 dark:bg-slate-800 cursor-pointer shadow-sm hover:shadow-md transition-all border border-slate-200 dark:border-slate-700"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-2 flex flex-col justify-end text-white">
                  <span className="text-[11px] font-bold leading-tight">{img.title}</span>
                  <span className="text-[9px] text-slate-300 line-clamp-1">{img.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Video Modal Popup */}
      {isPlayingVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setIsPlayingVideo(false)}
        >
          <div 
            className="relative w-full max-w-4xl bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-900/90 text-white">
              <div className="flex items-center space-x-2">
                <Film className="w-4 h-4 text-[#FAEA28]" />
                <span className="font-oswald font-bold text-sm sm:text-base">Dolphy's Story — Thước Phim 13 Năm Cá Heo Xanh</span>
              </div>
              <button
                onClick={() => setIsPlayingVideo(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-video bg-black flex items-center justify-center">
              <video
                src="./videos/dolphys-story.mp4"
                controls
                autoPlay
                className="w-full h-full object-contain"
              >
                Trình duyệt của bạn không hỗ trợ thẻ video HTML5.
              </video>
            </div>
          </div>
        </div>
      )}

      {/* Photo Lightbox */}
      {activePhoto && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setActivePhoto(null)}
        >
          <div 
            className="relative max-w-3xl max-h-[85vh] rounded-2xl overflow-hidden border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={activePhoto} alt="Dolphy Cafe Photo" className="w-full h-full object-contain max-h-[80vh]" />
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-3 right-3 p-2 bg-slate-900/70 text-white rounded-full hover:bg-slate-900"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
