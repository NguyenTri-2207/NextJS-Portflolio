1. Project Detail (Dùng để bỏ vào Portfolio chi tiết)
🏢 Project Name: IELTS Intensive Academy - Automated Infrastructure & Linux Hardening
Role: DevOps Engineer & System Administrator Tech Stack: AWS EC2 (Ubuntu), Bash Scripting, LAMP Stack (Linux, Apache, MySQL, PHP), Let's Encrypt (Certbot), Git.

1. The Challenge (Bài toán) Khách hàng cần triển khai một hệ thống website bán khóa học trực tuyến (PHP/MySQL) lên AWS. Yêu cầu đặt ra là:

Chi phí tối ưu: Phải chạy ổn định trên instance nhỏ (t3.medium) để tiết kiệm ngân sách.

Triển khai nhanh: Quy trình setup server thủ công cũ tốn 2-3 tiếng và thường xuyên gặp lỗi phân quyền (Permission denied) khi ứng dụng ghi file log/cache.

Bảo mật: Cần đảm bảo HTTPS và chống các lỗ hổng web cơ bản.

2. The Solution (Giải pháp Automation) Thay vì setup thủ công, tôi đã xây dựng bộ Bash Scripts (Infrastructure as Code - Lite) để tự động hóa toàn bộ quy trình Provisioning và Deployment:

Automated Provisioning: Script setup-server.sh tự động cài đặt và cấu hình chuẩn LAMP Stack (Apache, PHP 8.1, MySQL) chỉ trong một lần chạy, đảm bảo môi trường đồng nhất (Consistency).

Security Automation: Tích hợp script cài đặt SSL tự động qua Certbot (Let's Encrypt), tự động xử lý các lỗi Redirect Loop thường gặp giữa Cloudflare/ALB và Apache.

Database Management: Script setup-database.sh tự động tạo User, Database và import dữ liệu ban đầu, loại bỏ rủi ro thao tác sai lệch trên Production.

3. Key Technical Highlights (Điểm nhấn kỹ thuật - "Ăn tiền")

Web Server Hardening (Apache):

Tối ưu cấu hình VirtualHost: Bật module deflate (nén Gzip) và cấu hình ExpiresByType để cache tài nguyên tĩnh (Images, CSS, JS) tại trình duyệt người dùng 1 tháng, giúp giảm tải đáng kể cho server.

Security Headers: Inject trực tiếp các headers bảo mật (X-Frame-Options, X-XSS-Protection, X-Content-Type-Options) vào cấu hình Apache để chống các cuộc tấn công XSS và Clickjacking.

Linux Permission Management:

Xây dựng cơ chế phân quyền chặt chẽ: Code thuộc quyền sở hữu của ubuntu, nhưng Apache (www-data) chỉ được phép ghi vào đúng các thư mục cần thiết (upload, caches). Điều này ngăn chặn hacker chiếm quyền điều khiển server nếu mã nguồn web có lỗ hổng.

Operational Scripts:

Viết script update-code.sh chuẩn hóa quy trình git pull -> fix permission. Dev chỉ cần chạy 1 lệnh là code mới lên sóng an toàn, không lo sập web do sai quyền.

4. Results (Kết quả)

⏱ Time Savings: Giảm thời gian dựng server mới từ 3 giờ xuống còn < 10 phút.

🔒 Security: Đạt điểm A+ SSL trên SSL Labs nhờ cấu hình Hardening chuẩn.

💰 Cost: Hệ thống vận hành mượt mà trên AWS EC2 t3.medium (~$30/tháng), chịu tải ổn định cho hàng nghìn học viên truy cập.