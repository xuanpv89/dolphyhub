import React, { useState } from 'react';
import { 
  Coffee, 
  Store, 
  BadgeCheck, 
  Building2, 
  Sprout, 
  ShieldCheck, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Sparkles, 
  ArrowRight,
  BookOpen
} from 'lucide-react';

interface RoleHubProps {
  onOpenArticleByNumber: (num: number) => void;
  onExploreFlashcards: () => void;
  activeRole?: string;
  onSelectRole?: (role: 'barista' | 'cht' | 'qlcl' | 'dho' | 'newbie') => void;
}

export const RoleHub: React.FC<RoleHubProps> = ({ 
  onOpenArticleByNumber, 
  onExploreFlashcards,
  activeRole,
  onSelectRole
}) => {
  const [internalRole, setInternalRole] = useState<'barista' | 'cht' | 'qlcl' | 'dho' | 'newbie'>('barista');
  const selectedRole = (activeRole as 'barista' | 'cht' | 'qlcl' | 'dho' | 'newbie') || internalRole;

  const handleRoleChange = (roleId: 'barista' | 'cht' | 'qlcl' | 'dho' | 'newbie') => {
    if (onSelectRole) {
      onSelectRole(roleId);
    } else {
      setInternalRole(roleId);
    }
  };

  const roles = [
    {
      id: 'barista',
      name: 'Barista & Thu Ngân',
      badge: 'Trái Tim Quầy Bar',
      icon: Coffee,
      color: 'from-blue-600 to-cyan-600',
      tagline: 'Tạo tác từng tách cà phê hạnh phúc với tâm thế an tâm 100%',
      image: './images/top-12-baristas.jpg',
      shifts: 'Ca 1: 06:00/07:00 - 14:00 • Ca 2: 14:00 - 21:00/22:00 (Nghỉ giữa ca 30-45p tính vào giờ làm nếu ca >=6h)',
      rights: [
        'Quyền dừng máy pha La Marzocco lập tức khi thấy rò điện/chập cháy mà không sợ bị phạt (Điều 30)',
        'Quyền dán nhãn HOLD dừng bán sữa/syrup nghi biến chất để bảo vệ khách hàng (Điều 34)',
        'Cấm bắt đền bồi thường cả ca khi lỡ làm rơi vỡ ly tách (Điều 72)',
        'Được bảo vệ 24/7 trước bất kỳ lời nói hoặc hành vi khiếm nhã nào từ khách hàng hay đồng nghiệp (Điều 38)'
      ],
      mustDos: [
        'Mặc đúng đồng phục: tạp dề sạch, bảng tên, quần dài, giày bít mũi bít gót chống trượt',
        'Chấm công trung thực, có mặt sẵn sàng đúng giờ ca trực',
        'Giữ quầy bar sạch sẽ thơm tho theo chuẩn 5S'
      ],
      mustKnowArticles: [14, 15, 22, 30, 34, 72]
    },
    {
      id: 'cht',
      name: 'Cửa Hàng Trưởng (CHT)',
      badge: 'Thuyền Trưởng Chi Nhánh',
      icon: Store,
      color: 'from-amber-600 to-yellow-600',
      tagline: 'Lãnh đạo bằng sự đồng hành, bảo vệ an toàn & truyền lửa cho nhân sự',
      image: './images/store-31-thao-dien-facade.jpg',
      shifts: 'Linh hoạt theo giờ vận hành chi nhánh • Lập & công bố lịch trước ít nhất 07 ngày',
      rights: [
        'Thẩm quyền điều phối nhân sự, xếp ca gãy linh hoạt để bảo đảm phục vụ',
        'Quyền yêu cầu người không phận sự rời khỏi quầy bar và kho nguyên liệu',
        'Được DHO và QLCL hỗ trợ tối đa về pháp lý và kỹ thuật khi có sự cố tại quán'
      ],
      mustDos: [
        'TUYỆT ĐỐI CẤM TỰ ĐẶT TIỀN PHẠT: Vi phạm mã QL-01 sẽ bị cách chức ngay lập tức',
        'Ưu tiên cứu người và an toàn trên hết khi có cháy nổ, sự cố điện nước',
        'Triển khai Kế hoạch khắc phục hành vi 14-30 ngày hỗ trợ nhân viên sửa sai bằng coaching'
      ],
      mustKnowArticles: [10, 13, 32, 40, 65, 81]
    },
    {
      id: 'qlcl',
      name: 'Quản Lý Chất Lượng (QLCL)',
      badge: 'Sứ Giả Chuẩn Vị',
      icon: BadgeCheck,
      color: 'from-emerald-600 to-teal-700',
      tagline: 'Người gác cổng chuẩn mực hạt cà phê mộc & quy chuẩn an toàn thực phẩm',
      image: './images/knowledge-phin-brewing-guide.jpg',
      shifts: 'Theo lịch kiểm chuẩn chi nhánh & xưởng rang • Giám sát đột xuất',
      rights: [
        'Thẩm quyền niêm phong, yêu cầu thu hồi hoặc tiêu hủy lô nguyên liệu không đạt chuẩn',
        'Yêu cầu quầy bar tạm dừng phục vụ món đồ uống cụ thể khi chưa đáp ứng công thức chuẩn',
        'Kiểm tra định kỳ điều kiện vệ sinh máy pha và hạn dùng nguyên liệu'
      ],
      mustDos: [
        'Phân biệt rõ giữa sai sót kỹ thuật thông thường (cần đào tạo lại) và hành vi cố ý vi phạm',
        'Bảo toàn mẫu thử, lưu nhật ký kiểm định rõ ràng để làm việc với nhà cung cấp',
        'Không tự ý bắt nhân viên đền nguyên liệu làm sai công thức trong định mức'
      ],
      mustKnowArticles: [10, 34, 35, 53, 73]
    },
    {
      id: 'dho',
      name: 'Khối Văn Phòng DHO',
      badge: 'Hậu Phương Vững Chắc',
      icon: Building2,
      color: 'from-indigo-600 to-purple-700',
      tagline: 'Kiến tạo chính sách, bảo vệ dữ liệu & hỗ trợ tối đa cho khối cửa hàng',
      image: './images/retail-beans-bakery-display.jpg',
      shifts: '08:00 - 12:00 & 13:00 - 17:00 (Thứ 2 đến Thứ 6, tổng 40 giờ/tuần cơ sở)',
      rights: [
        'Hưởng trọn vẹn ngày nghỉ thứ Bảy & Chủ Nhật và các ngày nghỉ lễ Tết hưởng nguyên lương',
        'Được quyền trao đổi cởi mở về mức lương và chế độ của bản thân mình (Điều 50)',
        'Hưởng 12 ngày phép năm + thưởng 1 ngày phép cứ sau mỗi 5 năm cống hiến'
      ],
      mustDos: [
        'Vận hành chuẩn 2 kênh tiếp nhận phản ánh độc lập theo quyết định DEC-020',
        'Bảo mật tuyệt đối dữ liệu nhân sự và thông tin khách hàng',
        'Giữ nguyên 100% lương 30 ngày đầu khi tạm điều động nhân sự sang chi nhánh khác'
      ],
      mustKnowArticles: [12, 18, 40, 50, 58, 61]
    },
    {
      id: 'newbie',
      name: 'Bạn Mới / Newbie',
      badge: '7 Ngày Đầu Ở Dolphy',
      icon: Sprout,
      color: 'from-teal-500 to-emerald-600',
      tagline: 'Chào bạn mới gia nhập gia đình Cá Heo Xanh! Mọi thứ đều rất dễ thương và an toàn!',
      image: './images/mobile-coffee-school-event.jpg',
      shifts: 'Làm quen nhịp ca, kèm 1-1 cùng Trainer & Barista đàn anh',
      rights: [
        'KHÔNG PHẢI ĐÓNG CỌC ĐÀO TẠO: Bãi bỏ toàn bộ tiền cọc và không giữ bằng cấp/CCCD gốc',
        'Được Trainer hướng dẫn tận tình từng thao tác nén tamp, đánh bọt sữa micro-foam',
        'Có quyền hỏi mọi thắc mắc mà không sợ bị chê bai hay đánh giá'
      ],
      mustDos: [
        'Giữ nụ cười và năng lượng tích cực "Happiness in a cup"',
        'Chủ động báo ngay khi chưa hiểu quy trình hoặc thấy điều kiện chưa an toàn',
        'Đọc cẩm nang Dolphy Compass bỏ túi này mỗi ngày để tự tin đứng quầy!'
      ],
      mustKnowArticles: [1, 6, 9, 14, 22, 38]
    }
  ];

  const current = roles.find((r) => r.id === selectedRole) || roles[0];
  const CurrentIcon = current.icon;

  return (
    <section id="role-hub" className="py-16 bg-gradient-to-b from-blue-50/50 via-white to-slate-50/60 dark:from-slate-900/60 dark:via-slate-900 dark:to-slate-900/80 border-b border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-[#2076bd] dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#2076bd]" />
            <span>NHÁNH RIÊNG BIỆT THEO VAI TRÒ</span>
          </div>
          <h2 className="font-oswald text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-wide uppercase">
            TRẠM KHÔNG GIAN 5 VAI TRÒ TẠI DOLPHY
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Chọn đúng vị trí của bạn để kích hoạt không gian thông tin tùy biến, xem giờ ca làm, quyền lợi riêng và bí kíp thực chiến:
          </p>
        </div>

        {/* 5 Role Switcher Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {roles.map((r) => {
            const Icon = r.icon;
            const isSelected = selectedRole === r.id;

            return (
              <button
                key={r.id}
                onClick={() => handleRoleChange(r.id as typeof selectedRole)}
                className={`p-3.5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between space-y-2 relative overflow-hidden ${
                  isSelected
                    ? 'bg-[#2076bd] text-white border-blue-400 shadow-lg shadow-blue-600/25 ring-2 ring-blue-400/30 scale-102'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-[#2076bd] hover:bg-blue-50/50 dark:hover:bg-slate-700/50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${isSelected ? 'bg-white/20 text-[#FAEA28]' : 'bg-blue-50 dark:bg-slate-700 text-[#2076bd]'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-[#FAEA28] animate-ping" />
                  )}
                </div>

                <div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider block ${isSelected ? 'text-blue-100' : 'text-slate-400'}`}>
                    {r.badge}
                  </span>
                  <span className="font-oswald text-sm font-bold block leading-tight">
                    {r.name}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Role Workspace Card */}
        <div className="rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-xl overflow-hidden animate-fadeIn">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
            
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              
              <div className="space-y-2">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950 text-[#2076bd] dark:text-blue-300 text-xs font-bold">
                  <CurrentIcon className="w-3.5 h-3.5" />
                  <span>Không gian làm việc: {current.name}</span>
                </div>
                
                <h3 className="font-oswald text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white leading-tight">
                  {current.tagline}
                </h3>
              </div>

              {/* Shift Hours info */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-start space-x-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <Clock className="w-5 h-5 text-[#2076bd] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white block font-oswald text-sm">
                    Khung Giờ Ca Làm & Chế Độ Nghỉ:
                  </strong>
                  <span>{current.shifts}</span>
                </div>
              </div>

              {/* 4 Super Rights */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  Quyền lợi được bảo vệ tối thượng dành cho bạn:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {current.rights.map((rText, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/40 text-xs text-slate-800 dark:text-slate-200 flex items-start space-x-2 font-medium"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{rText}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Must-dos */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#2076bd]" />
                  3 điều vàng cần nhớ khi vào ca:
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                  {current.mustDos.map((dText, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-[#2076bd] font-bold">✓</span>
                      <span>{dText}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Jump Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-slate-400 mr-1">Điều luật cần xem:</span>
                {current.mustKnowArticles.map((num) => (
                  <button
                    key={num}
                    onClick={() => onOpenArticleByNumber(num)}
                    className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-700 hover:bg-[#2076bd] hover:text-white border border-slate-200 dark:border-slate-600 text-xs font-bold text-[#2076bd] dark:text-blue-300 transition-colors"
                  >
                    Điều {num}
                  </button>
                ))}

                <button
                  onClick={onExploreFlashcards}
                  className="ml-auto px-4 py-2 rounded-xl bg-[#FAEA28] hover:bg-[#e6d620] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center space-x-1.5 shadow-sm"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Xem Bí Kíp 3 Giây</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

            {/* Right Photo Preview (4 cols) */}
            <div className="lg:col-span-4">
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-xl border border-slate-200 dark:border-slate-700 group">
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent p-5 flex flex-col justify-end text-white">
                  <span className="text-xs font-bold text-[#FAEA28] uppercase tracking-wider font-oswald">
                    {current.badge}
                  </span>
                  <h4 className="font-oswald text-xl font-bold leading-tight">
                    {current.name}
                  </h4>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                    {current.tagline}
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
