import React from 'react';
import { 
  Check, 
  X, 
  Sparkles, 
  Shield, 
  HeartHandshake, 
  Zap, 
  Award,
  Clock,
  Coffee,
  GraduationCap,
  MessageCircle,
  TrendingUp,
  AlertCircle
} from 'lucide-react';

export const ComparisonSection: React.FC = () => {
  const comparisons = [
    {
      id: 1,
      title: 'Xử Lý Đi Muộn & Trật Tự Quầy Bar',
      badge: 'Chấm Công & Kỷ Luật',
      icon: Clock,
      themeColor: 'emerald',
      oldText: 'Phạt tiền 20k - 50k vào quỹ quán, trừ ca làm việc hoặc giam tiền tip.',
      newText: 'TUYỆT ĐỐI KHÔNG PHẠT TIỀN. Tính lương theo thời gian thực tế, ưu tiên nhắc nhở & coaching cải tiến (Điều 5, 14, 64).',
      highlightBadge: '0đ Phạt Tiền',
      badgeBg: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border-emerald-300'
    },
    {
      id: 2,
      title: 'Hư Hỏng Tài Sản & Bể Vỡ Ly Tách',
      badge: 'Trách Nhiệm Vật Chất',
      icon: Coffee,
      themeColor: 'blue',
      oldText: 'Bắt mua lại sản phẩm lỗi, chia đều tiền bồi thường cho toàn bộ nhân viên trong ca.',
      newText: 'CẤM chia đều theo ca. Chứng minh lỗi cá nhân độc lập, tính trừ hao mòn, khấu trừ tối đa 30% lương/tháng (Điều 72, 75, 78).',
      highlightBadge: 'Cấm Bồi Thường Cả Ca',
      badgeBg: 'bg-blue-100 text-blue-800 dark:bg-blue-950/80 dark:text-blue-300 border-blue-300'
    },
    {
      id: 3,
      title: 'Tiền Cọc Đào Tạo Nghề Barista',
      badge: 'Tuyển Dụng & Đào Tạo',
      icon: GraduationCap,
      themeColor: 'amber',
      oldText: 'Thu tiền cọc đào tạo, giữ bản chính CCCD hoặc bằng tốt nghiệp để ràng buộc.',
      newText: 'BÃI BỎ TOÀN BỘ CỌC. Nghiêm cấm thu cọc, cấm giữ giấy tờ tùy thân của người lao động (Điều 9).',
      highlightBadge: 'Không Cọc, Không Giữ Giấy Tờ',
      badgeBg: 'bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300 border-amber-300'
    },
    {
      id: 4,
      title: 'An Toàn Lao Động & Sự Cố Thiết Bị',
      badge: 'An Toàn Là Trên Hết',
      icon: Zap,
      themeColor: 'rose',
      oldText: 'Phải chờ phê duyệt của Cửa hàng trưởng hoặc QLCL mới được tắt máy hay dừng bán.',
      newText: 'TRAO QUYỀN DỪNG VIỆC TỨC THÌ cho nhân viên khi phát hiện rò điện, khói khét hoặc thực phẩm biến chất mà không sợ bị phạt (Điều 30, 34).',
      highlightBadge: 'Quyền Dừng Việc Thiện Chí',
      badgeBg: 'bg-rose-100 text-rose-800 dark:bg-rose-950/80 dark:text-rose-300 border-rose-300'
    },
    {
      id: 5,
      title: 'Kênh Tiếp Nhận & Phòng Chống Quấy Rối',
      badge: 'Bảo Vệ Con Người',
      icon: Shield,
      themeColor: 'purple',
      oldText: 'Chỉ phản ánh miệng với Quản lý cửa hàng; dễ bị ém nhẹm hoặc sợ bị đì ca.',
      newText: '02 KÊNH TIẾP NHẬN ĐỘC LẬP (DEC-020). Cho phép gửi ẩn danh, phản hồi an toàn trong 24h, nghiêm cấm tuyệt đối trả đũa (Điều 40, 44).',
      highlightBadge: '2 Kênh Độc Lập Bảo Vệ 24h',
      badgeBg: 'bg-purple-100 text-purple-800 dark:bg-purple-950/80 dark:text-purple-300 border-purple-300'
    },
    {
      id: 6,
      title: 'Quyền Riêng Tư & Trao Đổi Về Tiền Lương',
      badge: 'Tôn Trọng Cá Nhân',
      icon: MessageCircle,
      themeColor: 'cyan',
      oldText: 'Cấm nói về tiền lương dưới mọi hình thức, coi việc nhắc lương là vi phạm bí mật.',
      newText: 'CÔNG NHẬN quyền trao đổi về tiền lương và quyền lợi của CHÍNH BẢN THÂN mình; không coi là vi phạm lộ bí mật công ty (Điều 50).',
      highlightBadge: 'Tôn Trọng Quyền Cá Nhân',
      badgeBg: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-950/80 dark:text-cyan-300 border-cyan-300'
    }
  ];

  return (
    <section id="comparison" className="py-16 bg-slate-50/70 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
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

        {/* 6 Visual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {comparisons.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 p-6 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between space-y-4 group hover:border-[#2076bd]"
              >
                <div className="space-y-4">
                  
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <div className="w-10 h-10 rounded-2xl bg-blue-50 dark:bg-slate-700 text-[#2076bd] dark:text-blue-300 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                          {item.badge}
                        </span>
                        <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${item.badgeBg}`}>
                          {item.highlightBadge}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-300 dark:text-slate-600">
                      #0{item.id}
                    </span>
                  </div>

                  <h3 className="font-oswald text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                    {item.title}
                  </h3>

                  {/* Visual Contrast: Before vs Now */}
                  <div className="space-y-2.5 text-xs">
                    
                    {/* Old Regulation */}
                    <div className="p-3 rounded-2xl bg-rose-50/60 dark:bg-rose-950/30 border border-rose-200/60 dark:border-rose-900/40 text-rose-800 dark:text-rose-300 space-y-1">
                      <div className="flex items-center space-x-1.5 font-bold uppercase text-[10px] tracking-wider text-rose-600 dark:text-rose-400">
                        <X className="w-3.5 h-3.5 stroke-[3]" />
                        <span>Quy định cũ trước đây:</span>
                      </div>
                      <p className="leading-relaxed pl-5 text-slate-600 dark:text-slate-400">
                        {item.oldText}
                      </p>
                    </div>

                    {/* New Regulation */}
                    <div className="p-3 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-300/80 dark:border-emerald-800/60 text-emerald-900 dark:text-emerald-200 space-y-1 shadow-sm">
                      <div className="flex items-center space-x-1.5 font-bold uppercase text-[10px] tracking-wider text-emerald-700 dark:text-emerald-400">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                        <span>Nội quy mới 2026 (DOL-HR-001):</span>
                      </div>
                      <p className="leading-relaxed pl-5 font-medium">
                        {item.newText}
                      </p>
                    </div>

                  </div>

                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Chuẩn hóa Tầng 2 Dolphy</span>
                  <span className="text-[#2076bd] font-bold">Bảo vệ quyền lợi</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
