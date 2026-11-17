---
title: Có gì mới trong 0.9
summary: Ghi chú và bảng ghi tạm không bao giờ được in, ghi chú riêng tư được mã hóa và bản sao sạch cho khách hàng, liên kết hàng loạt cho cả bộ bản vẽ, công cụ Cung tròn với mười phương pháp, theo dõi người duyệt trong Live, và sửa lỗi đánh dấu đã xóa vẫn còn trong tệp PDF đã lưu.
keywords: có gì mới, what's new, 0.9, ghi chú phát hành, nhật ký thay đổi, ghi chú, bảng ghi tạm, ghi chú riêng tư, cụm mật khẩu, mã hóa, ẩn ghi chú, hiện ghi chú, bản sao sạch, ảnh chụp, liên kết hàng loạt, chú thích tờ, liên kết tờ, khung tên, số tờ, phụ lục, đánh số lại, liên kết pdf, cung tròn, phương pháp cung tròn, cung ba điểm, bán kính, theo dõi, theo dõi tôi, live, chế độ xem lớp, danh sách người tham gia, đánh dấu đã xóa, gợi ý công cụ, tiêu đề thẻ, 0.8, 0.8.1, phiên bản, tính năng mới, nhiệm vụ, người được giao, ngày hạn, quá hạn, kiểm tra ngay, điều gì đã thay đổi, bản sửa đổi, so sánh, ghi chú giọng nói, quyết định, đánh dấu đỏ, tệp trả lời, người vẽ, trợ lý, mcp, vấn đề, ngôn ngữ, thiết bị nhập, bàn di chuột, hàng thanh công cụ, lưới thuộc tính, cập nhật
from: dbdd7ed4
---

Đây là những thay đổi trong MarkupCraft 0.9 so với 0.8.1. Ý chính là ghi chú làm việc của bạn không xuất hiện trên trang mà khách hàng nhận, và cả một bộ bản vẽ có thể được liên kết trong một lần.

## Mới

### Ghi chú, bảng ghi tạm và ghi chú riêng tư

- **Bảng ghi tạm.** Vùng xung quanh mỗi tờ là một mặt bàn: bất cứ thứ gì được vẽ, gõ hoặc dán bên cạnh tờ đều là ghi chú và không bao giờ được in. Chọn {{ui:Show the pasteboard}} để thu nhỏ lấy thêm chỗ, hoặc {{ui:Snapshot to the pasteboard}}, kéo một khung, rồi chọn {{ui:To the pasteboard}} để đặt một hình ảnh của một phần bản vẽ bên cạnh tờ. Ảnh chụp là một hình ảnh và không thay đổi khi tờ thay đổi. Xem [Ghi chú, bảng ghi tạm và ghi chú riêng tư](topic:notes-and-pasteboard).
- **Hiện và ẩn ghi chú.** Bất kỳ đánh dấu nào cũng có thể là ghi chú: đặt {{ui:New markups are}} trong thẻ {{ui:Notes}}, hoặc {{ui:This markup is}} trong {{ui:Properties}}. {{key:Shift+H}} hoặc công tắc {{ui:Notes}} dưới tờ sẽ ẩn và hiện tất cả ghi chú cùng lúc. Ghi chú không được đưa vào khi in, bản sao phẳng, danh sách và xuất tệp, và các trình đọc PDF khác không hiển thị chúng. Tệp PDF đã lưu của bạn vẫn giữ chúng cho lần mở tiếp theo trong MarkupCraft.
- **Ghi chú riêng tư.** Chọn {{ui:Set a passphrase}}, rồi đặt một đánh dấu thành {{ui:A private note}}. Ghi chú được mã hóa trong tệp bằng một cụm mật khẩu gồm ít nhất 10 ký tự, và không có cách khôi phục: không ai, kể cả chúng tôi, có thể mở nó nếu không có cụm mật khẩu. {{ui:Lock}} cất các ghi chú riêng tư đi; {{ui:Stay unlocked on this device}} mặc định là tắt.
- **Lưu bản sao sạch.** {{ui:Save a clean copy}} xóa mọi ghi chú, ghi chú riêng tư và tất cả nội dung trên bảng ghi tạm. Hãy dùng cho tệp gửi đến khách hàng.

### Liên kết cả bộ

- **Liên kết hàng loạt.** Chọn {{ui:Pages}} › {{ui:Batch links…}}, hoặc {{ui:Link sheet callouts…}} dưới {{ui:Find text}} trong bảng {{ui:Sheets}}. Bước 1 liệt kê số và tên của từng tờ như đọc được từ khung tên; hãy sửa những chỗ sai. Bước 2 liệt kê các chú thích tìm thấy, chẳng hạn `3/A-501` hoặc `DETAIL 2 ON A-501`. {{ui:Will link}} cho biết tờ và khung nhìn của từng chú thích, {{ui:Not linked}} cho biết các số mà không tờ đang mở nào có, và {{ui:Create the links}} tạo tất cả trong một bước hoàn tác. Chạy lại sau khi có phụ lục hoặc đánh số lại; các liên kết bạn tạo thủ công không bao giờ bị thay đổi. Liên kết có khung nhìn được lưu thành liên kết PDF, nên các trình đọc khác cũng mở được chi tiết. Xem [Liên kết tờ](topic:sheet-links).

### Bản vẽ

- **Cung tròn, mười phương pháp.** Công cụ {{ui:Arc}} ({{key:O}}) giờ có một hộp {{ui:Arc method}} phủ lên trang với mười cách vẽ cung tròn, và góc, độ dài, bán kính và hướng đều có thể chọn bằng chuột hoặc nhập bằng bàn phím. Xem [Vẽ cung tròn theo mười cách](topic:draw-an-arc).

### Làm việc cùng nhau

- **Theo dõi người duyệt.** Trong một phiên Live, chọn {{ui:Follow}} cạnh tên một người và khung nhìn của bạn sẽ di chuyển theo họ; khi bạn tự di chuyển hoặc thu phóng thì việc theo dõi dừng lại. Người chủ phiên có thể chọn {{ui:Ask everyone to follow me}}. Danh sách người tham gia hiển thị màu, tên của từng người, tờ họ đang mở và thời điểm họ chỉnh sửa lần cuối. Xem [Theo dõi người duyệt khác trong phiên Live](topic:follow-in-live).

## Trong mọi ứng dụng

- Gợi ý công cụ là tooltip của Bootstrap, có thể đóng gợi ý khi bắt đầu, các dải thẻ cuộn khi tràn, và tiêu đề thẻ trình duyệt hiển thị `<document> — MarkupCraft | CadCraft`.
- Một bảng có nhiều phần sẽ mở một phần và đóng các phần khác (ổ khóa cạnh con trỏ giữ một phần mở); một công tắc trong {{ui:Settings}} sẽ tắt chế độ này.
- Mỗi ứng dụng bắt đầu với một bộ mặc định các đối tượng Thư viện.
- Đơn vị khối lượng và nhiệt độ có trong phần cài đặt Đơn vị.

## Đã sửa

- **Đánh dấu đã xóa không còn đọc được trong tệp PDF đã lưu.** Trước đây khi lưu, một chú thích đã xóa hoặc đã viết lại được gỡ khỏi trang nhưng đối tượng của nó, cùng với văn bản, vẫn nằm trong tệp. Giờ khi lưu, các đối tượng đó sẽ bị xóa. Các tệp được lưu bởi bản dựng cũ vẫn giữ chúng cho đến khi bạn lưu lại.

## Giới hạn thực tế

- Liên kết hàng loạt đã được thử trên các bộ thử nghiệm của chúng tôi. Bộ bản vẽ thật vẽ bong bóng theo nhiều cách, nên với một bộ của khách hàng, một số khung nhìn có thể bị bỏ sót. Các tờ quét cần chạy {{ui:Read text (OCR)…}} trước.
- Ghi chú, ghi chú riêng tư và bảng ghi tạm đã được thử trong trình duyệt không giao diện (headless) và trên các tệp của chúng tôi, chưa thử với một bộ vector lớn thật và chưa thử trong một phiên Live hai người thật. Việc đổi cụm mật khẩu chưa được xây dựng. Các bản dựng cũ hơn 0.9 không hiển thị ghi chú.
- Chế độ xem lớp chính là danh sách người tham gia; chưa được thử với giáo viên và học sinh thật.
- Các ngôn ngữ khác tiếng Anh là bản dịch máy cho đến khi người bản ngữ đọc qua.
- Bộ cài Windows chưa được ký mã (chọn More info, rồi Run anyway); ảnh đĩa macOS chưa được notarize (nhấn chuột phải, rồi Open).

## Trước đó: 0.8 và 0.8.1

Đây là những thay đổi trong MarkupCraft 0.8 và 0.8.1 so với 0.7. Điều lớn nhất mới là một đánh dấu có thể là một nhiệm vụ do ai đó, hoặc trợ lý của chính bạn, thực hiện, và nhiệm vụ đó tự đóng khi bản vẽ thực sự thay đổi.

### Mới

**Đánh dấu có hành động**

- **Biến đánh dấu thành nhiệm vụ.** Chọn một hoặc nhiều đánh dấu, mở thẻ {{ui:Tasks}} và chọn {{ui:Make selected a task}}. Một nhiệm vụ có tiêu đề, một người hoặc trợ lý đã kết nối của bạn để thực hiện, một ngày hạn tùy chọn và một trạng thái; nó giữ vị trí trên tờ và chuỗi phản hồi của mình. Xem [Biến đánh dấu thành nhiệm vụ](topic:markups-that-act).
- **Nhiệm vụ tự đóng.** Một nhiệm vụ có thể theo dõi bản vẽ bên trong đánh dấu của nó. Mở một bản sửa đổi mới hơn của tờ và chọn {{ui:Check now}}: nếu các nét trong khu vực đó thay đổi quá một chút, nhiệm vụ được đánh dấu Done, đánh dấu chuyển thành Completed và một ghi chú trong chuỗi nêu rõ điều gì đã thay đổi. Một con dấu ngày mới, hoặc các nét dịch chuyển ít hơn 1.5 điểm, không được tính. Thay vào đó, một nhiệm vụ có thể theo dõi một phần tử mô hình: trợ lý của bạn báo cáo phần tử bằng `tasks_check`, và một báo cáo sau đó khác đi, hoặc một phần tử bị xóa, sẽ đóng nhiệm vụ. Một bước hoàn tác sẽ mở lại nhiệm vụ.
- **Tìm công việc.** Lọc danh sách {{ui:Tasks}} theo trạng thái và theo người được giao, bao gồm {{ui:Overdue}}; chọn {{ui:Assigned to}}, rồi {{ui:Assistant}} để xem những gì đang chờ trợ lý của bạn. Một nhiệm vụ quá ngày hạn sẽ hiện như một cảnh báo trong bảng Vấn đề. {{ui:CSV}} xuất danh sách. Nhiệm vụ được lưu trong PDF cùng với đánh dấu và đi qua Live như các thuộc tính đánh dấu khác.

**Điều gì đã thay đổi, dưới dạng danh sách đơn giản**

- **Liệt kê các thay đổi.** Mở thẻ {{ui:Compare}}, rồi {{ui:Compare a whole set}}, chọn tệp cũ hơn và tệp mới hơn, và chọn {{ui:List the changes}}. Danh sách bắt đầu bằng một số đếm, rồi bao quát từng tờ đã thay đổi, thay đổi lớn nhất trước: vị trí trên tờ, mức độ lớn (theo đơn vị thực cũng như inch trên giấy đối với tờ đã hiệu chuẩn), có nét nào được thêm hoặc bỏ đi, có bao nhiêu đánh dấu nằm ở đó, và những từ nào xuất hiện hoặc biến mất. {{ui:Copy the list}} đưa danh sách vào bộ nhớ tạm, và {{ui:CSV}} ghi mỗi thay đổi thành một hàng. Xem [Liệt kê những gì đã thay đổi giữa các bản sửa đổi](topic:what-changed-in-words).

**Ghi chú giọng nói và quyết định**

- **Ghi chú giọng nói.** Trong thẻ {{ui:Notes}}, chọn {{ui:Record a voice note}}, rồi {{ui:Stop recording}}; bản ghi âm tự dừng sau hai phút. Ghi chú được ghim ở giữa tờ, bạn kéo nó đến nơi cần thiết và gõ chú thích trong {{ui:Properties}}, và {{ui:Play}} trong danh sách sẽ phát nó. Bản ghi âm được lưu bên trong PDF.
- **Quyết định.** {{ui:Pin a decision}} ghi một hoặc hai câu lên tờ. Nếu nó thay thế một quyết định trước đó, hãy chọn quyết định đó trong {{ui:It replaces}}: quyết định cũ vẫn còn, được đánh dấu Replaced, và trỏ đến quyết định mới. Một bước hoàn tác sẽ đưa nó trở lại. Xem [Ghim ghi chú giọng nói và quyết định lên tờ](topic:voice-notes-and-decisions).

**Gửi bản đánh dấu đỏ theo bản sửa đổi**

- **Gửi và trả lời.** Trong thẻ {{ui:Tasks}}, mở {{ui:Redline to revision}}, gõ bản sửa đổi mà các đánh dấu đang so với, và chọn {{ui:Export redline file}}. Bạn nhận được một tệp `.redline.json` với một mục cho mỗi đánh dấu đang mở: tờ, vị trí (tính theo phân số của tờ, nên bản in lại ở kích thước khác vẫn khớp), các từ, tác giả, chuỗi phản hồi và nhiệm vụ của nó. Người vẽ các thay đổi trả lời là Accepted, Rejected hoặc Done trong một tệp `.redline-answers.json`; {{ui:Load answers file…}} gán trạng thái đó và ghi chú của người vẽ cho từng đánh dấu, như một bước hoàn tác. Xem [Gửi đánh dấu cho người vẽ dưới dạng bản đánh dấu đỏ](topic:redline-to-revision).

**Trợ lý AI**

- **Thêm công cụ.** Một trợ lý bạn đã kết nối qua CadCraft Studio có thể liệt kê nhiệm vụ (`tasks_list`), tạo hoặc thay đổi một nhiệm vụ (`task_set`), gỡ nhiệm vụ ra (`task_clear`), kiểm tra một nhiệm vụ với một bản sửa đổi mới hơn hoặc một phần tử (`tasks_check`), và đọc danh sách thay đổi dạng văn bản giữa hai bộ bản vẽ đang mở (`revisions_changes`). Trợ lý chỉ nhận các công cụ bạn đã chọn dưới công tắc Assistants, và mỗi thay đổi là một bước hoàn tác. Xem [Dùng MarkupCraft với trợ lý AI](topic:use-with-ai-assistants).

### Trong mọi ứng dụng

- **Ngôn ngữ.** CadCraft Studio hiện có 54 ngôn ngữ. Mười ngôn ngữ mới là: tiếng Litva, tiếng Latvia, tiếng Bosnia, tiếng Marathi, tiếng Telugu, tiếng Albania, tiếng Afrikaans, tiếng Philippines, tiếng Swahili và tiếng Uzbek. Tất cả các ngôn ngữ không phải tiếng Anh đều là bản dịch máy cho đến khi người bản ngữ đọc qua.
- **Thiết bị nhập.** {{ui:Settings}} › {{ui:Global}} › {{ui:Input devices}} quyết định bàn di chuột, nút bên của chuột, bút, thao tác chạm bằng ngón tay, chuột 3D, tay cầm chơi game hoặc bộ điều khiển MIDI sẽ làm gì, cho mọi ứng dụng hoặc chỉ cho ứng dụng này. Cho đến khi bạn thay đổi gì đó, mọi thiết bị vẫn hoạt động như trước. Xem [Dùng bàn di chuột, chuột 3D hoặc bộ điều khiển](common:input-devices).
- **Hàng thanh công cụ.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} có {{ui:Wrap}} (mặc định), {{ui:2 rows}} và {{ui:1 row}}, để bản vẽ có thêm chỗ. Xem [Sắp xếp các bảng](common:arrange-panels).
- **Lưới thuộc tính.** Các trường Style của một đánh dấu dùng lưới chung, với các nhóm có thể thu gọn và các cột nhãn và giá trị.
- **Bảng Vấn đề.** Các cảnh báo từ ứng dụng, chẳng hạn một nhiệm vụ quá hạn, được gom vào một bảng Vấn đề.
- **Live và tiện ích bổ sung.** Phiên Live được mô tả trong [Làm việc cùng nhau trực tiếp](common:work-together-live); danh sách tiện ích bổ sung theo tài khoản của bạn có trong [Tiện ích bổ sung và danh sách tài khoản của bạn](common:addons-basics).
- **Kết nối AI của bạn.** CadCraft Studio là trung tâm cho trợ lý AI của riêng bạn: kết nối một lần cho cả tám ứng dụng. Bản thân các ứng dụng không có AI riêng.

### Đã sửa trong 0.8.1

- **Studio có thể đổi ngôn ngữ khi đang chạy.** Trước đây, ứng dụng máy tính và các bản đóng gói vẫn ở tiếng Anh. Điều này chưa được thử trên mọi nền tảng: hãy cho chúng tôi biết nếu ngôn ngữ không đổi.
- Các bản cài đặt Studio 0.8 được cung cấp bản 0.8.1 qua {{ui:Settings}} › {{ui:Updates}}.

### Chưa có trong phiên bản này

- **Chưa ký mã.** Bộ cài Windows và tệp .dmg macOS chưa có chữ ký. Trên Windows, nếu SmartScreen chặn bộ cài, chọn {{ui:More info}}, rồi {{ui:Run anyway}}. Trên Mac, nhấn chuột phải vào CadCraft Studio và chọn {{ui:Open}}. Các bản trên cửa hàng đang tạm dừng.
- **Kết nối AI của bạn vẫn chưa hoàn thiện ở một số phần.** Kết nối một chạm bên trong Studio, bộ kết nối được lưu trữ cho trợ lý trên trình duyệt và khóa API riêng của bạn trong Studio chưa được hứa cho bản phát hành này. Vòng lặp nhiệm vụ đã được thử, nhưng chưa thử với một trợ lý thật.
- **Kiểm tra nhiệm vụ cần cùng kích thước trang.** Một tờ được in lại ở kích thước khác sẽ không khớp, nên các nhiệm vụ của nó không đóng. Các tờ được ghép cặp theo số tờ, nếu không thì theo vị trí trang.
- **Ghi chú giọng nói chỉ là bản ghi âm.** Không có bản chép lời, và trợ lý chỉ thấy độ dài, tác giả và chú thích của ghi chú, không thấy âm thanh. Việc ghi âm đã được thử với micrô giả trong trình duyệt không giao diện; micrô thật trên điện thoại, máy tính bảng hoặc laptop vẫn cần kiểm tra.
- **Tờ tính toán và lý do trong PDF** được giữ trong một mục riêng của tệp. Một MarkupCraft cũ sẽ bỏ qua mục đó và loại nó khi lưu tệp lần tới, nên hãy mở và lưu các tệp như vậy bằng phiên bản 0.8 trở lên.
- **Phía người vẽ của bản đánh dấu đỏ.** CadCraft đọc tệp đánh dấu đỏ và trả lời nó vẫn chưa được xây dựng.
- **Ngôn ngữ khác.** Thanh ứng dụng tiếng Tamil bị tràn 528 px.

Mọi thứ khác có trong [Những gì chưa được xây dựng](topic:not-built-yet). Với bản phát hành trước đó, xem [Có gì mới trong 0.7](topic:whats-new-0-7).
