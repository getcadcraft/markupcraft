---
title: Khắc phục sự cố
summary: Các thông báo MarkupCraft hiển thị và cách xử lý, cùng cách sửa những điều có vẻ không hoạt động.
keywords: sự cố, lỗi, không hoạt động, trợ giúp, thông báo, không mở được, không lưu được, mật khẩu, được bảo vệ, từ chối đo, hiệu chuẩn, ngoại tuyến, trống, chậm, mất đánh dấu, dấu hỏi
from: bb650b39
---

Hầu hết sự cố được giải thích trong thanh trạng thái ở cuối màn hình. Đọc nó trước.

## Mở tệp

**"MarkupCraft mở tệp PDF. "x" không phải là PDF."**
Bạn đã chọn hoặc thả một thứ khác. Chỉ có PDF mới mở được. Xuất bản vẽ từ chương trình CAD của bạn sang PDF trước.

**'"name" cần mật khẩu để mở. Mở một bản sao không được bảo vệ.'**
Tệp PDF được bảo vệ bằng mật khẩu. Yêu cầu người gửi một bản sao không được bảo vệ, hoặc mở nó trong một chương trình PDF mà bạn biết mật khẩu rồi lưu một bản sao không có mật khẩu.

**'"name" không thể đọc như PDF (…)'**
Tệp bị hỏng hoặc không thực sự là PDF (tải xuống chưa xong, tệp đính kèm email bị cắt). Tải xuống lại. Nếu các chương trình PDF khác mở được, dùng "lưu thành" của chúng để tạo một bản sao sạch rồi mở bản đó.

**"Một số tệp chưa mở"**
Khi bạn mở nhiều tệp cùng lúc, hộp này liệt kê các tệp không mở được và lý do. Các tệp còn lại đã mở.

**"Trình đọc PDF không thể tải: …"**
Không thể tải bộ xử lý PDF. Khi trực tuyến: tải lại trang và thử lại; kiểm tra xem tường lửa hoặc bộ chặn nội dung có đang chặn trang không. Khi ngoại tuyến: MarkupCraft chưa được lưu để dùng ngoại tuyến trong trình duyệt này (thanh ở trên không hiển thị "Sẵn sàng ngoại tuyến"). Kết nối mạng, chọn {{ui:Save for offline}}, và chờ "Sẵn sàng ngoại tuyến". Xem [Làm việc ngoại tuyến](common:offline).

**"Một số chú thích có thể hiển thị hai lần trên màn hình" hoặc "Không thể đọc thêm chi tiết chú thích"**
Các nhận xét hiện có trong tệp không thông thường. Chúng vẫn được mở đầy đủ nhất có thể; kiểm tra chúng trước khi dựa vào. Lưu vẫn hoạt động.

**Tờ có tên sai, hoặc "trang 3"**
Xem [Cách tờ được đặt tên](topic:open-a-plan-set#how-sheets-get-their-names). Các tờ quét không có văn bản để đọc; dùng {{ui:Rename sheet}}.

**Cùng một tờ xuất hiện hai lần**
Cùng một tệp đã được mở hai lần. Chọn {{ui:Close}} (lưu trước nếu cần) và mở lại bộ.

## Vẽ và chọn

**Không có gì xảy ra khi tôi nhấp vào tờ**
Kiểm tra công cụ nào đang được nhấn trên thanh công cụ, và đọc thanh trạng thái. Với {{ui:Rectangle}}, {{ui:Ellipse}} và {{ui:Cloud}}, một cú nhấp không kéo sẽ không vẽ gì: kéo để vẽ. Với {{ui:Polyline}}, {{ui:Polygon}}, {{ui:Free cloud}} và {{ui:Area}}, các điểm đang được thêm vào: kết thúc bằng nhấp đúp hoặc {{key:Enter}}.

**"Đa giác cần ít nhất 3 điểm." (hoặc 2 cho đa tuyến)**
Nhấp thêm điểm trước khi kết thúc.

**"Chưa nhập gì, nên không thêm văn bản nào."**
Hộp văn bản và chú thích chỉ được giữ khi có chữ. Vẽ lại và gõ trước khi nhấp ra ngoài.

**"Hai điểm giống nhau. Nhấp vào hai điểm khác nhau."**
Với đường thẳng, mũi tên, độ dài và hiệu chuẩn, hai đầu phải cách nhau. Kéo, hoặc nhấp hai lần ở các chỗ khác nhau.

**Tôi không thể di chuyển hoặc xóa một đánh dấu; nó có hộp nét đứt màu xám**
Đó là một nhận xét chỉ đọc đi kèm với tệp (ví dụ một vùng tô sáng văn bản). MarkupCraft giữ nguyên nó: bạn chỉ có thể phản hồi. Thanh trạng thái hiển thị "các đánh dấu chỉ đọc được giữ nguyên như trong tệp".

**Các phím của tôi gõ chữ vào hộp thay vì chọn công cụ**
Con trỏ đang ở trong một hộp văn bản (một phản hồi, một trường trong {{ui:Properties}}, ô tìm tờ). Nhấp vào phần trống của khu vực tờ trước, hoặc nhấn {{key:Esc}} nếu bạn đang sửa văn bản của đánh dấu.

**Space không di chuyển khung nhìn, hoặc các phím mũi tên không làm gì**
Bạn vừa nhấp một nút thanh công cụ nên nó vẫn giữ bàn phím. Kéo bằng nút chuột giữa thay thế, hoặc nhấp vào tờ một lần khi {{ui:Select}} đang bật, rồi thử lại. Xem thêm [Bàn phím và chuột](topic:keyboard#when-a-key-does-nothing).

**Một cử chỉ chụm trên màn hình cảm ứng để lại vết**
Một công cụ kéo (bút, đám mây, hình chữ nhật) đã bắt đầu trước khi ngón tay thứ hai chạm vào và kết thúc trước khi nó bị hủy. Nhấn {{ui:Undo}}. Đặt cả hai ngón xuống cùng lúc khi bạn định thu phóng.

## Đo lường

**"Hiệu chuẩn tờ này trước: chọn hai điểm cách nhau một khoảng đã biết, hoặc chọn tỷ lệ của nó. Sau đó đo."**
Mỗi tờ cần tỷ lệ riêng trước khi dùng {{ui:Length}} hoặc {{ui:Area}}. MarkupCraft đã chuyển sang {{ui:Calibrate}}: nhấp vào hai đầu của một kích thước đã biết và gõ chiều dài của nó, hoặc nhấp nút tỷ lệ trên thanh trạng thái rồi chọn một tỷ lệ. Xem [Hiệu chuẩn một tờ và đo](topic:calibrate-and-measure).

**'Đó không phải là độ dài mà MarkupCraft hiểu.'**
Gõ như `24'-0"`, `12' 6 1/2"`, `7.2 m` hoặc `900 mm`. Xem [Đơn vị, độ dài và tỷ lệ](topic:units-and-scales).

**Số đo hơi lệch, hoặc lệch rất nhiều**
- Một tỷ lệ đặt sẵn trên PDF không ở kích thước đầy đủ sẽ đo sai. Hiệu chuẩn từ một kích thước đã biết dài thay thế.
- Dấu phân cách hàng nghìn bị đọc thành dấu thập phân: `1,200 mm` có nghĩa là 1.2 mm. Gõ `1200 mm`.
- Phóng to khi nhấp vào các đầu.
- Bản vẽ có thể không đúng tỷ lệ ("NTS").

**"Chọn một nhóm đếm trước, rồi Shift+nhấp vào một dấu để xóa nó."**
Chọn {{ui:Select}}, nhấp vào nhóm đếm, rồi chọn lại {{ui:Count}} và {{key:Shift}}-nhấp vào chấm.

## Lưu

**"Tệp PDF này được bảo vệ (mã hóa), nên không thể ghi bản sao đã đánh dấu."**
Tệp cấm thay đổi. Yêu cầu một bản sao không được bảo vệ. Trong lúc đó bạn vẫn có thể xuất danh sách đánh dấu dưới dạng CSV hoặc BCF.

**"Bộ ghi PDF không thể tải: …"**
Thường là bạn đang ngoại tuyến và ứng dụng chưa được lưu để dùng ngoại tuyến (không có "Sẵn sàng ngoại tuyến" trên thanh ở trên). Các đánh dấu của bạn vẫn còn trong thẻ: giữ thẻ mở, kết nối mạng, và chọn lại {{ui:Save}}. Sau đó chọn {{ui:Save for offline}} để lần sau dùng được ngoại tuyến; bản đã lưu bao gồm bộ ghi PDF.

**"Không thể lưu <file>"**
Hộp hiển thị lý do. Các đánh dấu của bạn vẫn còn trong thẻ. Thử lại; nếu lỗi lặp lại, xuất CSV để các nhận xét không bị mất, và báo thông báo đó.

**Tôi chọn Lưu nhưng chỉ có một tệp được tải về**
Trình duyệt đã chặn các tải xuống thêm. Tìm thông báo trên thanh địa chỉ và cho phép trang này tải nhiều tệp, rồi lưu lại.

**Tôi không tìm thấy tệp đã lưu**
Tệp được lưu vào thư mục tải xuống của trình duyệt. Mở danh sách tải xuống của trình duyệt (trong Chrome và Edge, {{pick:mac=Option-Command-L|windows linux=Ctrl+J}}; trong Firefox và Safari, nút tải xuống trên thanh công cụ) để xem vị trí. Xem [Trình duyệt và máy tính](common:browsers).

**Một số văn bản hiển thị "?" trong các trình xem PDF khác**
Ký tự ngoài bộ chữ Tây Âu được in thành "?" trong bản sao. Thông báo lưu có đếm chúng. Xem [Lưu tệp PDF đã đánh dấu](topic:save-the-marked-up-pdf).

**Con dấu hiển thị ngày mai (hoặc ngày hôm qua)**
Ngày của con dấu theo UTC. Xem [Con dấu và ghi chú dán](topic:stamps-and-notes).

## Làm việc ngoại tuyến

**Nút ngoại tuyến hiển thị "Không thể lưu"**
Một số tệp của ứng dụng không tải xuống được. Kiểm tra kết nối và nhấp lại nút; nó đếm "Đang lưu N trên M" cho đến khi "Sẵn sàng ngoại tuyến".

**Nút ngoại tuyến hiển thị "Không có sẵn chế độ ngoại tuyến"**
Cửa sổ trình duyệt này không thể giữ bản ngoại tuyến: đó là cửa sổ riêng tư, hoặc máy tính có chính sách chặn điều đó. Mở MarkupCraft trong cửa sổ thường và thử lại.

**Khi ngoại tuyến, ứng dụng là phiên bản cũ**
Bản ngoại tuyến là phiên bản bạn đã lưu. Khi trực tuyến, nhấp "Sẵn sàng ngoại tuyến" và chọn "Lưu lại (lấy phiên bản mới nhất)". Để giải phóng dung lượng, chọn "Gỡ bản sao ngoại tuyến". Xem [Làm việc ngoại tuyến](common:offline).

**Trợ giúp không mở được**
Nhấn {{key:F1}} (trên Mac, cùng với **fn**), hoặc chọn {{ui:Help}} trên thanh ở trên. Trợ giúp cũng hoạt động khi ngoại tuyến.

## Những thứ bị mất

**Các đánh dấu của tôi biến mất sau khi đóng hoặc tải lại thẻ**
Mở MarkupCraft lại trong cùng trình duyệt: nó đề nghị công việc chưa lưu với "Khôi phục công việc của bạn?". Chọn {{ui:Recover}} rồi lưu PDF. Bản sao được giữ đến 30 ngày; cửa sổ riêng tư, hoặc xóa dữ liệu trang, không để lại gì. Xem [Khôi phục công việc của bạn](common:recover).

**Tên, cài đặt công cụ hoặc hộp dụng cụ của tôi biến mất**
Chúng chỉ được giữ trong trình duyệt này và đã bị xóa (dữ liệu trang bị xóa, cửa sổ riêng tư, trình duyệt hoặc máy tính khác, hoặc Safari dọn các trang không truy cập trong một thời gian). Đặt lại tên và nhập hộp đã xuất của bạn. Xem [Những gì được lưu trong trình duyệt này](topic:browser-storage).

**"Không thể giữ hộp dụng cụ trong trình duyệt này (bộ nhớ lưu trữ tắt hoặc đầy). Xuất hộp để giữ lại."**
Trình duyệt từ chối lưu dữ liệu cho trang này (chế độ riêng tư, bộ nhớ bị chặn bởi cài đặt hoặc chính sách, hoặc đã đầy). Xuất hộp sau khi thay đổi, và nhập lại lần sau.

## Hiển thị và tốc độ

**Tờ bị mờ trong chốc lát**
MarkupCraft hiển thị một bản vẽ nhanh, thô khi bạn thu phóng hoặc di chuyển khung nhìn, rồi vẽ lại sắc nét một lúc sau khi bạn dừng.

**Mọi thứ chậm với một bộ lớn**
Đóng các thẻ nặng khác, mở ít tệp cùng lúc hơn, và tránh thu phóng tối đa trên các tờ rất lớn. Xem [Làm việc với nhiều tệp cùng lúc](topic:several-files#big-sets).

**Tờ tối với các đường sáng**
Bạn đang ở chủ đề {{ui:Model}}. Chọn {{ui:Paper}} trên thanh ở trên để có nét tối trên nền trắng. Các đánh dấu và PDF đã lưu không bị ảnh hưởng.
