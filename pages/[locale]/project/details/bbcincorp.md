🏢 Project Name: BBCIncorp - Global Business Formation Platform
Role: Frontend Leader & Cloud Engineer Tech Stack: Next.js, TailwindCSS, AWS (Lambda, EC2, S3, CloudFront, CodeBuild), Headless WordPress.

1. The Challenge (Bài toán) Hệ thống cũ (SlugJS) nặng nề, điểm hiệu năng thấp (<40) ảnh hưởng SEO. Đặc biệt, khi chuyển sang kiến trúc Static Site (S3 Hosting) để tăng tốc độ, team gặp thách thức lớn: Web tĩnh trên S3 không thể tự xử lý các logic phía server như chuyển hướng 301/302 phức tạp (redirects) hoặc xử lý dynamic headers điều mà hệ thống cũ đang làm.

2. The Solution (Giải pháp & Kiến trúc) Tôi đã thiết kế kiến trúc Hybrid Cloud kết hợp giữa độ nhanh của Static Site và sự linh hoạt của Serverless:

Frontend Modernization: Chuyển đổi sang Next.js + TailwindCSS với Atomic Design, tăng khả năng tái sử dụng code và bảo trì.

Serverless Logic (AWS Lambda):

Triển khai AWS Lambda để đảm nhận các tác vụ server-side mà S3 không làm được.

Xử lý logic điều hướng (Dynamic Redirects) để giữ thứ hạng SEO khi thay đổi cấu trúc URL.

Tùy biến phản hồi HTTP (Headers manipulation) để tăng cường bảo mật và caching.

Infrastructure & Security:

Static Delivery: Build static file qua CodeBuild -> đẩy lên S3 -> phân phối qua CloudFront (CDN) với tốc độ tải <1s.

Private CMS: Dựng WordPress trên EC2 trong Private Subnet. Sử dụng NAT Gateway để chặn truy cập public, chỉ cho phép Build Server truy xuất dữ liệu qua lớp bảo mật mạng (VPC Security Groups).

3. Key Achievements (Thành tựu)

🏆 Maximum Performance: Đạt điểm tuyệt đối 100/100 PageSpeed Insights (từ mức 40 cũ).

🧠 Smart Routing: Giải quyết triệt để vấn đề routing của web tĩnh bằng Lambda, đảm bảo giữ nguyên traffic SEO khi migration.

🛡️ Enterprise Security: Hệ thống CMS được bảo vệ tuyệt đối, không có bề mặt tấn công từ Internet (Zero public exposure).

👨‍💻 Leadership: Đề xuất công nghệ, mentor team member và xây dựng quy trình CI/CD chuẩn chỉnh.