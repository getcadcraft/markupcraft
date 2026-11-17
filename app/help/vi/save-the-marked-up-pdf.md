---
title: Lưu PDF đã đánh dấu
summary: Tải xuống bản sao với mọi đánh dấu được ghi thành nhận xét PDF chuẩn, kiểm tra những gì trình đọc PDF khác thấy, và tiếp tục làm việc sau.
keywords: lưu, tải xuống, xuất pdf, đã đánh dấu, chú thích, nhận xét, chia sẻ, gửi, vấn đề, tiếp tục làm việc, mở lại, vòng khứ hồi, in
from: 4c198ebe
---

## Lưu

1. Chọn {{ui:Lưu}} trên thanh công cụ, hoặc nhấn {{key:Mod+S}}.
2. Nếu đang mở nhiều tệp, chọn {{ui:Tệp này}} (tệp của tờ bạn đang xem) hoặc {{ui:Mọi tệp đã thay đổi}}. Mỗi bản sao được tải xuống riêng.
3. Chờ "Đang lưu <file>…" hoàn tất. Lần lưu đầu tiên trong phiên cũng tải trình ghi PDF.

Kết quả: trình duyệt tải xuống "<name> (marked up).pdf", và thanh trạng thái báo: 'Đã lưu A-Plans (marked up).pdf (24 đánh dấu, 18.2 MB). Tệp gốc không thay đổi.' Dấu chấm bên cạnh {{ui:Lưu}} biến mất.

**PDF gốc của bạn không bao giờ bị thay đổi.** MarkupCraft ghi một tệp mới. Tệp đó được lưu ở đâu tùy thuộc vào cài đặt tải xuống của trình duyệt (xem [Tệp MarkupCraft mở và lưu](topic:files#where-downloads-go)).

## Tiếp tục làm việc sau

Lần tới, mở bản "(marked up)" thay vì bản gốc. Mọi thứ quay lại có thể chỉnh sửa: đánh dấu, trạng thái, phản hồi, mục punch, tỷ lệ của mỗi tờ và các tên tờ bạn đã nhập. Lưu lại sẽ tải xuống một tệp có cùng tên "(marked up)"; trình duyệt có thể thêm số như "(1)" nếu bản tải trước vẫn còn trong thư mục. Tự thay thế hoặc dọn dẹp các bản cũ.

MarkupCraft không tự lưu PDF. Trong khi bạn làm việc, nó giữ một bản khôi phục trong trình duyệt này, nên sự cố hoặc tab đã đóng sẽ không làm mất đánh dấu: lần mở MarkupCraft tiếp theo, nó hỏi "Khôi phục công việc của bạn?". Xem [Khôi phục công việc của bạn](common:recover). Vẫn hãy lưu trước khi đóng; nếu bạn cố rời đi khi còn đánh dấu chưa lưu, trình duyệt sẽ hỏi "Rời trang?" trước (iPad Safari thì không).

## Những gì trình đọc PDF khác thấy

Mọi đánh dấu được ghi thành một nhận xét PDF chuẩn (chú thích) với nét vẽ riêng, nên mọi trình xem PDF đều hiển thị, in và liệt kê nó trong bảng nhận xét:

- **Giao diện giống hệt** như trong MarkupCraft: đám mây với các vòng cung, mũi tên, con dấu, chấm đếm, nhãn số punch, nhãn đo.
- **Chi tiết là chuẩn:** tác giả, ngày, chủ đề, nội dung nhận xét và màu sắc.
- **Đám mây** là nhận xét hình chữ nhật hoặc đa giác có viền gợn mây; **hộp văn bản** và **chú thích** là nhận xét hộp văn bản; **ghi chú** là ghi chú dán; nét **bút** và **bút đánh dấu** là nét mực (ink); **con dấu** là nhận xét con dấu.
- **Chiều dài và diện tích** là nhận xét đo lường, và mỗi tờ đã hiệu chuẩn mang theo tỷ lệ của nó, để các trình xem hiểu phép đo có thể hiển thị giá trị.
- **Phản hồi** là phản hồi cho nhận xét, và **trạng thái** là trạng thái đánh giá (Mở hiển thị như không có trạng thái).
- **Số tờ** bạn nhập trở thành nhãn trang mà các trình xem khác hiển thị.

Một số thứ chỉ MarkupCraft đọc lại được: người được giao và ngày hạn của mục punch, trạng thái mục, và một số chi tiết kiểu dáng. Các chương trình khác giữ chúng trừ khi chúng ghi lại nhận xét.

Trong chương trình khác, nhận xét có thể được di chuyển hoặc chỉnh sửa như bất kỳ nhận xét nào. Nếu ai đó làm vậy và gửi lại tệp, MarkupCraft dùng vị trí mới của nhận xét khi mở tệp.

Chi tiết đầy đủ: [Những gì được lưu trong PDF](topic:what-the-pdf-keeps).

## Ký tự in thành "?"

Nội dung đánh dấu được ghi bằng phông Helvetica chuẩn mà mọi trình xem PDF đều có. Phông này bao gồm chữ tiếng Anh và chữ châu Âu Tây (é, ñ, ü, ø, và tương tự), nhưng không gồm các hệ chữ khác, ký hiệu ngoài bộ đó, hay emoji. Những ký tự này hiển thị tốt trong MarkupCraft nhưng in thành "?" trong bản đã lưu, và thông báo lưu có đếm chúng: "3 ký tự ngoài bộ chữ Tây Âu sẽ in thành "?" trong bản sao." Hãy viết các từ đó ra đầy đủ, hoặc dùng cách thay thế đơn giản (ví dụ "dk." cho ký hiệu đường kính).

## Tệp không thể lưu

- **PDF được bảo vệ:** "PDF này được bảo vệ (mã hóa), nên không thể ghi bản sao đã đánh dấu. Hãy yêu cầu bản không bảo vệ." Bạn vẫn có thể xem xét trên màn hình, xuất CSV và BCF.
- Nếu lưu thất bại vì lý do khác, một hộp có tên "Không thể lưu <file>" hiển thị nguyên nhân. Đánh dấu của bạn vẫn còn trong tab; không mất gì cho đến khi bạn đóng tab.

## Làm phẳng và in

Hiện chưa có lệnh làm phẳng (ghi đánh dấu vào trang) và chưa có lệnh in. Để in, mở bản đã lưu trong bất kỳ trình xem PDF nào và in với nhận xét được hiển thị.
