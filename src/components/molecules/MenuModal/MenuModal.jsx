import { useEffect, useState } from 'react';
import './MenuModal.scss';

const MenuModal = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setTimeout(() => setIsAnimating(true), 10);
      document.body.style.overflow = 'hidden';
    } else {
      setIsAnimating(false);
      const timer = setTimeout(() => setIsVisible(false), 500);
      document.body.style.overflow = 'unset';
      return () => clearTimeout(timer);
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isVisible) return null;

  const menuItems = [
    { title: 'Веб-разработчик', path: '#web-dev' },
    { title: 'Услуги', path: '#services' },
    { title: 'Портфолио', path: '#portfolio' },
    { title: 'Работа в Далее', path: '#careers' },
    { title: 'Блог', path: '#blog' },
    { title: 'Контакты', path: '#contacts' }
  ];

  return (
    <div className={`menu-modal ${isAnimating ? 'menu-modal--open' : ''}`}>
      <div className="menu-modal__overlay" onClick={onClose}></div>

      <div className="menu-modal__content">
        <div className="menu-modal__header">
          <div className="menu-modal__logo">
            <h1>SKT Agency</h1>
          </div>
          <button className="menu-modal__close" onClick={onClose}>
            <span>Закрыть</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
            </svg>
          </button>
        </div>

        <nav className="menu-modal__nav">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.path}
              className="menu-modal__link"
              onClick={onClose}
              style={{ animationDelay: `${0.1 + index * 0.05}s` }}
            >
              <span className="menu-modal__link-text">{item.title}</span>
              <svg className="menu-modal__link-arrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
              </svg>
            </a>
          ))}
        </nav>

      </div>
    </div>
  );
};

export default MenuModal;
