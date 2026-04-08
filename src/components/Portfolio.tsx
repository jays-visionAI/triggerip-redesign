import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Portfolio.css';

const cases = [
  {
    category: 'FinTech',
    title: 'PayNext Korea',
    description: '차세대 결제 플랫폼으로 2024년 기준 100만用户提供突破',
    amount: '50억',
    roi: '+320%',
    status: 'Exit Complete',
  },
  {
    category: 'HealthTech',
    title: 'MediChain',
    description: '블록체인 기반 의료정보 플랫폼, 국내 50개 병원 도입',
    amount: '30억',
    roi: '+180%',
    status: 'Growth Stage',
  },
  {
    category: 'AI/ML',
    title: 'DeepVision AI',
    description: '컴퓨터 비전 AI 솔루션, 글로벌 Tech 기업과 파트너십 체결',
    amount: '80억',
    roi: '+450%',
    status: 'IPO Prep',
  },
  {
    category: 'E-Commerce',
    title: 'ShopSmart',
    description: 'AI 추천 엔진 기반 이커머스 플랫폼, MAU 500만突破',
    amount: '40억',
    roi: '+250%',
    status: 'Exit Complete',
  },
];

const sectors = ['전체', 'FinTech', 'HealthTech', 'AI/ML', 'E-Commerce', 'CleanTech', 'EdTech'];

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="cases" className="portfolio section">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <span className="section-label">INVESTMENT CASES</span>
          <h2 className="section-title">
            성공한 투자
            <br />
            <span className="gradient-text">사례들</span>
          </h2>
          <p className="section-desc">
            트리거투자파트너스의 검증된 투자 성과를 확인하세요
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="portfolio-filter"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {sectors.map((sector, index) => (
            <button
              key={index}
              className={`filter-tab ${index === 0 ? 'active' : ''}`}
            >
              {sector}
            </button>
          ))}
        </motion.div>

        {/* Cases Grid */}
        <div className="cases-grid">
          {cases.map((caseItem, index) => (
            <motion.div
              key={index}
              className="case-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <div className="case-header">
                <span className="case-category">{caseItem.category}</span>
                <span className={`case-status ${caseItem.status.includes('Exit') ? 'exit' : 'active'}`}>
                  {caseItem.status}
                </span>
              </div>
              <h3 className="case-title">{caseItem.title}</h3>
              <p className="case-desc">{caseItem.description}</p>
              <div className="case-metrics">
                <div className="metric">
                  <span className="metric-label">투자금</span>
                  <span className="metric-value">{caseItem.amount}</span>
                </div>
                <div className="metric">
                  <span className="metric-label">ROI</span>
                  <span className="metric-value gradient-text">{caseItem.roi}</span>
                </div>
              </div>
              <div className="case-visual">
                <div className="visual-bar" style={{ '--width': caseItem.roi } as React.CSSProperties}>
                  <span className="visual-progress"></span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="portfolio-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a href="#" className="btn btn-secondary">
            <span>전체 투자사례 보기</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
