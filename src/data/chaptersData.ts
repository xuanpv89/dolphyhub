export interface Article {
  number: number;
  title: string;
  summary: string;
  fullText: string;
  keyPoints: string[];
}

export interface Chapter {
  id: number;
  roman: string;
  title: string;
  subtitle: string;
  iconName: string;
  badge: string;
  takeaway: string;
  color: string;
  articles: Article[];
}

export const CHAPTERS_DATA: Chapter[] = [
  {
    id: 1,
    roman: "I",
    title: "Quy Định Chung",
    subtitle: "Mục đích, phạm vi, giải thích từ ngữ & nguyên tắc quản trị",
    iconName: "Compass",
    badge: "Nền Tảng Pháp Lý",
    color: "from-blue-600 to-cyan-600",
    takeaway: "Nội quy áp dụng đồng bộ cho toàn bộ hệ thống Dolphy Café và DHO. Tôn trọng nhân phẩm, bảo vệ quyền riêng tư, tuyệt đối không phạt tiền hay trừ lương thay kỷ luật.",
    articles: [
      {
        number: 1,
        title: "Mục đích",
        summary: "Xác lập các quy tắc chung về thời giờ, an toàn, kỷ luật và trách nhiệm; giúp người lao động nắm vững quyền lợi và giới hạn hành vi.",
        keyPoints: [
          "Xác lập quy tắc minh bạch, công bằng giữa Công ty và người lao động",
          "Tài liệu Tầng 2 trong kiến trúc Dolphy, gắn kết cùng Hiến chương Văn hóa",
          "Bảo đảm môi trường làm việc hạnh phúc, an tâm cống hiến"
        ],
        fullText: `1. Nội quy này xác lập các quy tắc chung về thời giờ làm việc, thời giờ nghỉ ngơi, trật tự tại nơi làm việc, an toàn, phòng chống quấy rối tình dục, bảo vệ tài sản và thông tin, kỷ luật lao động và trách nhiệm vật chất tại Công ty.
2. Nội quy giúp người lao động biết rõ quyền, nghĩa vụ, giới hạn hành vi và đường xử lý khi phát sinh vụ việc trong quan hệ lao động.
3. Nội quy là tài liệu Tầng 2 trong kiến trúc tài liệu Dolphy. Nội quy không thay thế Hiến chương Văn hóa, quy định theo vai trò, SOP, biểu mẫu hoặc thỏa thuận trong hợp đồng lao động.`
      },
      {
        number: 2,
        title: "Phạm vi áp dụng",
        summary: "Áp dụng cho toàn thể nhân sự ký HĐLĐ tại các chi nhánh Dolphy Café, văn phòng DHO và các địa điểm làm việc được phân công.",
        keyPoints: [
          "Áp dụng cho mọi người lao động thuộc chuỗi Dolphy Café & DHO",
          "Thực tập sinh, học nghề, đối tác tuân thủ an toàn/bảo mật nhưng không bị kỷ luật lao động theo Nội quy này",
          "Không áp dụng cho pháp nhân hoặc mô hình khác ngoài Dolphy Café"
        ],
        fullText: `1. Nội quy áp dụng cho người lao động làm việc theo hợp đồng lao động với Công ty Cổ phần Cá Heo Xanh (Blue Dolphin) tại:
• Các cửa hàng, cơ sở và địa điểm làm việc thuộc hệ thống Dolphy Café;
• Dolphy Head Office (DHO) và các bộ phận trực tiếp phục vụ, hỗ trợ hoặc điều hành Dolphy Café;
• Địa điểm khác mà người lao động được Công ty giao thực hiện công việc hợp pháp.
2. Người học nghề, tập nghề, thực tập sinh, nhà thầu, đối tác, khách và người khác có mặt tại nơi làm việc phải tuân thủ các yêu cầu được thông báo về an toàn, an ninh, bảo vệ tài sản, bảo mật và phòng chống quấy rối. Việc tuân thủ này không tự động làm họ trở thành đối tượng bị xử lý kỷ luật lao động theo Nội quy.
3. Nội quy không áp dụng cho pháp nhân, thương hiệu hoặc mô hình kinh doanh khác không thuộc phạm vi Dolphy Café theo DEC-016.`
      },
      {
        number: 3,
        title: "Giải thích từ ngữ",
        summary: "Định nghĩa chuẩn hóa: Công ty, Dolphy Café, DHO, Quản lý trực tiếp, Sai sót nghiệp vụ, Điểm tuân thủ, Vi phạm kỷ luật, Trách nhiệm vật chất.",
        keyPoints: [
          "Sai sót nghiệp vụ ưu tiên đào tạo, hướng dẫn, coaching - KHÔNG tự động là vi phạm kỷ luật",
          "Điểm tuân thủ là công cụ cải tiến hiệu suất, KHÔNG phải hình thức kỷ luật",
          "Trách nhiệm vật chất là bồi thường theo thiệt hại thực tế, KHÔNG phải tiền phạt"
        ],
        fullText: `Trong Nội quy này:
1. Công ty là Công ty Cổ phần Cá Heo Xanh (Blue Dolphin).
2. Dolphy Café là thương hiệu và hệ thống cửa hàng do Công ty sở hữu, quản lý hoặc trực tiếp vận hành.
3. DHO là Dolphy Head Office — Văn phòng điều hành Dolphy.
4. Người lao động là người làm việc cho Công ty theo hợp đồng lao động, được trả lương và chịu sự quản lý, giám sát hợp pháp.
5. Quản lý trực tiếp: Cửa hàng trưởng (CHT) tại cửa hàng; Quản lý bộ phận tại DHO.
6. Sai sót nghiệp vụ là việc thực hiện công việc chưa đạt yêu cầu chuyên môn hoặc quy trình, được ưu tiên xử lý bằng hướng dẫn, đào tạo, sửa lỗi và cải tiến; không tự động là vi phạm kỷ luật lao động.
7. Điểm tuân thủ là công cụ quản trị và cải tiến thuộc DOL-PERF-001; không phải hình thức kỷ luật lao động, không tự động dẫn đến sa thải hay phạt tiền.
8. Vi phạm kỷ luật lao động là hành vi vi phạm quy định cụ thể, hợp pháp đã được xác định trong Nội quy.`
      },
      {
        number: 4,
        title: "Thứ tự áp dụng",
        summary: "Ưu tiên quy định có lợi hơn cho người lao động. SOP và quy định nội bộ không được giảm quyền lợi hoặc tạo thêm tiền phạt.",
        keyPoints: [
          "Luôn áp dụng điều khoản có lợi hơn cho người lao động",
          "Cấm cấp quản lý tự ý tạo thêm tiền phạt hoặc hình thức phạt ngoài luật",
          "Hiến chương Văn hóa định hướng hành vi, không dùng để kỷ luật"
        ],
        fullText: `1. Nội quy được áp dụng phù hợp với pháp luật, thỏa ước lao động tập thể nếu có, hợp đồng lao động và các thỏa thuận hợp pháp khác.
2. Trường hợp một thỏa thuận hợp pháp dành cho người lao động quyền lợi cao hơn Nội quy hoặc pháp luật quy định quyền lợi cao hơn, áp dụng nội dung có lợi hơn.
3. Quy định theo vai trò, SOP, thông báo, lịch làm việc không được: làm giảm quyền hợp pháp của người lao động; tạo thêm hình thức kỷ luật, tiền phạt hoặc trách nhiệm vật chất.
4. Hiến chương Văn hóa Dolphy định hướng hành vi và bản sắc. Việc không thực hiện một nghi thức văn hóa tự nguyện không phải là vi phạm kỷ luật.`
      },
      {
        number: 5,
        title: "Nguyên tắc quản lý và xử lý vụ việc",
        summary: "7 nguyên tắc vàng: Tôn trọng nhân phẩm, Không phân biệt đối xử, Luồng xử lý độc lập, Không xử lý tập thể, Không phạt tiền trừ lương.",
        keyPoints: [
          "Tôn trọng nhân phẩm, quyền riêng tư và quyền giải trình",
          "Tách biệt 4 luồng: Sai sót nghiệp vụ - Điểm tuân thủ - Kỷ luật lao động - Trách nhiệm vật chất",
          "TUYỆT ĐỐI KHÔNG xử lý tập thể, không phạt tiền, không trừ lương thay kỷ luật"
        ],
        fullText: `1. Tôn trọng nhân phẩm, danh dự, sức khỏe, quyền riêng tư và quyền giải trình của người lao động.
2. Không phân biệt đối xử, cưỡng bức lao động, quấy rối tình dục, trả đũa người phản ánh thiện chí hoặc che giấu hành vi vi phạm.
3. Mọi yêu cầu công việc phải hợp pháp, thuộc phạm vi quản lý và được truyền đạt đủ rõ để người lao động thực hiện.
4. Sai sót nghiệp vụ, điểm tuân thủ, vi phạm kỷ luật lao động và trách nhiệm vật chất là các luồng xử lý riêng.
5. Không xử lý tập thể, không quy trách nhiệm theo chức danh hoặc theo ca nếu chưa xác định hành vi và trách nhiệm của từng người.
6. Không phạt tiền, cắt lương thay kỷ luật, áp dụng sa thải tự động hoặc dùng điều khoản “vi phạm khác” để xử lý hành vi chưa được quy định hợp lệ.
7. Dữ liệu camera, chấm công chỉ thu thập, sử dụng đúng phạm vi cần thiết và hợp pháp.`
      }
    ]
  },
  {
    id: 2,
    roman: "II",
    title: "Quyền, Nghĩa Vụ & Trách Nhiệm Chung",
    subtitle: "Rõ ràng quyền lợi người lao động & nghĩa vụ quản lý của Công ty",
    iconName: "ShieldCheck",
    badge: "Quyền Lợi & Nghĩa Vụ",
    color: "from-blue-700 to-indigo-600",
    takeaway: "Người lao động có quyền từ chối công việc nguy hiểm đến tính mạng; Công ty không giữ bản chính giấy tờ, không thu tiền cọc. Quản lý không được tự ý đặt ra chế tài riêng.",
    articles: [
      {
        number: 6,
        title: "Quyền của người lao động",
        summary: "Được trả lương đúng hạn, điều kiện an toàn, quyền giải trình, và quyền từ chối công việc khi có nguy cơ đe dọa tính mạng/sức khỏe.",
        keyPoints: [
          "Được trả lương đầy đủ, đúng hạn và hưởng các chế độ bảo hiểm",
          "Quyền từ chối công việc nguy hiểm đe dọa sức khỏe mà không sợ bị trả đũa",
          "Được bảo mật thông tin và quyền tự bảo vệ khi có xem xét kỷ luật"
        ],
        fullText: `Người lao động có quyền:
1. Được làm công việc đã thỏa thuận; được trả lương, nghỉ ngơi và hưởng quyền lợi theo hợp đồng và pháp luật.
2. Được cung cấp thông tin cần thiết về công việc, nơi làm việc, lịch làm việc, yêu cầu an toàn.
3. Được làm việc trong điều kiện an toàn, vệ sinh; được cấp phương tiện bảo vệ cá nhân.
4. Được tôn trọng danh dự, nhân phẩm, quyền riêng tư; không bị phân biệt đối xử.
5. Được phản ánh, giải trình, khiếu nại qua kênh phù hợp mà không bị bất lợi vì phản ánh thiện chí.
6. Từ chối thực hiện công việc khi có nguy cơ rõ ràng đe dọa trực tiếp đến tính mạng hoặc sức khỏe theo luật định; đồng thời báo ngay cho quản lý.`
      },
      {
        number: 7,
        title: "Nghĩa vụ của người lao động",
        summary: "Chấm công trung thực, tôn trọng đồng nghiệp & khách hàng, bảo vệ tài sản, giữ gìn bí mật công nghệ và hợp tác thiện chí.",
        keyPoints: [
          "Chấm công trung thực, không chấm công thay hay nhờ chấm hộ",
          "Tuân thủ nghiêm ngặt chuẩn an toàn thực phẩm và PCCC",
          "Bảo vệ tài sản và bảo mật thông tin kinh doanh"
        ],
        fullText: `Người lao động có nghĩa vụ:
1. Thực hiện đúng hợp đồng, Nội quy; tuân theo sự quản lý, điều hành hợp pháp.
2. Có mặt đúng lịch; chấm công trung thực; không tự ý bỏ vị trí, đổi ca, chấm công thay.
3. Thực hiện công việc cẩn trọng, trung thực, đúng phạm vi được đào tạo; chủ động báo khi thiếu công cụ hoặc không an toàn.
4. Tuân thủ yêu cầu về ATVSLĐ, ATTP, PCCC và ứng phó sự cố.
5. Tôn trọng khách hàng, đồng nghiệp; không bạo lực, xúc phạm, quấy rối.
6. Bảo vệ tài sản, hàng hóa, dữ liệu, bí mật kinh doanh của Dolphy Café.`
      },
      {
        number: 8,
        title: "Quyền của Công ty",
        summary: "Phân công, quản lý công việc, kiểm tra chất lượng, coaching khắc phục sai sót và xử lý kỷ luật đúng thủ tục luật định.",
        keyPoints: [
          "Bố trí và phân công công việc theo thỏa thuận hợp đồng",
          "Kiểm tra chất lượng và hướng dẫn đào tạo nâng cao năng lực",
          "Xử lý kỷ luật đúng thẩm quyền, đúng trình tự, không tùy tiện"
        ],
        fullText: `Công ty có quyền:
1. Tuyển dụng, bố trí, phân công, quản lý và giám sát người lao động.
2. Xây dựng tiêu chuẩn công việc, lịch làm việc, quy định theo vai trò cho Dolphy Café.
3. Kiểm tra việc thực hiện công việc, an toàn, chất lượng bằng biện pháp hợp pháp, minh bạch.
4. Ghi nhận kết quả, coaching và yêu cầu khắc phục sai sót nghiệp vụ.
5. Xác minh vụ việc; áp dụng kỷ luật hoặc trách nhiệm vật chất đúng căn cứ, thẩm quyền và thủ tục.`
      },
      {
        number: 9,
        title: "Nghĩa vụ của Công ty",
        summary: "Trả lương đúng hạn, đảm bảo an toàn, không thu tiền cọc, không giữ bản chính giấy tờ tùy thân của nhân viên.",
        keyPoints: [
          "Trả lương đủ và đúng ngày đã cam kết",
          "TUYỆT ĐỐI KHÔNG thu tiền cọc, không giữ bằng cấp/CCCD gốc",
          "Tiếp nhận và giải quyết thỏa đáng mọi phản ánh thiện chí của nhân viên"
        ],
        fullText: `Công ty có nghĩa vụ:
1. Thực hiện đúng hợp đồng lao động, trả lương và bảo đảm các quyền lợi hợp pháp, đúng thời hạn.
2. Tôn trọng danh dự, nhân phẩm của người lao động; không phân biệt đối xử, không quấy rối.
3. Tổ chức nơi làm việc an toàn; cung cấp đào tạo, công cụ và phương tiện bảo hộ cần thiết.
4. Thông báo Nội quy, lịch làm việc bằng hình thức dễ tiếp cận.
5. Tiếp nhận, xử lý phản ánh thiện chí; bảo mật thông tin, ngăn ngừa trả đũa.
6. Không thu tiền cọc, không giữ bản chính giấy tờ, không áp dụng khoản thu trái luật.`
      },
      {
        number: 10,
        title: "Trách nhiệm của cấp quản lý",
        summary: "CHT điều hành cửa hàng, QLCL kiểm soát chất lượng, DHO hỗ trợ hệ thống. Cấm quản lý tự ý phạt tiền hoặc khấu trừ lương.",
        keyPoints: [
          "Làm gương tuân thủ, giao việc rõ ràng, đánh giá công tâm",
          "Ưu tiên bảo vệ con người khi có sự cố, không ép nhân viên nhận lỗi",
          "CHT / Quản lý KHÔNG ĐƯỢC tự đặt ra tiền phạt, trừ lương hay mức bồi thường"
        ],
        fullText: `1. CHT điều hành cửa hàng; QLCL sở hữu tiêu chuẩn chất lượng; DHO sở hữu hệ thống; CEO xử lý ngoại lệ chiến lược.
2. Cấp quản lý phải giao việc rõ ràng, kiểm tra công bằng, làm gương trong việc tuân thủ.
3. Khi phát hiện vụ việc: ưu tiên bảo vệ con người, bảo toàn chứng cứ, báo đúng đầu mối, giữ bí mật, không đe dọa hay ép nhận lỗi.
4. CHT, QLCL, DHO hoặc quản lý trực tiếp không được tự đặt tiền phạt, khấu trừ lương, hình thức kỷ luật hoặc mức bồi thường. Quyết định chính thức chỉ do người có thẩm quyền thực hiện.
5. Quản lý có xung đột lợi ích phải rút lui khỏi quy trình xác minh/quyết định.`
      },
      {
        number: 11,
        title: "Trách nhiệm thông báo và hợp tác",
        summary: "Công bố kênh liên lạc chính thức. Sự cố khẩn cấp, nguy cơ an toàn hoặc quấy rối phải được báo ngay bằng kênh nhanh nhất.",
        keyPoints: [
          "Sử dụng kênh chính thức để nhận lịch và thông báo",
          "Báo ngay sự cố an toàn, bạo lực qua đường dây nóng nhanh nhất",
          "Xác nhận nhận thông tin không đồng nghĩa từ bỏ quyền khiếu nại"
        ],
        fullText: `1. Công ty công bố các kênh chính thức để người lao động nhận lịch, quy định và gửi phản ánh.
2. Người lao động kiểm tra kênh được chỉ định và xác nhận thông tin khi cần thiết.
3. Việc xác nhận nhận thông tin chỉ chứng minh việc tiếp nhận; không đồng nghĩa từ bỏ quyền khiếu nại.
4. Sự cố khẩn cấp, tai nạn, nguy cơ an toàn, quấy rối phải được báo ngay bằng kênh nhanh nhất.`
      }
    ]
  },
  {
    id: 3,
    roman: "III",
    title: "Thời Giờ Làm Việc, Nghỉ Ngơi & Chấm Công",
    subtitle: "2 ca cơ sở, ca gãy, chuẩn đúng giờ, làm thêm giờ & các chế độ nghỉ phép",
    iconName: "Clock",
    badge: "Ca Làm & Quyền Nghỉ",
    color: "from-cyan-600 to-blue-600",
    takeaway: "DHO làm 40h/tuần (T2-T6). Cửa hàng gồm 2 ca cơ sở (Ca 1: 6h/7h-14h, Ca 2: 14h-21h/22h) và ca gãy linh hoạt. Nghỉ giữa giờ 30-45 phút tính vào giờ làm nếu ca liên tục 6h+. Không phạt tiền đi trễ.",
    articles: [
      {
        number: 12,
        title: "Thời giờ làm việc bình thường",
        summary: "DHO: 08:00–12:00 & 13:00–17:00 (T2-T6, 40h/tuần). Cửa hàng: Ca 1 (6h/7h-14h), Ca 2 (14h-21h/22h) và ca gãy linh hoạt.",
        keyPoints: [
          "Không quá 8 giờ/ngày và 48 giờ/tuần",
          "2 ca cơ sở cửa hàng rõ ràng, đảm bảo luân chuyển khoa học",
          "Ca gãy không làm mất quyền nghỉ và không được dùng để vượt trần giờ làm"
        ],
        fullText: `1. Thời giờ làm việc bình thường không quá 08 giờ/ngày và 48 giờ/tuần (hoặc 10 giờ/ngày nếu theo tuần).
2. DHO làm việc từ T2 đến T6: Sáng 08:00–12:00, Chiều 13:00–17:00 (40 giờ/tuần cơ sở).
3. Hai ca cơ sở tại cửa hàng:
• Ca 1: từ 06:00 hoặc 07:00 đến 14:00;
• Ca 2: từ 14:00 đến 21:00 hoặc 22:00.
4. CHT có thể xếp ca gãy linh hoạt theo giờ, phải ghi rõ khoảng làm việc và thời gian nghỉ.`
      },
      {
        number: 13,
        title: "Lập, công bố và thay đổi lịch làm việc",
        summary: "Công bố lịch trước ít nhất 07 ngày. Đổi ca phải được CHT phê duyệt và cập nhật trên lịch chính thức.",
        keyPoints: [
          "Lịch công bố ít nhất 7 ngày trước chu kỳ",
          "Đổi ca giữa nhân viên chỉ hợp lệ khi CHT phê duyệt trên hệ thống",
          "Cấm ép nhân viên làm thêm trái luật khi thiếu người đột xuất"
        ],
        fullText: `1. Lịch làm việc được công bố ít nhất 07 ngày trước ngày bắt đầu chu kỳ.
2. Lịch thể hiện: địa điểm, ngày, giờ bắt đầu/kết thúc, thời điểm nghỉ, vị trí trong ca.
3. Khi thay đổi lịch, quản lý phải thông báo sớm, nêu lý do và bảo đảm quyền nghỉ của nhân sự.
4. Đổi ca chỉ có hiệu lực sau khi CHT phê duyệt trên kênh chính thức.`
      },
      {
        number: 14,
        title: "Chuẩn đúng giờ và chấm công",
        summary: "Có mặt sẵn sàng đúng giờ. Thời gian bắt buộc họp đầu ca, bàn giao được tính là giờ làm việc có trả lương. Không phạt tiền đi trễ.",
        keyPoints: [
          "Họp giao ban, chuẩn bị mở ca bắt buộc được tính VÀO giờ làm việc",
          "Nghiêm cấm chấm công thay, nhờ người khác chấm công hộ",
          "Tính lương theo giờ thực tế - TUYỆT ĐỐI KHÔNG phạt tiền đi trễ"
        ],
        fullText: `1. Người lao động phải có mặt và sẵn sàng làm việc tại thời điểm ca bắt đầu.
2. Thời gian họp đầu ca, chuẩn bị, bàn giao bắt buộc phải được tính và trả lương như thời giờ làm việc.
3. Nghiêm cấm chấm công thay, nhờ chấm công, sửa dữ liệu chấm công.
4. Công ty ghi nhận giờ làm thực tế, KHÔNG áp dụng tiền phạt hoặc trừ lương thay kỷ luật đối với việc đi trễ/về sớm. Tiền lương tính theo thời gian thực tế làm việc.`
      },
      {
        number: 15,
        title: "Nghỉ trong giờ làm việc, chuyển ca & nghỉ tuần",
        summary: "Ca từ 6h trở lên được nghỉ giữa giờ ít nhất 30 phút (ban đêm 45 phút). Nghỉ chuyển ca ít nhất 12 giờ. Nghỉ hằng tuần ít nhất 24 giờ liên tục.",
        keyPoints: [
          "Nghỉ giữa ca 30-45 phút liên tục, được tính vào giờ làm nếu ca liên tục từ 6h+",
          "Nghỉ cách ca ít nhất 12 tiếng giữa 2 ca làm việc liên tiếp",
          "Bảo đảm ít nhất 4 ngày nghỉ/tháng cho mỗi nhân sự cửa hàng"
        ],
        fullText: `1. Ca từ 06 giờ trở lên được nghỉ giữa giờ ít nhất 30 phút liên tục (ban đêm ít nhất 45 phút). Ca liên tục từ 6h trở lên thời gian nghỉ được tính vào giờ làm việc.
2. CHT bố trí luân phiên nghỉ, không để người lao động làm liên tục quá giới hạn vì lý do đông khách.
3. Người làm việc theo ca được nghỉ ít nhất 12 giờ trước khi chuyển sang ca khác.
4. Mỗi tuần được nghỉ ít nhất 24 giờ liên tục (hoặc bình quân 04 ngày nghỉ trong tháng).`
      },
      {
        number: 16,
        title: "Làm thêm giờ và làm việc ban đêm",
        summary: "Chỉ làm thêm khi có thỏa thuận đồng ý. Lương làm thêm: 150% ngày thường, 200% ngày nghỉ tuần, 300% ngày lễ Tết. Giờ đêm 22:00-06:00 có phụ cấp theo luật.",
        keyPoints: [
          "Làm thêm giờ phải có sự đồng ý tự nguyện của người lao động",
          "Mức lương OT: 150% (thường), 200% (nghỉ tuần), 300% (lễ Tết) + phụ cấp đêm",
          "Không được tự ý ép nhân viên nhận nghỉ bù để thay thế tiền lương OT bắt buộc"
        ],
        fullText: `1. Chỉ tổ chức làm thêm khi có nhu cầu thực tế và có sự ĐỒNG Ý của người lao động.
2. Giờ làm từ 22:00 đến 06:00 được tính là làm việc ban đêm.
3. Trả lương làm thêm: ít nhất 150% vào ngày thường, 200% ngày nghỉ tuần, 300% ngày lễ/Tết.
4. Công ty không được thay tiền lương làm thêm bằng nghỉ bù nếu làm giảm quyền lợi bắt buộc.`
      },
      {
        number: 18,
        title: "Nghỉ hằng năm (Phép năm)",
        summary: "Đủ 12 tháng được nghỉ 12 ngày phép nguyên lương. Cứ mỗi 5 năm làm việc được cộng thêm 1 ngày phép. Thôi việc được thanh toán phép chưa nghỉ.",
        keyPoints: [
          "12 ngày phép năm hưởng 100% lương",
          "Thâm niên: Cứ 5 năm làm việc tại Dolphy được thưởng thêm 1 ngày phép",
          "Phép còn lại được sử dụng đến hết 31/03 năm sau hoặc thanh toán khi thôi việc"
        ],
        fullText: `1. Làm đủ 12 tháng được nghỉ 12 ngày làm việc hưởng nguyên lương.
2. Cứ đủ 05 năm làm việc cho Công ty, số ngày nghỉ hằng năm tăng thêm 01 ngày.
3. Báo trước nghỉ phép: nghỉ 1 ngày báo trước 3 ngày; nghỉ 2-3 ngày báo trước 7 ngày; nghỉ từ 4 ngày báo trước 15 ngày.
4. Ngày phép chưa dùng hết có thể chuyển đến 31/03 năm sau. Khi thôi việc, Công ty thanh toán tiền lương các ngày phép chưa nghỉ theo luật.`
      },
      {
        number: 19,
        title: "Nghỉ việc riêng hưởng nguyên lương",
        summary: "Kết hôn: nghỉ 3 ngày. Con kết hôn: nghỉ 1 ngày. Cha/mẹ/vợ/chồng/con mất: nghỉ 3 ngày hưởng nguyên lương. Nghỉ không lương theo luật định.",
        keyPoints: [
          "Bản thân kết hôn: Nghỉ 03 ngày nguyên lương",
          "Con kết hôn: Nghỉ 01 ngày nguyên lương",
          "Tứ thân phụ mẫu, vợ/chồng, con mất: Nghỉ 03 ngày nguyên lương"
        ],
        fullText: `1. Nghỉ việc riêng hưởng nguyên lương:
• Kết hôn: 03 ngày;
• Con đẻ/con nuôi kết hôn: 01 ngày;
• Cha/mẹ đẻ, cha/mẹ vợ/chồng, vợ/chồng, con mất: 03 ngày.
2. Nghỉ không hưởng lương 01 ngày: ông/bà nội ngoại, anh chị em ruột mất; cha mẹ hoặc anh chị em kết hôn.
3. Các chế độ ốm đau, thai sản thực hiện đầy đủ theo Luật Bảo hiểm Xã hội.`
      }
    ]
  },
  {
    id: 4,
    roman: "IV",
    title: "Trật Tự Nơi Làm Việc & Chuẩn Mực Hành Xử",
    subtitle: "5S quầy bar, đồng phục, khu vực hạn chế, điện thoại cá nhân & văn hóa ứng xử",
    iconName: "Sparkles",
    badge: "Chuẩn Mực & Văn Hóa",
    color: "from-amber-500 to-yellow-500",
    takeaway: "Tiêu chuẩn 5S quầy bar, đồng phục giày bít mũi an toàn. Không cấm màu tóc hay hình xăm thẩm mỹ (chỉ yêu cầu gọn gàng, an toàn). Điện thoại cá nhân dùng đúng nơi quy định, không làm xao nhãng khi phục vụ.",
    articles: [
      {
        number: 21,
        title: "Nguyên tắc duy trì trật tự nơi làm việc",
        summary: "Có mặt đúng khu vực, không tự ý bỏ vị trí làm gián đoạn phục vụ. Giữ nơi làm việc sạch gọn theo chuẩn 5S. Âm nhạc quán theo danh mục chuẩn Dolphy.",
        keyPoints: [
          "Giữ nơi làm việc sạch sẽ, gọn gàng, ngăn nắp theo nguyên tắc 5S",
          "Không tự ý rời vị trí khi đang trong ca phục vụ",
          "Âm lượng và playlist nhạc quán tuân thủ gu thẩm mỹ chuẩn Dolphy"
        ],
        fullText: `1. Người lao động có mặt đúng khu vực, không tự ý rời vị trí khi việc rời vị trí có thể làm gián đoạn phục vụ hay mất an toàn.
2. Giữ nơi làm việc sạch, gọn và thông thoáng theo chuẩn 5S.
3. Không gây ồn ào cản trở phục vụ khách hàng. Âm nhạc không gian cửa hàng sử dụng theo danh mục và âm lượng do Công ty quy định.`
      },
      {
        number: 22,
        title: "Đồng phục, tác phong và vệ sinh cá nhân",
        summary: "Đồng phục, bảng tên, tạp dề sạch sẽ, giày bít mũi bảo vệ an toàn. Tôn trọng cá tính: không cấm màu tóc hay hình xăm chỉ vì thẩm mỹ.",
        keyPoints: [
          "Trang phục gọn gàng, giày bít mũi bít gót chống trơn trượt quầy bar",
          "Tóc tai, móng tay sạch sẽ, đảm bảo vệ sinh an toàn thực phẩm",
          "TÔN TRỌNG CÁ TÍNH: Không kỳ thị màu tóc hay hình xăm (chỉ cần búi gọn và văn minh)"
        ],
        fullText: `1. Nhân viên cửa hàng mặc đúng đồng phục, bảng tên, tạp dề; quần dài và giày bít mũi, bít gót an toàn.
2. Người pha chế giữ tóc, móng tay sạch gọn; không để trang sức gây mất vệ sinh an toàn thực phẩm.
3. KHÔNG HẠN CHẾ màu tóc, hình xăm hoặc khuyên chỉ vì sở thích thẩm mỹ; chỉ yêu cầu buộc gọn, che chắn khi cần thiết cho an toàn thực phẩm.`
      },
      {
        number: 23,
        title: "Ra vào quầy bar, kho và khu vực hạn chế",
        summary: "Chỉ người có nhiệm vụ mới được vào quầy bar và kho. Barista có quyền yêu cầu người lạ/người ngoài ca rời khỏi quầy bar để đảm bảo an toàn.",
        keyPoints: [
          "Quầy pha chế và kho là khu vực bảo mật vận hành",
          "Bạn bè, người thân không được vào quầy bar khi chưa có sự đồng ý của CHT",
          "Barista có quyền bảo vệ quầy bar trước hành vi không an toàn của người ngoài"
        ],
        fullText: `1. Quyền ra vào quầy bar, kho, thu ngân được xác định theo vai trò và ca làm việc.
2. Barista đang làm việc CÓ QUYỀN yêu cầu dừng ngay hành vi không an toàn hoặc việc ra vào chưa được phép của người khác và báo CHT.
3. Người ngoài ca, bạn bè, người thân không được tự ý vào quầy bar và khu vực hạn chế.`
      },
      {
        number: 25,
        title: "Điện thoại, ghi âm, ghi hình và thiết bị",
        summary: "Sử dụng điện thoại cá nhân trong giờ nghỉ hoặc việc khẩn cấp. Không dùng điện thoại khi đang pha chế hoặc xử lý tiền mặt. Cấm chụp lén khách hàng/đồng nghiệp.",
        keyPoints: [
          "Tập trung phục vụ, không bấm điện thoại khi đang đứng quầy hoặc thu ngân",
          "Nghiêm cấm tự ý quay phim, chụp ảnh dữ liệu khách hàng hoặc nội bộ đưa lên mạng",
          "Được quyền lưu giữ bằng chứng hợp pháp khi báo cáo hành vi vi phạm"
        ],
        fullText: `1. Điện thoại cá nhân dùng cho công việc đã duyệt, khẩn cấp hoặc trong giờ nghỉ.
2. Không dùng điện thoại gây xao nhãng khi phục vụ khách hàng, xử lý tiền, pha chế.
3. Không tự ý quay phim, chụp ảnh, livestream thông tin khách hàng, màn hình làm việc hoặc đồng nghiệp lên mạng xã hội trái phép.`
      },
      {
        number: 26,
        title: "Ăn uống, hút thuốc, rượu bia & chất kích thích",
        summary: "Ăn uống đúng khu vực quy định (không ăn tại quầy pha chế). Cấm hút thuốc, cấm rượu bia trong giờ làm. Tuyệt đối nghiêm cấm ma túy.",
        keyPoints: [
          "Ăn uống trong giờ nghỉ tại khu vực riêng, không ăn tại quầy pha chế",
          "Nghiêm cấm hút thuốc lá và thuốc lá điện tử trong không gian làm việc",
          "Nghiêm cấm uống rượu bia và tuyệt đối cấm chất kích thích/ma túy"
        ],
        fullText: `1. Ăn trong thời gian nghỉ tại khu vực chỉ định, không ăn tại quầy pha chế hay khu thu ngân.
2. Không hút thuốc lá, thuốc lá điện tử tại nơi làm việc của Dolphy.
3. Không uống rượu bia trong thời giờ làm việc. Nghiêm cấm tàng trữ, sử dụng ma túy.`
      }
    ]
  },
  {
    id: 5,
    roman: "V",
    title: "An Toàn Lao Động, PCCC, ATTP & Ứng Phó Sự Cố",
    subtitle: "Quyền dừng việc nguy hiểm, quyền dừng phục vụ thực phẩm lỗi & chỉ huy khẩn cấp",
    iconName: "Flame",
    badge: "An Toàn Là Số 1",
    color: "from-red-600 to-amber-600",
    takeaway: "BẢO VỆ CON NGƯỜI LÀ TRÊN HẾT. Nhân viên có quyền lập tức dừng công việc nguy hiểm đến tính mạng hoặc dừng bán nguyên liệu nghi ngờ hỏng mà không sợ bị phạt hay trừ lương.",
    articles: [
      {
        number: 30,
        title: "Nguyên tắc phòng ngừa & Quyền dừng việc",
        summary: "Không đánh đổi tính mạng, sức khỏe để duy trì tốc độ phục vụ. Người lao động được quyền dừng việc và rời khu vực nguy hiểm khi thấy có nguy cơ rõ ràng.",
        keyPoints: [
          "Tính mạng và sức khỏe con người là ưu tiên số 1",
          "QUYỀN DỪNG VIỆC: Được dừng thao tác nguy hiểm và báo ngay cho CHT",
          "Không bị kỷ luật, không bị trừ lương khi thực hiện quyền dừng việc thiện chí"
        ],
        fullText: `1. Công ty và người lao động ưu tiên phòng ngừa rủi ro; KHÔNG ĐÁNH ĐỔI tính mạng, sức khỏe hoặc an toàn thực phẩm để duy trì tốc độ phục vụ hay doanh thu.
2. Khi thấy rõ nguy cơ đe dọa nghiêm trọng tính mạng hoặc sức khỏe, người lao động ĐƯỢC DỪNG NHIỆM VỤ của mình, cảnh báo người xung quanh và rời khu vực an toàn; báo ngay cho CHT.
3. Người lao động KHÔNG BỊ TRẢ ĐŨA hoặc coi là vi phạm vì thực hiện quyền này thiện chí.`
      },
      {
        number: 32,
        title: "Báo động, chỉ huy và ưu tiên ứng phó khẩn cấp",
        summary: "Bất kỳ ai phát hiện sự cố đều có quyền báo động và gọi cứu nạn (114, 115) ngay lập tức mà không cần chờ cấp trên phê duyệt.",
        keyPoints: [
          "Bất kỳ nhân viên nào cũng được quyền hô hoán báo động và gọi cứu hỏa/cấp cứu",
          "Thứ tự ưu tiên: 1. Cứu người -> 2. Cảnh báo -> 3. Sơ tán -> 4. Bảo vệ tài sản",
          "Không trì hoãn hành động cứu người để chờ đợi thủ tục báo cáo"
        ],
        fullText: `1. Bất kỳ người lao động nào phát hiện cháy, tai nạn, rò điện, ngộ độc đều CÓ QUYỀN BÁO ĐỘNG VÀ GỌI LỰC LƯỢNG HỖ TRỢ (114, 115), không phải chờ phê duyệt.
2. Thứ tự ưu tiên: Bảo vệ con người -> Cảnh báo & gọi hỗ trợ -> Sơ tán/cô lập nguy cơ -> Sơ cứu -> Bảo vệ tài sản khi an toàn cho phép.
3. CHT là đầu mối điều phối tại cửa hàng; quản lý DHO tại văn phòng.`
      },
      {
        number: 34,
        title: "An toàn thực phẩm & Quyền dừng phục vụ",
        summary: "Không phục vụ nguyên liệu quá hạn hoặc có dấu hiệu hỏng. Nhân viên phát hiện sữa/cà phê có vấn đề ĐƯỢC DỪNG PHỤC VỤ NGAY LẬP TỨC.",
        keyPoints: [
          "Cấm tuyệt đối pha chế nguyên liệu hết hạn, ôi thiu, biến chất",
          "QUYỀN DỪNG PHỤC VỤ: Barista có quyền ngừng bán món nghi ngờ hư hỏng",
          "Nghiêm cấm quản lý ép nhân viên tiếp tục bán hàng không an toàn thực phẩm"
        ],
        fullText: `1. Tuân thủ chuẩn nhiệt độ, hạn dùng, chống nhiễm chéo và vệ sinh máy móc.
2. Không sử dụng hoặc phục vụ nguyên liệu hết hạn, có dấu hiệu hư hỏng, dị vật hoặc biến mùi.
3. Người phát hiện ĐƯỢC QUYỀN DỪNG PHỤC VỤ sản phẩm liên quan ngay lập tức, cách ly lô hàng và báo CHT; không cần chờ phê duyệt mới dừng bán.
4. Nghiêm cấm ép nhân viên tiếp tục bán hoặc sửa nhãn mác che giấu sự cố.`
      },
      {
        number: 35,
        title: "Sức khỏe của người tiếp xúc thực phẩm",
        summary: "Khi bị bệnh truyền nhiễm hoặc có triệu chứng cúm, da liễu cần báo kín đáo cho CHT để bố trí nghỉ hoặc đổi vị trí an toàn. Được bảo mật thông tin bệnh án.",
        keyPoints: [
          "Chủ động báo kín đáo khi có vấn đề sức khỏe để đảm bảo an toàn quầy bar",
          "Công ty bảo mật tuyệt đối thông tin y tế cá nhân",
          "Báo bệnh nghỉ hợp pháp KHÔNG BỊ COI LÀ VI PHẠM KỶ LUẬT"
        ],
        fullText: `1. Người trực tiếp pha chế phải báo kín đáo cho quản lý khi có triệu chứng bệnh truyền nhiễm có khả năng gây mất an toàn thực phẩm.
2. Quản lý bố trí công việc khác phù hợp hoặc hướng dẫn người lao động nghỉ khám theo chế độ.
3. Công ty bảo mật thông tin sức khỏe của nhân sự, không kỳ thị hay phân biệt đối xử.`
      }
    ]
  },
  {
    id: 6,
    roman: "VI",
    title: "Phòng, Chống Quấy Rối Tình Dục & Quy Trình Xử Lý",
    subtitle: "Nghiêm cấm tuyệt đối, nhận diện 4 nhóm hành vi, 2 kênh tiếp nhận độc lập",
    iconName: "HeartHandshake",
    badge: "Môi Trường An Toàn",
    color: "from-purple-600 to-pink-600",
    takeaway: "KHÔNG KHOAN NHƯỢNG VỚI QUẤY RỐI. 2 kênh độc lập (HR/People & Đầu mối Bảo vệ độc lập). Tiếp nhận ẩn danh, bảo vệ tạm thời trong 24h, cấm tuyệt đối trả đũa, xử lý nghiêm đến mức sa thải.",
    articles: [
      {
        number: 38,
        title: "Chính sách nghiêm cấm & Phạm vi bảo vệ",
        summary: "Nghiêm cấm quấy rối tình dục dưới mọi hình thức, bất kể giới tính hay chức vụ. Áp dụng tại cửa hàng, sự kiện, công tác và cả giao tiếp trên mạng.",
        keyPoints: [
          "Bảo vệ tất cả nhân sự không phân biệt giới tính, chức vụ hay thâm niên",
          "Phạm vi bao gồm cả không gian trực tuyến, tin nhắn, tiệc công ty và sự kiện",
          "Cam kết tạo dựng môi trường làm việc văn minh, bình đẳng và an toàn"
        ],
        fullText: `1. Công ty nghiêm cấm quấy rối tình dục tại nơi làm việc dưới mọi hình thức, không phụ thuộc giới tính, chức danh, thâm niên hay quan hệ quyền lực.
2. Bảo vệ toàn diện người lao động trước hành vi của đồng nghiệp, cấp trên, khách hàng hoặc đối tác.
3. Không gian bảo vệ gồm cửa hàng, văn phòng, sự kiện, liên hoan, xe đưa đón và cả tin nhắn/cuộc gọi công việc.`
      },
      {
        number: 39,
        title: "Nhận diện hành vi quấy rối tình dục",
        summary: "Phân loại rõ: 1) Trao đổi lợi ích công việc; 2) Thể chất (đụng chạm không mong muốn); 3) Lời nói (gạ gẫm, đùa cợt thô tục); 4) Phi lời nói (nhìn chằm chằm, gửi ảnh nhạy cảm).",
        keyPoints: [
          "Trao đổi lợi ích: Ép buộc quan hệ tình dục để đổi lấy lịch làm, tăng ca, thăng tiến",
          "Thể chất: Ôm, hôn, áp sát, đụng chạm cơ thể không mong muốn",
          "Lời nói & Phi lời nói: Nhận xét cơ thể, đùa cợt dung tục, gửi tin nhắn/hình ảnh nhạy cảm"
        ],
        fullText: `Quấy rối tình dục gồm 4 nhóm hành vi không mong muốn:
1. Trao đổi lợi ích: Gợi ý, ép buộc hành vi tình dục để đổi lấy ca làm, đánh giá, thưởng hoặc tránh bị kỷ luật.
2. Thể chất: Tiếp xúc, đụng chạm, ôm, hôn, chặn đường, áp sát mang tính chất tình dục không mong muốn.
3. Lời nói: Nhận xét cơ thể, câu hỏi đời tư, đề nghị khiếm nhã, đùa cợt tình dục trực tiếp hoặc qua điện thoại.
4. Phi lời nói: Ánh nhìn gợi dục, cử chỉ cơ thể, gửi/trưng bày hình ảnh, video nhạy cảm.`
      },
      {
        number: 40,
        title: "2 Kênh tiếp nhận độc lập theo DEC-020",
        summary: "Duy trì 2 kênh tiếp nhận độc lập: 1) Đầu mối HR/People tại DHO; 2) Đầu mối Bảo vệ con người độc lập do CEO chỉ định. Chấp nhận phản ánh ẩn danh.",
        keyPoints: [
          "Kênh 1: Bộ phận Nhân sự HR/People tại DHO",
          "Kênh 2: Đầu mối Bảo vệ con người ĐỘC LẬP do CEO trực tiếp bổ nhiệm",
          "Cho phép gửi phản ánh ẨN DANH, tránh tuyệt đối xung đột lợi ích"
        ],
        fullText: `1. Công ty duy trì 02 kênh tiếp nhận trung tâm:
• Kênh 1: Đầu mối HR/People thuộc DHO;
• Kênh 2: Đầu mối Bảo vệ con người độc lập do CEO chỉ định.
2. Phản ánh có thể gửi bằng văn bản, tin nhắn, gọi điện; có thể nêu danh hoặc ẨN DANH.
3. Quản lý nhận được thông tin phải chuyển ngay đến 1 trong 2 đầu mối, cấm tự hòa giải hay yêu cầu im lặng.
4. Khi quản lý hoặc người tiếp nhận có xung đột lợi ích, vụ việc tự động chuyển sang đầu mối còn lại.`
      },
      {
        number: 41,
        title: "Tiếp nhận, đánh giá an toàn & Bảo vệ tạm thời",
        summary: "Phản hồi trong 24 giờ. Áp dụng ngay biện pháp bảo vệ nạn nhân: tách ca làm, đổi tuyến báo cáo, không ép nạn nhân phải chuyển địa điểm.",
        keyPoints: [
          "Xác nhận tiếp nhận trong 1 ngày làm việc, đánh giá nguy cơ trong 24h",
          "Bảo vệ tạm thời: Tách ca, thay đổi người quản lý, hỗ trợ tâm lý",
          "Ưu tiên nguyện vọng nạn nhân, TUYỆT ĐỐI KHÔNG mặc định điều chuyển nạn nhân"
        ],
        fullText: `1. Đầu mối xác nhận tiếp nhận trong 01 ngày làm việc; đánh giá nguy cơ khẩn cấp trong 24 giờ.
2. Biện pháp bảo vệ tạm thời: Hạn chế tiếp xúc, đổi ca, đổi người phụ trách, bảo vệ dữ liệu, hỗ trợ y tế.
3. Lựa chọn biện pháp theo rủi ro, ưu tiên bảo vệ người bị ảnh hưởng và KHÔNG mặc định điều chuyển họ.`
      },
      {
        number: 44,
        title: "Bảo mật thông tin & Nghiêm cấm trả đũa",
        summary: "Tuyệt đối cấm hành vi đe dọa, cắt ca, cô lập hoặc trừng phạt người phản ánh thiện chí hoặc người làm chứng. Bảo mật hồ sơ theo quy định.",
        keyPoints: [
          "Bảo mật thông tin người phản ánh và người làm chứng",
          "NGHIÊM CẤM TRẢ ĐŨA: Cấm cắt ca, đì việc, hạ đánh giá người phản ánh thiện chí",
          "Hành vi trả đũa sẽ bị kỷ luật nặng (kéo dài nâng lương, cách chức hoặc sa thải)"
        ],
        fullText: `1. Thông tin vụ việc được chia sẻ nghiêm ngặt theo nguyên tắc cần-biết.
2. CẤM TUYỆT ĐỐI mọi hành vi trả đũa: đe dọa, cắt ca, cô lập, hạ đánh giá đối với người bị ảnh hưởng, người phản ánh hoặc nhân chứng.
3. Người phản ánh thiện chí nhưng không đủ chứng cứ sẽ KHÔNG BỊ XỬ LÝ KỶ LUẬT.`
      }
    ]
  },
  {
    id: 7,
    roman: "VII",
    title: "Bảo Vệ Tài Sản, Thông Tin, Dữ Liệu & SHTT",
    subtitle: "Phân quyền tối thiểu, bảo vệ dữ liệu cá nhân & quyền nói về lương của chính mình",
    iconName: "Lock",
    badge: "Bảo Mật & Tài Sản",
    color: "from-blue-800 to-indigo-900",
    takeaway: "Tài sản và công thức cà phê được bảo vệ nghiêm ngặt. Người lao động ĐƯỢC QUYỀN trao đổi về mức lương của CHÍNH MÌNH. Dữ liệu cá nhân của khách hàng và nhân viên được bảo mật tuyệt đối.",
    articles: [
      {
        number: 47,
        title: "Mục đích, phạm vi & Nguyên tắc phân quyền",
        summary: "Bảo vệ tiền, hàng, máy móc, công thức độc quyền và dữ liệu khách hàng theo nguyên tắc quyền tối thiểu cần thiết và có thể truy vết.",
        keyPoints: [
          "Nguyên tắc quyền tối thiểu: Đúng người, đúng nhiệm vụ, đúng mục đích",
          "Dữ liệu cá nhân được bảo vệ theo Luật Bảo vệ Dữ liệu Cá nhân",
          "Không tự tiện sử dụng tài sản công ty cho mục đích cá nhân"
        ],
        fullText: `1. Quy định chuẩn bảo vệ tiền, hàng hóa, thiết bị máy pha, tài khoản, công thức pha chế độc quyền của Dolphy.
2. Người lao động sử dụng tài sản đúng nhiệm vụ được giao.
3. Dữ liệu cá nhân của nhân sự và khách hàng được bảo vệ theo pháp luật, không đồng nhất với tài sản sở hữu tự do của Công ty.`
      },
      {
        number: 49,
        title: "Thông tin bí mật và phạm vi bảo vệ",
        summary: "Bí mật kinh doanh gồm công thức pha chế, chiến lược kinh doanh, dữ liệu tài chính chưa công bố, mã khóa hệ thống.",
        keyPoints: [
          "Bí mật công thức hạt rang mộc và quy chuẩn pha chế độc quyền của Dolphy",
          "Không sao chép, trích xuất dữ liệu nội bộ gửi ra ngoài",
          "Chỉ chia sẻ thông tin cần thiết trong phạm vi công việc được giao"
        ],
        fullText: `1. Thông tin bí mật gồm bí mật kinh doanh, công thức pha chế độc quyền, chiến lược chưa công bố, dữ liệu tài chính, khách hàng, mật khẩu truy cập.
2. Người lao động có trách nhiệm giữ bí mật, không sao chép, tải xuống hay chia sẻ ra bên ngoài.`
      },
      {
        number: 50,
        title: "Ngoại lệ hợp pháp & Quyền trao đổi lương",
        summary: "Được quyền phản ánh vi phạm với cơ quan chức năng. ĐẶC BIỆT: Việc trao đổi thông tin về mức lương của CHÍNH MÌNH không bị coi là lộ bí mật công ty.",
        keyPoints: [
          "Người lao động ĐƯỢC QUYỀN trao đổi về lương và quyền lợi của CHÍNH MÌNH",
          "Nghiêm cấm việc xâm nhập hoặc phát tán bảng lương của người khác",
          "Được quyền cung cấp thông tin theo yêu cầu của cơ quan pháp luật"
        ],
        fullText: `1. Nghĩa vụ bảo mật không ngăn cản người lao động báo cáo vi phạm, bảo vệ quyền lợi hợp pháp của mình.
2. Việc trao đổi thông tin về lương, quyền lợi và điều kiện làm việc CỦA CHÍNH NGƯỜI LAO ĐỘNG không mặc nhiên là tiết lộ bí mật kinh doanh của Công ty.
3. Người lao động không được vì mục đích đó mà truy cập, lấy cắp hoặc phát tán dữ liệu lương của người khác.`
      },
      {
        number: 52,
        title: "Xử lý dữ liệu cá nhân",
        summary: "Không dùng số điện thoại của khách hàng hay đồng nghiệp cho việc riêng hoặc tiếp thị ngoài công việc. Cấm chụp màn hình danh sách khách hàng.",
        keyPoints: [
          "Tuyệt đối không lấy số điện thoại khách hàng tại quầy để nhắn tin làm quen",
          "Không lưu dữ liệu khách hàng vào điện thoại hay thiết bị cá nhân",
          "Bảo mật thông tin hồ sơ nhân sự và sức khỏe của đồng nghiệp"
        ],
        fullText: `1. Chỉ thu thập, sử dụng dữ liệu khách hàng, ứng viên cho mục đích công việc hợp pháp.
2. KHÔNG DÙNG dữ liệu khách hàng cho tò mò cá nhân, tiếp thị riêng hoặc liên hệ ngoài luồng.
3. Không tự chụp màn hình, trích xuất danh sách khách hàng sang tài khoản cá nhân.`
      }
    ]
  },
  {
    id: 8,
    roman: "VIII",
    title: "Tạm Thời Chuyển Người Lao Động Làm Công Việc Khác",
    subtitle: "Căn cứ hợp pháp, báo trước 3 ngày, tối đa 60 ngày/năm & bảo lưu 100% lương 30 ngày đầu",
    iconName: "ArrowRightLeft",
    badge: "Điều Động Công Việc",
    color: "from-teal-600 to-cyan-700",
    takeaway: "Công ty chỉ được chuyển việc khi có khó khăn đột xuất hoặc nhu cầu SXKD thực tế. Phải báo trước 03 ngày làm việc, tối đa 60 ngày cộng dồn/năm. GIỮ NGUYÊN 100% LƯƠNG TRONG 30 NGÀY ĐẦU (sau đó tối thiểu 85%).",
    articles: [
      {
        number: 57,
        title: "Căn cứ tạm thời chuyển sang công việc khác",
        summary: "Chỉ áp dụng khi có thiên tai, dịch bệnh, sự cố điện nước hoặc thiếu hụt nhân sự đột xuất (ốm, thai sản, mùa lễ đông khách). Không dùng để phạt nhân viên.",
        keyPoints: [
          "Áp dụng khi thiếu nhân sự đột xuất, khai trương chi nhánh mới, mùa cao điểm",
          "TUYỆT ĐỐI KHÔNG dùng điều chuyển việc làm hình thức trừng phạt ngầm",
          "Hết căn cứ tạm thời phải đưa người lao động trở lại công việc cũ"
        ],
        fullText: `1. Công ty chỉ tạm thời chuyển việc khi gặp khó khăn đột xuất do thiên tai, hỏa hoạn, sự cố điện nước hoặc nhu cầu sản xuất kinh doanh cấp bách.
2. Nhu cầu SXKD gồm: thiếu hụt nhân sự đột xuất (nghỉ ốm, thai sản, nghỉ việc bất ngờ); mùa cao điểm sự kiện; mở mới hoặc sửa chữa cửa hàng.
3. Không áp dụng để giảm chi phí, gây áp lực ép nghỉ việc hoặc xử lý kỷ luật.`
      },
      {
        number: 58,
        title: "Quy trình đề xuất và thông báo trước 3 ngày",
        summary: "Phải thông báo bằng văn bản hoặc kênh chính thức trước ít nhất 03 ngày làm việc, nêu rõ lý do, địa điểm, thời hạn và mức lương.",
        keyPoints: [
          "Bắt buộc thông báo trước ít nhất 03 ngày làm việc",
          "Nêu rõ công việc mới, thời gian hỗ trợ, người hướng dẫn và quyền lợi",
          "Không được tự ý ép người lao động nhận việc khác ngay lập tức"
        ],
        fullText: `1. Quản lý lập đề xuất nêu rõ căn cứ, công việc, nơi làm, thời hạn và tác động tiền lương.
2. HR/People kiểm tra số ngày cộng dồn trong năm và hồ sơ pháp lý.
3. Công ty THÔNG BÁO CHO NGƯỜI LAO ĐỘNG TRƯỚC ÍT NHẤT 03 NGÀY LÀM VIỆC.`
      },
      {
        number: 59,
        title: "Thời hạn tối đa 60 ngày & Quyền từ chối",
        summary: "Không được chuyển quá 60 ngày làm việc cộng dồn trong 1 năm nếu không có văn bản đồng ý của nhân viên. Không đồng ý không bị xem là vi phạm kỷ luật.",
        keyPoints: [
          "Giới hạn tối đa 60 ngày làm việc cộng dồn trong 1 năm",
          "Vượt quá 60 ngày PHẢI CÓ SỰ ĐỒNG Ý BẰNG VĂN BẢN của người lao động",
          "Từ chối làm quá 60 ngày KHÔNG BỊ KỶ LUẬT hay trả đũa"
        ],
        fullText: `1. Thời gian tạm chuyển không có sự đồng ý của người lao động KHÔNG VƯỢT QUÁ 60 NGÀY LÀM VIỆC cộng dồn trong một năm.
2. HR/People theo dõi chính xác số ngày cộng dồn.
3. Nếu người lao động không đồng ý làm công việc khác quá 60 ngày cộng dồn, họ KHÔNG BỊ TRẢ ĐŨA, kỷ luật hay đánh giá bất lợi.`
      },
      {
        number: 61,
        title: "Bảo lưu tiền lương & Quyền lợi",
        summary: "Lương công việc mới thấp hơn: GIỮ NGUYÊN 100% LƯƠNG CŨ TRONG 30 NGÀY ĐẦU. Sau đó trả theo việc mới nhưng tối thiểu 85% lương cũ và không dưới lương tối thiểu.",
        keyPoints: [
          "30 ngày đầu tiên: Giữ nguyên 100% tiền lương công việc cũ",
          "Từ ngày 31 trở đi: Lương không thấp hơn 85% lương cũ và trên mức tối thiểu vùng",
          "Nếu công việc mới có lương cao hơn: Hưởng ngay mức lương cao hơn của việc mới"
        ],
        fullText: `1. Người lao động được trả lương theo công việc mới. Nếu lương việc mới thấp hơn, GIỮ NGUYÊN TIỀN LƯƠNG CŨ TRONG 30 NGÀY LÀM VIỆC ĐẦU TIÊN.
2. Sau 30 ngày, lương công việc mới KHÔNG THẤP HƠN 85% lương cũ và không thấp hơn mức lương tối thiểu vùng.
3. Nếu công việc mới có mức lương cao hơn, người lao động được hưởng mức lương cao hơn.`
      }
    ]
  },
  {
    id: 9,
    roman: "IX",
    title: "Hành Vi Vi Phạm & Kỷ Luật Lao Động",
    subtitle: "4 hình thức luật định (K, N1, N2, S), kế hoạch khắc phục 14-30 ngày, cấm phạt tiền",
    iconName: "Scale",
    badge: "Kỷ Luật Minh Bạch",
    color: "from-slate-700 to-slate-900",
    takeaway: "4 hình thức luật định duy nhất: Khiển trách (K), Kéo dài nâng lương (N1), Cách chức (N2), Sa thải (S). TUYỆT ĐỐI KHÔNG DÙNG TIỀN PHẠT HAY TRỪ LƯƠNG. Có Kế hoạch khắc phục hành vi 14-30 ngày hỗ trợ sửa sai.",
    articles: [
      {
        number: 64,
        title: "Phạm vi & Nguyên tắc xử lý kỷ luật",
        summary: "Chỉ xử lý hành vi có trong Phụ lục A. Không phạt tiền, không trừ lương đã phát sinh, không xử lý tập thể, mỗi người chịu trách nhiệm độc lập.",
        keyPoints: [
          "Chỉ kỷ luật hành vi đã quy định rõ ràng trong Phụ lục A",
          "NGHIÊM CẤM: Phạt tiền, trừ lương, nộp quỹ, viết kiểm điểm ép buộc",
          "Không kỷ luật tập thể theo ca hay theo quán, chứng minh lỗi từng cá nhân"
        ],
        fullText: `1. Kỷ luật chỉ xem xét đối với hành vi cụ thể được mô tả tại Phụ lục A của Nội quy.
2. Sai sót nghiệp vụ, điểm tuân thủ, kỷ luật lao động và bồi thường là các luồng riêng biệt.
3. Không xử lý tập thể. Mỗi người chỉ chịu trách nhiệm về hành vi của mình.
4. KHÔNG DÙNG PHẠT TIỀN, cắt lương/thưởng đã phát sinh, trừ ca hay nộp quỹ thay hình thức kỷ luật.`
      },
      {
        number: 65,
        title: "4 Hình thức kỷ luật & Kế hoạch khắc phục",
        summary: "4 hình thức: K (Khiển trách), N1 (Kéo dài nâng lương <= 6 tháng), N2 (Cách chức), S (Sa thải). Đi kèm Kế hoạch khắc phục hành vi 14-30 ngày giúp nhân viên sửa lỗi.",
        keyPoints: [
          "Chỉ có 4 hình thức hợp pháp: K, N1, N2, S (Không có hình thức cảnh cáo hay phạt tiền)",
          "Sa thải (S) chỉ áp dụng cho lỗi cực kỳ nghiêm trọng được luật cho phép",
          "Kế hoạch khắc phục hành vi (14-30 ngày): Coaching, hỗ trợ đào tạo giúp nhân sự thay đổi"
        ],
        fullText: `1. Các hình thức kỷ luật gồm:
• K — Khiển trách;
• N1 — Kéo dài thời hạn nâng lương không quá 06 tháng;
• N2 — Cách chức;
• S — Sa thải.
2. Phụ lục A xác định hình thức tối đa có thể xem xét. Có thể áp dụng hình thức nhẹ hơn hoặc không kỷ luật nếu có tình tiết giảm nhẹ.
3. Khi áp dụng K, N1, N2: Công ty lập Kế hoạch khắc phục hành vi (14 hoặc 30 ngày) để coaching, hỗ trợ nhân sự sửa đổi; không coi đây là hình phạt thứ hai.`
      },
      {
        number: 66,
        title: "Thời hiệu xử lý kỷ luật",
        summary: "Thời hiệu tối đa 06 tháng (12 tháng đối với vi phạm tài sản, tài chính hoặc bí mật công nghệ). Không xử lý khi người lao động đang ốm đau, thai sản, nuôi con nhỏ.",
        keyPoints: [
          "Thời hiệu: 06 tháng (vi phạm thông thường), 12 tháng (tài sản/bí mật)",
          "Không xử lý trong thời gian nghỉ ốm, điều trị, mang thai hoặc nuôi con dưới 12 tháng tuổi",
          "Hết thời hiệu thì không được quyền ra quyết định kỷ luật"
        ],
        fullText: `1. Thời hiệu xử lý tối đa là 06 tháng kể từ ngày xảy ra hành vi (12 tháng đối với vi phạm tài chính, tài sản hoặc bí mật công nghệ).
2. Không xử lý kỷ luật khi người lao động: Nghỉ ốm đau; mang thai, nghỉ thai sản hoặc nuôi con dưới 12 tháng tuổi; đang bị tạm giữ/tạm giam.`
      },
      {
        number: 68,
        title: "Họp kỷ luật & Quyền tự bảo vệ",
        summary: "Thông báo họp trước ít nhất 05 ngày làm việc. Người lao động có quyền tự bào chữa hoặc nhờ người đại diện/luật sư bảo vệ. Lập biên bản công khai.",
        keyPoints: [
          "Công ty phải gửi giấy mời họp trước ít nhất 05 ngày làm việc",
          "Người lao động được quyền tự bào chữa hoặc nhờ người bảo vệ quyền lợi",
          "Phải có đại diện Công đoàn/Tổ chức đại diện người lao động tham gia"
        ],
        fullText: `1. Công ty gửi thông báo họp trước ít nhất 05 ngày làm việc cho người lao động và tổ chức đại diện.
2. Người lao động được thông báo rõ hành vi bị xem xét, được giải trình và cung cấp chứng cứ.
3. Biên bản họp phải được đọc thông qua và ký xác nhận. Quyết định kỷ luật ban hành trong thời hiệu.`
      },
      {
        number: 71,
        title: "Xóa kỷ luật lao động",
        summary: "Tự động xóa kỷ luật: Khiển trách xóa sau 03 tháng; Kéo dài nâng lương xóa sau 06 tháng; Cách chức xóa sau 03 năm nếu không tái phạm.",
        keyPoints: [
          "Khiển trách (K): Tự động xóa án tích sau 03 tháng",
          "Kéo dài nâng lương (N1): Tự động xóa sau 06 tháng (xét giảm sau 3 tháng nếu tiến bộ)",
          "Cách chức (N2): Xóa sau 03 năm nếu không tái phạm"
        ],
        fullText: `1. Người lao động được tự động xóa kỷ luật nếu không tái phạm:
• Khiển trách: sau 03 tháng;
• Kéo dài thời hạn nâng lương (N1): sau 06 tháng;
• Cách chức (N2): sau 03 năm kể từ ngày bị xử lý.
2. Người bị N1 chấp hành 1/2 thời gian có tiến bộ có thể được xét giảm thời hạn.`
      }
    ]
  },
  {
    id: 10,
    roman: "X",
    title: "Trách Nhiệm Vật Chất (Bồi Thường Thiệt Hại)",
    subtitle: "Luồng xử lý độc lập, cấm chia tiền cả ca, bồi thường tối đa 3 tháng lương & khấu trừ <= 30%/tháng",
    iconName: "Coins",
    badge: "Bồi Thường Thiệt Hại",
    color: "from-amber-600 to-orange-700",
    takeaway: "Bồi thường thiệt hại là luồng riêng, KHÔNG PHẢI TIỀN PHẠT. Cấm bắt nhân viên mua lại sản phẩm lỗi, cấm chia đều tiền đền bù cho cả ca. Hư hỏng sơ suất nhỏ bồi thường tối đa 3 tháng lương; khấu trừ lương tối đa 30%/tháng.",
    articles: [
      {
        number: 72,
        title: "Phạm vi & Nguyên tắc xem xét trách nhiệm vật chất",
        summary: "Phải chứng minh được 4 yếu tố: Thiệt hại thực tế, hành vi cụ thể, lỗi và quan hệ nhân quả. Cấm bắt mua lại sản phẩm lỗi, cấm phạt chia đều theo ca.",
        keyPoints: [
          "Bồi thường tài sản là luồng riêng, KHÔNG PHẢI KỶ LUẬT HAY TIỀN PHẠT",
          "Bắt buộc chứng minh đủ 4 yếu tố: Có thiệt hại - Có hành vi - Có lỗi - Nhân quả trực tiếp",
          "TUYỆT ĐỐI CẤM: Bắt mua lại ly nước làm sai, cấm chia đều tiền đền cho cả ca"
        ],
        fullText: `1. Trách nhiệm vật chất là bồi thường thiệt hại tài sản theo luật, tách biệt hoàn toàn với kỷ luật.
2. Chỉ xem xét khi chứng minh đồng thời: thiệt hại thực tế có thể định lượng; hành vi cụ thể; lỗi; và quan hệ nhân quả trực tiếp.
3. Công ty KHÔNG ÁP DỤNG mua lại sản phẩm bắt buộc, không áp dụng bảng giá cố định, không chia đều theo ca hoặc bồi thường tập thể.`
      },
      {
        number: 73,
        title: "Trường hợp loại trừ không phải bồi thường",
        summary: "Hao mòn tự nhiên, sai lệch trong định mức cho phép, máy móc lỗi kỹ thuật, lỗi quy trình đào tạo hoặc khách hàng làm bể KHÔNG BẮT ĐỀN NHÂN VIÊN.",
        keyPoints: [
          "Hao mòn máy móc tự nhiên trong quá trình pha chế: Không bồi thường",
          "Hao hụt hạt/sữa trong định mức cho phép: Không bồi thường",
          "Thiệt hại do khách hàng hoặc sự cố bất khả kháng: Không bắt nhân viên chịu"
        ],
        fullText: `1. KHÔNG BUỘC BỒI THƯỜNG đối với:
• Hao mòn thông thường của máy móc;
• Sai lệch trong định mức tiêu hao đã được duyệt;
• Lỗi hệ thống, công cụ hoặc quy trình đào tạo do Công ty;
• Thiệt hại do khách hàng hoặc bên thứ ba gây ra khi chưa chứng minh lỗi của người lao động;
• Trường hợp bất khả kháng (thiên tai, sự cố khách quan).`
      },
      {
        number: 74,
        title: "Mức bồi thường hư hỏng do sơ suất",
        summary: "Hư hỏng do sơ suất có giá trị không quá 10 tháng lương tối thiểu vùng: Mức bồi thường TỐI ĐA KHÔNG QUÁ 03 THÁNG TIỀN LƯƠNG của người lao động.",
        keyPoints: [
          "Sơ suất làm hư hỏng tài sản: Bồi thường tối đa không quá 03 tháng lương",
          "Tài sản giao phải có biên bản kiểm kê, định mức rõ ràng từ trước",
          "Xem xét hoàn cảnh kinh tế gia đình nhân viên để giảm mức bồi thường"
        ],
        fullText: `1. Trường hợp người lao động gây thiệt hại do sơ suất với giá trị không quá 10 tháng lương tối thiểu vùng, mức bồi thường TỐI ĐA LÀ 03 THÁNG TIỀN LƯƠNG.
2. Mức quyết định có thể thấp hơn sau khi xem xét lỗi, thiệt hại thực tế và hoàn cảnh gia đình của người lao động.
3. Không thu tiền đặt cọc hoặc ký quỹ bồi thường.`
      },
      {
        number: 75,
        title: "Xác định giá trị thiệt hại thực tế",
        summary: "Tính theo chi phí sửa chữa hợp lý hoặc giá trị còn lại sau khi trừ khấu hao sử dụng. KHÔNG ĐƯỢC TÍNH doanh thu kỳ vọng hoặc uy tín thương hiệu vào tiền đền.",
        keyPoints: [
          "Tính theo chi phí sửa chữa hoặc giá trị còn lại (đã trừ hao mòn/khấu hao)",
          "KHÔNG ĐƯỢC TÍNH tiền mất khách, tiền kỳ vọng doanh thu vào bồi thường",
          "Công ty chịu phần thiệt hại nếu có góp lỗi hoặc lỗi hệ thống"
        ],
        fullText: `1. Thiệt hại được xác định theo chi phí sửa chữa hợp lý hoặc giá trị thay thế sau khi ĐÃ TRỪ KHẤU HAO, hao mòn và phần Công ty góp lỗi.
2. KHÔNG TÍNH doanh thu kỳ vọng, lợi nhuận mất đi hoặc giá trị thương hiệu ước tính vào khoản bồi thường.`
      },
      {
        number: 78,
        title: "Phương thức khấu trừ tiền lương",
        summary: "Khấu trừ lương hàng tháng TỐI ĐA KHÔNG QUÁ 30% tiền lương thực lĩnh (sau khi trừ BHXH và thuế TNCN). Cấm cấn trừ toàn bộ tiền lương cuối cùng.",
        keyPoints: [
          "Mức khấu trừ mỗi tháng TỐI ĐA KHÔNG QUÁ 30% tiền lương thực nhận",
          "Phải thông báo trước cho nhân viên lý do, số tiền và số dư còn lại",
          "Không tự ý cấn trừ toàn bộ lương tháng cuối, tiền tip hay tiền thưởng"
        ],
        fullText: `1. Bồi thường thực hiện tự nguyện hoặc khấu trừ lương có quyết định hợp lệ.
2. Tổng mức khấu trừ hằng tháng KHÔNG VƯỢT QUÁ 30% TIỀN LƯƠNG THỰC TRẢ sau khi trích nộp bảo hiểm và thuế TNCN.
3. Công ty không tự cấn toàn bộ tiền lương cuối cùng, tiền thưởng đã phát sinh hoặc tiền tip của người lao động.`
      }
    ]
  },
  {
    id: 11,
    roman: "XI",
    title: "Tham Vấn, Ban Hành, Đăng Ký & Tổ Chức Thực Hiện",
    subtitle: "Thống nhất cấp Công ty, tham vấn 5 ngày, niêm yết tại quán & rà soát thường niên",
    iconName: "FileCheck",
    badge: "Hiệu Lực & Thực Thi",
    color: "from-blue-900 to-slate-900",
    takeaway: "DOL-HR-001 áp dụng thống nhất cho toàn chuỗi Dolphy. Cửa hàng không được tự chế 'quy định miệng'. Bản tiếng Việt niêm yết tại quầy bar và kho tài liệu số. Rà soát định kỳ hàng năm.",
    articles: [
      {
        number: 81,
        title: "Một Nội quy cấp Công ty duy nhất",
        summary: "Áp dụng thống nhất cho toàn bộ hệ thống Dolphy Café. Quản lý cửa hàng không được tự ban hành nội quy riêng trái hoặc vượt Nội quy này.",
        keyPoints: [
          "Một Nội quy duy nhất áp dụng cho toàn thể thương hiệu Dolphy Café",
          "Cửa hàng trưởng KHÔNG ĐƯỢC tự đặt 'luật riêng của quán'",
          "Mọi hướng dẫn vận hành phải tuân thủ nghiêm ngặt khung pháp lý của DOL-HR-001"
        ],
        fullText: `1. DOL-HR-001 là một Nội quy lao động cấp Công ty, áp dụng thống nhất cho Công ty Cổ phần Cá Heo Xanh và toàn bộ hệ thống Dolphy Café.
2. CEO là người phê duyệt và ký ban hành.
3. Cửa hàng, phòng ban, CHT không được tự tạo nội quy lao động riêng, nghĩa vụ riêng hay tiền phạt trái với Nội quy này.`
      },
      {
        number: 82,
        title: "Tham vấn người lao động",
        summary: "Trước khi ban hành, Công ty mở đợt góp ý công khai 05 ngày làm việc cho toàn thể nhân sự. Ý kiến đóng góp thiện chí được ghi nhận và bảo vệ.",
        keyPoints: [
          "Mở cổng lấy ý kiến toàn thể nhân viên trong 05 ngày làm việc",
          "Tham vấn ý kiến Công đoàn/Tổ chức đại diện người lao động tại cơ sở",
          "Góp ý thiện chí không bao giờ bị coi là điểm bất lợi"
        ],
        fullText: `1. Tham khảo ý kiến tổ chức đại diện người lao động tại cơ sở trước khi ban hành.
2. Mở đợt góp ý dễ tiếp cận cho toàn thể nhân sự trong 05 ngày làm việc.
3. Việc góp ý thiện chí của nhân viên không bao giờ bị dùng làm căn cứ bất lợi.`
      },
      {
        number: 84,
        title: "Cổng hiệu lực và chuyển tiếp",
        summary: "Nội quy có hiệu lực sau khi đăng ký với cơ quan quản lý nhà nước. Không áp dụng hồi tố đối với các hành vi xảy ra trước ngày hiệu lực.",
        keyPoints: [
          "Có hiệu lực theo đúng quyết định ban hành và xác nhận của cơ quan thẩm quyền",
          "KHÔNG ÁP DỤNG HỒI TỐ cho những việc xảy ra trước ngày có hiệu lực",
          "Bảo đảm tính minh bạch và thượng tôn pháp luật"
        ],
        fullText: `1. Ngày ký quyết định, ngày cơ quan thẩm quyền nhận hồ sơ và ngày hiệu lực là các mốc riêng.
2. Nội quy có hiệu lực theo ngày ghi trong quyết định sau khi hoàn tất thủ tục đăng ký.
3. KHÔNG ÁP DỤNG HỒI TỐ. Hành vi được xem xét theo quy định có hiệu lực tại thời điểm xảy ra.`
      },
      {
        number: 85,
        title: "Phân phối, niêm yết & Đào tạo phổ biến",
        summary: "Niêm yết tại quầy bar và DHO; phổ biến trong thời giờ làm việc có trả lương. Xác nhận tiếp nhận tài liệu không làm mất quyền khiếu nại của nhân viên.",
        keyPoints: [
          "Niêm yết công khai tại từng chi nhánh cửa hàng Dolphy Café",
          "Thời gian tham gia đào tạo nội quy được tính và trả lương đầy đủ",
          "Luôn có kênh tiếp nhận câu hỏi giải đáp thắc mắc cho nhân viên"
        ],
        fullText: `1. Nội quy được niêm yết tại các vị trí dễ thấy ở nơi làm việc (bảng tin cửa hàng, kho nội bộ DHO).
2. Hoạt động phổ biến, đào tạo bắt buộc được tính và trả lương như thời giờ làm việc.
3. Việc ký xác nhận chỉ chứng minh đã tiếp nhận tài liệu, không làm mất quyền khiếu nại của người lao động.`
      }
    ]
  }
];
