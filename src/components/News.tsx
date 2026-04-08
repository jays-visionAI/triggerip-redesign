import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './News.css';

const news = [
  {
    type: '보도자료',
    date: '2024.03.15',
    title: '트리거투자파트너스, 2024년 첫 투자 완료...AI 스타트업에 50억 투자',
    excerpt: '차세대 AI 솔루션 기업인 DeepVision AI에 시리즈B 투자를 단행하며 AI 영역 확장을 이어갑니다.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop',
  },
  {
    type: '홍보자료',
    date: '2024.03.01',
    title: '트리거투자파트너스 세종본부 확장 이전 기념 세미나 개최',
    excerpt: '투자 전략과 스타트업 성장 사례를 공유하는 특별 세미나를 3월 15일에 개최합니다.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop',
  },
  {
    type: '투자사례',
    date: '2024.02.20',
    title: 'PayNext Korea, 시리즈C 투자 유치 성공...글로벌 확장 박차',
    excerpt: '트리거투자파트너스가 주도한 투자로 PayNext Korea의 동남아시아 시장 진출이 가속될 것으로 기대됩니다.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop',
  },
];

export default function News() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="news" className="news section">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <span className="section-label">NEWSROOM</span>
          <h2 className="section-title">
            최신
            <br />
            <span className="gradient-text">소식</span>
          </h2>
          <p className="section-desc">
            트리거투자파트너스의 최신 뉴스와 공지사항을 확인하세요
          </p>
        </motion.div>

        {/* News Grid */}
        <div className="news-grid">
          {news.map((item, index) => (
            <motion.article
              key={index}
              className={`news-card ${index === 0 ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <div className="news-image">
                <img src={item.image} alt={item.title} loading="lazy" />
                <span className="news-type">{item.type}</span>
              </div>
              <div className="news-content">
                <span className="news-date">{item.date}</span>
                <h3 className="news-title">{item.title}</h3>
                <p className="news-excerpt">{item.excerpt}</p>
                <a href="#" className="news-link">
                  <span>자세히 보기</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All */}
        <motion.div
          className="news-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a href="#" className="btn btn-outline">
            <span>전체 뉴스 보기</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
