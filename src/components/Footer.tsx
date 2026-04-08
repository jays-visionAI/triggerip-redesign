import './Footer.css';

const footerLinks = {
  company: [
    { label: '회사소개', href: '#about' },
    { label: '연혁', href: '#about' },
    { label: '채용안내', href: '#' },
    { label: '오시는길', href: '#contact' },
  ],
  services: [
    { label: '초기 투자', href: '#services' },
    { label: '성장 투자', href: '#services' },
    { label: 'Exit 전략', href: '#services' },
    { label: '포트폴리오 관리', href: '#services' },
  ],
  resources: [
    { label: '투자사례', href: '#cases' },
    { label: '뉴스룸', href: '#news' },
    { label: '블로그', href: '#' },
    { label: 'IR 자료실', href: '#' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-brand">
              <div className="footer-logo">
                <svg viewBox="0 0 40 40" fill="none">
                  <path d="M20 4L36 36H4L20 4Z" fill="url(#footerLogoGradient)" />
                  <path d="M20 12L28 28H12L20 12Z" fill="#0a0a0f" />
                  <defs>
                    <linearGradient id="footerLogoGradient" x1="20" y1="4" x2="20" y2="36">
                      <stop stopColor="#c8ff00" />
                      <stop offset="1" stopColor="#00ff88" />
                    </linearGradient>
                  </defs>
                </svg>
                <span>트리거투자파트너스</span>
              </div>
              <p className="footer-tagline">
                혁신을引领하는 투자 파트너
                <br />
                Trigger Investment Partners, LLC.
              </p>
              <div className="footer-cert">
                <span>venture capital</span>
                <span>investment</span>
              </div>
            </div>

            {/* Links */}
            <div className="footer-links-group">
              <h4>회사</h4>
              <ul>
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-links-group">
              <h4>서비스</h4>
              <ul>
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-links-group">
              <h4>리소스</h4>
              <ul>
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="footer-newsletter">
              <h4>뉴스레터 구독</h4>
              <p>최신 투자 정보와 뉴스를 받아보세요</p>
              <form className="newsletter-form">
                <input type="email" placeholder="이메일을 입력하세요" />
                <button type="submit">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Trigger Investment Partners, LLC. All Rights Reserved.
            </p>
            <div className="footer-legal">
              <a href="#">개인정보처리방침</a>
              <a href="#">이용약관</a>
              <a href="#">이메일무단수집거부</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
