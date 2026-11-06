export interface QuizQuestion {
  id: number;
  question: string;
  context: string;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
  }[];
  explanation: string;
  articleRef: string;
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "Tại Dolphy Café, khi người lao động đi làm muộn do kẹt xe hoặc ngủ quên, Công ty có được quyền phạt tiền 50k vào quỹ quán không?",
    context: "Chấm công & Kỷ luật",
    options: [
      { id: "A", text: "Được phạt nếu toàn bộ nhân viên trong ca cùng đồng ý lập quỹ", isCorrect: false },
      { id: "B", text: "TUYỆT ĐỐI KHÔNG. Dolphy nghiêm cấm phạt tiền hoặc trừ lương thay kỷ luật dưới mọi hình thức", isCorrect: true },
      { id: "C", text: "Được phạt nếu Cửa hàng trưởng (CHT) có ban hành thông báo trước", isCorrect: false },
      { id: "D", text: "Được trừ 1 ngày lương đối với bất kỳ ai đi muộn quá 15 phút", isCorrect: false }
    ],
    explanation: "Theo Điều 5 (khoản 6), Điều 14 (khoản 6) và Điều 64 (khoản 6), Công ty chỉ tính lương theo thời gian làm việc thực tế, nghiêm cấm dùng phạt tiền, trừ lương, nộp quỹ hay trừ ca thay kỷ luật lao động.",
    articleRef: "Điều 5, Điều 14, Điều 64 DOL-HR-001"
  },
  {
    id: 2,
    question: "Khi phát hiện máy pha cà phê bị rò rỉ điện hoặc bốc khói khét nguy hiểm, Barista có quyền gì?",
    context: "An toàn lao động",
    options: [
      { id: "A", text: "Phải đợi CHT kiểm tra và cấp trên đồng ý bằng văn bản mới được tắt máy", isCorrect: false },
      { id: "B", text: "Phải cố gắng pha xong đợt khách đang đợi rồi mới được báo cáo", isCorrect: false },
      { id: "C", text: "Được quyền ngắt điện, lập tức dừng nhiệm vụ, cảnh báo mọi người và không bị coi là vi phạm kỷ luật", isCorrect: true },
      { id: "D", text: "Nhờ khách hàng đứng lùi xa ra rồi tiếp tục pha chế cẩn thận", isCorrect: false }
    ],
    explanation: "Điều 6 (khoản 6) và Điều 30 (khoản 3) trao Quyền Dừng Việc cho người lao động khi có nguy cơ rõ ràng đe dọa tính mạng/sức khỏe. Công ty không đánh đổi an toàn con người lấy tốc độ phục vụ.",
    articleRef: "Điều 6, Điều 30 DOL-HR-001"
  },
  {
    id: 3,
    question: "Lịch làm việc của nhân viên tại hệ thống Dolphy Café phải được công bố trước bao nhiêu ngày?",
    context: "Thời giờ làm việc",
    options: [
      { id: "A", text: "Ít nhất 07 ngày trước ngày bắt đầu chu kỳ làm việc", isCorrect: true },
      { id: "B", text: "Trước 1 ngày hoặc báo qua tin nhắn tối hôm trước", isCorrect: false },
      { id: "C", text: "Chỉ cần công bố vào sáng thứ Hai đầu tuần", isCorrect: false },
      { id: "D", text: "Công ty không cần báo trước, tùy tình hình đông khách", isCorrect: false }
    ],
    explanation: "Điều 13 (khoản 1) quy định rõ: Lịch làm việc phải được công bố ít nhất 07 ngày trước ngày bắt đầu chu kỳ để người lao động chủ động sắp xếp thời gian cuộc sống và di chuyển.",
    articleRef: "Điều 13 (khoản 1) DOL-HR-001"
  },
  {
    id: 4,
    question: "Trong ca làm việc, nếu vô ý làm rơi vỡ một chiếc bình thủy tinh, khoản tiền bồi thường được xử lý như thế nào?",
    context: "Trách nhiệm vật chất",
    options: [
      { id: "A", text: "Chia đều tiền cho tất cả nhân viên trong ca làm việc đó cùng đền", isCorrect: false },
      { id: "B", text: "Bắt nhân viên móc tiền túi mua lại ngay bình mới với giá niêm yết bán lẻ", isCorrect: false },
      { id: "C", text: "Được xác định theo giá trị còn lại (đã trừ khấu hao), chứng minh lỗi cá nhân và khấu trừ lương tối đa 30%/tháng", isCorrect: true },
      { id: "D", text: "Trừ toàn bộ 100% tiền lương của tháng đó cho đến khi đủ tiền", isCorrect: false }
    ],
    explanation: "Điều 72 (khoản 3) cấm tuyệt đối việc chia tiền theo ca. Điều 75 tính giá trị sau khi đã trừ hao mòn khấu hao, và Điều 78 giới hạn mức khấu trừ lương không quá 30% tiền lương thực trả mỗi tháng.",
    articleRef: "Điều 72, Điều 75, Điều 78 DOL-HR-001"
  },
  {
    id: 5,
    question: "Công ty duy trì bao nhiêu kênh tiếp nhận độc lập để xử lý các phản ánh về quấy rối tình dục và bảo vệ con người?",
    context: "Phòng chống quấy rối (DEC-020)",
    options: [
      { id: "A", text: "Chỉ có 1 kênh duy nhất là gặp trực tiếp Quản lý cửa hàng (CHT)", isCorrect: false },
      { id: "B", text: "Tối thiểu 02 kênh độc lập: Đầu mối HR/People tại DHO và Đầu mối Bảo vệ con người độc lập do CEO chỉ định", isCorrect: true },
      { id: "C", text: "Chỉ tiếp nhận qua hòm thư giấy đặt trước cửa văn phòng", isCorrect: false },
      { id: "D", text: "Nhân viên phải đăng bài lên nhóm Facebook nội bộ để mọi người cùng xem", isCorrect: false }
    ],
    explanation: "Theo Điều 40 (khóa tại quyết định DEC-020), Công ty duy trì 02 kênh độc lập, có thể phản ánh trực tiếp hoặc ẩn danh, đồng thời có cơ chế tránh xung đột lợi ích tuyệt đối.",
    articleRef: "Điều 40 DOL-HR-001"
  },
  {
    id: 6,
    question: "Khi Công ty tạm thời điều động người lao động sang làm công việc khác do nhu cầu kinh doanh, tiền lương được tính ra sao?",
    context: "Tạm thời chuyển việc",
    options: [
      { id: "A", text: "Lập tức giảm lương xuống bằng mức lương thấp nhất của vị trí mới", isCorrect: false },
      { id: "B", text: "GIỮ NGUYÊN 100% lương cũ trong 30 ngày làm việc đầu tiên; sau đó tối thiểu 85% lương cũ và trên mức lương tối thiểu", isCorrect: true },
      { id: "C", text: "Chỉ trả phụ cấp bữa ăn, không tính lương cơ bản", isCorrect: false },
      { id: "D", text: "Người lao động phải làm việc không công trong 1 tuần đầu thử việc lại", isCorrect: false }
    ],
    explanation: "Theo Điều 61 (khoản 1 & 2), nếu tiền lương công việc mới thấp hơn, Công ty giữ nguyên tiền lương cũ trong 30 ngày làm việc đầu tiên. Sau đó mức lương không thấp hơn 85% lương cũ.",
    articleRef: "Điều 61 DOL-HR-001"
  },
  {
    id: 7,
    question: "Theo Nội quy mới, việc nhân viên trao đổi thông tin về mức tiền lương của CHÍNH BẢN THÂN MÌNH có bị coi là vi phạm lộ bí mật kinh doanh không?",
    context: "Bảo vệ thông tin & Quyền cá nhân",
    options: [
      { id: "A", text: "Có, bị sa thải ngay lập tức vì lương là bí mật tuyệt đối", isCorrect: false },
      { id: "B", text: "KHÔNG VI PHẠM. Việc trao đổi về lương và quyền lợi của chính mình là quyền cá nhân hợp pháp", isCorrect: true },
      { id: "C", text: "Chỉ được nói với bố mẹ, cấm nói với bất kỳ ai khác", isCorrect: false },
      { id: "D", text: "Bị phạt 500.000đ mỗi lần nhắc đến chữ lương", isCorrect: false }
    ],
    explanation: "Điều 50 (khoản 2) nêu rõ: Việc trao đổi thông tin về lương, quyền lợi và điều kiện làm việc của chính người lao động không mặc nhiên là tiết lộ bí mật kinh doanh của Công ty.",
    articleRef: "Điều 50 (khoản 2) DOL-HR-001"
  },
  {
    id: 8,
    question: "4 hình thức kỷ luật lao động duy nhất theo luật định được áp dụng tại Dolphy là gì?",
    context: "Kỷ luật lao động",
    options: [
      { id: "A", text: "Phạt tiền, trừ lương, hạ chức, đuổi việc", isCorrect: false },
      { id: "B", text: "Cảnh cáo miệng, nộp quỹ, viết kiểm điểm, đuổi việc", isCorrect: false },
      { id: "C", text: "Khiển trách (K), Kéo dài nâng lương không quá 6 tháng (N1), Cách chức (N2), Sa thải (S)", isCorrect: true },
      { id: "D", text: "Cắt thưởng Tết, trừ ca làm việc, cấm đến quán 1 tháng, sa thải", isCorrect: false }
    ],
    explanation: "Điều 65 (khoản 1) quy định đúng 4 hình thức luật định: K (Khiển trách), N1 (Kéo dài nâng lương <=6 tháng), N2 (Cách chức) và S (Sa thải). Các hình thức khác như phạt tiền, nộp quỹ, cảnh cáo đều trái luật.",
    articleRef: "Điều 65 (khoản 1) DOL-HR-001"
  }
];
