import React from 'react';
import { Coffee, Phone, Mail, MapPin, Heart, Shield, FileText } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/images/dolphy-emblem.png"
                alt="Dolphy Logo"
                className="w-10 h-10 rounded-full object-contain bg-white p-1"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div>
                <span className="font-oswald text-xl font-bold tracking-wider text-white">
                  DOLPHY CAFÉ®
                </span>
                <span className="block text-[10px] text-[#FAEA28] uppercase tracking-widest font-semibold">
                  happiness in a cup • since 2013
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Công ty Cổ phần Cá Heo Xanh (Blue Dolphin) — Hệ thống chuỗi 10+ chi nhánh cà phê mộc nguyên chất và Học viện Đào tạo Barista Thực chiến tại TP. Hồ Chí Minh.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-2">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#FAEA28] flex-shrink-0 mt-0.5" />
                <span>28 Trần Lựu, P. An Khánh, TP. Thủ Đức, TP.HCM</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#FAEA28] flex-shrink-0" />
                <span>Hotline DHO: <strong>0938 084 985</strong></span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#FAEA28] flex-shrink-0" />
                <span>contact@dolphycafe.com</span>
              </div>
            </div>
          </div>

          {/* Col 2: Hệ Thống Văn Bản Tầng */}
          <div className="space-y-3">
            <h4 className="font-oswald text-sm font-bold text-white tracking-wider uppercase">
              Kiến Trúc Văn Bản Dolphy
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FAEA28]" />
                <span>Tầng 1: Hiến Chương Văn Hóa Dolphy</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2076bd]" />
                <span className="text-white font-medium">Tầng 2: Nội Quy Lao Động (DOL-HR-001)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                <span>Tầng 3: Quy định theo vai trò (DOL-BAR / DOL-MGT)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                <span>Tầng 3: Chính sách Tuân thủ (DOL-PERF-001)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                <span>Tầng 4–5: SOP Pha chế & Checklist quầy bar</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Quyền Lợi Cốt Lõi */}
          <div className="space-y-3">
            <h4 className="font-oswald text-sm font-bold text-white tracking-wider uppercase">
              Cam Kết Nhân Sự 2026
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>✓ Tuyệt đối không phạt tiền, không trừ lương</li>
              <li>✓ Quyền dừng công việc không an toàn (Điều 30)</li>
              <li>✓ Quyền dừng phục vụ thực phẩm lỗi (Điều 34)</li>
              <li>✓ Bảo lưu 100% lương 30 ngày đầu khi chuyển việc</li>
              <li>✓ Không thu tiền cọc đào tạo, không giữ giấy tờ gốc</li>
              <li>✓ 02 Kênh tiếp nhận độc lập chống quấy rối (DEC-020)</li>
            </ul>
          </div>

          {/* Col 4: Pháp Lý & Tải Về */}
          <div className="space-y-3">
            <h4 className="font-oswald text-sm font-bold text-white tracking-wider uppercase">
              Hồ Sơ Dự Thảo v1.0
            </h4>
            <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-xs text-slate-400 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-white font-semibold">DOL-HR-001</span>
                <span className="px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-400 font-bold text-[10px]">v1.0 DRAFT</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Người phê duyệt: <strong>Phạm Duy Linh — CEO</strong> (Chốt DEC-027 ngày 14/08/2026). Đang trong giai đoạn tham vấn và đăng ký cơ quan quản lý.
              </p>
            </div>
            <div className="text-[11px] text-slate-500">
              Bản quyền © 2013 - 2026 Dolphy Café & Công ty Cổ phần Cá Heo Xanh.
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            Dự án truyền thông nội bộ số hóa văn bản pháp lý — Phát triển vì một môi trường làm việc hạnh phúc & tôn trọng nhân phẩm tại Dolphy.
          </p>
          <div className="flex items-center space-x-1 text-slate-400">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>for Dolphy Coffee Ecosystem</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
