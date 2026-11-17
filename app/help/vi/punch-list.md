---
title: Lập danh sách hạng mục tồn đọng
summary: Biến đánh dấu thành các hạng mục punch có số, có người được giao, hạn chót và trạng thái, rồi xuất danh sách.
keywords: punch list, punch, danh sách lỗi, khiếm khuyết, vấn đề hiện trường, quan sát, giao việc, người được giao, hạn chót, nghiệm thu, đi kiểm tra, số
from: b98b38e6
---

Một hạng mục punch là một đánh dấu có số, người được giao, hạn chót và trạng thái hạng mục. Số được vẽ trên tờ cạnh đánh dấu, nên tờ in và danh sách khớp nhau.

## Thêm hạng mục

1. Đánh dấu từng vấn đề trên các tờ: một đám mây, một chú thích, một ghi chú, bất cứ thứ gì.
2. Chọn một hoặc nhiều trong số đó (xem [Chọn, di chuyển và đổi đánh dấu](topic:select-and-edit)).
3. Mở thẻ {{ui:Danh sách hạng mục tồn đọng}} và chọn {{ui:Thêm mục đã chọn vào danh sách hạng mục tồn đọng}}, hoặc chọn {{ui:Thêm vào danh sách hạng mục tồn đọng}} trong {{ui:Thuộc tính}}.

Kết quả: mỗi đánh dấu nhận số tiếp theo (1, 2, 3…), theo thứ tự tờ rồi theo thứ tự chúng được vẽ. Một huy hiệu có số xuất hiện trên tờ, và thanh trạng thái hiển thị "Đã thêm 3 hạng mục vào danh sách hạng mục tồn đọng." Đánh dấu đã có số, và nhận xét chỉ đọc, sẽ bị bỏ qua.

## Điền chi tiết

Trong thẻ {{ui:Danh sách hạng mục tồn đọng}}, mỗi hạng mục hiển thị số, chủ đề, nội dung, tờ và trạng thái, với ba ô bên dưới. Cùng các ô đó cũng có trong {{ui:Thuộc tính}} dưới "Danh sách hạng mục tồn đọng" khi đánh dấu được chọn:

- {{ui:Người được giao}}: tên hoặc nghề, dạng văn bản tự do.
- {{ui:Hạn}}: một ngày, chọn từ bộ chọn ngày.
- {{ui:Trạng thái mục}}: Mở, Đang thực hiện, Sẵn sàng để xem xét hoặc Đã đóng.

Nhấp tiêu đề của một hạng mục để chuyển đến nó trên tờ.

Trạng thái hạng mục tách biệt với trạng thái xem xét của đánh dấu (Mở, Đã chấp nhận, Đã từ chối, Đã hoàn thành). Dùng trạng thái hạng mục cho công việc, và trạng thái xem xét cho nhận xét.

## Gỡ một hạng mục

Chọn đánh dấu và chọn {{ui:Gỡ khỏi danh sách hạng mục tồn đọng}} trong {{ui:Thuộc tính}}. Đánh dấu vẫn còn; chỉ số bị bỏ. Khi bộ đang mở, số không được tái sử dụng: hạng mục tiếp theo vẫn nhận số mới kế tiếp, nên một khoảng trống có nghĩa là một hạng mục đã bị gỡ. Khi tệp được mở lại, việc đánh số tiếp tục sau số cao nhất trong đó.

## Xuất danh sách

Chọn {{ui:Xuất CSV}} trong thẻ {{ui:Danh sách hạng mục tồn đọng}}. Bạn nhận được "<name> punch list.csv" với các cột No., Sheet, File, Page, Item, Comment, Assignee, Due, Status, Markup status, Author và Created, theo thứ tự số. Mở bằng bất kỳ bảng tính nào.

Số hạng mục, người được giao, hạn và trạng thái hạng mục cũng được lưu bên trong PDF đã đánh dấu, nên chúng quay lại khi bạn mở lại. Các trình xem PDF khác hiển thị huy hiệu số như một phần của đánh dấu. Xuất BCF của danh sách đánh dấu cũng mang theo người được giao và hạn (xem [Kiến thức cơ bản về BCF](topic:bcf-basics)).

## Tại công trường với máy tính bảng

Mở bộ trên iPad, đi khảo sát công trình, và thả một {{ui:Ghi chú}} hoặc vẽ một {{ui:Đám mây}} tại mỗi vấn đề. Thêm chúng vào danh sách hạng mục tồn đọng khi đi, và lưu trước khi rời đi. Xem [Xem xét trên iPad hoặc màn hình cảm ứng](topic:review-on-a-tablet).

Danh sách hạng mục tồn đọng dạng báo cáo PDF hoặc bảng tính đã định dạng, và ảnh đính kèm vào các hạng mục, chưa được xây dựng.
