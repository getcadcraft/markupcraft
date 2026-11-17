---
title: Biến đánh dấu thành nhiệm vụ
summary: Giao cho một đánh dấu một người (hoặc trợ lý của bạn), một ngày hạn và liên kết tới bản vẽ hoặc phần tử mô hình mà nó nói tới, rồi xem nó đóng lại khi điều đó thực sự thay đổi.
keywords: nhiệm vụ, người được giao, trợ lý, hạn, quá hạn, liên kết, đóng, thay đổi, phần tử, khu vực bản vẽ, đánh dấu có hành động, MCP
from: 9e970202
---

Nhiệm vụ là một đánh dấu cần có người thực hiện. Nó giữ vị trí trên tờ và chuỗi phản hồi của nó, và thêm tiêu đề, người được giao, ngày hạn, trạng thái và, nếu bạn muốn, một liên kết tới thứ mà nó nói tới.

## Tạo nhiệm vụ

1. Chọn một hoặc nhiều đánh dấu.
2. Mở thẻ {{ui:Nhiệm vụ}} và chọn {{ui:Biến mục đã chọn thành nhiệm vụ}}.
3. Điền tiêu đề (mặc định lấy từ văn bản của đánh dấu), người nhận ({{ui:Người}} hoặc {{ui:Trợ lý}}, cùng một tên), ngày hạn tùy chọn, và những gì cần theo dõi.

Nhiệm vụ cho trợ lý là công việc của trợ lý mà bạn đã kết nối với MarkupCraft (xem [Dùng MarkupCraft với trợ lý AI](topic:use-with-ai-assistants)). MarkupCraft không có trợ lý riêng: nó chỉ liệt kê công việc và nhận câu trả lời của trợ lý. Chọn {{ui:Giao cho}}, rồi {{ui:Trợ lý}} trong danh sách, sẽ hiện những gì đang chờ trợ lý.

## Theo dõi thay đổi

- **Bản vẽ bên trong đánh dấu.** MarkupCraft giữ các đường bên trong khung của đánh dấu như hiện tại. Khi bạn mở một bản sửa đổi mới hơn của tờ đó (tệp thứ hai có cùng số tờ, hoặc cùng vị trí trang), chọn {{ui:Kiểm tra ngay}}: nếu các đường trong khu vực đó khác nhau hơn một chút, nhiệm vụ được đóng.
- **Một phần tử mô hình.** Cung cấp ứng dụng và mã định danh của phần tử. Trợ lý của bạn đọc phần tử bằng công cụ riêng của ứng dụng đó và báo cáo bằng `tasks_check`. Báo cáo đầu tiên được giữ làm trạng thái khởi đầu; một báo cáo sau khác đi sẽ đóng nhiệm vụ. Phần tử đã bị xóa cũng đóng nhiệm vụ.
- **Không có gì.** Một nhiệm vụ đơn thuần mà bạn hoàn thành bằng tay.

Một nhiệm vụ đã đóng được đánh dấu Xong, đánh dấu của nó chuyển thành Hoàn thành, và một ghi chú trong chuỗi nói rõ điều gì đã thay đổi. Một bước hoàn tác sẽ mở lại nó.

**Giới hạn:** việc kiểm tra giả định bản sửa đổi mới hơn dùng cùng gốc trang và cùng kích thước trang. Một tờ được in lại với kích thước khác sẽ không khớp, nên các nhiệm vụ của nó không đóng. Các tờ được ghép theo số tờ, hoặc theo vị trí trang nếu không có số; MarkupCraft không co giãn một bản sửa đổi để khớp bản kia.

In lại cùng một bản vẽ với dấu ngày mới, hoặc các đường chỉ dịch chuyển ít hơn 1.5 pt, không được tính là thay đổi. Nếu không có bản sửa đổi mới hơn nào đang mở, nhiệm vụ vẫn mở và thanh trạng thái cho biết điều đó.

## Danh sách

Danh sách {{ui:Nhiệm vụ}} có thể lọc theo trạng thái và theo người nhận, kể cả {{ui:Quá hạn}}. Nhiệm vụ đã quá ngày hạn sẽ hiện trong bảng Vấn đề như một cảnh báo. {{ui:CSV}} xuất danh sách.

Nhiệm vụ được lưu trong PDF cùng đánh dấu, và chúng đi qua Live như các thuộc tính đánh dấu khác.
