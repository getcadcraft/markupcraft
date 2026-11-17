---
title: Sao chép một vùng của trang, hoặc một lớp phủ
summary: Sao chép một phần của tờ bằng hình chữ nhật, elip hoặc hình tự do và dán vào tờ khác, CadCraft, BimCraft, DetailCraft hoặc chương trình bất kỳ, ở kích thước thật; sao chép dưới dạng lớp phủ xuyên thấu, và căn chỉnh hình ảnh theo hai điểm.
keywords: sao chép vùng, vùng, cắt xén, chụp, ảnh chụp, clip, khu vực, hình chữ nhật, elip, vòng tròn, hình tự do, lasso, hình ảnh, ảnh, png, lớp phủ, trong suốt, xuyên thấu, nhuộm màu, độ đục, dán, kích thước thật, tỷ lệ, căn chỉnh, hai điểm, cadcraft, bimcraft, detailcraft
from: 8bdf6580
---

Chọn {{ui:Thêm}} › {{ui:Sao chép vùng của trang…}}. Một thanh mở ra phía trên tờ.

## Chọn vùng

Chọn {{ui:Hình chữ nhật}}, {{ui:Elip}} hoặc {{ui:Hình tự do}} trên thanh, rồi kéo trên tờ:

- **Hình chữ nhật:** kéo một hộp quanh phần cần sao chép.
- **Elip:** kéo một hộp; elip bên trong được sao chép và các góc bên ngoài elip là xuyên thấu.
- **Hình tự do:** vẽ quanh phần cần sao chép; hình tự động khép kín. Bên ngoài nó là xuyên thấu.

Kéo lại để bắt đầu lại, hoặc nhấn {{key:Esc}}.

## Sao chép

- {{ui:Bao gồm các đánh dấu}} sao chép các đánh dấu của bạn cùng trang; bỏ chọn để có bản vẽ sạch.
- {{ui:Độ phân giải}}: {{ui:Như trên màn hình}}, 72, 150 hoặc 300 dpi. Ảnh được giữ dưới 3 MB; khi một vùng lớn ở độ phân giải cao vượt mức đó, độ phân giải sẽ bị hạ và dòng trạng thái cho biết hạ xuống bao nhiêu.
- {{ui:Sao chép}} (hoặc {{key:Mod+C}} hoặc {{key:Enter}}) đưa vùng vào bộ nhớ tạm dưới dạng ảnh PNG, dán được vào Word, email, các chương trình PDF khác và chương trình vẽ.
- {{ui:Lưu thành PNG}} thay vào đó tải ảnh xuống, dành cho chương trình làm mất các phần xuyên thấu khi dán.

## Sao chép dưới dạng lớp phủ

{{ui:Sao chép dưới dạng lớp phủ}} còn làm cho nền giấy trắng xuyên thấu, nên chỉ còn các đường. {{ui:Màu}} đặt cho mọi đường một màu (đỏ, xanh dương, xanh lá, cam hoặc tím) để lớp phủ nổi bật so với bản vẽ bên dưới; {{ui:Màu riêng}} giữ màu gốc. {{ui:Độ đậm}} là độ đậm ban đầu khi dán trong các ứng dụng của chúng tôi (50% nếu bạn không đổi).

## Dán

**Trong MarkupCraft**, {{key:Mod+V}} trên bất kỳ tờ nào dán vùng thành một đánh dấu hình ảnh tại con trỏ. Vùng được dán ở kích thước của nó:

- trên giấy, bằng kích thước nó có trên tờ mà nó đến từ;
- khi cả hai tờ đều có tỷ lệ, bằng kích thước trong bản vẽ: một vùng từ tờ 1:50 được dán với kích thước bằng một nửa kích thước giấy trên tờ 1:100.

Một lớp phủ bắt đầu ở độ đậm của nó; đổi bằng {{ui:Độ đục}} trong {{ui:Thuộc tính}}. Di chuyển, đổi kích thước, khóa và xóa nó như mọi hình ảnh khác, và chọn {{ui:Làm phẳng vào trang khi lưu}} để vẽ nó vào trang.

**Trong CadCraft, BimCraft và DetailCraft**, bản sao cũng biết kích thước của nó, nên khi dán sẽ có kích thước thực của bản vẽ nếu tờ có tỷ lệ, hoặc hỏi tỷ lệ nếu không. Xem phần trợ giúp của từng ứng dụng về hình ảnh.

## Căn chỉnh hình ảnh theo hai điểm

Chọn một hình ảnh hoặc lớp phủ, rồi chọn {{ui:Thêm}} › {{ui:Căn chỉnh hình ảnh theo hai điểm}}:

1. Nhấp một điểm trên hình ảnh.
2. Nhấp nơi điểm đó sẽ đến.
3. Nhấp điểm thứ hai trên hình ảnh, cách xa điểm đầu.
4. Nhấp nơi điểm đó sẽ đến.

Hình ảnh được thu phóng, di chuyển và xoay để cả hai điểm rơi đúng nơi bạn đã nhấp. {{key:Esc}} dừng; {{key:Mod+Z}} hoàn tác trong một bước.

## Cần biết

- Kích thước chỉ đi theo bản sao giữa các ứng dụng của chúng tôi trên cùng một trang, và chỉ với bản sao được tạo trong vài giờ gần đây; chương trình khác nhận được một hình ảnh thông thường.
- Nếu trình duyệt không cho MarkupCraft dùng bộ nhớ tạm của hệ thống, dòng trạng thái sẽ báo: dán trong các ứng dụng của chúng tôi vẫn hoạt động, và {{ui:Lưu thành PNG}} hoạt động cho các chương trình khác.
- Căn chỉnh xoay hình ảnh bằng cách vẽ lại các điểm ảnh của nó, nên hình đã xoay sẽ hơi mờ hơn bản gốc.
