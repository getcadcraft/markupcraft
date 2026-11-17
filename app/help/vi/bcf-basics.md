---
title: Kiến thức cơ bản về BCF
summary: Nội dung của tệp xuất BCF từ MarkupCraft, cách dùng với các công cụ phối hợp BIM, và các giới hạn của tệp.
keywords: bcf, bcfzip, định dạng cộng tác BIM, vấn đề, phối hợp, va chạm, chủ đề, góc nhìn, ảnh chụp, openbim, buildingsmart, xuất vấn đề
from: 446f38c1
---

BCF (BIM Collaboration Format) là một định dạng tệp mở để chuyển các vấn đề giữa các công cụ BIM. Nhiều chương trình phối hợp và lập mô hình có thể nhập tệp `.bcfzip` dưới dạng danh sách vấn đề. MarkupCraft ghi **BCF 2.1**.

## Tạo tệp

1. Mở thẻ {{ui:Đánh dấu}}.
2. Lọc danh sách theo những gì bạn muốn gửi, ví dụ {{ui:Trạng thái}} "Mở". Chỉ các đánh dấu trong danh sách được xuất.
3. Chọn {{ui:BCF}}.
4. Chờ trong khi chương trình tạo ảnh chụp cho từng đánh dấu ("Đang tạo ảnh chụp cho BCF (5 trong 20)…").

Kết quả: "<name> markups.bcfzip" được tải xuống, và thanh trạng thái cho biết số chủ đề trong tệp và dung lượng tệp.

## Nội dung tệp

Mỗi đánh dấu trở thành một **chủ đề**:

| Trường chủ đề | Được điền bằng |
|---|---|
| Tiêu đề | Số hạng mục, chủ đề và tờ, ví dụ "#4 Đám mây trên A-101 — Mặt bằng tầng" |
| Loại | Loại đánh dấu (Đám mây, Chú thích, Chiều dài…) |
| Trạng thái | Mở, Đã chấp nhận, Đã từ chối hoặc Hoàn thành |
| Nhãn | Loại đánh dấu và tờ |
| Tác giả và ngày | Tác giả của đánh dấu, ngày tạo và ngày sửa |
| Giao cho, hạn chót | Từ hạng mục tồn đọng của đánh dấu, khi có |
| Mô tả | Nội dung văn bản hoặc chữ trên con dấu, giá trị đo, nhận xét, cùng tờ và tệp |
| Bình luận | Một bình luận cho mỗi phản hồi, kèm tác giả và ngày |
| Ảnh chụp | Ảnh của đánh dấu ở phần của nó trên tờ |
| Góc nhìn | Hình nhìn từ trên xuống về vị trí của đánh dấu trên tờ |

Xuất lại cùng một đánh dấu sẽ cho cùng một ID chủ đề, nên công cụ nhập BCF có thể nhận ra đó là cùng một vấn đề.

## Các giới hạn cần biết

- **Một tờ không phải là mô hình.** Góc nhìn chỉ đến vị trí của đánh dấu trên giấy, đo bằng mét giấy. Nó không đưa công cụ BIM đến một vị trí trong mô hình. Dùng ảnh chụp và tên tờ để tìm vị trí.
- **Trạng thái và loại là của riêng MarkupCraft** (Mở, Đã chấp nhận, Đã từ chối, Hoàn thành; Đám mây, Chú thích…). Tệp khai báo chúng, như BCF cho phép, nhưng công cụ có danh sách cố định riêng có thể ánh xạ hoặc bỏ qua chúng.
- **Nhập chỉ mang về bình luận, không phải góc nhìn mô hình.** {{ui:Nhập BCF}} thêm phản hồi và trạng thái vào các đánh dấu bạn đã xuất, và tạo ghi chú cho các vấn đề khác; nó không thể hiển thị góc nhìn camera của mô hình. Xem [Danh sách đánh dấu và xuất](topic:markups-list-and-export#import-bcf).
- Gửi đánh dấu lại dưới dạng PDF thường đơn giản hơn cho việc xem xét bản vẽ. BCF dành cho việc đưa nhận xét bản vẽ vào quy trình phối hợp mô hình.
