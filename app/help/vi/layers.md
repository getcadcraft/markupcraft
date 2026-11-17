---
title: Lớp đánh dấu
summary: Đặt đánh dấu lên các lớp có tên, rồi hiện, ẩn hoặc khóa từng lớp; các trình xem PDF khác cũng có thể chuyển chúng.
keywords: lớp, lớp, ẩn, hiện, khóa, nhóm đánh dấu, bộ môn, cơ khí, điện, nội dung tùy chọn, ocg, hiển thị
from: 0fbb4c26
---

Lớp nhóm các đánh dấu, ví dụ theo bộ môn hoặc theo người duyệt. Ẩn một lớp để thấy bản vẽ bên dưới, hoặc khóa nó để các đánh dấu không bị di chuyển nhầm.

## Tạo một lớp và vẽ trên lớp đó

1. Mở {{ui:Lớp}}, ở đầu bảng {{ui:Tờ}}.
2. Chọn {{ui:Lớp mới}}, gõ một tên như `Mechanical`, rồi chọn {{ui:Thêm lớp}}.
3. Lớp mới trở thành lớp hiện hành: mọi đánh dấu bạn vẽ từ lúc này sẽ nằm trên đó. Chọn tên của lớp khác, hoặc {{ui:Không có lớp}}, để đổi nơi các đánh dấu mới được đặt.

Để chuyển một đánh dấu sang lớp khác, chọn nó rồi chọn lớp trong mục {{ui:Lớp}} của {{ui:Thuộc tính}}. {{ui:Lớp mới…}} ở cuối danh sách đó tạo ngay một lớp. Việc chuyển có thể hoàn tác bằng {{key:Mod+Z}}.

## Hiện, ẩn và khóa

Mỗi hàng lớp có hai nút:

- **Biểu tượng con mắt** hiện hoặc ẩn lớp. Đánh dấu bị ẩn không được vẽ và không thể chọn; chúng vẫn được tính trong danh sách {{ui:Đánh dấu}}.
- **Ổ khóa** giữ các đánh dấu của lớp trên tờ nhưng ngăn chúng bị chọn, di chuyển hoặc xóa.

Nút bút chì đổi tên lớp và đưa các đánh dấu của nó đi theo. Lọc danh sách {{ui:Đánh dấu}} theo {{ui:Lớp}} để chỉ xem đánh dấu của một lớp.

## Trong tệp PDF đã lưu

Mỗi lớp trở thành một lớp PDF (nội dung tùy chọn). Các trình xem PDF khác liệt kê các lớp trong bảng lớp của chúng và có thể chuyển đổi; một lớp bạn đã ẩn cũng bắt đầu ở trạng thái ẩn ở đó. Các lớp mà bản vẽ đã có sẵn, như lớp CAD, giữ nguyên như cũ. Khi bạn mở lại bản sao trong MarkupCraft, các đánh dấu trở lại trên lớp của chúng, ẩn và khóa đúng như khi bạn để lại.

## Điều cần biết

- Ẩn và khóa không phải là chỉnh sửa: chúng không được hoàn tác bằng {{key:Mod+Z}}, nhưng được lưu cùng tệp PDF.
- Sao chép và dán giữ lớp của đánh dấu.
- Bản sao đã làm phẳng vẽ mọi đánh dấu vào trang, bất kể lớp của nó. Xem [Lưu bản sao đã làm phẳng](topic:flatten).
