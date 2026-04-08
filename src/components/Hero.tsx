import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      {/* Animated Background */}
      <div className="hero-bg">
        <div className="hero-grid"></div>
        <div className="hero-glow hero-glow-1"></div>
        <div className="hero-glow hero-glow-2"></div>
        <div className="hero-particles">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 0],
                y: [-20, -100],
                x: Math.random() * 100 - 50,
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                bottom: '10%',
              }}
            />
          ))}
        </div>
      </div>

      <div className="hero-container">
        {/* Badge */}
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="badge-dot"></span>
          <span>2024 혁신성장 에너지</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          당신의 투자를
          <br />
          <span className="gradient-text">이끌</span>하는 파트너
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          트리거투자파트너스는 혁신적 스타트업과 투자자를 연결하는
          <br className="hide-mobile" />
          차세대 투자 플랫폼입니다
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="hero-cta-group"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="btn btn-primary"
          >
            <span>투자문의하기</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            duration={500}
            className="btn btn-secondary"
          >
            <span>서비스 보기</span>
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="stat-item">
            <span className="stat-number gradient-text">500+</span>
            <span className="stat-label">투자 완료</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number gradient-text">2.5T</span>
            <span className="stat-label">투자 규모</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number gradient-text">98%</span>
            <span className="stat-label">성공률</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <span>Scroll</span>
        <motion.div
          className="scroll-mouse"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg width="20" height="32" viewBox="0 0 20 32" fill="none">
            <rect x="1" y="1" width="18" height="30" rx="9" stroke="currentColor" strokeWidth="2"/>
            <motion.circle
              cx="10"
              cy="10"
              r="3"
              fill="currentColor"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
