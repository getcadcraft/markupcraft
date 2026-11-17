---
title: Vấn đề (issue), sửa đổi và nhật ký thay đổi bản vẽ
summary: Giữ một lịch sử vấn đề (issue) chung với mô hình của kiến trúc sư: đọc các vấn đề vào, ghi chỉ dẫn công trường, bản vẽ thi công và mô hình liên kết theo một vấn đề, và đọc nhật ký thay đổi bản vẽ.
keywords: vấn đề, issue, sửa đổi, revision, nhật ký thay đổi, nhật ký thay đổi bản vẽ, sổ bản vẽ, chỉ dẫn công trường, bản vẽ thi công, mô hình liên kết, đấu thầu, thi công, lịch sử vấn đề, đám mây sửa đổi, đám mây, bộ đánh dấu
from: e4688f64
---

## Bạn sẽ làm gì

Làm việc từ cùng lịch sử vấn đề như phần còn lại của nhóm. Xem tờ nào đã phát hành ở bản sửa đổi nào, và ghi những gì xảy ra tại công trường vào đúng vấn đề mà nó thuộc về.

## Các bước

1. Mở **Vấn đề và sửa đổi**.
2. Chọn **Đọc lịch sử vấn đề** và chọn tệp `.issues.json` được lưu từ BimCraft hoặc ứng dụng khác. Các vấn đề và bản ghi của tệp được thêm vào của bạn. Không có gì bị thay thế.
3. Chọn **Thêm bản ghi** cho chỉ dẫn công trường, bản vẽ thi công, bộ đánh dấu, mô hình liên kết hoặc ghi chú. Chọn vấn đề mà nó thuộc về và trạng thái của nó. Tệp bạn chọn được ghi nhận theo tên, kích thước và SHA-256; tệp vẫn ở nơi nó đang nằm.
4. **Nhật ký thay đổi bản vẽ** hiển thị một hàng cho mỗi tờ và một cột cho mỗi vấn đề. Một sửa đổi trong ngoặc là sửa đổi đã được phát hành lại mà không thay đổi.
5. **Tải nhật ký thay đổi (CSV)** lưu các vấn đề, bảng tờ và các bản ghi. **Lưu lịch sử vấn đề** ghi một tệp mà các ứng dụng khác đọc được.

## Cần biết

- **Ghi các đánh dấu đã chọn** đặt các đánh dấu bạn đã chọn vào vấn đề mới nhất. Một đám mây được ghi là đám mây sửa đổi ở bản sửa đổi của vấn đề đó. Chọn **Hiển thị** bên cạnh bản ghi để nhảy đến nó.
- **Ghi một vấn đề** phát hành các tờ đã đánh dấu của bạn. Sau đó **Thay đổi từ** cho biết những tờ nào được đánh dấu sau vấn đề đó.
- Lịch sử được lưu bên trong PDF đã đánh dấu. Nó không thuộc phần Hoàn tác.
- Đọc cùng một tệp hai lần sẽ không thêm gì hai lần. Khi hai bản sao có cùng một bản ghi, bản mới hơn được giữ lại.
