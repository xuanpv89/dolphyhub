import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  UserCheck, 
  Clock, 
  Send, 
  AlertCircle, 
  CheckCircle2,
  PhoneCall,
  Mail,
  Building
} from 'lucide-react';

interface WhistleblowerSectionProps {
  onOpenReportModal: () => void;
}

export const WhistleblowerSection: React.FC<WhistleblowerSectionProps> = ({ onOpenReportModal }) => {
  return (
    <section id="channels" className="py-16 bg-slate-50/70 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-[#2076bd] dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
            <Lock className="w-3.5 h-3.5 text-[#2076bd]" />
            <span>CƠ CHẾ BẢO VỆ CON NGƯỜI (DEC-020)</span>
          </div>
          <h2 className="font-oswald text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-wide uppercase">
            02 KÊNH TIẾP NHẬN PHẢN ÁNH & BẢO VỆ ĐỘC LẬP
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Quyết định DEC-020 xác lập cơ chế 2 kênh trung tâm để bảo đảm mọi tiếng nói của nhân viên đều được lắng nghe, bảo mật và giải quyết công tâm:
          </p>
        </div>

        {/* 2 Channels Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Kênh 1: Đầu Mối Độc Lập Do CEO Chỉ Định */}
          <div className="rounded-3xl bg-gradient-to-br from-indigo-900 via-blue-950 to-slate-950 text-white p-6 sm:p-8 shadow-xl border border-indigo-500/30 relative overflow-hidden flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#FAEA28] text-slate-950 uppercase tracking-wider">
                  Kênh Bảo Mật Khẩn Cấp
                </span>
                <span className="text-xs font-mono text-blue-300">Kênh 01 • DEC-020</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#FAEA28]">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-oswald text-xl font-bold tracking-wide">
                    ĐẦU MỐI BẢO VỆ CON NGƯỜI ĐỘC LẬP
                  </h3>
                  <span className="text-xs text-blue-200">Bổ nhiệm trực tiếp bởi CEO Phạm Duy Linh</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed">
                Chuyên trách tiếp nhận các vụ việc nhạy cảm: <strong>Quấy rối tình dục, bạo lực, bắt nạt, lạm quyền, trù dập hoặc xung đột lợi ích với cấp quản lý cửa hàng (CHT)</strong>.
              </p>

              <div className="space-y-2 text-xs text-blue-200 bg-white/5 p-4 rounded-2xl border border-white/10">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Tiếp nhận phản ánh <strong>ẨN DANH 100%</strong></span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Đánh giá nguy cơ & bảo vệ tạm thời trong <strong>24 giờ</strong></span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Xác minh độc lập bởi ít nhất <strong>02 nhân sự chuyên môn</strong></span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenReportModal}
              className="w-full py-3 px-4 rounded-xl bg-[#FAEA28] hover:bg-[#e6d620] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center space-x-2"
            >
              <Lock className="w-4 h-4" />
              <span>Gửi Phản Ánh Đến Đầu Mối Độc Lập</span>
            </button>
          </div>

          {/* Kênh 2: Đầu Mối HR/People DHO */}
          <div className="rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-[#2076bd] dark:text-blue-300 uppercase tracking-wider">
                  Kênh Hành Chính & Quyền Lợi
                </span>
                <span className="text-xs font-mono text-slate-400">Kênh 02 • DHO Support</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950 text-[#2076bd] flex items-center justify-center">
                  <Building className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-oswald text-xl font-bold text-slate-900 dark:text-white tracking-wide">
                    ĐẦU MỐI HR/PEOPLE (DHO)
                  </h3>
                  <span className="text-xs text-slate-500">Phòng Nhân sự Văn phòng Điều hành Dolphy</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Chuyên trách giải đáp các thắc mắc về: <strong>Chế độ tiền lương, bảng chấm công, ngày phép năm, điều động ca làm, bảo hiểm xã hội và phúc lợi lao động</strong>.
              </p>

              <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
                <div className="flex items-center space-x-2">
                  <PhoneCall className="w-4 h-4 text-[#2076bd] flex-shrink-0" />
                  <span>Hotline Hỗ Trợ: <strong>0938 084 985</strong></span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-[#2076bd] flex-shrink-0" />
                  <span>Email: <strong>contact@dolphycafe.com</strong> (Tiêu đề: HR Support)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-[#2076bd] flex-shrink-0" />
                  <span>Thời gian hỗ trợ: <strong>08:00 - 17:00 (Thứ 2 đến Thứ 6)</strong></span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenReportModal}
              className="w-full py-3 px-4 rounded-xl border border-slate-300 dark:border-slate-600 hover:border-[#2076bd] hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-2"
            >
              <Send className="w-4 h-4 text-[#2076bd]" />
              <span>Gửi Câu Hỏi Tư Vấn Nhân Sự</span>
            </button>
          </div>

        </div>

        {/* 4 Guarantees Bar */}
        <div className="rounded-2xl p-6 bg-blue-50/60 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div className="flex items-start space-x-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 dark:text-white block">Xác nhận trong 1 ngày</strong>
              <span className="text-slate-500 dark:text-slate-400">Đầu mối phản hồi xác nhận tiếp nhận thông tin trong 24h.</span>
            </div>
          </div>

          <div className="flex items-start space-x-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 dark:text-white block">Tuyệt đối cấm trả đũa</strong>
              <span className="text-slate-500 dark:text-slate-400">Nghiêm cấm đè ép, cắt ca, trù dập người phản ánh thiện chí (Điều 44).</span>
            </div>
          </div>

          <div className="flex items-start space-x-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 dark:text-white block">Tránh xung đột lợi ích</strong>
              <span className="text-slate-500 dark:text-slate-400">Quản lý bị phản ánh phải rút khỏi quá trình xử lý vụ việc.</span>
            </div>
          </div>

          <div className="flex items-start space-x-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 dark:text-white block">Bảo mật thông tin</strong>
              <span className="text-slate-500 dark:text-slate-400">Chia sẻ dữ liệu nghiêm ngặt theo nguyên tắc cần-biết.</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
