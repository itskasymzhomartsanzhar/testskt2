import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProjectsSection.scss';

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Веб разработка',
      description: 'Современная платформа электронной коммерции с интеграцией ИИ для персонализации',
      image: '/projects/ecommerce.jpg',
      tags: ['React', 'Node.js', 'AI'],
      year: '2024'
    },
    {
      id: 2,
      title: 'FinTech Dashboard',
      category: 'UI/UX Дизайн',
      description: 'Интуитивная панель управления для финансовых аналитиков',
      image: '/projects/fintech.jpg',
      tags: ['Figma', 'Analytics', 'Dashboard'],
      year: '2024'
    },
    {
      id: 3,
      title: 'Healthcare App',
      category: 'Мобильная разработка',
      description: 'Мобильное приложение для мониторинга здоровья с ИИ-ассистентом',
      image: '/projects/healthcare.jpg',
      tags: ['React Native', 'AI', 'Health'],
      year: '2023'
    },
    {
      id: 4,
      title: 'Real Estate Portal',
      category: 'Веб разработка',
      description: 'Портал недвижимости с виртуальными турами и 3D-визуализацией',
      image: '/projects/realestate.jpg',
      tags: ['Next.js', '3D', 'VR'],
      year: '2023'
    }
  ];

  return (
    <section className="projects">
      <div className="projects__container">
        <div className="projects__header">
          <div className="projects__header-content">
            <h2 className="projects__title">
              Последние <span className="projects__title-accent">проекты</span>
            </h2>
            <p className="projects__subtitle">
              Посмотрите последние проекты наших клиентов, которыми мы гордимся
            </p>
          </div>
          <Link to="/projects" className="projects__view-all">
            Все проекты
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>

        <div className="projects__grid">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className={`projects__card ${hoveredProject === project.id ? 'projects__card--hovered' : ''}`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="projects__card-image">
                <div className="projects__card-overlay"></div>
                <div className="projects__card-year">{project.year}</div>
              </div>

              <div className="projects__card-content">
                <div className="projects__card-header">
                  <span className="projects__card-category">{project.category}</span>
                  <div className="projects__card-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7v10"/>
                    </svg>
                  </div>
                </div>

                <h3 className="projects__card-title">{project.title}</h3>
                <p className="projects__card-description">{project.description}</p>

                <div className="projects__card-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="projects__card-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="projects__cta">
          <Link to="/contact" className="projects__cta-button">
            Обсудить проект
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
