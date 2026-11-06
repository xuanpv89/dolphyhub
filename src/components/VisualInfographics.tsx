import React, { useState } from 'react';
import { 
  Sparkles, 
  ShieldAlert, 
  CheckCircle, 
  XCircle, 
  Zap, 
  Coffee, 
  Clock, 
  Coins, 
  Lock, 
  HeartHandshake,
  Layers,
  ArrowRight,
  Eye,
  Check
} from 'lucide-react';

export const VisualInfographics: React.FC = () => {
  const [selectedInfographic, setSelectedInfographic] = useState<number>(0);

  const infographics = [
    {
      id: 0,
      title: 'CHUẨN TÁC PHONG 5S QUẦY BAR',
      subtitle: 'Trang phục & Vệ sinh an toàn — Điều 22 & 34',
      badge: 'Đồng Phục & An Toàn',
      bgGradient: 'from-blue-600 to-indigo-700',
      illustration: '🧑‍🍳',
      points: [
        { icon: '🧢', title: 'Tóc & Móng Tay', desc: 'Tóc buộc gọn gàng, móng tay cắt ngắn sạch sẽ, không đeo nhẫn hạt to khi pha chế.' },
        { icon: '🏷️', title: 'Bảng Tên & Tạp Dề', desc: 'Đeo bảng tên Dolphy bên ngực trái, tạp dề sạch sẽ nguyên vẹn được giặt là phẳng.' },
        { icon: '👖', title: 'Trang Phục Tề Chỉnh', desc: 'Quần dài lịch sự, chất liệu thoải mái vận động trong suốt ca đứng máy.' },
        { icon: '👟', title: 'Giày Bít Mũi & Bít Gót', desc: 'BẮT BUỘC giày bít mũi bít gót chống trơn trượt quầy bar, bảo vệ bàn chân khi rơi vỡ.' },
        { icon: '🎨', title: 'Màu Tóc & Hình Xăm', desc: 'TÔN TRỌNG CÁ TÍNH: Thoải mái màu tóc & hình xăm nghệ thuật, chỉ cần buộc gọn gàng!' },
      ],
      quote: 'Tác phong chuyên nghiệp chính là lời chào nồng nhiệt nhất gửi tới khách hàng.'
    },
    {
      id: 1,
      title: '3 BƯỚC DỪNG MÁY AN TOÀN KHI RÒ ĐIỆN',
      subtitle: 'Quy trình bảo vệ tính mạng — Điều 6 & 30',
      badge: 'Quyền Dừng Việc',
      bgGradient: 'from-red-600 to-amber-600',
      illustration: '⚡',
      points: [
        { icon: '1️⃣', title: 'Ngắt Cầu Dao Nguồn Ngay', desc: 'Lập tức ngắt công tắc / cầu dao điện chính của máy pha khi thấy rò điện, bốc khói khét.' },
        { icon: '2️⃣', title: 'Cảnh Báo Đồng Đội & Khách Hàng', desc: 'Hô to cảnh báo các bạn cùng ca: "Máy đang rò điện, không ai được chạm vào vỏ kim loại!".' },
        { icon: '3️⃣', title: 'Đặt Biển Dừng & Báo CHT/DHO', desc: 'Đặt biển tạm dừng phục vụ, thông báo ngay Cửa hàng trưởng và Hotline Kỹ thuật DHO.' },
        { icon: '🛡️', title: 'Bảo Đảm Tuyệt Đối 100%', desc: 'KHÔNG BỊ PHẠT, KHÔNG BỊ TRỪ LƯƠNG. Tính mạng con người luôn đứng trên mọi cốc cà phê!' },
      ],
      quote: 'Không đánh đổi tính mạng và sức khỏe con người lấy tốc độ phục vụ hay doanh thu.'
    },
    {
      id: 2,
      title: 'SƠ ĐỒ 2 KÊNH TIẾP NHẬN PHẢN ÁNH (DEC-020)',
      subtitle: 'Bảo vệ quyền lợi & chống quấy rối — Điều 40 & 44',
      badge: 'Bảo Mật 24/7',
      bgGradient: 'from-purple-600 to-pink-600',
      illustration: '🛡️',
      points: [
        { icon: '🔒', title: 'Tiếp Nhận Ẩn Danh 100%', desc: 'Gửi phản ánh không cần nêu tên nếu muốn, hệ thống cấp mã Ticket bí mật để theo dõi tiến độ.' },
        { icon: '⚡', title: 'Xử Lý Nhanh 24 Giờ', desc: 'Xác nhận nhận tin trong 1 ngày, áp dụng ngay biện pháp bảo vệ tạm thời trong 24 giờ.' },
        { icon: '👥', title: 'Xác Minh Độc Lập 2 Người', desc: 'Ít nhất 2 chuyên viên không xung đột lợi ích cùng xác minh, bảo đảm tính công tâm tuyệt đối.' },
        { icon: '🚫', title: 'Nghiêm Cấm Mọi Hành Vi Trả Đũa', desc: 'Ai có hành vi đè ép, cắt ca, trù dập người phản ánh thiện chí sẽ bị cách chức hoặc sa thải!' },
      ],
      quote: 'Dolphy là ngôi nhà an toàn, nơi mọi tiếng nói của bạn đều được trân trọng lắng nghe.'
    },
    {
      id: 3,
      title: '4 NGUYÊN TẮC BỒI THƯỜNG TÀI SẢN CÔNG BẰNG',
      subtitle: 'Minh bạch trách nhiệm vật chất — Điều 72 & 78',
      badge: 'Bảo Vệ Ví Tiền',
      bgGradient: 'from-amber-600 to-emerald-600',
      illustration: '⚖️',
      points: [
        { icon: '❌', title: 'Cấm Bồi Thường Cả Ca', desc: 'Tuyệt đối KHÔNG bắt cả ca cùng chia tiền đền khi có ly tách vỡ hay thất thoát chưa rõ.' },
        { icon: '📉', title: 'Trừ Hao Mòn & Khấu Hao', desc: 'Tính theo giá trị còn lại của tài sản sau khi đã trừ thời gian sử dụng, không lấy giá mua mới.' },
        { icon: '🛡️', title: 'Trần Bồi Thường Sơ Suất', desc: 'Sơ suất nhỏ đền tối đa không quá 03 tháng lương; xem xét hoàn cảnh khó khăn để giảm mức.' },
        { icon: '💰', title: 'Khấu Trừ Lương Tối Đa 30%', desc: 'Mỗi tháng trừ tối đa không quá 30% lương thực nhận, không được cấn trừ hết toàn bộ lương.' },
      ],
      quote: 'Mỗi người chỉ chịu trách nhiệm về lỗi của chính mình. Nói không với phạt tiền tập thể.'
    }
  ];

  const current = infographics[selectedInfographic];

  return (
    <section id="infographics" className="py-16 bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-slate-900 dark:via-slate-900/60 dark:to-slate-900 border-b border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-[#2076bd] dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#2076bd]" />
            <span>INFOGRAPHIC TRỰC QUAN HÓA</span>
          </div>
          <h2 className="font-oswald text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-wide uppercase">
            BẢNG HƯỚNG DẪN TRỰC QUAN 4 NGUYÊN TẮC CỐT LÕI
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Biến những điều khoản pháp lý phức tạp thành infographic trực quan, dễ nhớ, dễ áp dụng ngay tại quầy bar:
          </p>
        </div>

        {/* 4 Interactive Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {infographics.map((info, idx) => (
            <button
              key={info.id}
              onClick={() => setSelectedInfographic(idx)}
              className={`p-3.5 rounded-2xl border text-left transition-all duration-300 flex items-center space-x-3 ${
                selectedInfographic === idx
                  ? 'bg-[#2076bd] text-white border-blue-400 shadow-md ring-2 ring-blue-400/30 scale-102'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-[#2076bd]'
              }`}
            >
              <span className="text-2xl flex-shrink-0">{info.illustration}</span>
              <div className="min-w-0">
                <span className={`text-[10px] font-bold uppercase block truncate ${selectedInfographic === idx ? 'text-blue-100' : 'text-slate-400'}`}>
                  {info.badge}
                </span>
                <span className="font-oswald text-xs sm:text-sm font-bold block leading-tight truncate">
                  {info.title}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Featured Visual Infographic Card */}
        <div className="rounded-3xl bg-white dark:bg-slate-800/95 border border-slate-200 dark:border-slate-700 shadow-xl overflow-hidden animate-fadeIn">
          
          {/* Top Banner of Infographic */}
          <div className={`p-6 sm:p-8 bg-gradient-to-r ${current.bgGradient} text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4`}>
            <div className="flex items-center space-x-4">
              <span className="text-4xl sm:text-5xl">{current.illustration}</span>
              <div>
                <span className="text-xs font-bold text-[#FAEA28] uppercase tracking-wider font-oswald">
                  {current.badge}
                </span>
                <h3 className="font-oswald text-2xl sm:text-3xl font-bold tracking-wide">
                  {current.title}
                </h3>
                <p className="text-xs sm:text-sm text-blue-100 mt-0.5">
                  {current.subtitle}
                </p>
              </div>
            </div>

            <div className="hidden lg:block text-right text-xs text-blue-200">
              <span>Chuẩn mực văn hóa Dolphy Café</span>
            </div>
          </div>

          {/* Infographic Steps / Points Grid */}
          <div className="p-6 sm:p-10 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {current.points.map((pt, pIdx) => (
                <div
                  key={pIdx}
                  className="p-4.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 hover:border-[#2076bd] transition-all flex items-start space-x-4 group"
                >
                  <div className="text-2xl sm:text-3xl p-2 rounded-xl bg-white dark:bg-slate-700 shadow-sm flex-shrink-0 group-hover:scale-110 transition-transform">
                    {pt.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-oswald text-base font-bold text-slate-900 dark:text-white leading-tight">
                      {pt.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {pt.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Quote Banner */}
            <div className="p-4 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/40 flex items-center justify-between text-xs sm:text-sm text-[#2076bd] dark:text-blue-300 font-medium">
              <div className="flex items-center space-x-2">
                <span className="text-xl">💬</span>
                <span>"{current.quote}"</span>
              </div>
              <span className="text-[11px] font-bold text-slate-400 hidden sm:inline font-oswald uppercase">DOL-HR-001 2026</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
