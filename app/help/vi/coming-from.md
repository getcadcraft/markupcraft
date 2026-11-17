---
title: Chuyển từ phần mềm đánh dấu khác
summary: Cách các thói quen của một chương trình đánh dấu PDF trên máy tính để bàn ánh xạ sang MarkupCraft, và những khác biệt khiến người dùng dễ nhầm.
keywords: chuyển, chuyển đổi, di chuyển, quen thuộc, đánh dấu PDF trên máy tính để bàn, hộp dụng cụ, danh sách đánh dấu, lớp phủ, phiên, hồ sơ, phím tắt, khác biệt
from: c8f323e1
---

Nếu bạn xem xét bản vẽ trong Bluebeam Revu (hoặc chú thích PDF trong một chương trình PDF trên máy tính để bàn khác), phần lớn MarkupCraft sẽ quen thuộc: đám mây, chú thích, hộp dụng cụ, danh sách đánh dấu, trạng thái kèm phản hồi, phép đo đã hiệu chuẩn, lớp phủ tờ. Cách xử lý tệp là khác biệt lớn nhất, nên nên đọc phần kế tiếp ngay cả khi bạn bỏ qua phần còn lại.

## Năm khác biệt quan trọng

1. **Lưu tạo một tệp mới.** MarkupCraft chạy trong trình duyệt và không thể ghi đè lên PDF trên đĩa của bạn. {{ui:Lưu}} tải xuống "<name> (marked up).pdf" và bản gốc không đổi. Lần sau, mở bản sao "(marked up)", và tự dọn các bản sao cũ.
2. **PDF được lưu khi bạn lưu.** Cho đến lúc đó, một bản khôi phục trong trình duyệt này giữ đánh dấu của bạn qua sự cố hoặc khi tab bị đóng, và MarkupCraft sẽ đề nghị khôi phục lần sau. Đó là lưới an toàn: lưu PDF để giữ bản xem xét.
3. **Hồ sơ của bạn nằm trong trình duyệt.** Tên tác giả, cài đặt công cụ và hộp dụng cụ được giữ trong trình duyệt này trên máy tính này. Một trình duyệt hoặc máy tính khác sẽ bắt đầu lại từ đầu, và xóa dữ liệu trang web sẽ xóa chúng. Xuất hộp dụng cụ để sao lưu. Xem [Những gì được giữ trong trình duyệt này](topic:browser-storage).
4. **Chưa có phiên dùng chung.** Không có phiên xem xét trực tiếp, dùng chung và không có dự án trên đám mây. Bản xem xét đi theo PDF: lưu, gửi bản sao, người tiếp theo phản hồi và lưu.
5. **Tỷ lệ theo từng tờ, và chỉ theo tờ.** Không có khung nhìn bên trong một tờ và không có "áp dụng tỷ lệ này cho mọi trang". Hiệu chuẩn từng tờ bạn đo.

## Từng thói quen

| Bạn quen với | Trong MarkupCraft |
|---|---|
| Bảng hình thu nhỏ, nhãn trang | {{ui:Tờ}} ở bên trái. Tên lấy từ nhãn trang hoặc đọc từ khung tên; sửa bằng {{ui:Đổi tên tờ}}. |
| Mở nhiều PDF như một bộ | Mở tất cả cùng lúc; chúng thành một danh sách. Không có tệp bộ nào được lưu: lần sau mở đúng các PDF đó. |
| Hộp dụng cụ có bộ công cụ | Thẻ {{ui:Công cụ}}: một hộp dụng cụ cho mỗi trình duyệt, các công cụ đã lưu kèm kiểu và chủ đề. Chia sẻ bằng {{ui:Xuất}} và {{ui:Nhập}} dưới dạng tệp JSON. Tệp bộ công cụ từ chương trình khác không thể nhập. |
| Bảng thuộc tính | Thẻ {{ui:Thuộc tính}}: trạng thái, chủ đề, bình luận, kiểu, phản hồi và hạng mục tồn đọng trong một chỗ. |
| Danh sách đánh dấu có cột | Thẻ {{ui:Đánh dấu}} với bộ lọc theo tờ, tác giả, trạng thái và loại. Xuất CSV hoặc BCF. Chưa có cột tùy chỉnh và chưa có bản tóm tắt PDF hay bảng tính. |
| Trạng thái và tình trạng xem xét | {{ui:Trạng thái}}: Mở, Đã chấp nhận, Đã từ chối, Hoàn thành. Chưa có bộ trạng thái tùy chỉnh. Được lưu thành các trạng thái xem xét tiêu chuẩn. |
| Phản hồi trên một đánh dấu | Chuỗi "Phản hồi" trong {{ui:Thuộc tính}}, với các thay đổi trạng thái được ghi lại trong đó. Phản hồi đã gửi không thể sửa. |
| Hiệu chuẩn, rồi đo chiều dài, diện tích, đếm | {{ui:Hiệu chuẩn}}, {{ui:Chiều dài}} ({{key:M}}), {{ui:Diện tích}} ({{key:Q}}, cho diện tích và chu vi), {{ui:Đếm}} ({{key:U}}). Chưa có góc, bán kính, thể tích, chiều dài đa tuyến hoặc lỗ khoét. |
| Chồng trang | Thẻ {{ui:So sánh}}: đỏ cho cũ, xanh dương cho mới, căn chỉnh theo hai điểm. Không có "so sánh tài liệu" tự động khoanh vùng. |
| Con dấu | {{ui:Con dấu}} với sáu con dấu có sẵn và nội dung tùy chỉnh, ký bằng tên bạn và ngày. Chưa có con dấu hình ảnh hay chữ ký. |
| Theo dõi punch hoặc vấn đề | Thẻ {{ui:Danh sách hạng mục tồn đọng}}: các hạng mục đánh số với người được giao, hạn chót và trạng thái; xuất CSV. |
| Phiên cộng tác trực tiếp | Chưa có. Chuyền PDF đã lưu cho nhau. |
| Làm phẳng | Chưa xây dựng. Đánh dấu vẫn là chú thích mà các trình xem khác có thể hiển thị và in. |
| Lớp cho đánh dấu | Chưa xây dựng. Dùng chủ đề, tác giả và bộ lọc danh sách để sắp xếp bình luận. |
| Liên kết giữa các tờ | Chưa xây dựng. |
| Phím cách để di chuyển, con lăn để thu phóng | Giống nhau: giữ {{key:Space}} và kéo; con lăn thu phóng tại con trỏ. Con lăn không bao giờ cuộn trang. |

## Các phím khác biệt

Nhiều phím một chữ cái là những gì bạn có thể mong đợi, nhưng hãy kiểm tra các phím sau trước khi ngón tay bấm theo thói quen:

- {{key:K}} là {{ui:Chú thích}}, và {{key:Q}} là {{ui:Diện tích}}. Nếu bạn quen dùng Q cho chú thích, ở đây nó sẽ bắt đầu một diện tích.
- {{key:C}} là hộp {{ui:Đám mây}}; {{key:Shift+C}} là {{ui:Đám mây tự do}}.
- {{key:M}} là {{ui:Chiều dài}}, {{key:U}} là {{ui:Đếm}}, {{key:Y}} là {{ui:Đa tuyến}}, {{key:G}} là {{ui:Đa giác}}, {{key:I}} là {{ui:Tô sáng}}.
- {{key:Mod+D}} nhân bản vùng chọn (thay vì đánh dấu trang của trình duyệt).
- {{key:Mod+Plus}} và {{key:Mod+Minus}} thu phóng tờ, không phải trang của trình duyệt.
- Bất kỳ phím nào cũng có thể đổi: xem bên dưới.

:::tip
Nếu ngón tay bạn quen với Bluebeam Revu, chọn kiểu menu {{ui:Xem xét PDF}} trong {{ui:Cài đặt}} › {{ui:MarkupCraft}} › {{ui:Menu, phím và chuột}}: một thanh menu (Tệp, Chỉnh sửa, Xem, Tài liệu, Đánh dấu, {{ui:Đo}}, Cửa sổ) trên một hàng công cụ xem xét, {{key:Q}} cho chú thích, {{key:H}} cho bút tô sáng, {{key:N}} cho đa giác, và các phép đo trên {{key:Alt+Shift}} kèm một chữ cái. Bất kỳ phím nào cũng có thể đổi ở đó. Xem [Menu, phím và chuột](topic:menus-keys-and-mouse).
:::

Danh sách đầy đủ có trong [Bàn phím và chuột](topic:keyboard).

## Những điều hoạt động khác với bạn tưởng

- **Công cụ vẫn bật.** Sau một đám mây, bạn vẫn đang vẽ đám mây. {{key:Esc}} một lần xóa vùng chọn, hai lần trở về {{ui:Chọn}}.
- **Văn bản và chú thích cần có chữ.** Kết thúc khi chưa gõ gì sẽ không thêm đánh dấu nào. Ghi chú được giữ rỗng.
- **Phép đo cần tỷ lệ trước.** {{ui:Chiều dài}} và {{ui:Diện tích}} chuyển sang {{ui:Hiệu chuẩn}} trên tờ chưa hiệu chuẩn và quay lại sau đó.
- **Nhận xét từ chương trình khác.** Hình chữ nhật, elip, đường thẳng, đa tuyến, đa giác, nét mực, hộp văn bản và ghi chú dán được tạo ở nơi khác sẽ trở thành đánh dấu MarkupCraft có thể chỉnh sửa, và được viết lại theo cách của MarkupCraft khi bạn lưu (diện mạo có thể đổi đôi chút). Tô sáng văn bản, con dấu của chương trình khác và các loại đặc biệt khác chỉ đọc: bạn có thể phản hồi, nhưng không thể thay đổi.
- **Ký tự ngoài bảng chữ cái Tây Âu** sẽ in thành "?" trong PDF đã lưu. Xem [Lưu PDF đã đánh dấu](topic:save-the-marked-up-pdf).
- **Ngày trên con dấu** dùng UTC, nên một con dấu tạo muộn buổi tối ở châu Mỹ có thể hiển thị ngày mai.
- **Đo lường được giữ lại** dưới dạng chú thích đo lường tiêu chuẩn, và mỗi tờ đã hiệu chuẩn giữ tỷ lệ của nó, nên một chương trình đọc đo lường PDF thường có thể hiển thị chúng. Hành vi chính xác phụ thuộc vào chương trình đó.

## Dùng cả hai

Bạn có thể qua lại. Nhận xét tạo ở nơi khác sẽ mở trong MarkupCraft, và PDF "(marked up)" mở được trong các chương trình PDF khác với mọi đánh dấu, phản hồi và trạng thái hiển thị. Những gì chỉ MarkupCraft đọc lại (người được giao và hạn chót của hạng mục tồn đọng, trạng thái hạng mục) được giữ trong tệp dành cho MarkupCraft.
