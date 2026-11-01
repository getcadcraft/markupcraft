---
title: Có gì mới trong 0.7
summary: RFI, hồ sơ trình duyệt và nhật ký hằng ngày trong thẻ Hiện trường mới, có hạn, quá hạn hiện màu đỏ, CSV và BCF, làm việc ngoại tuyến và Gộp; trợ lý đặt trạng thái, phản hồi và xuất danh sách; danh sách đơn vị theo Cài đặt; các bảng tự thu gọn và hộp thoại di chuyển được.
keywords: có gì mới, ghi chú phát hành, nhật ký thay đổi, thay đổi, 0.7, phiên bản, tính năng mới, hiện trường, hồ sơ hiện trường, rfi, yêu cầu thông tin, hồ sơ trình duyệt, nhật ký hằng ngày, nhật ký công trường, quá hạn, hạn, giao cho tôi, ghim, gộp, ngoại tuyến, máy tính bảng, bcf, csv, trợ lý, mcp, trạng thái đánh dấu, phản hồi, xuất, đơn vị, danh sách đơn vị, gắn sao, hiệu chuẩn, gọn, bảng, hộp thoại, tiếng bồ đào nha
from: 142e1a1e
---

Đây là những gì đã thay đổi trong MarkupCraft 0.7 so với 0.6. Điều mới lớn nhất là hồ sơ hiện trường: RFI, hồ sơ trình duyệt và nhật ký hằng ngày được giữ ngay trong PDF, bên cạnh các đánh dấu của bạn.

## Mới

### RFI, hồ sơ trình duyệt và nhật ký hằng ngày

- **Thẻ Hiện trường.** Mở thẻ {{ui:Hiện trường}} và chọn {{ui:RFI}}, {{ui:Hồ sơ trình duyệt}} hoặc {{ui:Nhật ký hằng ngày}}. Chạm hoặc bấm vào tờ nơi RFI hay hồ sơ trình duyệt thuộc về và một ghim đánh dấu vị trí; nhật ký hằng ngày được đặt lên tờ đang mở mà không có ghim ({{ui:Đặt ghim}} thêm ghim sau, {{ui:Di chuyển ghim}} di chuyển bất kỳ ghim nào). Mỗi hồ sơ có số riêng (RFI-0001, SUB-0001, LOG-0001), tiêu đề, nội dung, trạng thái, người phụ trách, hạn, một chuỗi phản hồi và danh sách tên tệp đính kèm. Xem [Theo dõi RFI, hồ sơ trình duyệt và nhật ký hằng ngày](topic:field-records).
- **Thấy cái gì đang trễ.** Lọc danh sách theo loại, trạng thái, hạn (quá hạn, đến hạn trong 7 ngày, có hoặc không có hạn), tờ này hay mọi tờ, tìm văn bản, hoặc {{ui:Giao cho tôi}}. Một hồ sơ đã quá hạn mà vẫn đang chờ được đánh dấu **Quá hạn**, màu đỏ, trên danh sách và trên ghim của nó. Xem [Tìm điều quan trọng](topic:field-records#find-what-matters).
- **CSV và BCF.** {{ui:CSV}} ghi các hồ sơ đang liệt kê thành bảng tính; {{ui:BCF}} ghi chúng thành các chủ đề BCF, mỗi chủ đề kèm ảnh chụp vị trí của nó trên tờ. Cả hai theo các bộ lọc. Xem [Xuất](topic:field-records#export).
- **Ngoại tuyến, và hai bản sao gộp thành một.** Hồ sơ được lưu trong PDF và không cần mạng, nên máy tính bảng ngoài công trường có thể thêm, trả lời và lưu chúng. Khi về văn phòng, {{ui:Gộp}} nối hồ sơ của một bản sao khác của cùng PDF theo mã của chúng, trong một bước hoàn tác. Xem [Lưu, ngoại tuyến và gộp các bản sao](topic:field-records#save-offline-and-merging-copies).

### Trợ lý AI

- **Trợ lý làm được nhiều hơn.** Trợ lý của riêng bạn, kết nối qua CadCraft Studio, giờ có thể đặt trạng thái của một đánh dấu (`markup_status`, ghi vào chuỗi của nó), phản hồi trong một chuỗi (`markup_reply`) và xuất danh sách {{ui:Đánh dấu}} thành CSV hoặc BCF (`markups_export`, đúng như danh sách hiển thị với các bộ lọc). Mỗi thay đổi là một bước hoàn tác, ký bằng tên của trợ lý. Xem [Trợ lý có thể yêu cầu gì](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Trong mọi ứng dụng

- **Đơn vị.** {{ui:Cài đặt}} › {{ui:Chung}} › {{ui:Đơn vị}} có một danh sách riêng cho chiều dài, diện tích, thể tích, góc và độ dốc, với kích thước chính xác theo định nghĩa của từng đơn vị (foot khảo sát Hoa Kỳ là một đơn vị riêng). Tắt những đơn vị bạn không bao giờ dùng và chúng sẽ rời khỏi danh sách đơn vị; gắn sao cho một đơn vị và công việc mới sẽ bắt đầu bằng nó. Tệp luôn giữ đơn vị riêng của nó. Trong MarkupCraft, các đơn vị đo và vị trí trong {{ui:Cài đặt}} › {{ui:MarkupCraft}} và đơn vị trong hộp thoại hiệu chuẩn theo các công tắc này, dấu sao đặt đơn vị đo cho đến khi bạn lưu cài đặt riêng của MarkupCraft, và khoảng cách thật bạn nhập khi hiệu chuẩn có thể kèm ký hiệu của bất kỳ đơn vị nào, như `3 yd` hoặc `1.5 km`. Xem [Đơn vị, giá trị nhập và danh sách đơn vị](common:unit-lists).
- **Bố cục dày đặc hơn và các bảng tự thu gọn.** {{ui:Cài đặt}} › {{ui:Chung}} › {{ui:Mật độ bố cục}} › {{ui:Gọn}} chứa được nhiều hơn trên màn hình (màn hình cảm ứng và điện thoại giữ các nút lớn). Mỗi bảng bên có một thanh tiêu đề mỏng: kéo nó để neo hoặc cho bảng nổi, thả lên thanh của bảng khác để dùng chung một khung dạng thẻ, ghim nó để trượt về mép, hoặc ẩn nó và gọi lại từ mép. Xem [Sắp xếp các bảng](common:arrange-panels#make-the-layout-denser).
- **Hộp thoại di chuyển được.** Kéo hộp thoại bằng thanh tiêu đề để dời nó khỏi bản vẽ; nó trở lại đúng nơi bạn để. Bấm đúp thanh tiêu đề để căn giữa lại. Xem [Di chuyển một hộp thoại](common:arrange-panels#move-a-dialog).
- **Công thức cho trợ lý AI.** Mười yêu cầu mẫu cho trợ lý của riêng bạn (dọn một bản vẽ, in một bộ, kiểm tra bản vẽ, hỏi một mô hình, tổng hợp một bản bóc tách khối lượng, thử một biến thể chi tiết…), mỗi yêu cầu kèm các công cụ nó gọi và quyền nó cần, và đều được các bài kiểm thử của chúng tôi chạy lại. Các ứng dụng không chứa AI. Xem [Công thức cho trợ lý AI](common:assistants-recipes).
- **Ngôn ngữ.** **Português (Portugal)** là mới trong {{ui:Cài đặt}} › {{ui:Chung}} › {{ui:Ngôn ngữ}}. Ngôn ngữ này cùng **Português (Brasil)**, **Español (México)** và **Bahasa Indonesia** nay có từng chữ của các ứng dụng, là bản nháp chưa được người bản ngữ duyệt. Các chủ đề trợ giúp bằng tiếng Anh.
- **CadCraft Studio** cho biết vì sao việc kiểm tra cập nhật thất bại (chưa có tệp cho hệ thống của bạn, không có mạng, chữ ký sai) thay vì chỉ ghi "Xong", và không đưa lại thẻ Có gì mới mà bạn đã đóng cho đến khi có bản phát hành mới hơn.

## Chưa có trong phiên bản này

- **0.7 chưa được ký mã.** Việc ký, và gói Microsoft Store, dời sang 0.8 vì việc xác thực chứng chỉ chưa xong. Hãy kiểm tra SHA-256 bên cạnh mỗi tệp trên getcadcraft.com/download. Trên Windows, nếu SmartScreen chặn trình cài đặt, hãy chọn {{ui:Thông tin thêm}}, rồi {{ui:Vẫn chạy}}. Trên Mac, lần đầu tiên, bấm chuột phải vào CadCraft Studio và chọn {{ui:Mở}}. CadCraft Studio chưa có trên cửa hàng ứng dụng nào, và chưa có bản cho iPad hay iPhone.
- Các danh sách góc và độ dốc trong {{ui:Đơn vị}} được lưu, nhưng chưa có ô nhập nào đọc chúng.
- Hồ sơ hiện trường không được chia sẻ trong phiên live của CadCraft Studio (phiên live chỉ mang các đánh dấu); hãy hợp các bản sao lại bằng {{ui:Gộp}}.
- Gộp lấy một hồ sơ nguyên vẹn từ bản sao thay đổi sau cùng: nếu hai người đổi các trường khác nhau của cùng một hồ sơ, các trường của bản sao sau thắng. Các chuỗi và tên tệp đính kèm được nối lại.
- Tệp đính kèm chỉ là tên; các tệp vẫn ở nguyên chỗ cũ. Chưa có nhóm, thông báo hay dự án đám mây cho hồ sơ, và trợ lý chưa có công cụ cho hồ sơ.
- Hồ sơ hiện trường đã được thử trong trình duyệt ở cỡ điện thoại và máy tính bảng với mạng bị ngắt, nhưng chưa thử bằng tay trên máy tính bảng thật.
- Vẫn còn từ 0.6: xoay các đối tượng trên trang theo góc bất kỳ, vẽ hình mới thẳng vào trang, đổi phông chữ hoặc cỡ chữ của một dòng, và văn bản tự xuống nhiều dòng. Một bản sao đã lưu có chỉnh sửa trang chưa được mở trong Acrobat.
- Vẫn còn từ 0.5: hoàn tác một thay đổi trang (như thêm trang trống), đọc văn bản từ các tờ quét, và phiên live ngoài mạng của riêng bạn.

Mọi thứ còn lại nằm trong [Những gì chưa xây dựng](topic:not-built-yet).
