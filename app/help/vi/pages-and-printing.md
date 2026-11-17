---
title: In và thay đổi các trang của PDF
summary: In tờ cùng đánh dấu, và xoay, di chuyển, chèn, xóa hoặc trích xuất trang của một PDF đang mở.
keywords: in, máy in, giấy, trang, xoay, đổi chiều, sắp xếp lại, di chuyển trang, chèn, thêm trang, trang trắng, xóa trang, gỡ trang, trích xuất, tách, thao tác trang
from: 81832d9b
---

Menu {{ui:Trang}} trong nhóm {{ui:Tệp}} làm việc trên PDF mà tờ đang mở thuộc về. PDF trên máy tính của bạn không bao giờ bị thay đổi: các thay đổi là một phần của bản sao bạn lưu.

## In

1. Nhấn {{key:Mod+P}}, hoặc chọn {{ui:Trang}}, rồi {{ui:In…}}.
2. Khi có hơn một tờ đang mở, chọn những gì để in: {{ui:Tờ này}}, mọi trang của tệp này, toàn bộ bộ, hoặc các trang bạn gõ (như `1-3, 5`).
3. Chọn {{ui:In}}. Hộp thoại in của trình duyệt mở ra: chọn máy in, khổ giấy và tỷ lệ ở đó.

Đánh dấu được in như chúng hiển thị trên tờ: chúng được vẽ vào các trang của bản sao gửi tới máy in. Nhận xét do chương trình khác tạo ra sẽ in theo cách PDF của chúng quy định.

:::safari firefox
Nếu trình duyệt của bạn không thể in từ bên trong trang, các tờ sẽ mở như một PDF trong thẻ mới. In từ đó.
:::

## Xoay trang

Chọn {{ui:Trang}}, rồi {{ui:Xoay trang theo chiều kim đồng hồ}} hoặc {{ui:Xoay trang ngược chiều kim đồng hồ}}. Tờ đang mở xoay một phần tư vòng. Đánh dấu của nó vẫn ở đúng chỗ trên bản vẽ, và văn bản bạn gõ xoay theo trang để vẫn đọc thẳng được.

## Di chuyển trang

Chọn {{ui:Trang}}, rồi {{ui:Chuyển trang lên trước}} hoặc {{ui:Chuyển trang xuống sau}}. Tờ đang mở đổi chỗ với tờ bên cạnh trong PDF của chính nó. Đánh dấu, tỷ lệ và số tờ của nó đi theo.

## Chèn trang

- {{ui:Chèn trang từ một PDF…}} đặt mọi trang của một PDF khác sau tờ đang mở.
- {{ui:Chèn một trang trắng}} thêm một trang trống cùng kích thước sau tờ đang mở, dùng cho bản phác và ghi chú. Trong bộ được tạo bằng {{ui:Mới}}, nó cũng có lưới của bộ.
- Trong bộ được tạo bằng {{ui:Mới}}, {{ui:Thêm một trang trắng}} dưới danh sách {{ui:Tờ}} thêm một trang nữa như các trang khác, ở cuối. Xem [Bắt đầu với trang trắng](topic:open-a-plan-set#start-with-blank-pages).

Trang được chèn nhận số trang làm nhãn cho đến khi bạn đổi tên. Xem [Đổi tên tờ](topic:open-a-plan-set#rename-a-sheet).

## Xóa trang

1. Chọn {{ui:Trang}}, rồi {{ui:Xóa trang…}}.
2. Gõ số trang của PDF này, như `3` hoặc `2-4`. Trang của tờ đang mở được điền sẵn.
3. Chọn {{ui:Xóa trang}}. Nếu các trang đó có đánh dấu, MarkupCraft cho biết có bao nhiêu và hỏi lại.

Một PDF giữ ít nhất một trang. Để bỏ cả một tệp, đóng bộ và mở các tệp bạn vẫn cần.

## Trích xuất trang

Chọn {{ui:Trang}}, rồi {{ui:Trích xuất trang…}}, và gõ các trang. Chúng được tải xuống dưới dạng một PDF mới tên "<file> (pages 1-3).pdf", với đánh dấu của chúng như nhận xét bạn có thể tiếp tục sửa. Tệp đang mở giữ nguyên.

## Điều nên biết

- **Hoàn tác dừng lại ở thay đổi trang.** {{key:Mod+Z}} hoàn tác các đánh dấu vẽ sau nó, nhưng không hoàn tác chính thay đổi trang hay bất cứ thứ gì trước đó. Đóng mà không lưu để bắt đầu lại từ PDF gốc.
- Số trang đếm theo các trang của một PDF, không phải cả bộ. Di chuyển một trang giữ nó trong tệp của chính nó.
- Các trang đã đổi là công việc chưa lưu: {{ui:Lưu}} tải xuống bản sao đã sắp xếp lại, và khi rời đi sẽ hỏi trước.
