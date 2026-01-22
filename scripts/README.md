# Image Optimization Scripts

## Optimize All Images

Script tổng quát để tối ưu tất cả hình ảnh trong project:
- Convert PNG/JPG sang WebP (tiết kiệm ~70% dung lượng)
- Tạo optimized versions của format gốc
- Tạo responsive sizes cho images lớn (>500px)

### Cách sử dụng:

1. **Cài đặt dependencies:**
```bash
npm install
```

2. **Chạy script:**
```bash
npm run optimize:images
```

3. **Kết quả:**
Script sẽ tự động:
- Tìm tất cả PNG, JPG, JPEG trong thư mục `public/`
- Tạo WebP version cho mỗi image
- Tạo optimized PNG/JPG version
- Tạo responsive sizes (400w, 800w, 1200w) cho images lớn
- Bỏ qua các thư mục: node_modules, .next, fonts, locales

### Files được tạo:

Với mỗi image `example.png`:
- `example.webp` - WebP version (chính)
- `example-optimized.png` - Optimized PNG (fallback)
- `example-400w.webp` - Responsive WebP (400px)
- `example-800w.webp` - Responsive WebP (800px)
- `example-1200w.webp` - Responsive WebP (1200px)
- `example-400w.png` - Responsive PNG (400px)
- `example-800w.png` - Responsive PNG (800px)
- `example-1200w.png` - Responsive PNG (1200px)

### Ước tính tiết kiệm:

- **WebP:** ~70% nhỏ hơn PNG/JPG
- **Optimized PNG/JPG:** ~20-30% nhỏ hơn original
- **Responsive sizes:** Chỉ tải size cần thiết theo viewport

### OptimizedImage Component

Sau khi optimize, sử dụng `OptimizedImage` component thay vì `next/image`:

```jsx
import OptimizedImage from "components/molecules/OptimizedImage";

<OptimizedImage
  src="/assets/banner/avatar.png"
  alt="Avatar"
  width={350}
  height={350}
  className="rounded-full"
  priority
/>
```

Component tự động:
- Sử dụng WebP cho browsers hỗ trợ
- Fallback về optimized PNG/JPG
- Responsive images với srcSet
- Xử lý remote URLs (không optimize)

### Lưu ý:

- Script sử dụng `sharp` package để xử lý images
- Quality setting: 85 cho WebP, 90 cho PNG, 85 cho JPG
- Compression level: 9 (maximum) cho PNG
- Chỉ tạo responsive sizes cho images > 500px
- Script sẽ skip các files đã được optimize (có suffix -optimized, -400w, etc.)

---

## Optimize Avatar (Legacy)

Script riêng để optimize avatar image (đã được thay thế bởi `optimize:images`):

```bash
npm run optimize:avatar
```
