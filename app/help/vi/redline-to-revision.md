---
title: Gửi đánh dấu cho người vẽ dưới dạng redline
summary: Ghi các đánh dấu đang mở thành tệp redline cho người vẽ các thay đổi, rồi tải câu trả lời của họ để mỗi đánh dấu hiển thị Đã chấp nhận hoặc Đã từ chối.
keywords: redline, bản sửa đổi, người vẽ, chấp nhận, từ chối, câu trả lời, cc-redline, đám mây sửa đổi, áp dụng đánh dấu
from: cb099d04
---

Xem xét chỉ là một nửa công việc; bản vẽ vẫn phải thay đổi. Tệp redline mang từng đánh dấu đang mở đến người vẽ, và câu trả lời của người vẽ đưa kết quả trở lại.

## Gửi

1. Mở thẻ {{ui:Nhiệm vụ}} và mở {{ui:Đánh dấu đỏ gửi bản sửa đổi}}.
2. Gõ bản sửa đổi mà các đánh dấu áp dụng cho (ví dụ B).
3. Chọn {{ui:Xuất tệp redline}}.

Bạn nhận được một tệp `.redline.json` với một mục cho mỗi đánh dấu có trạng thái Mở: tờ của nó, vị trí của nó (dưới dạng phân số của tờ, để bản in lại ở kích thước khác vẫn khớp, và theo điểm), nội dung, tác giả và chuỗi, và nhiệm vụ của nó nếu có. Nhận xét chỉ đọc từ chương trình khác, hình ảnh và chú giải bị bỏ qua.

## Câu trả lời

Phía người vẽ trả lời từng mục là Đã chấp nhận, Đã từ chối hoặc Xong, kèm một ghi chú, trong một tệp `.redline-answers.json`. Chọn {{ui:Tải tệp trả lời…}} và chọn tệp đó: mỗi đánh dấu nhận trạng thái đó và ghi chú của người vẽ trong chuỗi của nó, và một nhiệm vụ có đánh dấu được chấp nhận hoặc đã xong sẽ được hoàn thành. Một bước hoàn tác lấy lại mọi câu trả lời.

Định dạng tệp nằm trong `docs/REDLINE-FORMAT.md`. Phần CadCraft (đọc gói, chấp nhận hoặc từ chối từng mục, đám mây sửa đổi và nhật ký) được xây dựng riêng.
