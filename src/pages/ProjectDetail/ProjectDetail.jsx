import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/molecules/Navbar/Navbar';
import Footer from '@/components/organisms/Footer/Footer';
import './ProjectDetail.scss';

const ProjectDetail = () => {
  const { id } = useParams();

  // В реальном приложении данные будут загружаться из API
  const projectsData = {
    1: {
      title: 'E-Commerce Platform',
      category: 'Веб разработка',
      year: '2024',
      client: 'Fashion Store Inc.',
      duration: '6 месяцев',
      team: '8 специалистов',
      description: 'Создали современную платформу электронной коммерции с интеграцией искусственного интеллекта для персонализации пользовательского опыта.',
      challenge: 'Клиенту требовалась масштабируемая платформа с высокой производительностью, способная обрабатывать тысячи транзакций одновременно и предоставлять персонализированные рекомендации.',
      solution: 'Разработали микросервисную архитектуру с использованием React, Node.js и ML-алгоритмов. Внедрили систему рекомендаций на основе поведения пользователей и A/B тестирование.',
      results: [
        '147% увеличение конверсии',
        '89% рост среднего чека',
        '3x быстрее загрузка страниц',
        '99.9% время безотказной работы'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'TensorFlow', 'Docker', 'Kubernetes'],
      images: [
        '/projects/ecommerce-1.jpg',
        '/projects/ecommerce-2.jpg',
        '/projects/ecommerce-3.jpg'
      ]
    },
    2: {
      title: 'FinTech Dashboard',
      category: 'UI/UX Дизайн',
      year: '2024',
      client: 'Investment Group',
      duration: '4 месяца',
      team: '5 специалистов',
      description: 'Разработали интуитивную панель управления для финансовых аналитиков с продвинутой визуализацией данных.',
      challenge: 'Необходимо было создать интерфейс, который позволяет работать с большими объемами финансовых данных и сложной аналитикой, при этом оставаясь простым и понятным.',
      solution: 'Провели глубокое исследование пользователей, создали информационную архитектуру и разработали дизайн-систему. Внедрили интерактивные графики и настраиваемые виджеты.',
      results: [
        '65% сокращение времени на анализ',
        '92% положительных отзывов пользователей',
        '45% увеличение продуктивности аналитиков',
        'Победа в конкурсе UI/UX 2024'
      ],
      technologies: ['Figma', 'React', 'D3.js', 'Chart.js', 'TypeScript', 'Material-UI', 'Storybook'],
      images: [
        '/projects/fintech-1.jpg',
        '/projects/fintech-2.jpg',
        '/projects/fintech-3.jpg'
      ]
    },
    3: {
      title: 'Healthcare App',
      category: 'Мобильная разработка',
      year: '2023',
      client: 'Medical Center',
      duration: '8 месяцев',
      team: '10 специалистов',
      description: 'Создали мобильное приложение для мониторинга здоровья с ИИ-ассистентом и интеграцией с медицинскими устройствами.',
      challenge: 'Разработать безопасное и надежное приложение для работы с медицинскими данными, соответствующее всем регуляторным требованиям.',
      solution: 'Реализовали end-to-end шифрование, интегрировали с медицинскими устройствами через Bluetooth, создали ИИ-ассистента для анализа показателей здоровья.',
      results: [
        '50,000+ активных пользователей',
        '4.8 рейтинг в App Store',
        '30% улучшение показателей здоровья',
        'Сертификация HIPAA'
      ],
      technologies: ['React Native', 'Python', 'TensorFlow', 'Firebase', 'MongoDB', 'Bluetooth API', 'HealthKit'],
      images: [
        '/projects/healthcare-1.jpg',
        '/projects/healthcare-2.jpg',
        '/projects/healthcare-3.jpg'
      ]
    },
    4: {
      title: 'Real Estate Portal',
      category: 'Веб разработка',
      year: '2023',
      client: 'RealEstate Pro',
      duration: '5 месяцев',
      team: '7 специалистов',
      description: 'Разработали портал недвижимости с виртуальными турами, 3D-визуализацией и интеграцией карт.',
      challenge: 'Создать иммерсивный опыт просмотра недвижимости онлайн с высококачественной 3D-визуализацией и виртуальными турами.',
      solution: 'Внедрили WebGL для 3D-визуализации, интегрировали с платформой виртуальных туров, добавили AR-функционал для просмотра мебели в помещениях.',
      results: [
        '78% увеличение времени на сайте',
        '56% рост заявок на просмотр',
        '120% увеличение закрытых сделок',
        '15,000 виртуальных туров в месяц'
      ],
      technologies: ['Next.js', 'Three.js', 'WebGL', 'Mapbox', 'Strapi', 'PostgreSQL', 'AWS S3'],
      images: [
        '/projects/realestate-1.jpg',
        '/projects/realestate-2.jpg',
        '/projects/realestate-3.jpg'
      ]
    }
  };

  const project = projectsData[id];

  if (!project) {
    return (
      <div className="project-detail">
        <Navbar />
        <div className="project-detail__not-found">
          <h1>Проект не найден</h1>
          <Link to="/">Вернуться на главную</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="project-detail">
      <Navbar />

      {/* Hero Section */}
      <section className="project-detail__hero">
        <div className="project-detail__hero-bg"></div>
        <div className="project-detail__hero-container">
          <Link to="/" className="project-detail__back">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Назад
          </Link>

          <div className="project-detail__hero-content">
            <span className="project-detail__category">{project.category}</span>
            <h1 className="project-detail__title">{project.title}</h1>
            <p className="project-detail__description">{project.description}</p>

            <div className="project-detail__meta">
              <div className="project-detail__meta-item">
                <span className="project-detail__meta-label">Клиент</span>
                <span className="project-detail__meta-value">{project.client}</span>
              </div>
              <div className="project-detail__meta-item">
                <span className="project-detail__meta-label">Год</span>
                <span className="project-detail__meta-value">{project.year}</span>
              </div>
              <div className="project-detail__meta-item">
                <span className="project-detail__meta-label">Длительность</span>
                <span className="project-detail__meta-value">{project.duration}</span>
              </div>
              <div className="project-detail__meta-item">
                <span className="project-detail__meta-label">Команда</span>
                <span className="project-detail__meta-value">{project.team}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="project-detail__content">
        <div className="project-detail__container">
          {/* Challenge */}
          <div className="project-detail__section">
            <h2 className="project-detail__section-title">Задача</h2>
            <p className="project-detail__section-text">{project.challenge}</p>
          </div>

          {/* Solution */}
          <div className="project-detail__section">
            <h2 className="project-detail__section-title">Решение</h2>
            <p className="project-detail__section-text">{project.solution}</p>
          </div>

          {/* Results */}
          <div className="project-detail__section">
            <h2 className="project-detail__section-title">Результаты</h2>
            <div className="project-detail__results">
              {project.results.map((result, index) => (
                <div key={index} className="project-detail__result-card">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  <span>{result}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="project-detail__section">
            <h2 className="project-detail__section-title">Технологии</h2>
            <div className="project-detail__technologies">
              {project.technologies.map((tech, index) => (
                <span key={index} className="project-detail__tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="project-detail__cta">
        <div className="project-detail__cta-container">
          <h2 className="project-detail__cta-title">Готовы начать свой проект?</h2>
          <p className="project-detail__cta-text">
            Свяжитесь с нами, чтобы обсудить, как мы можем помочь вашему бизнесу
          </p>
          <Link to="/contact" className="project-detail__cta-button">
            Обсудить проект
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
