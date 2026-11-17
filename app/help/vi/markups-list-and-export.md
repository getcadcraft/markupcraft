---
title: Danh sách đánh dấu, bộ lọc và xuất
summary: Xem mọi đánh dấu trong bộ tài liệu, lọc theo tờ, tác giả, trạng thái và loại, chuyển tới một đánh dấu, và xuất danh sách dưới dạng CSV hoặc BCF.
keywords: danh sách đánh dấu, danh sách, tóm tắt, xlsx, sổ tính, bảng tính, báo cáo pdf, nhập bcf, lọc, sắp xếp, báo cáo, xuất, csv, bcf, bcfzip, vấn đề, danh sách bình luận, chuyển tới
from: 6c70261e
---

## Mở danh sách

Chọn thẻ {{ui:Đánh dấu}} ở bên phải. Mọi đánh dấu của mọi tệp đang mở đều được liệt kê, theo thứ tự tờ, rồi theo thứ tự chúng được tạo. Mỗi hàng hiển thị:

- một biểu tượng có màu của đánh dấu, số hạng mục của nó nếu có ("#4"), và chủ đề của nó,
- văn bản, nội dung con dấu hoặc giá trị đo, và bình luận của nó,
- tờ, tác giả và ngày,
- trạng thái của nó (hoặc "Chỉ đọc" với các bình luận đi kèm tệp), và số phản hồi khi có phản hồi.

Dòng phía trên danh sách đếm chúng: "38 đánh dấu", hoặc "12 trên 38 đánh dấu" khi đang lọc.

## Chuyển tới một đánh dấu

Nhấp một hàng. MarkupCraft hiện tờ đó, chọn đánh dấu, và thu phóng tới nó khi nó nằm ngoài màn hình hoặc quá nhỏ để thấy. {{ui:Thuộc tính}} hiện chi tiết và chuỗi phản hồi của nó khi bạn chuyển về thẻ đó.

## Lọc

Có bốn menu phía trên danh sách. Chúng kết hợp với nhau.

| Menu | Lựa chọn |
|---|---|
| {{ui:Tờ}} | Mọi tờ, Tờ này (theo bạn khi bạn đổi tờ), hoặc bất kỳ tờ nào có đánh dấu |
| {{ui:Tác giả}} | Bất kỳ ai, hoặc từng tác giả trong bộ |
| {{ui:Trạng thái}} | Mọi trạng thái, Mở, Chấp nhận, Từ chối, Hoàn thành |
| {{ui:Loại}} | Mọi loại, hoặc từng loại đánh dấu trong bộ |

Ví dụ:

- Những gì còn mở trên tờ này: {{ui:Tờ}} "Tờ này", {{ui:Trạng thái}} "Mở".
- Ý kiến của một tư vấn viên: {{ui:Tác giả}} là tên của họ.
- Mọi phép đo: {{ui:Loại}} "Chiều dài" hoặc "Diện tích".

Danh sách hiện tối đa 2000 hàng; trong các bộ rất lớn, hãy thu hẹp bằng bộ lọc.

## Xuất ra CSV

Chọn {{ui:CSV}} ở đầu thẻ. Bạn sẽ có "<tên> markups.csv" với **các đánh dấu theo đúng bộ lọc hiện tại**, mỗi đánh dấu một hàng, với các cột sau:

Punch no., Sheet, File, Page, Type, Subject, Text, Comment, Measurement, Author, Created, Modified, Status, Replies, Last reply, Color, Read-only.

- "Text" chứa chữ của hộp văn bản và chú thích, nội dung con dấu, hoặc tên nhóm đếm.
- "Measurement" chứa chiều dài, "diện tích, chu vi" với diện tích, và "nhóm: n" với đếm.
- Ngày là dấu thời gian đầy đủ theo UTC.

Để xuất mọi thứ, trước hết đặt mọi bộ lọc về lựa chọn đầu tiên.

## Chú giải trên tờ

{{ui:Chú giải}} trong thẻ {{ui:Đánh dấu}} đặt một chú giải ở góc trên bên phải của những gì bạn thấy: một hộp liệt kê từng loại đánh dấu trên tờ (theo chủ đề và màu, như "Đám mây", "Câu hỏi" hoặc "Ổ cắm") cùng số lượng của chúng. Nhóm đếm được tính theo số dấu của nó. Chú giải tiếp tục đếm khi bạn vẽ, di chuyển hoặc xóa đánh dấu, và nó được in và lưu cùng số đếm của thời điểm đó.

Di chuyển và đổi kích thước nó như mọi đánh dấu khác. Trong {{ui:Thuộc tính}} của nó, đổi {{ui:Tiêu đề}}, hoặc đặt {{ui:Đếm}} thành {{ui:Toàn bộ bộ}} để đếm mọi tờ. Khoảng trắng, các chú giải khác và bình luận từ chương trình khác không được tính.

## Cột của riêng bạn, và sắp xếp

{{ui:Cột}} trong thẻ {{ui:Đánh dấu}} thêm các cột riêng vào mọi đánh dấu: một **văn bản**, một **lựa chọn** (như Bộ môn: Cơ khí, Điện, Cấp thoát nước), một **số** (như Chi phí) hoặc một **ngày**. Đặt tên cho từng cột, chọn loại, liệt kê các lựa chọn với cột lựa chọn, rồi chọn {{ui:Lưu các cột}}.

- Điền chúng trong {{ui:Thuộc tính}}: mỗi cột có một ô ở đó. Cột số chỉ nhận số, cột ngày chỉ nhận ngày.
- Danh sách hiện giá trị dưới mỗi đánh dấu, bộ lọc {{ui:Cột}} chọn một giá trị (hoặc các đánh dấu mà ô đó trống), và {{ui:Sắp xếp}} sắp danh sách theo một cột, theo tác giả, trạng thái, loại hoặc ngày, thay vì theo tờ.
- Các bản xuất CSV và XLSX mang các cột này sau các cột thông thường. Các cột được lưu cùng tệp PDF và trở lại khi bạn mở lại tệp.

## Xuất bản tóm tắt: sổ tính hoặc PDF

- {{ui:XLSX}} tải về "<tên> markup summary.xlsx" với ba trang: **Markups** (một hàng cho mỗi đánh dấu trong danh sách, cùng các cột như CSV), **By sheet** (số đánh dấu của mỗi tờ, mở và đã đóng, và số lượng của từng loại, kèm tổng) và **Punch list** (khi có hạng mục tồn đọng).
- {{ui:PDF}} tải về "<tên> markup summary.pdf": một báo cáo để in hoặc gửi, với tên bộ, ngày và một bảng các đánh dấu trong danh sách (số, tờ, loại, chủ đề, văn bản hoặc bình luận, giá trị đo, tác giả, trạng thái và phản hồi mới nhất). Văn bản dài được xuống dòng; tiêu đề bảng lặp lại ở mỗi trang.

Cả hai đều lấy danh sách theo đúng bộ lọc hiện tại, nên hãy lọc trước để báo cáo một tờ, một tác giả, hoặc chỉ các mục còn mở.

## Xuất ra BCF

Chọn {{ui:BCF}}. MarkupCraft chụp ảnh mỗi đánh dấu trong danh sách trên tờ của nó ("Đang tạo ảnh chụp cho BCF (3 trên 12)…"), rồi tải về "<tên> markups.bcfzip". Mỗi đánh dấu trở thành một chủ đề BCF với trạng thái, tác giả, ngày, phản hồi thành bình luận, người được giao và hạn từ hạng mục tồn đọng của nó, cùng ảnh chụp.

Dùng để đưa các bình luận duyệt bản vẽ vào công cụ phối hợp BIM đọc BCF. Những gì được chuyển sang và những gì không, xem trong [Cơ bản về BCF](topic:bcf-basics).

## Nhập BCF

{{ui:Nhập BCF}} đọc tệp .bcfzip (hoặc .bcf) từ một công cụ BIM:

- Các vấn đề đến từ chính chức năng xuất BCF của MarkupCraft sẽ tìm lại đánh dấu của chúng: phản hồi mới được thêm vào chuỗi, và trạng thái mới được đặt (Closed được tính là Hoàn thành). Phản hồi đã có sẵn sẽ không được thêm hai lần.
- Các vấn đề khác trở thành ghi chú, với tiêu đề, mô tả, tác giả và bình luận. Một ghi chú được đặt lên tờ có số hoặc tên nằm trong nhãn của vấn đề, nếu không thì lên tờ đang mở; máy ảnh BIM không có chỗ trên giấy, nên các ghi chú như vậy được xếp chồng ở góc trên bên trái của tờ để bạn di chuyển.

Toàn bộ việc nhập là một bước: {{key:Mod+Z}} sẽ hoàn tác nó. Xem [Cơ bản về BCF](topic:bcf-basics).

## Những gì danh sách chưa làm được

- Nhóm danh sách (thay vào đó, sắp xếp rồi lọc).
- Sửa giá trị trong danh sách (sửa trong {{ui:Thuộc tính}}; các trường hạng mục tồn đọng có thể sửa trong thẻ {{ui:Danh sách hạng mục tồn đọng}}).
