import React, { useState } from 'react';
import { Sparkles, RotateCw, CheckCircle2, Heart, Shield, Coffee, Zap } from 'lucide-react';

interface Flashcard {
  id: number;
  frontEmoji: string;
  frontTag: string;
  frontTitle: string;
  frontSubtitle: string;
  backTitle: string;
  backContent: string;
  legalTip: string;
  color: string;
}

export const FlashcardsSection: React.FC = () => {
  const [flippedIds, setFlippedIds] = useState<number[]>([]);

  const flashcards: Flashcard[] = [
    {
      id: 1,
      frontEmoji: '💥',
      frontTag: 'Tai Nạn Rơi Vỡ',
      frontTitle: 'Lỡ tay làm rớt bình Cold Brew đắt tiền, có phải khóc đền nguyên ca?',
      frontSubtitle: 'Đang rửa bình tuột tay vỡ tan tành 850k... Quán có bắt cả ca chia nhau đền tiền mặt không?',
      backTitle: 'BÌNH TĨNH NHA! ĐÃ CÓ ĐIỀU 72 BẢO VỆ!',
      backContent: 'Dolphy TUYỆT ĐỐI CẤM chia đều tiền đền cho cả ca. Sơ suất vỡ đồ chỉ tính giá trị còn lại (đã trừ hao mòn), không bắt đền ngay tiền mặt và khấu trừ lương tối đa 30%/tháng.',
      legalTip: '⚖️ Điều 72 & 74: Cấm bồi thường tập thể, trừ khấu hao thiết bị.',
      color: 'from-blue-600 to-cyan-600',
    },
    {
      id: 2,
      frontEmoji: '🌧️',
      frontTag: 'Đi Muộn Trời Mưa',
      frontTitle: 'Mưa ngập Thảo Điền lỡ muộn ca 20 phút có bị phạt 50k vào quỹ quán?',
      frontSubtitle: 'Nước ngập qua bô xe, dắt bộ muốn xỉu... CHT có được quyền phạt tiền nộp quỹ liên hoan?',
      backTitle: '0Đ PHẠT TIỀN! CẤM TRỪ LƯƠNG THAY KỶ LUẬT!',
      backContent: 'Ở Dolphy không có bất kỳ quỹ phạt tự phát nào! Bạn chỉ không nhận lương cho 20 phút chưa làm thực tế. Báo ngay CHT lý do ngập nước, bạn không hề bị kỷ luật.',
      legalTip: '⚖️ Điều 5 & 14: Tính lương theo giờ thực tế, tuyệt đối 0đ phạt tiền.',
      color: 'from-amber-500 to-yellow-600',
    },
    {
      id: 3,
      frontEmoji: '🛡️',
      frontTag: 'Bảo Vệ Bản Thân',
      frontTitle: 'Khách flirt quá trớn, cố tình đụng chạm cơ thể khi nhận cốc nước?',
      frontSubtitle: 'Người nhận ly nước cố tình vuốt tay, nói lời khiếm nhã làm bạn sợ hãi và bối rối?',
      backTitle: 'BẬT KHIÊN ĐIỀU 39! BẠN ĐƯỢC BẢO VỆ 100%!',
      backContent: 'Lùi lại vị trí an toàn, yêu cầu khách tôn trọng và gọi CHT tiếp nhận xử lý ngay. Dolphy có 2 kênh độc lập (DEC-020) bảo vệ bạn, không ai phải chịu đựng quấy rối!',
      legalTip: '⚖️ Điều 38 & 39: Nghiêm cấm quấy rối tình dục, xử lý nghiêm đến sa thải.',
      color: 'from-pink-600 to-purple-600',
    },
    {
      id: 4,
      frontEmoji: '⚡',
      frontTag: 'An Toàn Là Số 1',
      frontTitle: 'Máy pha La Marzocco rò điện giật tê tay lúc quán đang đông khách?',
      frontSubtitle: 'Khách đang xếp hàng dài, máy bốc mùi khét. Có được tự ý ngắt điện tắt máy không?',
      backTitle: 'NGẮT CẦU DAO NGAY! TÍNH MẠNG LÀ SỐ 1!',
      backContent: 'Bạn có QUYỀN DỪNG VIỆC TỨC THÌ. Không bao giờ đánh đổi tính mạng và sự an toàn của Barista lấy doanh thu hay tốc độ phục vụ. CHT ép làm sẽ bị cách chức (QL-02)!',
      legalTip: '⚖️ Điều 6 & 30: Quyền dừng công việc nguy hiểm không bị phạt.',
      color: 'from-red-600 to-amber-600',
    },
    {
      id: 5,
      frontEmoji: '🥛',
      frontTag: 'An Toàn Thực Phẩm',
      frontTitle: 'Hộp sữa tươi ngửi thấy mùi hơi chua nhẹ dù hạn dùng trên vỏ vẫn còn?',
      frontSubtitle: 'Quản lý bảo: "Date còn, cứ đánh sữa pha bình thường đi em, đổ bỏ phí lắm"... Nghe theo không?',
      backTitle: 'DÁN NHÃN "HOLD" NGỪNG BÁN NGAY LẬP TỨC!',
      backContent: 'Barista có QUYỀN DỪNG PHỤC VỤ thực phẩm lỗi mà không cần chờ ai phê duyệt. Khách hàng uống cà phê ngon và an toàn là nhờ chính sự trung thực của bạn!',
      legalTip: '⚖️ Điều 34: Quyền dừng phục vụ nguyên liệu nghi biến chất.',
      color: 'from-emerald-600 to-teal-700',
    },
    {
      id: 6,
      frontEmoji: '💬',
      frontTag: 'Tự Do Cá Nhân',
      frontTitle: 'Tâm sự với đứa bạn thân về mức lương tháng này có bị đuổi việc?',
      frontSubtitle: 'Quản lý đe dọa: "Lương là bí mật tuyệt mật, nhắc đến lương là bị sa thải ngay"... Đúng không ta?',
      backTitle: 'THOẢI MÁI NHA! ĐIỀU 50 CÔNG NHẬN QUYỀN CỦA BẠN!',
      backContent: 'Nội quy mới đã xóa bỏ quy định cấm vô lý này! Việc trao đổi về mức lương của CHÍNH BẢN THÂN bạn là quyền hợp pháp. Chỉ cấm xâm nhập xem trộm lương người khác thôi nhé!',
      legalTip: '⚖️ Điều 50 (khoản 2): Trao đổi về lương của mình không vi phạm bí mật.',
      color: 'from-indigo-600 to-blue-700',
    },
  ];

  const toggleFlip = (id: number) => {
    setFlippedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="flashcards" className="py-16 bg-slate-50/80 dark:bg-slate-900/60 border-b border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 text-amber-600" />
            <span>MẸO NHỎ QUẦY BAR — CHILL & THẤM</span>
          </div>
          <h2 className="font-oswald text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-wide uppercase">
            BÍ KÍP BỎ TÚI 3 GIÂY CHO ĐẠI GIA ĐÌNH DOLPHY
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Nhấp vào từng tấm thẻ dưới đây để "lật mở" lời giải đáp cực kỳ nhẹ nhàng, vui vẻ và chuẩn luật:
          </p>
        </div>

        {/* 6 Flip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {flashcards.map((card) => {
            const isFlipped = flippedIds.includes(card.id);

            return (
              <div
                key={card.id}
                onClick={() => toggleFlip(card.id)}
                className="cursor-pointer group h-80 perspective-1000 select-none"
              >
                <div
                  className={`relative w-full h-full rounded-3xl transition-transform duration-500 transform-style-preserve-3d shadow-md hover:shadow-xl ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                >
                  {/* Front Side */}
                  <div className="absolute inset-0 backface-hidden rounded-3xl bg-white dark:bg-slate-800 border-2 border-slate-200/80 dark:border-slate-700 p-6 flex flex-col justify-between hover:border-[#2076bd] transition-colors">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-3xl">{card.frontEmoji}</span>
                        <span className="text-[10px] font-bold uppercase px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                          {card.frontTag}
                        </span>
                      </div>

                      <h3 className="font-oswald text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug pt-2">
                        {card.frontTitle}
                      </h3>

                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                        {card.frontSubtitle}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between text-xs text-[#2076bd] font-bold">
                      <span className="flex items-center gap-1.5">
                        <RotateCw className="w-3.5 h-3.5 animate-spin-slow" />
                        Chạm để lật bí kíp
                      </span>
                      <span className="text-slate-400 font-normal text-[11px]">Thẻ #{card.id}</span>
                    </div>
                  </div>

                  {/* Back Side (Flipped) */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-3xl bg-gradient-to-br from-[#2076bd] via-[#165b94] to-slate-900 text-white p-6 flex flex-col justify-between shadow-2xl border-2 border-blue-400/40">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-[#FAEA28]">
                        <span className="text-xs font-bold font-oswald tracking-wider uppercase">
                          {card.frontTag}
                        </span>
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      </div>

                      <h4 className="font-oswald text-base sm:text-lg font-bold text-[#FAEA28] leading-tight">
                        {card.backTitle}
                      </h4>

                      <p className="text-xs sm:text-sm text-blue-50 leading-relaxed font-medium">
                        {card.backContent}
                      </p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-white/20">
                      <div className="text-[11px] text-blue-200 font-mono">
                        {card.legalTip}
                      </div>
                      <div className="text-[10px] text-blue-300 text-right italic">
                        Bấm để quay lại mặt trước ↺
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
