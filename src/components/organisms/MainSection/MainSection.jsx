import { useEffect, useRef, useState } from 'react';
import PriceCalculatorModal from '@/components/molecules/PriceCalculatorModal/PriceCalculatorModal';
import './MainSection.scss';

const MainSection = () => {
  const shapesRef = useRef([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeCard, setActiveCard] = useState('stat1');
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  useEffect(() => {
    const animateShapes = () => {
      shapesRef.current.forEach((shape, index) => {
        if (!shape) return;

        const time = Date.now() * 0.001;
        const speed = 0.3 + index * 0.15;
        const rotationX = Math.sin(time * speed) * 360;
        const rotationY = Math.cos(time * speed) * 360;

        shape.style.transform = `rotate3d(1, 1, 0, ${rotationX + rotationY}deg)`;
      });

      requestAnimationFrame(animateShapes);
    };

    const animationId = requestAnimationFrame(animateShapes);
    return () => cancelAnimationFrame(animationId);
  }, []);

  useEffect(() => {
    // Отключаем автоплей на мобильных устройствах
    const isMobile = window.innerWidth <= 640;
    if (!isAutoPlay || isMobile) return;

    const statCards = ['stat1', 'stat2', 'stat3', 'stat4'];
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % statCards.length;
      setActiveCard(statCards[currentIndex]);
    }, 1500);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const handleMouseEnter = (card) => {
    setIsAutoPlay(false);
    setHoveredCard(card);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
    setIsAutoPlay(true);
  };

  return (
    <section className="mainsection">
      <div className="mainsection__grid"></div>
      <div className="mainsection__content">
        <h1 className="mainsection__title">
          Получайте больше клиентов<span className="mainsection__title-gradient"> с ИИ-решениями</span>, которые работают 24/7


        </h1>
{/*                 <h1 className="mainsection__title">
          Трансформируем ваш бизнес<br />
          с помощью <span className="mainsection__title-gradient">силы ИИ</span>
        </h1> */}
        <p className="mainsection__description">
          Молодое digital-агентство, которое разрабатывает продающие и эффективные 
          digital-продукты, помогая бизнесам расти, улучшаться и привлекать больше клиентов.
        </p>
        
        <div className="mainsection__buttons">
          <button
            onClick={() => setIsCalculatorOpen(true)}
            className="mainsection__button mainsection__button--primary"
          >
            Рассчитать стоимость
          </button>
          <a href="#about" className="mainsection__button mainsection__button--secondary">
            Получить консультацию
          </a>
        </div>
        


        <div className="mainsection__stats">
          <div
            className={`mainsection__stat-card ${
              hoveredCard === 'stat1' || (isAutoPlay && activeCard === 'stat1')
                ? 'mainsection__stat-card--hovered'
                : ''
            }`}
            onMouseEnter={() => handleMouseEnter('stat1')}
            onMouseLeave={handleMouseLeave}
          >
            <div className="mainsection__stat-content">
              <div className="mainsection__stat-number">68+</div>
              <div className="mainsection__stat-label">Возможностей ИИ моделей в IT и маркетинге</div>
            </div>

          </div>

          <div
            className={`mainsection__stat-card ${
              hoveredCard === 'stat2' || (isAutoPlay && activeCard === 'stat2')
                ? 'mainsection__stat-card--hovered'
                : ''
            }`}
            onMouseEnter={() => handleMouseEnter('stat2')}
            onMouseLeave={handleMouseLeave}
          >
            <div className="mainsection__stat-content">
              <div className="mainsection__stat-number">147%</div>
              <div className="mainsection__stat-label">Роста в бизнесе вместе с ИИ инструментами</div>
            </div>
          </div>

          <div
            className={`mainsection__stat-card ${
              hoveredCard === 'stat3' || (isAutoPlay && activeCard === 'stat3')
                ? 'mainsection__stat-card--hovered'
                : ''
            }`}
            onMouseEnter={() => handleMouseEnter('stat3')}
            onMouseLeave={handleMouseLeave}
          >
            <div className="mainsection__stat-content">
              <div className="mainsection__stat-number">99%</div>
              <div className="mainsection__stat-label">Проектов успешно выпущенно на Production</div>
            </div>
          </div>

          <div
            className={`mainsection__stat-card ${
              hoveredCard === 'stat4' || (isAutoPlay && activeCard === 'stat4')
                ? 'mainsection__stat-card--hovered'
                : ''
            }`}
            onMouseEnter={() => handleMouseEnter('stat4')}
            onMouseLeave={handleMouseLeave}
          >
            <div className="mainsection__stat-content">
              <div className="mainsection__stat-number">3+</div>
              <div className="mainsection__stat-label">Опыт в релевантных годах у каждого сотрудника штаба</div>
            </div>
          </div>
        </div>

        <div className="mainsection__trust">
          <p className="mainsection__trust-text">Также можете знать нас</p>
          <div className="mainsection__logos">
            <div className="mainsection__logo">SKT Community</div>
            <div className="mainsection__logo">SKT Careers</div>
            <div className="mainsection__logo">SKT Design</div>
            <div className="mainsection__logo">SKT Products</div>
          </div>
        </div>

      </div>

      <PriceCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
      />
    </section>
  );
};

export default MainSection;