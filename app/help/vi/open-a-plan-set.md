---
title: Mở bộ bản vẽ và di chuyển giữa các tờ
summary: Mở một PDF hoặc nhiều PDF, hoặc bắt đầu với các trang trắng, tìm tờ theo số hoặc tên, thu phóng và di chuyển khung nhìn, và đổi tên tờ khi tệp đặt tên sai.
keywords: mở, mới, trang trắng, tờ trắng, phác thảo, lưới, không tên, bộ bản vẽ, tờ, trang, ảnh thu nhỏ, nhãn trang, số tờ, khung tên, đổi tên, điều hướng, thu phóng, di chuyển khung nhìn, vừa khung, tìm tờ
from: 1e7f4d50
---

## Mở bộ

1. Chọn {{ui:Mở}} trên thanh công cụ, hoặc nhấn {{key:Mod+O}}.
2. Trong hộp chọn tệp, chọn mọi PDF của bộ ({{pick:mac=giữ ⌘ và nhấn từng tệp|windows linux=giữ Ctrl và nhấn từng tệp}}, hoặc chọn một dãy bằng Shift), rồi xác nhận.
   Hoặc kéo các tệp từ {{pick:mac=Finder|windows=File Explorer|linux=trình quản lý tệp của bạn}} vào vùng tờ. "Thả PDF để mở" xuất hiện khi bạn kéo.
3. Chờ trong khi thanh trạng thái hiển thị "Đang mở <file>…". Với tệp lớn, nó đếm: "(10 trên 60 tờ)".

Kết quả: danh sách {{ui:Tờ}} hiển thị mọi trang của mọi tệp, theo thứ tự bạn đã mở, và thanh trạng thái hiển thị điều như "Đã mở 3 tệp (42 tờ trong bộ)." Nếu các tệp đã có nhận xét, nó thêm số nhận xét đã đọc.

Để thêm tệp vào bộ sau này, mở chúng theo cách tương tự. Chúng nối vào cuối danh sách.

## Bắt đầu với trang trắng

Để phác thảo hoặc ghi chú mà không có bản vẽ, hãy tạo trang trắng thay vì mở PDF:

1. Chọn {{ui:Mới}} trên thanh công cụ, hoặc {{ui:Bắt đầu với trang trắng}} trên màn hình khởi động, hoặc nhấn {{key:Mod+N}} khi trình duyệt cho phép trang dùng phím đó (ứng dụng máy tính để bàn và Studio luôn làm vậy).
2. Chọn {{ui:Khổ giấy}}: Letter, Tabloid hoặc ANSI B, ARCH D, ARCH E, A4, A3 hoặc A1, và {{ui:Dọc}} hoặc {{ui:Ngang}}.
3. Chọn một {{ui:Lưới}}: {{ui:Không có}}, {{ui:Chấm}} hoặc {{ui:Ô vuông}}. Lưới cách nhau 1/4 in, với đường đậm hơn mỗi 1 in trên giấy hệ inch, và cách nhau 5 mm, với đường đậm hơn mỗi 10 mm trên giấy hệ mét. Lưới được in lên trang.
4. Gõ số {{ui:Trang}} bạn muốn, từ 1 đến 20, rồi chọn {{ui:Tạo}}.

Kết quả: một PDF mới tên "Untitled-1.pdf" (rồi "Untitled-2.pdf", và cứ thế) mở như mọi tệp khác, được tạo ngay trên máy tính này. Mọi công cụ đều làm việc trên đó, và {{ui:Lưu}} tải xuống "Untitled-1 (marked up).pdf". MarkupCraft nhớ lựa chọn của bạn cho lần sau.

Các trang không có tỷ lệ: thanh trạng thái hiển thị "Chưa hiệu chuẩn". Lưới không phải là tỷ lệ. Để đo, hãy hiệu chuẩn tờ hoặc chọn tỷ lệ trước; xem [Hiệu chuẩn và đo](topic:calibrate-and-measure).

Để thêm một trang vào bộ trắng, mở một tờ của bộ và chọn {{ui:Thêm một trang trắng}} dưới danh sách {{ui:Tờ}}. Trang mới có cùng giấy và lưới, và được đặt ở cuối. Như mọi thay đổi trang, nó không thể hoàn tác; xem [In, và thay đổi các trang](topic:pages-and-printing).

## Cách tờ được đặt tên

MarkupCraft đặt tên mỗi tờ là "<số tờ> — <tiêu đề>", ví dụ "A-101 — Floor plan", từ mục đầu tiên nó tìm thấy trong các mục sau:

1. Tên bạn gõ bằng {{ui:Đổi tên tờ}} (bên dưới).
2. Nhãn trang của chính PDF, khi người tạo PDF đã đặt chúng (ví dụ "A-101").
3. Khung tên: MarkupCraft đọc văn bản của trang và tìm thứ có dạng số tờ (A-101, A1.01, M-201A, KA1-1), ưu tiên góc dưới bên phải, dải bên phải và dải dưới, và lấy chữ lớn nhất gần đó làm tiêu đề.
4. Nếu không: tên tệp và trang, ví dụ "Plans — page 3".

Để xem mục nào đã được dùng, nhấn {{key:Esc}} cho đến khi không có gì được chọn và {{ui:Chọn}} đang bật, rồi xem {{ui:Thuộc tính}}: "Đọc từ" hiển thị "Nhãn trang", "Khung tên", "Tên tệp" hoặc "Nhập bằng tay".

:::note
Tờ quét, và PDF có văn bản đã xuất thành đường nét, không có chữ để đọc. Chúng được đặt tên theo tệp và trang cho đến khi bạn đổi tên. MarkupCraft chưa thể đọc văn bản từ hình ảnh.
:::

## Di chuyển giữa các tờ

- Nhấp một tờ trong {{ui:Tờ}}.
- Nhấn {{key:PageDown}} cho tờ kế tiếp và {{key:PageUp}} cho tờ trước, hoặc dùng các mũi tên trên thanh dưới tờ.
- Gõ trong {{ui:Tìm tờ}}: một phần của số ("A-2"), một từ của tiêu đề ("mái"), hoặc tên tệp. Danh sách thu hẹp khi bạn gõ ("4 trên 42"). Nhấn {{key:Enter}} để mở kết quả đầu tiên. Xóa ô để thấy lại mọi tờ.

Mỗi tờ giữ mức thu phóng và vị trí riêng cho đến khi bạn đóng bộ.

## Thu phóng và di chuyển khung nhìn

:::mouse
- **Thu phóng:** lăn bánh xe trên tờ. Nó thu phóng quanh con trỏ. Hoặc nhấn {{key:Plus}} và {{key:Minus}} (cũng với {{key:Mod}}), hoặc dùng các nút thu phóng. Gõ tỷ lệ phần trăm chính xác trong ô thu phóng.
- **Vừa khung:** {{ui:Vừa trang}} ({{key:Mod+0}}) hiển thị toàn bộ tờ; {{ui:Vừa chiều rộng}} ({{key:Mod+9}}) lấp đầy chiều rộng.
- **Di chuyển khung nhìn:** kéo bằng nút giữa (con lăn), hoặc kéo bằng nút phải, hoặc giữ {{key:Space}} và kéo, hoặc chọn {{ui:Di chuyển khung nhìn}} ({{key:H}}) rồi kéo. Khi không chọn gì, các phím mũi tên cũng di chuyển tờ.
:::

:::mac mouse
Trên bàn di chuột Mac, cuộn bằng hai ngón sẽ thu phóng (không cuộn tờ). Để di chuyển khung nhìn, giữ {{key:Space}} và kéo bằng một ngón, hoặc chuyển sang {{ui:Di chuyển khung nhìn}} bằng {{key:H}}. Chụm ngón để thu phóng trong Chrome, Edge và Firefox.
:::

:::touch
- **Thu phóng và di chuyển khung nhìn:** đặt hai ngón lên tờ. Mở hoặc chụm để thu phóng quanh điểm ở giữa chúng, và di chuyển chúng cùng nhau để di chuyển khung nhìn. Cả hai xảy ra cùng lúc.
- **Di chuyển khung nhìn bằng một ngón:** chọn {{ui:Di chuyển khung nhìn}} trước. Với bất kỳ công cụ nào khác, một ngón sẽ vẽ hoặc chọn.
- {{ui:Vừa trang}} và {{ui:Vừa chiều rộng}} nằm trên thanh dưới tờ.
:::

Bạn có thể thu nhỏ xa hơn nhiều so với toàn bộ tờ và phóng to đến 6400%. Tờ được vẽ lại rõ nét ngay sau khi bạn ngừng di chuyển.

## Mục lục

{{ui:Mục lục}}, ở đầu bảng {{ui:Tờ}}, hiển thị các mục lục (dàn ý) của PDF mà tờ đang mở thuộc về. Chọn một mục để đến trang của nó. Biểu tượng bút chì đổi tên mục, và dấu X xóa nó. {{ui:Tạo từ các tờ}} tạo một mục cho mỗi tờ, đặt tên như danh sách tờ hiển thị (số tờ và tiêu đề), và {{ui:Thêm cho tờ này}} thêm một mục cho tờ bạn đang xem. Thay đổi là một phần công việc chưa lưu của tệp: {{ui:Lưu}} ghi chúng vào bản sao, nơi mọi trình xem PDF đều hiển thị.

## Xoay khung nhìn

Hai nút xoay ở bên phải thanh dưới tờ xoay khung nhìn một phần tư vòng theo một trong hai chiều, dùng cho tờ được vẽ nằm ngang. Chỉ khung nhìn xoay: PDF và các đánh dấu của nó giữ nguyên, và tờ kế tiếp mở theo cách PDF của nó (mỗi tờ nhớ phép xoay riêng khi bộ đang mở). Văn bản bạn thêm trên khung nhìn đã xoay sẽ hiển thị thẳng như bạn thấy. Để xoay chính trang trong PDF đã lưu, dùng {{ui:Trang}}, rồi {{ui:Xoay trang theo chiều kim đồng hồ}}; xem [In, và thay đổi các trang](topic:pages-and-printing).

## Đổi tên tờ

Khi tên tờ sai hoặc thiếu:

1. Hiển thị tờ.
2. Nhấn {{key:Esc}} cho đến khi không có gì được chọn và công cụ {{ui:Chọn}} đang bật. {{ui:Thuộc tính}} giờ hiển thị tờ.
3. Chọn {{ui:Đổi tên tờ}}.
4. Gõ {{ui:Số tờ}} và {{ui:Tiêu đề}}, rồi chọn {{ui:Lưu}}.

Kết quả: danh sách tờ, thanh dưới tờ và danh sách đánh dấu đều dùng tên mới, và "Đọc từ" hiển thị "Nhập bằng tay". Đổi tên có thể hoàn tác bằng {{key:Mod+Z}}.

Để quay lại những gì tệp ghi, mở lại {{ui:Đổi tên tờ}}, xóa cả hai ô, rồi chọn {{ui:Lưu}}.

Khi bạn lưu, số tờ đã gõ trở thành nhãn trang trong PDF, nên các trình xem PDF khác hiển thị "A-101" trong hộp trang của chúng. Nếu bạn đặt số cho bất kỳ trang nào của một tệp, mọi trang của tệp đó sẽ có nhãn trong bản sao (số đã gõ, nếu không thì nhãn cũ, nếu không thì số trang). Tiêu đề đã gõ được giữ cho MarkupCraft, nhưng các trình xem khác không hiển thị nó.

## Đưa PDF sang TakeoffCraft, hoặc mang về đây

Khi TakeoffCraft đang mở ở cùng nơi (phòng thí nghiệm, Try hoặc các ứng dụng trực tuyến), thanh dưới tờ có {{ui:Mở trong TakeoffCraft}}. Nó mở PDF của tờ trong TakeoffCraft trong một thẻ mới, như đã mở ở đây, để bạn đo khối lượng trên đó. Đánh dấu của bạn vẫn ở đây; lưu chúng như thường lệ.

Nút {{ui:MarkupCraft}} của TakeoffCraft làm điều tương tự theo chiều ngược lại: PDF mở ở đây như thể bạn đã chọn {{ui:Mở}}. Nếu trình duyệt chặn thẻ mới, hãy cho phép cửa sổ bật lên cho trang này rồi chọn nút lại.
