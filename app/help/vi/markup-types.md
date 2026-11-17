---
title: Mọi loại đánh dấu
summary: Mười bảy loại đánh dấu, phím của chúng, cách vẽ từng loại, kiểu mặc định và kết quả trong tệp PDF đã lưu.
keywords: loại đánh dấu, danh sách công cụ, loại chú thích, đám mây, chú thích, văn bản, ghi chú, con dấu, bút, bút tô sáng, đường thẳng, mũi tên, hình chữ nhật, elip, đa tuyến, đa giác, chiều dài, diện tích, đếm
from: 29bf32e7
---

## Các công cụ

| Thanh công cụ | Phím | Cách vẽ | Kiểu mặc định | Trong tệp PDF đã lưu |
|---|---|---|---|---|
| {{ui:Bút}} | {{key:P}} | Kéo | Đỏ, 1.5 pt | Nét mực |
| {{ui:Tô sáng}} | {{key:I}} | Kéo | Vàng, rộng 14 pt, trong suốt, làm ánh màu lên phần bên dưới | Nét mực (được đánh dấu là nét bút tô sáng) |
| {{ui:Đường thẳng}} | {{key:L}} | Kéo, hoặc nhấp điểm đầu và điểm cuối | Đỏ, 2 pt | Đường thẳng |
| {{ui:Mũi tên}} | {{key:A}} | Kéo, hoặc nhấp điểm đầu và điểm cuối | Đỏ, 2 pt, đầu mũi tên khép kín ở cuối | Đường thẳng có đầu mũi tên |
| {{ui:Cung tròn}} | {{key:O}} | Nhấp điểm đầu, một điểm trên cung, rồi điểm cuối | Đỏ, 2 pt | Đa tuyến theo cung |
| {{ui:Hình chữ nhật}} | {{key:R}} | Kéo một khung | Đỏ, 2 pt, không tô | Hình vuông |
| {{ui:Elip}} | {{key:E}} | Kéo một khung | Đỏ, 2 pt, không tô | Hình tròn |
| {{ui:Đa tuyến}} | {{key:Y}} | Nhấp các điểm, nhấp đúp để kết thúc | Đỏ, 2 pt | Đa tuyến |
| {{ui:Đa giác}} | {{key:G}} | Nhấp các điểm, nhấp đúp để kết thúc | Đỏ, 2 pt, không tô | Đa giác |
| {{ui:Đám mây}} | {{key:C}} | Kéo một khung | Đỏ, vòng cung 1.5 pt | Hình vuông có viền đám mây |
| {{ui:Đám mây tự do}} | {{key:Shift+C}} | Nhấp các điểm, nhấp đúp để kết thúc | Đỏ, vòng cung 1.5 pt | Đa giác có viền đám mây |
| {{ui:Chú thích}} | {{key:K}} | Nhấn lên điểm, kéo tới văn bản, gõ | Văn bản và đường dẫn đỏ, 1 pt, văn bản 12 pt | Hộp văn bản có đường dẫn chú thích |
| {{ui:Văn bản}} | {{key:T}} | Nhấp hoặc kéo một khung, gõ | Văn bản đỏ 12 pt, không viền | Hộp văn bản |
| {{ui:Ghi chú}} | {{key:N}} | Nhấp, gõ | Biểu tượng ghi chú màu vàng | Ghi chú dán |
| {{ui:Con dấu}} | {{key:S}} | Chọn một con dấu, nhấp hoặc kéo | Chữ hoa có khung cùng "Bởi <tên>, <ngày>"; màu theo ý nghĩa | Con dấu |
| {{ui:Chiều dài}} | {{key:M}} | Nhấp điểm đầu và điểm cuối (cần tỷ lệ) | Đường kích thước xanh dương có vạch và chiều dài | Đường được đánh dấu là kích thước, kèm số đo |
| {{ui:Góc}} | {{key:X}} | Nhấp đầu một cạnh, rồi góc, rồi đầu cạnh kia | Cạnh xanh dương, một cung nhỏ ở góc và góc tính bằng độ | Đa tuyến với góc làm văn bản của nó |
| {{ui:Diện tích}} | {{key:Q}} | Nhấp các góc, nhấp đúp để kết thúc (cần tỷ lệ) | Viền xanh dương, tô xanh nhạt, diện tích và chu vi | Đa giác được đánh dấu là diện tích, kèm số đo |
| {{ui:Đếm}} | {{key:U}} | Nhấp từng mục | Chấm cam có đánh số và nhãn "nhóm: n" | Một chú thích mực cho mỗi nhóm, một vòng cho mỗi mục |

Trên màn hình cảm ứng, "nhấp đúp để kết thúc" là chạm đúp, và "nhấp" là một lần chạm có tác dụng khi nhấc tay (với điểm, ghi chú và đếm).

## Mỗi đánh dấu mang những gì

| Trường | Bạn thấy ở đâu |
|---|---|
| Tác giả | {{ui:Thuộc tính}}, danh sách, dòng thứ hai của con dấu, các trình xem PDF khác |
| Tạo và sửa đổi | {{ui:Thuộc tính}} (theo múi giờ của bạn), danh sách, CSV |
| Trạng thái | Mở, Chấp nhận, Từ chối hoặc Hoàn thành |
| Chủ đề | Một nhãn ngắn; mặc định theo loại ("Đám mây", "Hộp văn bản", "Đo chiều dài") |
| Bình luận | Ghi chú dài hơn. Với ghi chú, nội dung của nó chính là bình luận. |
| Văn bản | Chỉ hộp văn bản và chú thích |
| Phản hồi | Chuỗi trao đổi, cùng các thay đổi trạng thái |
| Hạng mục tồn đọng | Số, người được giao, hạn, trạng thái hạng mục, khi được thêm vào {{ui:Danh sách hạng mục tồn đọng}} |
| Kiểu | Màu, độ dày nét, tô và độ đục màu tô (hình khép kín, văn bản và chú thích), độ đục, cỡ chữ (văn bản, chú thích và đo) |

## Chú thích chỉ đọc

Các chú thích đi kèm tệp mà MarkupCraft không thể sửa (chỗ tô sáng văn bản, con dấu của chương trình khác và các loại đặc biệt khác) được liệt kê với loại "Khác" và nhãn trạng thái "Chỉ đọc". Chúng giữ đúng kiểu mà tệp đưa cho chúng. Bạn có thể chọn, xem tác giả, chủ đề và bình luận của chúng, và trả lời chúng.

## Chưa xây dựng

Tính năng đính kèm tệp chưa xây dựng. Mọi đánh dấu đều có thể liên kết tới một tờ; xem [Liên kết tờ](topic:sheet-links). Hình ảnh và chữ ký được đặt bằng công cụ {{ui:Con dấu}}; xem [Con dấu và ghi chú](topic:stamps-and-notes). Xem [Những gì chưa xây dựng](topic:not-built-yet).
