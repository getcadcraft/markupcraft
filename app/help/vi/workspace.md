---
title: Tham quan màn hình
summary: Thanh công cụ, danh sách tờ, vùng tờ, năm bảng bên phải và thanh trạng thái, theo tên hiển thị trên màn hình.
keywords: màn hình, bố cục, thanh công cụ, bảng, thanh bên, ảnh thu nhỏ, thuộc tính, thanh trạng thái, giao diện, toàn màn hình, giao diện sáng tối, chế độ tối
from: 18d82de6
---

MarkupCraft lấp đầy cửa sổ trình duyệt. Từ trên xuống dưới và từ trái sang phải:

## Thanh trên cùng

Thanh mỏng phía trên mọi thứ thuộc về họ CadCraft, không thuộc riêng MarkupCraft. Nó có:

- tên ứng dụng và phiên bản bạn đang chạy,
- {{ui:Giới thiệu MarkupCraft}}, mở trang của ứng dụng trên trang web,
- {{ui:Trợ giúp}}, mở phần trợ giúp này trong một bảng bên (hoặc nhấn {{key:F1}}),
- {{ui:Lưu để dùng ngoại tuyến}}, giữ MarkupCraft, trình đọc và bộ ghi PDF của nó, cùng phần trợ giúp này trong trình duyệt để mở được khi không có kết nối; sau đó nó hiện "Sẵn sàng ngoại tuyến" (xem [Làm việc ngoại tuyến](common:offline)),
- nút chế độ màn hình ({{ui:Toàn màn hình}}), và
- {{ui:Cài đặt}} (hoặc {{key:Mod+,}}), với thẻ {{ui:MarkupCraft}} cho cài đặt riêng của ứng dụng này và {{ui:Chung}} cho những cài đặt mà mọi ứng dụng CadCraft dùng chung (xem [Cài đặt MarkupCraft](topic:settings)), và
- {{ui:Giấy}} và {{ui:Mô hình}}, các giao diện sáng và tối. Trong {{ui:Mô hình}}, các tờ được vẽ chữ sáng trên nền tối; các đánh dấu của bạn giữ màu riêng.

Nút chế độ màn hình, hoặc {{key:Ctrl+Shift+F}}, chuyển lần lượt qua ba chế độ: bình thường, toàn màn hình, và toàn màn hình với các thanh được ẩn. Khi các thanh bị ẩn, hãy đưa con trỏ lên mép trên của màn hình (hoặc chạm vào đó) để chúng trượt trở lại. Phím tắt này dùng phím Control trên mọi máy tính, kể cả Mac.

:::note
Ở chế độ toàn màn hình, {{key:Esc}} cũng khiến trình duyệt thoát toàn màn hình. Nếu bạn chỉ muốn hủy một hình đang vẽ, hãy nhấn {{key:Ctrl+Shift+F}} lần nữa để quay lại toàn màn hình.
:::

## Thanh công cụ

Dưới thanh trên cùng, các công cụ được chia nhóm và có nhãn:

| Nhóm | Các nút |
|---|---|
| Tệp | {{ui:Mở}}, {{ui:Lưu}}, {{ui:Đóng}} |
| Chọn | {{ui:Chọn}}, {{ui:Di chuyển khung nhìn}} |
| Vẽ | {{ui:Bút}}, {{ui:Tô sáng}}, {{ui:Đường thẳng}}, {{ui:Mũi tên}}, {{ui:Hình chữ nhật}}, {{ui:Elip}}, {{ui:Đa tuyến}}, {{ui:Đa giác}} |
| Sửa đổi | {{ui:Đám mây}}, {{ui:Đám mây tự do}} |
| Chú thích | {{ui:Chú thích}}, {{ui:Văn bản}}, {{ui:Ghi chú}}, {{ui:Con dấu}} |
| Đo | {{ui:Hiệu chuẩn}}, {{ui:Chiều dài}}, {{ui:Diện tích}}, {{ui:Đếm}} |
| Chỉnh sửa | {{ui:Hoàn tác}}, {{ui:Làm lại}}, {{ui:Sao chép}}, {{ui:Dán}}, và {{ui:Thêm}}: {{ui:Cắt}}, {{ui:Sao chép}}, {{ui:Dán}}, {{ui:Dán tại chỗ}}, {{ui:Nhân bản}}, {{ui:Xóa}}, {{ui:Chọn tất cả}}, {{ui:Bỏ chọn}} |

Công cụ bạn đang dùng trông như đang được nhấn. Đưa con trỏ lên một nút để xem phím của nó (ví dụ "Hình chữ nhật (R)"); menu {{ui:Thêm}} liệt kê phím của từng lệnh bên cạnh. Các nút chưa thể dùng lúc này bị làm mờ: {{ui:Sao chép}} cho đến khi bạn chọn một đánh dấu, {{ui:Dán}} cho đến khi có thứ được sao chép. Một chấm nhỏ sau {{ui:Lưu}} nghĩa là một số đánh dấu chưa được lưu. Danh sách phím đầy đủ nằm trong [Bàn phím và chuột](topic:keyboard).

Một công cụ vẫn bật sau khi bạn vẽ bằng nó, nên bạn có thể vẽ liên tiếp nhiều đám mây. Nhấn {{key:Esc}} (hai lần nếu đánh dấu mới vẫn đang được chọn) hoặc {{key:V}} để quay lại {{ui:Chọn}}.

## Danh sách tờ (bên trái)

{{ui:Tờ}} liệt kê mọi trang của mọi PDF đang mở. Mỗi hàng hiện một hình nhỏ của tờ, tên, số hiệu tờ hoặc tệp và trang, và số đánh dấu của nó. Con số sau tiêu đề là số tờ.

- Bấm vào một hàng để hiển thị tờ đó.
- Gõ vào {{ui:Tìm tờ}} để lọc theo tên tờ, số hiệu tờ hoặc tên tệp. Nhấn {{key:Enter}} để mở kết quả khớp đầu tiên.

Tên tờ lấy từ PDF khi nó có. Xem [Mở một bộ bản vẽ và chuyển giữa các tờ](topic:open-a-plan-set).

## Vùng tờ (ở giữa)

Tờ bạn đang làm việc. Khi chưa mở gì, nó hiện "Mở một bộ bản vẽ" cùng nút {{ui:Mở PDF}}. Thả PDF vào bất kỳ đâu ở đây để mở.

Dưới tờ, một thanh hẹp có:

- các mũi tên tờ trước và tờ sau, và "3 trên 12: A-101 — Mặt bằng tầng" (đưa con trỏ lên đó để xem tệp và trang),
- thu nhỏ, ô thu phóng (gõ một tỷ lệ phần trăm rồi nhấn {{key:Enter}}; 100% là kích thước thật trên một màn hình thông thường), phóng to,
- {{ui:Vừa trang}} và {{ui:Vừa chiều rộng}}.

Mỗi tờ nhớ mức thu phóng riêng của nó khi bộ còn đang mở.

Khi bạn so sánh hai tờ, một chú giải xuất hiện ở đây: "Chỉ có ở tờ cũ", "Chỉ có ở tờ mới" và "Có ở cả hai". Xem [So sánh hai bản sửa đổi](topic:compare-revisions).

## Các bảng (bên phải)

Năm thẻ:

| Thẻ | Nó hiển thị gì |
|---|---|
| {{ui:Thuộc tính}} | Đánh dấu đang chọn: tác giả, ngày, giá trị đo, trạng thái, chủ đề, văn bản, nhận xét, kiểu, các phản hồi và hạng mục tồn đọng của nó. Khi một công cụ vẽ đang bật và chưa chọn gì, là các cài đặt mà đánh dấu mới sẽ dùng. Khi chưa chọn gì và {{ui:Chọn}} đang bật, là tờ: số hiệu, tiêu đề, nơi tên được đọc ra, khổ giấy, tỷ lệ, và {{ui:Đổi tên tờ}}. |
| {{ui:Đánh dấu}} | Mọi đánh dấu trong bộ đang mở, kèm bộ lọc, và các nút xuất {{ui:CSV}} và {{ui:BCF}}. Xem [Danh sách đánh dấu](topic:markups-list-and-export). |
| {{ui:Danh sách hạng mục tồn đọng}} | Các hạng mục tồn đọng được đánh số, kèm người phụ trách, hạn và trạng thái. Xem [Lập danh sách hạng mục tồn đọng](topic:punch-list). |
| {{ui:Công cụ}} | Hộp công cụ: các công cụ đã lưu, có kiểu sẵn. Xem [Hộp công cụ](topic:tool-chest). |
| {{ui:So sánh}} | Chồng hai tờ lên nhau. Xem [So sánh hai bản sửa đổi](topic:compare-revisions). |

## Thanh trạng thái (dưới cùng)

- Bên trái, vị trí con trỏ trên tờ, tính bằng inch (hoặc milimét, trong [Cài đặt](topic:settings)) trên giấy.
- Ở giữa, các thông báo: công cụ cần gì tiếp theo, điều vừa được lưu, lý do một việc bị từ chối. **Hãy đọc nó khi có việc không xảy ra.**
- Nút tỷ lệ của tờ ("Chưa hiệu chuẩn", hoặc tỷ lệ). Bấm vào để đặt tỷ lệ. Xem [Hiệu chuẩn một tờ và đo](topic:calibrate-and-measure).
- Tên của bạn ("Đặt tên của bạn" cho đến khi bạn nhập). Bấm vào để đổi.

## Trên màn hình nhỏ

Dưới khoảng 1180 pixel chiều rộng, các bảng hẹp lại và hình tờ thu nhỏ. Trên màn hình cỡ điện thoại, các phần xếp chồng: thanh công cụ (cuộn ngang), tờ, thanh trạng thái, các bảng, rồi danh sách tờ ở dưới cùng. Máy tính bảng nằm ngang giữ nguyên bố cục đầy đủ.
