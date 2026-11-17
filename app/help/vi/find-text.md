---
title: Tìm văn bản trong bản vẽ
summary: Tìm các từ trên mọi tờ, nhảy đến từng kết quả, và khoanh tất cả chúng chỉ trong một bước.
keywords: tìm, tìm kiếm, văn bản, từ, từ khóa, ctrl f, tìm chữ, ghi chú, ghi chú chính, chú thích, khoanh tất cả, tô sáng kết quả, ocr, quét, bản quét, đọc văn bản, chọn văn bản, sao chép văn bản, tesseract
from: 3435c9eb
---

{{ui:Find text}}, ở đầu bảng {{ui:Sheets}}, tìm các từ được vẽ trên chính các tờ. {{ui:Search sheets}} ở bên dưới chỉ tìm tên tờ.

## Tìm

1. Nhấn {{key:Mod+F}}, hoặc mở {{ui:Find text}}.
2. Nhập các từ, chẳng hạn `hood` hoặc `verify in field`.
3. Chọn {{ui:All sheets}} hoặc {{ui:This sheet}}, và đánh dấu {{ui:Match case}} hoặc {{ui:Whole words}} nếu bạn cần.
4. Nhấn {{key:Enter}} hoặc chọn {{ui:Find}}.

Kết quả: mọi kết quả được liệt kê cùng số tờ và các từ xung quanh, và được tô vàng trên tờ của nó. Chọn một kết quả để mở tờ và phóng to đến đó.

Một cụm từ vẫn được tìm thấy ngay cả khi bản vẽ tách nó thành hai đoạn văn bản hoặc hai dòng.

## Khoanh mọi kết quả

Chọn {{ui:Cloud all}}. Một đám mây sửa đổi bao quanh mỗi kết quả trong danh sách, trên mọi tờ, với "Tìm thấy: <từ bạn nhập>" làm chú thích. Một lần {{key:Mod+Z}} sẽ xóa tất cả.

## Đọc văn bản trên bản quét (OCR)

Tờ quét chỉ là một hình ảnh: cho đến khi các từ của nó được đọc, không có gì để tìm. Khi số đếm cho biết có tờ không có văn bản, chọn {{ui:Read text (OCR)…}} bên dưới, hoặc {{ui:Pages}} › {{ui:Read text (OCR)…}}.

1. Chọn các trang: tờ này, mọi trang của tệp, hoặc mọi trang của mọi tệp đang mở.
2. Chọn ngôn ngữ của văn bản. {{ui:Also English}} cũng đọc các từ tiếng Anh.
3. Chọn {{ui:Read text}}. Một thanh hiển thị trang đang được đọc; {{ui:Stop}} kết thúc việc đọc và giữ lại các trang đã đọc.

Kết quả: các từ có thể được tìm, chọn và sao chép như mọi văn bản khác. Mọi việc chạy trên máy tính của bạn: không có gì được gửi đi đâu cả. Nó hoạt động không cần kết nối trong Studio, và trên trình duyệt sau khi ứng dụng được lưu để dùng ngoại tuyến (tiếng Anh và ngôn ngữ giao diện của bạn) hoặc khi một ngôn ngữ đã được dùng một lần. Các trang đã có văn bản được giữ nguyên.

Khi bạn lưu, các từ được đưa vào PDF dưới dạng văn bản vô hình nằm sau hình ảnh, tách biệt với các đánh dấu của bạn, để các chương trình PDF khác cũng có thể tìm và sao chép chúng. Cho đến khi bạn lưu, tệp hiển thị là chưa lưu.

## Chọn và sao chép văn bản

Chọn {{ui:More}} › {{ui:Select text to copy}}. Kéo từ một từ đến một từ khác để chọn các từ nằm giữa chúng, kéo từ vùng trống của trang để chọn các từ trong một hộp, hoặc nhấp đúp vào một từ. {{key:Mod+A}} chọn mọi từ trên tờ. {{key:Mod+C}} sao chép chúng và giữ nguyên các dòng. Bất kỳ công cụ nào khác sẽ kết thúc chế độ này.

## Cần biết

- Bản vẽ có chữ được vẽ bằng đường nét cũng không có văn bản; đọc chúng như hình ảnh hoạt động tốt nhất với văn bản in như sách quét hoặc bản đặc tả.
- Bộ đọc là Tesseract, được tích hợp sẵn trong ứng dụng cùng dữ liệu ngôn ngữ cho tiếng Anh và các ngôn ngữ của ứng dụng. Lần chạy đầu tiên sẽ tải nó (khoảng 6 MB, nhiều hơn nếu thêm ngôn ngữ thứ hai).
- Mức độ đọc chính xác phụ thuộc vào bản quét: trang rõ ở 300 dpi được đọc gần như đúng từng từ; bản quét cũ, mờ hoặc độ phân giải thấp sẽ bỏ sót nhiều từ hơn.
- Danh sách hiển thị 500 kết quả đầu tiên; Khoanh tất cả khoanh tối đa 2.000.
- Các kết quả bị xóa khi bạn đóng bộ tìm kiếm, và với một tệp khi bạn đổi các trang của tệp đó.
