---
title: Trạng thái và phản hồi
summary: Đánh dấu mỗi nhận xét là Mở, Đã chấp nhận, Đã từ chối hoặc Đã hoàn thành, thảo luận trong chuỗi phản hồi, và chuyển chuỗi đi trong tệp PDF.
keywords: trạng thái, trạng thái xem xét, đã chấp nhận, đã từ chối, đã hoàn thành, mở, phản hồi, chuỗi, nhận xét, cuộc trò chuyện, thảo luận, trả lời, kiểm tra lại
from: 0f3e8b91
---

Mỗi đánh dấu có một **trạng thái** và một **chuỗi phản hồi**. Cùng nhau, chúng mang một vòng xem xét: người xem xét đánh dấu, người thiết kế phản hồi và đặt trạng thái, rồi người xem xét kiểm tra lại.

## Đặt trạng thái

1. Chọn đánh dấu (hoặc nhiều đánh dấu).
2. Trong {{ui:Properties}}, chọn {{ui:Status}}: Mở, Đã chấp nhận, Đã từ chối hoặc Đã hoàn thành.

Kết quả: trạng thái hiển thị như một nhãn trong danh sách {{ui:Markups}}, và một dòng được thêm vào chuỗi: "Đã đặt trạng thái thành Đã chấp nhận bởi Ana Ruiz." Khi chọn nhiều đánh dấu, ô trạng thái hiển thị "Hỗn hợp" cho đến khi bạn chọn một giá trị, và khi đó nó đổi cho tất cả.

Đánh dấu mới bắt đầu ở trạng thái Mở. Đánh dấu được dán hoặc nhân bản cũng bắt đầu ở trạng thái Mở.

## Phản hồi

1. Chọn đánh dấu.
2. Trong {{ui:Properties}}, tìm "Phản hồi" bên dưới các thiết lập kiểu.
3. Gõ trong {{ui:Write a reply}}.
4. Chọn {{ui:Reply}}, hoặc nhấn {{key:Mod+Enter}}.

Kết quả: phản hồi được liệt kê cùng tên bạn, ngày và giờ, và tiêu đề đếm nó: "Phản hồi (3)". Danh sách {{ui:Markups}} hiển thị số phản hồi trên mỗi dòng.

- Các thay đổi trạng thái được liệt kê trong cùng chuỗi và được đánh dấu là mục trạng thái, nên lịch sử đọc theo thứ tự.
- Nếu bạn bắt đầu gõ phản hồi rồi nhấp vào thứ khác, bản nháp được giữ cho đến khi bạn quay lại đánh dấu đó (cho đến khi bạn đóng bộ).
- Nếu tên của bạn chưa được đặt, MarkupCraft yêu cầu tên trước khi gửi.
- Bạn cũng có thể phản hồi các nhận xét chỉ đọc đi kèm với tệp.

:::note
Phản hồi không thể sửa hoặc xóa sau khi đã gửi. Ngay sau khi gửi, {{key:Mod+Z}} sẽ thu hồi nó; sau đó, thêm một phản hồi mới để sửa lại.
:::

## Thêm ảnh

Bên dưới hộp phản hồi, {{ui:Add photo}} thêm một hình ảnh vào chuỗi: một tệp PNG hoặc JPEG trên máy tính này, hoặc, trên máy tính bảng hay điện thoại, một ảnh bạn chụp ngay tại đó. Bất cứ điều gì bạn gõ trong hộp phản hồi trở thành chú thích của ảnh. Chuỗi hiển thị ảnh thu nhỏ; chọn nó để xem ảnh kích thước đầy đủ. Ảnh lớn được thu nhỏ về 1600 pixel ở cạnh dài hơn.

Trong tệp PDF đã lưu, mỗi ảnh cũng đi kèm như một tệp đính kèm bên cạnh đánh dấu (biểu tượng kẹp giấy), để các trình xem PDF khác có thể mở.

## Chuyển giao vòng xem xét

Hiện chưa có phiên trực tuyến dùng chung: vòng xem xét đi theo tệp PDF.

1. Chọn {{ui:Save}}. Bản sao chứa mọi đánh dấu cùng trạng thái và phản hồi của nó.
2. Gửi bản sao đó theo cách bạn gửi bản vẽ hiện nay.
3. Người tiếp theo mở nó trong MarkupCraft, phản hồi, đặt trạng thái và lưu lại.

Các chương trình PDF khác thấy phản hồi như trả lời cho chú thích, và trạng thái như trạng thái xem xét (Đã chấp nhận, Đã từ chối, Đã hoàn thành; Mở hiển thị như không có trạng thái). Phản hồi và trạng thái xem xét của họ quay lại MarkupCraft khi bạn mở tệp: trạng thái mới nhất thắng.

Nếu hai người đánh dấu các bản sao riêng cùng lúc, không có cơ chế gộp. Bạn có thể mở cả hai bản sao trong một bộ và sao chép một vài đánh dấu qua lại bằng {{key:Mod+C}} và {{key:Mod+V}}, nhưng bản dán là một đánh dấu mới: nó mang tên bạn, một ngày mới và trạng thái Mở, và nằm lệch đi một chút. Thống nhất ai đánh dấu tờ nào để tránh điều này.

## Tìm những gì còn mở

Trong thẻ {{ui:Markups}}, đặt {{ui:Status}} thành "Mở" để chỉ liệt kê các mục đang mở, và {{ui:Author}} thành một người xem xét. Xem [Danh sách đánh dấu](topic:markups-list-and-export).

Trạng thái (Mở, Đã chấp nhận, Đã từ chối, Đã hoàn thành) áp dụng cho nhận xét. Một hạng mục tồn đọng có trạng thái riêng cho công việc ngoài hiện trường; xem [Lập danh sách hạng mục tồn đọng (punch list)](topic:punch-list).
