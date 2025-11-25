import { useState } from 'react';
import './BlogSection.scss';

const BlogSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: 'Как ИИ увеличивает конверсию сайта на 147%',
      excerpt: 'Искусственный интеллект революционизирует digital-маркетинг. Узнайте, как интеграция ИИ помогает бизнесам удваивать продажи.',
      category: 'ИИ и бизнес',
      readTime: '5 мин',
      date: '15 янв 2025',
      image: '/blog/ai-conversion.jpg',
      link: '/blog/ai-increases-conversion'
    },
    {
      id: 2,
      title: 'SEO в 2025: что изменилось и как адаптироваться',
      excerpt: 'Новые алгоритмы поисковых систем требуют нового подхода. Разбираем актуальные стратегии продвижения.',
      category: 'SEO',
      readTime: '7 мин',
      date: '12 янв 2025',
      image: '/blog/seo-2025.jpg',
      link: '/blog/seo-2025-guide'
    },
    {
      id: 3,
      title: '10 ошибок в UX, которые убивают продажи',
      excerpt: 'Даже небольшие недочеты в пользовательском опыте могут стоить вам тысячи клиентов. Разбираем типичные ошибки.',
      category: 'UX/UI',
      readTime: '6 мин',
      date: '8 янв 2025',
      image: '/blog/ux-mistakes.jpg',
      link: '/blog/ux-mistakes-that-kill-sales'
    },
    {
      id: 4,
      title: 'Чат-боты на ИИ: автоматизация клиентского сервиса',
      excerpt: 'Как внедрить умного ИИ-ассистента и сократить расходы на поддержку клиентов на 60%.',
      category: 'Автоматизация',
      readTime: '8 мин',
      date: '5 янв 2025',
      image: '/blog/ai-chatbots.jpg',
      link: '/blog/ai-chatbots-customer-service'
    },
    {
      id: 5,
      title: 'Персонализация контента с помощью ML',
      excerpt: 'Machine Learning позволяет показывать каждому пользователю уникальный контент, увеличивая вовлеченность.',
      category: 'ИИ и бизнес',
      readTime: '6 мин',
      date: '2 янв 2025',
      image: '/blog/ml-personalization.jpg',
      link: '/blog/ml-content-personalization'
    },
    {
      id: 6,
      title: 'Аналитика поведения: как понять ваших клиентов',
      excerpt: 'Глубокий анализ поведения пользователей помогает принимать правильные решения и увеличивать прибыль.',
      category: 'Аналитика',
      readTime: '7 мин',
      date: '29 дек 2024',
      image: '/blog/behavior-analytics.jpg',
      link: '/blog/user-behavior-analytics'
    }
  ];

  return (
    <section className="blog">
      <div className="blog__container">
        <div className="blog__header">
          <div className="blog__header-content">
            <h2 className="blog__title">Блог и исследования</h2>
            <p className="blog__subtitle">
              Делимся опытом, инсайтами и актуальными трендами в digital-индустрии
            </p>
          </div>
          <a href="/blog" className="blog__view-all">
            Все статьи
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

        <div className="blog__grid">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className={`blog__card ${hoveredCard === post.id ? 'blog__card--hovered' : ''} ${index === 0 ? 'blog__card--featured' : ''}`}
              onMouseEnter={() => setHoveredCard(post.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="blog__card-image">
                <div className="blog__card-image-placeholder">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                  </svg>
                </div>
                <div className="blog__card-overlay"></div>
                <span className="blog__card-category">{post.category}</span>
              </div>

              <div className="blog__card-content">
                <div className="blog__card-meta">
                  <span className="blog__card-date">{post.date}</span>
                  <span className="blog__card-divider">•</span>
                  <span className="blog__card-read-time">{post.readTime}</span>
                </div>

                <h3 className="blog__card-title">{post.title}</h3>
                <p className="blog__card-excerpt">{post.excerpt}</p>

                <a href={post.link} className="blog__card-link">
                  Читать полностью
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
