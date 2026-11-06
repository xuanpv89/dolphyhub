export interface RoleGuide {
  id: string;
  roleName: string;
  tagline: string;
  iconName: string;
  color: string;
  avatarBadge: string;
  badge?: string;
  keyResponsibilities: string[];
  keyRights: string[];
  vitalDos: string[];
  vitalDonts: string[];
  mustReadArticles: { article: number; title: string; chapter: string }[];
}

export const ROLE_GUIDES_DATA: RoleGuide[] = [
  {
    id: 'barista',
    roleName: 'Barista & Thu Ngân',
    tagline: 'Trái tim quầy bar — Tạo tác từng tách cà phê hạnh phúc',
    iconName: 'Coffee',
    color: 'from-blue-600 to-cyan-600',
    avatarBadge: 'Quầy Bar Thảo Điền',
    keyResponsibilities: [
      'Chấm công trung thực vào đầu và kết thúc ca làm việc',
      'Đúng trang phục bảo hộ: tạp dề, bảng tên, quần dài và giày bít mũi bít gót chống trượt',
      'Duy trì tiêu chuẩn 5S quầy bar sạch sẽ, thơm tho, kiểm soát hạn sử dụng nguyên liệu',
      'Tuân thủ nghiêm ngặt kỹ thuật pha chế hạt mộc và đánh sữa micro-foam chuẩn Dolphy'
    ],
    keyRights: [
      'QUYỀN DỪNG VIỆC: Được dừng vận hành máy pha khi thấy rò rỉ điện/cháy khói mà không bị phạt',
      'QUYỀN DỪNG PHỤC VỤ: Được ngừng bán nguyên liệu sữa/syrup nếu phát hiện biến chất, hết hạn',
      'NGHỈ GIỮA CA: Được nghỉ 30 phút liên tục (ca >=6h), tính vào giờ làm việc nếu ca liên tục',
      'BẢO VỆ CHỐNG QUẤY RỐI: Không bao giờ phải chịu đựng lời nói hoặc hành vi khiếm nhã từ bất kỳ ai'
    ],
    vitalDos: [
      'Báo CHT ngay khi phát hiện thiết bị có dấu hiệu rò điện, chập cháy hoặc máy kêu bất thường',
      'Dán nhãn "HOLD - CHỜ XỬ LÝ" đối với bất kỳ lốc sữa hay túi cà phê nghi có vấn đề chất lượng',
      'Trao đổi cởi mở với quản lý nếu có lý do chính đáng khi đột xuất đi trễ do thời tiết'
    ],
    vitalDonts: [
      'Tuyệt đối không nhờ người khác chấm công hộ hoặc chấm công thay cho đồng nghiệp',
      'Không nộp bất kỳ khoản tiền phạt tự phát nào vào quỹ riêng của quán',
      'Không được tự ý cho bạn bè, người ngoài ca vào bên trong quầy pha chế'
    ],
    mustReadArticles: [
      { article: 14, title: 'Chuẩn đúng giờ và chấm công', chapter: 'Chương III' },
      { article: 15, title: 'Nghỉ trong ca & chuyển ca', chapter: 'Chương III' },
      { article: 22, title: 'Đồng phục & vệ sinh cá nhân', chapter: 'Chương IV' },
      { article: 30, title: 'Quyền dừng việc không an toàn', chapter: 'Chương V' },
      { article: 34, title: 'An toàn thực phẩm & dừng phục vụ', chapter: 'Chương V' },
      { article: 72, title: 'Trách nhiệm vật chất & cấm chia ca', chapter: 'Chương X' }
    ]
  },
  {
    id: 'cht',
    roleName: 'Cửa Hàng Trưởng (CHT)',
    tagline: 'Thuyền trưởng chi nhánh — Lãnh đạo bằng sự công tâm & đồng hành',
    iconName: 'Store',
    color: 'from-amber-600 to-yellow-600',
    avatarBadge: 'Lãnh Đạo Chi Nhánh',
    keyResponsibilities: [
      'Lập và công bố lịch làm việc trước ít nhất 07 ngày cho toàn thể nhân sự cửa hàng',
      'Phê duyệt các yêu cầu đổi ca chính thức trên hệ thống; bảo đảm thời gian nghỉ giữa ca >= 12h',
      'Điều phối an toàn tại chỗ: phân công sơ tán PCCC, sơ cứu y tế và bảo vệ hiện trường sự cố',
      'Hướng dẫn, đào tạo và coaching nhân sự mới; triển khai Kế hoạch khắc phục hành vi khi có sai sót'
    ],
    keyRights: [
      'Được quyền điều chỉnh phân công trong ca để đáp ứng vận hành an toàn và chất lượng phục vụ',
      'Có quyền yêu cầu người không phận sự rời khỏi quầy bar và kho nguyên liệu của chi nhánh',
      'Được DHO và QLCL hỗ trợ chuyên môn, pháp lý và tài chính khi có sự cố tại cửa hàng'
    ],
    vitalDos: [
      'Ưu tiên bảo vệ con người trên hết khi có cháy, chập điện hoặc sự cố xô xát',
      'Ghi nhận trung thực giờ làm thực tế của nhân viên, đối soát dữ liệu máy chấm công',
      'Rút lui khỏi việc xác minh nếu bản thân có xung đột lợi ích với nhân sự liên quan'
    ],
    vitalDonts: [
      'NGHIÊM CẤM TỰ ĐẶT TIỀN PHẠT: Vi phạm mã QL-01 sẽ bị xử lý CÁCH CHỨC (N2)',
      'Không được ép nhân viên làm thêm giờ trái với quy định pháp luật khi quán đông khách',
      'Không tự ý chia đều tiền bồi thường ly tách vỡ hoặc hàng thiếu hụt cho cả ca'
    ],
    mustReadArticles: [
      { article: 10, title: 'Trách nhiệm của cấp quản lý', chapter: 'Chương II' },
      { article: 13, title: 'Lập & thay đổi lịch làm việc', chapter: 'Chương III' },
      { article: 32, title: 'Chỉ huy & ứng phó khẩn cấp', chapter: 'Chương V' },
      { article: 40, title: 'Kênh tiếp nhận & xử lý quấy rối', chapter: 'Chương VI' },
      { article: 65, title: 'Kế hoạch khắc phục hành vi 14-30 ngày', chapter: 'Chương IX' },
      { article: 81, title: 'Một Nội quy cấp Công ty duy nhất', chapter: 'Chương XI' }
    ]
  },
  {
    id: 'qlcl',
    roleName: 'Quản Lý Chất Lượng (QLCL)',
    tagline: 'Người gác cổng chuẩn mực — Đảm bảo từng giọt cà phê đạt đỉnh cao',
    iconName: 'BadgeCheck',
    badge: 'Kiểm Soát Chuẩn Vị',
    color: 'from-emerald-600 to-teal-700',
    avatarBadge: 'Kiểm Soát Chất Lượng',
    keyResponsibilities: [
      'Kiểm soát quy chuẩn nhiệt độ máy pha, công thức rang mộc, thời gian chiết xuất Espresso',
      'Sở hữu quy trình Hold - Release - Recall đối với các lô hàng nguyên vật liệu không đạt chuẩn',
      'Kiểm tra định kỳ điều kiện vệ sinh an toàn thực phẩm, dụng cụ và hạn dùng sữa thanh trùng',
      'Đào tạo và kiểm chuẩn tay nghề Barista, đảm bảo tính đồng nhất trên toàn bộ 10+ chi nhánh'
    ],
    keyRights: [
      'Có thẩm quyền ra quyết định niêm phong, thu hồi hoặc tiêu hủy lô nguyên liệu mất an toàn',
      'Yêu cầu cửa hàng tạm dừng phục vụ món đồ uống cụ thể khi chưa đáp ứng công thức chuẩn',
      'Tiếp cận hồ sơ truy xuất nguồn gốc nguyên liệu của tất cả các nhà cung cấp'
    ],
    vitalDos: [
      'Phối hợp nhịp nhàng với CHT, phân biệt rõ giữa sai sót kỹ thuật và hành vi cố ý vi phạm',
      'Bảo toàn mẫu thử, chụp ảnh nhãn mác lô hàng nghi hỏng để làm việc với nhà cung cấp',
      'Tổ chức đào tạo lại (refresher course) cho các bạn Barista còn yếu về kỹ năng'
    ],
    vitalDonts: [
      'Không tự ý bắt nhân viên bỏ tiền túi đền nguyên liệu làm sai công thức trong định mức',
      'Không che giấu sự cố chất lượng nghiêm trọng lên Ban Lãnh Đạo Dolphy',
      'Không được dùng quyền kiểm tra để tạo áp lực cá nhân hoặc trù dập nhân sự'
    ],
    mustReadArticles: [
      { article: 10, title: 'Trách nhiệm QLCL và phân cấp', chapter: 'Chương II' },
      { article: 34, title: 'Quy trình Hold - Release ATTP', chapter: 'Chương V' },
      { article: 35, title: 'Sức khỏe người xử lý thực phẩm', chapter: 'Chương V' },
      { article: 53, title: 'Sản phẩm công việc & SHTT công thức', chapter: 'Chương VII' },
      { article: 73, title: 'Loại trừ bồi thường trong định mức', chapter: 'Chương X' }
    ]
  },
  {
    id: 'dho',
    roleName: 'Khối Văn Phòng DHO',
    tagline: 'Hậu phương vững chắc — Kiến tạo chính sách & bảo vệ nguồn nhân lực',
    iconName: 'Building2',
    color: 'from-indigo-700 to-purple-800',
    avatarBadge: 'Văn Phòng Điều Hành',
    keyResponsibilities: [
      'Làm việc giờ chuẩn cơ sở: 08:00 - 12:00 & 13:00 - 17:00 (T2 đến T6, 40 giờ/tuần)',
      'Quản lý hồ sơ nhân sự, tính toán chính xác tiền lương, OT đêm và các chế độ phép năm',
      'Bảo vệ dữ liệu khách hàng, chiến lược phát triển chuỗi và bản quyền thương hiệu Dolphy',
      'Vận hành 2 kênh tiếp nhận phản ánh độc lập theo đúng quy trình DEC-020'
    ],
    keyRights: [
      'Hưởng đầy đủ chế độ nghỉ thứ Bảy, Chủ Nhật và các ngày nghỉ lễ Tết theo luật định',
      'Được quyền trao đổi cởi mở về mức lương và chế độ của chính mình mà không bị phạt',
      'Làm việc trong môi trường văn minh, tôn trọng quyền riêng tư và phát triển sự nghiệp'
    ],
    vitalDos: [
      'Bảo mật tuyệt đối hồ sơ nhân sự và dữ liệu cá nhân theo nguyên tắc cần-biết',
      'Giải quyết đơn đề nghị nghỉ phép, tạm chuyển việc đúng thời hạn cam kết',
      'Kiểm tra kỹ lưỡng căn cứ pháp lý trước khi tổ chức bất kỳ cuộc họp kỷ luật nào'
    ],
    vitalDonts: [
      'Tuyệt đối không lưu trữ dữ liệu nhạy cảm của công ty lên Google Drive hoặc đám mây cá nhân',
      'Không được cấn trừ toàn bộ tiền lương cuối cùng hoặc thưởng của người lao động khi thôi việc',
      'Không được tiết lộ danh tính người phản ánh trong các vụ việc tố cáo quấy rối'
    ],
    mustReadArticles: [
      { article: 12, title: 'Thời giờ DHO 40h/tuần', chapter: 'Chương III' },
      { article: 40, title: 'Vận hành 2 kênh tiếp nhận độc lập', chapter: 'Chương VI' },
      { article: 50, title: 'Ngoại lệ bảo mật & quyền trao đổi lương', chapter: 'Chương VII' },
      { article: 58, title: 'Quy trình tạm chuyển công việc', chapter: 'Chương VIII' },
      { article: 68, title: 'Thủ tục họp kỷ luật trước 5 ngày', chapter: 'Chương IX' },
      { article: 78, title: 'Khấu trừ lương tối đa 30%', chapter: 'Chương X' }
    ]
  }
];
