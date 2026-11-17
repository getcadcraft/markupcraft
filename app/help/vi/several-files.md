---
title: Làm việc với nhiều tệp cùng lúc
summary: Mở nhiều PDF như một bộ, tìm tờ qua các tệp, sao chép đánh dấu giữa chúng, và lưu bản sao của từng tệp.
keywords: nhiều tệp, nhiều pdf, bộ bản vẽ, bộ, hàng loạt, gộp, bộ môn, kiến trúc, kết cấu, cơ khí, lưu tất cả, đóng
from: f59354ae
---

Một bộ bản vẽ thường đến dưới dạng một PDF cho mỗi bộ môn, hoặc một PDF cho mỗi tờ. MarkupCraft coi mọi thứ bạn mở là **một bộ**.

## Mở chúng cùng lúc

Chọn tất cả các PDF trong bộ chọn tệp cùng lúc, hoặc thả tất cả vào khu vực tờ. Để thêm sau, mở theo cùng cách; chúng được nối vào cuối danh sách {{ui:Tờ}} theo thứ tự bạn mở.

Kết quả: "Đã mở 6 tệp (84 tờ trong bộ)." Mỗi trang là một tờ. Các tờ có số tờ hiển thị "Tờ A-101" dưới tên của chúng; các tờ khác hiển thị tệp và trang.

Không có tệp "bộ" được lưu: lần sau, mở lại những PDF đó (các bản "(marked up)", nếu bạn đã lưu).

## Trên toàn bộ

- **Tìm một tờ:** {{ui:Tìm tờ}} tìm trong số tờ, tên tờ và tên tệp của mọi tệp. {{key:PageUp}} và {{key:PageDown}} đi qua tất cả các tờ của mọi tệp theo thứ tự.
- **Danh sách đánh dấu:** thẻ {{ui:Đánh dấu}} liệt kê đánh dấu từ mọi tệp. Lọc theo {{ui:Tờ}} để thu hẹp. CSV có cột Tệp.
- **Danh sách punch:** một cách đánh số cho cả bộ.
- **So sánh:** tờ cũ và tờ mới có thể đến từ các tệp khác nhau.
- **Sao chép và dán:** {{key:Mod+C}} trên một tờ và {{key:Mod+V}} trên tờ khác, trong bất kỳ tệp nào. Bản sao rơi vào cùng vị trí trên trang, lệch nhẹ.

## Lưu

Chọn {{ui:Lưu}}. Khi có nhiều hơn một tệp đang mở, MarkupCraft hỏi:

- {{ui:Tệp này}}: bản sao đã đánh dấu của tệp chứa tờ bạn đang xem.
- {{ui:Mọi tệp đã thay đổi}}: bản sao của mỗi tệp có thay đổi chưa lưu. Mỗi bản tải xuống riêng, với tên "<tên tệp> (marked up).pdf".
- {{ui:Hủy}}

:::chromium
Lần đầu bạn lưu nhiều tệp cùng lúc, Chrome và Edge có thể hỏi liệu trang này có được phép tải nhiều tệp không. Chọn {{ui:Cho phép}}; nếu không, chỉ bản đầu tiên được tải về.
:::

:::safari
Safari có thể hỏi một lần cho mỗi tệp. Trên iPad, mỗi bản sao được gửi tới ứng dụng Tệp.
:::

Tệp có đánh dấu đã lưu không còn được tính là đã thay đổi; các tệp khác vẫn được tính.

Các tệp xuất CSV, BCF và danh sách punch được đặt tên theo tệp **đầu tiên** bạn mở.

## Đóng

{{ui:Đóng}} đóng cả bộ; hiện chưa có cách đóng riêng một tệp. Nếu có gì chưa lưu, nó hỏi:

- {{ui:Hủy}}: không có gì xảy ra.
- {{ui:Đóng mà không lưu}}: các đánh dấu chưa lưu sẽ mất.
- {{ui:Lưu bản sao trước}}: lưu mọi tệp đã thay đổi, rồi đóng.

Đóng cũng xóa lịch sử hoàn tác.

## Bộ lớn

- Văn bản của mọi trang được đọc khi mở để tìm số tờ, nên bộ 100 tờ mất một lúc. Thanh trạng thái đếm tờ khi đọc.
- Hình ảnh tờ trong danh sách được vẽ khi bạn cuộn tới.
- Mỗi PDF đang mở được giữ trong bộ nhớ của tab trình duyệt. Nếu tab chạy chậm, đóng các tab nặng khác, hoặc xem xét từng bộ môn một.
- Mở cùng một tệp hai lần sẽ cho bạn hai bản sao của các tờ của nó. Nếu điều đó xảy ra, chọn {{ui:Đóng}} và mở lại bộ.
