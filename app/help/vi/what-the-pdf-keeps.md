---
title: Những gì được lưu trong PDF
summary: Chính xác bản sao có đánh dấu chứa gì, các trình xem PDF khác thấy gì, và những gì được đọc lại khi bạn mở tệp.
keywords: chú thích pdf, bình luận, dữ liệu đã lưu, khứ hồi, nhãn trang, đo lường, trạng thái xem xét, phản hồi, tương thích, mở lại, dữ liệu riêng tư
from: 6439ad28
---

Bản sao có đánh dấu là PDF gốc có thêm bình luận (chú thích PDF). Chính các trang, bản vẽ, chữ, dấu trang và liên kết được sao chép y nguyên.

## Từng đánh dấu

| MarkupCraft | Lưu dưới dạng | Trình xem PDF khác hiển thị |
|---|---|---|
| Hình chữ nhật, đám mây hộp | Chú thích Square (đám mây: viền gợn sóng) | Bình luận hình chữ nhật hoặc đám mây |
| Elip | Chú thích Circle | Bình luận elip |
| Đa giác, đám mây tự do | Chú thích Polygon (đám mây: viền gợn sóng) | Bình luận đa giác hoặc đám mây |
| Đa tuyến | Chú thích PolyLine | Bình luận đa tuyến |
| Đường thẳng, mũi tên | Chú thích Line (mũi tên: đầu mũi tên kín) | Bình luận đường thẳng hoặc mũi tên |
| Chiều dài | Chú thích Line được đánh dấu là kích thước, kèm số đo | Số đo chiều dài, nếu trình xem hỗ trợ |
| Diện tích | Chú thích Polygon được đánh dấu là diện tích, kèm số đo | Số đo diện tích nếu được hỗ trợ; nếu không thì là đa giác |
| Nhóm đếm | Một chú thích Ink, một vòng cho mỗi mục; chữ của nó là "group: n" | Bình luận Ink |
| Bút, bút dạ quang | Chú thích Ink (bút dạ quang được đánh dấu như vậy) | Bình luận Ink |
| Văn bản | Chú thích FreeText | Bình luận hộp văn bản |
| Chú thích đường dẫn | Chú thích FreeText kèm đường dẫn | Bình luận chú thích đường dẫn |
| Ghi chú | Chú thích Text | Ghi chú dán mở ra thành nội dung |
| Con dấu | Chú thích Stamp | Bình luận con dấu |

Mỗi đánh dấu được lưu kèm:

- **diện mạo riêng**, được vẽ đúng như MarkupCraft vẽ trên màn hình, nên trông giống nhau trong mọi trình xem và in ra giống nhau, kể cả huy hiệu số punch;
- **tác giả**, **ngày tạo và ngày sửa**, **chủ đề**, **nội dung bình luận** (với hộp văn bản và chú thích đường dẫn là văn bản và bình luận), **màu** và **độ mờ**;
- **chi tiết MarkupCraft** trong một mục riêng mà các chương trình khác bỏ qua: trạng thái, hạng mục punch, kiểu và loại, để mở lại đúng như cũ.

## Chuỗi phản hồi và trạng thái

- Mỗi phản hồi được lưu thành một bình luận phản hồi liên kết với đánh dấu của nó, kèm tác giả, ngày và nội dung. Phản hồi không có biểu tượng riêng trên tờ.
- Mỗi lần đổi trạng thái được lưu thành một phản hồi mang trạng thái xem xét. Các công cụ xem xét khác hiển thị là Đã chấp nhận, Đã từ chối hoặc Đã hoàn thành; Mở được lưu là không có trạng thái.
- Một đánh dấu có trạng thái khác Mở nhưng không có lần đổi trạng thái nào được ghi nhận sẽ nhận một phản hồi trạng thái xem xét, để các chương trình khác cũng thấy trạng thái.
- Phản hồi trên bình luận chỉ đọc từ tệp gốc được lưu theo cùng cách, liên kết với bình luận đó.

## Mỗi tờ

- **Tỷ lệ:** tờ đã hiệu chuẩn nhận một khung nhìn đo lường phủ toàn trang (cách chuẩn để lưu tỷ lệ trang) và bản sao hiệu chuẩn riêng của MarkupCraft.
- **Số tờ:** số bạn nhập bằng {{ui:Đổi tên tờ}} trở thành nhãn trang. Khi bất kỳ trang nào của một tệp có nhãn, mọi trang của tệp đó đều có nhãn: số bạn nhập, nếu không thì nhãn cũ, nếu không thì số trang.
- **Tiêu đề tờ:** tiêu đề bạn nhập chỉ được lưu cho MarkupCraft; các trình xem khác không hiển thị.

## Chữ và ký tự

Chữ được viết bằng Helvetica, phông mà mọi trình xem PDF đều có. Ký tự ngoài bộ Tây Âu (Windows-1252) sẽ in thành "?" trong bản sao; thông báo lưu có đếm số ký tự đó.

## Tờ tính toán và lý do

Tờ tính toán và lý do được giữ trong một mục riêng của PDF tên `/MarkupCraftShell`. Các chương trình PDF khác bỏ qua mục này. MarkupCraft phiên bản cũ cũng bỏ qua, và xóa nó lần lưu tiếp theo tệp đó.

## Những bình luận đã có sẵn

Khi bạn mở một PDF đã có bình luận:

- Bình luận của chính MarkupCraft được đọc lại đúng như cũ. Nếu chương trình khác đã di chuyển hoặc đổi kích thước một bình luận, vị trí mới của nó được giữ.
- Hình chữ nhật, elip, đường thẳng, đa tuyến, đa giác, nét mực, hộp văn bản và ghi chú dán từ chương trình khác trở thành đánh dấu có thể chỉnh sửa. **Khi bạn lưu, MarkupCraft xóa bản gốc và ghi lại theo cách riêng của mình**, cùng với cửa sổ bật lên và phản hồi. Diện mạo có thể thay đổi đôi chút.
- Trạng thái xem xét từ chương trình khác đặt trạng thái; cái mới nhất được giữ.
- Mọi thứ khác (tô sáng văn bản, con dấu của chương trình khác và các loại đặc biệt) được **giữ nguyên** trong bản sao, chỉ đọc.
- Liên kết và trường biểu mẫu được giữ nguyên và không được liệt kê.

Lưu lại cùng một tệp không bao giờ nhân đôi bất cứ thứ gì: các đánh dấu MarkupCraft đã đọc được thay thế, không thêm lần nữa.

## Những gì không thay đổi

Tệp gốc trên đĩa của bạn không bao giờ bị thay đổi. Bản sao không được tối ưu hóa dung lượng, nên có thể lớn hơn bản gốc đôi chút. PDF được bảo vệ (mã hóa) không thể lưu.
