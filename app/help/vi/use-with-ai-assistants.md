---
title: Dùng MarkupCraft với trợ lý AI
summary: Để trợ lý AI hoặc kịch bản của bạn liệt kê các đánh dấu của một bộ, thêm các đánh dấu đơn giản, đặt trạng thái, phản hồi và xuất danh sách: quyền, kết nối qua CadCraft Studio, và nhật ký hoạt động.
keywords: ai, trợ lý, agent, mcp, giao thức ngữ cảnh mô hình, kịch bản, tự động hóa, đánh dấu, rà soát, quyền, ngắt kết nối, hoạt động
from: 095f2977
---

## Bạn sẽ học gì

Cách để một trợ lý AI (hoặc một kịch bản bạn viết) làm việc với MarkupCraft, và cách quyết định những gì nó được phép chạm vào.

MarkupCraft **không có AI riêng** và không gửi gì đi đâu cả. Bạn tự cung cấp trợ lý: bất kỳ chương trình nào nói được Giao thức ngữ cảnh mô hình (Model Context Protocol, MCP). MarkupCraft chỉ cấp cho nó các công cụ, và bạn chọn những công cụ nào.

## Bật lên

1. Mở {{ui:Settings}} (bánh răng trên thanh ứng dụng, hoặc {{key:Mod+,}}) rồi vào thẻ {{ui:MarkupCraft}}.
2. Dưới {{ui:Assistants}}, chọn **Cho phép trợ lý AI và kịch bản dùng MarkupCraft**. Tính năng này tắt cho đến khi bạn bật lên.
3. Chọn những gì nó được làm: **Đọc** được chọn sẵn; chỉ chọn **Chỉnh sửa**, **Lưu** hoặc **Xuất** khi bạn cần.

Các công cụ nằm ngoài quyền bạn đã chọn sẽ không được đưa cho trợ lý, và nếu nó vẫn yêu cầu, MarkupCraft từ chối và ghi vào nhật ký hoạt động. Tắt công tắc sẽ kết thúc mọi kết nối ngay lập tức; {{ui:Reset MarkupCraft settings}} cũng tắt nó.

## Kết nối trợ lý của bạn

Trợ lý kết nối qua **CadCraft Studio** trên máy tính của bạn: Studio chạy một máy chủ nhỏ mà chỉ máy tính này truy cập được, được bảo vệ bằng một token mà nó tạo mỗi lần khởi động. Trong Studio, chọn {{ui:Connect an assistant}} và sao chép địa chỉ và token vào trợ lý của bạn (Studio hiển thị chính xác các thiết lập để dán). Không bao giờ chia sẻ token.

:::note
Một tab trình duyệt không thể mở kết nối cho trợ lý: trong các ứng dụng trên trình duyệt, công tắc không có tác dụng cho đến khi bạn dùng CadCraft Studio trên máy tính của bạn.
:::

## Bạn vẫn kiểm soát

- **Mọi thay đổi là một bước hoàn tác**, được đặt tên theo trợ lý (ví dụ "Trợ lý: thêm cloudrect"). {{key:Mod+Z}} thu hồi toàn bộ thay đổi gần nhất của trợ lý.
- **Bạn biết khi có kết nối.** Một nút trên thanh ứng dụng nêu tên trợ lý khi nó đang kết nối; nhấp vào để xem nó được phép làm gì, hoặc để **Ngắt kết nối**.
- **Hoạt động.** {{ui:Settings}} › {{ui:MarkupCraft}} › {{ui:Assistants}} › {{ui:Activity}} liệt kê mọi lần gọi: khi nào, công cụ nào, đã thực hiện hay bị từ chối. {{ui:Save the log}} giữ một bản sao.

## Trợ lý có thể yêu cầu gì

| Công cụ | Quyền | Nó làm gì |
|---|---|---|
| `app_info`, `sheets_list` | Đọc | Các bộ đang mở, các tờ của chúng và số đánh dấu của mỗi tờ |
| `markups_list` | Đọc | Các đánh dấu với loại, tờ, văn bản, nhận xét, số đo, trạng thái, tác giả và phản hồi, lọc theo tờ, trạng thái, loại hoặc tác giả |
| `markup_add` | Chỉnh sửa | Thêm một hình chữ nhật, đám mây, elip, hộp văn bản, ghi chú, đường thẳng hoặc mũi tên vào một tờ |
| `markup_status`, `markup_reply` | Chỉnh sửa | Đặt trạng thái của một đánh dấu (được ghi trong chuỗi, ký bởi trợ lý); thêm một nhận xét vào chuỗi |
| `markups_export` | Xuất | CSV hoặc BCF của chính danh sách {{ui:Markups}}, gồm những gì danh sách hiển thị (các bộ lọc như bạn đã đặt); trong Studio, nó có thể ghi tệp vào một thư mục bạn đã cho phép |
| `tasks_list` | Đọc | Các đánh dấu là công việc: người được giao (người hoặc trợ lý), ngày đến hạn, trạng thái, liên kết, cách nó đã đóng. `assignee: "assistant"` liệt kê công việc đang chờ trợ lý |
| `task_set`, `task_clear` | Chỉnh sửa | Biến một đánh dấu thành công việc hoặc đổi nó (tiêu đề, người được giao, hạn, trạng thái, liên kết); bỏ công việc khỏi đánh dấu |
| `tasks_check` | Chỉnh sửa | Đóng các công việc mà khu vực bản vẽ hoặc phần tử mô hình liên kết thực sự đã thay đổi; truyền các trạng thái phần tử bạn đọc được từ ứng dụng khác |
| `revisions_changes` | Đọc | Danh sách thuần túy những gì đã thay đổi giữa hai bộ bản vẽ đang mở, để bạn diễn đạt theo cách riêng |
| `pins_list`, `decision_add` | Đọc, Chỉnh sửa | Ghi chú giọng nói (độ dài, ai, khi nào, chú thích; không bao giờ là âm thanh, không có bản chép lời) và quyết định; ghim một quyết định và thay thế một quyết định trước đó |
| `redline_export`, `redline_answer` | Xuất, Chỉnh sửa | Ghi tệp redline cho người vẽ; áp dụng câu trả lời của người vẽ |

Đánh dấu do trợ lý thêm vào sẽ ghi nó là tác giả: tên mà chương trình trợ lý tự đặt cho chính nó, theo sau là "(trợ lý)", hoặc "(trợ lý của <tên của bạn>)" khi bạn đã đặt tên người xem xét. Các thay đổi trạng thái và phản hồi của nó được ký theo cách tương tự. Mỗi thay đổi là một bước hoàn tác. Việc lưu PDF đã đánh dấu vẫn do bạn quyết định: dùng {{ui:Save}} như thường lệ.

Không cần mở MarkupCraft, máy chủ CadCraft MCP liệt kê các đánh dấu của một PDF trong một thư mục bạn chỉ định (`markups_list`), và `cadcraft info Set.pdf` in chúng ra dòng lệnh.

## Nếu có gì không hoạt động

- **Trợ lý không thấy công cụ MarkupCraft nào:** kiểm tra công tắc đã bật trong cửa sổ này, và cửa sổ đang mở trong Studio.
- **"cần quyền chỉnh sửa":** chọn **Chỉnh sửa** dưới {{ui:Assistants}}, rồi hỏi lại.
- **Lỗi "401" hoặc "token":** token đã thay đổi (Studio khởi động lại, hoặc {{ui:New token}}). Sao chép token mới vào thiết lập của trợ lý.

## Xem thêm

- [Công thức cho trợ lý AI](common:assistants-recipes): các ví dụ làm mẫu, mỗi ví dụ kèm các công cụ nó gọi.
