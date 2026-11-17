---
title: Dọn nét bút, và đưa nhận xét thẩm định và tiến độ công trường vào
summary: Biến nét bút tự do thành đường thẳng, vòng tròn, cung tròn và hình chữ nhật; đưa nhận xét thẩm định của gói hồ sơ cấp phép và tiến độ khảo sát của công trường vào dưới dạng ghi chú.
keywords: bút, tự do, dọn dẹp, làm thẳng, vòng tròn, đường thẳng, hình chữ nhật, cung tròn, cấp phép, nhận xét thẩm định, tiến độ, drone, quét, khảo sát, ghi chú, csv
from: 547d8e42
---

## Dọn nét bút

Vẽ bằng {{ui:Bút}}, rồi mở menu {{ui:Thêm}} trong nhóm Chỉnh sửa và chọn {{ui:Dọn nét bút}}. Mỗi nét bút được chọn trở thành đúng hình nó được định vẽ: nét thẳng thành đường thẳng (được làm nằm ngang hoặc thẳng đứng hoàn toàn khi gần như vậy), nét tròn thành elip, một phần vòng tròn thành cung tròn, nét khép kín bốn góc thành hình chữ nhật, mọi thứ khác thành đa tuyến hoặc đa giác. Các đầu mút lỏng của những nét được vẽ cùng nhau sẽ được kéo khớp vào nhau. Nếu không có nét bút nào được chọn, mọi nét bút trên tờ đang mở sẽ được dọn. Đây là một bước hoàn tác: Ctrl+Z trả lại nét tự do. Hình dạng được xác định trên máy tính của bạn theo các quy tắc cố định; không có gì được gửi đi đâu cả.

## Đưa nhận xét thẩm định vào

Gói hồ sơ xin cấp phép của BimCraft chứa `01-review-comments.csv`: các nhận xét mà người thẩm định bản vẽ có khả năng đưa ra, mỗi nhận xét kèm quy định, điều khoản, yêu cầu cần có, những gì đã tìm thấy và việc cần làm. Trong thẻ {{ui:Nhiệm vụ}}, mở {{ui:Nhận xét thẩm định cấp phép}} và chọn {{ui:Đưa nhận xét vào (CSV)}}. Mỗi nhận xét thành một ghi chú Mở trong một cột dọc bên trái tờ đang mở; kéo từng ghi chú đến vị trí nó nói đến. Chúng được tính toán từ các kiểm tra hiện có, không phải từ một người thẩm định hồ sơ.

## Đưa các hộp nút HAZOP vào

Tiện ích bổ sung P&ID của CadCraft vẽ các nút của một nghiên cứu HAZOP và có thể lưu chúng dưới dạng {{ui:Các hộp nút HAZOP}} (một tệp JSON). Mở tờ P&ID đã in tại đây, đến thẻ {{ui:Nhiệm vụ}}, mở {{ui:Các hộp nút HAZOP}} và chọn {{ui:Nhập hộp nút (JSON)}}. Mỗi nút thành một hình chữ nhật Mở trên tờ, với số, tên, thiết bị và đường ống của nó trong văn bản, và nhóm ghi các phát hiện của họ thành phản hồi trên đó. Tờ được xem là đã in ở kích thước thật từ góc dưới bên trái của bản vẽ; nếu nó được in ở tỷ lệ khác, trước tiên nhập số đó vào {{ui:Tỷ lệ in}} (0.5 cho 1:2). Nút nằm ngoài trang sẽ không được vẽ, và bảng sẽ cho biết có bao nhiêu nút. Các dấu này chỉ là công cụ hỗ trợ nghiên cứu: chúng cho biết các nút nằm ở đâu, không đánh giá nghiên cứu.

## Đưa tiến độ công trường vào

CivilCraft giữ một hàng cho mỗi chuyến bay drone hoặc lần quét công trường. Trong thẻ {{ui:Nhiệm vụ}}, mở {{ui:Tiến độ công trường}} và chọn {{ui:Đưa tiến độ vào (JSON)}}. Mỗi khảo sát thành một ghi chú trên tờ đang mở, cho biết đã hoàn thành bao nhiêu, còn lại bao nhiêu để đào hoặc đắp, phần nào bị đào quá hoặc đắp quá, và phần nào nằm ngoài mặt bằng. Khảo sát có điều gì đó nằm ngoài mặt bằng sẽ giữ trạng thái Mở; khảo sát sạch sẽ là Đã chấp nhận.
