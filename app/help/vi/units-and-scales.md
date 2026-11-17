---
title: Đơn vị, độ dài và tỷ lệ
summary: Mọi cách gõ một độ dài, các đơn vị mà độ dài và diện tích được hiển thị, cách làm tròn, và danh sách tỷ lệ đặt sẵn.
keywords: đơn vị, feet, inch, feet và inch, hệ mét, mét, milimét, centimét, tỷ lệ, đặt sẵn, tỷ lệ kiến trúc, tỷ lệ kỹ thuật, tỷ số, feet vuông, làm tròn, phân số
from: 574b0291
---

## Gõ một độ dài

Khi hiệu chuẩn từ hai điểm, bạn gõ khoảng cách thực. MarkupCraft đọc tất cả các cách sau:

| Bạn gõ | Nghĩa là |
|---|---|
| `24'-0"` | 24 feet |
| `12' 6 1/2"` hoặc `12'-6 1/2"` | 12 feet 6½ inch |
| `12' 6` | 12 feet 6 inch (bỏ dấu inch) |
| `6"` hoặc `1/2"` | inch |
| `12.5'` hoặc `12.5 ft` | 12½ feet |
| `3 ft 6 in` | 3 feet 6 inch (cũng nhận feet, foot, inch, inches) |
| `3.5 m`, `90 cm`, `900 mm` | hệ mét (cũng nhận meter, metre, millimeter, centimetre…) |
| `24` | một số không kèm đơn vị, theo đơn vị chọn trong {{ui:Show lengths in}} |

Dấu nháy cong (’ ”) và hai dấu nháy đơn ('') để chỉ inch cũng được dùng. Độ dài bằng không hoặc âm sẽ bị từ chối.

:::warning
Dấu phẩy được đọc là dấu thập phân: `1,5 m` là 1.5 mét. Không gõ dấu phân cách hàng nghìn: `1,200 mm` được đọc là 1.2 milimét. Gõ `1200 mm`.
:::

## Cách độ dài và diện tích được hiển thị

| {{ui:Show lengths in}} | Một độ dài hiển thị là | Một diện tích hiển thị là |
|---|---|---|
| {{ui:Feet and inches}} | `12'-6 1/2"`, làm tròn đến 1/16" | feet vuông, hai chữ số thập phân |
| {{ui:Decimal feet}} | `12.54'`, hai chữ số thập phân | feet vuông, hai chữ số thập phân |
| {{ui:Inches}} | `150.5"`, tối đa hai chữ số thập phân | inch vuông, một chữ số thập phân |
| {{ui:Meters}} | `3.820 m`, ba chữ số thập phân | mét vuông, ba chữ số thập phân |
| {{ui:Millimeters}} | `3820 mm`, số milimét nguyên | milimét vuông, số nguyên |

Chu vi của một vùng dùng định dạng độ dài.

## Tỷ lệ đặt sẵn

Các tỷ lệ đặt sẵn giả định PDF ở kích thước in đầy đủ: 72 điểm PDF trên một inch, như một chương trình CAD in nó.

| Nhóm | Tỷ lệ | Độ dài hiển thị theo |
|---|---|---|
| Kiến trúc | 1/32" = 1'-0", 1/16", 3/32", 1/8", 3/16", 1/4", 3/8", 1/2", 3/4", 1", 1 1/2", 3" = 1'-0" | Feet và inch |
| Kỹ thuật | 1" = 10', 20', 30', 40', 50', 60', 100' | Feet thập phân |
| Hệ mét | 1:1, 1:5, 1:10, 1:20, 1:25, 1:50 | Milimét |
| Hệ mét | 1:100, 1:200, 1:250, 1:500, 1:1000 | Mét |

Để dùng tỷ lệ đặt sẵn nhưng xem độ dài bằng đơn vị khác, thay vào đó hiệu chuẩn từ hai điểm và chọn đơn vị ở đó.

## Tỷ lệ do chương trình khác lưu

Khi một PDF đã mang sẵn tỷ lệ cho một trang từ chương trình khác (một tỷ lệ đo được lưu trên trang), MarkupCraft dùng nó nếu nó ở đơn vị feet, inch, mét, centimét hoặc milimét. Nhãn của nó được hiển thị như tệp ghi.

## Vị trí trên giấy

Thanh trạng thái hiển thị vị trí con trỏ trên giấy, tính bằng inch từ góc trên bên trái của tờ, bất kể tỷ lệ của tờ. Các bước nhích của Compare được tính bằng điểm (72 điểm trên một inch).

## Độ chính xác

Một phép đo chỉ tốt bằng việc hiệu chuẩn và các lần nhấp của bạn. Hiệu chuẩn trên kích thước đã biết dài nhất bạn tìm được, phóng to để nhấp vào các đầu của nó, rồi kiểm tra một kích thước khác. Một PDF đã được thu tỷ lệ khi tạo (bản in "vừa trang" hoặc bộ nửa kích thước) vẫn chính xác sau khi hiệu chuẩn từ một kích thước, nhưng không chính xác khi dùng tỷ lệ đặt sẵn.
