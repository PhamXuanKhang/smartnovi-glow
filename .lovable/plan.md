

## 🌟 SmartNovi Landing Page - Kế hoạch triển khai

### Tổng quan dự án
Landing page giới thiệu đèn học thông minh SmartNovi với phong cách **Dark Futuristic**, tích hợp hiệu ứng Glassmorphism và ánh sáng phát quang, nhấn mạnh yếu tố AI và công nghệ cao.

---

### 🎨 Design System

**Color Palette:**
- **Background:** Gradient từ Midnight Blue (#0a0a1a) → Deep Purple (#1a0a2e)
- **Primary Accent:** Warm Yellow (#fbbf24) - đại diện ánh sáng đèn
- **Secondary Accent:** Neon Purple (#a855f7) - đại diện AI
- **Glass:** rgba(255, 255, 255, 0.05) với backdrop-blur

**Typography:** Inter font family (đã hỗ trợ sẵn)

---

### 📱 Cấu trúc trang (7 Sections)

#### 1. **Navbar (Sticky + Blur)**
- Logo "SmartNovi" với text gradient vàng-tím
- Menu: Tính năng | Công nghệ | Demo | Liên hệ (smooth scroll)
- CTA Button: "Đăng ký nhận tin" với hiệu ứng glow hover
- Transparent → Blur background khi scroll

#### 2. **Hero Section**
- **Headline:** "Biến góc học tập thành không gian thông minh"
- **Subheadline:** Giới thiệu trợ lý Xiaozhi và tính năng bảo vệ mắt
- **CTA:** "Khám phá ngay" + Badge "Coming Soon"
- **Visual:** Placeholder đèn với hiệu ứng Pulse Glow + Particle effects bay xung quanh
- Animation: Fade-in từ dưới lên với Framer Motion

#### 3. **Features Section (3 Cards)**
- Layout: Grid 3 cột (responsive → 1 cột mobile)
- **Card 1:** 💡 Ánh sáng thông minh - 3 chế độ màu (Warm/Neutral/Cool)
- **Card 2:** 🤖 Trợ lý AI Xiaozhi - Hỏi đáp tiếng Việt, điều khiển giọng nói
- **Card 3:** 🎵 Học tập & Giải trí - Loa bluetooth, nhắc lịch học
- Hiệu ứng: Glass cards với border gradient, hover scale-up

#### 4. **Tech Specs Section (Zigzag Layout)**
- **Spec 1:** ESP32-S3 Core - Chip xử lý AI mạnh mẽ
- **Spec 2:** Mic đa hướng - Thu âm 360° trong bán kính 5m
- **Spec 3:** Pin Li-ion 5000mAh - 8 giờ sử dụng liên tục
- Animation: Parallax scrolling, các item xuất hiện so le khi scroll

#### 5. **Video Demo Section**
- Khung video placeholder 16:9 với viền neon glow
- Caption: "Xem SmartNovi hoạt động thực tế"
- Play button với hiệu ứng ripple

#### 6. **Coming Soon / Email Signup Section**
- Countdown hoặc thông báo "Sắp ra mắt Q2/2026"
- Nút CTA: "Đăng ký nhận thông tin sớm nhất" (link external hoặc để placeholder)
- Decorative particles xung quanh

#### 7. **Footer**
- © 2026 SmartNovi Team
- Social links: Facebook, Instagram, YouTube
- Text: "Designed with ❤️ in Vietnam"

---

### ✨ Hiệu ứng đặc biệt

1. **Particle Effects:** Các hạt sáng bay lơ lửng xung quanh sản phẩm ở Hero section
2. **Parallax Scrolling:** Background layers di chuyển với tốc độ khác nhau
3. **Glow Effects:** Buttons và cards có shadow phát sáng
4. **Glassmorphism:** Cards trong suốt với backdrop-blur
5. **Smooth Scroll:** Điều hướng mượt mà giữa các sections

---

### 📦 Dependencies cần thêm
- `framer-motion` - Animation library

---

### 📁 Cấu trúc file
```
src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── TechSpecs.tsx
│   ├── VideoDemo.tsx
│   ├── ComingSoon.tsx
│   ├── Footer.tsx
│   └── ui/
│       ├── GlassCard.tsx
│       └── ParticleBackground.tsx
├── pages/
│   └── Index.tsx (tổng hợp các sections)
└── index.css (custom styles, gradients)
```

