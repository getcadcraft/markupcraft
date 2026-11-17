---
title: Gộp chỉnh sửa của hai người trên một tệp PDF
summary: Cho phép git, Fossil hoặc Mercurial gộp hai bản PDF đã đánh dấu của cùng một tệp theo từng đánh dấu, kể cả ghi chú.
keywords: gộp, git, fossil, mercurial, kiểm soát phiên bản, xung đột, ba chiều, cadcraft merge, gitattributes, đánh dấu, ghi chú, nhóm, hai bản
from: a450a9ef
---

Hai người đánh dấu cùng một PDF trong hai bản sao. Nếu họ chạm vào các đánh dấu khác nhau, hai bản có thể được gộp bằng một chương trình thay vì bằng tay.

## Điều gì làm cho nó hoạt động

Mọi đánh dấu mà MarkupCraft lưu đều mang tên riêng của nó (mã định danh) bên trong PDF, và tên này không bao giờ thay đổi. Việc gộp tìm đánh dấu theo tên đó, không theo vị trí của nó trong tệp, vì mọi chương trình đều đánh số lại vị trí khi lưu. Ghi chú và ghi chú riêng đã niêm phong được khớp theo cùng cách.

Các tờ không bao giờ bị động tới: hai bản phải có cùng số trang. Nếu khác nhau, việc gộp giữ nguyên bản của bạn và thông báo điều đó, vì thêm hoặc bớt trang là việc của con người.

## Thiết lập

Git cần hai dòng, một lần cho mỗi kho lưu trữ:

```
# .gitattributes
*.pdf merge=cadcraft

# một lần, trên mỗi máy tính
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Nếu không dùng git, chạy `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil và Mercurial nhận cùng ba tệp đó trong thiết lập công cụ gộp riêng của chúng. Tệp nhiệm vụ đi kèm bản vẽ (`<name>.markups.json`, xem [Biến đánh dấu thành nhiệm vụ](topic:markups-that-act)) được gộp theo cách tương tự, dưới dạng văn bản thuần.

## Quy tắc

- Đánh dấu chỉ đổi ở một bên thì được lấy. Cùng một thay đổi ở cả hai bên chỉ được lấy một lần.
- Một đánh dấu bị đổi theo hai cách khác nhau là một **xung đột**: bên của bạn được giữ và báo cáo liệt kê cả hai. Mở kết quả và sửa đánh dấu đó bằng tay.
- Đánh dấu được thêm ở bên nào cũng được giữ. Đánh dấu bị xóa ở một bên và không đổi ở bên kia thì bị xóa. Bị xóa ở một bên và đổi ở bên kia: bị xóa, và được báo cáo.
- Lớp, cột, bản ghi và ghi chú theo cùng các quy tắc.
- Ghi chú riêng đã niêm phong không bao giờ được mở: các khối của cả hai bên được giữ nguyên.

Tệp đã gộp là một bản ghi lại đầy đủ bản sao của bạn, giống như Lưu của chính MarkupCraft. Không có gì được tải lên; mọi thứ chạy trên máy tính của bạn.
