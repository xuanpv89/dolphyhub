import React, { useState, useMemo } from 'react';
import { 
  Scale, 
  Search, 
  Filter, 
  ShieldAlert, 
  CheckCircle2, 
  AlertTriangle,
  Info,
  HelpCircle,
  Copy,
  Check,
  FileSpreadsheet
} from 'lucide-react';
import { PHU_LUC_A_DATA, CATEGORIES_MAP, SANCTION_BADGES, MisconductItem } from '../data/phuLucAData';

interface MatrixExplorerProps {
  initialSearch?: string;
}

export const MatrixExplorer: React.FC<MatrixExplorerProps> = ({ initialSearch = '' }) => {
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSanction, setSelectedSanction] = useState<string>('all');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const filteredItems = useMemo(() => {
    return PHU_LUC_A_DATA.filter((item) => {
      const matchCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchSanction = selectedSanction === 'all' || item.maxSanction === selectedSanction;
      
      const q = searchTerm.toLowerCase().trim();
      const matchSearch = 
        !q ||
        item.code.toLowerCase().includes(q) ||
        item.behavior.toLowerCase().includes(q) ||
        item.legalBasis.toLowerCase().includes(q) ||
        item.exceptions.toLowerCase().includes(q) ||
        item.categoryName.toLowerCase().includes(q);

      return matchCategory && matchSanction && matchSearch;
    });
  }, [searchTerm, selectedCategory, selectedSanction]);

  const handleCopy = (item: MisconductItem) => {
    navigator.clipboard.writeText(`[${item.code}] ${item.behavior}\nCăn cứ: ${item.legalBasis}\nChế tài tối đa: ${item.maxSanctionFull}\nNgoại lệ: ${item.exceptions}`);
    setCopiedCode(item.code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <section id="matrix" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-[#2076bd] dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
            <Scale className="w-3.5 h-3.5 text-[#2076bd]" />
            <span>DANH MỤC ĐỊNH LƯỢNG PHỤ LỤC A</span>
          </div>
          <h2 className="font-oswald text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-wide uppercase">
            TRA CỨU HÀNH VI & HÌNH THỨC KỶ LUẬT TỐI ĐA
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Phụ lục A xác định giới hạn chế tài tối đa và điều kiện loại trừ vi phạm. Cột "Tối đa" không phải mức phạt mặc định; Công ty luôn cân nhắc hoàn cảnh, thiện chí và nguyên nhân hệ thống.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-4 sm:p-6 rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-sm space-y-4 mb-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Tìm theo mã (TG-01, TS-01), từ khóa (chấm công, vỡ bình)..."
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2076bd]"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  Xóa
                </button>
              )}
            </div>

            {/* Category Dropdown */}
            <div className="md:col-span-3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2076bd]"
              >
                <option value="all">Tất cả nhóm hành vi</option>
                <option value="TG">TG — Thời giờ & Chấm công</option>
                <option value="TT">TT — Trật tự & Vận hành</option>
                <option value="AT">AT — An toàn, PCCC & ATTP</option>
                <option value="UX">UX — Ứng xử & Tôn trọng</option>
                <option value="TS">TS — Tài sản & Tài chính</option>
                <option value="DT">DT — Dữ liệu & Bảo mật</option>
                <option value="HS">HS — Hồ sơ & Xác minh</option>
                <option value="QL">QL — Trách nhiệm Quản lý</option>
                <option value="RP">RP — Tái phạm sau xử lý</option>
              </select>
            </div>

            {/* Sanction Dropdown */}
            <div className="md:col-span-3">
              <select
                value={selectedSanction}
                onChange={(e) => setSelectedSanction(e.target.value)}
                className="w-full px-3 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2076bd]"
              >
                <option value="all">Tất cả mức chế tài</option>
                <option value="K">K — Khiển trách</option>
                <option value="N1">N1 — Kéo dài nâng lương (&lt;=6th)</option>
                <option value="N2">N2 — Cách chức</option>
                <option value="S">S — Sa thải</option>
              </select>
            </div>
          </div>

          {/* Quick Stats Filter Count */}
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pt-1 border-t border-slate-100 dark:border-slate-700">
            <span>
              Tìm thấy <strong className="text-[#2076bd]">{filteredItems.length}</strong> hành vi phù hợp
            </span>
            <div className="flex items-center space-x-2 text-[11px]">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-yellow-400" /> K: Khiển trách
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-orange-500" /> N1: Nâng lương
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-rose-500" /> N2: Cách chức
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-red-600" /> S: Sa thải
              </span>
            </div>
          </div>

        </div>

        {/* Matrix Cards List */}
        <div className="space-y-4">
          {filteredItems.map((item) => {
            const catInfo = CATEGORIES_MAP[item.category] || { name: item.categoryName, color: 'bg-slate-100 text-slate-800' };
            const sancBadge = SANCTION_BADGES[item.maxSanction];

            return (
              <div
                key={item.code}
                className="rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 p-5 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-start justify-between gap-4"
              >
                {/* Left: Code, Category, Behavior, Exceptions */}
                <div className="space-y-3 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-1 rounded-lg font-mono font-bold text-xs bg-slate-900 text-white dark:bg-white dark:text-slate-900">
                      {item.code}
                    </span>
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md border ${catInfo.color}`}>
                      {catInfo.name}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      Căn cứ: <strong className="text-slate-700 dark:text-slate-300">{item.legalBasis}</strong>
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug">
                    {item.behavior}
                  </h3>

                  {/* Exceptions & Conditions box */}
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 space-y-1">
                    <div className="flex items-center space-x-1.5 text-emerald-700 dark:text-emerald-400 font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Điều kiện & Ngoại lệ loại trừ trách nhiệm:</span>
                    </div>
                    <p className="leading-relaxed pl-5 text-slate-600 dark:text-slate-400">
                      {item.exceptions}
                    </p>
                  </div>
                </div>

                {/* Right: Max Sanction Badge & Action */}
                <div className="md:w-64 flex flex-col items-start md:items-end justify-between self-stretch space-y-3 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100 dark:border-slate-700">
                  <div className="text-left md:text-right space-y-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      Hình thức tối đa có thể xem xét:
                    </span>
                    <span className={`inline-block px-3 py-1.5 rounded-xl border text-xs font-bold ${sancBadge.color}`}>
                      {item.maxSanctionFull}
                    </span>
                  </div>

                  <button
                    onClick={() => handleCopy(item)}
                    className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-[#2076bd] text-xs text-slate-600 dark:text-slate-300 hover:text-[#2076bd] transition-colors"
                  >
                    {copiedCode === item.code ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="text-emerald-500 font-medium">Đã sao chép</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Sao chép mã</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}

          {filteredItems.length === 0 && (
            <div className="text-center py-12 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-8 space-y-3">
              <HelpCircle className="w-10 h-10 text-slate-400 mx-auto" />
              <h4 className="text-base font-bold text-slate-800 dark:text-slate-200">
                Không tìm thấy hành vi phù hợp
              </h4>
              <p className="text-xs text-slate-500">
                Hãy thử xóa bộ lọc hoặc tìm kiếm theo từ khóa chung hơn.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedSanction('all');
                }}
                className="px-4 py-2 bg-blue-50 text-[#2076bd] rounded-xl text-xs font-bold hover:bg-blue-100"
              >
                Đặt lại tất cả bộ lọc
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
