---
title: Liên kết tờ
summary: Làm cho một đánh dấu nhảy tới tờ khác, và liên kết mọi chú thích tờ như 3/A-501 tới tờ và khung nhìn của nó trong một lượt bằng Liên kết hàng loạt.
keywords: siêu liên kết, liên kết, nhảy, chú thích tờ, chú thích chi tiết, chú thích mặt cắt, 3/A-501, tới tờ, quay lại, liên kết tự động, liên kết hàng loạt, khung tên, số tờ, tên tờ, khung nhìn, chi tiết, đổi tên, đánh số lại, phụ lục, liên kết pdf
from: 86a17c37
---

Liên kết tờ đưa bạn từ một đánh dấu tới tờ khác của bộ: từ bong bóng chi tiết tới chi tiết, từ ghi chú tới tờ mà nó nhắc tới.

## Liên kết một đánh dấu tới tờ

1. Chọn đánh dấu.
2. Trong {{ui:Thuộc tính}}, chọn tờ dưới {{ui:Liên kết tới tờ}}.

Một mũi tên nhỏ xuất hiện ở góc trên bên phải của đánh dấu. Để đi theo nó, giữ {{key:Mod}} và nhấp đánh dấu, hoặc chọn nó rồi chọn {{ui:Đi tới …}} trong {{ui:Thuộc tính}}. {{key:Alt+Left}} quay lại tờ bạn đã đến từ đó.

Liên kết gọi tờ bằng số của nó, nên nó vẫn hoạt động sau khi bạn mở lại bộ hoặc chèn một bản phát hành mới: nó mở tờ mới nhất có số đó. Nếu tờ đó không được mở, thanh trạng thái cho biết điều đó.

## Liên kết mọi chú thích tờ cùng lúc

Chọn {{ui:Trang}} › {{ui:Liên kết hàng loạt…}}, hoặc {{ui:Liên kết chú thích tờ…}} dưới {{ui:Tìm văn bản}} ở đầu bảng {{ui:Tờ}}.

1. **Kiểm tra số tờ.** MarkupCraft liệt kê mọi tờ đang mở với số và tên mà nó đọc từ khung tên của tờ (hoặc nhãn trang), cùng nguồn của từng cái. Sửa những cái sai, và gõ số ở chỗ nó không tìm thấy (khung tên có số được vẽ thành đường nét sẽ không có văn bản để đọc). Sau đó chọn {{ui:Tìm chú thích}}. Các sửa của bạn là một bước hoàn tác, và chúng trở thành nhãn trang trong PDF đã lưu.
2. **Xem danh sách.** MarkupCraft đọc văn bản của mọi tờ để tìm các chú thích như "3/A-501", "5 / A501", "DETAIL 2 ON A-501", một bong bóng có "3" trên "A-501", hoặc một "A-501" trơn trong ghi chú, và đọc tiêu đề khung nhìn của mỗi tờ (số chi tiết với số tờ bên dưới, hoặc số lớn với tiêu đề bên cạnh). Danh sách có ba phần:
   - {{ui:Sẽ liên kết}}: mỗi chú thích, tờ mà nó trỏ tới và khung nhìn trên tờ đó. Bỏ chọn những cái bạn không muốn. Nếu không tìm thấy khung nhìn (chú thích tới khung nhìn 7 trên tờ chỉ có khung nhìn 1 đến 6), chọn khung nhìn từ danh sách bên cạnh, hoặc để {{ui:Toàn bộ tờ}}.
   - {{ui:Chưa liên kết}}: số tờ mà không tờ đang mở nào có, kèm số chú thích nào nêu từng số. Chọn tờ mà mỗi số muốn nói tới (ví dụ một tờ đã bị đánh số lại), và mọi chú thích tới số đó sẽ liên kết tới tờ đó. Hoặc để chưa liên kết.
   - Số chú thích đã được liên kết và vẫn tới đúng nơi. Chúng được giữ nguyên.
3. Chọn {{ui:Tạo liên kết}}.

Mỗi chú thích nhận một hộp xanh dương mỏng là một liên kết tờ. {{key:Mod}}+nhấp vào nó mở tờ, phóng to tới khung nhìn. Một lần {{key:Mod+Z}} xóa tất cả.

Các mã chỉ giống số tờ, như R-19 hoặc W12X26, bị bỏ qua: chú thích phải có dạng giống số tờ của chính bộ. Số của một tờ, trong khung tên và tiêu đề khung nhìn của nó, không bao giờ là chú thích. Tờ quét không có văn bản để đọc: dùng {{ui:Đọc văn bản (OCR)…}} trước, hoặc liên kết chú thích của chúng từng cái một.

## Chạy lại khi bộ thay đổi

Liên kết hàng loạt có thể chạy bao nhiêu lần tùy ý:

- **Có tờ được thêm**, như phụ lục với A-601: mở tệp của nó và chạy lại {{ui:Liên kết hàng loạt…}}. Các chú thích tới A-601 chưa liên kết trước đó giờ được liên kết.
- **Tờ được đánh số lại**: sửa số của nó ở bước 1. Các liên kết do Liên kết hàng loạt tạo mà không còn tìm thấy tờ của chúng được liệt kê dưới {{ui:Chưa liên kết}}; chọn tờ một lần và tất cả sẽ theo nó. Liên kết đã chuyển sang khung nhìn khác sẽ được cập nhật.
- Liên kết bạn tạo bằng tay trong {{ui:Thuộc tính}} không bao giờ bị thay đổi.

## Trong PDF đã lưu

Liên kết tới một tờ trong cùng PDF cũng được ghi thành liên kết PDF, nên các trình xem khác cũng nhảy tới đó khi nhấp. Liên kết có khung nhìn mở khung nhìn đó trong trình xem khác (nhảy "fit rectangle" của PDF); liên kết không có khung nhìn mở toàn bộ tờ. Liên kết tới một tờ trong tệp khác của bộ chỉ hoạt động trong MarkupCraft.
