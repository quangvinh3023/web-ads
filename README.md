# AUREA — Curated Experiences

Website Next.js (App Router), TypeScript và CSS responsive, dựa trên tài liệu “TÓM TẮT YÊU CẦU WEB.docx”.

## Chạy dự án

```bash
npm install
npm run dev
```

Mở http://localhost:3000. Kiểm tra production bằng `npm run build`; bản static export nằm trong `out/`.

## Đã triển khai

- Trang khám phá phong cách editorial: hero, tìm kiếm, bộ lọc địa điểm/danh mục, sắp xếp, khu VIP và danh sách thường/TOP.
- Chi tiết bài, lưu yêu thích, giao diện responsive.
- Tổng quan tài khoản, tạo nhiều bài miễn phí, lưu nháp, chỉnh sửa, gửi duyệt, tạm dừng, xóa và khôi phục.
- Khu mô phỏng Admin: duyệt hoặc từ chối kèm lý do. Bài chưa duyệt không xuất hiện công khai.
- Ví token, lịch sử cộng/trừ, kiểm tra số dư, kích hoạt 100 token và nâng cấp theo ngày còn lại.
- Thống kê hằng ngày bằng dữ liệu minh họa, hồ sơ tài khoản và kiểm tra form mật khẩu.

## Phạm vi bản trải nghiệm

Dữ liệu lưu bằng localStorage trên từng trình duyệt. Tất cả bài khởi tạo là bài mẫu, không đại diện cho doanh nghiệp thực. Mọi tài khoản và vai trò Admin đều là mô phỏng, không có xác thực hoặc phân quyền bảo mật. Không dùng để thu tiền hoặc lưu dữ liệu nhạy cảm.

Nạp token chỉ cộng số dư demo, không gọi cổng thanh toán. Thống kê không đo traffic thật. Form mật khẩu không lưu mật khẩu. Ảnh nhập bằng URL, chưa có upload storage. Ảnh minh họa từ Unsplash và font từ Google Fonts cần kết nối Internet.

## Quy tắc tạm dùng để kiểm tra giao diện

- 1 EUR = 5 token; kích hoạt sau khi được duyệt, 100 token.
- Chu kỳ demo 30 ngày; ngày còn lại làm tròn lên; phí nâng cấp lưu hai chữ số thập phân. Những lựa chọn này chưa phải chính sách đã chốt.
- TOP +200 token/tháng, VIP +250 token/tháng. Một lần nâng cấp trong chu kỳ, không cộng dồn hoặc chuyển đổi giữa TOP/VIP để tránh tự suy diễn chính sách.
- Thời hạn nâng cấp trùng quảng cáo gốc. Tạm dừng không dừng đồng hồ demo.
- Bài hết hạn bị ẩn khỏi công khai. Gia hạn chủ động từ hiện tại, không tự trừ token.
- Chỉnh sửa nội dung đưa bài về chờ duyệt. Nếu đã trả phí và còn hạn, duyệt lại khôi phục trạng thái chạy mà không thu lại phí.

## Trước khi vận hành thật

Cần backend/database, xác thực và phân quyền server, upload ảnh, sổ giao dịch token có tính nguyên tử và chống thanh toán lặp, xác nhận thanh toán, job hết hạn, hệ thống đo lượt xem và quy trình kiểm duyệt. Chốt cách tính tháng, làm tròn, chính sách chuyển gói, gia hạn, tạm dừng và hoàn phí với chủ sản phẩm trước khi viết nghiệp vụ thanh toán thật.
# web-ads

## GitHub Pages — quangvinh3020/web-ads

Workflow `.github/workflows/deploy-pages.yml` tự build và deploy khi push lên `main`, hoặc khi chọn **Run workflow** trong tab Actions.

1. Trong repo GitHub, mở **Settings → Pages → Build and deployment → Source**, chọn **GitHub Actions**.
2. Push các thay đổi lên nhánh `main`.
3. Theo dõi workflow **Deploy to GitHub Pages** trong tab **Actions**.
4. Khi deploy thành công, mở https://quangvinh3020.github.io/web-ads/.

Workflow đặt `GITHUB_PAGES=true` để Next.js build với `basePath: '/web-ads'`. Local và các nền tảng khác vẫn dùng đường dẫn gốc. Không cần commit thư mục `out/` hoặc token GitHub vào repo; workflow dùng quyền `GITHUB_TOKEN` do GitHub cấp.

Kiểm tra bản build Pages tại máy:

```bash
GITHUB_PAGES=true npm run build
```
