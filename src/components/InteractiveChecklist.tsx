import React, { useState, useEffect } from 'react';
import { CheckSquare, Square, Coffee, Moon, Sun, CheckCircle2, RotateCcw, Sparkles } from 'lucide-react';

interface ChecklistItem {
  id: string;
  text: string;
  category: 'open' | 'close';
  articleRef: string;
}

export const InteractiveChecklist: React.FC = () => {
  const [activeShift, setActiveShift] = useState<'open' | 'close'>('open');
  const [checkedIds, setCheckedIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('dolphy_checklist');
    return saved ? JSON.parse(saved) : [];
  });

  const items: ChecklistItem[] = [
    // Mở ca
    { id: 'op-1', text: 'Chấm công trung thực bằng máy hoặc vân tay tại cửa hàng', category: 'open', articleRef: 'Điều 14' },
    { id: 'op-2', text: 'Trang phục chuẩn mực: Tạp dề sạch, bảng tên, giày bít mũi bít gót an toàn', category: 'open', articleRef: 'Điều 22' },
    { id: 'op-3', text: 'Bật máy pha La Marzocco, kiểm tra áp suất hơi (1.3 - 1.5 bar) & rơ-le an toàn', category: 'open', articleRef: 'Điều 30 & 31' },
    { id: 'op-4', text: 'Xả sạch họng group-head, xả vòi hơi trước khi bắt đầu pha chế', category: 'open', articleRef: 'Điều 21' },
    { id: 'op-5', text: 'Kiểm tra hạn sử dụng & nhiệt độ tủ mát bảo quản sữa tươi thanh trùng (< 5°C)', category: 'open', articleRef: 'Điều 34' },
    { id: 'op-6', text: 'Pha và thử nếm shot Espresso đầu ngày (Dial-in chuẩn vị hạt mộc Dolphy)', category: 'open', articleRef: 'Điều 7 & QLCL' },

    // Đóng ca
    { id: 'cl-1', text: 'Vệ sinh họng pha bằng phin mù (blind basket) & thuốc vệ sinh chuyên dụng', category: 'close', articleRef: 'Điều 27' },
    { id: 'cl-2', text: 'Xả sạch và ngâm lau vòi hơi đánh sữa bằng khăn ẩm chuyên biệt', category: 'close', articleRef: 'Điều 34' },
    { id: 'cl-3', text: 'Đổ bã cà phê, cọ rửa khay thoát nước, lau khô ráo quầy bar theo chuẩn 5S', category: 'close', articleRef: 'Điều 21 & 27' },
    { id: 'cl-4', text: 'Đậy kín hộp hạt máy xay, bảo quản nguyên liệu thừa vào tủ lạnh theo quy định', category: 'close', articleRef: 'Điều 34' },
    { id: 'cl-5', text: 'Ngắt nguồn điện các thiết bị gia nhiệt, kiểm tra an toàn PCCC & khóa cửa kho', category: 'close', articleRef: 'Điều 33 & 48' },
    { id: 'cl-6', text: 'Bàn giao ca trung thực cho CHT, kiểm tra giờ làm và chấm công kết thúc ca', category: 'close', articleRef: 'Điều 7 & 14' },
  ];

  const currentItems = items.filter((item) => item.category === activeShift);
  const currentCheckedCount = currentItems.filter((i) => checkedIds.includes(i.id)).length;
  const isAllDone = currentCheckedCount === currentItems.length && currentItems.length > 0;

  const toggleCheck = (id: string) => {
    setCheckedIds((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      localStorage.setItem('dolphy_checklist', JSON.stringify(next));
      return next;
    });
  };

  const handleReset = () => {
    const remaining = checkedIds.filter((id) => !currentItems.some((i) => i.id === id));
    setCheckedIds(remaining);
    localStorage.setItem('dolphy_checklist', JSON.stringify(remaining));
  };

  return (
    <section id="checklist" className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <CheckSquare className="w-3.5 h-3.5 text-emerald-600" />
            <span>SỔ TAY THỰC HÀNH TẠI CHỖ</span>
          </div>
          <h2 className="font-oswald text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-wide uppercase">
            CHECKLIST BỎ TÚI MỞ CA & ĐÓNG CA
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Chạm để tích vào từng việc trước khi bắt đầu ca hoặc khi bàn giao ca để an tâm vận hành quầy bar chuẩn chỉnh:
          </p>
        </div>

        {/* Shift Tabs */}
        <div className="flex items-center justify-center space-x-3">
          <button
            onClick={() => setActiveShift('open')}
            className={`flex items-center space-x-2 px-5 py-2.5 rounded-2xl font-bold text-xs sm:text-sm tracking-wide transition-all shadow-sm ${
              activeShift === 'open'
                ? 'bg-amber-500 text-white shadow-md ring-2 ring-amber-400/30'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 border border-slate-200 dark:border-slate-700'
            }`}
          >
            <Sun className="w-4 h-4" />
            <span>Checklist Mở Ca (Ca 1 / Sáng)</span>
          </button>

          <button
            onClick={() => setActiveShift('close')}
            className={`flex items-center space-x-2 px-5 py-2.5 rounded-2xl font-bold text-xs sm:text-sm tracking-wide transition-all shadow-sm ${
              activeShift === 'close'
                ? 'bg-[#2076bd] text-white shadow-md ring-2 ring-blue-500/30'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 border border-slate-200 dark:border-slate-700'
            }`}
          >
            <Moon className="w-4 h-4" />
            <span>Checklist Đóng Ca (Ca 2 / Tối)</span>
          </button>
        </div>

        {/* Checklist Container */}
        <div className="rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 p-6 sm:p-8 shadow-xl space-y-6">
          
          {/* Progress Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-700 text-xs">
            <div className="space-y-0.5">
              <span className="font-bold text-slate-700 dark:text-slate-300">
                Tiến độ ca trực: <strong>{currentCheckedCount} / {currentItems.length} việc</strong>
              </span>
              <div className="w-36 h-2 rounded-full bg-slate-100 dark:bg-slate-700 overflow-hidden mt-1">
                <div
                  className="h-full bg-emerald-500 transition-all duration-300"
                  style={{ width: `${(currentCheckedCount / currentItems.length) * 100}%` }}
                />
              </div>
            </div>

            <button
              onClick={handleReset}
              className="inline-flex items-center space-x-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xs transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Làm mới danh sách</span>
            </button>
          </div>

          {/* Items */}
          <div className="space-y-3">
            {currentItems.map((item) => {
              const isChecked = checkedIds.includes(item.id);

              return (
                <div
                  key={item.id}
                  onClick={() => toggleCheck(item.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between select-none ${
                    isChecked
                      ? 'bg-emerald-50/70 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800/60 text-slate-600 dark:text-slate-400'
                      : 'bg-slate-50/50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 hover:border-[#2076bd] text-slate-800 dark:text-slate-200'
                  }`}
                >
                  <div className="flex items-center space-x-3.5">
                    {isChecked ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    ) : (
                      <div className="w-5 h-5 rounded-md border-2 border-slate-300 dark:border-slate-600 flex-shrink-0" />
                    )}
                    <span className={`text-xs sm:text-sm font-medium ${isChecked ? 'line-through opacity-70' : ''}`}>
                      {item.text}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono font-bold text-slate-400 bg-white dark:bg-slate-700 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-600 flex-shrink-0 ml-2">
                    {item.articleRef}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Congratulations when finished */}
          {isAllDone && (
            <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg flex items-center justify-between animate-fadeIn">
              <div className="flex items-center space-x-3">
                <Sparkles className="w-6 h-6 text-[#FAEA28] animate-bounce" />
                <div>
                  <h4 className="font-oswald font-bold text-sm sm:text-base">
                    XUẤT SẮC! CA TRỰC ĐÃ SẴN SÀNG 100%
                  </h4>
                  <p className="text-xs text-emerald-100">
                    Bạn đã thực hiện chuẩn mực toàn bộ quy chuẩn an toàn & 5S của Dolphy Café!
                  </p>
                </div>
              </div>
              <span className="text-2xl">☕✨</span>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
