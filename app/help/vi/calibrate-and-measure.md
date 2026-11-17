---
title: Hiệu chuẩn tờ và đo
summary: Đặt tỷ lệ của từng tờ từ một mức có sẵn hoặc một kích thước đã biết, rồi đo chiều dài, diện tích kèm chu vi, và đếm.
keywords: hiệu chuẩn, tỷ lệ, đặt tỷ lệ, đo, chiều dài, khoảng cách, kích thước, diện tích, feet vuông, chu vi, đếm, bóc tách khối lượng, số lượng, thước, phép tính, cộng, phân số
from: 49a25c6d
---

Chiều dài và diện tích cần biết tỷ lệ của tờ. MarkupCraft giữ tỷ lệ **theo từng tờ**: hiệu chuẩn từng tờ bạn đo. Đếm không cần tỷ lệ.

Thanh trạng thái hiển thị tỷ lệ của tờ hiện tại, hoặc "Chưa hiệu chuẩn".

## Chọn tỷ lệ từ danh sách

Dùng cách này khi PDF ở kích thước đầy đủ (tờ 24 × 36 in in ra đúng 24 × 36) và bản vẽ ghi rõ tỷ lệ của nó.

1. Nhấp nút tỷ lệ trên thanh trạng thái ("Chưa hiệu chuẩn"). Hộp "Tỷ lệ tờ" mở ra.
2. Trong {{ui:Tỷ lệ}}, chọn tỷ lệ: kiến trúc (1/32" = 1'-0" đến 3" = 1'-0"), kỹ thuật (1" = 10' đến 1" = 100') hoặc mét (1:1 đến 1:1000).
3. Chọn {{ui:Đặt tỷ lệ}}.

Kết quả: thanh trạng thái hiển thị tỷ lệ, ví dụ `1/4" = 1'-0"`. Tỷ lệ kiến trúc hiển thị chiều dài theo feet và inch, tỷ lệ kỹ thuật theo feet thập phân, tỷ lệ mét đến 1:50 theo milimét và từ 1:100 theo mét.

:::warning
Một mức có sẵn chỉ đúng khi PDF chưa bị thu nhỏ. Bộ bản vẽ nửa kích thước, hoặc tờ được "vừa trang" khi tạo, sẽ đo sai với mức có sẵn. Hãy hiệu chuẩn từ một kích thước đã biết thay thế, và kiểm tra ít nhất một kích thước trong mọi trường hợp.
:::

## Hiệu chuẩn từ một kích thước đã biết

Dùng cách này cho bộ nửa kích thước, tờ quét, chi tiết ở tỷ lệ lạ, hoặc để kiểm tra một mức có sẵn.

1. Tìm một kích thước dài mà bạn tin cậy, hoặc một thanh tỷ lệ đồ họa.
2. Chọn {{ui:Hiệu chuẩn}} trong nhóm {{ui:Đo}} (hoặc chọn {{ui:Chọn hai điểm}} trong hộp "Tỷ lệ tờ").
3. Nhấp một đầu của kích thước, rồi đầu kia. (Hoặc kéo từ đầu này đến đầu kia.) Phóng to trước để chính xác hơn; {{key:Shift}} giữ đường thẳng ở các bước 45°.
4. Hộp cho biết hai điểm cách nhau bao xa trên giấy và hỏi "Thực tế chúng cách nhau bao xa?". Nhập {{ui:Khoảng cách thực}}, ví dụ `24'-0"`, `12' 6 1/2"`, `7.2 m` hoặc `900 mm`.
5. Chọn cách hiển thị chiều dài trong {{ui:Hiện chiều dài theo}}: {{ui:Feet và inch}}, {{ui:Feet thập phân}}, {{ui:Inch}}, {{ui:Mét}} hoặc {{ui:Milimét}}.
6. Chọn {{ui:Đặt tỷ lệ}}.

Kết quả: thanh trạng thái hiển thị "Đã hiệu chuẩn: 24'-0" trên 1.00 in" (chiều dài thực và chiều dài trên giấy), và công cụ bạn định đo sẽ bật lại. Mọi cách nhập chiều dài đều có trong [Đơn vị và chiều dài](topic:units-and-scales).

Khoảng cách thực cũng có thể là một phép tính nhỏ: `12'6"+3/4"`, `(24'-0")/3` hoặc `2*450mm`. Dùng `+ - * /` và dấu ngoặc; số không có đơn vị được tính theo đơn vị trong {{ui:Hiện chiều dài theo}} (feet với {{ui:Feet và inch}}). {{ui:Đặt tỷ lệ}} dùng kết quả.

Nếu MarkupCraft không đọc được điều bạn nhập, hộp sẽ báo: 'Đây không phải chiều dài mà MarkupCraft hiểu. Thử 24'-0", 12' 6 1/2", 7.2 m hoặc 900 mm.' Một phép tính mà nó không giải được sẽ cho biết lý do và vị trí, ví dụ "Dấu ngoặc chưa được đóng (ký tự 5)."

## Đo một chiều dài

1. Chọn {{ui:Chiều dài}} ({{key:M}}).
2. Nhấp điểm đầu, rồi điểm cuối. Hoặc kéo từ đầu đến cuối. {{key:Shift}} giữ ở các bước 45°.

Kết quả: một đường kích thước có vạch và chiều dài được ghi trên đó. Thanh trạng thái lặp lại ("Chiều dài: 12'-6 1/2" (1/4" = 1'-0")."), và {{ui:Thuộc tính}} hiển thị nó dưới {{ui:Chiều dài}}. Feet và inch được làm tròn đến 1/16" gần nhất.

Nếu tờ chưa có tỷ lệ, chọn {{ui:Chiều dài}} sẽ chuyển sang {{ui:Hiệu chuẩn}} và thanh trạng thái giải thích: "Hiệu chuẩn tờ này trước: chọn hai điểm cách nhau một khoảng đã biết, hoặc chọn tỷ lệ của tờ. Sau đó đo." Sau khi đặt tỷ lệ, {{ui:Chiều dài}} sẽ quay lại.

## Phác thảo theo tỷ lệ

Trên tờ đã hiệu chuẩn, bạn có thể nhập chiều dài thực khi vẽ {{ui:Đường thẳng}}, {{ui:Mũi tên}}, {{ui:Chiều dài}}, {{ui:Đa tuyến}}, {{ui:Đa giác}}, {{ui:Đám mây tự do}}, {{ui:Diện tích}} hoặc một không gian:

1. Nhấp điểm đầu tiên.
2. Hướng con trỏ theo đoạn tiếp theo và nhập chiều dài của nó, ví dụ `16` (theo đơn vị của tờ), `12'6"` hoặc `3.5 m`. Một hộp mở cạnh con trỏ khi bạn nhập.
3. Nhấn {{key:Enter}}. Điểm được đặt cách đó chừng ấy, theo hướng con trỏ.

Để đặt hướng chính xác, thêm `<` và một góc tính bằng độ: `8 < 90` đi lên thẳng đứng 8 feet, `4<0` sang phải, `10 < 225` xuống và sang trái, theo cách tờ được nhìn (kể cả trang đã xoay). Tiếp tục nhập chiều dài cho các góc kế tiếp, rồi hoàn thành hình như thường lệ. {{key:Esc}} đóng hộp mà không đặt điểm.

## Đo góc

1. Chọn {{ui:Góc}} ({{key:X}}).
2. Nhấp đầu của một cạnh, rồi đỉnh, rồi đầu của cạnh kia.

Kết quả: hai cạnh, một cung nhỏ tại đỉnh và góc tính bằng độ, đến một phần mười (0° đến 180°). Góc không cần tỷ lệ. {{ui:Thuộc tính}} hiển thị nó dưới {{ui:Góc}}, và danh sách, CSV và BCF đều có giá trị này.

Một {{ui:Cung tròn}} ({{key:O}}) trên tờ đã hiệu chuẩn cũng hiển thị chiều dài dọc theo đường cong trong {{ui:Thuộc tính}}.

## Đo diện tích và chu vi

1. Chọn {{ui:Diện tích}} ({{key:Q}}).
2. Nhấp từng góc của phòng hoặc khu vực.
3. Kết thúc bằng nhấp đúp, {{key:Enter}} hoặc nhấp chuột phải (chạm đúp trên màn hình cảm ứng). {{key:Backspace}} xóa góc cuối cùng.

Kết quả: một đường viền tô bóng với diện tích, và "P" cùng chu vi ở giữa, ví dụ "128.00 sq ft" và "P 48'-0"". Tỷ lệ theo feet cho ra feet vuông, theo inch cho inch vuông, theo mét cho mét vuông, theo milimét cho milimét vuông. Một diện tích cần ít nhất ba góc.

### Lỗ khoét

Để chừa ra một cột, một giếng hoặc một sân trong, chọn diện tích và chọn {{ui:Thêm một lỗ khoét}} trong {{ui:Thuộc tính}}. Nhấp các góc của lỗ khoét bên trong diện tích và kết thúc như với diện tích. Lỗ khoét vẫn mở (không tô bóng), diện tích của nó được trừ đi, và các cạnh của nó được cộng vào chu vi: một phòng 16' × 8' có lỗ khoét 4' × 4' hiển thị "112.00 sq ft" và "P 64'-0"". Thêm bao nhiêu tùy ý; chúng không được chồng lên nhau hoặc cắt đường viền của diện tích. {{ui:Xóa lỗ khoét}} xóa tất cả, và {{key:Mod+Z}} hoàn tác một lỗ khoét.

## Đếm

1. Chọn {{ui:Đếm}} ({{key:U}}).
2. Trong {{ui:Thuộc tính}}, nhập {{ui:Tên nhóm}}, ví dụ "Phễu thoát sàn". (Nó được giữ cho lần sau.)
3. Nhấp từng mục trên tờ.

Kết quả: mỗi lần nhấp thêm một chấm được đánh số, chấm đầu tiên mang nhãn như "Phễu thoát sàn: 7", và thanh trạng thái giữ tổng số đang chạy.

- **Bắt đầu một nhóm khác:** nhấn {{key:Esc}} một lần (nó bỏ vùng chọn), đổi {{ui:Tên nhóm}}, rồi nhấp lại.
- **Thêm vào nhóm đã có:** chọn nhóm trước, rồi chọn {{ui:Đếm}} và nhấp.
- **Xóa một dấu:** khi nhóm đang được chọn, giữ {{key:Shift}} và nhấp chấm đó. Xóa chấm cuối cùng sẽ xóa nhóm. Trên màn hình cảm ứng không có bàn phím, dùng {{key:Mod+Z}} hoặc {{ui:Hoàn tác}} thay thế.
- **Đổi tên nhóm:** chọn nó và sửa {{ui:Tên nhóm}} trong {{ui:Thuộc tính}}.

Một nhóm đếm thuộc về một tờ. Đếm trên nhiều tờ hiển thị thành các nhóm riêng trong danh sách đánh dấu.

## Đổi hoặc gỡ tỷ lệ

Nhấp nút tỷ lệ trên thanh trạng thái. Hộp hiển thị tỷ lệ hiện tại; chọn một tỷ lệ khác, chọn {{ui:Chọn hai điểm}}, hoặc chọn {{ui:Gỡ tỷ lệ}}.

Chiều dài và diện tích đã vẽ được **đo lại** ngay với tỷ lệ mới. {{ui:Hoàn tác}} đưa tỷ lệ cũ trở lại.

## Các con số đi đâu

- {{ui:Thuộc tính}} hiển thị giá trị của phép đo đang chọn.
- Thẻ {{ui:Đánh dấu}} liệt kê từng giá trị, và CSV của nó có cột "Đo lường". Xem [Danh sách đánh dấu](topic:markups-list-and-export).
- Tệp PDF đã lưu giữ tỷ lệ trên trang và ghi chiều dài và diện tích thành chú thích đo lường, để các chương trình PDF hiểu đo lường có thể hiển thị chúng. Xem [Những gì được lưu trong PDF](topic:what-the-pdf-keeps).

Để có khối lượng bóc tách đầy đủ với hạng mục, định mức và giá, dùng TakeoffCraft: MarkupCraft đo để xem xét, không đo để lập dự toán.
