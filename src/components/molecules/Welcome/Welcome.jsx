import { useState, useEffect } from 'react';
import './Welcome.scss';

const Welcome = () => {
  const [showSecondText, setShowSecondText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSecondText(true);
    }, 1000); // Заменяем текст через 1 секунду

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="welcome">
      <div className="welcome__circle"></div>
      <div className="welcome__text">
        {!showSecondText ? (
          <span className="welcome__text-first">Добро пожаловать</span>
        ) : (
          <span className="welcome__text-second">SKT Agency</span>
        )}
      </div>
    </div>
  );
};

export default Welcome;
