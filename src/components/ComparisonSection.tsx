import React from 'react';
import { Check, X, Sparkles, Shield, HeartHandshake, Zap, Award } from 'lucide-react';

export const ComparisonSection: React.FC = () => {
  const comparisons = [
    {
      title: 'Xử Lý Đi Muộn & Trật Tự Quầy Bar',
      oldPractice: 'Cũ: Phạt tiền 20k - 50k vào quỹ quán, trừ ca làm việc hoặc giam tiền tip.',
      newPractice: 'Mới (2026): TUYỆT ĐỐI KHÔNG PHẠT TIỀN. Tính lương theo thời gian thực tế, ưu tiên nhắc nhở & coaching cải tiến (Điều 5, 14, 64).',
      highlight: '0đ Phạt Tiền',
      badgeColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
    },
    {
      title: 'Hư Hỏng Tài Sản & Bể Vỡ Ly Tách',
      oldPractice: 'Cũ: Bắt mua lại sản phẩm lỗi, chia đều tiền bồi thường cho toàn bộ nhân viên trong ca.',
      newPractice: 'Mới (2026): CẤM chia đều theo ca. Chứng minh lỗi cá nhân độc lập, tính trừ hao mòn, khấu trừ tối đa 30% lương/tháng (Điều 72, 75, 78).',
      highlight: 'Cấm Bồi Thường Tập Thể',
      badgeColor: 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300'
    },
    {
      title: 'Tiền Cọc Đào Tạo Nghề Barista',
      oldPractice: 'Cũ: Thu tiền cọc đào tạo, giữ bản chính CCCD hoặc bằng tốt nghiệp để ràng buộc.',
      newPractice: 'Mới (2026): BÃI BỎ TOÀN BỘ CỌC. Nghiêm cấm thu cọc, cấm giữ giấy tờ tùy thân của người lao động (Điều 9).',
      highlight: 'Không Cọc, Không Giữ Giấy Tờ',
      badgeColor: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
    },
    {
      title: 'An Toàn Lao Động & Sự Cố Thiết Bị',
      oldPractice: 'Cũ: Phải chờ phê duyệt của Cửa hàng trưởng hoặc QLCL mới được tắt máy hay dừng bán.',
      newPractice: 'Mới (2026): TRAO QUYỀN DỪNG VIỆC TỨC THÌ cho nhân viên khi phát hiện rò điện, khói khét hoặc thực phẩm biến chất mà không sợ bị phạt (Điều 30, 34).',
      highlight: 'Quyền Dừng Việc Thiện Chí',
      badgeColor: 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300'
    },
    {
      title: 'Kênh Tiếp Nhận & Phòng Chống Quấy Rối',
      oldPractice: 'Cũ: Chỉ phản ánh miệng với Quản lý cửa hàng; dễ bị ém nhẹm hoặc sợ bị đì ca.',
      newPractice: 'Mới (2026): 02 KÊNH TIẾP NHẬN ĐỘC LẬP (DEC-020). Cho phép gửi ẩn danh, phản hồi an toàn trong 24h, nghiêm cấm tuyệt đối trả đũa (Điều 40, 44).',
      highlight: '2 Kênh Độc Lập Bảo Vệ 24h',
      badgeColor: 'bg-pink-100 text-pink-800 dark:bg-pink-950 dark:text-pink-300'
    },
    {
      title: 'Quyền Riêng Tư & Trao Đổi Về Tiền Lương',
      oldPractice: 'Cũ: Cấm nói về tiền lương dưới mọi hình thức, coi việc nhắc lương là vi phạm bí mật.',
      newPractice: 'Mới (2026): CÔNG NHẬN quyền trao đổi về tiền lương và quyền lợi của CHÍNH BẢN THÂN mình; không coi là vi phạm lộ bí mật công ty (Điều 50).',
      highlight: 'Tôn Trọng Quyền Cá Nhân',
      badgeColor: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-300'
    }
  ];

  return (
    <section id="comparison" className="py-16 bg-slate-50/70 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-[#2076bd] dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#2076bd]" />
            <span>SỰ TIẾN BỘ VƯỢT BẬC NĂM 2026</span>
          </div>
          <h2 className="font-oswald text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-wide uppercase">
            6 ĐIỂM ĐỘT PHÁ NỔI BẬT TRONG NỘI QUY DOL-HR-001
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Dự thảo v1.0 đánh dấu bước chuyển mình nhân văn, chuẩn hóa theo Bộ luật Lao động và triết lý tôn trọng con người của Dolphy Café. Hãy xem quyền lợi của bạn được nâng tầm như thế nào:
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {comparisons.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4 relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${item.badgeColor}`}>
                    {item.highlight}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    #0{idx + 1}
                  </span>
                </div>

                <h3 className="font-oswald text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                  {item.title}
                </h3>

                {/* Old vs New Box */}
                <div className="mt-3 space-y-2 text-xs">
                  {/* Old Practice */}
                  <div className="p-2.5 rounded-xl bg-red-50/70 dark:bg-red-950/30 border border-red-100 dark:border-red-900/40 text-red-700 dark:text-red-300 flex items-start space-x-2">
                    <X className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>{item.oldPractice}</span>
                  </div>

                  {/* New Practice */}
                  <div className="p-2.5 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200/70 dark:border-emerald-800/50 text-emerald-800 dark:text-emerald-200 font-medium flex items-start space-x-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{item.newPractice}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 dark:border-slate-700/60 text-[11px] text-slate-400 flex items-center justify-between">
                <span>Chuẩn hóa Tầng 2 Dolphy</span>
                <span className="text-[#2076bd] font-semibold">Bảo vệ quyền lợi</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
