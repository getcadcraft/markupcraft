---
title: Điền biểu mẫu PDF
summary: Nhập vào các trường biểu mẫu của tệp PDF, đánh dấu ô chọn và chọn từ danh sách; các giá trị được lưu vào chính biểu mẫu.
keywords: biểu mẫu, form, điền, điền vào, điền đầy đủ, acroform, trường, ô nhập, ô đánh dấu, đánh dấu, nút chọn, danh sách thả xuống, danh sách, giấy phép, hồ sơ đề nghị, biểu mẫu kiểm tra, biểu mẫu trình duyệt, ký xác nhận
from: ab366541
---

Nhiều tệp PDF đi kèm biểu mẫu: đơn xin giấy phép, danh mục kiểm tra, trang bìa hồ sơ trình duyệt. MarkupCraft hiển thị các trường của biểu mẫu cùng giá trị của chúng, và cho phép bạn điền vào. Các giá trị được đưa vào chính các trường của PDF, nên Acrobat và mọi trình đọc PDF khác đều hiển thị và giữ lại chúng.

## Điền biểu mẫu

1. Mở tệp PDF. Khi tệp có biểu mẫu, thanh trạng thái cho biết số trường có trong đó.
2. Chọn {{ui:Fill form}} trên thanh công cụ (hoặc nhấn {{key:F}}). Mỗi trường trên trang có một ô để bạn nhập.
3. Nhấp vào một trường và gõ. Đánh dấu ô chọn, chọn nút tròn, chọn từ danh sách thả xuống và danh sách. {{key:Tab}} chuyển đến trường tiếp theo.
4. Để di chuyển tờ khi đang điền, kéo ở bất kỳ vị trí nào bên ngoài các trường.
5. Nhấn {{key:Esc}} hoặc chọn công cụ khác khi bạn đã xong. Những gì bạn đã nhập vẫn nằm trên tờ.

Với {{ui:Select}}, nhấp đúp vào một trường sẽ bật {{ui:Fill form}} và đưa con trỏ vào trường đó.

## Lưu biểu mẫu đã điền

Chọn {{ui:Save}}. Bản bạn tải xuống có các giá trị của bạn trong các trường, cùng các đánh dấu của bạn bên cạnh. Thanh trạng thái cho biết số trường đã được điền.

Để nộp một biểu mẫu mà không ai có thể thay đổi, chọn {{ui:Pages}}, rồi {{ui:Save a flattened copy…}}: các giá trị trở thành một phần của trang. In cũng làm điều tương tự.

## Cần biết

- Trường mà PDF khóa (chỉ đọc) thì không thể thay đổi. Ô của nó có màu xám.
- Văn bản trong giới hạn độ dài của trường được giữ lại; ký tự vượt quá sẽ không được nhập.
- Một số biểu mẫu không có hình vẽ các ô và nút; các chương trình khác sẽ hiển thị chúng trống. MarkupCraft vẽ chúng, và khi bạn lưu, ứng dụng thêm hình ảnh để chúng hiển thị ở mọi nơi.
- Hoàn tác trong một trường là của chính trường đó: nhấn {{key:Ctrl+Z}} khi bạn đang gõ trong trường. Hoàn tác đánh dấu không hoàn tác các giá trị biểu mẫu.
- Nếu trình duyệt của bạn đóng, các giá trị bạn đã nhập sẽ được khôi phục cùng phần công việc chưa lưu còn lại.
- Giá trị nhập bằng các chữ mà phông PDF tiêu chuẩn không viết được (ví dụ tiếng Trung) vẫn được lưu, và PDF yêu cầu mỗi trình đọc tự vẽ chúng.
- Trường chữ ký và nút bấm không được điền ở đây. Để ký, dùng {{ui:Stamp}} và chữ ký của bạn.
- Giá trị nhập vào biểu mẫu chưa được chia sẻ trong phiên Live.
