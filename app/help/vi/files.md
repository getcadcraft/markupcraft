---
title: Các tệp MarkupCraft mở và lưu
summary: PDF vào, một bản sao PDF đã đánh dấu ra, cùng các tệp CSV, BCF và hộp công cụ; mỗi loại đi đâu, khi trực tuyến và ngoại tuyến.
keywords: pdf, mở, lưu, xuất, tải xuống, csv, bcf, bcfzip, json, hộp công cụ, loại tệp, định dạng, tải lên, mật khẩu, mã hóa
from: b3045b4c
---

## MarkupCraft mở những gì

| Tệp | Cách làm | Điều xảy ra |
|---|---|---|
| PDF (`.pdf`) | {{ui:Mở}}, {{key:Mod+O}}, hoặc thả vào vùng tờ. Mở nhiều tệp cùng lúc đều được. | Mỗi trang trở thành một tờ. Các đánh dấu đã có trong tệp được đọc lại (bên dưới). |
| Hộp công cụ (`.json`) | thẻ {{ui:Công cụ}}, rồi {{ui:Nhập}} | Các công cụ được thêm vào hộp công cụ của bạn. Xem [Hộp công cụ](topic:tool-chest). |

Mọi thứ khác bị từ chối với thông báo "MarkupCraft mở các tệp PDF." trên thanh trạng thái. Nếu bạn thả lẫn nhiều loại, các PDF sẽ mở và thanh trạng thái cho biết có bao nhiêu tệp không phải PDF.

### Các đánh dấu đã có trong PDF

- **Các đánh dấu do MarkupCraft lưu** trở lại đúng như cũ: loại, kiểu, tác giả, ngày, trạng thái, phản hồi, số hạng mục tồn đọng, tỷ lệ của tờ và mọi tên tờ bạn đã nhập.
- **Các nhận xét từ chương trình PDF khác** cũng được đọc. Hình chữ nhật, elip, đường thẳng và mũi tên, đa tuyến, đa giác, nét vẽ tay (bút), hộp văn bản và ghi chú dán trở thành các đánh dấu MarkupCraft bình thường, chỉnh sửa được. Phản hồi và trạng thái duyệt của chúng đi kèm.
- **Mọi thứ còn lại** (văn bản tô sáng tạo bằng cách chọn văn bản, con dấu của chương trình khác và các loại khác) được hiển thị nguyên trạng, đánh dấu là chỉ đọc. Bạn có thể chọn, xem trong danh sách đánh dấu và phản hồi, nhưng không thể di chuyển, thay đổi hay xóa.
- Các liên kết và ô biểu mẫu được giữ nguyên và không được liệt kê.
- Tỷ lệ do chương trình khác lưu (một khung nhìn đo lường) được dùng làm tỷ lệ của tờ khi MarkupCraft hiểu đơn vị của nó.

### Các tệp không mở được

- PDF cần mật khẩu: "“name” cần mật khẩu để mở. Hãy mở một bản sao không có bảo vệ."
- Tệp bị hỏng hoặc thực chất không phải PDF: "“name” không đọc được như một PDF (…)".
- PDF mở được nhưng được bảo vệ chống thay đổi thì vẫn mở bình thường. Việc lưu bị từ chối (xem bên dưới).

Khi mở nhiều tệp cùng lúc, các tệp hợp lệ sẽ mở, và một hộp có tên "Một số tệp không mở được" liệt kê các tệp còn lại.

## MarkupCraft lưu những gì

Lưu luôn là **tải xuống** một tệp mới. Một trang web không thể ghi đè tệp trên máy tính của bạn, và MarkupCraft không bao giờ thay đổi bản gốc.

| Bạn chọn | Bạn nhận được | Ghi chú |
|---|---|---|
| {{ui:Lưu}} ({{key:Mod+S}}) | "<name> (marked up).pdf" | Một bản sao của PDF gốc với mọi đánh dấu được ghi vào như nhận xét PDF thật. Lưu lại một tệp "(marked up)" giữ nguyên tên; nó không bao giờ thành "(marked up) (marked up)". Xem [Lưu PDF đã đánh dấu](topic:save-the-marked-up-pdf). |
| thẻ {{ui:Đánh dấu}}, rồi {{ui:CSV}} | "<name> markups.csv" | Các đánh dấu như đang liệt kê (bộ lọc được áp dụng). |
| thẻ {{ui:Đánh dấu}}, rồi {{ui:BCF}} | "<name> markups.bcfzip" | BCF 2.1 cho các công cụ phối hợp BIM, mỗi đánh dấu một ảnh chụp. Xem [Kiến thức cơ bản về BCF](topic:bcf-basics). |
| thẻ {{ui:Danh sách hạng mục tồn đọng}}, rồi {{ui:Xuất CSV}} | "<name> punch list.csv" | Các hạng mục tồn đọng theo thứ tự số. |
| thẻ {{ui:Công cụ}}, rồi {{ui:Xuất}} | "MarkupCraft tool chest.json" | Hộp công cụ của bạn, để chia sẻ hoặc lưu giữ. |

"<name>" là tên tệp của PDF đầu tiên đang mở, không có ".pdf".

Các tệp CSV mở được trong mọi bảng tính. Chúng là UTF-8 kèm dấu mà bảng tính tìm kiếm, nên tên có dấu hiển thị đúng. Ô bắt đầu bằng =, +, - hoặc @ được thêm một dấu nháy đơn ở đầu để bảng tính không bao giờ chạy nó như một công thức.

## Các tệp tải xuống đi đâu

Trình duyệt của bạn quyết định: thường là thư mục Tải xuống, hoặc hỏi mỗi lần nếu bạn đã đặt như vậy. Xem [Trình duyệt và máy tính](common:browsers#what-differs-between-browsers).

:::chromium
Khi bạn lưu cùng lúc mọi tệp đã thay đổi của một bộ, Chrome và Edge có thể hỏi liệu trang này có được tải xuống nhiều tệp hay không. Chọn {{ui:Cho phép}}, nếu không bạn chỉ nhận được bản sao đầu tiên.
:::

:::safari
Trên iPad, Safari hỏi trước mỗi lần tải xuống và đặt tệp vào ứng dụng Tệp, trong Tải xuống. Trên Mac, tệp được đưa vào thư mục đặt trong cài đặt của Safari.
:::

## Trực tuyến và ngoại tuyến

- **PDF của bạn không bao giờ rời khỏi máy tính này**, dù trực tuyến hay ngoại tuyến. Không có việc tải lên ở bất kỳ đâu.
- Trình đọc PDF được tải lần đầu bạn mở một PDF ("Đang tải trình đọc PDF…"), và bộ ghi PDF được tải lần đầu bạn lưu ("Đang tải bộ ghi PDF…") hoặc mở một tệp đã có nhận xét.
- Khi có kết nối, cả hai được tải từ trang web.
- **Để làm việc khi không có kết nối,** hãy chọn {{ui:Lưu để dùng ngoại tuyến}} trên thanh ở trên cùng khi bạn đang trực tuyến. Nút đếm "Đang lưu N trên M" rồi hiện "Sẵn sàng ngoại tuyến". Bản sao đó gồm trình đọc PDF và bộ ghi PDF (tổng cộng khoảng 6 MB) cùng phần trợ giúp này, nên sau đó việc mở, đánh dấu và lưu PDF đều chạy được ngoại tuyến trong trình duyệt này.
- Nếu nút hiện "Không thể lưu", một số tệp chưa tải xuống được: hãy kiểm tra kết nối rồi bấm lại. Nếu nút hiện "Không dùng được chế độ ngoại tuyến", cửa sổ trình duyệt này không giữ được bản sao ngoại tuyến (cửa sổ riêng tư và một số máy tính được quản lý); hãy dùng cửa sổ thông thường.
- Để cập nhật hoặc bỏ bản sao, bấm "Sẵn sàng ngoại tuyến" rồi chọn "Lưu lại (lấy bản mới nhất)" hoặc "Xóa bản ngoại tuyến". Xem thêm trong [Làm việc ngoại tuyến](common:offline).

:::offline
Bạn đang ngoại tuyến. Nếu thanh ở trên cùng hiện "Sẵn sàng ngoại tuyến", mọi thứ đều chạy được, kể cả lưu. Nếu không và bạn chưa lưu lần nào trong thẻ này, {{ui:Lưu}} có thể báo lỗi "Không tải được bộ ghi PDF". Các đánh dấu của bạn vẫn còn trong thẻ: hãy giữ nó mở, kết nối lại, rồi chọn {{ui:Lưu}} lần nữa.
:::

## Những điều cần biết

- Các bộ bản vẽ lớn mất một lúc để mở: MarkupCraft đọc văn bản của mọi trang để tìm số hiệu tờ. Thanh trạng thái đếm số tờ khi đang đọc.
- Mở cùng một PDF hai lần sẽ thêm các tờ của nó hai lần. Nếu điều đó xảy ra, hãy đóng bộ và mở lại.
- {{ui:Đóng}} đóng mọi tệp đang mở cùng lúc. Nếu có tệp còn đánh dấu chưa lưu, nó sẽ hỏi: {{ui:Hủy}}, {{ui:Đóng mà không lưu}} hoặc {{ui:Lưu bản sao trước}}.
- Lưu lên đám mây chưa có, và chưa có bản dành cho máy tính để bàn. Hãy giữ các PDF cùng với các tệp dự án khác của bạn và sao lưu như thường lệ. Xem [Tệp của bạn đi đâu](common:your-files).
