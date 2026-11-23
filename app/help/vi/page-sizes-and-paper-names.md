---
title: Kích thước trang và tên khổ giấy
summary: Xem kích thước của mỗi trang PDF theo milimét và inch cùng tên khổ giấy (dãy A, B và C, ANSI, ARCH), và nhóm một bộ hỗn hợp theo kích thước để tìm các trang lạc.
keywords: kích thước trang, khổ giấy, tên khổ giấy, a0, a1, a2, a3, a4, dãy b, dãy c, ansi, arch, kiến trúc, mm, inch, kích thước tùy chỉnh, theo kích thước, kích thước lạ, bộ hỗn hợp, kiểm tra pdf, khách hàng, vấn đề, mediabox, cropbox, xoay
from: 08e1354f
---

Trước khi một bộ được gửi cho khách hàng, hãy kiểm tra mọi tờ có đúng kích thước không. {{ui:MarkupCraft}} đọc kích thước của từng trang từ chính tệp PDF và gọi tên khổ giấy.

## Bạn sẽ làm gì

Xem kích thước của một tờ, rồi nhóm cả bộ theo kích thước.

## Các bước

1. Mở các tệp PDF ({{ui:Mở}}), rồi nhấn {{key:Esc}} cho đến khi không còn gì được chọn và {{ui:Chọn}} đang bật.
2. Xem {{ui:Thuộc tính}}. {{ui:Khổ giấy}} cho biết tên và chiều, ví dụ "A4, dọc". {{ui:Kích thước}} cho biết milimét và inch.
3. Mỗi dòng trong danh sách {{ui:Tờ}} có một dòng kích thước dưới tên tờ.
4. Chọn {{ui:Theo kích thước}} trong tiêu đề {{ui:Tờ}}. Danh sách gom các tờ dưới một tiêu đề cho mỗi kích thước, nhóm lớn nhất đứng đầu. Kích thước chỉ có vài tờ được đánh dấu là lạc loài.
5. Chọn {{ui:Theo kích thước}} một lần nữa để quay lại thứ tự gốc của bộ.

Kết quả: trang có kích thước khác với phần còn lại sẽ dễ thấy trước khi bạn gửi bộ.

## Tên được chọn thế nào

- Kích thước lấy từ hộp của trang trong PDF, đã áp dụng chiều xoay, nên một A3 ngang vẫn là A3.
- Các tên gồm dãy A và B (ISO 216), dãy C (ISO 269), ANSI A đến E và ARCH A đến E.
- Trang trong phạm vi 2 mm của một kích thước có tên sẽ nhận tên đó. Mọi trang khác ghi {{ui:tùy chỉnh}}, và {{ui:Kích thước có tên gần nhất}} cho biết kích thước gần nhất và độ lệch.
- Inch lấy từ kích thước trang thực, nên trang A4 là 8.26 x 11.69 in.

## Trong các tệp bạn lưu

Bảng tính tổng hợp ({{ui:Danh sách đánh dấu}}, rồi bảng tính) có cột {{ui:Khổ giấy}} trên trang {{ui:Theo tờ}} và một trang tính {{ui:Kích thước trang}}. Báo cáo PDF có dòng "Kích thước trang" với số lượng của mỗi kích thước.

:::note
Các giá trị inch của ANSI và ARCH được nhập từ các bảng đã công bố và chưa được đối chiếu với các tiêu chuẩn in. Với một trang "tùy chỉnh" gần một trong số đó, hãy tự kiểm tra.
:::
