import React, { useState } from 'react';
import { X, Shield, Lock, Send, CheckCircle2, User, Phone, Mail, FileQuestion, AlertTriangle } from 'lucide-react';

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReportModal: React.FC<ReportModalProps> = ({ isOpen, onClose }) => {
  const [channel, setChannel] = useState<'HR' | 'INDEPENDENT'>('INDEPENDENT');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [category, setCategory] = useState('tu_van');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [content, setContent] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    // Generate random Ticket ID
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    const code = channel === 'INDEPENDENT' ? `DEC020-${randomNum}` : `HR-${randomNum}`;
    setTicketId(code);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setContact('');
    setContent('');
    setIsAnonymous(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#FAEA28]">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-semibold text-[#FAEA28] uppercase tracking-wider">
                Quyết Định DEC-020 • Bảo Mật 100%
              </span>
              <h3 className="text-lg font-bold font-oswald tracking-wide">
                CỔNG TIẾP NHẬN PHẢN ÁNH & HỖ TRỢ NỘI BỘ
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white font-oswald">
                ĐÃ TIẾP NHẬN PHẢN ÁNH THÀNH CÔNG!
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                Mã tra cứu bảo mật của bạn: <strong className="text-[#2076bd] font-mono text-base px-2 py-0.5 bg-blue-50 dark:bg-blue-950 rounded border border-blue-200">{ticketId}</strong>.
              </p>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-left text-xs text-slate-600 dark:text-slate-400 space-y-2">
                <div className="flex items-center text-emerald-600 dark:text-emerald-400 font-semibold gap-1.5">
                  <Lock className="w-4 h-4" />
                  Cam kết bảo vệ tuyệt đối:
                </div>
                <p>• Xác nhận tiếp nhận trong vòng <strong>01 ngày làm việc</strong>.</p>
                <p>• Đánh giá nguy cơ khẩn cấp và bảo vệ an toàn trong <strong>24 giờ</strong>.</p>
                <p>• Nghiêm cấm mọi hành vi trù dập hoặc trả đũa theo Điều 44 DOL-HR-001.</p>
              </div>
              <button
                onClick={handleReset}
                className="mt-4 px-6 py-2.5 bg-[#2076bd] text-white font-medium rounded-xl hover:bg-[#165b94] transition-colors shadow-md"
              >
                Hoàn tất & Đóng
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Channel Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  1. Chọn kênh tiếp nhận phản ánh (DEC-020):
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setChannel('INDEPENDENT')}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      channel === 'INDEPENDENT'
                        ? 'border-[#2076bd] bg-blue-50/80 dark:bg-blue-950/50 text-[#2076bd] ring-2 ring-[#2076bd]/20'
                        : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-sm">Đầu Mối Độc Lập</span>
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#FAEA28] text-slate-900">CEO Chỉ Định</span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Chuyên trách: Quấy rối, bắt nạt, lạm quyền, xung đột lợi ích CHT.
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setChannel('HR')}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      channel === 'HR'
                        ? 'border-[#2076bd] bg-blue-50/80 dark:bg-blue-950/50 text-[#2076bd] ring-2 ring-[#2076bd]/20'
                        : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-sm">HR/People DHO</span>
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200">Hành Chính</span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Chuyên trách: Thắc mắc lương, ca làm, phép năm, điều chuyển, bảo hiểm.
                    </p>
                  </button>
                </div>
              </div>

              {/* Mode Toggle: Anonymous vs Named */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center space-x-2">
                  <Lock className="w-4 h-4 text-emerald-600" />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                    Chế độ gửi ẩn danh (Anonymous):
                  </span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isAnonymous}
                    onChange={(e) => setIsAnonymous(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2076bd]"></div>
                </label>
              </div>

              {/* Name and Contact (if not anonymous) */}
              {!isAnonymous && (
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">
                      Họ và tên của bạn:
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="VD: Nguyễn Văn A (Barista Thảo Điền)"
                      className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2076bd]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">
                      Số điện thoại / Zalo để nhận phản hồi:
                    </label>
                    <input
                      type="text"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      placeholder="09xx xxx xxx"
                      className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2076bd]"
                    />
                  </div>
                </div>
              )}

              {/* Category */}
              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">
                  Chủ đề phản ánh:
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2076bd]"
                >
                  <option value="tu_van">Hỏi đáp / Tư vấn về quyền lợi & Điều khoản Nội quy</option>
                  <option value="quay_roi">Báo cáo hành vi có dấu hiệu quấy rối tình dục / bắt nạt</option>
                  <option value="tien_phat">Phản ánh việc quản lý tự đặt tiền phạt / trừ lương trái phép</option>
                  <option value="an_toan">Báo cáo nguy cơ mất an toàn lao động / máy móc rò điện / PCCC</option>
                  <option value="at_thuc_pham">Báo cáo nguy cơ mất an toàn vệ sinh thực phẩm</option>
                  <option value="khac">Vấn đề nội bộ khác</option>
                </select>
              </div>

              {/* Content text */}
              <div>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">
                  Nội dung chi tiết vụ việc: <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Mô tả cụ thể thời gian, địa điểm, sự việc đã xảy ra hoặc thắc mắc của bạn..."
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2076bd]"
                ></textarea>
              </div>

              {/* Disclaimer */}
              <div className="flex items-start space-x-2 text-[11px] text-slate-500 dark:text-slate-400 bg-amber-50/50 dark:bg-amber-950/30 p-2.5 rounded-lg border border-amber-200/50">
                <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <span>
                  Mọi phản ánh thiện chí được bảo vệ 100%. Thông tin chỉ được xem bởi nhân sự chuyên trách không có xung đột lợi ích.
                </span>
              </div>

              <div className="flex items-center justify-end space-x-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                >
                  Hủy bỏ
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#2076bd] hover:bg-[#165b94] text-white font-medium text-sm rounded-xl transition-all shadow-md flex items-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Gửi Phản Ánh Bảo Mật</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
