import React from 'react';
import './ComparisonSection.scss';

const ComparisonSection = () => {
  const comparisonData = [
    {
      feature: 'ИИ-интеграция',
      us: true,
      others: false,
      description: 'Встроенные AI-решения для автоматизации'
    },
    {
      feature: 'Бесплатная аналитика',
      us: true,
      others: false,
      description: 'Выполняем глубокий анализ веб-сайта и рынка'
    },
    {
      feature: 'Срок запуска',
      us: '2-4 недели',
      others: '2-3 месяца',
      description: 'Быстрый старт без потери качества'
    },
    {
      feature: 'Бесплатная техподдержка',
      us: 'Пожизненно',
      others: 'Ограниченно',
      description: 'Пожизненная поддержка проекта без доплат'
    },
    {
      feature: 'SEO-оптимизация',
      us: true,
      others: 'За доплату',
      description: 'Включена в базовый пакет'
    },
    {
      feature: 'Аналитика и отчёты',
      us: 'В любой момент',
      others: 'Раз в месяц',
      description: 'Регулярные отчёты о метриках'
    },
    {
      feature: 'Персональный менеджер',
      us: true,
      others: false,
      description: 'Выделенный менеджер для вашего проекта'
    },
    {
      feature: 'А/В-тестирование',
      us: 'Возможно',
      others: 'Не предусмотрено',
      description: 'Создаем и тестируем варианты страниц'
    }
  ];

  const renderValue = (value) => {
    if (value === true) {
      return (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity="0.1"/>
          <path d="M7 12L10.5 15.5L17 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    }
    if (value === false) {
      return (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity="0.1"/>
          <path d="M8 8L16 16M16 8L8 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      );
    }
    return <span className="comparison__value-text">{value}</span>;
  };

  return (
    <section className="comparison">
      <div className="comparison__container">
        <div className="comparison__header">
          <h2 className="comparison__title">Почему выбирают нас</h2>
          <p className="comparison__subtitle">
            Честное сравнение наших услуг с рынком
          </p>
        </div>

        <div className="comparison__table-wrapper">
          <div className="comparison__table">
            <div className="comparison__table-header">
              <div className="comparison__header-cell comparison__header-cell--feature">
                Критерий
              </div>
              <div className="comparison__header-cell comparison__header-cell--us">
                Мы (SKT Agency)
              </div>
              <div className="comparison__header-cell comparison__header-cell--others">
                Другие агентства
              </div>
            </div>

            <div className="comparison__table-body">
              {comparisonData.map((item, index) => (
                <div
                  key={index}
                  className="comparison__row"
                  style={{ '--delay': `${index * 0.1}s` }}
                >
                  <div className="comparison__cell comparison__cell--feature">
                    <span className="comparison__feature-name">{item.feature}</span>
                    <span className="comparison__feature-description">{item.description}</span>
                  </div>
                  <div className="comparison__cell comparison__cell--us">
                    {renderValue(item.us)}
                  </div>
                  <div className="comparison__cell comparison__cell--others">
                    {renderValue(item.others)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="comparison__footer">
          <p className="comparison__footer-text">
            Всё ради вашего успеха в интернете!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
