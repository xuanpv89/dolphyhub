export interface Scenario {
  id: string;
  title: string;
  roleTarget: 'Barista' | 'CHT' | 'QLCL' | 'DHO' | 'Chung';
  badge: string;
  question: string;
  situation: string;
  solution: string;
  relevantArticles: string;
  doAndDont: {
    do: string[];
    dont: string[];
  };
  quote: string;
}

export const SCENARIOS_DATA: Scenario[] = [
  {
    id: 'sc-1',
    title: 'Đi trễ do ngập nước & kẹt xe ở Thảo Điền',
    roleTarget: 'Barista',
    badge: 'Chấm Công & Tiền Lương',
    question: 'Sáng nay đường Thảo Điền ngập nặng khiến tôi đến ca muộn 25 phút. Tôi có bị phạt tiền 50k vào quỹ quán hay bị trừ tiền lương không?',
    situation: 'Bạn Mai là Barista ca sáng tại chi nhánh 28 Thảo Điền (ca từ 07:00 đến 14:00). Sáng nay mưa lớn, tuyến đường Quốc Hương - Thảo Điền ngập sâu, Mai phải dắt xe và đến quán lúc 07:25. CHT thông báo: "Theo luật quán, đi trễ sau 15 phút nộp phạt 50.000đ vào quỹ liên hoan". Điều này đúng hay sai?',
    solution: 'CỰC KỲ SAI. Theo Điều 5, 14 và 64 của Nội quy DOL-HR-001, Công ty Cổ phần Cá Heo Xanh TUYỆT ĐỐI NGHIÊM CẤM phạt tiền hoặc trừ lương thay kỷ luật dưới mọi hình thức (kể cả nộp quỹ quán). Mai chỉ không được nhận lương cho 25 phút chưa làm việc thực tế. Vì Mai gặp sự cố ngập nước bất khả kháng (lý do chính đáng theo mục A.3 Phụ lục A) và đã nhắn tin báo CHT, Mai không bị xem là vi phạm kỷ luật lao động.',
    relevantArticles: 'Điều 5 (khoản 6), Điều 14 (khoản 6), Điều 64 (khoản 6), Mục A.3 Phụ lục A',
    doAndDont: {
      do: [
        'Chủ động nhắn tin/gọi điện báo ngay cho CHT biết tình trạng kẹt xe/ngập nước',
        'Chấm công đúng giờ thực tế khi có mặt tại quầy bar (07:25)',
        'Giữ lại hình ảnh đoạn ngập nếu cần bổ sung lý do chính đáng'
      ],
      dont: [
        'Không nộp bất kỳ khoản tiền phạt nào vào quỹ nội bộ tự phát của quán',
        'Không nhờ đồng nghiệp chấm công hộ để "lách luật" (đây là lỗi cố ý TG-01 rất nặng)',
        'Không tự ý bỏ ca về nhà vì nghĩ đã lỡ muộn'
      ]
    },
    quote: 'Công ty trả lương theo thời gian làm việc thực tế. Tuyệt đối không có bất kỳ khoản tiền phạt nào được phép tồn tại tại Dolphy Café.'
  },
  {
    id: 'sc-2',
    title: 'Khách hàng có hành vi khiếm nhã, quấy rối tại quầy',
    roleTarget: 'Barista',
    badge: 'Phòng Chống Quấy Rối',
    question: 'Một khách hàng nam liên tục có lời nói khiếm nhã về ngoại hình và cố tình nắm tay tôi khi nhận ly cà phê. Tôi phải làm gì?',
    situation: 'Bạn Trang là Thu ngân/Barista tại cửa hàng. Một khách quen thường xuyên gọi nước rồi nói: "Em xinh thế này làm phục vụ uổng phí, tối nay đi ăn với anh thì bao nhiêu tiền?". Khi nhận ly nước, người này cố tình vuốt tay và nắm chặt tay Trang khiến bạn vô cùng sợ hãi và khó chịu.',
    solution: 'Hành vi này cấu thành quấy rối tình dục bằng lời nói và thể chất theo Điều 39. Trang có toàn quyền: 1) Lùi lại vị trí an toàn, giữ thái độ dứt khoát yêu cầu khách hàng dừng hành vi khiếm nhã; 2) Báo ngay cho Cửa hàng trưởng (CHT) hoặc người phụ trách ca để trực tiếp đứng ra hỗ trợ; 3) CHT có trách nhiệm bảo vệ nhân viên, mời khách dừng hành vi hoặc từ chối phục vụ và mời rời khỏi quán nếu tiếp tục tái diễn; 4) Trang có thể phản ánh đến Đầu mối Bảo vệ con người độc lập của Dolphy để được hỗ trợ tâm lý và điều chỉnh vị trí nếu cần.',
    relevantArticles: 'Điều 6 (khoản 4), Điều 24 (khoản 3), Điều 38, Điều 39, Điều 40',
    doAndDont: {
      do: [
        'Rút tay lại ngay, nói rõ ràng: "Xin quý khách giữ khoảng cách lịch sự và tôn trọng nhân viên"',
        'Báo ngay cho CHT hoặc đồng nghiệp ca trực đứng ra tiếp nhận xử lý',
        'Ghi nhận thời điểm, camera an ninh quán để làm bằng chứng bảo vệ bản thân'
      ],
      dont: [
        'Không cắn răng chịu đựng vì sợ bị khách mắng là thiếu tôn trọng khách hàng',
        'Không to tiếng ẩu đả tay đôi với khách khiến tình huống leo thang nguy hiểm',
        'Không một quản lý nào được ép nhân viên "phải chiều lòng khách hàng khiếm nhã"'
      ]
    },
    quote: 'Hạnh phúc và sự an toàn, danh dự của nhân viên Dolphy là ưu tiên hàng đầu. Bạn luôn được Công ty bảo vệ.'
  },
  {
    id: 'sc-3',
    title: 'Làm rơi vỡ bình ngâm Cold Brew trị giá 850.000đ',
    roleTarget: 'Barista',
    badge: 'Trách Nhiệm Vật Chất',
    question: 'Trong lúc vệ sinh quầy bar đóng ca, tôi lỡ tay làm trượt rơi bình thủy tinh Cold Brew vỡ tan. Tôi có phải móc tiền túi đền ngay 850k hoặc bị chia đều tiền cho cả ca không?',
    situation: 'Cuối ca 2 lúc 21:30, bạn Tuấn rửa bình Cold Brew cỡ lớn. Bồn rửa bị trơn xà phòng khiến bình tuột tay rơi xuống sàn vỡ nát. Giá chiếc bình mua mới là 850.000đ. CHT nói: "Đóng ca cả ca cùng chịu, mỗi bạn chia nhau 200.000đ đền lại cho quán ngay ngày mai".',
    solution: 'SAI HOÀN TOÀN QUY ĐỊNH. Theo Điều 72 (khoản 3) và Điều 74, Dolphy TUYỆT ĐỐI CẤM chia đều tiền bồi thường cho cả ca và CẤM ép nhân viên móc tiền túi đền ngay tại quán. Việc Tuấn lỡ tay là sơ suất trong lúc làm việc. Quy trình đúng: 1) Tuấn và CHT lập biên bản ghi nhận sự cố sơ suất; 2) Tính giá trị thiệt hại theo giá trị còn lại (đã trừ khấu hao thời gian sử dụng, không lấy giá mua mới nguyên tem); 3) Nếu có bồi thường, mức bồi thường được cân nhắc theo hoàn cảnh của Tuấn và chỉ khấu trừ tối đa 30% lương tháng, không được trừ một lần hết lương.',
    relevantArticles: 'Điều 72 (khoản 3, 4), Điều 74 (khoản 1), Điều 75 (khoản 1), Điều 78 (khoản 2)',
    doAndDont: {
      do: [
        'Dọn dẹp mảnh vỡ an toàn ngay lập tức, đặt biển cảnh báo sàn ướt/thủy tinh',
        'Chủ động báo CHT và viết tường trình trung thực về sự việc trơn trượt',
        'Yêu cầu tính khấu hao tài sản sử dụng theo quy định của Phòng Tài chính DHO'
      ],
      dont: [
        'Tuyệt đối không đóng tiền mặt chia đều cho các bạn khác trong ca trực',
        'Không giấu giếm mảnh vỡ hoặc lén vứt bỏ làm sai lệch số liệu kiểm kê',
        'Quản lý không được tự đặt mức giá bồi thường ngoài thẩm quyền'
      ]
    },
    quote: 'Mỗi người chỉ chịu trách nhiệm về lỗi của chính mình. Tuyệt đối không có văn hóa bồi thường tập thể tại Dolphy.'
  },
  {
    id: 'sc-4',
    title: 'Máy pha La Marzocco rò điện & bốc mùi khét',
    roleTarget: 'Barista',
    badge: 'An Toàn Là Số 1',
    question: 'Quán đang giờ cao điểm 8h sáng khách xếp hàng dài, nhưng máy pha cà phê bỗng bốc mùi khét rẹt và chạm tay vào vỏ kim loại thấy tê giật điện. Tôi có quyền tự tắt máy không?',
    situation: 'Đang giờ cao điểm sáng tại chi nhánh Nguyễn Văn Linh, quầy bar có hơn 15 đơn hàng đợi. Barista Nam chạm vào tay cầm group-head thì bị điện giật tê tay, phía dưới khay nước bốc khói khét. Nam định ngắt cầu dao thì CHT hét lên: "Đừng ngắt! Đang đông khách lắm, pha hết đợt này rồi tính sau!". Nam phải làm gì?',
    solution: 'Nam CÓ TOÀN QUYỀN VÀ NGHĨA VỤ NGẮT ĐIỆN VÀ DỪNG MÁY NGAY LẬP TỨC. Theo Điều 6 (khoản 6) và Điều 30 (khoản 1, 3), Dolphy khẳng định: "KHÔNG ĐÁNH ĐỔI tính mạng, sức khỏe con người để duy trì tốc độ phục vụ hay doanh thu". Nguy cơ rò điện là mối đe dọa trực tiếp đến tính mạng. Nam có quyền ngắt công tắc/cầu dao, đặt biển dừng phục vụ máy và cảnh báo đồng nghiệp. CHT có hành vi ép nhân viên làm việc trong điều kiện nguy hiểm sẽ bị xử lý kỷ luật nghiêm khắc theo mã QL-02 (Cách chức N2).',
    relevantArticles: 'Điều 6 (khoản 6), Điều 30 (khoản 1, 3, 5), Điều 31, Mã vi phạm QL-02 Phụ lục A',
    doAndDont: {
      do: [
        'Lập tức ngắt cầu dao điện nguồn của máy pha để loại trừ nguy cơ điện giật/cháy nổ',
        'Cảnh báo các bạn trong quầy không chạm vào máy pha và khu vực rò điện',
        'Báo ngay cho Bộ phận Kỹ thuật DHO và xin lỗi giải thích ngắn gọn với khách hàng'
      ],
      dont: [
        'Tuyệt đối KHÔNG tiếp tục pha chế dù khách hàng có phàn nàn hay thúc giục',
        'Không nghe theo lệnh nguy hiểm của bất kỳ ai yêu cầu tiếp tục chạm vào máy rò điện',
        'Không tự ý dùng tuốc-nơ-vít mở máy sửa chữa điện khi chưa qua đào tạo kỹ thuật'
      ]
    },
    quote: 'Tính mạng và an toàn của con người luôn đứng trên mọi cốc cà phê và mọi chỉ số doanh thu.'
  },
  {
    id: 'sc-5',
    title: 'Quản lý cửa hàng tự đặt ra "Bảng phạt tiền" riêng',
    roleTarget: 'CHT',
    badge: 'Trách Nhiệm Quản Lý',
    question: 'Cửa hàng trưởng in một bảng nội quy dán sau quầy: "Quên đeo bảng tên phạt 20k, dùng điện thoại phạt 50k, quên đổ bã cà phê phạt 30k". Quy định này có hợp pháp không?',
    situation: 'Tại một chi nhánh mới mở, để rèn luyện nhân viên vào nề nếp, CHT Long đã tự soạn bảng "Quy định quầy bar 2026" kèm mức tiền phạt từ 20k - 100k, thu tiền mặt cuối tuần để tổ chức ăn uống hoặc mua đồ ăn vặt cho quán.',
    solution: 'BẢNG PHẠT NÀY HOÀN TOÀN VÔ GIÁ TRỊ VÀ TRÁI PHÁP LUẬT. Theo Điều 10 (khoản 4), Điều 64 (khoản 6) và Điều 81 (khoản 3) của DOL-HR-001, Công ty chỉ có DUY NHẤT một Nội quy lao động cấp Công ty. Cửa hàng trưởng KHÔNG CÓ THẨM QUYỀN tự đặt thêm quy định, tiền phạt hoặc khấu trừ lương. Hành vi tự thu tiền phạt của nhân viên là vi phạm nghiêm trọng mã QL-01, CHT Long sẽ bị xử lý CÁCH CHỨC (N2) và bắt buộc phải hoàn trả toàn bộ số tiền đã thu sai cho nhân viên.',
    relevantArticles: 'Điều 10 (khoản 4), Điều 64 (khoản 6), Điều 81 (khoản 3), Mã vi phạm QL-01 Phụ lục A',
    doAndDont: {
      do: [
        'Áp dụng quy trình coaching, góp ý 1-1, nhắc nhở và ghi nhận điểm tuân thủ DOL-PERF-001',
        'Làm gương trong việc thực hiện chuẩn tác phong 5S và đồng phục',
        'Báo cáo HR/People DHO nếu có nhân sự cố tình lặp lại vi phạm sau khi đã hướng dẫn'
      ],
      dont: [
        'Tuyệt đối không in ấn, ban hành bất kỳ bảng phạt tiền nào tại chi nhánh',
        'Không lập quỹ phạt dưới bất kỳ danh nghĩa nào (kể cả quỹ liên hoan tự nguyện)',
        'Không được trừ ca làm việc hoặc giam tiền tip của nhân viên để phạt'
      ]
    },
    quote: 'Quản lý xuất sắc dẫn dắt bằng sự đồng hành và quy chuẩn, không quản trị bằng nỗi sợ tiền phạt.'
  },
  {
    id: 'sc-6',
    title: 'Được điều chuyển sang chi nhánh khác hỗ trợ 1 tháng',
    roleTarget: 'Chung',
    badge: 'Điều Động Nhân Sự',
    question: 'Tôi là nhân viên chi nhánh Thảo Điền, công ty thông báo tạm chuyển tôi sang hỗ trợ chi nhánh mới mở tại Quận 7 trong 30 ngày. Quyền lợi và tiền lương của tôi như thế nào?',
    situation: 'Do chi nhánh Nguyễn Văn Linh mới khai trương thiếu Barista lành nghề, DHO gửi thông báo điều động bạn Hùng sang hỗ trợ 30 ngày. Hùng lo lắng việc đi xa hơn và không biết tiền lương, phụ cấp có bị giảm hay không.',
    solution: 'Quyền lợi của Hùng được bảo vệ toàn diện theo Chương VIII: 1) Công ty phải thông báo trước cho Hùng ít nhất 03 ngày làm việc; 2) Thời gian tạm chuyển tối đa không quá 60 ngày cộng dồn trong 1 năm; 3) TIỀN LƯƠNG: Giữ nguyên 100% mức lương hiện tại trong suốt 30 ngày đầu tiên; 4) Hùng được xem xét hỗ trợ phụ cấp đi lại/công tác theo chính sách điều động; 5) Sau khi hết 30 ngày, Hùng được trở lại làm việc đúng vị trí ban đầu tại chi nhánh Thảo Điền.',
    relevantArticles: 'Điều 57 (khoản 2), Điều 58 (khoản 4), Điều 59 (khoản 1), Điều 61 (khoản 1), Điều 62',
    doAndDont: {
      do: [
        'Kiểm tra văn bản thông báo có đủ thông tin địa điểm, thời gian và người phụ trách',
        'Ghi nhận đầy đủ giờ làm việc thực tế, thời gian di chuyển công tác (nếu có)',
        'Trao đổi với HR/People nếu có khó khăn bất khả kháng về hoàn cảnh gia đình/sức khỏe'
      ],
      dont: [
        'Công ty không được tự ý điều chuyển mà không báo trước 3 ngày làm việc',
        'Không bị giảm lương trong 30 ngày đầu tiên làm công việc điều động',
        'Không bị ép làm việc quá 60 ngày cộng dồn trong năm nếu Hùng không đồng ý bằng văn bản'
      ]
    },
    quote: 'Điều chuyển nhân sự là sự chia sẻ vận hành, luôn đi kèm cam kết bảo lưu quyền lợi và sự tôn trọng cao nhất.'
  },
  {
    id: 'sc-7',
    title: 'Sữa tươi mở nắp có mùi lạ, nghi hỏng',
    roleTarget: 'QLCL',
    badge: 'An Toàn Thực Phẩm',
    question: 'Sáng nay mở hộp sữa thanh trùng để pha Latte, tôi ngửi thấy có mùi chua nhẹ và hơi vón cục dù hạn sử dụng trên vỏ hộp vẫn còn 2 ngày. Tôi có được dừng dùng hộp sữa đó không?',
    situation: 'Barista Linh phát hiện lốc sữa có 2 hộp bị phồng nhẹ và có mùi chua. CHT bảo: "Hạn sử dụng vẫn còn đến ngày mai, chắc do tủ lạnh hơi lạnh quá thôi, cứ đánh sữa bình thường pha món trà sữa cho khách, đừng đổ bỏ phí phạm". Linh băn khoăn.',
    solution: 'Linh PHẢI DỪNG SỬ DỤNG VÀ CÁCH LY HỘP SỮA ĐÓ NGAY LẬP TỨC. Theo Điều 34 (khoản 2, 3), người lao động ĐƯỢC QUYỀN DỪNG PHỤC VỤ SẢN PHẨM KHÔNG AN TOÀN mà không cần chờ người khác phê duyệt. Linh có trách nhiệm dán nhãn "HOLD - CHỜ XỬ LÝ", ghi rõ ngày giờ và báo cho Bộ phận Quản lý Chất lượng (QLCL). Hành vi của CHT nếu ép dùng hàng nghi hỏng là vi phạm nghiêm trọng mã AT-03 (Kéo dài nâng lương N1 hoặc Cách chức N2).',
    relevantArticles: 'Điều 30, Điều 34 (khoản 2, 3, 4), Mã vi phạm AT-03 Phụ lục A',
    doAndDont: {
      do: [
        'Dừng phục vụ ngay lập tức, cách ly hộp sữa nghi hỏng ra khỏi quầy pha chế',
        'Dán tem HOLD hoặc ghi giấy cảnh báo tránh để đồng nghiệp khác vô ý dùng nhầm',
        'Báo cáo cho QLCL và lưu lại mã lô sản xuất để đối soát nhà cung cấp'
      ],
      dont: [
        'Tuyệt đối không pha chế phục vụ khách hàng bất kỳ sản phẩm nào có dấu hiệu ôi thiu',
        'Không nghe theo lời chỉ đạo sai trái của bất kỳ ai cố tình bán hàng kém chất lượng',
        'Không tự ý đổ bỏ tiêu hủy làm mất mẫu chứng cứ đối soát với nhà cung ứng sữa'
      ]
    },
    quote: 'Chất lượng một ly cà phê Dolphy bắt đầu từ sự trung thực và chuẩn mực an toàn thực phẩm khắt khe nhất.'
  },
  {
    id: 'sc-8',
    title: 'Trao đổi về mức lương của chính bản thân',
    roleTarget: 'DHO',
    badge: 'Bảo Mật & Quyền Riêng Tư',
    question: 'Tôi tâm sự với một đồng nghiệp thân thiết về mức lương hàng tháng của tôi. Quản lý biết được và đe dọa sẽ kỷ luật tôi vì tội "làm lộ bí mật kinh doanh công ty". Điều này có đúng không?',
    situation: 'Bạn Yến (nhân viên văn phòng DHO) chia sẻ với bạn cùng phòng: "Tháng này lương cơ bản của mình là 9 triệu, được thưởng thêm 1 triệu chuyên cần". Trưởng nhóm nghe được và cảnh cáo: "Lương là bí mật tuyệt mật, công ty cấm nói lương, vi phạm sẽ bị đuổi việc".',
    solution: 'CẢNH CÁO CỦA TRƯỞNG NHÓM LÀ SAI. Theo Điều 50 (khoản 2) của DOL-HR-001, Nội quy mới của Dolphy ĐÃ BÃI BỎ quy định cấm đoán vô lý trước đây. "Việc trao đổi thông tin về lương, quyền lợi và điều kiện làm việc CỦA CHÍNH NGƯỜI LAO ĐỘNG không mặc nhiên là tiết lộ bí mật kinh doanh". Yến có toàn quyền nói về mức lương của bản thân mình. Tuy nhiên, Yến KHÔNG ĐƯỢC quyền chụp lén bảng lương của người khác hoặc phát tán dữ liệu lương toàn công ty.',
    relevantArticles: 'Điều 49, Điều 50 (khoản 2, 3), Điều 52',
    doAndDont: {
      do: [
        'Yên tâm rằng việc trao đổi về quyền lợi của bản thân là quyền chính đáng được pháp luật bảo vệ',
        'Hiểu rõ sự khác biệt giữa lương cá nhân và tài liệu mật cấp công ty',
        'Bảo vệ mật khẩu tài khoản phần mềm nhân sự của riêng mình'
      ],
      dont: [
        'Không xâm nhập, xem trộm hoặc phát tán bảng lương của các đồng nghiệp khác',
        'Không dùng thông tin lương để gây chia rẽ, bất hòa nội bộ',
        'Quản lý không được dùng cớ bí mật kinh doanh để đe dọa, trù dập nhân viên'
      ]
    },
    quote: 'Minh bạch và công bằng là nền tảng của niềm tin. Dolphy tôn trọng quyền chính đáng của người lao động.'
  }
];
