---
title: Thay đổi đường, hình ảnh và văn bản của chính trang
summary: Di chuyển, đổi kích thước, đổi màu hoặc xóa những gì chính PDF vẽ, di chuyển điểm của một đường, thay hình ảnh, và đổi chữ của một dòng văn bản.
keywords: nội dung trang, nội dung nền, sửa pdf, sửa bản vẽ, vector, đường dẫn, hình, đường, hình ảnh, thay hình ảnh, văn bản, chữ, phông, điểm, nút, di chuyển, đổi kích thước, đổi màu, xóa, công cụ nội dung
from: 471d457e
---

Đánh dấu nằm trên tờ. Công cụ {{ui:Nội dung}} làm việc trên chính tờ: các đường, hình ảnh và dòng văn bản mà PDF vẽ. PDF trên máy tính của bạn không bao giờ bị thay đổi: các chỉnh sửa là một phần của bản sao bạn lưu.

## Chọn những gì để thay đổi

1. Chọn {{ui:Nội dung}} trong nhóm {{ui:Chọn}}, hoặc nhấn {{key:B}}.
2. Dưới {{ui:Chọn}} trong {{ui:Thuộc tính}}, bật hoặc tắt {{ui:Hình}}, {{ui:Ảnh}} và {{ui:Văn bản}}. Chỉ những loại được bật mới chọn được, nên bạn có thể chọn văn bản của một bản vẽ dày đặc mà không bắt cả đường.
3. Nhấp một thứ để chọn nó. Shift+nhấp để thêm hoặc bỏ. Kéo một khung trên giấy trống để chọn nhiều: kéo sang phải lấy những gì nằm hoàn toàn trong khung, kéo sang trái lấy những gì nó chạm vào.

Một hình nằm trong vùng bị cắt chỉ được chọn ở phần hiển thị.

## Di chuyển, đổi kích thước, đổi màu, xóa

- **Di chuyển:** kéo đối tượng đã chọn, hoặc nhấn các phím mũi tên (giữ Shift để bước lớn hơn). Giữ Shift khi kéo để di chuyển thẳng ngang hoặc thẳng đứng.
- **Đổi kích thước:** kéo một trong tám ô vuông quanh vùng chọn. Nó lớn lên hoặc nhỏ đi từ phía đối diện. Giữ Shift để giữ tỷ lệ.
- **Đổi màu:** với đường và hình, đặt {{ui:Màu nét}}, {{ui:Màu tô}} và {{ui:Độ dày nét (pt)}} trong {{ui:Thuộc tính}}.
- **Xóa:** nhấn {{key:Delete}}, hoặc chọn {{ui:Xóa khỏi trang}}.
- **Hoàn tác:** mỗi thay đổi là một bước: {{key:Mod+Z}} hoàn tác, {{key:Mod+Y}} làm lại.

{{ui:Đặt lại như cũ}} hoàn tác mọi thay đổi trên các đối tượng đã chọn cùng lúc; {{ui:Đặt lại trang này như cũ}} làm điều đó cho cả trang.

## Sao chép, cắt và dán nội dung trang

Chọn đường, hình ảnh hoặc văn bản bằng công cụ {{ui:Nội dung}}, rồi:

- {{key:Mod+C}} sao chép, {{key:Mod+X}} cắt (sao chép và lấy chúng ra khỏi trang), {{key:Mod+D}} đặt một bản sao cạnh chúng.
- {{key:Mod+V}} dán như nội dung trang, cạnh bản gốc hoặc tại vị trí con trỏ (như [Cài đặt](topic:settings) mô tả); {{key:Mod+Shift+V}} dán đúng vị trí cũ. Dán được trên trang khác, trong PDF khác đang mở, hoặc trong một thẻ MarkupCraft khác của trình duyệt này.
- Menu của nhóm {{ui:Chỉnh sửa}} và menu chuột phải có cùng các lệnh.

Dán giữ đường là đường, văn bản là văn bản với phông riêng, và hình ảnh là hình ảnh. Nó là một khối: di chuyển, đổi kích thước bằng các ô vuông, xóa, hoặc {{key:Mod+Z}} để bỏ. Nó trở thành một phần của trang trong bản sao bạn lưu. Thứ bạn sao chép sau cùng, đánh dấu hay nội dung trang, là thứ {{key:Mod+V}} dán.

Nội dung được sao chép được cắt theo khung bao quanh vùng chọn: thứ MarkupCraft không thể lấy ra khỏi bản sao (xem bên dưới) và nằm trong khung đó sẽ đi cùng.

## Di chuyển điểm của đường

Nhấp đúp một đường hoặc đường cong (hoặc chọn nó và chọn {{ui:Sửa điểm}}). Các điểm của nó hiển thị dưới dạng ô vuông, và các tay nắm đường cong dưới dạng hình tròn. Kéo một điểm hoặc tay nắm; một điểm kéo theo các tay nắm bên cạnh nó, nên đường cong giữ được hình dạng quanh nó. Nhấn {{key:Esc}}, hoặc nhấp ra khỏi đường, khi bạn xong.

Hình chữ nhật không có điểm để kéo: đổi kích thước chúng bằng các ô vuông quanh chúng.

## Thay hình ảnh

Chọn một hình ảnh và chọn {{ui:Thay hình ảnh…}}, rồi chọn một tệp PNG, JPEG hoặc SVG (hoặc PDF: trang đầu của nó). Hình mới lấp vào chỗ hình cũ, giữ tỷ lệ riêng của nó.

## Đổi chữ của một dòng văn bản

Nhấp đúp một dòng văn bản, gõ chữ mới vào {{ui:Chữ}} và nhấn {{key:Enter}}. Chữ được viết bằng phông và cỡ của dòng, và dòng giữ nguyên độ dài, nên văn bản sau nó không bị dịch chuyển.

:::note
Hầu hết PDF chỉ mang các chữ cái mà chúng dùng từ mỗi phông. Khi bạn gõ một chữ cái mà bản phông trong tệp không có, MarkupCraft in chữ đó bằng Helvetica và cho biết điều đó. {{ui:Thuộc tính}} hiển thị các chữ cái mà phông trong tệp có.
:::

Văn bản được đổi từng dòng một; nó không chảy sang dòng kế tiếp.

## Những gì MarkupCraft để nguyên

- **Trang quét** là một hình ảnh: bạn có thể di chuyển, đổi kích thước, thay hoặc xóa hình ảnh, nhưng nội dung bên trong không thể sửa.
- **PDF mã hóa và đã ký:** đổi trang sẽ làm hỏng chữ ký, nên công cụ {{ui:Nội dung}} cho biết và không thay đổi gì. Đánh dấu vẫn hoạt động.
- **Vùng cắt**, đối tượng bị tách giữa hai phần nội dung của trang, và pha trộn màu lấp đầy cả vùng vẫn giữ nguyên; MarkupCraft nói lý do khi bạn thử.
- **Chữ với phông chuẩn mà PDF không mô tả** (như phông Times không có độ rộng chữ trong tệp) không thể đổi, vì MarkupCraft không giữ được khoảng cách dòng. Dòng vẫn có thể di chuyển.

## Đưa đánh dấu vào trang

Đường, hình chữ nhật, hình elip, đa tuyến, đám mây và nét bút mà bạn vẽ như đánh dấu có thể trở thành một phần của chính trang: chọn chúng và chọn {{ui:Đưa vào trang}} trong {{ui:Thuộc tính}}. Văn bản, con dấu, hình ảnh và màu trong suốt vẫn là đánh dấu.
