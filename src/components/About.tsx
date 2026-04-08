import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './About.css';

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: ' Strategic Investment',
    description: '차세대 성장 산업에 집중한 전략적 투자 포트폴리오',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: ' Fast Execution',
    description: '신속한 의사결정과 효율적인 투자 프로세스',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: ' Global Network',
    description: '국내외 투자자와 스타트업의 글로벌 네트워크',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: ' Success Proven',
    description: '98% 이상의 검증된 투자 성공률',
  },
];

const milestones = [
  { year: '2018', event: '트리거투자파트너스 설립' },
  { year: '2020', event: '강남본부 개소, 투자 포트폴리오 확대' },
  { year: '2022', event: '세종본사 이전, 조직 확장이전' },
  { year: '2024', event: '500번째 투자 달성里程碑' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="about section">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <span className="section-label">ABOUT US</span>
          <h2 className="section-title">
            혁신을 이끄는
            <br />
            <span className="gradient-text">투자 파트너</span>
          </h2>
          <p className="section-desc">
            트리거투자파트너스는 스타트업과 투자자 모두에게
            최고의 가치를 창출하는 것을 목표로 합니다
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Vision & Mission */}
        <div className="vision-mission">
          <motion.div
            className="vm-card vision"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="vm-label">VISION</div>
            <h3 className="vm-title">Korea's Leading<br />Investment Platform</h3>
            <p className="vm-desc">
              대한민국을 대표하는 투자 플랫폼으로서,
              혁신적 스타트업과 우수 투자자를 연결하여
              시너지를 창출합니다
            </p>
          </motion.div>

          <motion.div
            className="vm-card mission"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="vm-label">MISSION</div>
            <h3 className="vm-title">Creating Value<br />Through Connection</h3>
            <p className="vm-desc">
              단순한 자금 조달을 넘어,
              전략적 멘토링과 네트워크를 제공하여
              투자자와 스타트업의 성장을 가속화합니다
            </p>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="timeline">
          <motion.div
            className="timeline-header"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <span className="section-label">HISTORY</span>
            <h3 className="timeline-title">우리의 여정</h3>
          </motion.div>

          <div className="timeline-track">
            <div className="timeline-line"></div>
            {milestones.map((item, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              >
                <div className="timeline-dot"></div>
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-event">{item.event}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
