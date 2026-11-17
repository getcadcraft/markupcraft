---
title: Chèn tờ phân cách cho bộ đã sửa đổi
summary: Mở bản phát hành mới của bộ bản vẽ cạnh bộ cũ và chuyển mọi đánh dấu đang mở sang tờ có cùng số.
keywords: tờ phân cách, chèn tờ phân cách, bộ đã sửa đổi, bản phát hành mới, sửa đổi, thay thế, đã thay thế, chuyển tiếp, thay thế tờ, phát hành lại, phụ lục, thông báo
from: e15163a0
---

Khi một bản phát hành mới của bản vẽ đến, chèn tờ phân cách sẽ chuyển việc duyệt của bạn sang bản đó: mỗi tờ mới nhận đánh dấu của tờ cũ có cùng số, và tờ cũ được đóng dấu "Đã thay thế".

## Chèn tờ phân cách

1. Mở bộ hiện tại, với đánh dấu của bạn.
2. Chọn {{ui:Trang}}, rồi {{ui:Chèn tờ phân cách cho bộ đã sửa đổi…}}, và chọn các PDF mới. Chúng mở cạnh bộ cũ.
3. Hộp thoại liệt kê mỗi tờ mới và tờ cũ mà nó thay thế. Bỏ chọn một dòng để giữ đánh dấu của tờ đó ở nguyên vị trí. Các tờ có số mới không có gì để chuyển.
4. Chọn có giữ các đánh dấu đã đóng (Đã chấp nhận, Đã từ chối, Đã hoàn thành) trên các tờ cũ hay không, và có đóng dấu các tờ cũ hay không.
5. Chọn {{ui:Chuyển tiếp đánh dấu}}.

Kết quả: các đánh dấu xuất hiện trên tờ mới ở cùng vị trí, với phản hồi, trạng thái và tác giả của chúng. Mục punch chuyển sang tờ mới và giữ số của nó. Các tờ cũ giữ đánh dấu như một bản ghi, dưới con dấu "Đã thay thế" màu đỏ. Thanh trạng thái tóm tắt những gì đã chuyển.

{{ui:Chỉ mở các tệp}} mở bộ mới mà không chuyển gì, ví dụ để so sánh trước. Xem [So sánh hai bản sửa đổi](topic:compare-revisions).

## Cách tờ được khớp

- **Theo số tờ**, đọc như danh sách tờ hiển thị: số bạn đã gõ bằng {{ui:Đổi tên tờ}}, nhãn trang của PDF, hoặc khung tên. Chữ hoa, khoảng trắng, dấu chấm và gạch ngang không quan trọng: "A-101" khớp với "a101".
- Nếu hai tệp đang mở có tờ với số đó, tờ mới nhất sẽ bị thay, nên bạn có thể chèn tờ phân cách từng bản phát hành một.
- **Bộ quét** không có số để đọc. Khi tệp mới không có số, các trang của nó được khớp theo thứ tự trang với một tệp đang mở có cùng số trang. Kiểm tra những dòng đó trước khi chuyển.

## Lưu ý

- Một lần {{key:Mod+Z}} hoàn tác toàn bộ việc chèn tờ phân cách: các bản sao, các con dấu và các mục punch đã chuyển. Các tệp mới vẫn mở.
- Nếu tờ mới có kích thước khác, đánh dấu được co giãn theo trang, và thanh trạng thái cho biết có bao nhiêu cái cần kiểm tra.
- Tỷ lệ của tờ cũ đi theo khi tờ mới cùng kích thước và chưa có tỷ lệ.
- Nhận xét do chương trình khác tạo vẫn ở trên các tờ cũ: chúng chỉ đọc ở đây.
- Lưu các tệp mới để giữ đánh dấu đã chuyển. Xem [Lưu PDF đã đánh dấu](topic:save-the-marked-up-pdf).
