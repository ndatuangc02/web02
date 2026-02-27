import React from 'react';

// Mock Data
const posts = [
  {
    id: 1,
    title: "Bắt Đầu Với Next.js 14 và App Router",
    excerpt: "Khám phá cách App Router thay đổi hoàn toàn kiến trúc của một ứng dụng React. Tìm hiểu các khái niệm như Server Components, Client Components, và Data Fetching hiệu quả.",
    tag: "Next.js",
    date: "27 Tháng 02, 2026",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    author: "Nguyễn Hải",
  },
  {
    id: 2,
    title: "Thiết Kế Web Cho Tương Lai: Glassmorphism & Micro-Interactions",
    excerpt: "Xu hướng thiết kế web đang dịch chuyển sang những giao diện tinh tế, mượt mà và trực quan hơn. Học cách thêm chiều sâu và hiệu ứng ánh sáng vào UI của bạn.",
    tag: "UI/UX",
    date: "20 Tháng 02, 2026",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop",
    author: "Trần Anh",
  },
  {
    id: 3,
    title: "Ứng Dụng AI Trong Lập Trình: Agentic Coding",
    excerpt: "Làm thế nào AI đang thay đổi cách chúng ta viết code? Khám phá sức mạnh của các trợ lý AI với khả năng suy luận và tự động hóa quy trình phần mềm phức tạp.",
    tag: "AI",
    date: "10 Tháng 02, 2026",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
    author: "Lê Đạt",
  },
  {
    id: 4,
    title: "Tối Ưu Hiệu Suất Render Bằng React 19",
    excerpt: "React compiler cuối cùng đã ra mắt, hứa hẹn sẽ mang lại hiệu suất đỉnh cao mà không cần đến việc thêm useMemo hay useCallback vào mã nguồn thủ công nữa.",
    tag: "React",
    date: "05 Tháng 02, 2026",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
    author: "Minh Châu",
  }
];

export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <nav className="navbar">
        <div className="container navbar-container">
          <a href="#" className="logo">DevBlog.</a>
          <div className="nav-links d-none d-md-flex">
            <a href="#">Trang chủ</a>
            <a href="#">Bài viết</a>
            <a href="#">Về tôi</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-badge">Cập nhật xu hướng công nghệ</div>
          <h1>Khám Phá Sức Mạnh<br />Của Web Hiện Đại</h1>
          <p>Nơi giao thoa giữa sáng tạo UI/UX và công nghệ tối ưu hóa hiệu suất web frontend. Cùng nhau chia sẻ kiến thức và kinh nghiệm lập trình.</p>
        </div>
      </section>

      {/* Blog Feed */}
      <section className="blog-section">
        <div className="container">
          <h2 className="section-title">Bài viết mới nhất</h2>
          <div className="blog-grid">
            {posts.map(post => (
              <article key={post.id} className="blog-card">
                <div className="card-image-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={post.image} alt={post.title} className="card-image" />
                </div>
                <div className="card-content">
                  <div className="card-meta">
                    <span className="card-tag">{post.tag}</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="card-title">{post.title}</h3>
                  <p className="card-excerpt">{post.excerpt}</p>
                  <div className="card-footer">
                    <div className="author-avatar"></div>
                    <span className="author-name">{post.author}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} DevBlog. Một sản phẩm thử nghiệm xây dựng bởi Next.js.</p>
        </div>
      </footer>
    </main>
  );
}
