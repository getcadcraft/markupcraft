---
title: Hộp dụng cụ
summary: Lưu một đánh dấu đã định kiểu thành công cụ dùng lại được, vẽ bằng nó, và chia sẻ hộp của bạn với văn phòng dưới dạng tệp.
keywords: hộp dụng cụ, công cụ, bộ công cụ, công cụ tùy chỉnh, đánh dấu đã lưu, yêu thích, tiêu chuẩn văn phòng, nhập, xuất, chia sẻ, json
from: 7dfa36e0
---

Thẻ {{ui:Tools}} giữ **hộp dụng cụ** của bạn: các đánh dấu được lưu cùng diện mạo, sẵn sàng để vẽ lại. Một công cụ giữ loại đánh dấu, màu, độ dày nét, tô, độ mờ, cỡ chữ và chủ đề, cùng nội dung của con dấu, tên nhóm của bộ đếm, hoặc văn bản khởi đầu của hộp văn bản hay chú thích.

## Các công cụ bạn bắt đầu với

Một hộp dụng cụ mới có sáu công cụ: "Đám mây sửa đổi" (đỏ), "Đám mây câu hỏi" (xanh dương), "Bút dạ vàng", "Chú thích RFI" (xanh dương, bắt đầu bằng "RFI: "), "Kiểm tra tại hiện trường" (một chú thích màu cam nói "Kiểm tra tại hiện trường.") và "Đã duyệt có ghi chú" (một con dấu).

## Vẽ bằng một công cụ

1. Mở thẻ {{ui:Tools}}.
2. Nhấp vào một công cụ. Nó trông như đang được nhấn xuống, và công cụ tương ứng trên thanh công cụ được bật.
3. Vẽ như bình thường. {{ui:Properties}} hiển thị 'Đang vẽ bằng "<công cụ>" từ hộp dụng cụ.'

Khi một công cụ trong hộp đang bật, những thay đổi bạn làm trong {{ui:Properties}} trước khi vẽ sẽ áp dụng cho công cụ đó tạm thời, không thay đổi công cụ đã lưu hay thiết lập công cụ thông thường của bạn. Chọn một nút trên thanh công cụ, hoặc nhấn phím của một công cụ, sẽ quay lại công cụ thường.

## Lưu công cụ của riêng bạn

1. Vẽ một đánh dấu và định kiểu theo ý bạn: màu, nét, tô, chủ đề, nội dung con dấu.
2. Chọn nó.
3. Chọn {{ui:Save selected as a tool}} trong thẻ {{ui:Tools}}, hoặc {{ui:Save as a tool}} trong {{ui:Properties}}.
4. Gõ một {{ui:Tool name}} và chọn {{ui:Save tool}}.

Kết quả: công cụ được thêm vào cuối hộp, và thẻ {{ui:Tools}} mở ra để hiển thị nó.

## Con dấu được tạo từ vùng chọn

Chọn nhiều đánh dấu (hoặc nội dung trang bằng công cụ {{ui:Content}}) rồi chọn {{ui:Save selection as a stamp…}} trong {{ui:More}} hoặc trong menu chuột phải. Hộp nhận được một con dấu chứa tất cả ("Con dấu: 3 đánh dấu cùng nhau"). Nhấp vào nó, rồi nhấp vào bất kỳ tờ nào: các đánh dấu nằm cùng nhau, căn giữa nơi bạn nhấp, dưới dạng đánh dấu mới mang tên bạn; nội dung trang được vẽ vào trang tại đó. Các con dấu này được lưu và chia sẻ cùng hộp như mọi công cụ khác.

## Xóa một công cụ

Chọn × ở cuối dòng của công cụ, rồi chọn {{ui:Remove}}. Các đánh dấu đã vẽ bằng nó vẫn giữ nguyên.

## Hộp được lưu ở đâu

Hộp được lưu **trong trình duyệt này, trên máy tính này**. Trình duyệt hoặc máy tính khác có hộp riêng (bắt đầu với sáu mặc định), cửa sổ riêng tư sẽ quên nó khi đóng, và xóa dữ liệu của trang này trong cài đặt trình duyệt sẽ xóa nó.

Nếu trình duyệt không cho lưu (tắt hoặc đầy bộ nhớ), thanh trạng thái hiển thị: "Không thể giữ hộp dụng cụ trong trình duyệt này (bộ nhớ lưu trữ tắt hoặc đầy). Xuất hộp để giữ lại."

:::safari
Safari có thể xóa dữ liệu được lưu của một trang web khi bạn không dùng trang đó trong một thời gian. Thỉnh thoảng xuất hộp của bạn ra để có thể nhập lại.
:::

**Xuất hộp của bạn làm bản sao lưu**, đặc biệt sau khi tạo các công cụ bạn dựa vào.

## Chia sẻ hộp với văn phòng

1. Thiết lập các công cụ một lần.
2. Chọn {{ui:Export}}. Bạn nhận được "MarkupCraft tool chest.json".
3. Đặt tệp đó nơi văn phòng giữ các tiêu chuẩn, hoặc gửi cho mọi người.
4. Những người khác chọn {{ui:Import}} trong thẻ {{ui:Tools}} của họ, rồi chọn tệp.

Kết quả: "Đã nhập 12 công cụ từ "MarkupCraft tool chest.json"." Các công cụ đến từ cùng một hộp sẽ thay thế bản cũ, nên khi nhập một hộp chung đã cập nhật, các công cụ đó được làm mới thay vì nhân đôi; công cụ mới được thêm vào. Một hộp chứa tối đa 500 công cụ.

MarkupCraft kiểm tra từng giá trị trong tệp được nhập và bỏ qua những giá trị không dùng được ("2 bỏ qua (không dùng được)"). Tệp không phải hộp sẽ bị từ chối: "Tệp này không phải hộp dụng cụ MarkupCraft." hoặc "Tệp này không phải hộp dụng cụ (không phải JSON)."

Hộp dụng cụ từ các chương trình đánh dấu khác không thể nhập.
