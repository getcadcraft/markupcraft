---
title: Kiến thức cơ bản về BCF
summary: Nội dung của tệp xuất BCF từ MarkupCraft, cách dùng tệp với các công cụ phối hợp BIM, và các giới hạn của nó.
keywords: bcf, bcfzip, bim collaboration format, vấn đề, phối hợp, va chạm, chủ đề, góc nhìn, ảnh chụp, openbim, buildingsmart, xuất vấn đề
from: 0de26175
---

BCF (BIM Collaboration Format) là định dạng tệp mở dùng để chuyển các vấn đề giữa các công cụ BIM. Nhiều chương trình phối hợp và tạo mô hình có thể nhập tệp `.bcfzip` dưới dạng danh sách vấn đề. MarkupCraft ghi **BCF 2.1**.

## Tạo tệp

1. Mở thẻ {{ui:Đánh dấu}}.
2. Lọc danh sách theo nội dung bạn muốn gửi, ví dụ {{ui:Trạng thái}} "Mở". Chỉ các đánh dấu trong danh sách được xuất.
3. Chọn {{ui:BCF}}.
4. Chờ trong khi hệ thống chụp ảnh từng đánh dấu ("Đang chụp ảnh cho BCF (5 trên 20)…").

Kết quả: tệp "<name> markups.bcfzip" được tải xuống, và thanh trạng thái cho biết số chủ đề tệp chứa và dung lượng tệp.

## Nội dung tệp

Mỗi đánh dấu trở thành một **chủ đề**:

| Trường chủ đề | Được điền bằng |
|---|---|
| Tiêu đề | Số hạng mục, nội dung và tờ, ví dụ "#4 Đám mây trên A-101 — Mặt bằng tầng" |
| Loại | Loại đánh dấu (Đám mây, Chú thích, Chiều dài…) |
| Trạng thái | Mở, Đã chấp nhận, Đã từ chối hoặc Đã hoàn thành |
| Nhãn | Loại đánh dấu và tờ |
| Tác giả và ngày | Tác giả của đánh dấu, ngày tạo và ngày sửa |
| Giao cho, hạn | Lấy từ hạng mục tồn đọng của nó, khi có |
| Mô tả | Nội dung văn bản hoặc chữ trên con dấu, giá trị đo, bình luận, cùng tờ và tệp |
| Bình luận | Mỗi phản hồi một bình luận, kèm tác giả và ngày |
| Ảnh chụp | Hình của đánh dấu trên phần của nó trên tờ |
| Góc nhìn | Góc nhìn từ trên xuống vị trí của đánh dấu trên tờ |

Xuất lại cùng một đánh dấu sẽ cho cùng mã chủ đề, nên một công cụ nhập BCF có thể nhận ra đó là cùng một vấn đề.

## Những gì quay lại khi nhập

{{ui:Nhập BCF}} đọc tệp BCF 2.0, 2.1 và 3.0 (đã kiểm tra trên 19 tệp kiểm thử chính thức buildingSMART 3.0: mọi chủ đề đều được đọc, và bình luận của ba tệp có chữ đã được đọc). Với một chủ đề thuộc về bạn (cùng mã chủ đề), nó thêm các bình luận mới làm phản hồi và lấy trạng thái mới. Mọi chủ đề khác trở thành một ghi chú trên tờ mà nhãn hoặc tên tệp nêu ra, nếu không có thì trên tờ đang mở, với tiêu đề, mô tả, người được giao và hạn làm nội dung ghi chú, còn các bình luận của nó trở thành phản hồi.

| Trong chủ đề BCF | Trong MarkupCraft |
|---|---|
| Tiêu đề, mô tả, người được giao, hạn | Nội dung của ghi chú |
| Bình luận có chữ | Phản hồi |
| Trạng thái Open, Accepted, Rejected, Completed (Closed, Resolved, Done được tính là Completed) | Trạng thái của đánh dấu |
| Tác giả và ngày tạo | Tác giả và ngày của ghi chú |
| Vị trí camera | Một vị trí trên tờ, chỉ với chủ đề được gắn với một tờ theo nhãn hoặc tên tệp |
| Lựa chọn mô hình, phần bị ẩn, mặt phẳng cắt, ảnh chụp | Không được giữ lại: tờ không có mô hình để hiển thị chúng |

## Các giới hạn cần biết

- **Tờ không phải là mô hình.** Góc nhìn trỏ đến vị trí của đánh dấu trên giấy, đo bằng mét giấy. Nó không đưa công cụ BIM đến một vị trí trong mô hình. Hãy dùng ảnh chụp và tên tờ để tìm vị trí đó.
- **Trạng thái và loại là của riêng MarkupCraft** (Mở, Đã chấp nhận, Đã từ chối, Đã hoàn thành; Đám mây, Chú thích…). Tệp khai báo chúng, như BCF cho phép, nhưng một công cụ có danh sách cố định riêng có thể ánh xạ hoặc bỏ qua chúng.
- **Nhập chỉ mang về bình luận, không mang về góc nhìn mô hình.** {{ui:Nhập BCF}} thêm phản hồi và trạng thái cho các đánh dấu bạn đã xuất, và tạo ghi chú cho các vấn đề khác; nó không thể hiển thị camera của mô hình. Xem [Danh sách đánh dấu và xuất](topic:markups-list-and-export#import-bcf).
- Gửi đánh dấu lại dưới dạng PDF thường đơn giản hơn cho việc duyệt bản vẽ. BCF dành cho việc đưa ý kiến về bản vẽ vào quy trình phối hợp mô hình.
