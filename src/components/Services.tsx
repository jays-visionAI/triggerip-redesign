import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Services.css';

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: 'Initial Investment',
    subtitle: '초기 투자',
    description: '엔젤투자와 시드머니부터 스타트업의 초기 성장을 위한 전략적 자본 공급',
    tags: ['Seed', 'Pre-A', 'A'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M23 6l-9.5 9.5-5-5L1 18" />
        <path d="M17 6h6v6" />
      </svg>
    ),
    title: 'Growth Investment',
    subtitle: '성장 투자',
    description: '확장 단계의 스타트업에 대한 시리즈 B, C 투자로 성장 가속화 지원',
    tags: ['Series B', 'C', 'D+'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
        <path d="M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83" />
      </svg>
    ),
    title: 'Exit Strategy',
    subtitle: 'Exit 전략',
    description: 'IPO, M&A 등 최적의 Exit 기회를 찾아 투자자와 스타트업 모두의 수익 극대화',
    tags: ['IPO', 'M&A', 'Buyout'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    title: 'Portfolio Management',
    subtitle: '포트폴리오 관리',
    description: '투자 후 경영진과 협력하여 전략 수립, 인력 구성, 사업 확장全方位 지원',
    tags: ['Strategy', 'HR', 'BD'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Due Diligence',
    subtitle: '실사 지원',
    description: '전문팀의 상세한 Due Diligence로 리스크最小화, 의사결정质量 보장',
    tags: ['Financial', 'Legal', 'Tech'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
    title: 'Value-Added Service',
    subtitle: '부가서비스',
    description: '글로벌 네트워크와 파트너십을 통한 홍보, 세일즈, IR全方位 지원',
    tags: ['PR', 'Sales', 'IR'],
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="services section">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <span className="section-label">SERVICES</span>
          <h2 className="section-title">
            우리만의
            <br />
            <span className="gradient-text">특별한 서비스</span>
          </h2>
          <p className="section-desc">
            스타트업의 성장 단계에 맞춘 맞춤 투자 솔루션과
           附加值 서비스를 제공합니다
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="service-header">
                <div className="service-icon">{service.icon}</div>
                <div className="service-meta">
                  <span className="service-subtitle">{service.subtitle}</span>
                  <h3 className="service-title">{service.title}</h3>
                </div>
              </div>
              <p className="service-desc">{service.description}</p>
              <div className="service-tags">
                {service.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="services-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="cta-content">
            <h3>함께 성장할 파트너를 찾고 계신가요?</h3>
            <p>트러거투자파트너스가 성공적인 투자를導引합니다</p>
          </div>
          <a href="#contact" className="btn btn-primary">
            <span>투자문의</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
