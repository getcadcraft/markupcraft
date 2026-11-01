---
title: Bắt đầu với MarkupCraft
summary: Mở một bộ bản vẽ, đặt đám mây và chú thích đầu tiên lên một tờ, rồi lưu một bản sao đã đánh dấu.
keywords: bắt đầu, bước đầu tiên, mở pdf, duyệt, đánh dấu, redline, bút đỏ, bộ bản vẽ, hướng dẫn, khởi đầu nhanh
from: 0b1aae4e
---

MarkupCraft dùng để duyệt bản vẽ: bạn mở các bộ bản vẽ PDF, đánh dấu bằng đám mây, chú thích, văn bản, con dấu và số đo, theo dõi trạng thái của từng nhận xét, và lưu một bản sao PDF mà trình xem PDF nào cũng hiển thị được.

Nó chạy trong trình duyệt web của bạn. PDF được mở ngay trên máy tính của bạn và **không bao giờ được tải lên**. Lưu sẽ tải xuống một bản sao mới; tệp gốc của bạn không bị thay đổi.

:::note
MarkupCraft đang được phát triển. Phần trợ giúp mô tả bản bạn đang chạy. Những gì nó chưa làm được được liệt kê trong [Những gì chưa xây dựng](topic:not-built-yet).
:::

## Bạn cần gì

- Chrome, Edge, Firefox hoặc Safari gần đây trên máy Mac, Windows hoặc Linux, hoặc Safari hay Chrome trên iPad. Xem [Trình duyệt và máy tính](common:browsers).
- Một hoặc nhiều tệp PDF. Cả một bộ bản vẽ có thể là một PDF hoặc nhiều PDF.
- Chuột có con lăn là thoải mái nhất. Bàn di chuột dùng được, màn hình cảm ứng cũng vậy (xem [Duyệt trên iPad hoặc màn hình cảm ứng](topic:review-on-a-tablet)).

## Lần duyệt đầu tiên của bạn trong mười bước

1. Mở MarkupCraft trong trình duyệt. Giữa màn hình ghi "Mở một bộ bản vẽ".
2. Chọn {{ui:Mở PDF}} (hoặc {{ui:Mở}} ở đầu bên trái của thanh công cụ, hoặc nhấn {{key:Mod+O}}), chọn một hoặc nhiều PDF và xác nhận.
   Bạn cũng có thể kéo PDF từ {{pick:mac=Finder|windows=File Explorer|linux=trình quản lý tệp của bạn}} và thả vào vùng tờ.
   Lần đầu tiên, thanh trạng thái ở dưới ghi "Đang tải trình đọc PDF…". Sau đó mỗi trang trở thành một tờ trong danh sách {{ui:Tờ}} ở bên trái, và tờ đầu tiên lấp đầy vùng giữa.
3. Bấm vào một tờ trong danh sách để hiển thị nó. Xoay con lăn chuột trên tờ để phóng to tại vị trí con trỏ.
4. Chọn {{ui:Đám mây}} trong nhóm {{ui:Sửa đổi}} của thanh công cụ (hoặc nhấn {{key:C}}).
   Lần đầu bạn chọn một công cụ vẽ, MarkupCraft hỏi tên của bạn. Hãy nhập tên rồi chọn {{ui:Lưu}}. Mọi đánh dấu đều ghi lại tên này. (Xem thêm trong [Đặt tên tác giả của bạn](topic:set-your-name).)
5. Kéo một khung quanh vùng bạn muốn đánh dấu. Một đám mây sửa đổi màu đỏ xuất hiện và đang được chọn.
6. Chọn {{ui:Chú thích}} trong nhóm {{ui:Chú thích}} (hoặc nhấn {{key:K}}). Nhấn vào thứ bạn muốn chỉ, kéo đến chỗ đặt văn bản và thả ra.
7. Gõ nhận xét của bạn vào hộp xuất hiện. Bấm ra ngoài hộp (hoặc nhấn {{key:Mod+Enter}}) để hoàn tất.
8. Nhấn {{key:Esc}} hai lần: lần một để bỏ vùng chọn, lần hai để quay lại công cụ {{ui:Chọn}}. Bấm vào đám mây. Thẻ {{ui:Thuộc tính}} bên phải cho biết ai tạo nó, khi nào, và {{ui:Trạng thái}} của nó.
9. Chọn {{ui:Lưu}} trên thanh công cụ (hoặc nhấn {{key:Mod+S}}).
   Trình duyệt của bạn tải xuống một bản sao có tên dạng "A-Plans (marked up).pdf". Thanh trạng thái cho biết đã ghi bao nhiêu đánh dấu.
10. Mở bản sao đó trong bất kỳ trình xem PDF nào để kiểm tra: đám mây và chú thích đều có ở đó, dưới dạng nhận xét PDF bình thường mang tên bạn.

Để tiếp tục làm việc sau này, hãy mở bản sao "(marked up)" trong MarkupCraft. Các đánh dấu của bạn trở lại ở dạng chỉnh sửa được, cùng trạng thái, phản hồi và số hạng mục tồn đọng.

## Trực tuyến và ngoại tuyến

:::online
Bạn đang trực tuyến. MarkupCraft tải trình đọc PDF lần đầu bạn mở một PDF, và bộ ghi PDF lần đầu bạn lưu. Để làm việc khi không có kết nối về sau (trong chuyến đi công trường, trên máy bay), hãy chọn {{ui:Lưu để dùng ngoại tuyến}} trên thanh ở trên cùng ngay bây giờ và đợi "Sẵn sàng ngoại tuyến". Bản sao gồm trình đọc và bộ ghi PDF, nên khi đó việc mở và lưu PDF chạy được ngoại tuyến. Xem [Làm việc ngoại tuyến](common:offline).
:::

:::offline
Bạn đang ngoại tuyến. Nếu thanh ở trên cùng hiện "Sẵn sàng ngoại tuyến", MarkupCraft đã được lưu để dùng ngoại tuyến trong trình duyệt này và mọi thứ đều chạy: mở, đánh dấu, đo, lưu. Nếu chưa, hãy dùng những gì đã tải trong thẻ này và đừng tải lại trang cho đến khi trực tuyến trở lại. Xem [Làm việc ngoại tuyến](common:offline).
:::

## Ứng dụng nhớ gì và không nhớ gì

- **Các đánh dấu của bạn nằm trong PDF bạn lưu.** Không có gì được giữ trên máy chủ. Ứng dụng không tự lưu PDF, nhưng giữ một bản khôi phục trong trình duyệt này cho đến khi bạn lưu. Hãy lưu trước khi đóng thẻ; trình duyệt sẽ hỏi trước nếu bạn thử rời đi khi còn đánh dấu chưa lưu (trừ trên iPad, xem [Duyệt trên iPad hoặc màn hình cảm ứng](topic:review-on-a-tablet)).
- **Tên của bạn, kiểu công cụ và hộp công cụ** ở lại trong trình duyệt này trên máy tính này. Trình duyệt hoặc máy tính khác bắt đầu từ đầu, và xóa dữ liệu trang của trình duyệt sẽ xóa chúng. Xem [Những gì ở lại trong trình duyệt này](topic:browser-storage).
- Lưu lên đám mây và các phiên duyệt chia sẻ giữa nhiều người chưa có.

## Đi tiếp đến đâu

- [Tham quan màn hình](topic:workspace)
- [Đánh dấu một tờ](topic:mark-up-a-sheet)
- [Hiệu chuẩn một tờ và đo](topic:calibrate-and-measure)
- [Chuyển từ phần mềm đánh dấu khác sang](topic:coming-from) nếu bạn đã duyệt bản vẽ trong một chương trình khác.
