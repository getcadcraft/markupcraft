---
title: Theo dõi RFI, hồ sơ trình duyệt và nhật ký hằng ngày
summary: Đặt RFI, hồ sơ trình duyệt và nhật ký hằng ngày lên các tờ, kèm số, người được giao, hạn chót và chuỗi phản hồi; lọc những mục quá hạn; xuất CSV hoặc BCF; làm việc ngoại tuyến và gộp các bản sao.
keywords: rfi, yêu cầu thông tin, hồ sơ trình duyệt, nhật ký hằng ngày, báo cáo hiện trường, nhật ký công trường, thi công, quá hạn, hạn chót, giao cho tôi, chuỗi, tệp đính kèm, gộp, ngoại tuyến, máy tính bảng, bcf, csv, hiện trường
from: 95039c5a
---

Thẻ {{ui:Field}} giữ ba loại bản ghi bên cạnh các đánh dấu của bạn. Mỗi bản ghi gắn với một tờ; RFI hoặc hồ sơ trình duyệt cũng có một ghim tại vị trí trên tờ mà nó liên quan.

- **RFI**: câu hỏi gửi nhóm thiết kế. Trạng thái: Mở, Đã trả lời, Đã đóng.
- **Hồ sơ trình duyệt**: nội dung cần được xem xét trước khi tiến hành công việc. Trạng thái: Mở, Đang xem xét, Đã duyệt, Duyệt có ghi chú, Sửa và nộp lại, Đã đóng.
- **Nhật ký hằng ngày**: thời tiết trong ngày, số người có mặt tại công trường và công việc đã thực hiện. Trạng thái: Nháp, Chính thức.

Mỗi bản ghi có một số riêng theo loại (RFI-0001, SUB-0001, LOG-0001), tiêu đề, nội dung, người được giao, hạn chót, một chuỗi phản hồi và danh sách tên tệp đính kèm.

## Thêm một bản ghi

1. Mở thẻ {{ui:Field}} và chọn {{ui:RFI}} hoặc {{ui:Submittal}}.
2. Chạm hoặc nhấp vào tờ thuộc về bản ghi. Một ghim xuất hiện và bản ghi mở trong thẻ.
3. Nhập tiêu đề, câu hỏi hoặc mô tả, người được giao và thời hạn.

Nhật ký hằng ngày được thêm vào tờ đang mở mà không có ghim. {{ui:Place pin}} đặt ghim sau; {{ui:Move pin}} di chuyển mọi ghim. Chạm vào ghim trên tờ sẽ mở bản ghi của ghim đó.

## Trả lời và theo dõi

Đổi {{ui:Status}} và thay đổi sẽ được ghi vào chuỗi. Viết phản hồi rồi chọn {{ui:Send reply}} (Ctrl+Enter cũng gửi). Tệp đính kèm chỉ là tên: nhập tên hoặc chọn tệp, và danh sách cho nhóm biết những gì đi kèm bản ghi. Bản thân các tệp vẫn ở nơi chúng đang nằm.

Bản ghi đã qua hạn chót mà vẫn đang chờ (RFI chưa ở trạng thái Đã trả lời hoặc Đã đóng, hồ sơ trình duyệt chưa có quyết định) được đánh dấu **Quá hạn**, màu đỏ, trong danh sách và trên ghim của nó.

## Tìm những mục quan trọng

Các bộ lọc nằm phía trên danh sách: loại, trạng thái, hạn chót (quá hạn, đến hạn trong 7 ngày, có hoặc không có hạn chót), tờ này hoặc mọi tờ, tìm kiếm văn bản, và {{ui:Assigned to me}}, so sánh người được giao với tên mà MarkupCraft biết bạn (xem [Đặt tên của bạn](topic:set-your-name)). Dòng dưới bộ lọc đếm số mục đang hiển thị và số mục quá hạn.

## Xuất

{{ui:CSV}} ghi các bản ghi trong danh sách thành bảng tính. {{ui:BCF}} ghi chúng thành các chủ đề BCF, mỗi chủ đề kèm ảnh chụp vị trí của nó trên tờ, để các công cụ BCF khác có thể liệt kê. Cả hai đều theo bộ lọc.

## Lưu, ngoại tuyến và gộp bản sao

Bản ghi được lưu bên trong tệp PDF khi bạn lưu tệp, và chúng xuất hiện lại khi bạn mở tệp. Không cần mạng: thêm, sửa, phản hồi và lưu trên máy tính bảng trong tầng hầm, rồi mang tệp PDF về. Các tệp PDF cũ và tệp PDF từ chương trình khác vẫn mở như trước.

Để ghép hai bản sao lại với nhau, mở một bản và chọn {{ui:Merge}}, rồi chọn bản sao còn lại của cùng tệp PDF. Các bản ghi được ghép theo mã của chúng:

- bản ghi chỉ có ở một bản sao sẽ được thêm vào;
- bản ghi có ở cả hai bản sao sẽ lấy các trường (tiêu đề, nội dung, trạng thái, người được giao, hạn chót) từ bản sao được thay đổi sau cùng, nguyên khối; nếu hai người thay đổi các trường khác nhau của cùng một bản ghi, phiên bản của bản sao sau cùng sẽ được giữ; chuỗi phản hồi và tên tệp đính kèm từ cả hai bản sao được ghép lại;
- nếu cả hai bản sao đều đánh số một bản ghi mới giống nhau, bản ghi đến sau sẽ nhận số trống kế tiếp;
- bản ghi bị xóa ở một bản sao vẫn bị xóa, trừ khi nó được sửa sau đó.

Một lần gộp là một bước hoàn tác.

## Giới hạn

- Các bản ghi chưa được Live TeamWork chia sẻ; hãy dùng Gộp.
- Trong phiên bản này chưa có nhóm, thông báo hay dự án đám mây cho bản ghi.
- Các trang bị xóa khỏi tệp PDF sẽ kéo theo bản ghi của chúng (hộp xác nhận xóa trang có đếm số bản ghi này).
