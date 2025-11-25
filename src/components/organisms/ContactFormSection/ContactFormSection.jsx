import React, { useState } from 'react';
import './ContactFormSection.scss';

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь логика отправки данных
    console.log('Form submitted:', formData);
    setIsSubmitted(true);

    // Сброс формы через 3 секунды
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '' });
    }, 3000);
  };

  return (
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

          {!isSubmitted ? (
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
          ) : (
            <div className="contact-form-section__success">
              <div className="success-checkmark">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity="0.1"/>
                  <path d="M7 12L10.5 15.5L17 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="contact-form-section__success-text">
                Спасибо! Мы свяжемся с вами в ближайшее время
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
