export interface MisconductItem {
  code: string;
  category: 'TG' | 'TT' | 'AT' | 'UX' | 'TS' | 'DT' | 'HS' | 'QL' | 'RP';
  categoryName: string;
  behavior: string;
  legalBasis: string;
  exceptions: string;
  maxSanction: 'K' | 'N1' | 'N2' | 'S';
  maxSanctionFull: string;
  riskLevel: 'Thấp' | 'Trung bình' | 'Cao' | 'Nghiêm trọng';
}

export const CATEGORIES_MAP = {
  TG: { name: 'Thời Giờ & Chấm Công', color: 'bg-blue-100 text-blue-800 border-blue-300 dark:bg-blue-900/40 dark:text-blue-300' },
  TT: { name: 'Trật Tự & Vận Hành', color: 'bg-emerald-100 text-emerald-800 border-emerald-300 dark:bg-emerald-900/40 dark:text-emerald-300' },
  AT: { name: 'An Toàn, PCCC & ATTP', color: 'bg-amber-100 text-amber-800 border-amber-300 dark:bg-amber-900/40 dark:text-amber-300' },
  UX: { name: 'Ứng Xử & Tôn Trọng', color: 'bg-purple-100 text-purple-800 border-purple-300 dark:bg-purple-900/40 dark:text-purple-300' },
  TS: { name: 'Tài Sản & Tài Chính', color: 'bg-orange-100 text-orange-800 border-orange-300 dark:bg-orange-900/40 dark:text-orange-300' },
  DT: { name: 'Dữ Liệu & Bảo Mật', color: 'bg-indigo-100 text-indigo-800 border-indigo-300 dark:bg-indigo-900/40 dark:text-indigo-300' },
  HS: { name: 'Hồ Sơ & Xác Minh', color: 'bg-teal-100 text-teal-800 border-teal-300 dark:bg-teal-900/40 dark:text-teal-300' },
  QL: { name: 'Trách Nhiệm Quản Lý', color: 'bg-rose-100 text-rose-800 border-rose-300 dark:bg-rose-900/40 dark:text-rose-300' },
  RP: { name: 'Tái Phạm Sau Xử Lý', color: 'bg-red-100 text-red-800 border-red-300 dark:bg-red-900/40 dark:text-red-300' },
};

export const SANCTION_BADGES = {
  K: { label: 'K — Khiển trách', color: 'bg-yellow-100 text-yellow-800 border-yellow-400 dark:bg-yellow-900/40 dark:text-yellow-300' },
  N1: { label: 'N1 — Kéo dài nâng lương (<=6th)', color: 'bg-orange-100 text-orange-800 border-orange-400 dark:bg-orange-900/40 dark:text-orange-300' },
  N2: { label: 'N2 — Cách chức', color: 'bg-rose-100 text-rose-800 border-rose-400 dark:bg-rose-900/40 dark:text-rose-300' },
  S: { label: 'S — Sa thải', color: 'bg-red-200 text-red-900 border-red-500 font-bold dark:bg-red-950 dark:text-red-200' },
};

export const PHU_LUC_A_DATA: MisconductItem[] = [
  // Nhóm TG - Thời Giờ
  {
    code: 'TG-01',
    category: 'TG',
    categoryName: 'Thời Giờ & Chấm Công',
    behavior: 'Cố ý chấm công thay, nhờ chấm công hộ, dùng tài khoản/người khác để ghi nhận thời gian không đúng thực tế hoặc sửa dữ liệu chấm công trái quyền',
    legalBasis: 'Điều 7, 14, 51',
    exceptions: 'Phải chứng minh tính cố ý gian lận; lỗi thiết bị máy chấm công hoặc nhập liệu nhầm lẫn được xử lý theo luồng sai sót nghiệp vụ, coaching sửa lỗi',
    maxSanction: 'N1',
    maxSanctionFull: 'Kéo dài nâng lương (N1); Cách chức (N2) nếu lạm dụng chức vụ',
    riskLevel: 'Trung bình'
  },
  {
    code: 'TG-02',
    category: 'TG',
    categoryName: 'Thời Giờ & Chấm Công',
    behavior: 'Tự ý rời vị trí, bỏ ca hoặc không có mặt theo lịch đã nhận mà chưa đạt ngưỡng sa thải',
    legalBasis: 'Điều 7, 13, 14, 20',
    exceptions: 'Loại trừ nghỉ hợp pháp, tình huống khẩn cấp cá nhân, lịch chưa thông báo đúng 7 ngày hoặc không thể báo trước vì lý do bất khả kháng chính đáng',
    maxSanction: 'K',
    maxSanctionFull: 'Khiển trách (K); N1 nếu lặp lại nhiều lần gây gián đoạn vận hành nghiêm trọng',
    riskLevel: 'Thấp'
  },
  {
    code: 'TG-03',
    category: 'TG',
    categoryName: 'Thời Giờ & Chấm Công',
    behavior: 'Cố ý đổi ca, tự ý bố trí làm thêm hoặc thay đổi lịch trái thẩm quyền sau khi đã được giải thích/nhắc dừng',
    legalBasis: 'Điều 13, 16',
    exceptions: 'Không áp dụng cho các sai sót thiện chí trong việc điều phối nhân sự cửa hàng đã được khắc phục kịp thời',
    maxSanction: 'K',
    maxSanctionFull: 'Khiển trách (K); Cách chức (N2) nếu quản lý lạm dụng chức vụ',
    riskLevel: 'Trung bình'
  },
  {
    code: 'TG-04',
    category: 'TG',
    categoryName: 'Thời Giờ & Chấm Công',
    behavior: 'Không tham gia họp, đào tạo hoặc khảo sát bắt buộc trong thời giờ làm việc sau khi được thông báo đúng, không có lý do chính đáng',
    legalBasis: 'Điều 28',
    exceptions: 'Không kỷ luật vì lý do không có tài khoản mạng xã hội cá nhân hoặc các hoạt động ngoài giờ làm việc chưa được thỏa thuận và ghi nhận trả lương',
    maxSanction: 'K',
    maxSanctionFull: 'Khiển trách (K)',
    riskLevel: 'Thấp'
  },
  {
    code: 'TG-S01',
    category: 'TG',
    categoryName: 'Thời Giờ & Chấm Công',
    behavior: 'Tự ý bỏ việc 05 ngày làm việc cộng dồn trong 30 ngày hoặc 20 ngày làm việc cộng dồn trong 365 ngày tính từ ngày đầu tiên, không có lý do chính đáng',
    legalBasis: 'Điều 20, Bộ luật Lao động Điều 125',
    exceptions: 'Phải đối soát từng ngày, lịch đã gửi, khả năng liên lạc và các lý do chính đáng: thiên tai, hỏa hoạn, bản thân/thân nhân ốm nặng có chứng từ y tế, cấp cứu, tang lễ',
    maxSanction: 'S',
    maxSanctionFull: 'Sa thải (S)',
    riskLevel: 'Nghiêm trọng'
  },

  // Nhóm TT - Trật Tự & Vận Hành
  {
    code: 'TT-01',
    category: 'TT',
    categoryName: 'Trật Tự & Vận Hành',
    behavior: 'Cố ý vào/cho người không có thẩm quyền vào khu vực hạn chế (quầy bar, kho, két sắt), hoặc rời khu vực kiểm soát trái quy định sau khi đã được thông báo',
    legalBasis: 'Điều 21, 23',
    exceptions: 'Loại trừ tình huống ứng phó khẩn cấp, cứu người, mệnh lệnh cấp trên hợp pháp hoặc nhầm lẫn biển báo nhận diện khu vực',
    maxSanction: 'K',
    maxSanctionFull: 'Khiển trách (K); N1/N2 nếu tạo nguy cơ thất thoát đáng kể hoặc lạm dụng quyền',
    riskLevel: 'Trung bình'
  },
  {
    code: 'TT-02',
    category: 'TT',
    categoryName: 'Trật Tự & Vận Hành',
    behavior: 'Cố ý không thực hiện chỉ thị công việc hợp pháp, rõ ràng, thuộc phạm vi quản lý và bảo đảm an toàn sau khi đã được giải thích/có cơ hội phản hồi',
    legalBasis: 'Điều 7, 10, 63',
    exceptions: 'KHÔNG ÁP DỤNG cho chỉ thị trái luật, ngoài thẩm quyền, không an toàn, lệnh tạm chuyển vượt quá 60 ngày không có đồng ý bằng văn bản, hoặc nội dung chưa rõ ràng',
    maxSanction: 'K',
    maxSanctionFull: 'Khiển trách (K); N1 nếu lặp lại gây gián đoạn nghiêm trọng',
    riskLevel: 'Trung bình'
  },
  {
    code: 'TT-03',
    category: 'TT',
    categoryName: 'Trật Tự & Vận Hành',
    behavior: 'Sử dụng rượu bia/chất gây ảnh hưởng trong thời giờ làm việc hoặc tại vị trí cấm, hoặc hút thuốc ở nơi/thời điểm cấm sau khi đã được thông báo',
    legalBasis: 'Điều 26',
    exceptions: 'Phải đánh giá mức độ ảnh hưởng thực tế và nội quy địa điểm; việc sử dụng thuốc điều trị hợp pháp có đơn thuốc của bác sĩ không tự động vi phạm',
    maxSanction: 'K',
    maxSanctionFull: 'Khiển trách (K); N1 nếu gây nguy cơ an toàn hoặc cháy nổ đáng kể',
    riskLevel: 'Trung bình'
  },
  {
    code: 'TT-04',
    category: 'TT',
    categoryName: 'Trật Tự & Vận Hành',
    behavior: 'Cố ý gây tiếng ồn, ăn uống, xả rác hoặc làm mất trật tự/vệ sinh sau khi được yêu cầu hợp pháp khắc phục nhưng tiếp tục cố tình không thực hiện',
    legalBasis: 'Điều 21, 26, 27',
    exceptions: 'Sai sót vệ sinh lần đầu được nhắc nhở, hướng dẫn và khắc phục theo 5S; tuyệt đối không kỷ luật tập thể theo ca',
    maxSanction: 'K',
    maxSanctionFull: 'Khiển trách (K)',
    riskLevel: 'Thấp'
  },

  // Nhóm AT - An Toàn, PCCC & ATTP
  {
    code: 'AT-01',
    category: 'AT',
    categoryName: 'An Toàn, PCCC & ATTP',
    behavior: 'Cố ý không dùng phương tiện bảo vệ cá nhân (PPE), vượt rào chắn an toàn, tự ý vận hành thiết bị/hóa chất khi chưa được đào tạo hoặc vi phạm hướng dẫn an toàn',
    legalBasis: 'Điều 30, 31, 33',
    exceptions: 'Loại trừ trường hợp Công ty chưa cấp đủ PPE, chưa đào tạo, thiết bị hỏng cảm biến hoặc có chỉ dẫn mâu thuẫn từ quản lý chưa được giải quyết',
    maxSanction: 'K',
    maxSanctionFull: 'Khiển trách (K); N1/N2 nếu tái phạm hoặc gây nguy cơ mất an toàn nghiêm trọng',
    riskLevel: 'Trung bình'
  },
  {
    code: 'AT-02',
    category: 'AT',
    categoryName: 'An Toàn, PCCC & ATTP',
    behavior: 'Vô hiệu hóa, che khuất, tháo gỡ hoặc can thiệp trái phép thiết bị PCCC, chuông báo động, rơ-le an toàn máy pha hoặc hệ thống cô lập sự cố',
    legalBasis: 'Điều 31, 33',
    exceptions: 'Hành động cứu người, ngắt điện khẩn cấp hoặc bảo vệ tính mạng trong tình thế cấp bách được loại trừ',
    maxSanction: 'N1',
    maxSanctionFull: 'Kéo dài nâng lương (N1); Cách chức (N2) nếu lạm dụng chức vụ; Sa thải (S) nếu thiệt hại lớn đạt TS-S04',
    riskLevel: 'Cao'
  },
  {
    code: 'AT-03',
    category: 'AT',
    categoryName: 'An Toàn, PCCC & ATTP',
    behavior: 'Cố ý đưa nguyên liệu/sản phẩm đang hold (nghi hỏng/quá hạn), không an toàn vào pha chế phục vụ khách; làm giả tem nhãn, tình trạng kiểm soát ATTP',
    legalBasis: 'Điều 34, 35',
    exceptions: 'Phải chứng minh người đó biết rõ tình trạng rủi ro và cố ý vi phạm; lỗi nghiệp vụ thiện chí được đào tạo khắc phục',
    maxSanction: 'N1',
    maxSanctionFull: 'Kéo dài nâng lương (N1); Cách chức (N2); Sa thải (S) nếu gây ngộ độc tập thể hoặc đạt TS-S04',
    riskLevel: 'Cao'
  },
  {
    code: 'AT-04',
    category: 'AT',
    categoryName: 'An Toàn, PCCC & ATTP',
    behavior: 'Cố ý không báo hoặc che giấu tai nạn, chập điện cháy, sự cố mất an toàn thực phẩm nghiêm trọng mà mình biết và có nghĩa vụ báo, làm tăng đáng kể thiệt hại',
    legalBasis: 'Điều 36, 37',
    exceptions: 'Không xử lý vì báo chậm khi nhân viên đang tập trung cứu người, chữa cháy ban đầu hoặc trong tình trạng mất liên lạc',
    maxSanction: 'N1',
    maxSanctionFull: 'Kéo dài nâng lương (N1); Cách chức (N2) nếu cấp quản lý cố ý chỉ đạo giấu giếm',
    riskLevel: 'Cao'
  },

  // Nhóm UX - Ứng Xử & Tôn Trọng
  {
    code: 'UX-01',
    category: 'UX',
    categoryName: 'Ứng Xử & Tôn Trọng',
    behavior: 'Xúc phạm danh dự, đe dọa, bắt nạt, phân biệt đối xử hoặc quấy rối không mang tính tình dục đối với đồng nghiệp, khách hàng hoặc đối tác',
    legalBasis: 'Điều 5, 24',
    exceptions: 'Đánh giá bối cảnh, tần suất và mức độ; việc góp ý chuyên môn thẳng thắn, mang tính xây dựng và tôn trọng KHÔNG PHẢI là hành vi xúc phạm',
    maxSanction: 'K',
    maxSanctionFull: 'Khiển trách (K); N1/N2 nếu nghiêm trọng, tái phạm nhiều lần hoặc lạm dụng chức vụ',
    riskLevel: 'Trung bình'
  },
  {
    code: 'UX-02',
    category: 'UX',
    categoryName: 'Ứng Xử & Tôn Trọng',
    behavior: 'Cố ý gây thương tích hoặc sử dụng bạo lực đối với người khác tại nơi làm việc hoặc trong phạm vi liên quan đến công việc',
    legalBasis: 'Điều 24, 38, BLLĐ Điều 125',
    exceptions: 'Hành động tự vệ chính đáng trước nguy cơ bị tấn công được xem xét giảm trừ; phải chứng minh tính cố ý gây thương tích',
    maxSanction: 'S',
    maxSanctionFull: 'Sa thải (S)',
    riskLevel: 'Nghiêm trọng'
  },
  {
    code: 'UX-03',
    category: 'UX',
    categoryName: 'Ứng Xử & Tôn Trọng',
    behavior: 'Quấy rối tình dục tại nơi làm việc (gồm trao đổi lợi ích công việc, đụng chạm thể chất, lời nói hoặc hình ảnh gợi dục không mong muốn)',
    legalBasis: 'Điều 38–46, BLLĐ Điều 125',
    exceptions: 'Áp dụng đầy đủ quy trình xác minh 2 người theo Chương VI và bảo đảm quyền giải trình; không suy đoán từ phản ánh đơn lẻ thiếu chứng cứ',
    maxSanction: 'S',
    maxSanctionFull: 'Sa thải (S)',
    riskLevel: 'Nghiêm trọng'
  },
  {
    code: 'UX-04',
    category: 'UX',
    categoryName: 'Ứng Xử & Tôn Trọng',
    behavior: 'Trả đũa người phản ánh thiện chí, người làm chứng hoặc người tham gia xác minh (đe dọa, cắt ca, trù dập, hạ đánh giá, chuyển việc bất lợi)',
    legalBasis: 'Điều 44, 50, 63, 70',
    exceptions: 'Phải chứng minh mối liên hệ nhân quả giữa hành vi trả đũa và việc phản ánh; các quyết định phân công quản trị độc lập, hợp pháp không phải là trả đũa',
    maxSanction: 'N1',
    maxSanctionFull: 'Kéo dài nâng lương (N1); Cách chức (N2) nếu lạm dụng chức vụ',
    riskLevel: 'Cao'
  },
  {
    code: 'UX-05',
    category: 'UX',
    categoryName: 'Ứng Xử & Tôn Trọng',
    behavior: 'Cố ý bịa đặt nội dung phản ánh, làm giả chứng cứ hoặc cung cấp thông tin biết rõ là sai sự thật nhằm hãm hại hoặc hạ uy tín người khác',
    legalBasis: 'Điều 44, 50, 67',
    exceptions: 'Việc vụ việc không đủ chứng cứ kết luận hoặc kết luận hành vi không cấu thành quấy rối KHÔNG ĐỒNG NGHĨA với việc người phản ánh bịa đặt sai sự thật',
    maxSanction: 'N1',
    maxSanctionFull: 'Kéo dài nâng lương (N1); Cách chức (N2) nếu lạm dụng chức vụ',
    riskLevel: 'Cao'
  },

  // Nhóm TS - Tài Sản & Tài Chính
  {
    code: 'TS-S01',
    category: 'TS',
    categoryName: 'Tài Sản & Tài Chính',
    behavior: 'Trộm cắp hoặc tham ô tài sản, tiền bạc, nguyên liệu, sản phẩm thuộc Công ty hoặc của người khác tại nơi làm việc',
    legalBasis: 'Điều 47, 48, BLLĐ Điều 125',
    exceptions: 'Phải chứng minh hành vi chiếm đoạt với lỗi cố ý; việc chênh lệch tiền mặt trong ca hoặc đang giữ đồ chưa bàn giao không tự động là trộm cắp',
    maxSanction: 'S',
    maxSanctionFull: 'Sa thải (S)',
    riskLevel: 'Nghiêm trọng'
  },
  {
    code: 'TS-S02',
    category: 'TS',
    categoryName: 'Tài Sản & Tài Chính',
    behavior: 'Đánh bạc tại nơi làm việc hoặc tàng trữ, sử dụng ma túy tại nơi làm việc',
    legalBasis: 'Điều 26, BLLĐ Điều 125',
    exceptions: 'Xác định đúng phạm vi nơi làm việc theo luật; việc sử dụng thuốc điều trị hợp pháp theo chỉ định của bác sĩ không phải ma túy',
    maxSanction: 'S',
    maxSanctionFull: 'Sa thải (S)',
    riskLevel: 'Nghiêm trọng'
  },
  {
    code: 'TS-01',
    category: 'TS',
    categoryName: 'Tài Sản & Tài Chính',
    behavior: 'Cố ý làm giả, hủy bỏ, sửa chữa hóa đơn, bill thanh toán, chứng từ tiền–hàng hoặc số liệu bàn giao ca để trục lợi hoặc che giấu thất thoát',
    legalBasis: 'Điều 7, 48, 54',
    exceptions: 'Sai sót thao tác POS hoặc nhầm lẫn nhập liệu thiện chí được xử lý theo luồng sửa lỗi; nếu cấu thành tham ô hoặc đạt TS-S04 thì áp dụng sa thải',
    maxSanction: 'N1',
    maxSanctionFull: 'Kéo dài nâng lương (N1); Cách chức (N2); Sa thải (S) nếu cấu thành trộm cắp',
    riskLevel: 'Cao'
  },
  {
    code: 'TS-02',
    category: 'TS',
    categoryName: 'Tài Sản & Tài Chính',
    behavior: 'Mang tài sản công ty ra ngoài, cho mượn, sử dụng cho mục đích cá nhân, sửa chữa hoặc định đoạt tài sản trái thẩm quyền với lỗi cố ý',
    legalBasis: 'Điều 48',
    exceptions: 'Loại trừ trường hợp có phê duyệt hợp lệ của quản lý hoặc hành động di dời tài sản để cứu người/tránh nguy cơ hỏa hoạn khẩn cấp',
    maxSanction: 'K',
    maxSanctionFull: 'Khiển trách (K); N1/N2 nếu nghiêm trọng hoặc lạm dụng chức vụ',
    riskLevel: 'Trung bình'
  },
  {
    code: 'TS-03',
    category: 'TS',
    categoryName: 'Tài Sản & Tài Chính',
    behavior: 'Cố ý che giấu việc làm mất mát, hư hỏng, thiếu hụt tài sản hoặc xóa, làm sai lệch chứng cứ liên quan đến tài sản công ty',
    legalBasis: 'Điều 48, 54',
    exceptions: 'Không xử lý vì lý do chưa phát hiện được ngay hoặc chậm báo cáo do đang tập trung bảo vệ tài sản trong tình huống bất khả kháng',
    maxSanction: 'N1',
    maxSanctionFull: 'Kéo dài nâng lương (N1); Cách chức (N2)',
    riskLevel: 'Cao'
  },
  {
    code: 'TS-S04',
    category: 'TS',
    categoryName: 'Tài Sản & Tài Chính',
    behavior: 'Hành vi có lỗi gây thiệt hại trực tiếp từ 10 lần mức lương tối thiểu tháng trở lên, hoặc đe dọa thiệt hại từ 50 lần mức đó trở lên/nguy cơ chết người',
    legalBasis: 'Điều 30–37, 47–54, BLLĐ Điều 125',
    exceptions: 'Phải chứng minh được lỗi, thiệt hại thực tế trực tiếp và quan hệ nhân quả; HR/Legal xác nhận ngưỡng; tuyệt đối không cộng dồn thiệt hại ước đoán',
    maxSanction: 'S',
    maxSanctionFull: 'Sa thải (S)',
    riskLevel: 'Nghiêm trọng'
  },

  // Nhóm RP - Tái Phạm
  {
    code: 'RP-S01',
    category: 'RP',
    categoryName: 'Tái Phạm Sau Xử Lý',
    behavior: 'Người lao động đã bị kỷ luật N1 (kéo dài nâng lương) hoặc N2 (cách chức), chưa được xóa kỷ luật mà tiếp tục lặp lại chính hành vi đã bị xử lý',
    legalBasis: 'Điều 65, 71, BLLĐ Điều 125',
    exceptions: 'Phải đối chiếu văn bản kỷ luật trước đó, thời hạn chưa xóa kỷ luật và sự trùng khớp của hành vi; việc bị khiển trách trước đó KHÔNG ĐỦ CĂN CỨ sa thải',
    maxSanction: 'S',
    maxSanctionFull: 'Sa thải (S) vì tái phạm luật định',
    riskLevel: 'Nghiêm trọng'
  },

  // Nhóm DT - Dữ Liệu & Bảo Mật
  {
    code: 'DT-01',
    category: 'DT',
    categoryName: 'Dữ Liệu & Bảo Mật',
    behavior: 'Chia sẻ mật khẩu/mã xác thực tài khoản, dùng tài khoản người khác, truy cập hoặc sao chép dữ liệu công ty ngoài phạm vi nhiệm vụ được giao',
    legalBasis: 'Điều 47, 51, 52',
    exceptions: 'Lỗi cấu hình phân quyền hệ thống của IT hoặc thao tác được phân công đột xuất không tự động cấu thành vi phạm',
    maxSanction: 'K',
    maxSanctionFull: 'Khiển trách (K); N1/N2 nếu truy cập dữ liệu nhạy cảm hoặc lạm dụng quyền',
    riskLevel: 'Trung bình'
  },
  {
    code: 'DT-02',
    category: 'DT',
    categoryName: 'Dữ Liệu & Bảo Mật',
    behavior: 'Cố ý lưu trữ, chuyển dữ liệu nội bộ Dolphy hoặc dữ liệu cá nhân của khách hàng sang tài khoản, thiết bị, đám mây cá nhân chưa được cấp phép',
    legalBasis: 'Điều 51, 52',
    exceptions: 'Xem xét các tình huống khẩn cấp phục vụ công việc khi hệ thống công ty gặp sự cố; việc chia sẻ lương của chính mình tại Điều 50 được loại trừ',
    maxSanction: 'K',
    maxSanctionFull: 'Khiển trách (K); N1/N2 nếu dữ liệu nhạy cảm hoặc phạm vi lớn',
    riskLevel: 'Trung bình'
  },
  {
    code: 'DT-S01',
    category: 'DT',
    categoryName: 'Dữ Liệu & Bảo Mật',
    behavior: 'Tiết lộ bí mật kinh doanh, bí mật công nghệ (công thức cà phê độc quyền) hoặc xâm phạm quyền sở hữu trí tuệ gây thiệt hại nghiêm trọng cho Dolphy',
    legalBasis: 'Điều 49, 53, BLLĐ Điều 125',
    exceptions: 'Thông tin phải đáp ứng tiêu chuẩn bí mật kinh doanh hợp pháp; loại trừ thông tin đã công khai hoặc người lao động có được độc lập hợp pháp',
    maxSanction: 'S',
    maxSanctionFull: 'Sa thải (S)',
    riskLevel: 'Nghiêm trọng'
  },

  // Nhóm HS - Hồ Sơ & Xác Minh
  {
    code: 'HS-01',
    category: 'HS',
    categoryName: 'Hồ Sơ & Xác Minh',
    behavior: 'Cố ý tiêu hủy, làm giả, sửa chữa, che giấu tài liệu hoặc đe dọa, mua chuộc người khác thay đổi chứng cứ trong quá trình xác minh hợp pháp',
    legalBasis: 'Điều 7, 42, 54, 67',
    exceptions: 'Việc thực hiện quyền im lặng, quyền tự bảo vệ chính đáng hoặc không đồng ý ký biên bản KHÔNG PHẢI là hành vi vi phạm',
    maxSanction: 'N1',
    maxSanctionFull: 'Kéo dài nâng lương (N1); Cách chức (N2) nếu lạm dụng chức vụ',
    riskLevel: 'Cao'
  },
  {
    code: 'HS-02',
    category: 'HS',
    categoryName: 'Hồ Sơ & Xác Minh',
    behavior: 'Tiết lộ trái phép danh tính, nội dung cáo buộc, hồ sơ vụ việc quấy rối tình dục hoặc dữ liệu nhạy cảm được giao quản lý theo nguyên tắc cần-biết',
    legalBasis: 'Điều 44, 52, 70',
    exceptions: 'Việc chia sẻ cần thiết cho quyền bào chữa hợp pháp, yêu cầu cơ quan công an hoặc nghĩa vụ báo cáo theo pháp luật được loại trừ',
    maxSanction: 'N1',
    maxSanctionFull: 'Kéo dài nâng lương (N1); Cách chức (N2); Sa thải (S) nếu lộ bí mật lớn',
    riskLevel: 'Cao'
  },

  // Nhóm QL - Trách Nhiệm Quản Lý
  {
    code: 'QL-01',
    category: 'QL',
    categoryName: 'Trách Nhiệm Quản Lý',
    behavior: 'Cấp quản lý (CHT, QLCL, Trưởng phòng) tự ý đặt ra tiền phạt, thu tiền phạt, trừ lương/thưởng đã phát sinh, áp kỷ luật tập thể hoặc quyết định chế tài trái thẩm quyền',
    legalBasis: 'Điều 10, 64, 65, 72',
    exceptions: 'Sai sót hành chính đã tự giác phát hiện và chủ động khắc phục, hoàn trả tiền cho nhân viên được xem xét giảm nhẹ',
    maxSanction: 'N2',
    maxSanctionFull: 'Cách chức (N2); Kéo dài nâng lương (N1) nếu không còn giữ chức vụ',
    riskLevel: 'Nghiêm trọng'
  },
  {
    code: 'QL-02',
    category: 'QL',
    categoryName: 'Trách Nhiệm Quản Lý',
    behavior: 'Cấp quản lý cố ý giao mệnh lệnh trái pháp luật, không bảo đảm an toàn, che giấu tai nạn sự cố, ép nhân viên nhận lỗi hoặc có hành vi trù dập trả đũa',
    legalBasis: 'Điều 10, 30–37, 44, 50',
    exceptions: 'Phải xác minh cụ thể từng hành vi; nếu hành vi quấy rối tình dục hoặc gây thương tích thì áp dụng sa thải (S) tương ứng',
    maxSanction: 'N2',
    maxSanctionFull: 'Cách chức (N2); N1 nếu không còn chức vụ; Sa thải (S) nếu cấu thành tội phạm/bạo lực',
    riskLevel: 'Nghiêm trọng'
  },
  {
    code: 'QL-03',
    category: 'QL',
    categoryName: 'Trách Nhiệm Quản Lý',
    behavior: 'Lạm dụng chức vụ, quyền truy cập hệ thống để trục lợi cá nhân, ưu ái người thân có xung đột lợi ích, sửa hồ sơ nhân sự hoặc can thiệp trái phép xác minh',
    legalBasis: 'Điều 5, 10, 47, 67–70',
    exceptions: 'Các quyết định quản lý hợp pháp, có căn cứ rõ ràng và đã công khai xung đột lợi ích không tự động vi phạm; nếu tham ô thì sa thải (TS-S01)',
    maxSanction: 'N2',
    maxSanctionFull: 'Cách chức (N2); Sa thải (S) nếu tham ô hoặc đạt ngưỡng TS-S01/TS-S04',
    riskLevel: 'Nghiêm trọng'
  }
];
