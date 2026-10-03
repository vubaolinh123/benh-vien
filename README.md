# Bệnh viện Đa khoa Đại An — demo HTML/CSS/JS

Mở `index.html` trực tiếp, hoặc chạy `python -m http.server 5500 --bind 127.0.0.1` trong thư mục này và truy cập http://127.0.0.1:5500.

Không cần npm, framework, database hoặc bước build. Có responsive, menu di động, tìm kiếm không dấu, bộ lọc bài viết, chi tiết bài/chuyên khoa, đặt lịch mô phỏng, tra cứu mẫu, góp ý và FAQ.

## Nội dung và tài sản

- Logo: `assets/Dai_An-01.png`, file gốc do khách hàng cung cấp.
- Ảnh thiết kế: `assets/design-reference.png`, do khách hàng cung cấp. Ảnh minh họa Sản/Tai Mũi Họng được hiển thị bằng CSS từ ảnh mẫu. Banner dùng ảnh bìa chính thức đã lấy từ fanpage (`assets/9d44f85881139d9f.png`), hiển thị full width và giữ nguyên tỷ lệ. Cần thay bằng ảnh gốc chất lượng cao khi triển khai chính thức.
- Ảnh hoạt động và bài viết: fanpage https://www.facebook.com/bvdkdaian/?locale=vi_VN. Đọc công khai qua trình duyệt ngày 03/10/2026; ảnh lưu tại chỗ để demo không phụ thuộc URL CDN hết hạn.
- Ba bài được biên tập tóm lược, không sao chép nguyên văn, đều có URL bài gốc trong `app.js`. Không suy đoán ngày đăng từ thời gian tương đối của Facebook.
- `assets/manifest.json` lưu nguồn ảnh do công cụ trình duyệt xuất.
- Một số ảnh hoạt động cộng đồng được dùng minh họa cho chuyên khoa, không phải ảnh nhân sự/khoa đã xác minh.
- Thông tin hotline, địa chỉ, email và làm việc cuối tuần lấy từ fanpage.
- Font Be Vietnam Pro tải từ Google Fonts; khi offline dùng Arial.

## Giới hạn demo

Biểu mẫu không gửi yêu cầu mạng, không ghi localStorage và không lưu thông tin cá nhân. Không có lịch khám thật, dữ liệu bệnh án, bảng giá thật hoặc hồ sơ bác sĩ giả. Tra cứu dùng `DA-DEMO` / `0900000000`. Bảng giá chờ bệnh viện cung cấp. Nội dung giới thiệu và quy trình là nội dung minh họa, cần duyệt trước khi công khai.

## Chỉnh sửa

- Màu, responsive, bố cục: `styles.css`.
- Menu, nội dung trang chủ và footer: `index.html`.
- Bài viết: mảng `posts` trong `app.js`.
- Chuyên khoa: mảng `specialties` trong `app.js`.

Để gửi khách hàng, nén `index.html`, `styles.css`, `app.js`, `assets` và README. Website chưa được xuất bản lên Internet.
