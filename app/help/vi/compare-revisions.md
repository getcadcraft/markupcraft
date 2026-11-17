---
title: So sánh hai bản sửa đổi
summary: Chồng một bản phát hành cũ và mới của một tờ bằng hai màu, căn chỉnh theo hai điểm, và khoanh những gì đã thay đổi.
keywords: so sánh, lớp phủ, chồng trang, bản sửa đổi, khác biệt, thay đổi, cũ mới, căn chỉnh, kiểm tra ngược, phát hành, thông báo kỹ thuật
from: 62f5d1c5
---

So sánh xếp hai tờ chồng lên nhau. Đường chỉ có trên tờ cũ hiển thị màu đỏ, đường chỉ có trên tờ mới màu xanh dương, và đường có trên cả hai màu xám dịu. Các màu được ghi tên trong chú giải dưới tờ: "Chỉ có trên tờ cũ", "Chỉ có trên tờ mới", "Có ở cả hai".

## So sánh hai tờ

1. Mở cả hai bản phát hành. Chúng có thể là các trang của cùng một PDF hoặc của các PDF khác nhau; mở chúng cùng nhau như một bộ (xem [Làm việc với nhiều tệp cùng lúc](topic:several-files)).
2. Chọn thẻ {{ui:So sánh}} ở bên phải.
3. Chọn {{ui:Tờ cũ}} và {{ui:Tờ mới}}. Tờ mới bắt đầu là tờ bạn đang xem. Khi nhiều tệp đang mở, tên tệp của mỗi tờ được hiển thị sau tên tờ.
4. Chọn {{ui:So sánh}}.

Kết quả: MarkupCraft hiển thị tờ mới với tờ cũ trộn vào, chú giải xuất hiện, và thẻ ghi "Đang so sánh <old> (cũ) với <new> (mới). Các đánh dấu trên tờ mới vẫn có thể chỉnh sửa."

## Chuyển mờ giữa cũ và mới

Kéo thanh trượt {{ui:Cũ và mới}}. Kéo hết sang trái chỉ hiển thị tờ cũ, hết sang phải chỉ tờ mới, ở giữa hiển thị cả hai. Kéo qua lại thường là cách nhanh nhất để thấy một thay đổi nhỏ.

## Căn chỉnh hai tờ

Nếu hai bản phát hành được in với lề, kích thước hoặc góc xoay khác nhau, mọi thứ sẽ trông như đã thay đổi. Để sửa:

**Theo hai điểm (tốt nhất):**

1. Chọn {{ui:Căn bằng hai điểm}}. Khung nhìn chỉ hiển thị tờ cũ.
2. Nhấp một đặc điểm sắc nét mà bạn tìm thấy trên cả hai tờ, như giao điểm lưới cột. Thẻ đếm các bước ("1 trên 4").
3. Nhấp đặc điểm thứ hai, xa đặc điểm đầu, như góc lưới đối diện.
4. Khung nhìn chuyển sang tờ mới. Nhấp lại đặc điểm đầu tiên.
5. Nhấp lại đặc điểm thứ hai.

Kết quả: "Đã căn chỉnh: tờ cũ thu phóng 100.00%, xoay 0.00°. Dịch chuyển nhẹ để tinh chỉnh." Tờ cũ được di chuyển, thu phóng và xoay để khớp. {{key:Esc}} hủy khi đang chọn điểm. Phóng to từng đặc điểm trước khi nhấp để khớp chính xác.

**Bằng cách dịch chuyển nhẹ:** dùng bốn nút mũi tên dưới "Căn chỉnh" để di chuyển tờ cũ. Chọn bước (0.25, 1, 5 hoặc 20 pt; 72 pt là một inch trên giấy). Thẻ cho biết nó đã di chuyển bao xa.

{{ui:Đặt lại}} xóa căn chỉnh và các lần dịch chuyển nhẹ.

## Chỉ các đường đã thay đổi

Dưới các nút căn chỉnh, chọn {{ui:Các đường đã thay đổi}} thay vì {{ui:Chồng hình ảnh}}. Khi đó MarkupCraft so sánh các đường riêng của hai tờ, không so sánh hình ảnh của chúng: tờ mới hiển thị như hiện có, với các đường chỉ có trên tờ cũ màu đỏ và các đường chỉ có trên tờ mới màu xanh dương. Một đường chỉ bị ngắn đi sẽ chỉ hiển thị phần bị mất. Căn chỉnh hai tờ trước (xem trên): việc so sánh dùng căn chỉnh, nên một tờ chỉ bị dịch chuyển sẽ không hiển thị thay đổi nào. Dòng trạng thái cho biết đã thay đổi bao nhiêu.

Cách này hoạt động với các PDF được in từ CAD, nơi bản vẽ được tạo từ các đường. Tờ quét không có đường để so sánh: dùng chồng hình ảnh cho chúng. Văn bản được đặt bằng phông chữ (không vẽ thành nét) không được so sánh.

## Đánh dấu các thay đổi

Trong khi so sánh, bạn đang ở tờ mới và mọi công cụ đều hoạt động. Vẽ đám mây quanh các thay đổi khi bạn tìm thấy chúng; chúng thuộc về tờ mới và vẫn còn khi bạn dừng so sánh.

{{ui:Khoanh các thay đổi}} làm việc đó cho bạn: nó nhóm các đường đã thay đổi nằm gần nhau và vẽ một đám mây sửa đổi quanh mỗi nhóm trên tờ mới, với "Đã thay đổi kể từ <old sheet>" làm bình luận. Một {{key:Mod+Z}} xóa tất cả; xóa những cái bạn không cần.

## So sánh cả bộ

Khi bản phát hành mới đến dưới dạng PDF riêng, mở cả hai PDF và mở {{ui:So sánh hai bộ}} trong thẻ {{ui:So sánh}}. Chọn tệp cũ và tệp mới, rồi chọn {{ui:So sánh các bộ}}. Các tờ được ghép theo số của chúng (như trong [dán tờ thay thế](topic:slip-sheet-a-revised-set)), được so sánh theo các đường, và liệt kê với tờ thay đổi nhiều nhất đứng đầu. Chọn một tờ trong danh sách để so sánh cặp đó với {{ui:Các đường đã thay đổi}}.

{{ui:Khoanh tất cả thay đổi}} khoanh mọi nhóm đường đã thay đổi trên mọi tờ đã thay đổi, trong một bước có thể hoàn tác. So sánh bộ không căn chỉnh tờ trước, nên một tờ bị dịch chuyển trên trang sẽ hiển thị là đã thay đổi: so sánh cặp đó riêng và dùng {{ui:Căn bằng hai điểm}}.

## Dừng so sánh

Chọn {{ui:Dừng so sánh}}, hoặc chuyển sang tờ khác. Căn chỉnh được ghi nhớ cho cùng cặp tờ đó cho đến khi bạn đóng bộ.

## Cần biết

- So sánh hoạt động trên những gì được vẽ, theo từng điểm ảnh. Nó không biết một đường đã di chuyển; nó hiển thị vị trí cũ bằng một màu và vị trí mới bằng màu kia.
- Văn bản bị xếp lại dòng, ngày trên khung tên bị đổi, hoặc kiểu in khác nhau cũng hiển thị như thay đổi.
- Một tờ quét so với tờ đã in sẽ nhiễu: quét làm mờ và lệch các đường.
- So sánh văn bản viết bằng phông chữ, và danh sách những gì đã thay đổi, hiện chưa xây dựng.
