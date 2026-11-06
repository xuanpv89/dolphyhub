import React, { useState } from 'react';
import { Clock, ShieldAlert, GitBranch, ArrowRight, CheckCircle2, AlertTriangle, Coffee, Sparkles } from 'lucide-react';

export const VisualTimelineFlow: React.FC = () => {
  const [activeFlow, setActiveFlow] = useState<'shift' | 'coaching' | 'emergency'>('shift');

  const flows = {
    shift: {
      title: 'VÒNG ĐỜI CA TRỰC CHUẨN 24H TẠI QUÁN DOLPHY',
      desc: 'Từ lúc bước vào quán đến lúc chào tạm biệt — Mọi phút giây đều được tôn trọng và tính lương minh bạch.',
      steps: [
        { num: '01', title: 'Đến Đúng Giờ & Chấm Công', time: 'Đầu Ca', desc: 'Có mặt đúng giờ, chỉnh đốn đồng phục, giày bít mũi. Chấm công trung thực vào máy.', icon: '⏰' },
        { num: '02', title: 'Họp Đầu Ca (Giao Ban)', time: '10 Phút Đầu', desc: 'Họp giao ban ca, lắng nghe mục tiêu phục vụ trong ngày. ĐƯỢC TÍNH VÀO GIỜ LÀM VIỆC.', icon: '🗣️' },
        { num: '03', title: 'Vận Hành & Tạo Tác', time: 'Trong Ca', desc: 'Pha chế hạt mộc Robusta / Arabica Cầu Đất, đánh bọt sữa micro-foam, phục vụ khách theo 5S.', icon: '☕' },
        { num: '04', title: 'Nghỉ Giữa Ca 30 - 45 Phút', time: 'Giữa Ca', desc: 'Nghỉ ngơi, ăn uống nạp năng lượng tại khu vực riêng. Được tính vào giờ làm nếu ca >= 6h.', icon: '🍱' },
        { num: '05', title: 'Đóng Ca & 5S Quầy Bar', time: 'Cuối Ca', desc: 'Vệ sinh blind basket họng pha La Marzocco, đổ bã, lau khô ráo quầy, ngắt nguồn gia nhiệt.', icon: '✨' },
        { num: '06', title: 'Bàn Giao & Chấm Công Ra', time: 'Kết Thúc', desc: 'Bàn giao số liệu ca cho CHT, kiểm tra dữ liệu chấm công và an tâm ra về.', icon: '🏠' }
      ]
    },
    coaching: {
      title: 'LỘ TRÌNH 14 - 30 NGÀY COACHING KHẮC PHỤC HÀNH VI (DEC-025)',
      desc: 'Sai sót nghiệp vụ ưu tiên hướng dẫn, không dùng roi phạt. Đồng hành giúp bạn tiến bộ mỗi ngày.',
      steps: [
        { num: '01', title: 'Ghi Nhận Sai Sót Thiện Chí', time: 'Ngày 01', desc: 'CHT hoặc QLCL trao đổi riêng 1-1, lắng nghe nguyên nhân khó khăn, không ép nhận lỗi.', icon: '🤝' },
        { num: '02', title: 'Tách Biệt Khỏi Kỷ Luật', time: 'Ngay Lập Tức', desc: 'Tuyệt đối KHÔNG phạt tiền, không trừ lương hay bêu rếu trước tập thể cửa hàng.', icon: '🛡️' },
        { num: '03', title: 'Lập Kế Hoạch 1-3 Hành Vi', time: 'Ngày 02', desc: 'Xác định rõ ràng 1-3 kỹ năng cần rèn luyện thêm, chỉ định Trainer hỗ trợ 1-1.', icon: '📝' },
        { num: '04', title: 'Coaching & Đào Tạo Kèm Cặp', time: '14 - 30 Ngày', desc: 'Thời gian tham gia họp và đào tạo bắt buộc ĐƯỢC TRẢ LƯƠNG ĐẦY ĐỦ như giờ làm.', icon: '🎯' },
        { num: '05', title: 'Đánh Giá Tiến Bộ Công Tâm', time: 'Mốc Cuối', desc: 'Ghi nhận sự nỗ lực thay đổi, đóng hồ sơ khắc phục và vinh danh sự tiến bộ.', icon: '🌟' },
        { num: '06', title: 'Tự Động Xóa Kỷ Luật', time: '3 - 6 Tháng', desc: 'Nếu có áp dụng khiển trách (K), hồ sơ sẽ tự động xóa sạch án tích sau 03 tháng!', icon: '🕊️' }
      ]
    },
    emergency: {
      title: 'QUY TRÌNH 4 BƯỚC ỨNG PHÓ SỰ CỐ KHẨN CẤP (PCCC, ĐIỆN, TAI NẠN)',
      desc: 'Khi có nguy cơ cháy nổ, chập điện hoặc sự cố xô xát — Thứ tự ưu tiên cứu người là tuyệt đối.',
      steps: [
        { num: '01', title: 'BẢO VỆ CON NGƯỜI (Số 1)', time: 'Tức Thì', desc: 'Rời xa vùng nguy hiểm, hỗ trợ khách hàng và đồng nghiệp; KHÔNG cố cứu tài sản.', icon: '❤️' },
        { num: '02', title: 'Hô Báo Động & Gọi 114 / 115', time: 'Giây Thứ 30', desc: 'Bất kỳ ai cũng có quyền gọi cứu hỏa 114 hoặc cấp cứu 115 mà KHÔNG CẦN CHỜ CẤP TRÊN DUYỆT.', icon: '🚨' },
        { num: '03', title: 'Sơ Tán & Ngắt Điện An Toàn', time: 'Phút Thứ 1', desc: 'Ngắt cầu dao điện chính nếu có lối thoát an toàn; di chuyển ra điểm tập kết trước quán.', icon: '🏃' },
        { num: '04', title: 'Điểm Danh & Báo CHT/DHO', time: 'Phút Thứ 3', desc: 'Kiểm đếm quân số nhân viên và khách, phối hợp lực lượng cứu hỏa chuyên nghiệp.', icon: '📋' }
      ]
    }
  };

  const current = flows[activeFlow];

  return (
    <section id="timelines" className="py-16 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-[#2076bd] dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
            <GitBranch className="w-3.5 h-3.5 text-[#2076bd]" />
            <span>SƠ ĐỒ DÒNG CHẢY QUY TRÌNH</span>
          </div>
          <h2 className="font-oswald text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-wide uppercase">
            CÁC LỘ TRÌNH VẬN HÀNH TRỰC QUAN TẠI QUÁN
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Xem từng bước diễn ra thế nào để tự tin xử lý mọi tình huống từ ca trực hàng ngày đến lúc có sự cố:
          </p>
        </div>

        {/* 3 Flow Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => setActiveFlow('shift')}
            className={`flex items-center space-x-2 px-5 py-2.5 rounded-2xl font-bold text-xs sm:text-sm tracking-wide transition-all shadow-sm ${
              activeFlow === 'shift'
                ? 'bg-[#2076bd] text-white shadow-md ring-2 ring-blue-500/20'
                : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 border border-slate-200 dark:border-slate-700'
            }`}
          >
            <span>☕ Vòng Đời Ca Trực 24h</span>
          </button>

          <button
            onClick={() => setActiveFlow('coaching')}
            className={`flex items-center space-x-2 px-5 py-2.5 rounded-2xl font-bold text-xs sm:text-sm tracking-wide transition-all shadow-sm ${
              activeFlow === 'coaching'
                ? 'bg-amber-500 text-white shadow-md ring-2 ring-amber-400/20'
                : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 border border-slate-200 dark:border-slate-700'
            }`}
          >
            <span>🌱 Lộ Trình Coaching 14-30 Ngày</span>
          </button>

          <button
            onClick={() => setActiveFlow('emergency')}
            className={`flex items-center space-x-2 px-5 py-2.5 rounded-2xl font-bold text-xs sm:text-sm tracking-wide transition-all shadow-sm ${
              activeFlow === 'emergency'
                ? 'bg-rose-600 text-white shadow-md ring-2 ring-rose-500/20'
                : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 border border-slate-200 dark:border-slate-700'
            }`}
          >
            <span>🚨 4 Bước Ứng Phó Khẩn Cấp</span>
          </button>
        </div>

        {/* Timeline Visualization Card */}
        <div className="rounded-3xl bg-slate-50/70 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 p-6 sm:p-10 shadow-lg space-y-8 animate-fadeIn">
          
          <div className="space-y-1">
            <h3 className="font-oswald text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {current.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              {current.desc}
            </p>
          </div>

          {/* Steps Timeline Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {current.steps.map((st, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-5 shadow-sm hover:shadow-md transition-all space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">{st.icon}</span>
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950 text-[#2076bd] border border-blue-200 dark:border-blue-900">
                      Bước {st.num}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 block font-oswald">
                      {st.time}
                    </span>
                    <h4 className="font-oswald text-base font-bold text-slate-900 dark:text-white leading-tight mt-0.5">
                      {st.title}
                    </h4>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {st.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Quy chuẩn Dolphy</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
