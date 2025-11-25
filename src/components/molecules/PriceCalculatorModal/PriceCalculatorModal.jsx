import { useState, useEffect } from 'react';
import './PriceCalculatorModal.scss';

const PriceCalculatorModal = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    phone: '+',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showCheckmark, setShowCheckmark] = useState(false);

  const questions = [
    {
      id: 'projectType',
      title: 'Какой тип проекта вам нужен?',
      subtitle: 'Выберите наиболее подходящий вариант',
      options: [
        { value: 'landing', label: 'Лендинг', price: 150000 },
        { value: 'corporate', label: 'Корпоративный сайт', price: 350000 },
        { value: 'ecommerce', label: 'Интернет-магазин', price: 500000 },
        { value: 'service', label: 'Сервис', price: 500000 },
        { value: 'custom', label: 'Не стандартная разработка', price: 800000 },
        { value: 'idontknow', label: 'Не могу ответить', price: 500000 },
      ]
    },
    {
      id: 'pages',
      title: 'Количество страниц',
      subtitle: 'Выберите примерное количество',
      options: [
        { value: '1-3', label: '1-3 страницы', price: 0 },
        { value: '4-7', label: '4-7 страниц', price: 100000 },
        { value: '8-15', label: '8-15 страниц', price: 250000 },
        { value: '15+', label: '15+ страниц', price: 500000 }
      ]
    },
    {
      id: 'salesPlan',
      title: 'Есть ли готовый план увеличить продажи?',
      subtitle: 'Мы предоставляем услуги по разработке стратегии',
      options: [
        { value: 'yes', label: 'Да, есть готовая стратегия', price: 0 },
        { value: 'partial', label: 'Частично разработан', price: 50000 },
        { value: 'no', label: 'Нет, нужна помощь', price: 150000 }
      ]
    },
    {
      id: 'budget',
      title: 'Какой у вас бюджет?',
      subtitle: 'Выберите диапазон бюджета',
      options: [
        { value: 'low', label: 'До 300 000 ₸', price: 0 },
        { value: 'medium', label: '300 000 - 700 000 ₸', price: 0 },
        { value: 'high', label: '700 000 - 1 500 000 ₸', price: 0 },
        { value: 'premium', label: 'Более 1 500 000 ₸', price: 0 }
      ]
    },
    {
      id: 'design',
      title: 'Есть ли готовый дизайн?',
      subtitle: 'Наличие готового дизайна влияет на сроки',
      options: [
        { value: 'ready', label: 'Да, есть готовый дизайн', price: 0 },
        { value: 'sketches', label: 'Есть наброски/референсы', price: 100000 },
        { value: 'no', label: 'Нет, нужен дизайн с нуля', price: 200000 }
      ]
    }
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setCurrentStep(0);
      setAnswers({});
      setFormData({ name: '', phone: '+', email: '' });
      setIsSuccess(false);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handlePhoneChange = (e) => {
    let value = e.target.value;

    // Убираем все символы кроме цифр и плюса
    value = value.replace(/[^\d+]/g, '');

    // Если пользователь пытается удалить +, возвращаем его
    if (!value.startsWith('+')) {
      value = '+' + value.replace(/\+/g, '');
    }

    // Оставляем только один + в начале
    if (value.length > 1) {
      value = '+' + value.slice(1).replace(/\+/g, '');
    }

    // Ограничиваем длину (+ и максимум 12 цифр)
    if (value.length > 15) {
      value = value.slice(0, 15);
    }

    setFormData({ ...formData, phone: value });
  };

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleAnswer = (questionId, value) => {
    const question = questions.find(q => q.id === questionId);

    if (question.multiple) {
      const currentAnswers = answers[questionId] || [];

      if (value === 'none') {
        setAnswers({ ...answers, [questionId]: ['none'] });
      } else {
        const newAnswers = currentAnswers.includes(value)
          ? currentAnswers.filter(v => v !== value && v !== 'none')
          : [...currentAnswers.filter(v => v !== 'none'), value];

        setAnswers({ ...answers, [questionId]: newAnswers });
      }
    } else {
      setAnswers({ ...answers, [questionId]: value });

      setTimeout(() => {
        if (currentStep < questions.length - 1) {
          setCurrentStep(currentStep + 1);
        } else {
          setCurrentStep(questions.length);
        }
      }, 300);
    }
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(questions.length);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getCurrencyInfo = () => {
    const phone = formData.phone;

    // Определяем валюту по коду страны
    if (phone.startsWith('+7')) {
      // Казахстан или Россия - проверяем по длине и первым цифрам
      const digits = phone.slice(2);
      // Казахстанские номера обычно начинаются с 7 (после +7)
      if (digits.startsWith('7') || digits.startsWith('6')) {
        return { code: 'KZT', symbol: '₸', rate: 1, name: 'тенге' };
      }
      // Российские номера
      return { code: 'RUB', symbol: '₽', rate: 0.19, name: 'рублей' }; // 1 KZT ≈ 0.19 RUB
    } else if (phone.startsWith('+375') || phone.startsWith('+996') ||
               phone.startsWith('+998') || phone.startsWith('+992') ||
               phone.startsWith('+993') || phone.startsWith('+994')) {
      // Другие страны СНГ - в долларах
      return { code: 'USD', symbol: '$', rate: 0.0022, name: 'долларов' }; // 1 KZT ≈ 0.0022 USD
    } else if (phone.startsWith('+380')) {
      // Украина - в долларах
      return { code: 'USD', symbol: '$', rate: 0.0022, name: 'долларов' };
    } else {
      // По умолчанию - доллары
      return { code: 'USD', symbol: '$', rate: 0.0022, name: 'долларов' };
    }
  };

  const calculatePrice = () => {
    let total = 0;

    questions.forEach(question => {
      const answer = answers[question.id];

      if (!answer) return;

      if (question.multiple && Array.isArray(answer)) {
        answer.forEach(value => {
          const option = question.options.find(opt => opt.value === value);
          if (option) total += option.price;
        });
      } else {
        const option = question.options.find(opt => opt.value === answer);
        if (option) {
          if (option.multiplier) {
            total = total * option.multiplier;
          }
          total += option.price;
        }
      }
    });

    return total;
  };

  const getFormattedPrice = () => {
    const priceInKZT = calculatePrice();
    const currency = getCurrencyInfo();
    const convertedPrice = priceInKZT * currency.rate;

    if (currency.code === 'KZT') {
      return `от ${(convertedPrice / 1000).toFixed(0)} 000 ${currency.symbol}`;
    } else if (currency.code === 'RUB') {
      return `от ${Math.round(convertedPrice).toLocaleString('ru-RU')} ${currency.symbol}`;
    } else {
      return `от $${Math.round(convertedPrice).toLocaleString('en-US')}`;
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const estimatedPrice = calculatePrice();

    const submissionData = {
      ...formData,
      answers,
      estimatedPrice,
      timestamp: new Date().toISOString()
    };

    console.log('Отправка данных:', submissionData);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setShowCheckmark(true);
      }, 100);
    }, 1500);
  };

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / (questions.length + 1)) * 100;
  const isFormStep = currentStep === questions.length;

  const canProceed = () => {
    if (isFormStep) return false;
    const question = questions[currentStep];
    const answer = answers[question.id];

    if (question.multiple) {
      return answer && answer.length > 0;
    }
    return !!answer;
  };

  return (
    <div className="price-calculator" onClick={handleBackdropClick}>
      <div className="price-calculator__modal">
      <div className="price-calculator__grid"></div>

        <div className="price-calculator__progress">
          <div className="price-calculator__progress-bar" style={{ width: `${progress}%` }}></div>
        </div>

        <div className="price-calculator__content">
          {!isFormStep && !isSuccess && (
            <>
              <div className="price-calculator__header">
                <div className="price-calculator__step">Шаг {currentStep + 1} из {questions.length}</div>
                <h2 className="price-calculator__title">{currentQuestion.title}</h2>
                <p className="price-calculator__subtitle">{currentQuestion.subtitle}</p>
              </div>

              <div className="price-calculator__options">
                {currentQuestion.options.map((option) => {
                  const isSelected = currentQuestion.multiple
                    ? answers[currentQuestion.id]?.includes(option.value)
                    : answers[currentQuestion.id] === option.value;

                  return (
                    <button
                      key={option.value}
                      className={`price-calculator__option ${isSelected ? 'price-calculator__option--selected' : ''}`}
                      onClick={() => handleAnswer(currentQuestion.id, option.value)}
                    >
                      <span className="price-calculator__option-label">{option.label}</span>
                      {isSelected && (
                        <span className="price-calculator__option-check"></span>
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="price-calculator__navigation">
                {currentStep > 0 && (
                  <button className="price-calculator__btn price-calculator__btn--back" onClick={handleBack}>
                    Назад
                  </button>
                )}
                {currentQuestion.multiple && (
                  <button
                    className="price-calculator__btn price-calculator__btn--next"
                    onClick={handleNext}
                    disabled={!canProceed()}
                  >
                    Далее
                  </button>
                )}
              </div>
            </>
          )}

          {isFormStep && !isSuccess && (
            <div className="price-calculator__form-wrapper">
              <div className="price-calculator__header">
                <h2 className="price-calculator__title">Получите расчет стоимости</h2>
                <p className="price-calculator__subtitle">Заполните форму и мы отправим вам подробное предложение</p>
              </div>

              <form className="price-calculator__form" onSubmit={handleFormSubmit}>
                <div className="price-calculator__field">
                  <label className="price-calculator__label">Ваше имя</label>
                  <input
                    type="text"
                    className="price-calculator__input"
                    placeholder="Введите ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="price-calculator__field">
                  <label className="price-calculator__label">Телефон</label>
                  <input
                    type="tel"
                    className="price-calculator__input"
                    placeholder="+7XXXXXXXXXX"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    pattern="^\+\d{10,15}$"
                    title="Введите номер телефона: +7XXXXXXXXXX (только цифры, без пробелов)"
                    required
                  />
                  <small className="price-calculator__hint">Введите корректный номер телефона</small>
                </div>


                <button
                  type="submit"
                  className="price-calculator__submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Отправка...' : 'Получить расчет'}
                </button>

                <button
                  type="button"
                  className="price-calculator__btn price-calculator__btn--back"
                  onClick={handleBack}
                >
                  Назад
                </button>
              </form>
            </div>
          )}

          {isSuccess && (
            <div className="price-calculator__success">
              <div className={`checkmark-wrapper ${showCheckmark ? 'show' : ''}`}>
                <div className="checkmark-circle">
                  <svg
                    className="checkmark"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 52 52"
                  >
                    <circle
                      className="checkmark-circle-path"
                      cx="26"
                      cy="26"
                      r="25"
                      fill="none"
                    />
                    <path
                      className="checkmark-check"
                      fill="none"
                      d="M14.1 27.2l7.1 7.2 16.7-16.8"
                    />
                  </svg>
                </div>
              </div>
              <h2 className="price-calculator__success-title">Заявка отправлена!</h2>
              <p className="price-calculator__success-text">
                Наш менеджер скоро свяжется с вами и отправит подробный расчет стоимости и проконсультирует по всем вопросам.
              </p>
              <div className="price-calculator__success-estimate">
                <div className="price-calculator__estimate-label">Примерная стоимость вашего проекта:</div>
                <div className="price-calculator__estimate-price">
                  от 181 000 ₸ / 28 000 ₽ / $350
                </div>
              </div>
              <button className="price-calculator__btn price-calculator__btn--primary" onClick={onClose}>
                Спасибо!
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PriceCalculatorModal;
