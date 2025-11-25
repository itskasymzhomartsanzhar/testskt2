import { useState, useEffect, useRef } from 'react';
import './WorkProcessSection.scss';

const WorkProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef([]);

  const steps = [
    {
      id: 1,
      number: '01',
      title: 'Консультация и анализ',
      description: 'Детально изучаем ваш бизнес, целевую аудиторию и конкурентов. Определяем цели проекта и ключевые метрики успеха.',
      duration: '1-2 дня',
      deliverables: ['Бриф проекта', 'Анализ конкурентов', 'Техническое задание'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
        </svg>
      )
    },
    {
      id: 2,
      number: '02',
      title: 'Стратегия и прототипирование',
      description: 'Разрабатываем архитектуру проекта, создаем wireframes и интерактивные прототипы для тестирования пользовательских сценариев.',
      duration: '3-5 дней',
      deliverables: ['Карта пользовательских путей', 'Wireframes', 'Интерактивный прототип'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
        </svg>
      )
    },
    {
      id: 3,
      number: '03',
      title: 'Дизайн и визуализация',
      description: 'Создаем уникальный дизайн, который отражает ценности вашего бренда и обеспечивает максимальную конверсию.',
      duration: '5-10 дней',
      deliverables: ['UI Kit', 'Дизайн всех страниц', 'Адаптивные версии', 'Гайдлайн'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
        </svg>
      )
    },
    {
      id: 4,
      number: '04',
      title: 'Разработка и интеграция',
      description: 'Пишем чистый, оптимизированный код с использованием современных технологий. Интегрируем ИИ-решения и аналитику.',
      duration: '10-20 дней',
      deliverables: ['Frontend разработка', 'Backend API', 'Интеграция ИИ', 'Админ-панель'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
        </svg>
      )
    },
    {
      id: 5,
      number: '05',
      title: 'Тестирование и оптимизация',
      description: 'Проводим комплексное тестирование, оптимизируем производительность и исправляем все выявленные недочеты.',
      duration: '3-5 дней',
      deliverables: ['Тестовая документация', 'Исправление багов', 'Оптимизация скорости'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
        </svg>
      )
    },
    {
      id: 6,
      number: '06',
      title: 'Запуск и поддержка',
      description: 'Размещаем проект на production, настраиваем мониторинг и предоставляем техническую поддержку.',
      duration: 'Постоянно',
      deliverables: ['Развертывание', 'Обучение команды', 'Техподдержка 24/7', 'Документация'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      )
    }
  ];

  useEffect(() => {
    const sectionRef = document.querySelector('.work-process');
    let lastScrollY = window.scrollY;
    let isInSection = false;
    let sectionScrollProgress = 0;

    const handleScroll = () => {
      if (!sectionRef) return;

      const rect = sectionRef.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionBottom = rect.bottom;
      const windowHeight = window.innerHeight;
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY;

      // Проверяем, находимся ли мы в секции
      isInSection = sectionTop < windowHeight && sectionBottom > 0;

      if (isInSection) {
        // Увеличиваем или уменьшаем прогресс в зависимости от направления скролла
        sectionScrollProgress += scrollDelta * 0.5; // 0.5 - скорость переключения

        // Ограничиваем прогресс
        const maxProgress = (steps.length - 1) * 100;
        sectionScrollProgress = Math.max(0, Math.min(maxProgress, sectionScrollProgress));

        // Вычисляем активный шаг на основе прогресса
        const newActiveStep = Math.round(sectionScrollProgress / 100);

        if (newActiveStep !== activeStep && newActiveStep >= 0 && newActiveStep < steps.length) {
          setActiveStep(newActiveStep);

          // Прокручиваем горизонтальный скролл к активному элементу
          const timeline = document.querySelector('.work-process__timeline');
          const activeElement = stepRefs.current[newActiveStep];

          if (timeline && activeElement) {
            const scrollLeft = activeElement.offsetLeft - (timeline.offsetWidth / 2) + (activeElement.offsetWidth / 2);
            timeline.scrollTo({
              left: scrollLeft,
              behavior: 'smooth'
            });
          }
        }
      }

      lastScrollY = currentScrollY;
    };

    // Добавляем слушатель скролла
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Вызываем сразу для инициализации
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeStep, steps.length]);

  return (
    <section className="work-process">
      <div className="work-process__container">
        <div className="work-process__header">
          <h2 className="work-process__title">Как мы работаем</h2>
          <p className="work-process__subtitle">
            Прозрачный процесс разработки с полным контролем на каждом этапе
          </p>
        </div>

        <div className="work-process__timeline">
          {steps.map((step, index) => (
            <div
              key={step.id}
              ref={(el) => (stepRefs.current[index] = el)}
              className={`work-process__step ${activeStep === index ? 'work-process__step--active' : ''}`}
            >
              <div className="work-process__step-line">
                <div className="work-process__step-dot"></div>
                {index < steps.length - 1 && (
                  <div className="work-process__step-connector"></div>
                )}
              </div>

              <div className="work-process__step-content">
                <div className="work-process__step-header">
                  <div className="work-process__step-icon">{step.icon}</div>
                  <div className="work-process__step-info">
                    <span className="work-process__step-number">{step.number}</span>
                    <h3 className="work-process__step-title">{step.title}</h3>
                    <span className="work-process__step-duration">{step.duration}</span>
                  </div>
                </div>

                <p className="work-process__step-description">{step.description}</p>

                <div className="work-process__deliverables">
                  <h4 className="work-process__deliverables-title">Что получите:</h4>
                  <ul className="work-process__deliverables-list">
                    {step.deliverables.map((item, idx) => (
                      <li key={idx} className="work-process__deliverable-item">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="work-process__cta">
          <div className="work-process__cta-content">
            <h3 className="work-process__cta-title">Готовы начать проект?</h3>
            <p className="work-process__cta-text">
              Обсудим ваши задачи и предложим оптимальное решение
            </p>
          </div>
          <button className="work-process__cta-button">
            Начать сотрудничество
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkProcessSection;
