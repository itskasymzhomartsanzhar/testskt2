import React, { useState, useEffect } from 'react';
import './ContactFormSection.scss';

const WelcomeThankYou = () => {
  const [showSecondText, setShowSecondText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSecondText(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="welcome">
      <div className="welcome__circle"></div>
      <div className="welcome__text">
        {!showSecondText ? (
          <span className="welcome__text-first">Спасибо</span>
        ) : (
          <span className="welcome__text-second">SKT Agency</span>
        )}
      </div>
    </div>
  );
};

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });
  const [showWelcome, setShowWelcome] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    // Показываем Welcome модалку
    setShowWelcome(true);

    // Скрываем Welcome модалку и сбрасываем форму через 3 секунды
    setTimeout(() => {
      setShowWelcome(false);
      setFormData({ name: '', phone: '' });
    }, 3000);
  };

  return (
    <>
      <section className="contact-form-section">
        <div className="contact-form-section__container">
          <div className="contact-form-section__content">
            <div className="contact-form-section__header">
              <h2 className="contact-form-section__title">
                Готовы начать работу?
              </h2>
              <p className="contact-form-section__subtitle">
                Оставьте свои контакты, и мы свяжемся с вами в ближайшее время
              </p>
            </div>

            <form className="contact-form-section__form" onSubmit={handleSubmit}>
              <div className="contact-form-section__fields">
                <div className="contact-form-section__field">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ваше имя"
                    className="contact-form-section__input"
                    required
                  />
                </div>
                <div className="contact-form-section__field">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+7 (___) ___-__-__"
                    className="contact-form-section__input"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="contact-form-section__submit"
                >
                  Отправить
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {showWelcome && <WelcomeThankYou />}
    </>
  );
};

export default ContactFormSection;
