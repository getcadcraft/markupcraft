---
title: Liệt kê những thay đổi giữa các bản sửa đổi
summary: So sánh hai bộ bản vẽ và nhận danh sách rõ ràng, tờ theo tờ, cho biết nét vẽ và chữ đã thay đổi ở đâu, sẵn sàng để đọc, sao chép hoặc gửi cho trợ lý của bạn.
keywords: những thay đổi, thay đổi, danh sách sửa đổi, danh sách so sánh, danh sách rõ ràng, diễn giải, trợ lý, delta, tóm tắt sửa đổi
from: bab93d2e
---

Các công cụ so sánh hiển thị thay đổi trên tờ. Chức năng này ghi chúng thành danh sách.

1. Mở cả hai bản sửa đổi (xem [Mở một bộ bản vẽ](topic:open-a-plan-set)).
2. Mở thẻ {{ui:Compare}}, sau đó chọn {{ui:So sánh cả bộ bản vẽ}}.
3. Chọn tệp cũ hơn và tệp mới hơn, rồi chọn {{ui:Liệt kê các thay đổi}}.

Danh sách bắt đầu bằng một số đếm ("2 trong số 14 tờ khớp đã thay đổi; 1 tờ mới; 1 tờ bị bỏ") rồi liệt kê từng tờ đã thay đổi, thay đổi lớn nhất đứng trước: vị trí trên tờ (góc trên bên trái, giữa…), kích thước, nét vẽ được thêm, bị xóa hay cả hai, có bao nhiêu đánh dấu nằm ở đó, và những chữ nào xuất hiện hoặc biến mất. Với tờ đã hiệu chuẩn, kích thước còn được hiển thị bằng đơn vị thực tế cùng với inch trên giấy.

Danh sách chỉ nói những gì có trên trang; không nói ý nghĩa của chúng. Một đường vẽ di chuyển có thể là tường hoặc đường dẫn. Trợ lý đã kết nối của bạn có thể đọc danh sách bằng công cụ `revisions_changes` và diễn giải bằng lời, còn phần còn lại bạn xem trực tiếp trên tờ. {{ui:Sao chép danh sách}} đưa danh sách vào bộ nhớ tạm, và {{ui:CSV}} ghi mỗi thay đổi thành một hàng.

Các tờ được ghép cặp theo số tờ, như trong [Đánh tờ thay thế cho bộ đã sửa](topic:slip-sheet-a-revised-set). Thay đổi nhỏ hơn vài point bị bỏ qua, và chữ nằm trong hình ảnh (bản quét) không có từ để so sánh.
