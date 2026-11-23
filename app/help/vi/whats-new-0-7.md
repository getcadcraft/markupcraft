---
title: Có gì mới trong 0.7 (cũ hơn)
summary: RFI, hồ sơ trình duyệt và nhật ký hằng ngày trong thẻ Hiện trường mới, kèm hạn, quá hạn tô đỏ, CSV và BCF, làm việc ngoại tuyến và Gộp; trợ lý đặt trạng thái, phản hồi và xuất danh sách; danh sách đơn vị theo Cài đặt; bảng tự gọn gàng và hộp thoại di chuyển được.
keywords: có gì mới 0.7, phát hành trước, ghi chú phát hành, nhật ký thay đổi, thay đổi, 0.7, phiên bản, tính năng mới, hiện trường, bản ghi hiện trường, rfi, yêu cầu thông tin, hồ sơ trình duyệt, nhật ký hằng ngày, nhật ký công trường, quá hạn, hạn, giao cho tôi, ghim, gộp, ngoại tuyến, máy tính bảng, bcf, csv, trợ lý, mcp, trạng thái đánh dấu, phản hồi, xuất, đơn vị, danh sách đơn vị, ngôi sao, hiệu chuẩn, gọn, bảng, hộp thoại, tiếng Bồ Đào Nha
from: ca5ba1f0
---

Đây là những gì thay đổi trong MarkupCraft 0.7 so với 0.6. Điểm mới lớn nhất là bản ghi hiện trường: RFI, hồ sơ trình duyệt và nhật ký hằng ngày được giữ trong PDF bên cạnh các đánh dấu của bạn.

## Mới

### RFI, hồ sơ trình duyệt và nhật ký hằng ngày

- **Thẻ Hiện trường.** Mở thẻ {{ui:Field}} và chọn {{ui:RFI}}, {{ui:Submittal}} hoặc {{ui:Daily log}}. Chạm hoặc nhấp vào tờ nơi một RFI hoặc hồ sơ trình duyệt thuộc về, và một ghim sẽ đánh dấu vị trí; nhật ký hằng ngày được đặt trên tờ đang mở mà không có ghim ({{ui:Đặt ghim}} thêm ghim sau, {{ui:Di chuyển ghim}} di chuyển bất kỳ ghim nào). Mỗi bản ghi có số riêng (RFI-0001, SUB-0001, LOG-0001), tiêu đề, nội dung, trạng thái, người được giao, hạn, chuỗi phản hồi và danh sách tên tệp đính kèm. Xem [Theo dõi RFI, hồ sơ trình duyệt và nhật ký hằng ngày](topic:field-records).
- **Xem cái nào trễ.** Lọc danh sách theo loại, trạng thái, hạn (quá hạn, đến hạn trong 7 ngày, có hoặc không có hạn), tờ này hoặc tất cả các tờ, tìm kiếm văn bản, hoặc {{ui:Giao cho tôi}}. Một bản ghi đã qua hạn mà vẫn đang chờ được đánh dấu **Quá hạn**, màu đỏ, trên danh sách và trên ghim của nó. Xem [Tìm nội dung quan trọng](topic:field-records#find-what-matters).
- **CSV và BCF.** {{ui:CSV}} ghi các bản ghi trong danh sách thành bảng tính; {{ui:BCF}} ghi chúng thành chủ đề BCF, mỗi chủ đề kèm một ảnh chụp vị trí của nó trên tờ. Cả hai đều theo bộ lọc. Xem [Xuất](topic:field-records#export).
- **Ngoại tuyến, và gộp hai bản sao thành một.** Bản ghi được lưu trong PDF và không cần mạng, nên một máy tính bảng tại công trường có thể thêm, trả lời và lưu chúng. Khi về văn phòng, {{ui:Gộp}} hợp nhất các bản ghi của một bản sao khác của cùng PDF theo mã của chúng, thành một bước hoàn tác. Xem [Lưu, ngoại tuyến và gộp bản sao](topic:field-records#save-offline-and-merging-copies).

### Trợ lý AI

- **Trợ lý làm được nhiều hơn.** Trợ lý riêng của bạn, kết nối qua CadCraft Studio, giờ có thể đặt trạng thái của một đánh dấu (`markup_status`, được ghi trong chuỗi của nó), trả lời trong một chuỗi (`markup_reply`), và xuất danh sách {{ui:Đánh dấu}} thành CSV hoặc BCF (`markups_export`, tức những gì danh sách hiển thị theo bộ lọc của nó). Mỗi thay đổi là một bước hoàn tác, được ký bằng tên của trợ lý. Xem [Trợ lý có thể yêu cầu gì](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Trong mọi ứng dụng

- **Đơn vị.** {{ui:Cài đặt}} › {{ui:Chung}} › {{ui:Đơn vị}} có một danh sách riêng cho chiều dài, diện tích, thể tích, góc và độ dốc, với các kích thước chính xác theo định nghĩa của đơn vị (foot khảo sát Hoa Kỳ là một đơn vị riêng). Tắt các đơn vị bạn không dùng và chúng sẽ rời khỏi danh sách; gắn sao một đơn vị và công việc mới bắt đầu bằng đơn vị đó. Một tệp luôn giữ đơn vị của riêng nó. Trong MarkupCraft, đơn vị đo và đơn vị vị trí trong {{ui:Cài đặt}} › {{ui:MarkupCraft}} và đơn vị trong hộp thoại hiệu chuẩn theo các công tắc; ngôi sao đặt đơn vị đo cho đến khi bạn lưu cài đặt riêng của MarkupCraft, và khoảng cách thực bạn nhập khi hiệu chuẩn có thể mang ký hiệu của bất kỳ đơn vị nào, chẳng hạn `3 yd` hoặc `1.5 km`. Xem [Đơn vị, giá trị nhập và danh sách đơn vị](common:unit-lists).
- **Bố cục dày đặc hơn và bảng tự gọn gàng.** {{ui:Cài đặt}} › {{ui:Chung}} › {{ui:Mật độ bố cục}} › {{ui:Gọn}} đưa được nhiều hơn lên màn hình (màn hình cảm ứng và điện thoại giữ các nút lớn). Mỗi bảng bên có một thanh tiêu đề mảnh: kéo để neo hoặc làm nổi bảng, thả lên thanh của bảng khác để chung một khung dưới dạng các thẻ, ghim để nó trượt về mép, hoặc ẩn đi và đưa lại từ mép. Xem [Sắp xếp các bảng](common:arrange-panels#make-the-layout-denser).
- **Hộp thoại di chuyển được.** Kéo một hộp thoại bằng thanh tiêu đề ra khỏi bản vẽ; nó sẽ quay lại đúng chỗ bạn để. Nhấp đúp vào thanh tiêu đề để đưa nó về giữa. Xem [Di chuyển hộp thoại](common:arrange-panels#move-a-dialog).
- **Công thức cho trợ lý AI.** Mười yêu cầu mẫu cho trợ lý riêng của bạn (dọn dẹp bản vẽ, in một bộ, kiểm tra bản vẽ, hỏi mô hình, tổng hợp bóc tách khối lượng, thử biến thể chi tiết…), mỗi yêu cầu kèm các công cụ nó gọi và quyền nó cần, và mỗi yêu cầu được chạy lại bởi các bài kiểm thử của chúng tôi. Các ứng dụng không chứa AI. Xem [Công thức cho trợ lý AI](common:assistants-recipes).
- **Ngôn ngữ.** **Português (Portugal)** là mới trong {{ui:Cài đặt}} › {{ui:Chung}} › {{ui:Ngôn ngữ}}. Ngôn ngữ này, **Português (Brasil)**, **Español (México)** và **Bahasa Indonesia** giờ có đủ mọi từ của các ứng dụng, dưới dạng bản nháp chưa được người bản ngữ xem xét. Các chủ đề trợ giúp vẫn bằng tiếng Anh.
- **CadCraft Studio** cho biết vì sao kiểm tra cập nhật thất bại (chưa có tệp cho hệ thống của bạn, không có mạng, chữ ký sai) thay vì chỉ "Xong", và không đưa lại thẻ Có gì mới mà bạn đã đóng cho đến khi có bản phát hành mới hơn.

## Chưa có trong phiên bản này

- **0.7 chưa được ký mã.** Việc ký mã và gói Microsoft Store được chuyển sang 0.8 vì việc xác thực chứng chỉ chưa hoàn tất. Kiểm tra SHA-256 bên cạnh mỗi tệp tại getcadcraft.com/download. Trên Windows, nếu SmartScreen chặn trình cài đặt, chọn {{ui:Thêm thông tin}}, rồi {{ui:Vẫn chạy}}. Trên Mac, lần đầu, nhấp chuột phải vào CadCraft Studio và chọn {{ui:Mở}}. CadCraft Studio chưa có trên kho ứng dụng nào, và chưa có bản dựng cho iPad hay iPhone.
- Danh sách góc và độ dốc trong {{ui:Đơn vị}} được lưu, nhưng chưa có công cụ nào đọc chúng.
- Bản ghi hiện trường không được chia sẻ trong phiên Live của CadCraft Studio (phiên Live chỉ mang đánh dấu); hãy gộp các bản sao bằng {{ui:Gộp}}.
- Gộp lấy một bản ghi như một khối từ bản sao được thay đổi sau cùng: nếu hai người thay đổi các trường khác nhau của cùng một bản ghi, các trường của bản sao sau sẽ thắng. Chuỗi phản hồi và tên tệp đính kèm được nối lại.
- Tệp đính kèm chỉ là tên; các tệp vẫn nằm ở nơi chúng đang ở. Không có nhóm, thông báo hay dự án đám mây cho bản ghi, và trợ lý chưa có công cụ nào cho bản ghi.
- Bản ghi hiện trường đã được thử trong trình duyệt ở kích thước điện thoại và máy tính bảng khi mất mạng, nhưng chưa thử trực tiếp trên một máy tính bảng thật.
- Vẫn còn từ 0.6: xoay các đối tượng trang theo góc bất kỳ, vẽ hình mới trực tiếp vào trang, đổi phông hoặc cỡ chữ của đường, và văn bản chảy qua nhiều dòng. Bản sao đã lưu có chỉnh sửa trang chưa được mở trong Acrobat.
- Vẫn còn từ 0.5: hoàn tác thay đổi trang (như thêm trang trống), đọc chữ từ tờ quét, và phiên Live vượt ra ngoài mạng riêng của bạn.

Mọi thứ khác nằm trong [Những gì chưa xây dựng](topic:not-built-yet).
