import { useState, useEffect } from 'react';
import './AboutUsSection.scss';

const AboutUsSection = () => {
  const titles = ['маркетологи', 'разработчики', 'дизайнеры', 'аналитики'];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseEnd = 2000;
    const pauseStart = 500;

    if (!isDeleting && charIndex === currentTitle.length) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseEnd);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && charIndex === 0) {
      const timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      }, pauseStart);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentTitle.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else {
        setDisplayText(currentTitle.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentTitleIndex, titles]);

  return (
    <section className="aboutus">
      <div className="aboutus__container">
        <div className="aboutus__content">
          <h2 className="aboutus__title">
            Мы {displayText}
            <span className="aboutus__cursor"></span>
          </h2>
          <p className="aboutus__description">
            Мы команда разработчиков, дизайнеров и продакт-специалистов создающие
            digital-решения, которые развивают бизнес. Наш подход - Start. Keep.
            Transform. Каждый сервис-бизнес должен иметь мощное digital-присутствие.
            Мы стремимся упростить путь от идеи до готового сайта, который работает как
            инструмент продаж.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
