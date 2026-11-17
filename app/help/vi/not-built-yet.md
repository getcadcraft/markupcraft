---
title: Những gì chưa xây dựng
summary: Những gì bản MarkupCraft này chưa làm được, và hiện nay nên làm gì thay thế.
keywords: thiếu, lộ trình, dự kiến, giới hạn, không hỗ trợ, sắp có, yêu cầu tính năng, phiên, đám mây, chữ ký số, liên kết web
from: 0872fede
---

MarkupCraft đang được phát triển. Đây là những gì bản hiện tại **không** làm được, để bạn lên kế hoạch xung quanh. Nội dung này mô tả bản hiện tại, không phải cam kết.

## Làm việc với người khác

| Chưa xây dựng | Làm gì hiện nay |
|---|---|
| Lưu và đồng bộ đám mây giữa các máy tính | Giữ các PDF cùng với tệp dự án. Chưa có lưu đám mây. |
| Gộp hai bản sao đánh dấu của hai người | Chia các tờ cho người xem, hoặc sao chép một vài đánh dấu bằng {{key:Mod+C}} và {{key:Mod+V}}. RFI, submittal và nhật ký hằng ngày có gộp được: xem [Theo dõi RFI, submittal và nhật ký hằng ngày](topic:field-records). |
| Nhóm, thông báo và dự án đám mây cho RFI và submittal | Chuyển tiếp PDF và dùng {{ui:Gộp}} để gom các bản sao lại. |
| RFI, submittal và nhật ký hằng ngày trong phiên Live | Mỗi người làm việc trên bản sao của riêng mình; gom các bản sao lại bằng {{ui:Gộp}}. |
| Gộp thay đổi của hai người ở các trường khác nhau của cùng một bản ghi | Bản sao được chỉnh sửa sau cùng sẽ thắng cả bản ghi đó (chuỗi phản hồi và tên tệp đính kèm được nối lại). Thống nhất ai sửa bản ghi nào. |
| Công cụ trợ lý cho RFI, submittal và nhật ký hằng ngày | Làm việc với chúng trong thẻ {{ui:Hiện trường}}. Trợ lý có thể làm việc với đánh dấu: xem [Dùng MarkupCraft với trợ lý AI](topic:use-with-ai-assistants). |
| Sửa hoặc xóa phản hồi sau khi đã gửi | Hoàn tác ngay, hoặc thêm một phản hồi chỉnh sửa. |
| Đổi người tạo đánh dấu | Đặt tên của bạn trước khi bắt đầu. |

## Đánh dấu

| Chưa xây dựng | Làm gì hiện nay |
|---|---|
| Con dấu có ô điền, chữ ký số có chứng nhận | Dùng con dấu văn bản tùy chỉnh, có tên và ngày của bạn, hoặc một hình ảnh chữ ký của bạn. |
| Đính kèm tệp khác ngoài ảnh (tài liệu, video) | Giữ chúng cạnh PDF và nhắc đến trong nhận xét. |
| Liên kết đến trang web hoặc tệp chưa mở | Ghi địa chỉ hoặc tên tệp vào nhận xét. |
| Bộ trạng thái tùy chỉnh | Dùng bốn trạng thái, và chủ đề cho mọi việc khác. |
| Sửa nhận xét đi kèm tệp ở chế độ chỉ đọc (tô sáng văn bản, con dấu của chương trình khác) | Trả lời chúng, hoặc vẽ một đánh dấu MarkupCraft cạnh chúng. |
| Nét bút nhạy áp lực | Đặt độ dày nét. |

## Nội dung của chính trang

| Chưa xây dựng | Làm gì hiện nay |
|---|---|
| Vẽ hình mới trực tiếp lên trang | Vẽ chúng như đánh dấu, rồi dùng {{ui:Đưa vào trang}}. Xem [Thay đổi nội dung của chính trang](topic:page-content). |
| Xoay đối tượng trên trang theo góc bất kỳ | Di chuyển và đổi kích thước chúng; xoay cả trang bằng {{ui:Trang}}. |
| Đổi phông hoặc cỡ chữ của một dòng văn bản, hoặc văn bản chảy qua nhiều dòng | Đổi từng dòng một; để có chữ mới với phông khác, thêm một đánh dấu văn bản. |
| Sửa nội dung bên trong hình ảnh quét | Thay hình ảnh, hoặc đánh dấu lên nó. |
| Sửa PDF đã mã hóa hoặc đã ký | Yêu cầu một bản chưa ký; đánh dấu hoạt động trên mọi PDF. |

## Đo lường

| Chưa xây dựng | Làm gì hiện nay |
|---|---|
| Đo bán kính | Vẽ một {{ui:Cung tròn}} dọc theo nó, hoặc đo {{ui:Chiều dài}} qua đường kính rồi chia đôi. |
| Sửa góc của lỗ khoét | Xóa các lỗ khoét và vẽ lại. |
| Áp một tỷ lệ cho nhiều tờ cùng lúc | Hiệu chuẩn từng tờ; chọn một mức cài sẵn mất vài giây cho mỗi tờ. |
| Nhiều tỷ lệ trên một tờ (khung nhìn) | Hiệu chuẩn theo bản vẽ bạn đo nhiều nhất. Đổi tỷ lệ của tờ sẽ đo lại mọi thứ trên đó, nên hãy ghi lại các giá trị chi tiết trước khi hiệu chuẩn lại. |
| Bắt điểm vào đường trong bản vẽ | Phóng to trước khi nhấp, hoặc gõ chiều dài và góc (xem [Phác thảo theo tỷ lệ](topic:calibrate-and-measure#sketch-to-scale)). |
| Bóc tách khối lượng đầy đủ với hạng mục, định mức và đơn giá | Dùng TakeoffCraft, ứng dụng bóc tách khối lượng của họ CadCraft. |

## Tờ và tệp

| Chưa xây dựng | Làm gì hiện nay |
|---|---|
| Hoàn tác thay đổi trang (xoay, di chuyển, chèn, xóa) | Đóng mà không lưu rồi mở lại PDF gốc. Xem [In, và thay đổi các trang](topic:pages-and-printing). |
| Đóng một tệp của bộ | {{ui:Đóng}} đóng cả bộ; mở lại các tệp bạn cần. |
| Lưu bộ thành dự án để mở lại chỉ trong một bước | Mở lại các PDF đó. |
| In theo tỷ lệ đã chọn, hoặc nhiều tờ trên một tờ giấy | Dùng hộp thoại in của trình duyệt, hoặc in bản đã lưu từ một trình xem PDF khác. |

## Danh sách và xuất

| Chưa xây dựng | Làm gì hiện nay |
|---|---|
| Đặt các vấn đề BCF đã nhập vào đúng vị trí mô hình | Các vấn đề đã nhập không gắn với tờ nào sẽ được xếp chồng ở góc trên bên trái: hãy di chuyển chúng. |
| Nhập bộ công cụ từ các chương trình đánh dấu khác | Dựng lại các công cụ bạn cần và lưu vào hộp dụng cụ; xuất hộp để dùng cho văn phòng. |

## So sánh

| Chưa xây dựng | Làm gì hiện nay |
|---|---|
| So sánh văn bản đặt bằng phông, hoặc danh sách những gì đã thay đổi | Dùng lớp phủ và thanh trượt, hoặc {{ui:Các đường đã thay đổi}} cho các đường đã vẽ. |
| So sánh các tờ quét theo đường nét | Dùng lớp phủ hình ảnh. |
| Tự động căn chỉnh mọi cặp khi so sánh cả bộ | So sánh riêng một cặp bị lệch và dùng {{ui:Căn bằng hai điểm}}. |

## Bảng điều khiển

| Chưa xây dựng | Làm gì hiện nay |
|---|---|
| Di chuyển thanh công cụ hoặc thanh trạng thái | Chỉ hai bảng bên cạnh di chuyển được. |

## Nền tảng

- **Máy tính để bàn:** MarkupCraft chạy trong trình duyệt trên Mac, Windows, Linux và iPad, và trong CadCraft Studio, ứng dụng máy tính để bàn với cả tám ứng dụng trong một lần cài đặt.
- MarkupCraft đang được phát triển. Nhãn và hành vi có thể còn thay đổi, và trợ giúp này sẽ thay đổi theo.
